import { useEffect, useRef } from "react";
import heroVideo from "../assets/Hero/Aira.mp4";
import appStoreBadge from "../assets/Hero/white.svg";
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
                className="app-store-badge-link"
                href={appStoreUrl}
                aria-label="View Aira - Notch Teleprompter on the Mac App Store"
              >
                <img
                  className="app-store-badge"
                  src={appStoreBadge}
                  alt=""
                  width="180"
                  height="60"
                />
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
              preload="metadata"
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
