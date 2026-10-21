import React from 'react';

export default function Logo({ size = 'md', light = false, onClick }) {
  const isLg = size === 'lg';
  const isSm = size === 'sm';

  return (
    <div 
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 sm:gap-3.5 cursor-pointer select-none group transition-transform duration-300 ${onClick ? 'hover:scale-[1.02]' : ''}`}
    >
      {/* Official Shree Vishaka Boutique Pure Gold Insignia */}
      <div className={`relative flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-105 ${
        isLg ? 'w-12 h-14' : isSm ? 'w-7 h-8' : 'w-9 h-10 sm:w-10 sm:h-12'
      }`}>
        <img 
          src="/images/logo-emblem.png" 
          alt="Shree Vishaka Boutique Logo" 
          className="w-full h-full object-contain filter drop-shadow-[0_2px_6px_rgba(212,175,55,0.4)]"
        />
      </div>

      {/* Boutique Name Typography */}
      <div className="flex flex-col text-left">
        <span className={`font-serif tracking-[0.16em] sm:tracking-[0.2em] font-bold uppercase leading-tight ${
          isLg ? 'text-2xl sm:text-3xl' : isSm ? 'text-sm sm:text-base' : 'text-base sm:text-lg lg:text-xl'
        } ${light ? 'text-[#FAF0CD]' : 'text-white'}`}>
          SHREE VISHAKA
        </span>
        <span className={`tracking-[0.35em] sm:tracking-[0.45em] text-[8px] sm:text-[10px] uppercase font-bold leading-tight ${
          light ? 'text-[#D4AF37]' : 'text-[#ECC876]'
        }`}>
          BOUTIQUE
        </span>
      </div>
    </div>
  );
}
