import { Link } from "react-router-dom";
import { Wordmark } from "./Wordmark";

export function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-root">
      <header className="site-header">
        <div className="shell header-shell">
          <Link to="/">
            <Wordmark />
          </Link>
          <nav className="site-nav" aria-label="Primary">
            <Link to="/#features">Features</Link>
            <Link to="/#faq">FAQ</Link>
            <Link to="/" className="button button-nav">
              ← Back to site
            </Link>
          </nav>
        </div>
      </header>

      <main className="legal-main">
        <div className="shell legal-shell">{children}</div>
      </main>

      <footer className="footer">
        <div className="shell footer-bottom">
          <p>© 2026 Aira. All rights reserved.</p>
          <nav className="legal-footer-nav">
            <Link to="/privacy">Privacy</Link>
            <Link to="/license">License</Link>
            <Link to="/security">Security</Link>
            <Link to="/changelog">Changelog</Link>
          </nav>
          <p>macOS 14.4+</p>
        </div>
      </footer>
    </div>
  );
}
