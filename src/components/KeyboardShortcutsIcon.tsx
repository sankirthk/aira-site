interface KeyboardShortcutsIconProps {
  size?: number;
  color?: string;
  accentColor?: string;
  animate?: boolean;
  className?: string;
}

export function KeyboardShortcutsIcon({
  size = 80,
  color = "#849688",
  accentColor = "#C98B7A",
  animate = false,
  className = "",
}: KeyboardShortcutsIconProps) {
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
      <path
        d="M 15,25 L 65,25 Q 67,25 67,27 L 67,53 Q 67,55 65,55 L 15,55 Q 13,55 13,53 L 13,27 Q 13,25 15,25 Z"
        fill={color}
        opacity="0.9"
      />
      <path
        d="M 15,25 Q 15.5,24.5 65,25 Q 67.5,25.5 67,27 L 67.5,53 Q 67,54.5 65,55 L 15,55.5 Q 13,54.5 13,53 L 13.5,27 Q 13,25.5 15,25 Z"
        fill="none"
        stroke="#2B2B2B"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.2"
      />

      <rect
        x="18"
        y="30"
        width="10"
        height="8"
        rx="1.5"
        fill="#F5F2EC"
        opacity="0.9"
      />
      <text
        x="23"
        y="36.5"
        fontSize="6"
        fill={color}
        fontWeight="bold"
        textAnchor="middle"
        style={{ fontFamily: "monospace" }}
      >
        ⌘
      </text>

      <rect
        x="32"
        y="30"
        width="10"
        height="8"
        rx="1.5"
        fill="#F5F2EC"
        opacity="0.9"
      />
      <path
        d="M 37,35.5 L 37,33 L 35.5,34.5 M 37,33 L 38.5,34.5"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <rect
        x="46"
        y="30"
        width="10"
        height="8"
        rx="1.5"
        fill={accentColor}
        opacity="0.95"
        className={animate ? "animate-pulse" : ""}
      />
      <text
        x="51"
        y="36.5"
        fontSize="7"
        fill="#F5F2EC"
        fontWeight="bold"
        textAnchor="middle"
        style={{ fontFamily: "monospace" }}
      >
        P
      </text>

      <rect
        x="25"
        y="42"
        width="30"
        height="8"
        rx="1.5"
        fill="#F5F2EC"
        opacity="0.9"
      />
      <path
        d="M 27,46 L 53,46"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.3"
      />

      <rect
        x="60"
        y="42"
        width="6"
        height="6"
        rx="1"
        fill="#F5F2EC"
        opacity="0.8"
      />
      <path
        d="M 63,44.5 L 63,46.5 M 61.5,45.5 L 63,44 L 64.5,45.5"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle
        cx="51"
        cy="27"
        r="2"
        fill={accentColor}
        opacity="0.3"
        className={animate ? "animate-pulse" : ""}
        style={{ animationDelay: "0.2s" }}
      />
      <circle
        cx="55"
        cy="25"
        r="1.5"
        fill={accentColor}
        opacity="0.2"
        className={animate ? "animate-pulse" : ""}
        style={{ animationDelay: "0.4s" }}
      />
      <circle
        cx="48"
        cy="26"
        r="1"
        fill={accentColor}
        opacity="0.25"
        className={animate ? "animate-pulse" : ""}
        style={{ animationDelay: "0.1s" }}
      />

      <path
        d="M 20,20 L 20,22 M 19,21 L 21,21"
        stroke={accentColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.4"
      />
      <path
        d="M 60,20 L 60,22 M 59,21 L 61,21"
        stroke={accentColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  );
}
