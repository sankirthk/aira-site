export type ReleaseMetadata = {
  version?: string;
  tag?: string;
  releaseDate?: string;
  betaLabel: string;
  notarized: boolean;
  dmgUrl: string;
  releaseNotesUrl: string;
  distributionRepo: string;
  summary: string[];
};

export type ChangelogEntry = {
  version: string;
  date: string;
  tag: "beta" | "release" | "hotfix";
  changes: {
    type: "added" | "changed" | "fixed" | "removed";
    description: string;
  }[];
};

export const latestRelease: ReleaseMetadata = {
  version: "1.0.0-beta.7.1",
  tag: "v1.0.0-beta.7.1",
  releaseDate: "2026-05-08",
  betaLabel: "Public Beta",
  notarized: true,
  dmgUrl:
    "https://github.com/sankirthk/aira-releases/releases/download/v1.0.0-beta.7.1/Aira-1.0.0-beta.7.1.dmg",
  releaseNotesUrl:
    "https://github.com/sankirthk/aira-releases/releases/tag/v1.0.0-beta.7.1",
  distributionRepo: "sankirthk/aira-releases",
  summary: [
    "**Clear Word Tracking startup state.** First cold Word Tracking sessions show `Getting ready...` while WhisperKit prepares.",
    "**No silent non-scrolling start.** Speech-driven scrolling begins only after the Word Tracking backend reports ready.",
    "**No arbitrary extra countdown.** After readiness, Aira honors the configured countdown exactly, including starting immediately when countdown is set to 0.",
    "**One-time gate per launch.** Once Word Tracking has prepared, later Word Tracking sessions skip the readiness screen.",
  ],
};

