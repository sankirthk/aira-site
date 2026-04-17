import heroMainImage from "../assets/CreamBackGround/Main/Main.png";
import { latestRelease } from "../content/release";

export function HeroSection() {
  return (
    <section className="hero section">
      <div className="shell hero-layout">
        <div className="hero-copy-block">
          <div className="badge">
            <span className="badge-dot" />
            <span>{latestRelease.betaLabel}</span>
          </div>

          <h1 className="hero-title">
            Read naturally.
            <br />
            <span>Look natural.</span>
          </h1>

          <p className="hero-copy">
            Aira is a Mac teleprompter that keeps your script right next to your
            camera, so you stay locked in with your audience, not buried in
            notes.
          </p>

          <div className="hero-actions">
            <a
              className="button button-primary"
              href={latestRelease.dmgUrl}
              download
            >
              <DownloadIcon />
              Download
            </a>
          </div>

          <p className="hero-footnote">
            macOS 14.4+ • Free • No account required
          </p>
        </div>

        <div className="hero-mockup" aria-hidden="true">
          <div className="hero-image-frame hero-image-frame-straight">
            <img src={heroMainImage} alt="" className="hero-image" />
          </div>
        </div>
      </div>

      <div className="hero-scroll-cue">
        <a className="hero-secondary-link" href="#features">
          See how it works ↓
        </a>
      </div>
    </section>
  );
}

function DownloadIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M 12,3 L 12,15 M 8,11 L 12,15 L 16,11 M 4,20 L 20,20"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
