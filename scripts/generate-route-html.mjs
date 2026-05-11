/**
 * generate-route-html.mjs
 *
 * Post-build step that runs after `vite build`.
 *
 * 1. Reads dist/index.html and patches the JSON-LD block with release-aware
 *    fields (softwareVersion, downloadUrl, releaseNotes) sourced from
 *    src/content/release.ts.
 *
 * 2. Injects a static, crawler-visible body snapshot into #root so critical
 *    page copy exists in the raw HTML before React loads.
 *
 * 3. For each route, writes both dist/<route>.html and
 *    dist/<route>/index.html with route-specific title, description,
 *    canonical, og:*, twitter:* tags, and body snapshot so crawlers and social
 *    scrapers see correct content without JavaScript. The root .html aliases
 *    let GitHub Pages serve extensionless URLs such as /privacy without a
 *    trailing-slash redirect.
 *
 * 4. Writes the updated dist/index.html back and regenerates dist/404.html
 *    (the GitHub Pages SPA fallback) from the same patched base.
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const distDir = "dist";
const releaseFile = join("src", "content", "release.ts");

// ---------------------------------------------------------------------------
// Read release metadata from release.ts via simple regex
// ---------------------------------------------------------------------------
const releaseTs = readFileSync(releaseFile, "utf-8");
const version = releaseTs.match(/version:\s*"([^"]+)"/)?.[1] ?? "";
const dmgUrl = releaseTs.match(/dmgUrl:\s*"([^"]+)"/)?.[1] ?? "";
const releaseLabel =
  releaseTs.match(/betaLabel:\s*"([^"]+)"/)?.[1] ?? "Official Launch";
const appStoreUrl =
  "https://apps.apple.com/us/app/aira-notch-teleprompter/id6762571829?mt=12";
const productHuntUrl =
  "https://www.producthunt.com/products/aira-7?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-aira-8";

// ---------------------------------------------------------------------------
// Route definitions
// ---------------------------------------------------------------------------
const routes = [
  {
    path: "changelog",
    title: "Changelog — Aira",
    description:
      "Release notes and update history for Aira, the free Mac teleprompter.",
    canonical: "https://useaira.co/changelog",
    snapshot: "changelog",
  },
  {
    path: "privacy",
    title: "Privacy Policy — Aira",
    description:
      "Aira collects no personal data. Read the full privacy policy.",
    canonical: "https://useaira.co/privacy",
    snapshot: "privacy",
  },
  {
    path: "security",
    title: "Security — Aira",
    description:
      "Security policy and responsible disclosure for Aira Mac Teleprompter.",
    canonical: "https://useaira.co/security",
    snapshot: "security",
  },
  {
    path: "license",
    title: "License — Aira",
    description: "End user license agreement for Aira Mac Teleprompter.",
    canonical: "https://useaira.co/license",
    snapshot: "license",
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Replace a single attribute value inside an already-matched tag string.
 * Works whether the tag is on one line or spread over multiple lines.
 */
function replaceAttrInTag(tag, attr, value) {
  return tag.replace(new RegExp(`(\\b${attr}=")[^"]*"`), `$1${value}"`);
}

/**
 * Find the first occurrence of a tag matching tagPattern (must match the
 * complete tag including closing > or />) and swap one attribute's value.
 * tagPattern must have the `s` (dotAll) flag set.
 */
function patchTagAttr(html, tagPattern, attr, value) {
  return html.replace(tagPattern, (tag) => replaceAttrInTag(tag, attr, value));
}

function patchMeta(html, { title, description, canonical }) {
  let result = html;

  // <title>
  result = result.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);

  // <meta name="description" ...>
  result = patchTagAttr(
    result,
    /<meta\s[^>]*name="description"[^>]*\/?>/s,
    "content",
    description,
  );

  // <link rel="canonical" ...>
  result = patchTagAttr(
    result,
    /<link\s[^>]*rel="canonical"[^>]*\/?>/s,
    "href",
    canonical,
  );

  // <meta property="og:url" ...>
  result = patchTagAttr(
    result,
    /<meta\s[^>]*property="og:url"[^>]*\/?>/s,
    "content",
    canonical,
  );

  // <meta property="og:title" ...>
  result = patchTagAttr(
    result,
    /<meta\s[^>]*property="og:title"[^>]*\/?>/s,
    "content",
    title,
  );

  // <meta property="og:description" ...>
  result = patchTagAttr(
    result,
    /<meta\s[^>]*property="og:description"[^>]*\/?>/s,
    "content",
    description,
  );

  // <meta name="twitter:title" ...>
  result = patchTagAttr(
    result,
    /<meta\s[^>]*name="twitter:title"[^>]*\/?>/s,
    "content",
    title,
  );

  // <meta name="twitter:description" ...>
  result = patchTagAttr(
    result,
    /<meta\s[^>]*name="twitter:description"[^>]*\/?>/s,
    "content",
    description,
  );

  return result;
}

