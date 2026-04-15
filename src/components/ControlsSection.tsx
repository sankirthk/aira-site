import { AppearanceIcon } from "./AppearanceIcon";
import { CountdownTimerIcon } from "./CountdownTimerIcon";
import { KeyboardShortcutsIcon } from "./KeyboardShortcutsIcon";
import { MenuBarControlsIcon } from "./MenuBarControlsIcon";
import { SwapOnFlyIcon } from "./SwapOnFlyIcon";
import { VoiceMicIcon } from "./VoiceMicIcon";

const controlCards = [
  {
    title: "Menu Bar Controls",
    body: "Launch, pause, and stop sessions without switching windows. The menu bar shortcut gives you instant access to everything mid-presentation.",
    icon: MenuBarControlsIcon,
  },
  {
    title: "Keyboard Shortcuts",
    body: "Set your own shortcuts for play, pause, speed, and swap. Control everything without touching your mouse.",
    icon: KeyboardShortcutsIcon,
  },
  {
    title: "Voice Activated",
    body: "Text scrolls automatically when it detects your voice. A mic level indicator shows exactly what Aira is picking up, and background noise sensitivity is adjustable.",
    icon: VoiceMicIcon,
  },
  {
    title: "Swap on the fly",
    body: "Mid-session, right-click to switch between the notch overlay and pill window via the context menu. No need to stop and restart.",
    icon: SwapOnFlyIcon,
  },
  {
    title: "Countdown Timer",
    body: "Set a countdown before your session begins so you have time to compose yourself before the script starts rolling.",
    icon: CountdownTimerIcon,
  },
  {
    title: "Appearance",
    body: "Choose your font, text size, overlay color, text color, and opacity. Adjust per session if you want.",
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
