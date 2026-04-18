import editorLeft from "../assets/CreamBackGround/ScriptEditor/LeftTilt.png";
import notchLeftTilt from "../assets/TerracottaBackGround/NotchCloseUp/LeftTilt.png";
import pillRightTilt from "../assets/TerracottaBackGround/PillWindow/RightTilt.png";

const showcaseItems = [
  {
    eyebrow: "Always near the camera",
    title: "Notch Overlay",
    body: "Your script sits at the very top of your screen, right in your natural line of sight as you look toward the camera. On notch Macs it tucks into the camera cutout. On older Macs it appears as a slim rectangle at the top edge. Either way it scrolls as you speak and disappears completely from screen recordings and calls.",
    bullets: [
      "Stays close to the camera on any Mac",
      "Auto-scrolls with your voice",
      "Hidden from screen sharing",
      "Customize color, font, size, and opacity",
    ],
    tone: "sage",
    visual: "notch",
  },
  {
    eyebrow: "Float anywhere on any display",
    title: "Pill Windows",
    body: "Pill windows are slim floating overlays you can drag to any position on any connected screen. Run them alongside the notch overlay, show different script content, or use them as your only display. Fully customizable and invisible to screen capture, just like the notch overlay.",
    bullets: [
      "Works on any display, any Mac",
      "Sync with the notch overlay or show separate content",
      "Resize and reposition freely",
      "Same stealth behavior as the notch overlay",
    ],
    tone: "terracotta",
    visual: "pill",
  },
  {
    eyebrow: "Write, import, organize",
    title: "Script Editor",
    body: "Write directly inside Aira or import from PDF, Word, plain text, or Markdown. Add performance cues in square brackets like [PAUSE] or [SMILE] to guide your delivery. Everything is stored locally on your Mac — you own your files.",
    bullets: [
      "Import from PDF, DOCX, TXT, Markdown",
      "Organize scripts into collections",
      "Add cues like [PAUSE], [SMILE], [EMPHASIS]",
      "Local storage, no cloud sync",
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
          <h2>Built for every display, every Mac</h2>
          <p>
            Aira adapts to however you present: built-in display, external
            monitor, or both at once.
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
