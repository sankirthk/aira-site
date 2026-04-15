import { AiraLogo } from "./AiraLogo";

type WordmarkProps = {
  compact?: boolean;
};

export function Wordmark({ compact = false }: WordmarkProps) {
  return (
    <div className="wordmark" aria-label="Aira">
      <AiraLogo
        size={compact ? "sm" : "md"}
        variant="full"
        color="#849688"
        className="site-aira-logo"
      />
    </div>
  );
}
