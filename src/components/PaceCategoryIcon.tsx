interface PaceCategoryIconProps {
  size?: number;
  color?: string;
  accentColor?: string;
  className?: string;
}

export function PaceCategoryIcon({
  size = 84,
  color = "#C98B7A",
  accentColor = "#849688",
  className = "",
}: PaceCategoryIconProps) {
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
      <circle cx="42" cy="42" r="24" fill="#F5F2EC" stroke="#2B2B2B" strokeWidth="2.5" />
      <circle cx="42" cy="42" r="16" fill={color} opacity="0.14" />
      <path d="M42 42L42 28" stroke="#2B2B2B" strokeWidth="2.8" strokeLinecap="round" />
      <path d="M42 42L53 48" stroke={color} strokeWidth="3.2" strokeLinecap="round" />
      <circle cx="42" cy="42" r="3.5" fill={color} />
      <path d="M18 42C18 28 28 18 42 18" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 3" opacity="0.7" />
      <path d="M66 42C66 56 56 66 42 66" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 3" opacity="0.45" />
      <path d="M14 29C18 23 23 19 28 16" stroke={color} strokeWidth="2.2" strokeLinecap="round" opacity="0.35" />
      <path d="M56 68C61 66 65 63 69 58" stroke={color} strokeWidth="2.2" strokeLinecap="round" opacity="0.35" />
    </svg>
  );
}
