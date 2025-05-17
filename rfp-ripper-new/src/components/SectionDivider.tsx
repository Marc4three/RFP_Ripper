import React from 'react';

const SectionDivider: React.FC = () => (
  <div className="w-full overflow-hidden leading-none">
    <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16">
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="12" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Glowing blurred path */}
      <path
        d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z"
        fill="#fff"
        fillOpacity="0.18"
        filter="url(#glow)"
      />
      {/* Solid white path for crispness */}
      <path
        d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z"
        fill="#fff"
        fillOpacity="0.12"
      />
    </svg>
  </div>
);

export default SectionDivider; 