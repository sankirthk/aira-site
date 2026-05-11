import whatTheySeeImage from "../assets/Comparison/WhatTheySee.png";
import whatYouSeeAiraImage from "../assets/Comparison/WhatYouSeeAira.png";
import whatYouSeeMainImage from "../assets/Comparison/WhatYouSeeMain.png";

const comparisonColumns = [
  {
    title: "Without Aira",
    tone: "terracotta",
    images: [
      {
        label: "What they see",
        caption: "Presentation only",
        src: whatTheySeeImage,
        alt: "Presentation window being shared without presenter notes visible.",
      },
      {
        label: "What you see",
        caption: "Slides on one screen, notes on another",
        src: whatYouSeeMainImage,
        alt: "Presentation on one display with notes moved to a separate screen.",
        callout: "Notes on second screen",
      },
    ],
    points: [
      "Split between slides and notes",
      "More looking away from the camera",
      "Harder to present naturally",
      "Works best with a second screen",
    ],
  },
  {
    title: "With Aira",
    tone: "sage",
    images: [
      {
        label: "What they see",
        caption: "Presentation only",
        src: whatTheySeeImage,
        alt: "Presentation window being shared while the viewer sees only the slides.",
      },
      {
        label: "What you see",
        caption: "Slides with your script near the camera",
        src: whatYouSeeAiraImage,
        alt: "Presentation with Aira script visible near the camera notch.",
        callout: "Script near camera",
      },
    ],
    points: [
      "Script stays near the camera",
      "Easier to stay in flow",
      "More natural delivery",
      "Works in a single-screen setup",
    ],
  },
] satisfies Array<{
  title: string;
  tone: "terracotta" | "sage";
  images: Array<{
    label: string;
    caption: string;
    src: string;
    alt: string;
    callout?: string;
  }>;
  points: string[];
}>;

export function ComparisonSection() {
  return (
    <section className="section comparison-section">
      <div className="shell">
        <header className="section-header comparison-header">
          <h2>A better way to stay on script</h2>
          <p>
            Traditional presenter setups split your attention across slides and
            notes. Aira keeps your script near the camera, so presenting feels
            simpler on a single screen.
          </p>
        </header>

        <div className="comparison-grid">
          {comparisonColumns.map((column) => (
            <article
              key={column.title}
              className={`comparison-card comparison-card-${column.tone}`}
            >
              <h3>{column.title}</h3>

              <div className="comparison-image-stack">
                {column.images.map((image) => (
                  <figure
                    key={`${column.title}-${image.label}`}
                    className="comparison-figure"
                  >
                    <div className="comparison-label-wrap" aria-hidden="true">
                      <div className="comparison-chip">{image.label}</div>
                      <svg
                        className="comparison-arrow"
                        viewBox="0 0 132 72"
                        fill="none"
                      >
                        <title>Label arrow</title>
                        <path
                          d="M10 14C38 8 66 14 86 30C100 41 103 49 105 56"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path d="M110 44L115 70L95 65Z" fill="currentColor" />
                      </svg>
                    </div>
                    <div className="comparison-frame">
                      <div className="comparison-image-window">
                        <img
                          src={image.src}
                          alt={image.alt}
                          width={
                            image.src === whatYouSeeMainImage ? 4078 : 4096
                          }
                          height={
                            image.src === whatYouSeeMainImage ? 2459 : 2481
                          }
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      {image.callout ? (
                        <div
                          className={`comparison-callout ${image.callout === "Notes on second screen" ? "comparison-callout-notes" : ""}`}
                        >
                          {image.callout}
                        </div>
                      ) : null}
                    </div>
                    <figcaption>
                      <strong>{image.caption}</strong>
                    </figcaption>
                  </figure>
                ))}
              </div>

              <ul className="comparison-points">
                {column.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
