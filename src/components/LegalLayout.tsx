import { Wordmark } from "./Wordmark";

export function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-root">
      <header className="site-header">
        <div className="shell header-shell">
          <a href="/">
            <Wordmark />
          </a>
          <nav className="site-nav" aria-label="Primary">
            <a href="/#features">Features</a>
            <a href="/#faq">FAQ</a>
            <a href="/" className="button button-nav">
              ← Back to site
            </a>
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
            <a href="/privacy">Privacy</a>
            <a href="/license">License</a>
            <a href="/security">Security</a>
            <a href="/changelog">Changelog</a>
          </nav>
          <p>macOS 14.4+</p>
        </div>
      </footer>
    </div>
  );
}
