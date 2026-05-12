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
  version: "1.0.1",
  tag: "v1.0.1",
  releaseDate: "2026-05-12",
  betaLabel: "Official Launch",
  notarized: true,
  dmgUrl:
    "https://github.com/sankirthk/aira-releases/releases/download/v1.0.1/Aira-1.0.1.dmg",
  releaseNotesUrl:
    "https://github.com/sankirthk/aira-releases/releases/tag/v1.0.1",
  distributionRepo: "sankirthk/aira-releases",
  summary: [
    "**Better recognition during calls.** Word Matching Sync now accepts usable Zoom and call-processed speech that previously sat below the recognition preprocessing floor.",
    "**Stronger bounded gain for quiet speech.** Aira boosts valid low-level microphone input more aggressively before speech recognition while keeping noise rejection in place.",
    "**Regression coverage for call audio.** The test suite now covers call-processed speech levels below the old gate.",
  ],
};

export const changelog = [
  {
    version: "1.0.1",
    date: "2026-05-12",
    tag: "release",
    changes: [
      {
        type: "fixed",
        description:
          "Word Matching Sync now accepts usable Zoom and call-processed speech below the old recognition preprocessing floor.",
      },
      {
        type: "changed",
        description:
          "Recognition preprocessing now applies stronger bounded gain to quiet but valid microphone input.",
      },
    ],
  },
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
