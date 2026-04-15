interface CountdownTimerIconProps {
  size?: number;
  color?: string;
  accentColor?: string;
  animate?: boolean;
  className?: string;
}

export function CountdownTimerIcon({
  size = 80,
  color = "#849688",
  accentColor = "#C98B7A",
  animate = false,
  className = "",
}: CountdownTimerIconProps) {
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
      <circle cx="40" cy="42" r="22" fill={color} opacity="0.15" />
      <path
        d="M 40,20 Q 51,20 58,27 Q 65,34 65,42 Q 65,51 58,58 Q 51,65 40,65 Q 29,65 22,58 Q 15,51 15,42 Q 15,34 22,27 Q 29,20 40,20 Z"
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.9"
      />

      <circle cx="40" cy="42" r="18" fill="#F5F2EC" opacity="0.9" />
      <circle cx="40" cy="27" r="1.5" fill="#2B2B2B" opacity="0.3" />
      <circle cx="53" cy="42" r="1.5" fill="#2B2B2B" opacity="0.3" />
      <circle cx="40" cy="57" r="1.5" fill="#2B2B2B" opacity="0.3" />
      <circle cx="27" cy="42" r="1.5" fill="#2B2B2B" opacity="0.3" />
      <circle cx="48" cy="30" r="1" fill="#2B2B2B" opacity="0.2" />
      <circle cx="51" cy="36" r="1" fill="#2B2B2B" opacity="0.2" />
      <circle cx="51" cy="48" r="1" fill="#2B2B2B" opacity="0.2" />
      <circle cx="48" cy="54" r="1" fill="#2B2B2B" opacity="0.2" />
      <circle cx="32" cy="54" r="1" fill="#2B2B2B" opacity="0.2" />
      <circle cx="29" cy="48" r="1" fill="#2B2B2B" opacity="0.2" />
      <circle cx="29" cy="36" r="1" fill="#2B2B2B" opacity="0.2" />
      <circle cx="32" cy="30" r="1" fill="#2B2B2B" opacity="0.2" />

      <path
        d="M 40,42 L 40,35"
        stroke="#2B2B2B"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M 40,42 L 48,34"
        stroke={accentColor}
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.9"
        className={animate ? "animate-pulse" : ""}
      />
      <circle cx="40" cy="42" r="2.5" fill={accentColor} opacity="0.8" />
      <circle cx="40" cy="42" r="1.5" fill="#F5F2EC" opacity="0.9" />

      <rect
        x="30"
        y="10"
        width="20"
        height="10"
        rx="2"
        fill="#2B2B2B"
        opacity="0.85"
      />
      <text
        x="40"
        y="17.5"
        fontSize="8"
        fill={accentColor}
        fontWeight="bold"
        textAnchor="middle"
        style={{ fontFamily: "monospace" }}
        className={animate ? "animate-pulse" : ""}
      >
        3:00
      </text>

      <path
        d="M 40,20 A 22,22 0 0,1 62,42"
        stroke={accentColor}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
        strokeDasharray="4,3"
        className={animate ? "animate-pulse" : ""}
        style={{ animationDuration: "1.5s" }}
      />

      <g opacity="0.3">
        <circle cx="52" cy="52" r="8" fill={accentColor} opacity="0.2" />
        <path d="M 50,48 L 56,52 L 50,56 Z" fill={accentColor} opacity="0.6" />
      </g>

      <path
        d="M 62,28 Q 66,26 68,24"
        stroke={accentColor}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.3"
        className={animate ? "animate-pulse" : ""}
        style={{ animationDelay: "0.2s" }}
      />
      <path
        d="M 65,35 Q 68,34 70,32"
        stroke={accentColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.25"
        className={animate ? "animate-pulse" : ""}
        style={{ animationDelay: "0.4s" }}
      />
      <path
        d="M 64,42 Q 67,42 70,41"
        stroke={accentColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.2"
        className={animate ? "animate-pulse" : ""}
        style={{ animationDelay: "0.6s" }}
      />

      <path
        d="M 25,15 L 25,19 M 23,17 L 27,17"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.4"
      />
      <path
        d="M 58,12 L 58,16 M 56,14 L 60,14"
        stroke={accentColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}
