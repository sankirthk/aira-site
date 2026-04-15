interface MenuBarControlsIconProps {
  size?: number;
  color?: string;
  accentColor?: string;
  animate?: boolean;
  className?: string;
}

export function MenuBarControlsIcon({
  size = 80,
  color = "#849688",
  accentColor = "#C98B7A",
  animate = false,
  className = ""
}: MenuBarControlsIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="10" y="15" width="60" height="10" rx="2" fill="#2B2B2B" opacity="0.15" />

      <g>
        <circle cx="18" cy="20" r="3" fill={color} opacity="0.9" />
        <path d="M 18,16 L 18,24 M 14,20 L 22,20" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      </g>

      <circle cx="55" cy="20" r="2" fill="#2B2B2B" opacity="0.3" />
      <circle cx="60" cy="20" r="2" fill="#2B2B2B" opacity="0.3" />
      <circle cx="65" cy="20" r="2" fill="#2B2B2B" opacity="0.3" />

      <rect x="22" y="28" width="36" height="40" rx="3" fill="#F5F2EC" stroke="#2B2B2B" strokeWidth="2.5" opacity="0.95" />

      <g className={animate ? "animate-pulse" : ""} style={{ animationDelay: "0s" }}>
        <rect x="26" y="32" width="28" height="8" rx="1.5" fill={accentColor} opacity="0.15" />
        <path d="M 29,36 L 33,38.5 L 29,41 Z" fill={accentColor} opacity="0.8" />
        <text x="36" y="38.5" fontSize="6" fill="#2B2B2B" style={{ fontFamily: "'Indie Flower', cursive" }}>
          Launch
        </text>
      </g>

      <g>
        <rect x="29" y="44" width="2" height="5" fill={color} opacity="0.7" />
        <rect x="32" y="44" width="2" height="5" fill={color} opacity="0.7" />
        <text x="36" y="47.5" fontSize="6" fill="#2B2B2B" opacity="0.6" style={{ fontFamily: "'Indie Flower', cursive" }}>
          Pause
        </text>
      </g>

      <g>
        <rect x="29" y="53" width="5" height="5" fill={color} opacity="0.7" />
        <text x="36" y="57" fontSize="6" fill="#2B2B2B" opacity="0.6" style={{ fontFamily: "'Indie Flower', cursive" }}>
          Stop
        </text>
      </g>

      <line x1="26" y1="50" x2="54" y2="50" stroke="#2B2B2B" strokeWidth="1" opacity="0.15" strokeDasharray="2,2" />

      <text x="50" y="38.5" fontSize="5" fill="#2B2B2B" opacity="0.4" textAnchor="end" style={{ fontFamily: "monospace" }}>
        ⌘P
      </text>
      <text x="50" y="47.5" fontSize="5" fill="#2B2B2B" opacity="0.3" textAnchor="end" style={{ fontFamily: "monospace" }}>
        ⌘K
      </text>
      <text x="50" y="57" fontSize="5" fill="#2B2B2B" opacity="0.3" textAnchor="end" style={{ fontFamily: "monospace" }}>
        ⌘S
      </text>

      <path d="M 18,30 L 18,38 L 20,36 L 22,40 L 24,39 L 22,35 L 24,35 Z" fill="#2B2B2B" opacity="0.6" />

      <path
        d="M 62,32 L 62,36 M 60,34 L 64,34"
        stroke={accentColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.4"
        className={animate ? "animate-pulse" : ""}
      />
      <path d="M 15,50 L 15,52 M 14,51 L 16,51" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
    </svg>
  );
}
