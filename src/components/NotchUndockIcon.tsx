interface NotchUndockIconProps {
  size?: number;
  color?: string;
  accentColor?: string;
  animate?: boolean;
  className?: string;
}

export function NotchUndockIcon({
  size = 80,
  color = "#849688",
  accentColor = "#C98B7A",
  animate = false,
  className = "",
}: NotchUndockIconProps) {
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
        y="14"
        width="56"
        height="22"
        rx="8"
        fill="#F5F2EC"
        stroke="#2B2B2B"
        strokeWidth="2.5"
        opacity="0.96"
      />
      <path
        d="M 30,14 H 50 Q 52,14 52,16 V 24 Q 52,26 50,26 H 46 Q 43,26 41,28 L 39,30 L 37,28 Q 35,26 32,26 H 30 Q 28,26 28,24 V 16 Q 28,14 30,14 Z"
        fill="#2B2B2B"
        opacity="0.9"
      />

      <rect
        x="26"
        y="46"
        width="30"
        height="18"
        rx="7"
        fill={accentColor}
        opacity="0.86"
      />

      <path
        d="M 40,36 V 46"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="3,3"
        opacity="0.72"
      />
      <path
        d="M 40,46 L 36,42 M 40,46 L 44,42"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.82"
      />

      <g className={animate ? "animate-pulse" : ""}>
        <path
          d="M 55,49 Q 63,49 66,44"
          stroke={accentColor}
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M 64,42 L 66,44 L 63,45"
          stroke={accentColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.6"
        />
      </g>

      <path
        d="M 24,51 H 20"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.44"
      />
      <path
        d="M 18,18 L 18,22 M 16,20 L 20,20"
        stroke={accentColor}
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.35"
      />
    </svg>
  );
}
