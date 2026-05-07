interface SessionControlCategoryIconProps {
  size?: number;
  color?: string;
  accentColor?: string;
  className?: string;
}

export function SessionControlCategoryIcon({
  size = 84,
  color = "#849688",
  accentColor = "#C98B7A",
  className = "",
}: SessionControlCategoryIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 84 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect
        x="10"
        y="18"
        width="64"
        height="11"
        rx="5.5"
        fill="#2B2B2B"
        opacity="0.12"
      />
      <rect
        x="22"
        y="28"
        width="40"
        height="40"
        rx="8"
        fill="#F5F2EC"
        stroke="#2B2B2B"
        strokeWidth="2.5"
      />
      <rect
        x="28"
        y="35"
        width="28"
        height="8"
        rx="4"
        fill={accentColor}
        opacity="0.22"
      />
      <path
        d="M33 39H51"
        stroke={accentColor}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <rect
        x="28"
        y="48"
        width="10"
        height="10"
        rx="3"
        fill={color}
        opacity="0.88"
      />
      <path
        d="M45 49V57"
        stroke="#2B2B2B"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.58"
      />
      <path
        d="M51 49V57"
        stroke="#2B2B2B"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.32"
      />
      <circle cx="18" cy="23.5" r="3" fill={color} opacity="0.92" />
      <circle cx="58" cy="23.5" r="2" fill="#2B2B2B" opacity="0.18" />
      <circle cx="64" cy="23.5" r="2" fill="#2B2B2B" opacity="0.18" />
      <path
        d="M14 53L14 61L17 58L19 63L22 61.8L20 57.4L23 57.4Z"
        fill="#2B2B2B"
        opacity="0.55"
      />
    </svg>
  );
}
