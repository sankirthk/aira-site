interface PauseOnHoverIconProps {
  size?: number;
  color?: string;
  accentColor?: string;
  animate?: boolean;
  className?: string;
}

export function PauseOnHoverIcon({
  size = 80,
  color = "#849688",
  accentColor = "#C98B7A",
  animate = false,
  className = "",
}: PauseOnHoverIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect
        x="14"
        y="18"
        width="52"
        height="32"
        rx="12"
        fill={color}
        opacity="0.12"
      />
      <rect
        x="18"
        y="22"
        width="44"
        height="24"
        rx="10"
        fill="#F5F2EC"
        stroke="#2B2B2B"
        strokeWidth="2.5"
      />
      <path
        d="M 28,30 H 52"
        stroke={accentColor}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M 28,36 H 48"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.55"
      />

      <g className={animate ? "animate-pulse" : ""}>
        <rect
          x="31"
          y="53"
          width="5"
          height="12"
          rx="2"
          fill={accentColor}
          opacity="0.88"
        />
        <rect
          x="44"
          y="53"
          width="5"
          height="12"
          rx="2"
          fill={accentColor}
          opacity="0.88"
        />
      </g>

      <path
        d="M 22,61 Q 24,50 33,47"
        stroke={color}
        strokeWidth="2.3"
        strokeLinecap="round"
        fill="none"
        opacity="0.75"
        strokeDasharray="3,3"
      />
      <path d="M 20,64 L 23,61 L 24,65" fill="#2B2B2B" opacity="0.6" />

      <circle cx="58" cy="56" r="7" fill={accentColor} opacity="0.14" />
      <path
        d="M 55,56 H 61"
        stroke={accentColor}
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.9"
      />
    </svg>
  );
}
