const bugReportUrl =
  "https://github.com/sankirthk/AiraPublic/blob/main/docs/report-a-bug.md";
const featureRequestUrl =
  "https://github.com/sankirthk/AiraPublic/blob/main/docs/request-a-feature.md";

const faqs = [
  {
    question: "Does Aira work on both Intel and Apple Silicon Macs?",
    answer:
      "Yes. Aira is a universal binary that runs natively on both Intel and Apple Silicon.",
  },
  {
    question:
      "Will people see the teleprompter during video calls or recordings?",
    answer:
      "No. Both the notch overlay and pill windows are hidden from screen capture and sharing software at the system level.",
  },
  {
    question: "Does the notch overlay work on Macs without a camera cutout?",
    answer:
      "Yes. Aira requires macOS 14.4 or later and works on any Mac regardless of whether it has a notch. On Macs without a camera cutout the overlay appears as a slim rectangle at the top of the screen, in the same position near the camera. Pill windows work on any display regardless.",
  },
  {
    question: "What permissions does Aira need?",
    answer:
      "Aira requests accessibility, microphone, and speech recognition permissions. Accessibility lets global keyboard shortcuts work across apps. Microphone access is used only during live sessions for sound activated scrolling, Word Matching Sync, and word highlighting. Speech Recognition supports Aira's Apple on-device recognition path for speech-aware features. If you skip a permission during setup, you can grant it later in System Settings.",
  },
  {
    question: "Is my content uploaded anywhere?",
    answer:
      "No. All scripts are stored locally on your Mac and speech recognition happens entirely on-device.",
  },
  {
    question:
      "Do Word Matching Sync and sound activated scrolling require an internet connection?",
    answer:
      "No. Word Matching Sync uses bundled WhisperKit models offline, and sound activated scrolling uses local microphone level detection. Core presenter features work without an internet connection.",
  },
  {
    question: "How does Word Matching Sync work?",
    answer:
      "Word Matching Sync listens during an active presenter session, transcribes short audio windows with bundled WhisperKit models, and matches the recognized words against your script so the playhead can follow your actual spoken position. The models ship inside Aira, runtime downloads are disabled, and audio is not sent to a server.",
  },
  {
    question: "Is Aira free forever?",
    answer:
      "Yes. Aira is free forever. No subscription, no trial, and no account required.",
  },
  {
    question: "Can I use Aira on an external display?",
    answer:
      "Yes. Pill Windows work across connected displays, and Aira supports different presentation setups.",
  },
  {
    question: "What if I run into an issue?",
    answer:
      "You can report bugs or get help through the public GitHub bug report page.",
  },
  {
    question: "Can I request a feature?",
    answer:
      "Yes. Feature requests and feedback are welcome on the public GitHub feature request page.",
  },
];

export function FAQSection() {
  return (
    <section className="section faq-section" id="faq">
      <div className="shell faq-shell">
        <header className="section-header">
          <h2>Common questions</h2>
        </header>

        <div className="faq-list">
          {faqs.map((faq) => (
            <details className="faq-card" key={faq.question}>
              <summary className="faq-question">
                <span>{faq.question}</span>
                <span className="faq-chevron" aria-hidden="true">
                  ↓
                </span>
              </summary>
              <p className="faq-answer">{faq.answer}</p>
            </details>
          ))}
        </div>

        <div className="faq-help">
          <p>Still have questions?</p>
          <div className="faq-help-links">
            <a
              className="button button-secondary"
              href={bugReportUrl}
              target="_blank"
              rel="noreferrer"
            >
              Report a bug
            </a>
            <a
              className="button button-secondary"
              href={featureRequestUrl}
              target="_blank"
              rel="noreferrer"
            >
              Request a feature
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
