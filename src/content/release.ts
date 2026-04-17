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
  version: "1.0",
  tag: "v0.1.0-beta.1",
  releaseDate: "2026-04-17",
  betaLabel: "Public Beta",
  notarized: true,
  dmgUrl: "https://github.com/sankirthk/aira-releases/releases/download/v0.1.0-beta.1/Aira-1.0.dmg",
  releaseNotesUrl: "https://github.com/sankirthk/aira-releases/releases/tag/v0.1.0-beta.1",
  distributionRepo: "sankirthk/aira-releases",
  summary: [
    "Voice activated scrolling follows your script with on-device speech recognition.",
    "Notch and pill overlays stay hidden from screen sharing.",
    "Built-in script editing and local-first storage are included in the beta.",
  ],
};

export const changelog: ChangelogEntry[] = [
  // Add entries here as you ship releases. Example:
  // {
  //   version: "0.1.0",
  //   date: "2026-04-16",
  //   tag: "beta",
  //   changes: [
  //     { type: "added", description: "Initial public beta release." },
  //     { type: "added", description: "Voice activated scrolling with on-device speech recognition." },
  //     { type: "added", description: "Notch overlay hidden from screen sharing." },
  //   ]
  // }
];
