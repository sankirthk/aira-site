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
      "Aira requests three permissions: accessibility, microphone, and speech recognition. Accessibility is required for global keyboard shortcuts to work across all apps. Microphone and speech recognition are required for voice-activated scrolling. If you skip any of them during setup you can grant them later in System Settings.",
  },
  {
    question: "Is my content uploaded anywhere?",
    answer:
      "No. All scripts are stored locally on your Mac and speech recognition happens entirely on-device.",
  },
  {
    question: "Does voice-activated scrolling require an internet connection?",
    answer:
      "No. It uses Apple's on-device speech recognition and works completely offline.",
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
          <a
            className="button button-secondary"
            href="mailto:feedback@useaira.co"
          >
            Send us an email
          </a>
        </div>
      </div>
    </section>
  );
}
