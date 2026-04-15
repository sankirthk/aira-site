interface VoiceMicIconProps {
  size?: number;
  color?: string;
  signalColor?: string;
  animate?: boolean;
  className?: string;
}

export function VoiceMicIcon({
  size = 64,
  color = "#849688",
  signalColor = "#C98B7A",
  animate = false,
  className = ""
}: VoiceMicIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M 8,32 Q 8,18 15,12" stroke={signalColor} strokeWidth="2.5" strokeLinecap="round" opacity="0.2" className={animate ? "animate-pulse" : ""} style={{ strokeDasharray: "3,2", animationDelay: "0s", animationDuration: "2s" }} />
      <path d="M 56,32 Q 56,18 49,12" stroke={signalColor} strokeWidth="2.5" strokeLinecap="round" opacity="0.2" className={animate ? "animate-pulse" : ""} style={{ strokeDasharray: "3,2", animationDelay: "0s", animationDuration: "2s" }} />
      <path d="M 8,32 Q 8,46 15,52" stroke={signalColor} strokeWidth="2.5" strokeLinecap="round" opacity="0.2" className={animate ? "animate-pulse" : ""} style={{ strokeDasharray: "3,2", animationDelay: "0s", animationDuration: "2s" }} />
      <path d="M 56,32 Q 56,46 49,52" stroke={signalColor} strokeWidth="2.5" strokeLinecap="round" opacity="0.2" className={animate ? "animate-pulse" : ""} style={{ strokeDasharray: "3,2", animationDelay: "0s", animationDuration: "2s" }} />

      <path d="M 14,32 Q 14,22 18,18" stroke={signalColor} strokeWidth="2.5" strokeLinecap="round" opacity="0.35" className={animate ? "animate-pulse" : ""} style={{ strokeDasharray: "2,1.5", animationDelay: "0.3s", animationDuration: "2s" }} />
      <path d="M 50,32 Q 50,22 46,18" stroke={signalColor} strokeWidth="2.5" strokeLinecap="round" opacity="0.35" className={animate ? "animate-pulse" : ""} style={{ strokeDasharray: "2,1.5", animationDelay: "0.3s", animationDuration: "2s" }} />
      <path d="M 14,32 Q 14,42 18,46" stroke={signalColor} strokeWidth="2.5" strokeLinecap="round" opacity="0.35" className={animate ? "animate-pulse" : ""} style={{ strokeDasharray: "2,1.5", animationDelay: "0.3s", animationDuration: "2s" }} />
      <path d="M 50,32 Q 50,42 46,46" stroke={signalColor} strokeWidth="2.5" strokeLinecap="round" opacity="0.35" className={animate ? "animate-pulse" : ""} style={{ strokeDasharray: "2,1.5", animationDelay: "0.3s", animationDuration: "2s" }} />

      <path d="M 20,32 Q 20,26 23,24" stroke={signalColor} strokeWidth="2.5" strokeLinecap="round" opacity="0.5" className={animate ? "animate-pulse" : ""} style={{ strokeDasharray: "2,1", animationDelay: "0.6s", animationDuration: "2s" }} />
      <path d="M 44,32 Q 44,26 41,24" stroke={signalColor} strokeWidth="2.5" strokeLinecap="round" opacity="0.5" className={animate ? "animate-pulse" : ""} style={{ strokeDasharray: "2,1", animationDelay: "0.6s", animationDuration: "2s" }} />
      <path d="M 20,32 Q 20,38 23,40" stroke={signalColor} strokeWidth="2.5" strokeLinecap="round" opacity="0.5" className={animate ? "animate-pulse" : ""} style={{ strokeDasharray: "2,1", animationDelay: "0.6s", animationDuration: "2s" }} />
      <path d="M 44,32 Q 44,38 41,40" stroke={signalColor} strokeWidth="2.5" strokeLinecap="round" opacity="0.5" className={animate ? "animate-pulse" : ""} style={{ strokeDasharray: "2,1", animationDelay: "0.6s", animationDuration: "2s" }} />

      <rect x="26" y="16" width="12" height="18" rx="6" fill={color} stroke={color} strokeWidth="2" opacity="0.9" />
      <path d="M 26,22 Q 26,16.5 32,16 Q 38,16.5 38,22 L 38,28 Q 38,33.5 32,34 Q 26,33.5 26,28 Z" fill="none" stroke="#2B2B2B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.15" />

      <line x1="28" y1="20" x2="36" y2="20" stroke="#F5F2EC" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <line x1="28" y1="23" x2="36" y2="23" stroke="#F5F2EC" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <line x1="28" y1="26" x2="36" y2="26" stroke="#F5F2EC" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <line x1="28" y1="29" x2="36" y2="29" stroke="#F5F2EC" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <line x1="28" y1="32" x2="36" y2="32" stroke="#F5F2EC" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />

      <path d="M 24,34 Q 24,40 24,40 L 28,40" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M 40,34 Q 40,40 40,40 L 36,40" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M 32,40 L 32,48" stroke={color} strokeWidth="2.5" strokeLinecap="round" />

      <ellipse cx="32" cy="50" rx="8" ry="3" fill={color} opacity="0.7" />
      <path d="M 24,50 Q 28,51.5 32,50 Q 36,51.5 40,50" stroke="#2B2B2B" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.15" />
    </svg>
  );
}
