interface CollectionsIconProps {
  size?: number;
  color?: string;
  accentColor?: string;
  animate?: boolean;
  className?: string;
}

export function CollectionsIcon({
  size = 80,
  color = "#849688",
  accentColor = "#C98B7A",
  animate = false,
  className = "",
}: CollectionsIconProps) {
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
        x="12"
        y="22"
        width="24"
        height="18"
        rx="4"
        fill={color}
        opacity="0.85"
      />
      <rect
        x="44"
        y="18"
        width="24"
        height="18"
        rx="9"
        fill={accentColor}
        opacity="0.82"
      />
      <rect
        x="22"
        y="46"
        width="36"
        height="20"
        rx="5"
        fill="#F5F2EC"
        stroke="#2B2B2B"
        strokeWidth="2.5"
        opacity="0.96"
      />

      <path
        d="M 18,29 H 30"
        stroke="#F5F2EC"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.65"
      />
      <path
        d="M 50,25 H 62"
        stroke="#F5F2EC"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.62"
      />
      <path
        d="M 30,55 H 50"
        stroke="#2B2B2B"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.46"
      />
      <path
        d="M 30,60 H 46"
        stroke="#2B2B2B"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.3"
      />

      <g className={animate ? "animate-pulse" : ""}>
        <path
          d="M 36,36 Q 40,40 40,46"
          stroke={accentColor}
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.85"
        />
        <path
          d="M 40,46 L 37,42 M 40,46 L 43,42"
          stroke={accentColor}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.85"
        />
        <path
          d="M 44,36 Q 40,40 40,46"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.82"
        />
      </g>

      <circle cx="18" cy="51" r="2" fill={color} opacity="0.26" />
      <circle cx="62" cy="49" r="2" fill={accentColor} opacity="0.26" />
      <path
        d="M 60,60 L 60,64 M 58,62 L 62,62"
        stroke={accentColor}
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.36"
      />
    </svg>
  );
}
