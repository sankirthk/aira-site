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
    description: "Your voice never leaves your Mac",
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
    description: "Invisible to Zoom, Meet, and recordings",
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
    title: "No account",
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
    description: "Zero tracking, zero analytics",
  },
];

export function TrustStrip() {
  return (
    <section
      style={{
        padding: "64px 24px",
        background:
          "linear-gradient(to bottom, #F5F2EC, rgba(132, 150, 136, 0.05))",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          margin: "0 -24px 48px",
          height: "48px",
          overflow: "hidden",
        }}
      >
        <svg
          viewBox="0 0 1200 50"
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            opacity: 0.15,
          }}
        >
          <path
            d="M 0,25 Q 150,15 300,25 T 600,25 T 900,25 T 1200,25 L 1200,50 L 0,50 Z"
            fill="#849688"
          />
        </svg>
      </div>
      <div
        style={{
          maxWidth: "1152px",
          margin: "0 auto",
        }}
      >
        <div className="trust-grid">
          {trustItems.map((item) => (
            <div
              key={item.title}
              style={{
                textAlign: "center",
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "64px",
                  height: "64px",
                  marginBottom: "16px",
                  borderRadius: "16px",
                  background: "rgba(132, 150, 136, 0.1)",
                  color: "#849688",
                  transition: "all 0.3s ease",
                }}
              >
                {item.icon}
              </div>
              <h3
                style={{
                  margin: "0 0 8px",
                  color: "#2B2B2B",
                  fontFamily: "'Indie Flower', cursive",
                  fontWeight: 500,
                  fontSize: "18px",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  color: "rgba(43,43,43,0.6)",
                  fontFamily: "'Crimson Text', serif",
                  fontSize: "14px",
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
