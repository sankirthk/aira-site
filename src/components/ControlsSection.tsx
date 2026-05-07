import { AccessibilityControlsIcon } from "./AccessibilityControlsIcon";
import { AppearanceIcon } from "./AppearanceIcon";
import { ClassicScrollIcon } from "./ClassicScrollIcon";
import { CountdownTimerIcon } from "./CountdownTimerIcon";
import { KeyboardShortcutsIcon } from "./KeyboardShortcutsIcon";
import { MenuBarControlsIcon } from "./MenuBarControlsIcon";
import { NotchUndockIcon } from "./NotchUndockIcon";
import { OverlayPrivacyIcon } from "./OverlayPrivacyIcon";
import { PaceCategoryIcon } from "./PaceCategoryIcon";
import { PillFullscreenIcon } from "./PillFullscreenIcon";
import { ReadabilityCategoryIcon } from "./ReadabilityCategoryIcon";
import { ScrollSpeedIcon } from "./ScrollSpeedIcon";
import { SessionControlCategoryIcon } from "./SessionControlCategoryIcon";
import { SetupCategoryIcon } from "./SetupCategoryIcon";
import { SpokenWordHighlightIcon } from "./SpokenWordHighlightIcon";
import { SwapOnFlyIcon } from "./SwapOnFlyIcon";
import { VoiceMicIcon } from "./VoiceMicIcon";
import { WordMatchingSyncIcon } from "./WordMatchingSyncIcon";

const controlGroups = [
  {
    title: "Control your session",
    body: "Run everything without breaking focus.",
    icon: SessionControlCategoryIcon,
    tone: "sage",
    features: [
      {
        title: "Menu Bar Controls",
        body: "Launch, pause, and stop without switching windows.",
        icon: MenuBarControlsIcon,
      },
      {
        title: "Keyboard & Mouse Controls",
        body: "Pause on hover, use keyboard shortcuts, or move through the script manually when needed.",
        icon: KeyboardShortcutsIcon,
      },
      {
        title: "Countdown Timer",
        body: "Start with a short countdown so you have a moment to settle before the script begins.",
        icon: CountdownTimerIcon,
      },
      {
        title: "Script Progress",
        body: "Show a thin progress line during a session so you always know where you are in the script.",
        icon: ScrollSpeedIcon,
      },
    ],
  },
  {
    title: "Keep your pace",
    body: "Stay in flow without overthinking timing.",
    icon: PaceCategoryIcon,
    tone: "terracotta",
    features: [
      {
        title: "Word Matching Sync",
        body: "Match spoken words to the script so Aira can stay synced even when you skip ahead within the visible text.",
        icon: WordMatchingSyncIcon,
      },
      {
        title: "Sound Activated Scrolling",
        body: "Scroll when Aira hears speech activity, pause when the room goes quiet, and tune the mic sensitivity for your setup.",
        icon: VoiceMicIcon,
      },
      {
        title: "Classic Scroll",
        body: "Use steady scrolling without voice input when you want a more traditional teleprompter pace.",
        icon: ClassicScrollIcon,
      },
      {
        title: "Word Highlighting",
        body: "Follow each spoken phrase with visual emphasis in Word Matching Sync, sound activated, or classic scroll mode.",
        icon: SpokenWordHighlightIcon,
      },
    ],
  },
  {
    title: "Adapt to your setup",
    body: "Make Aira fit the way you present.",
    icon: SetupCategoryIcon,
    tone: "slate",
    features: [
      {
        title: "Swap on the Fly",
        body: "Switch script focus without restarting your session.",
        icon: SwapOnFlyIcon,
      },
      {
        title: "Overlay Privacy",
        body: "Keep overlays hidden from screen sharing, or make them visible for demos and walkthroughs.",
        icon: OverlayPrivacyIcon,
      },
      {
        title: "Notch Undock",
        body: "Break the notch overlay free when you need more flexibility.",
        icon: NotchUndockIcon,
      },
      {
        title: "Pill Window Fullscreen",
        body: "Expand a Pill Window on an external display when your setup calls for it.",
        icon: PillFullscreenIcon,
      },
    ],
  },
  {
    title: "Make it comfortable to read",
    body: "Tune Aira for long sessions and different reading needs.",
    icon: ReadabilityCategoryIcon,
    tone: "warm",
    features: [
      {
        title: "Appearance",
        body: "Adjust font, text size, overlay color, text color, opacity, and script progress visibility per session.",
        icon: AppearanceIcon,
      },
      {
        title: "Accessibility Controls",
        body: "Tune spacing, padding, and text shadow for easier reading.",
        icon: AccessibilityControlsIcon,
      },
      {
        title: "OpenDyslexic Support",
        body: "Switch to OpenDyslexic for a more comfortable reading experience.",
        icon: AccessibilityControlsIcon,
      },
      {
        title: "Per-Pill Customization",
        body: "Tune appearance and readability per Pill Window without changing every other overlay.",
        icon: AppearanceIcon,
      },
    ],
  },
] as const;

export function ControlsSection() {
  return (
    <section className="section controls-section" id="controls">
      <div className="shell">
        <header className="section-header">
          <h2>More control when you need it</h2>
          <p>
            Aira gives you flexible controls for pacing, privacy, and
            readability — so your setup works the way you do.
          </p>
        </header>

        <div className="controls-group-grid">
          {controlGroups.map((group) => (
            <article
              className={`controls-group-card controls-group-card-${group.tone}`}
              key={group.title}
            >
              <div className="controls-group-head">
                <div className="controls-group-icon" aria-hidden="true">
                  <group.icon size={84} />
                </div>
                <div>
                  <h3>{group.title}</h3>
                  <p>{group.body}</p>
                </div>
              </div>

              <div className="controls-feature-list">
                {group.features.map((feature) => (
                  <div className="controls-feature-item" key={feature.title}>
                    <div className="controls-feature-icon" aria-hidden="true">
                      <feature.icon size={42} />
                    </div>
                    <div className="controls-feature-copy">
                      <h4>{feature.title}</h4>
                      <p>{feature.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
