import { AccessibilityControlsIcon } from "./AccessibilityControlsIcon";
import { AppearanceIcon } from "./AppearanceIcon";
import { CollectionsIcon } from "./CollectionsIcon";
import { CountdownTimerIcon } from "./CountdownTimerIcon";
import { KeyboardShortcutsIcon } from "./KeyboardShortcutsIcon";
import { MenuBarControlsIcon } from "./MenuBarControlsIcon";
import { NotchUndockIcon } from "./NotchUndockIcon";
import { OverlayPrivacyIcon } from "./OverlayPrivacyIcon";
import { PauseOnHoverIcon } from "./PauseOnHoverIcon";
import { PillFullscreenIcon } from "./PillFullscreenIcon";
import { ScrollSpeedIcon } from "./ScrollSpeedIcon";
import { SpokenWordHighlightIcon } from "./SpokenWordHighlightIcon";
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
    body: "Swap script focus without restarting your session. Move between the notch and pill workflow while you stay on track.",
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
  {
    title: "Spoken-Word Highlighting",
    body: "Follow each spoken phrase with visual emphasis on screen. It helps you keep your place without changing actual scroll speed.",
    icon: SpokenWordHighlightIcon,
  },
  {
    title: "Pause on Hover",
    body: "Pause scrolling by hovering when you need to stop, think, or go off script. Leave it off if you want uninterrupted motion.",
    icon: PauseOnHoverIcon,
  },
  {
    title: "Overlay Privacy",
    body: "Choose whether overlays stay hidden from screen sharing or remain visible for demos, recordings, and setup walkthroughs.",
    icon: OverlayPrivacyIcon,
  },
  {
    title: "Notch Undock",
    body: "Break the notch overlay free when you need more flexibility. Move it, resize it, fullscreen it, then dock it back smoothly.",
    icon: NotchUndockIcon,
  },
  {
    title: "Pill Fullscreen",
    body: "Expand pill overlays on the right display when your setup calls for it. Great for external monitors and side-by-side presenter rigs.",
    icon: PillFullscreenIcon,
  },
  {
    title: "Collections",
    body: "Add scripts to collections from hover actions, drag and drop, or quick menus. Organize your session library the way you actually work.",
    icon: CollectionsIcon,
  },
  {
    title: "Accessibility Controls",
    body: "Tune letter spacing, word spacing, line spacing, text shadow, and padding so long scripts stay comfortable to read.",
    icon: AccessibilityControlsIcon,
  },
  {
    title: "Stable Scroll Speed",
    body: "Manual pacing now uses points per second, which gives you steadier physical motion and more predictable rehearsal speed.",
    icon: ScrollSpeedIcon,
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
