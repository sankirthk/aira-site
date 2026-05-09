import { useEffect, useRef } from "react";
import heroVideo from "../assets/Hero/Aira.mp4";
import { latestRelease } from "../content/release";

const appStoreUrl =
  "https://apps.apple.com/us/app/aira-notch-teleprompter/id6762571829?mt=12";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {});
    }
  }, []);

  return (
    <section className="hero section">
      <div className="shell hero-layout">
        <div className="hero-copy-block">
          <div className="badge">
            <span className="badge-dot" />
            <span>{latestRelease.betaLabel}</span>
          </div>

          <h1 className="hero-title">
            Stay on script.
            <br />
            <span>Look more natural on camera.</span>
          </h1>

          <p className="hero-copy">
            Aira places your script directly below the camera, making it easier
            to maintain eye contact and deliver your message smoothly across
            video calls, screen sharing, and screen recordings.
          </p>

          <div className="hero-cta-block">
            <div className="hero-actions">
              <a
                className="button button-primary"
                href={latestRelease.dmgUrl}
                download
              >
                <DownloadIcon />
                Download DMG
              </a>
              <a
                className="button button-primary button-app-store"
                href={appStoreUrl}
                aria-label="View Aira - Notch Teleprompter on the Mac App Store"
              >
                <AppleIcon />
                Mac App Store
              </a>
            </div>

            <p className="hero-footnote">
              macOS 14.4+ • Free • No account required
            </p>
          </div>
        </div>

        <div className="hero-mockup" aria-hidden="true">
          <div className="hero-image-frame hero-image-frame-straight">
            <video
              ref={videoRef}
              src={heroVideo}
              className="hero-image"
              autoPlay
              muted
              loop
              playsInline
            />
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

function AppleIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.12 12.34c-.03-2.55 2.09-3.78 2.18-3.83-1.19-1.74-3.03-1.98-3.68-2-1.55-.16-3.06.93-3.84.93-.8 0-2.01-.91-3.32-.89-1.69.03-3.27 1.01-4.14 2.55-1.79 3.1-.46 7.66 1.26 10.17.86 1.23 1.86 2.6 3.17 2.55 1.28-.05 1.76-.82 3.31-.82 1.53 0 1.98.82 3.32.79 1.38-.02 2.25-1.23 3.08-2.47.99-1.41 1.39-2.8 1.41-2.87-.03-.01-2.72-1.04-2.75-4.11ZM14.61 4.86c.7-.88 1.18-2.07 1.04-3.27-1.01.04-2.27.7-3 1.55-.65.75-1.23 1.99-1.07 3.15 1.13.09 2.3-.57 3.03-1.43Z" />
    </svg>
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