function patchJsonLd(html) {
  return html.replace(
    /(<script type="application\/ld\+json">)([\s\S]*?)(<\/script>)/,
    (match, open, json, close) => {
      try {
        const data = JSON.parse(json);
        if (version) data.softwareVersion = version;
        if (dmgUrl) data.downloadUrl = dmgUrl;
        data.releaseNotes = "https://useaira.co/changelog";
        return `${open}\n    ${JSON.stringify(data, null, 2).replace(/\n/g, "\n    ")}\n    ${close}`;
      } catch {
        return match;
      }
    },
  );
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function rootSnapshot(kind) {
  switch (kind) {
    case "changelog":
      return pageSnapshot({
        title: "Changelog",
        intro: "All notable changes to Aira are documented here.",
        sections: [
          {
            heading: version ? `Latest release: v${version}` : "Latest release",
            items: [
              "Voice-sync reliability, scrolling behavior, release packaging, and website metadata are tracked in public release notes.",
              "Download the latest release from the public release page.",
            ],
          },
        ],
      });
    case "privacy":
      return pageSnapshot({
        title: "Privacy Policy",
        intro:
          "Aira collects no personal data. Scripts, settings, and presenter session data stay on your Mac.",
        sections: [
          {
            heading: "Local-first app",
            items: [
              "Aira has no account system, no telemetry, no analytics, and no advertising trackers.",
              "Microphone access is used only during active presenter sessions for local speech-aware scrolling and highlighting.",
              "The website is served by GitHub Pages and does not include tracking scripts.",
            ],
          },
        ],
      });
    case "security":
      return pageSnapshot({
        title: "Security",
        intro:
          "Aira is built around local storage, on-device voice processing, signed releases, and no analytics.",
        sections: [
          {
            heading: "Application security",
            items: [
              "Scripts and settings are stored locally on your Mac.",
              "Word Matching Sync uses bundled offline speech recognition models with runtime downloads disabled.",
              "Aira releases are code-signed with Apple Developer ID and notarized by Apple.",
              "The website is served over HTTPS and downloads are hosted on GitHub Releases.",
            ],
          },
        ],
      });
    case "license":
      return pageSnapshot({
        title: "License",
        intro:
          "Aira is provided under an end user license agreement for the macOS teleprompter application.",
        sections: [
          {
            heading: "Use of Aira",
            items: [
              "The license covers the Aira application, updates, and related documentation.",
              "Aira is provided as a free download.",
            ],
          },
        ],
      });
    default:
      return homepageSnapshot();
  }
}

function pageSnapshot({ title, intro, sections }) {
  return `
    <div class="site-root static-html-snapshot">
      <header class="site-header">
        <div class="shell header-shell">
          <a href="/" aria-label="Aira home">Aira</a>
          <nav class="site-nav" aria-label="Primary">
            <a href="/#features">Features</a>
            <a href="/#controls">Controls</a>
            <a href="/#faq">FAQ</a>
            ${dmgUrl ? `<a class="button button-nav" href="${escapeHtml(dmgUrl)}">Download</a>` : ""}
          </nav>
        </div>
      </header>
      <main class="legal-content">
        <h1>${escapeHtml(title)}</h1>
        <p class="legal-meta">${escapeHtml(intro)}</p>
        ${sections
          .map(
            (section) => `
              <section>
                <h2>${escapeHtml(section.heading)}</h2>
                <ul>
                  ${section.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("\n")}
                </ul>
              </section>
            `,
          )
          .join("\n")}
      </main>
    </div>`;
}

function homepageSnapshot() {
  return `
    <div class="site-root static-html-snapshot">
      <header class="site-header">
        <div class="shell header-shell">
          <a href="/" aria-label="Aira home">Aira</a>
          <nav class="site-nav" aria-label="Primary">
            <a href="#features">Features</a>
            <a href="#controls">Controls</a>
            <a href="#faq">FAQ</a>
            ${dmgUrl ? `<a class="button button-nav" href="${escapeHtml(dmgUrl)}">Download</a>` : ""}
          </nav>
        </div>
      </header>
      <main>
        <section class="hero section">
          <div class="shell hero-layout">
            <div class="hero-copy-block">
              <p class="badge">${escapeHtml(releaseLabel)}</p>
              <h1 class="hero-title">Stay on script. Look more natural on camera.</h1>
              <p class="hero-copy">Aira places your script directly below the camera, making it easier to maintain eye contact and deliver your message smoothly across video calls, screen sharing, and screen recordings.</p>
              <p>
                ${dmgUrl ? `<a class="button button-primary" href="${escapeHtml(dmgUrl)}">Download DMG</a>` : ""}
                <a class="button button-primary" href="${escapeHtml(appStoreUrl)}">Download on the Mac App Store</a>
              </p>
              <p class="hero-footnote">macOS 14.4+ • Free • No account required</p>
            </div>
          </div>
        </section>
        <section class="section features-section" id="features">
          <div class="shell">
            <h2>Focused features, no distractions</h2>
            <article>
              <h3>Word Matching Sync</h3>
              <p>Aira follows the words you are actually saying and keeps the script synced to your delivery. Skip ahead, recover from a new visible line, and keep moving without touching the overlay.</p>
            </article>
            <article>
              <h3>Sound Activated Scroll</h3>
              <p>Aira can scroll when it hears you speaking and pause when the room goes quiet, with adjustable microphone sensitivity.</p>
            </article>
            <article>
              <h3>Stealth Mode</h3>
              <p>The overlay is hidden from Zoom, Google Meet, Teams, screen recordings, and screen sharing software.</p>
            </article>
            <article>
              <h3>Pill Windows</h3>
              <p>Floating teleprompter windows can be placed anywhere, synced with the Notch Overlay, or customized independently for each display.</p>
            </article>
          </div>
        </section>
        <section class="section" id="controls">
          <div class="shell">
            <h2>Flexible controls for every setup</h2>
            <p>Use Word Matching Sync, sound activated scrolling, classic manual pacing, keyboard shortcuts, progress display, and local script import for PDF, DOCX, TXT, and Markdown.</p>
          </div>
        </section>
        <section class="section product-hunt-section">
          <div class="shell">
            <h2>See Aira on Product Hunt</h2>
            <p>Aira is live on Product Hunt. Take a look, join the conversation, and share it with Mac creators who need a calmer way to present.</p>
            <p><a href="${escapeHtml(productHuntUrl)}">View Aira on Product Hunt</a></p>
          </div>
        </section>
        <section class="section install-section" id="download">
          <div class="shell">
            <h2>Ready in under a minute</h2>
            <p>Aira installs like any standard Mac app. Free forever, with no account, no setup flow, and no payment required.</p>
            <p>
              ${dmgUrl ? `<a class="button button-primary" href="${escapeHtml(dmgUrl)}">Download DMG</a>` : ""}
              <a class="button button-primary" href="${escapeHtml(appStoreUrl)}">Download on the Mac App Store</a>
            </p>
          </div>
        </section>
        <section class="section" id="faq">
          <div class="shell">
            <h2>Frequently asked questions</h2>
            <p>Aira is free forever, requires no account, stores scripts locally, and processes voice features on-device during active presenter sessions.</p>
          </div>
        </section>
      </main>
    </div>`;
}

function patchRootSnapshot(html, snapshotKind) {
  return html.replace(
    /<div id="root"><\/div>/,
    `<div id="root">${rootSnapshot(snapshotKind)}</div>`,
  );
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
let baseHtml = readFileSync(join(distDir, "index.html"), "utf-8");

// Patch homepage JSON-LD with release fields
baseHtml = patchJsonLd(baseHtml);
baseHtml = patchRootSnapshot(baseHtml, "home");
writeFileSync(join(distDir, "index.html"), baseHtml);
console.log("✓ Patched dist/index.html JSON-LD and static body snapshot");

// Generate per-route HTML
for (const route of routes) {
  const dir = join(distDir, route.path);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  const html = patchRootSnapshot(
    patchMeta(
      baseHtml.replace(
        /<div id="root">[\s\S]*?<\/div>\s*<\/body>/,
        '<div id="root"></div>\n  </body>',
      ),
      route,
    ),
    route.snapshot,
  );
  writeFileSync(join(distDir, `${route.path}.html`), html);
  writeFileSync(join(dir, "index.html"), html);
  console.log(`✓ Generated dist/${route.path}/index.html`);
}

// Regenerate 404.html (GitHub Pages SPA fallback) from patched base
writeFileSync(join(distDir, "404.html"), baseHtml);
console.log("✓ Updated dist/404.html");

console.log("\nRoute HTML generation complete.");
