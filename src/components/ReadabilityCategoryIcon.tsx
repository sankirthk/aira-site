interface ReadabilityCategoryIconProps {
  size?: number;
  color?: string;
  accentColor?: string;
  className?: string;
}

export function ReadabilityCategoryIcon({
  size = 84,
  color = "#D4A574",
  accentColor = "#849688",
  className = "",
}: ReadabilityCategoryIconProps) {
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
      <rect x="18" y="16" width="48" height="52" rx="9" fill="#F5F2EC" stroke="#2B2B2B" strokeWidth="2.5" />
      <rect x="26" y="25" width="32" height="7" rx="3.5" fill={color} opacity="0.22" />
      <path d="M28 39H56" stroke="#2B2B2B" strokeWidth="2.4" strokeLinecap="round" opacity="0.68" />
      <path d="M28 47H56" stroke="#2B2B2B" strokeWidth="2.4" strokeLinecap="round" opacity="0.42" />
      <path d="M28 55H48" stroke="#2B2B2B" strokeWidth="2.4" strokeLinecap="round" opacity="0.22" />
      <circle cx="62" cy="58" r="10" fill="white" stroke="#2B2B2B" strokeWidth="2.5" />
      <path d="M58 58C59.8 54.6 64.2 54.6 66 58C64.2 61.4 59.8 61.4 58 58Z" fill={accentColor} opacity="0.75" />
      <circle cx="62" cy="58" r="2.2" fill="#2B2B2B" />
      <path d="M14 28C16 24 19 20 23 18" stroke={color} strokeWidth="2.2" strokeLinecap="round" opacity="0.35" />
    </svg>
  );
}
