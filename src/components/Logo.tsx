import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
  onClick?: () => void;
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  variant = 'light',
  onClick,
  showTagline = true 
}) => {
  const isDark = variant === 'dark';

  // Dimension presets to ensure pristine proportion inside navbar
  const iconDimensions = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : 'w-10 h-10';
  const titleTextSize = size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl sm:text-2xl';
  const taglineTextSize = size === 'sm' ? 'text-[8px]' : 'text-[9px] sm:text-[10px]';

  return (
    <div 
      onClick={onClick}
      className="flex items-center gap-3 cursor-pointer select-none group shrink-0"
    >
      {/* Precision Crisp SVG Emblem */}
      <div className={`${iconDimensions} shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
        <svg 
          viewBox="0 0 200 160" 
          className="w-full h-full drop-shadow-md"
        >
          {/* Circular speed arc */}
          <path
            d="M 35 110 C 15 65 50 15 115 15 C 145 15 170 30 185 50"
            fill="none"
            stroke="#FF6B35"
            strokeWidth="12"
            strokeLinecap="round"
          />

          {/* Speed motion trails right */}
          <rect x="160" y="55" width="40" height="9" rx="4.5" fill="#FF6B35" />
          <rect x="182" y="55" width="10" height="9" rx="4.5" fill="#FF6B35" />
          <rect x="168" y="72" width="45" height="9" rx="4.5" fill="#FF6B35" />
          <rect x="160" y="89" width="30" height="9" rx="4.5" fill="#FF6B35" />
          <rect x="184" y="89" width="10" height="9" rx="4.5" fill="#FF6B35" />

          {/* Cloche Knob */}
          <circle cx="112" cy="40" r="9" fill="#FF6B35" />

          {/* Cloche Dome Lid */}
          <path d="M 58 80 C 58 48 166 48 166 80 Z" fill="#FF6B35" />
          <path d="M 70 74 C 75 58 105 52 112 52" fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" opacity="0.85" />

          {/* Dark Bowl Base */}
          <path d="M 50 86 L 174 86 L 165 118 C 160 132 145 138 112 138 C 79 138 64 132 59 118 Z" fill={isDark ? "#24170F" : "#1A1A1A"} />
          <path d="M 85 138 L 139 138 C 143 143 145 145 145 146 L 79 146 C 79 145 81 143 85 138 Z" fill={isDark ? "#24170F" : "#1A1A1A"} />

          {/* Fork Cutout */}
          <g fill="#FFFFFF">
            <rect x="94" y="104" width="4" height="28" rx="2" />
            <path d="M 90 94 L 90 106 C 90 110 102 110 102 106 L 102 94 L 99 94 L 99 103 L 97 103 L 97 94 L 95 94 L 95 103 L 93 103 L 93 94 Z" />
          </g>
          {/* Spoon Cutout */}
          <g fill="#FFFFFF">
            <rect x="122" y="104" width="4" height="28" rx="2" />
            <ellipse cx="124" cy="100" rx="7" ry="10" />
          </g>
        </svg>
      </div>

      {/* Brand Text Block */}
      <div className="flex flex-col justify-center leading-none">
        
        {/* Brand Title: Food Area */}
        <div className={`flex items-center font-extrabold tracking-tight ${titleTextSize} leading-none`}>
          <span className={`font-serif-editorial ${isDark ? "text-[#24170F]" : "text-white"}`}>
            Food
          </span>
          <span className="text-[#FF6B35] font-sans ml-1.5 flex items-center">
            Area
            {/* Subtle inline Leaf Accent */}
            <svg 
              viewBox="0 0 24 24" 
              className="w-3.5 h-3.5 ml-0.5 text-[#45A735] fill-current -mt-2 shrink-0"
            >
              <path d="M17,8C8,10 5,16 3,21C8,20 15,18 19,12C20.5,9.5 20,8 17,8Z" />
            </svg>
          </span>
        </div>

        {/* Crisp Subline Tagline */}
        {showTagline && (
          <span 
            className={`font-black uppercase tracking-[2.5px] mt-1 block leading-none ${taglineTextSize} ${
              isDark ? "text-gray-500" : "text-gray-400"
            }`}
          >
            DELICIOUS FOOD, DELIVERED FAST
          </span>
        )}

      </div>
    </div>
  );
};
