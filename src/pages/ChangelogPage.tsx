import { changelog, latestRelease } from "../content/release";
import { LegalLayout } from "../components/LegalLayout";

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
                  {entry.changes.map((change, i) => (
                    <li key={i} className="changelog-change">
                      <span className={`changelog-type ${typeColor[change.type]}`}>
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
