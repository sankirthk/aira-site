interface SetupCategoryIconProps {
  size?: number;
  color?: string;
  accentColor?: string;
  className?: string;
}

export function SetupCategoryIcon({
  size = 84,
  color = "#6B8E99",
  accentColor = "#849688",
  className = "",
}: SetupCategoryIconProps) {
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
      <rect x="10" y="24" width="34" height="22" rx="5" fill="#F5F2EC" stroke="#2B2B2B" strokeWidth="2.5" />
      <rect x="40" y="16" width="34" height="40" rx="7" fill="#F5F2EC" stroke="#2B2B2B" strokeWidth="2.5" />
      <path d="M16 49H38" stroke="#2B2B2B" strokeWidth="2.4" strokeLinecap="round" opacity="0.5" />
      <path d="M51 61H63" stroke="#2B2B2B" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M57 56V67" stroke="#2B2B2B" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M46 30C36 30 31 35 28 42" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4 3" />
      <path d="M41 39L47 29L52 35" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="46" y="22" width="22" height="12" rx="3" fill={color} opacity="0.16" />
      <rect x="16" y="29" width="15" height="7" rx="3.5" fill={color} opacity="0.22" />
      <circle cx="61" cy="48" r="5" fill={color} opacity="0.85" />
    </svg>
  );
}
