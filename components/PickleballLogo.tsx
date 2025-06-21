'use client';

export default function PickleballLogo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`${className} relative`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-lg"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer glow effect */}
        <defs>
          <filter id="neon-glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <linearGradient id="neon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00FFFF" />
            <stop offset="33%" stopColor="#39FF14" />
            <stop offset="66%" stopColor="#FF1493" />
            <stop offset="100%" stopColor="#BF00FF" />
          </linearGradient>
        </defs>
        
        {/* Paddle shape */}
        <ellipse 
          cx="50" 
          cy="35" 
          rx="25" 
          ry="30" 
          fill="none" 
          stroke="url(#neon-gradient)" 
          strokeWidth="3"
          filter="url(#neon-glow)"
          className="animate-pulse"
        />
        
        {/* Paddle holes */}
        <circle cx="40" cy="25" r="3" fill="url(#neon-gradient)" opacity="0.8" />
        <circle cx="50" cy="25" r="3" fill="url(#neon-gradient)" opacity="0.8" />
        <circle cx="60" cy="25" r="3" fill="url(#neon-gradient)" opacity="0.8" />
        <circle cx="35" cy="35" r="3" fill="url(#neon-gradient)" opacity="0.8" />
        <circle cx="45" cy="35" r="3" fill="url(#neon-gradient)" opacity="0.8" />
        <circle cx="55" cy="35" r="3" fill="url(#neon-gradient)" opacity="0.8" />
        <circle cx="65" cy="35" r="3" fill="url(#neon-gradient)" opacity="0.8" />
        <circle cx="40" cy="45" r="3" fill="url(#neon-gradient)" opacity="0.8" />
        <circle cx="50" cy="45" r="3" fill="url(#neon-gradient)" opacity="0.8" />
        <circle cx="60" cy="45" r="3" fill="url(#neon-gradient)" opacity="0.8" />
        
        {/* Handle */}
        <rect 
          x="47" 
          y="65" 
          width="6" 
          height="25" 
          rx="3" 
          fill="url(#neon-gradient)" 
          filter="url(#neon-glow)"
        />
        
        {/* Handle grip lines */}
        <line x1="45" y1="70" x2="55" y2="70" stroke="#00FFFF" strokeWidth="1" opacity="0.6" />
        <line x1="45" y1="75" x2="55" y2="75" stroke="#00FFFF" strokeWidth="1" opacity="0.6" />
        <line x1="45" y1="80" x2="55" y2="80" stroke="#00FFFF" strokeWidth="1" opacity="0.6" />
        <line x1="45" y1="85" x2="55" y2="85" stroke="#00FFFF" strokeWidth="1" opacity="0.6" />
      </svg>
    </div>
  );
}