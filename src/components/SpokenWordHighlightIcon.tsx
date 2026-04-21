interface SpokenWordHighlightIconProps {
  size?: number;
  color?: string;
  accentColor?: string;
  animate?: boolean;
  className?: string;
}

export function SpokenWordHighlightIcon({
  size = 80,
  color = "#849688",
  accentColor = "#C98B7A",
  animate = false,
  className = "",
}: SpokenWordHighlightIconProps) {
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
        y="20"
        width="52"
        height="40"
        rx="8"
        fill="#F5F2EC"
        stroke="#2B2B2B"
        strokeWidth="2.5"
        opacity="0.96"
      />
      <path
        d="M 22,31 H 58"
        stroke="#2B2B2B"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.3"
      />
      <rect
        x="24"
        y="38"
        width="32"
        height="9"
        rx="4.5"
        fill={accentColor}
        opacity="0.28"
      />
      <path
        d="M 28,42.5 H 52"
        stroke="#2B2B2B"
        strokeWidth="2.1"
        strokeLinecap="round"
        opacity="0.76"
      />
      <path
        d="M 22,54 H 46"
        stroke="#2B2B2B"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.24"
      />

      <g className={animate ? "animate-pulse" : ""}>
        <path
          d="M 62,28 Q 68,34 62,40"
          stroke={color}
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
          opacity="0.68"
        />
        <path
          d="M 66,24 Q 74,34 66,44"
          stroke={accentColor}
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
          opacity="0.46"
        />
      </g>

      <circle cx="18" cy="18" r="2" fill={color} opacity="0.24" />
      <path
        d="M 58,14 L 58,18 M 56,16 H 60"
        stroke={accentColor}
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.36"
      />
    </svg>
  );
}
