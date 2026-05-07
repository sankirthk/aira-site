import notchLeftTilt from "../assets/ProductShowcase/NotchLeftTilt.png";
import pillRightTilt from "../assets/ProductShowcase/PillWindowsRightTilt.png";
import editorLeft from "../assets/ProductShowcase/ScriptEditorLeftTilt.png";

const showcaseItems = [
  {
    eyebrow: "Always near the camera",
    title: "Notch Overlay",
    body: "Keep your script at the top of your screen, close to the camera where it feels easier to follow. On notch Macs, Aira fits into the camera cutout. On older Macs, it appears as a slim overlay along the top edge. Use Word Matching Sync, sound activated scrolling, or classic pacing while staying out of screen sharing and recordings.",
    bullets: [
      "Stays close to the camera on any Mac",
      "Word Matching Sync and sound activated modes",
      "Hidden from screen sharing",
      "Customize color, font, size, and opacity",
    ],
    tone: "sage",
    visual: "notch",
  },
  {
    eyebrow: "Extend across displays",
    title: "Pill Windows",
    body: "Pill Windows add slim companion overlays you can place anywhere on connected displays. They can mirror the Notch Overlay, show different content, and keep their own appearance/readability settings when a display needs different treatment.",
    bullets: [
      "Works across connected displays",
      "Extends the Notch Overlay setup",
      "Show the same script or different content",
      "Customize each Pill Window",
    ],
    tone: "terracotta",
    visual: "pill",
  },
  {
    eyebrow: "Write, import, organize",
    title: "Script Editor",
    body: "Write directly in Aira or import scripts from PDF, Word, plain text, or Markdown. Add cues like [PAUSE] and [SMILE], organize scripts into collections, and star the ones you use most. Everything stays stored locally on your Mac.",
    bullets: [
      "Import from PDF, DOCX, TXT, and Markdown",
      "Organize scripts into collections",
      "Star frequently used scripts",
      "Add cues like [PAUSE], [SMILE], and [EMPHASIS]",
      "Stored locally on your Mac",
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
          <h2>How Aira works across your setup</h2>
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
