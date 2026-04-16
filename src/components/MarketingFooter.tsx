import { latestRelease } from "../content/release";
import { Wordmark } from "./Wordmark";

export function MarketingFooter() {
  return (
    <footer className="footer">
      <div className="shell footer-cta">
        <h2>Help shape Aira</h2>
        <p>
          It&apos;s in active development. Found a bug, have an idea, or want to
          share how you use it? Every message gets read.
        </p>
        <a href="mailto:feedback@aira.app">feedback@aira.app</a>
      </div>

      <div className="shell footer-grid">
        <div className="footer-brand">
          <Wordmark />
          <p>
            A native macOS teleprompter that helps you present naturally while
            maintaining eye contact. Private, local-first, and built for real
            people.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href={latestRelease.dmgUrl}>Download Beta</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <ul>
            <li>
              <a href="mailto:feedback@useaira.co">feedback@useaira.co</a>
            </li>
            <li>
              <a href="/changelog">Changelog</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Legal</h3>
          <ul>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/license">License</a></li>
            <li><a href="/security">Security</a></li>
          </ul>
        </div>
      </div>

      <div className="shell footer-bottom">
        <p>© 2026 Aira. All rights reserved.</p>
        <div className="footer-beta">
          {latestRelease.version
            ? `${latestRelease.betaLabel} ${latestRelease.version}`
            : latestRelease.betaLabel}
        </div>
        <p>macOS 14.4+</p>
      </div>
    </footer>
  );
}
