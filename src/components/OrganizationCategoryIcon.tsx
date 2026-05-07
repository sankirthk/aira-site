interface OrganizationCategoryIconProps {
  size?: number;
  color?: string;
  accentColor?: string;
  className?: string;
}

export function OrganizationCategoryIcon({
  size = 84,
  color = "#849688",
  accentColor = "#D4A574",
  className = "",
}: OrganizationCategoryIconProps) {
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
      <path d="M18 27H35L39 32H66V61C66 65 63 68 59 68H25C21 68 18 65 18 61V27Z" fill="#F5F2EC" stroke="#2B2B2B" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M18 34H66" stroke="#2B2B2B" strokeWidth="2.2" opacity="0.28" />
      <rect x="25" y="41" width="18" height="14" rx="4" fill={color} opacity="0.2" />
      <rect x="46" y="41" width="13" height="5" rx="2.5" fill={accentColor} opacity="0.3" />
      <rect x="46" y="50" width="10" height="5" rx="2.5" fill="#2B2B2B" opacity="0.14" />
      <path d="M32 19L34.6 24.2L40 24.9L36 28.7L36.9 34L32 31.4L27.1 34L28 28.7L24 24.9L29.4 24.2L32 19Z" fill={accentColor} opacity="0.9" />
    </svg>
  );
}
