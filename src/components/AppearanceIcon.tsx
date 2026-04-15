interface AppearanceIconProps {
  size?: number;
  color?: string;
  accentColor?: string;
  animate?: boolean;
  className?: string;
}

export function AppearanceIcon({
  size = 80,
  color = "#849688",
  accentColor = "#C98B7A",
  animate = false,
  className = ""
}: AppearanceIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M 25,35 Q 20,30 22,25 Q 25,20 35,18 Q 45,18 55,20 Q 62,23 65,30 Q 67,38 62,45 Q 58,50 50,52 Q 45,53 42,50 Q 40,48 38,48 Q 35,48 33,50 Q 30,53 25,50 Q 22,47 23,42 Q 24,38 25,35 Z"
        fill={color}
        opacity="0.9"
      />
      <ellipse cx="28" cy="42" rx="4" ry="5" fill="#F5F2EC" opacity="0.6" />

      <circle cx="35" cy="28" r="4.5" fill={accentColor} opacity="0.95" className={animate ? "animate-pulse" : ""} style={{ animationDelay: "0s" }} />
      <circle cx="35" cy="28" r="3" fill={accentColor} opacity="0.7" />
      <circle cx="48" cy="26" r="4.5" fill={color} opacity="0.95" className={animate ? "animate-pulse" : ""} style={{ animationDelay: "0.2s" }} />
      <circle cx="48" cy="26" r="3" fill={color} opacity="0.7" />
      <circle cx="55" cy="35" r="4.5" fill="#2B2B2B" opacity="0.95" className={animate ? "animate-pulse" : ""} style={{ animationDelay: "0.4s" }} />
      <circle cx="55" cy="35" r="3" fill="#2B2B2B" opacity="0.7" />
      <circle cx="45" cy="38" r="4.5" fill="#F5F2EC" stroke="#2B2B2B" strokeWidth="1" opacity="0.95" className={animate ? "animate-pulse" : ""} style={{ animationDelay: "0.6s" }} />
      <circle cx="45" cy="38" r="3" fill="#F5F2EC" opacity="0.8" />

      <g>
        <path d="M 52,48 L 62,58" stroke="#C98B7A" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 52,48 L 62,58" stroke="#F5F2EC" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
        <path d="M 50,46 L 54,50" stroke="#2B2B2B" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
        <path d="M 47,43 Q 48,44 50,46" stroke={accentColor} strokeWidth="4" strokeLinecap="round" opacity="0.7" />
        <path d="M 46,44 Q 47,45 49,47" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
        <path d="M 48,42 Q 49,43 51,45" stroke={accentColor} strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      </g>

      <g opacity="0.25">
        <line x1="12" y1="15" x2="30" y2="15" stroke="#2B2B2B" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="24" cy="15" r="2.5" fill={accentColor} />
        <text x="10" y="13" fontSize="5" fill="#2B2B2B" style={{ fontFamily: "'Indie Flower', cursive" }}>
          A
        </text>
        <line x1="50" y1="60" x2="68" y2="60" stroke="#2B2B2B" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="62" cy="60" r="2.5" fill={color} />
        <circle cx="48" cy="60" r="1.5" fill="#2B2B2B" opacity="0.3" />
      </g>

      <rect x="15" y="55" width="10" height="10" rx="1.5" fill={color} opacity="0.3" />
      <rect x="15" y="67" width="10" height="10" rx="1.5" fill={accentColor} opacity="0.3" />

      <path d="M 38,15 L 38,19 M 36,17 L 40,17" stroke={accentColor} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M 68,45 L 68,48 M 66.5,46.5 L 69.5,46.5" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}
