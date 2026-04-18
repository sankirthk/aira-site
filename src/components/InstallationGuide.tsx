import { latestRelease } from "../content/release";

const steps = [
  {
    number: "01",
    title: "Download the DMG",
    description:
      "Click download. The file saves to your Downloads folder and macOS verifies it automatically.",
  },
  {
    number: "02",
    title: "Move to Applications",
    description:
      "Open the DMG and drag Aira into Applications. Eject when done. Standard macOS installation.",
  },
  {
    number: "03",
    title: "Launch and grant access",
    description:
      "Open Aira from Applications. macOS will ask for accessibility, microphone, and speech recognition permissions — accessibility for global keyboard shortcuts, microphone and speech recognition for voice-activated scrolling. No account, no sign-up.",
  },
];

export function InstallationGuide() {
  return (
    <section className="section install-section" id="download">
      <div className="shell install-shell">
        <header className="section-header section-header-light">
          <h2>Ready in 60 seconds</h2>
          <p>Standard macOS installation. No registration, no payment.</p>
        </header>

        <div className="install-list">
          {steps.map((step) => (
            <article className="install-step" key={step.number}>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="install-cta">
          <a
            className="button button-primary"
            href={latestRelease.dmgUrl}
            download
          >
            Download Aira
          </a>
          <p>macOS 14.4+ • No account required</p>
        </div>
      </div>
    </section>
  );
}
