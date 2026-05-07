const trustItems = [
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <path d="M 12,2 L 12,8" />
        <path d="M 12,16 L 12,22" />
        <circle cx="12" cy="12" r="3" />
        <path d="M 4.22,4.22 L 8.46,8.46" />
        <path d="M 15.54,15.54 L 19.78,19.78" />
        <path d="M 2,12 L 8,12" />
        <path d="M 16,12 L 22,12" />
        <path d="M 4.22,19.78 L 8.46,15.54" />
        <path d="M 15.54,8.46 L 19.78,4.22" />
      </svg>
    ),
    title: "On-device speech recognition",
    description: "Your voice never leaves your Mac.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <path d="M 2,7 L 22,7 L 22,20 C 22,21 21,22 20,22 L 4,22 C 3,22 2,21 2,20 Z" />
        <path d="M 8,7 L 8,4 C 8,3 9,2 10,2 L 14,2 C 15,2 16,3 16,4 L 16,7" />
        <line x1="12" y1="13" x2="12" y2="17" />
        <path d="M 7,15 L 17,15" opacity="0.3" />
      </svg>
    ),
    title: "Hidden from screen sharing",
    description: "Your script stays out of view while presenting.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="8" r="5" />
        <path d="M 3,21 C 3,21 5,17 12,17 C 19,17 21,21 21,21" />
        <line x1="4" y1="4" x2="20" y2="20" strokeWidth="2.5" />
      </svg>
    ),
    title: "No account required",
    description: "Download and open. That's it.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M 3,9 L 21,9" />
        <path d="M 9,3 L 9,21" />
        <circle cx="15" cy="15" r="2" opacity="0.4" />
      </svg>
    ),
    title: "No telemetry",
    description: "Zero tracking, zero analytics.",
  },
] as const;

export function TrustStrip() {
  return (
    <section className="section trust-strip">
      <div className="shell">
        <header className="section-header trust-header">
          <h2>Private by design</h2>
        </header>

        <div className="trust-grid">
          {trustItems.map((item) => (
            <article key={item.title} className="trust-card">
              <div className="trust-icon" aria-hidden="true">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
