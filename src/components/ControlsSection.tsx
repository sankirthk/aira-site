import { AppearanceIcon } from "./AppearanceIcon";
import { CountdownTimerIcon } from "./CountdownTimerIcon";
import { KeyboardShortcutsIcon } from "./KeyboardShortcutsIcon";
import { MenuBarControlsIcon } from "./MenuBarControlsIcon";
import { SwapOnFlyIcon } from "./SwapOnFlyIcon";
import { VoiceMicIcon } from "./VoiceMicIcon";

const controlCards = [
  {
    title: "Menu Bar Controls",
    body: "Launch, pause, and stop without switching windows. Everything is one click away, even mid-presentation.",
    icon: MenuBarControlsIcon,
  },
  {
    title: "Keyboard Shortcuts",
    body: "Set your own shortcuts for play, pause, and speed. Run your entire session without touching the mouse.",
    icon: KeyboardShortcutsIcon,
  },
  {
    title: "Voice Activated",
    body: "The script scrolls automatically when Aira detects your voice. A mic level indicator gives visual feedback so you can confirm the microphone is active and picking up sound. Background noise sensitivity is adjustable.",
    icon: VoiceMicIcon,
  },
  {
    title: "Swap on the fly",
    body: "Mid-session, right-click to switch between the notch overlay and pill window via the context menu. No need to stop and restart.",
    icon: SwapOnFlyIcon,
  },
  {
    title: "Countdown Timer",
    body: "Set a countdown before your session begins so you have a moment to settle before the script starts rolling.",
    icon: CountdownTimerIcon,
  },
  {
    title: "Appearance",
    body: "Choose your font, text size, overlay color, text color, and opacity. Adjust per session.",
    icon: AppearanceIcon,
  },
] as const;

export function ControlsSection() {
  return (
    <section className="section controls-section" id="controls">
      <div className="shell">
        <header className="section-header">
          <h2>Your session, your way</h2>
          <p>
            Everything you need to run a smooth session, from the menu bar to
            your keyboard.
          </p>
        </header>

        <div className="controls-grid">
          {controlCards.map((card) => (
            <article className="control-card" key={card.title}>
              <div className="control-card-icon">
                <card.icon size={80} />
              </div>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
