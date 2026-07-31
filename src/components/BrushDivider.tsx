import React from 'react';

interface BrushDividerProps {
  direction?: 'dark-to-white' | 'white-to-dark';
  className?: string;
}

export const BrushDivider: React.FC<BrushDividerProps> = ({ 
  direction = 'dark-to-white',
  className = ''
}) => {
  const isDarkToWhite = direction === 'dark-to-white';
  const fillColor = isDarkToWhite ? '#FFFFFF' : '#0D0D0D';

  return (
    <div className={`relative w-full overflow-hidden leading-none z-20 pointer-events-none ${className}`}>
      
      {/* Soft Ambient Depth Shadow */}
      <div 
        className={`absolute inset-x-0 h-10 blur-md pointer-events-none opacity-30 ${
          isDarkToWhite ? 'bottom-0 bg-black' : 'top-0 bg-black'
        }`} 
      />

      {/* Full-width Organic Sumi-e Japanese Paint Brush SVG */}
      <svg
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        className={`w-full h-24 sm:h-36 lg:h-44 block drop-shadow-md ${
          !isDarkToWhite ? 'transform rotate-180' : ''
        }`}
      >
        <defs>
          {/* Subtle noise filter for organic paper & ink bristle texture */}
          <filter id="brushNoise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>

        {/* Rough Organic Ink Paint Brush Edge Path */}
        <g filter="url(#brushNoise)">
          {/* Main Ink Mass with Rough Hand-Painted Edges */}
          <path
            d="M 0,160 
               L 0,65 
               C 35,42 75,78 120,50 
               C 165,75 210,38 255,68 
               C 300,45 345,82 390,52 
               C 435,78 480,40 525,72 
               C 570,48 615,85 660,54 
               C 705,76 750,42 795,70 
               C 840,46 885,82 930,52 
               C 975,75 1020,40 1065,74 
               C 1110,48 1155,80 1200,50 
               C 1245,76 1290,44 1335,68 
               C 1380,45 1415,72 1440,48 
               L 1440,160 Z"
            fill={fillColor}
          />

          {/* Secondary Organic Ink Bristle Layers for Authentic Sumi-e Texture */}
          <path
            d="M 0,75 
               C 45,48 95,85 140,55 
               C 185,82 235,42 280,72 
               C 325,50 375,88 420,58 
               C 465,82 515,44 560,76 
               C 605,52 655,88 700,56 
               C 745,80 795,46 840,74 
               C 885,52 935,88 980,56 
               C 1025,78 1075,44 1120,74 
               C 1165,50 1215,84 1260,56 
               C 1305,78 1355,48 1400,70 
               C 1425,58 1435,64 1440,52 
               L 1440,160 L 0,160 Z"
            fill={fillColor}
            opacity="0.95"
          />
        </g>

        {/* Scattered Micro Ink Splatters for Handcrafted Aesthetic */}
        <circle cx="85" cy="42" r="2.5" fill={fillColor} />
        <circle cx="210" cy="32" r="1.8" fill={fillColor} />
        <circle cx="340" cy="38" r="2.2" fill={fillColor} />
        <circle cx="490" cy="30" r="1.5" fill={fillColor} />
        <circle cx="630" cy="40" r="2" fill={fillColor} />
        <circle cx="780" cy="34" r="2.4" fill={fillColor} />
        <circle cx="915" cy="42" r="1.6" fill={fillColor} />
        <circle cx="1040" cy="32" r="2.1" fill={fillColor} />
        <circle cx="1180" cy="40" r="1.8" fill={fillColor} />
        <circle cx="1310" cy="35" r="2.3" fill={fillColor} />

      </svg>

    </div>
  );
};
