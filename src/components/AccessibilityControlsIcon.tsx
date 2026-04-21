interface AccessibilityControlsIconProps {
  size?: number;
  color?: string;
  accentColor?: string;
  animate?: boolean;
  className?: string;
}

export function AccessibilityControlsIcon({
  size = 80,
  color = "#849688",
  accentColor = "#C98B7A",
  animate = false,
  className = "",
}: AccessibilityControlsIconProps) {
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
        y="16"
        width="52"
        height="48"
        rx="8"
        fill="#F5F2EC"
        stroke="#2B2B2B"
        strokeWidth="2.5"
        opacity="0.96"
      />

      <rect
        x="18"
        y="20"
        width="44"
        height="8"
        rx="4"
        fill={color}
        opacity="0.12"
      />
      <circle cx="24" cy="24" r="2.5" fill={accentColor} opacity="0.75" />
      <circle cx="56" cy="24" r="2.5" fill={color} opacity="0.55" />

      <path
        d="M 24,36 H 56"
        stroke="#2B2B2B"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.72"
      />
      <path
        d="M 24,45 H 54"
        stroke="#2B2B2B"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.48"
        strokeDasharray="2,3"
      />
      <path
        d="M 24,54 H 52"
        stroke="#2B2B2B"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.72"
      />

      <path
        d="M 18,33 H 21"
        stroke={accentColor}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M 18,45 H 22"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M 18,57 H 20"
        stroke={accentColor}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.55"
      />

      <g className={animate ? "animate-pulse" : ""}>
        <circle cx="62" cy="52" r="10" fill={accentColor} opacity="0.16" />
        <path
          d="M 59,52 H 65"
          stroke={accentColor}
          strokeWidth="2.4"
          strokeLinecap="round"
          opacity="0.9"
        />
        <path
          d="M 62,49 V 55"
          stroke={accentColor}
          strokeWidth="2.4"
          strokeLinecap="round"
          opacity="0.9"
        />
      </g>

      <path
        d="M 10,18 L 10,22 M 8,20 L 12,20"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.35"
      />
      <path
        d="M 68,14 L 68,18 M 66,16 L 70,16"
        stroke={accentColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  );
}
