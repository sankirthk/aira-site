const features = [
  {
    title: "Voice Activated",
    description:
      "Aira listens to your speech on-device and automatically scrolls to keep pace with you. Pause and it waits. Speed up and it follows. No internet required.",
    colorClass: "sage",
    benefits: [
      "Follows your natural speaking rhythm",
      "Works completely offline",
      "Adjustable sensitivity",
      "Instant response, no lag",
    ],
  },
  {
    title: "Stealth Mode",
    description:
      "The overlay is hidden from screen recording and sharing software. Your viewers only see you, naturally engaged.",
    colorClass: "terracotta",
    benefits: [
      "Invisible to all screen capture",
      "No clumsy window hiding",
      "Works with major video software",
      "Completely seamless",
    ],
  },
  {
    title: "Script Editor",
    description:
      "Write and organize scripts without switching apps. Add cues like [PAUSE] or [SMILE] to guide delivery while everything saves locally.",
    colorClass: "slate",
    benefits: [
      "Distraction-free writing",
      "Performance cue markers",
      "Collections and folders",
      "Import and export support",
    ],
  },
  {
    title: "Pill Windows",
    description:
      "Not using a MacBook Pro? Pill windows give you a floating teleprompter you can place anywhere and tailor to your setup.",
    colorClass: "warm",
    benefits: [
      "Works on any Mac",
      "Place on external displays",
      "Fully customizable",
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
