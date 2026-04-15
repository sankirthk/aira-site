type AiraLogoProps = {
  size?: "sm" | "md" | "lg";
  variant?: "full" | "icon" | "wordmark";
  color?: string;
  className?: string;
};

export function AiraLogo({
  size = "md",
  variant = "full",
  color = "#849688",
  className = "",
}: AiraLogoProps) {
  const dimensions = {
    sm: { iconSize: 24, fontSize: "16px" },
    md: { iconSize: 36, fontSize: "24px" },
    lg: { iconSize: 48, fontSize: "32px" },
  };

  const dim = dimensions[size];

  const sparkleIcon = (
    <svg
      width={dim.iconSize}
      height={dim.iconSize}
      viewBox="0 0 48 48"
      aria-hidden="true"
      style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.1))" }}
    >
      <circle
        cx="24"
        cy="24"
        r="4.5"
        fill={color}
        stroke={color}
        strokeWidth="1.5"
        style={{ filter: "url(#wobble-sparkle)" }}
      />

      <g stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round">
        <path
          d="M 24,19 Q 23.5,14 24,8 Q 24.3,7 24,6 Q 23.7,7 24,8 Q 24.5,14 24,19"
          style={{ filter: "url(#wobble-ray-1)" }}
        />
        <path
          d="M 29,24 Q 34,23.5 40,24 Q 41,24.3 42,24 Q 41,23.7 40,24 Q 34,24.5 29,24"
          style={{ filter: "url(#wobble-ray-2)" }}
        />
        <path
          d="M 24,29 Q 24.5,34 24,40 Q 23.7,41 24,42 Q 24.3,41 24,40 Q 23.5,34 24,29"
          style={{ filter: "url(#wobble-ray-3)" }}
        />
        <path
          d="M 19,24 Q 14,24.5 8,24 Q 7,23.7 6,24 Q 7,24.3 8,24 Q 14,23.5 19,24"
          style={{ filter: "url(#wobble-ray-4)" }}
        />
      </g>

      <g
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        opacity="0.7"
      >
        <path
          d="M 28,20 Q 31,17 34,14"
          style={{ filter: "url(#wobble-mini-1)" }}
        />
        <path
          d="M 28,28 Q 31,31 34,34"
          style={{ filter: "url(#wobble-mini-2)" }}
        />
        <path
          d="M 20,28 Q 17,31 14,34"
          style={{ filter: "url(#wobble-mini-3)" }}
        />
        <path
          d="M 20,20 Q 17,17 14,14"
          style={{ filter: "url(#wobble-mini-4)" }}
        />
      </g>

      <g opacity="0.2" stroke={color} strokeWidth="0.5">
        <path d="M 21,24 L 27,24" />
        <path d="M 24,21 L 24,27" />
        <path d="M 22,22 L 26,26" />
        <path d="M 22,26 L 26,22" />
      </g>

      <defs>
        <filter id="wobble-sparkle">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="2"
            result="noise"
          />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.8" />
        </filter>
        <filter id="wobble-ray-1">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.5"
            numOctaves="1"
            seed="1"
            result="noise"
          />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.2" />
        </filter>
        <filter id="wobble-ray-2">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.5"
            numOctaves="1"
            seed="2"
            result="noise"
          />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.2" />
        </filter>
        <filter id="wobble-ray-3">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.5"
            numOctaves="1"
            seed="3"
            result="noise"
          />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.2" />
        </filter>
        <filter id="wobble-ray-4">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.5"
            numOctaves="1"
            seed="4"
            result="noise"
          />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.2" />
        </filter>
        <filter id="wobble-mini-1">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.6"
            numOctaves="1"
            seed="5"
            result="noise"
          />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
        </filter>
        <filter id="wobble-mini-2">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.6"
            numOctaves="1"
            seed="6"
            result="noise"
          />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
        </filter>
        <filter id="wobble-mini-3">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.6"
            numOctaves="1"
            seed="7"
            result="noise"
          />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
        </filter>
        <filter id="wobble-mini-4">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.6"
            numOctaves="1"
            seed="8"
            result="noise"
          />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
        </filter>
      </defs>
    </svg>
  );

  const wordmark = (
    <div
      style={{
        position: "relative",
        display: "inline-block",
        fontFamily: "'Manrope', sans-serif",
        fontSize: dim.fontSize,
        fontWeight: 700,
        color,
        letterSpacing: "-0.02em",
      }}
    >
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          left: 0,
          bottom: "-4px",
          width: "100%",
          height: "6px",
        }}
        viewBox="0 0 100 6"
        preserveAspectRatio="none"
      >
        <path
          d="M 2,3 Q 25,2 50,3 Q 75,4 98,3"
          stroke={color}
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.3"
          style={{ filter: "url(#wobble-underline)" }}
        />
        <defs>
          <filter id="wobble-underline">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.4"
              numOctaves="1"
              result="noise"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" />
          </filter>
        </defs>
      </svg>

      <span style={{ position: "relative", zIndex: 1 }}>Aira</span>

      <svg
        aria-hidden="true"
        style={{ display: "inline-block", marginLeft: "2px" }}
        width={size === "sm" ? "4" : size === "md" ? "6" : "8"}
        height={size === "sm" ? "4" : size === "md" ? "6" : "8"}
        viewBox="0 0 8 8"
      >
        <circle
          cx="4"
          cy="4"
          r="2.5"
          fill={color}
          opacity="0.6"
          style={{ filter: "url(#wobble-dot)" }}
        />
        <defs>
          <filter id="wobble-dot">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="1"
              result="noise"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.8" />
          </filter>
        </defs>
      </svg>
    </div>
  );

  return (
    <div
      className={className}
      style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
    >
      {(variant === "full" || variant === "icon") && sparkleIcon}
      {(variant === "full" || variant === "wordmark") && wordmark}
    </div>
  );
}
