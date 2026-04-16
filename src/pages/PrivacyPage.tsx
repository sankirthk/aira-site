import { LegalLayout } from "../components/LegalLayout";

export function PrivacyPage() {
  return (
    <LegalLayout>
      <div className="legal-content">
        <h1>Privacy Policy</h1>
        <p className="legal-meta">Last updated: April 16, 2026</p>

        <section>
          <h2>The short version</h2>
          <p>
            Aira does not collect, transmit, or store any personal data. No
            analytics, no accounts, no tracking. Your scripts and your voice
            never leave your Mac.
          </p>
        </section>

        <section>
          <h2>What the app collects</h2>
          <p>
            Nothing. Aira has no backend, no telemetry, and no network
            connection. All scripts are stored locally on your Mac using
            standard file storage. Speech recognition runs entirely on-device
            using Apple's built-in framework — no audio is sent to any server.
          </p>
        </section>

        <section>
          <h2>What this website collects</h2>
          <p>
            Nothing. This site has no analytics, no cookies, no sign-up forms,
            and no third-party trackers. Visiting this page generates a standard
            server access log on the hosting provider's infrastructure (IP
            address, timestamp, requested URL), which is outside our control and
            not used for any purpose.
          </p>
        </section>

        <section>
          <h2>Permissions the app requests</h2>
          <p>
            Aira requests three macOS permissions at launch. All are used solely
            for local, on-device functionality:
          </p>
          <ul>
            <li>
              <strong>Accessibility</strong> — required to display the overlay
              window and detect keyboard shortcuts during a session.
            </li>
            <li>
              <strong>Microphone</strong> — required to listen to your voice for
              voice activated scrolling. Audio is processed locally and never
              recorded or transmitted.
            </li>
            <li>
              <strong>Speech Recognition</strong> — required to convert your
              speech to text for scroll position matching. Uses Apple's
              on-device recognition engine exclusively.
            </li>
          </ul>
          <p>
            All three can be revoked at any time in System Settings → Privacy &
            Security. Revoking microphone or speech recognition disables voice
            activated scrolling; manual scrolling still works.
          </p>
        </section>

        <section>
          <h2>Third-party services</h2>
          <p>
            None. Aira does not integrate with any analytics, advertising, crash
            reporting, or cloud storage service.
          </p>
        </section>

        <section>
          <h2>Children's privacy</h2>
          <p>
            Aira does not collect data from anyone, including children under 13.
          </p>
        </section>

        <section>
          <h2>Changes to this policy</h2>
          <p>
            If this policy changes materially, the updated date at the top of
            this page will reflect it. Since we collect no data, changes are
            likely to be additions explaining new functionality, not expansions
            of data collection.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            Questions about privacy?{" "}
            <a href="mailto:feedback@aira.app">feedback@aira.app</a>
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
