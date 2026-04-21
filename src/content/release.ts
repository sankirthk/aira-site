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
  version: "1.0.0-beta.4",
  tag: "v1.0.0-beta.4",
  releaseDate: "2026-04-21",
  betaLabel: "Public Beta",
  notarized: true,
  dmgUrl:
    "https://github.com/sankirthk/aira-releases/releases/download/v1.0.0-beta.4/Aira-1.0.0-beta.4.dmg",
  releaseNotesUrl:
    "https://github.com/sankirthk/aira-releases/releases/tag/v1.0.0-beta.4",
  distributionRepo: "sankirthk/aira-releases",
  summary: [
    "**A roomier updater prompt.** The Sparkle update dialog now uses a larger window size so the branded copy and actions fit more comfortably.",
    "**Softer, more polished corners.** The updater prompt now uses a rounder card shape that better matches Aira's visual language.",
  ],
};

export const changelog = [
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
