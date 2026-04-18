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
  version: "1.0.0-beta.1",
  tag: "v1.0.0-beta.1",
  releaseDate: "2026-04-18",
  betaLabel: "Public Beta",
  notarized: true,
  dmgUrl:
    "https://github.com/sankirthk/aira-releases/releases/download/v1.0.0-beta.1/Aira-1.0.0-beta.1.dmg",
  releaseNotesUrl:
    "https://github.com/sankirthk/aira-releases/releases/tag/v1.0.0-beta.1",
  distributionRepo: "sankirthk/aira-releases",
  summary: [
    "**Voice-Sync teleprompting.** Aira can follow your spoken words with on-device speech recognition and advance the script in real time.",
    "**Manual scrolling is always available.** You can drive the script yourself at any time with a configurable manual pace.",
    "**Stealth overlays for live sessions.** The Notch and pill overlays are designed to remain visible to you while staying out of screen-share output.",
    "**Notch-first presentation.** The primary teleprompter window is anchored beneath the built-in MacBook camera area for direct-to-camera delivery.",
    "**Optional pill overlays.** You can enable one or two additional floating pill windows and use them in synced or fully manual modes.",
    "**Built-in script workflow.** Aira includes a local-first document library, script editor, import flow, collections, starring, duplication, and bulk selection tools.",
  ],
};

export const changelog = [
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
