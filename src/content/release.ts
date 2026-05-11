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
  version: "1.0.0",
  tag: "v1.0.0",
  releaseDate: "2026-05-11",
  betaLabel: "Official Launch",
  notarized: true,
  dmgUrl:
    "https://github.com/sankirthk/aira-releases/releases/download/v1.0.0/Aira-1.0.0.dmg",
  releaseNotesUrl:
    "https://github.com/sankirthk/aira-releases/releases/tag/v1.0.0",
  distributionRepo: "sankirthk/aira-releases",
  summary: [
    "**Word Matching Sync.** Offline, on-device speech recognition follows the words you are speaking using bundled WhisperKit models.",
    "**Sound Activated Scroll.** Aira can scroll while it hears speech activity and pause when the room goes quiet, with adjustable microphone sensitivity.",
    "**Notch Overlay.** The primary overlay sits near the camera and wraps around the built-in MacBook notch for natural eye contact.",
    "**Pill Windows.** Movable floating overlays can sit anywhere on screen, mirror the Notch session, or run separately selected scripts.",
    "**Stealth Mode.** Direct-distribution overlays can stay hidden from Zoom, Google Meet, Teams, and screen recordings.",
    "**Local-first script library.** Scripts stay on your Mac with collections, starring, drag-and-drop organization, and import support for PDF, DOCX, TXT, and Markdown.",
    "**Spoken-word highlighting.** Highlighting can visually track delivery in Word Matching Sync, Sound Activated Scroll, and Classic modes.",
    "**Script progress indicator.** Presenter sessions can show a thin progress line at the bottom edge of the overlay.",
    "**Appearance and readability controls.** Tune font, spacing, shadow, padding, overlay color, and per-overlay readability settings.",
    "**Signed stable updates.** Direct-distribution builds use Sparkle automatic updates over the signed stable channel.",
  ],
};

export const changelog = [
  {
    version: "1.0.0",
    date: "2026-05-11",
    tag: "release",
    changes: [
      {
        type: "added",
        description:
          "Word Matching Sync with offline on-device speech recognition via bundled WhisperKit models.",
      },
      {
        type: "added",
        description:
          "Sound Activated Scroll with adjustable microphone sensitivity.",
      },
      {
        type: "added",
        description:
          "Notch Overlay that sits near the MacBook camera and wraps around the built-in notch.",
      },
      {
        type: "added",
        description:
          "Pill Windows, movable floating overlays placeable anywhere on screen and syncable with the Notch session.",
      },
      {
        type: "added",
        description:
          "Stealth Mode support for hiding direct-distribution overlays from Zoom, Google Meet, Teams, and screen recordings.",
      },
      {
        type: "added",
        description:
          "Local-first script library with collections, starring, drag-and-drop organization, and import for PDF, DOCX, TXT, and Markdown.",
      },
      {
        type: "added",
        description:
          "Spoken-word highlighting as a visual session aid across Word Matching Sync, Sound Activated Scroll, and Classic modes.",
      },
      {
        type: "added",
        description: "Script progress indicator during presenter sessions.",
      },
      {
        type: "added",
        description:
          "Per-overlay appearance and readability customization including font, spacing, shadow, padding, and colors.",
      },
      {
        type: "added",
        description:
          "Sparkle-based automatic updates over a signed stable channel for direct-distribution builds.",
      },
    ],
  },
];
