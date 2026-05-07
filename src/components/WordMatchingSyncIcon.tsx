interface WordMatchingSyncIconProps {
  size?: number;
  color?: string;
  accentColor?: string;
  animate?: boolean;
  className?: string;
}

export function WordMatchingSyncIcon({
  size = 80,
  color = "#849688",
  accentColor = "#C98B7A",
  animate = false,
  className = "",
}: WordMatchingSyncIconProps) {
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
        x="13"
        y="20"
        width="54"
        height="40"
        rx="8"
        fill="#F5F2EC"
        stroke="#2B2B2B"
        strokeWidth="2.5"
      />
      <path
        d="M 22,31 H 44"
        stroke="#2B2B2B"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.35"
      />
      <path
        d="M 22,42 H 38"
        stroke="#2B2B2B"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.72"
      />
      <path
        d="M 22,53 H 52"
        stroke="#2B2B2B"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.24"
      />
      <rect
        x="41"
        y="37"
        width="18"
        height="10"
        rx="5"
        fill={color}
        opacity="0.22"
      />
      <path
        d="M 43,42 H 57"
        stroke={color}
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <g className={animate ? "animate-pulse" : ""}>
        <path
          d="M 58,25 C 66,29 66,38 58,42"
          stroke={accentColor}
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
          opacity="0.72"
        />
        <path
          d="M 62,19 C 74,26 74,41 62,48"
          stroke={accentColor}
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
          opacity="0.42"
        />
      </g>
      <path
        d="M 42,63 C 50,67 58,66 64,60"
        stroke={color}
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
        strokeDasharray="3 3"
        opacity="0.72"
      />
      <path d="M 64,60 L 60,59 L 62,64 Z" fill={color} opacity="0.8" />
    </svg>
  );
}
