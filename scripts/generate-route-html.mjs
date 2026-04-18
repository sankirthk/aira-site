/**
 * generate-route-html.mjs
 *
 * Post-build step that runs after `vite build`.
 *
 * 1. Reads dist/index.html and patches the JSON-LD block with release-aware
 *    fields (softwareVersion, downloadUrl, releaseNotes) sourced from
 *    src/content/release.ts.
 *
 * 2. For each route, writes dist/<route>/index.html with route-specific
 *    title, description, canonical, og:*, and twitter:* tags so crawlers
 *    and social scrapers see correct metadata without running JavaScript.
 *
 * 3. Writes the updated dist/index.html back and regenerates dist/404.html
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
  },
  {
    path: "privacy",
    title: "Privacy Policy — Aira",
    description:
      "Aira collects no personal data. Read the full privacy policy.",
    canonical: "https://useaira.co/privacy",
  },
  {
    path: "security",
    title: "Security — Aira",
    description:
      "Security policy and responsible disclosure for Aira Mac Teleprompter.",
    canonical: "https://useaira.co/security",
  },
  {
    path: "license",
    title: "License — Aira",
    description: "End user license agreement for Aira Mac Teleprompter.",
    canonical: "https://useaira.co/license",
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

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
let baseHtml = readFileSync(join(distDir, "index.html"), "utf-8");

// Patch homepage JSON-LD with release fields
baseHtml = patchJsonLd(baseHtml);
writeFileSync(join(distDir, "index.html"), baseHtml);
console.log("✓ Patched dist/index.html JSON-LD with release fields");

// Generate per-route HTML
for (const route of routes) {
  const dir = join(distDir, route.path);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  const html = patchMeta(baseHtml, route);
  writeFileSync(join(dir, "index.html"), html);
  console.log(`✓ Generated dist/${route.path}/index.html`);
}

// Regenerate 404.html (GitHub Pages SPA fallback) from patched base
writeFileSync(join(distDir, "404.html"), baseHtml);
console.log("✓ Updated dist/404.html");

console.log("\nRoute HTML generation complete.");
