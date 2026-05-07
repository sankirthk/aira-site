import { latestRelease } from "../content/release";

const steps = [
  {
    number: "01",
    title: "Download",
    description:
      "Get the DMG and open it from your Downloads folder.",
  },
  {
    number: "02",
    title: "Install",
    description:
      "Drag Aira into Applications.",
  },
  {
    number: "03",
    title: "Launch",
    description:
      "Open Aira and grant microphone, speech recognition, and accessibility access.",
  },
];

export function InstallationGuide() {
  return (
    <section className="section install-section" id="download">
      <div className="shell install-shell">
        <header className="section-header section-header-light">
          <h2>Ready in under a minute</h2>
          <p>
            Aira installs like any standard Mac app. Free forever, with no
            account, no setup flow, and no payment required.
          </p>
        </header>

        <div className="install-list">
          {steps.map((step) => (
            <article className="install-step" key={step.number}>
              <div className="install-step-icon" aria-hidden="true">
                {step.number}
              </div>
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
