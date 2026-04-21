interface PillFullscreenIconProps {
  size?: number;
  color?: string;
  accentColor?: string;
  animate?: boolean;
  className?: string;
}

export function PillFullscreenIcon({
  size = 80,
  color = "#849688",
  accentColor = "#C98B7A",
  animate = false,
  className = "",
}: PillFullscreenIconProps) {
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
        x="20"
        y="28"
        width="40"
        height="20"
        rx="10"
        fill={accentColor}
        opacity="0.86"
      />
      <path
        d="M 28,35 H 52"
        stroke="#F5F2EC"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.68"
      />
      <path
        d="M 28,40 H 48"
        stroke="#F5F2EC"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.5"
      />

      <g className={animate ? "animate-pulse" : ""}>
        <path
          d="M 18,20 V 12 H 26"
          stroke={color}
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.78"
        />
        <path
          d="M 62,20 V 12 H 54"
          stroke={color}
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.78"
        />
        <path
          d="M 18,56 V 64 H 26"
          stroke={color}
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.78"
        />
        <path
          d="M 62,56 V 64 H 54"
          stroke={color}
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.78"
        />
      </g>

      <circle cx="14" cy="40" r="2" fill={accentColor} opacity="0.25" />
      <circle cx="66" cy="40" r="2" fill={accentColor} opacity="0.25" />
      <path
        d="M 40,18 V 22 M 38,20 H 42"
        stroke={accentColor}
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.36"
      />
    </svg>
  );
}
