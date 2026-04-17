import { latestRelease } from "../content/release";

const steps = [
  {
    number: "01",
    title: "Download the DMG",
    description:
      "Click download. The DMG saves to your Downloads folder and macOS handles verification automatically.",
  },
  {
    number: "02",
    title: "Move to Applications",
    description:
      "Open the DMG file and drag the Aira icon into Applications. You can eject the DMG afterward. This is standard macOS installation.",
  },
  {
    number: "03",
    title: "Launch and grant access",
    description:
      "Open Aira from Applications. macOS will ask for accessibility, microphone, and speech recognition permissions for voice activated scrolling. No account creation, no sign-up flow.",
  },
];

export function InstallationGuide() {
  return (
    <section className="section install-section" id="download">
      <div className="shell install-shell">
        <header className="section-header section-header-light">
          <h2>Ready in 60 seconds</h2>
          <p>Standard macOS installation. No tricks, no registration forms.</p>
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
          <a className="button button-primary" href={latestRelease.dmgUrl} download>
            Download Aira
          </a>
          <p>macOS 14.4+ • No account required</p>
        </div>
      </div>
    </section>
  );
}
