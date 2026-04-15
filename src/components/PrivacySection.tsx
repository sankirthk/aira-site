export function PrivacySection() {
  const commitments = [
    {
      title: "On-device processing",
      body: "Voice activated scrolling uses Apple's on-device speech recognition. Nothing is sent to external servers. No audio leaves your computer.",
    },
    {
      title: "Local storage",
      body: "All scripts are stored locally on your Mac using standard macOS file storage. You control the files.",
    },
    {
      title: "No accounts",
      body: "You do not sign up or log in. There is no email collection, no password to remember, and no account to manage.",
    },
    {
      title: "No telemetry",
      body: "Aira does not collect usage data, crash reports, or analytics. What you do in the app stays on your device.",
    },
  ];

  const siteCommitments = [
    "No Google Analytics or third-party trackers",
    "No JavaScript-dependent download flow",
    "No email capture or newsletter signup",
    "Static site with no backend or database",
  ];

  return (
    <section className="section privacy-section" id="privacy">
      <div className="shell">
        <header className="section-header section-header-light">
          <h2>Your content stays yours</h2>
          <p>Privacy-first by design, not by marketing claim.</p>
        </header>

        <div className="privacy-grid">
          {commitments.map((item) => (
            <article className="privacy-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>

        <article className="site-privacy-card">
          <h3>This website</h3>
          <p>This marketing site also respects your privacy:</p>
          <ul>
            {siteCommitments.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
