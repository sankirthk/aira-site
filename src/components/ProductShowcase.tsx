import editorLeft from "../assets/CreamBackGround/ScriptEditor/LeftTilt.png";
import notchLeftTilt from "../assets/TerracottaBackGround/NotchCloseUp/LeftTilt.png";
import pillRightTilt from "../assets/TerracottaBackGround/PillWindow/RightTilt.png";

const showcaseItems = [
  {
    eyebrow: "Always near the camera",
    title: "Notch Overlay",
    body: "Your script floats just below the macOS camera, right in your natural line of sight. It scrolls as you speak and disappears completely from screen recordings and calls. Works on any Mac, whether the camera lives in a notch or not.",
    bullets: [
      "Hugs the camera closely",
      "Auto-scrolls with your speech",
      "Hidden from screen sharing",
      "Customize color, font, size, and opacity",
    ],
    tone: "sage",
    visual: "notch",
  },
  {
    eyebrow: "Float anywhere on any display",
    title: "Pill Windows",
    body: "Pill windows are independent floating overlays you can place anywhere on any screen. Run them in sync with the notch overlay, show different content altogether, or use them as your only display. Fully customizable and still invisible to screen capture.",
    bullets: [
      "Works on any display, any Mac",
      "Sync with notch or show separate content",
      "Resize and reposition freely",
      "Same stealth behavior as the notch",
    ],
    tone: "terracotta",
    visual: "pill",
  },
  {
    eyebrow: "Write, import, organize",
    title: "Script Manager",
    body: "Write your scripts inside Aira, or bring them in from anywhere. Supports import from PDF, Word docs, plain text, and Markdown. Add performance cues in square brackets like [PAUSE] or [SMILE], and everything stays stored locally on your Mac.",
    bullets: [
      "Import from PDF, DOCX, TXT, Markdown",
      "Organize into collections",
      "Add cues like [PAUSE], [SMILE], [EMPHASIS]",
      "Everything stored locally, you own the files",
    ],
    tone: "slate",
    visual: "editor",
  },
] as const;

export function ProductShowcase() {
  return (
    <section className="section showcase-section" id="features">
      <div className="shell">
        <header className="section-header">
          <h2>One app, every setup</h2>
          <p>
            Aira adapts to however you present: on your built-in display, an
            external monitor, or both at once.
          </p>
        </header>
      </div>

      <div className="showcase-stack">
        {showcaseItems.map((item, index) => (
          <article
            className={`showcase-item ${index % 2 === 1 ? "showcase-item-reversed" : ""}`}
            key={item.title}
          >
            <div className="showcase-copy">
              <div className={`eyebrow eyebrow-${item.tone}`}>
                {item.eyebrow}
              </div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
            <div className="showcase-visual-wrap">
              <ShowcaseVisual variant={item.visual} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ShowcaseVisual({ variant }: { variant: "notch" | "pill" | "editor" }) {
  if (variant === "notch") {
    return <SingleVisual label="Notch close-up" src={notchLeftTilt} />;
  }

  if (variant === "pill") {
    return (
      <SingleVisual label="Pill window" src={pillRightTilt} alignment="left" />
    );
  }

  return <SingleVisual label="Script editor" src={editorLeft} />;
}

function SingleVisual({
  label,
  src,
  alignment = "right",
}: {
  label: string;
  src: string;
  alignment?: "left" | "right";
}) {
  return (
    <div
      className={`visual-single visual-single-${alignment}`}
      aria-label={label}
    >
      <figure className="visual-single-card">
        <img src={src} alt="" className="visual-stack-image" />
      </figure>
    </div>
  );
}
