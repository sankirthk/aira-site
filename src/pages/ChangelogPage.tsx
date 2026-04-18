import { LegalLayout } from "../components/LegalLayout";
import { changelog, latestRelease } from "../content/release";

const typeLabel: Record<string, string> = {
  added: "Added",
  changed: "Changed",
  fixed: "Fixed",
  removed: "Removed",
};

const typeColor: Record<string, string> = {
  added: "changelog-tag-added",
  changed: "changelog-tag-changed",
  fixed: "changelog-tag-fixed",
  removed: "changelog-tag-removed",
};

export function ChangelogPage() {
  return (
    <LegalLayout>
      <div className="legal-content">
        <h1>Changelog</h1>
        <p className="legal-meta">
          All notable changes to Aira are documented here.
        </p>

        {changelog.length === 0 ? (
          <div className="changelog-empty">
            <p>
              No releases yet — Aira is in active development.{" "}
              <a href={latestRelease.dmgUrl}>Download the current beta</a> to
              try it now.
            </p>
          </div>
        ) : (
          <div className="changelog-list">
            {changelog.map((entry) => (
              <article className="changelog-entry" key={entry.version}>
                <div className="changelog-header">
                  <h2 className="changelog-version">v{entry.version}</h2>
                  <span className={`changelog-tag changelog-tag-${entry.tag}`}>
                    {entry.tag}
                  </span>
                  <time className="changelog-date">{entry.date}</time>
                </div>
                <ul className="changelog-changes">
                  {entry.changes.map((change) => (
                    <li key={change.description} className="changelog-change">
                      <span
                        className={`changelog-type ${typeColor[change.type]}`}
                      >
                        {typeLabel[change.type]}
                      </span>
                      {change.description}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        )}
      </div>
    </LegalLayout>
  );
}

export const changelog = [
  {
    version: "1.0.0-beta.1",
    date: "2026-04-18",
    tag: "beta",
    changes: [
    {
      type: "added",
      description: "First public beta of Aira, a native macOS teleprompter built around a notch-first reading experience.",
    },
    {
      type: "added",
      description: "Voice-Sync teleprompting with on-device speech recognition and pause-on-silence behavior.",
    },
    {
      type: "added",
      description: "Manual scrolling with configurable pace, plus synced and fully manual pill overlay modes.",
    },
    {
      type: "added",
      description: "Stealth-oriented Notch and pill overlays designed to stay out of screen-share output during live sessions.",
    },
    {
      type: "added",
      description: "Built-in script editor and local-first document library with import, collections, starring, duplication, and bulk delete workflows.",
    },
    {
      type: "added",
      description: "Direct distribution through notarized DMG installs with Sparkle-based in-app update support for installed copies.",
    }
    ],
  },
];
