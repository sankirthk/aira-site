interface OverlayPrivacyIconProps {
  size?: number;
  color?: string;
  accentColor?: string;
  animate?: boolean;
  className?: string;
}

export function OverlayPrivacyIcon({
  size = 80,
  color = "#849688",
  accentColor = "#C98B7A",
  animate = false,
  className = "",
}: OverlayPrivacyIconProps) {
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
        height="30"
        rx="10"
        fill={color}
        opacity="0.12"
      />
      <rect
        x="20"
        y="26"
        width="40"
        height="18"
        rx="8"
        fill={accentColor}
        opacity="0.84"
      />
      <path
        d="M 27,35 H 53"
        stroke="#F5F2EC"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.66"
      />
      <path
        d="M 18,58 Q 40,44 62,58 Q 40,72 18,58 Z"
        fill="#F5F2EC"
        stroke="#2B2B2B"
        strokeWidth="2.5"
        opacity="0.96"
      />
      <circle cx="40" cy="58" r="8" fill={color} opacity="0.18" />
      <circle cx="40" cy="58" r="4.5" fill="#2B2B2B" opacity="0.78" />

      <g className={animate ? "animate-pulse" : ""}>
        <path
          d="M 20,18 L 60,62"
          stroke={accentColor}
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.85"
        />
      </g>

      <path
        d="M 62,18 L 62,22 M 60,20 L 64,20"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.35"
      />
      <circle cx="16" cy="52" r="2" fill={accentColor} opacity="0.24" />
    </svg>
  );
}
