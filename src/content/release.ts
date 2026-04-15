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

export const latestRelease: ReleaseMetadata = {
  version: "",
  tag: "",
  releaseDate: "",
  betaLabel: "Public Beta",
  notarized: false,
  dmgUrl: "https://github.com/sankirthk/aira-releases/releases",
  releaseNotesUrl: "https://github.com/sankirthk/aira-releases/releases",
  distributionRepo: "sankirthk/aira-releases",
  summary: [
    "Voice-Sync follows your script with on-device speech recognition.",
    "Notch and pill overlays stay hidden from screen sharing.",
    "Built-in script editing and local-first storage are included in the beta.",
  ],
};
