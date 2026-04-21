interface ScrollSpeedIconProps {
  size?: number;
  color?: string;
  accentColor?: string;
  animate?: boolean;
  className?: string;
}

export function ScrollSpeedIcon({
  size = 80,
  color = "#849688",
  accentColor = "#C98B7A",
  animate = false,
  className = "",
}: ScrollSpeedIconProps) {
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
      <path
        d="M 16,54 Q 26,42 40,42 Q 54,42 64,54"
        stroke="#2B2B2B"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.24"
      />
      <path
        d="M 16,54 Q 28,32 40,32 Q 52,32 64,54"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.82"
      />
      <path
        d="M 40,54 L 52,34"
        stroke={accentColor}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.9"
        className={animate ? "animate-pulse" : ""}
      />
      <circle cx="40" cy="54" r="3" fill="#2B2B2B" opacity="0.72" />

      <rect
        x="26"
        y="14"
        width="28"
        height="10"
        rx="3"
        fill="#2B2B2B"
        opacity="0.86"
      />
      <text
        x="40"
        y="21"
        fontSize="7"
        fill="#F5F2EC"
        textAnchor="middle"
        style={{ fontFamily: "monospace" }}
      >
        pt/s
      </text>

      <path
        d="M 20,60 H 60"
        stroke="#2B2B2B"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.14"
      />
      <circle cx="22" cy="60" r="2" fill={accentColor} opacity="0.4" />
      <circle cx="58" cy="60" r="2" fill={color} opacity="0.4" />
    </svg>
  );
}
