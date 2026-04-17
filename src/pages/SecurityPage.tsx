import { LegalLayout } from "../components/LegalLayout";

export function SecurityPage() {
  return (
    <LegalLayout>
      <div className="legal-content">
        <h1>Security</h1>
        <p className="legal-meta">Last updated: April 16, 2026</p>

        <p>
          Security and privacy are foundational to how Aira is built. This page
          documents the technical measures in place to protect you.
        </p>

        <section>
          <h2>Application Security</h2>
          <ul>
            <li>
              All scripts, settings, and session state are stored locally on
              your Mac. Nothing is uploaded to any server by the application.
            </li>
            <li>
              The app contains no analytics, telemetry, or crash reporting of
              any kind.
            </li>
            <li>
              Voice processing runs entirely on-device using Apple's on-device
              speech recognition (
              <code>requiresOnDeviceRecognition = true</code>). Microphone audio
              is handled in real-time memory only and is never written to disk
              or transmitted anywhere.
            </li>
            <li>
              Aira is code-signed with an Apple Developer ID and notarized by
              Apple for every release. macOS verifies the signature
              automatically on first launch.
            </li>
            <li>
              App Sandbox and Hardened Runtime are both enabled, restricting
              what the application can access on your system and limiting the
              ability of malicious code to tamper with the app process.
            </li>
            <li>
              The only outbound network request the app makes is to check for
              available updates, sent over HTTPS.
            </li>
          </ul>
        </section>

        <section>
          <h2>Data Storage</h2>
          <ul>
            <li>
              Scripts are stored locally as JSON files in{" "}
              <code>~/Library/Application Support/Aira/</code>.
            </li>
            <li>App settings are stored in macOS UserDefaults.</li>
            <li>
              No application cloud backend exists. All data remains on your
              device.
            </li>
            <li>
              Data at rest is protected by standard macOS platform security. The
              app does not implement additional application-layer encryption
              beyond what macOS provides.
            </li>
          </ul>
        </section>

        <section>
          <h2>Website and Infrastructure</h2>
          <ul>
            <li>The website is served over HTTPS via GitHub Pages.</li>
            <li>
              DNS is managed through Cloudflare, providing DNSSEC and
              network-level resilience.
            </li>
            <li>
              App downloads are hosted on GitHub Releases, served over HTTPS.
            </li>
            <li>
              No analytics, advertising pixels, or tracking scripts are present
              on the website.
            </li>
          </ul>
        </section>

        <section>
          <h2>Automatic Updates</h2>
          <ul>
            <li>
              Updates are delivered via the{" "}
              <a
                href="https://github.com/sparkle-project/Sparkle"
                target="_blank"
                rel="noreferrer"
              >
                Sparkle framework
              </a>{" "}
              (MIT-compatible license) over HTTPS.
            </li>
            <li>
              Every update package is signed with an EdDSA key. Sparkle verifies
              this signature before applying any update, ensuring packages have
              not been tampered with in transit.
            </li>
          </ul>
        </section>

        <section>
          <h2>Permissions the App Requests</h2>
          <table className="legal-table">
            <thead>
              <tr>
                <th>Permission</th>
                <th>Why it is needed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Microphone</td>
                <td>
                  Detects your voice to automatically scroll the teleprompter as
                  you speak
                </td>
              </tr>
              <tr>
                <td>Accessibility</td>
                <td>
                  Enables global keyboard shortcuts to work even when another
                  window is in focus
                </td>
              </tr>
              <tr>
                <td>Speech Recognition</td>
                <td>
                  Used for on-device voice detection via Apple's speech
                  framework
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Open Source Dependencies</h2>
          <ul>
            <li>
              <strong>Sparkle</strong> (update framework) — MIT-compatible
              license, source at{" "}
              <a
                href="https://github.com/sparkle-project/Sparkle"
                target="_blank"
                rel="noreferrer"
              >
                github.com/sparkle-project/Sparkle
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2>Vulnerability Disclosure</h2>
          <p>
            If you discover a security vulnerability in Aira, please contact us
            at <a href="mailto:feedback@useaira.co">feedback@useaira.co</a>. We
            aim to acknowledge reports within 48 hours and resolve confirmed
            issues as quickly as possible. We ask that you give us reasonable
            time to address a vulnerability before any public disclosure.
          </p>
        </section>

        <details className="legal-details">
          <summary>Security Self-Assessment (CAIQ Lite)</summary>
          <p>
            The following answers address common questions from security
            questionnaires.
          </p>
          <table className="legal-table">
            <thead>
              <tr>
                <th>Question</th>
                <th>Answer</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Do you have a documented information security policy?",
                  "Yes — reflected in our Privacy Policy and this Security page.",
                ],
                [
                  "Do you encrypt data in transit?",
                  "Yes — all network connections use HTTPS/TLS. Core app functionality requires no network access. The only connection made is for update checks via Sparkle over HTTPS.",
                ],
                [
                  "Do you encrypt data at rest?",
                  "User data is stored locally on the user's device using standard macOS storage. We hold no server-side data. The app relies on macOS platform protections rather than additional application-layer encryption.",
                ],
                [
                  "Do you collect user data in the application?",
                  "No. The Aira app collects zero personal data. All scripts and settings remain local to the device.",
                ],
                [
                  "Do you use third-party analytics in the application?",
                  "No. The app has no analytics, telemetry, or crash reporting.",
                ],
                [
                  "Do you share or sell user data?",
                  "No. We do not sell or share personal data with any third party.",
                ],
                [
                  "Where is data stored?",
                  "User scripts: local device only (~/Library/Application Support/Aira/). Settings: local device only (UserDefaults). Update files: GitHub Releases (Microsoft).",
                ],
                [
                  "Do you have a breach notification procedure?",
                  "Yes — in the event of a breach affecting users, we will notify affected users and relevant supervisory authorities within 72 hours of becoming aware.",
                ],
                [
                  "Do you perform penetration testing?",
                  "As an individual developer of a local-only desktop application, we rely on Apple's notarization process, App Sandbox, Hardened Runtime, and dependency audits rather than formal penetration testing.",
                ],
                [
                  "Is the application sandboxed?",
                  "Yes. App Sandbox and Hardened Runtime are both enabled.",
                ],
                [
                  "Do you have a vulnerability disclosure policy?",
                  "Yes — contact feedback@useaira.co. We aim to acknowledge within 48 hours.",
                ],
                [
                  "Do you use open source components?",
                  "Yes — Sparkle (MIT-compatible). It is an auditable open-source project.",
                ],
                [
                  "Do you have a DPA available?",
                  "No DPA is required as we collect and process no personal data on behalf of users.",
                ],
                [
                  "Do you comply with GDPR?",
                  "Yes — the app is local-only and collects no personal data. See our Privacy Policy for full details.",
                ],
                [
                  "What personal data does the application process?",
                  "None. User-created content and settings remain entirely on the local device and are not processed by us.",
                ],
              ].map(([q, a]) => (
                <tr key={q}>
                  <td>{q}</td>
                  <td>{a}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </details>
      </div>
    </LegalLayout>
  );
}