export const changelog = [
  {
    version: "1.0.0-beta.7.1",
    date: "2026-05-08",
    tag: "beta",
    changes: [
      {
        type: "fixed",
        description:
          "Cold Word Tracking launches now show `Getting ready...` while WhisperKit prepares instead of allowing a silent non-scrolling start.",
      },
      {
        type: "fixed",
        description:
          "Word Tracking startup now honors the configured countdown after model readiness, including immediate start when countdown is set to 0.",
      },
      {
        type: "changed",
        description:
          "Word Tracking readiness is remembered for the current app launch so later sessions skip the preparation screen.",
      },
    ],
  },
  {
    version: "1.0.0-beta.7",
    date: "2026-05-08",
    tag: "beta",
    changes: [
      {
        type: "added",
        description: "Optional presenter script progress indicator.",
      },
      {
        type: "added",
        description:
          "System > During Session toggle for showing script progress.",
      },
      {
        type: "fixed",
        description:
          "Beta release now includes the progress indicator feature that was previously documented but missing from the shipped DMG.",
      },
    ],
  },
  {
    version: "1.0.0-beta.6",
    date: "2026-05-07",
    tag: "beta",
    changes: [
      {
        type: "added",
        description:
          "Offline Word Matching Sync powered by bundled WhisperKit models.",
      },
      {
        type: "added",
        description:
          "Launch-time Pill Window setup from Script Editor and script overview chevrons.",
      },
      {
        type: "added",
        description:
          "Per-Pill Window appearance and readability customization.",
      },
      {
        type: "added",
        description: "Optional presenter script progress indicator.",
      },
      {
        type: "changed",
        description:
          "Pill Window content is now selected at launch time instead of being preconfigured in Preferences.",
      },
      {
        type: "changed",
        description:
          "Classic scroll speed now uses a 10-30 points-per-second range with a default of 10.",
      },
      {
        type: "changed",
        description:
          "Microphone controls now mute and resume audio capture instead of only pausing scroll movement.",
      },
      {
        type: "changed",
        description:
          "Word highlighting now starts faster and can recover from skipped visible lines after a 2+ word phrase match.",
      },
      {
        type: "changed",
        description:
          "Split buttons, reset buttons, dropdown rows, and color swatches now use full visible-area hit targets.",
      },
      {
        type: "fixed",
        description:
          "Empty or whitespace-only scripts can no longer launch empty presenter sessions.",
      },
      {
        type: "fixed",
        description:
          "Escape handling works correctly with fullscreen while still ending presenter sessions.",
      },
      {
        type: "fixed",
        description:
          "Manager-window traffic lights are restored after presenter sessions end.",
      },
      {
        type: "fixed",
        description:
          "Menu bar quick-access launches stay visible and respect the selected voice mode.",
      },
      {
        type: "fixed",
        description:
          "Manual Pill Windows no longer respond to shared Notch scroll shortcuts.",
      },
      {
        type: "fixed",
        description:
          "Script highlights are scoped to the active script so swapped overlays do not show stale highlights.",
      },
      {
        type: "fixed",
        description:
          "Sandbox-compatible log export now uses non-blocking save-panel presentation.",
      },
    ],
  },
  {
    version: "1.0.0-beta.5",
    date: "2026-04-21",
    tag: "beta",
    changes: [
      {
        type: "changed",
        description:
          "The **System** settings section is now labeled **Session**.",
      },
      {
        type: "changed",
        description:
          "Clicking anywhere on the overlay font row now opens the font dropdown.",
      },
      {
        type: "changed",
        description:
          "The Notch preview now more closely matches the real overlay layout and proportions.",
      },
      {
        type: "changed",
        description:
          "Notch width, notch height, and overlay font size now use tighter, more realistic bounds.",
      },
      {
        type: "fixed",
        description:
          "Launch-time permission handling was refined to reduce repeated accessibility, microphone, and speech-recognition prompts.",
      },
    ],
  },
  {
    version: "1.0.0-beta.4",
    date: "2026-04-21",
    tag: "beta",
    changes: [
      {
        type: "changed",
        description:
          "The direct-distribution updater prompt now uses a larger window size for a more comfortable layout.",
      },
      {
        type: "changed",
        description:
          "The updater prompt card now uses more rounded corners and roomier internal spacing.",
      },
    ],
  },
  {
    version: "1.0.0-beta.3",
    date: "2026-04-21",
    tag: "beta",
    changes: [
      {
        type: "added",
        description:
          "A new collection-management flow from script-card hover actions, including a modal that supports multi-collection assignment and inline collection creation.",
      },
      {
        type: "added",
        description:
          "Drag-and-drop for adding script cards directly to collections from the library grid.",
      },
      {
        type: "added",
        description:
          "Script-card context-menu actions for starring, duplicating, adding to collections, and deleting.",
      },
      {
        type: "added",
        description:
          "Accessibility controls in Notch settings for letter spacing, line spacing, word spacing, text shadow, and text padding.",
      },
      {
        type: "added",
        description:
          "Spoken-word highlighting as an optional visual-only session aid.",
      },
      {
        type: "added",
        description:
          "Notch undock, move, resize, fullscreen, and smooth dock-back behavior when no Pill overlays are active.",
      },
      {
        type: "changed",
        description:
          "Preferences now separate Pill settings into their own tab and reorganize System settings into Before Your Session, During Your Session, Controls, and Privacy.",
      },
      {
        type: "changed",
        description:
          "Manual auto-scroll pacing now uses points-per-second values instead of WPM-style speed math for more stable motion.",
      },
      {
        type: "changed",
        description:
          "Overlay interactions now use hover-button controls in place of most overlay context-menu actions.",
      },
      {
        type: "changed",
        description:
          "Overlay privacy is now user-configurable, with screen-share hiding still enabled by default.",
      },
      {
        type: "changed",
        description:
          "The menu bar icon now adapts between light and dark appearances.",
      },
      {
        type: "changed",
        description:
          "Direct-distribution release automation now separates stable and beta Sparkle feeds and enforces monotonically increasing build numbers.",
      },
      {
        type: "removed",
        description: "Mood presets from Notch settings.",
      },
      {
        type: "fixed",
        description:
          "The Scripts view no longer blank out after a presenter session or require a tab switch to reappear.",
      },
      {
        type: "fixed",
        description:
          "The menu bar quick-access window is now easier to dismiss by clicking anywhere outside it.",
      },
      {
        type: "fixed",
        description:
          "Sparkle beta releases now publish newer appcast build numbers so installed beta builds can detect the next beta update.",
      },
    ],
  },
  {
    version: "1.0.0-beta.2",
    date: "2026-04-21",
    tag: "beta",
    changes: [
      {
        type: "added",
        description:
          "A new collection-management flow from script-card hover actions, including a modal that supports multi-collection assignment and inline collection creation.",
      },
      {
        type: "added",
        description:
          "Drag-and-drop for adding script cards directly to collections from the library grid.",
      },
      {
        type: "added",
        description:
          "Script-card context-menu actions for starring, duplicating, adding to collections, and deleting.",
      },
      {
        type: "added",
        description:
          "Accessibility controls in Notch settings for letter spacing, line spacing, word spacing, text shadow, and text padding.",
      },
      {
        type: "added",
        description:
          "Spoken-word highlighting as an optional visual-only session aid.",
      },
      {
        type: "added",
        description:
          "Notch undock, move, resize, fullscreen, and smooth dock-back behavior when no Pill overlays are active.",
      },
      {
        type: "changed",
        description:
          "Preferences now separate Pill settings into their own tab and reorganize System settings into Before Your Session, During Your Session, Controls, and Privacy.",
      },
      {
        type: "changed",
        description:
          "Manual auto-scroll pacing now uses points-per-second values instead of WPM-style speed math for more stable motion.",
      },
      {
        type: "changed",
        description:
          "Overlay interactions now use hover-button controls in place of most overlay context-menu actions.",
      },
      {
        type: "changed",
        description:
          "Overlay privacy is now user-configurable, with screen-share hiding still enabled by default.",
      },
      {
        type: "changed",
        description:
          "The menu bar icon now adapts between light and dark appearances.",
      },
      {
        type: "removed",
        description: "Mood presets from Notch settings.",
      },
      {
        type: "fixed",
        description:
          "The Scripts view no longer blank out after a presenter session or require a tab switch to reappear.",
      },
      {
        type: "fixed",
        description:
          "The menu bar quick-access window is now easier to dismiss by clicking anywhere outside it.",
      },
    ],
  },
  {
    version: "1.0.0-beta.1",
    date: "2026-04-18",
    tag: "beta",
    changes: [
      {
        type: "added",
        description:
          "First public beta of Aira, a native macOS teleprompter built around a notch-first reading experience.",
      },
      {
        type: "added",
        description:
          "Voice-Sync teleprompting with on-device speech recognition and pause-on-silence behavior.",
      },
      {
        type: "added",
        description:
          "Manual scrolling with configurable pace, plus synced and fully manual pill overlay modes.",
      },
      {
        type: "added",
        description:
          "Stealth-oriented Notch and pill overlays designed to stay out of screen-share output during live sessions.",
      },
      {
        type: "added",
        description:
          "Built-in script editor and local-first document library with import, collections, starring, duplication, and bulk delete workflows.",
      },
      {
        type: "added",
        description:
          "Direct distribution through notarized DMG installs with Sparkle-based in-app update support for installed copies.",
      },
    ],
  },
];
