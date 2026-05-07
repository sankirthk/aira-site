interface ClassicScrollIconProps {
  size?: number;
  color?: string;
  accentColor?: string;
  className?: string;
}

export function ClassicScrollIcon({
  size = 42,
  color = "#C98B7A",
  accentColor = "#849688",
  className = "",
}: ClassicScrollIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect
        x="9"
        y="7"
        width="24"
        height="28"
        rx="6"
        fill="#F5F2EC"
        stroke="#2B2B2B"
        strokeWidth="2"
      />
      <rect
        x="14"
        y="12"
        width="14"
        height="4"
        rx="2"
        fill={color}
        opacity="0.22"
      />
      <path
        d="M 14,20 H 28"
        stroke="#2B2B2B"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M 14,24 H 24"
        stroke="#2B2B2B"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.32"
      />
      <path
        d="M 21,13 V 29"
        stroke={accentColor}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeDasharray="2.2 2.2"
        opacity="0.9"
      />
      <path
        d="M 18,26 L 21,30 L 24,26"
        stroke={accentColor}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
