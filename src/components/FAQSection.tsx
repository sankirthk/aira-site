const faqs = [
  {
    question: "Does Aira work on both Intel and Apple Silicon Macs?",
    answer:
      "Yes. Aira is a universal binary that runs natively on both Intel processors and Apple Silicon.",
  },
  {
    question:
      "Will people see the teleprompter during video calls or recordings?",
    answer:
      "No. Both notch and pill overlays are hidden from major screen capture and sharing software at the system level.",
  },
  {
    question: "Does it work on any Mac with a notch, not just MacBook Pro?",
    answer:
      "Yes. Aira works on any Mac that has a notch. Pill Windows work on any display regardless.",
  },
  {
    question: "What permissions does Aira need?",
    answer:
      "Aira requests three permissions: accessibility, microphone, and speech recognition. All three are used for voice activated scrolling. You can still use Aira manually without granting them.",
  },
  {
    question: "Is my content uploaded anywhere?",
    answer:
      "No. All scripts are stored locally on your Mac and speech recognition happens on-device.",
  },
  {
    question: "Does voice activated scrolling require an internet connection?",
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
            href="mailto:feedback@aira.app"
          >
            Send us an email
          </a>
        </div>
      </div>
    </section>
  );
}
