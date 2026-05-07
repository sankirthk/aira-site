const features = [
  {
    title: "Word Matching Sync",
    description:
      "Aira can follow the words you are actually saying and keep the script synced to your delivery. Skip ahead, recover from a new visible line, and keep moving without needing to touch the overlay.",
    colorClass: "sage",
    benefits: [
      "Matches spoken words to the script",
      "Recovers when you skip ahead",
      "Works on-device",
      "Keeps synced Pill Windows aligned",
    ],
  },
  {
    title: "Sound Activated Scroll",
    description:
      "For a lighter hands-free mode, Aira can scroll when it hears you speaking and pause when the room goes quiet, with adjustable microphone sensitivity.",
    colorClass: "terracotta",
    benefits: [
      "Starts and pauses from speech activity",
      "Adjustable mic sensitivity",
      "No manual pacing required",
      "Useful for looser scripts",
    ],
  },
  {
    title: "Stealth Mode",
    description:
      "The overlay is hidden from screen recording and sharing software. Your viewers only see you, naturally engaged.",
    colorClass: "slate",
    benefits: [
      "Invisible to all screen capture",
      "No clumsy window hiding",
      "Works with major video software",
      "Completely seamless",
    ],
  },
  {
    title: "Progress Bar",
    description:
      "Turn on a thin script progress line when you want a quick sense of where you are without adding another bulky control lane.",
    colorClass: "warm",
    benefits: [
      "Optional during sessions",
      "Tracks script progress",
      "Works in Notch and Pill Windows",
      "Stays out of the reading path",
    ],
  },
  {
    title: "Pill Windows",
    description:
      "Pill Windows give you floating teleprompters you can place anywhere, sync with the Notch Overlay, or customize independently for each display.",
    colorClass: "sage",
    benefits: [
      "Works on any Mac",
      "Place on external displays",
      "Per-window customization",
      "Same stealth behavior",
    ],
  },
];

export function FeaturesSection() {
  return (
    <section className="section features-section" id="features">
      <div className="shell">
        <header className="section-header">
          <h2>
            Focused features,
            <br />
            no distractions
          </h2>
          <p>
            Every feature serves one goal: help you present naturally and
            confidently.
          </p>
        </header>

        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <div
                className={`feature-icon feature-icon-${feature.colorClass}`}
              />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <ul>
                {feature.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
