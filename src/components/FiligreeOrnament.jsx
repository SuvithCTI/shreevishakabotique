import React from 'react';

export default function FiligreeOrnament({ className = '', variant = 'corner' }) {
  if (variant === 'divider') {
    return (
      <div className={`flex items-center justify-center gap-3 my-4 ${className}`}>
        <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-[#D4AF37]/70" />
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#D4AF37]">
          <path d="M12 2L14 9L21 9L15.5 13.5L18 20.5L12 16L6 20.5L8.5 13.5L3 9L10 9L12 2Z" fill="#D4AF37" opacity="0.8" />
          <circle cx="12" cy="12" r="2" fill="#FAF0CD" />
        </svg>
        <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-[#D4AF37]/70" />
      </div>
    );
  }

  if (variant === 'vertical-vine') {
    return (
      <svg 
        viewBox="0 0 60 600" 
        fill="none" 
        preserveAspectRatio="none"
        className={`pointer-events-none text-[#D4AF37] ${className}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15 0 V600" stroke="currentColor" strokeWidth="1" strokeOpacity="0.35" />
        {[40, 110, 180, 250, 320, 390, 460, 530].map((y, i) => (
          <g key={i}>
            <path 
              d={`M15 ${y} C28 ${y - 18}, 46 ${y - 12}, 42 ${y + 14} C34 ${y + 22}, 22 ${y + 12}, 15 ${y}`}
              stroke="currentColor"
              strokeWidth="1.1"
              fill="currentColor"
              fillOpacity="0.08"
            />
            <path 
              d={`M15 ${y + 30} C5 ${y + 18}, -4 ${y + 24}, 0 ${y + 40} C5 ${y + 48}, 11 ${y + 40}, 15 ${y + 30}`}
              stroke="currentColor"
              strokeWidth="1"
              fill="currentColor"
              fillOpacity="0.08"
            />
            <circle cx="42" cy={y + 14} r="2" fill="currentColor" fillOpacity="0.7" />
            <path 
              d={`M15 ${y - 8} Q26 ${y - 32} 36 ${y - 22}`}
              stroke="currentColor" 
              strokeWidth="0.8" 
              strokeDasharray="2 2"
              strokeOpacity="0.6"
            />
          </g>
        ))}
      </svg>
    );
  }

  // Corner filigree motif for luxury cards and hero banners
  return (
    <svg 
      viewBox="0 0 120 120" 
      fill="none" 
      className={`pointer-events-none absolute text-[#D4AF37]/20 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M10 110 C10 50, 50 10, 110 10" 
        stroke="currentColor" 
        strokeWidth="1.2" 
        strokeDasharray="3 3"
      />
      <path 
        d="M20 110 C20 60, 60 20, 110 20" 
        stroke="currentColor" 
        strokeWidth="0.8"
      />
      <path 
        d="M15 15 C35 15, 45 25, 45 45 C25 45, 15 35, 15 15 Z" 
        stroke="currentColor" 
        strokeWidth="0.8"
        fill="currentColor"
        fillOpacity="0.05"
      />
      <circle cx="20" cy="20" r="2" fill="currentColor" />
      <circle cx="40" cy="40" r="2" fill="currentColor" />
      <circle cx="10" cy="60" r="1.5" fill="currentColor" />
      <circle cx="60" cy="10" r="1.5" fill="currentColor" />
    </svg>
  );
}
