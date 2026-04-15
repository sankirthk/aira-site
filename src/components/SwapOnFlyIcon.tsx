interface SwapOnFlyIconProps {
  size?: number;
  color?: string;
  accentColor?: string;
  animate?: boolean;
  className?: string;
}

export function SwapOnFlyIcon({
  size = 80,
  color = "#849688",
  accentColor = "#C98B7A",
  animate = false,
  className = "",
}: SwapOnFlyIconProps) {
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
      <g
        className={animate ? "animate-pulse" : ""}
        style={{ animationDelay: "0s" }}
      >
        <rect
          x="12"
          y="20"
          width="28"
          height="20"
          rx="3"
          fill={color}
          opacity="0.85"
        />
        <rect x="22" y="20" width="8" height="4" fill="#F5F2EC" opacity="0.5" />
        <line
          x1="16"
          y1="28"
          x2="36"
          y2="28"
          stroke="#F5F2EC"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        />
        <line
          x1="16"
          y1="32"
          x2="32"
          y2="32"
          stroke="#F5F2EC"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        />
        <line
          x1="16"
          y1="36"
          x2="35"
          y2="36"
          stroke="#F5F2EC"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        />
      </g>

      <g
        className={animate ? "animate-pulse" : ""}
        style={{ animationDelay: "0.3s" }}
      >
        <rect
          x="40"
          y="20"
          width="28"
          height="20"
          rx="10"
          fill={accentColor}
          opacity="0.85"
        />
        <line
          x1="44"
          y1="28"
          x2="64"
          y2="28"
          stroke="#F5F2EC"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        />
        <line
          x1="44"
          y1="32"
          x2="60"
          y2="32"
          stroke="#F5F2EC"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        />
        <line
          x1="44"
          y1="36"
          x2="63"
          y2="36"
          stroke="#F5F2EC"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        />
      </g>

      <g className={animate ? "animate-pulse" : ""}>
        <path
          d="M 26,15 Q 40,10 54,15"
          stroke={accentColor}
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.8"
        />
        <path
          d="M 54,15 L 50,13 M 54,15 L 50,17"
          stroke={accentColor}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.8"
        />
        <path
          d="M 54,45 Q 40,50 26,45"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.8"
        />
        <path
          d="M 26,45 L 30,43 M 26,45 L 30,47"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.8"
        />
      </g>

      <g>
        <rect
          x="45"
          y="50"
          width="24"
          height="20"
          rx="2"
          fill="#F5F2EC"
          stroke="#2B2B2B"
          strokeWidth="2"
          opacity="0.9"
        />
        <circle cx="49" cy="55" r="1.5" fill={color} opacity="0.6" />
        <line
          x1="52"
          y1="55"
          x2="65"
          y2="55"
          stroke="#2B2B2B"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.4"
        />
        <circle cx="49" cy="60" r="1.5" fill={accentColor} opacity="0.8" />
        <line
          x1="52"
          y1="60"
          x2="65"
          y2="60"
          stroke="#2B2B2B"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.4"
        />
        <circle cx="49" cy="65" r="1.5" fill={color} opacity="0.6" />
        <line
          x1="52"
          y1="65"
          x2="65"
          y2="65"
          stroke="#2B2B2B"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.4"
        />
      </g>

      <path
        d="M 42,48 L 42,56 L 44,54 L 46,58 L 48,57 L 46,53 L 48,53 Z"
        fill="#2B2B2B"
        opacity="0.7"
      />
      <path
        d="M 35,8 L 35,12 M 33,10 L 37,10"
        stroke={accentColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M 45,8 L 45,12 M 43,10 L 47,10"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}
