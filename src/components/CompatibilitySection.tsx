export function CompatibilitySection() {
  return (
    <section className="section compatibility-section">
      <div className="shell">
        <header className="section-header">
          <h2>System requirements</h2>
          <p>Honest compatibility information.</p>
        </header>

        <div className="compat-grid">
          <article className="compat-card compat-card-sage">
            <h3>macOS only</h3>
            <p>Requires macOS 13.0 Ventura or later.</p>
            <ul>
              <li>Works on Apple Silicon</li>
              <li>Works on Intel processors</li>
            </ul>
          </article>
          <article className="compat-card compat-card-terracotta">
            <h3>Permissions</h3>
            <p>Only asks for what it needs.</p>
            <ul>
              <li>Accessibility</li>
              <li>Microphone</li>
              <li>Speech recognition</li>
              <li>No camera or network access</li>
            </ul>
          </article>
        </div>

        <article className="display-note">
          <h3>Display behavior</h3>
          <div className="display-note-grid">
            <div>
              <h4>Built-in laptop display</h4>
              <p>
                The notch overlay appears directly below the camera on any Mac
                with a notch.
              </p>
            </div>
            <div>
              <h4>External displays and other Macs</h4>
              <p>
                If you&apos;re using an external display or a Mac without a
                notch, use Pill Window mode instead. You can position it
                anywhere on any display.
              </p>
            </div>
            <div>
              <h4>Screen sharing behavior</h4>
              <p>
                Both notch and pill overlays are hidden from major screen
                capture and sharing tools at the system level.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
