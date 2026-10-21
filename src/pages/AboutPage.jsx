import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Gem, 
  Award, 
  HeartHandshake
} from 'lucide-react';

/* -------------------------------------------------------------
   Bespoke Gold Botanical Leaf Illustrations for Corners
------------------------------------------------------------- */
function BotanicalLeafTopLeft({ className = '' }) {
  return (
    <svg
      viewBox="0 0 260 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none absolute text-[#D4AF37] ${className}`}
      aria-hidden="true"
    >
      <g opacity="0.38" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Curving vine arching outward */}
        <path d="M-10 -10 C 35 45, 95 75, 205 65" />
        <path d="M-10 -10 C 25 55, 55 125, 65 210" />
        <path d="M-10 -10 C 55 25, 120 35, 185 15" strokeDasharray="3 3" opacity="0.55" />

        {/* Ashoka & Temple palm leaves */}
        <path d="M35 22 C 60 12, 82 24, 76 38 C 66 42, 50 34, 35 22 Z" fill="currentColor" fillOpacity="0.08" />
        <path d="M68 48 C 98 38, 124 54, 116 70 C 104 76, 82 66, 68 48 Z" fill="currentColor" fillOpacity="0.08" />
        <path d="M112 62 C 142 54, 168 72, 158 86 C 146 92, 126 80, 112 62 Z" fill="currentColor" fillOpacity="0.08" />
        <path d="M152 66 C 182 62, 202 78, 194 90 C 184 94, 164 84, 152 66 Z" fill="currentColor" fillOpacity="0.08" />

        {/* Downward foliage */}
        <path d="M20 42 C 12 68, 24 88, 38 82 C 42 72, 34 54, 20 42 Z" fill="currentColor" fillOpacity="0.08" />
        <path d="M38 90 C 28 120, 46 142, 60 134 C 66 122, 54 104, 38 90 Z" fill="currentColor" fillOpacity="0.08" />
        <path d="M52 142 C 42 172, 60 195, 74 186 C 80 174, 68 156, 52 142 Z" fill="currentColor" fillOpacity="0.08" />

        {/* Delicate golden accent buds and tendrils */}
        <circle cx="205" cy="65" r="2.5" fill="currentColor" />
        <circle cx="65" cy="210" r="2.5" fill="currentColor" />
        <circle cx="185" cy="15" r="2" fill="currentColor" />
        <path d="M76 38 Q 92 26 98 34" strokeWidth="0.8" />
        <path d="M116 70 Q 134 60 140 68" strokeWidth="0.8" />
        <path d="M38 82 Q 52 98 46 106" strokeWidth="0.8" />
      </g>
    </svg>
  );
}

function BotanicalLeafBottomLeft({ className = '' }) {
  return (
    <svg
      viewBox="0 0 260 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none absolute text-[#D4AF37] ${className}`}
      aria-hidden="true"
    >
      <g opacity="0.35" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Curving vine arching upward and inward */}
        <path d="M-10 270 C 35 225, 75 190, 175 200" />
        <path d="M-10 270 C 22 205, 45 150, 55 65" />
        <path d="M-10 270 C 65 235, 120 225, 195 245" strokeDasharray="3 3" opacity="0.55" />

        {/* Upward foliage */}
        <path d="M28 225 C 55 235, 76 218, 70 202 C 60 196, 44 208, 28 225 Z" fill="currentColor" fillOpacity="0.08" />
        <path d="M72 200 C 102 210, 126 194, 118 176 C 106 170, 86 182, 72 200 Z" fill="currentColor" fillOpacity="0.08" />
        <path d="M120 195 C 150 202, 170 186, 162 172 C 152 166, 132 178, 120 195 Z" fill="currentColor" fillOpacity="0.08" />

        {/* Upward climbing branch */}
        <path d="M18 210 C 12 182, 28 160, 42 166 C 46 176, 34 195, 18 210 Z" fill="currentColor" fillOpacity="0.08" />
        <path d="M34 155 C 25 125, 45 102, 60 110 C 64 122, 50 140, 34 155 Z" fill="currentColor" fillOpacity="0.08" />
        <path d="M46 100 C 38 72, 58 50, 72 58 C 76 70, 62 88, 46 100 Z" fill="currentColor" fillOpacity="0.08" />

        {/* Gold accents */}
        <circle cx="175" cy="200" r="2.5" fill="currentColor" />
        <circle cx="55" cy="65" r="2.5" fill="currentColor" />
        <circle cx="195" cy="245" r="2" fill="currentColor" />
      </g>
    </svg>
  );
}

/* -------------------------------------------------------------
   Delicate Gold Ornamental Divider with Floral Motif
------------------------------------------------------------- */
function GoldFloralDivider({ className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden="true">
      <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-[#ECC876]" />
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none" className="text-[#ECC876] shrink-0">
        <circle cx="14" cy="14" r="2" fill="#ECC876" />
        <path d="M14 5 C13 8.5 13 11 14 12 C15 11 15 8.5 14 5 Z" fill="#ECC876" opacity="0.9" />
        <path d="M14 23 C13 19.5 13 17 14 16 C15 17 15 19.5 14 23 Z" fill="#ECC876" opacity="0.9" />
        <path d="M5 14 C8.5 13 11 13 12 14 C11 15 8.5 15 5 14 Z" fill="#ECC876" opacity="0.9" />
        <path d="M23 14 C19.5 13 17 13 16 14 C17 15 19.5 15 23 14 Z" fill="#ECC876" opacity="0.9" />
        <circle cx="9" cy="9" r="1.1" fill="#D4AF37" opacity="0.8" />
        <circle cx="19" cy="9" r="1.1" fill="#D4AF37" opacity="0.8" />
        <circle cx="9" cy="19" r="1.1" fill="#D4AF37" opacity="0.8" />
        <circle cx="19" cy="19" r="1.1" fill="#D4AF37" opacity="0.8" />
      </svg>
      <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent via-[#D4AF37]/60 to-[#ECC876]" />
    </div>
  );
}

/* -------------------------------------------------------------
   Four Gold Line-Art Icons
------------------------------------------------------------- */
function LotusIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4 C10 8 10 13 12 18 C14 13 14 8 12 4 Z" />
      <path d="M12 18 C9 15 6 11 7 8 C9 8 11 11 12 18 Z" />
      <path d="M12 18 C15 15 18 11 17 8 C15 8 13 11 12 18 Z" />
      <path d="M12 18 C8 17 4 15 3 12 C5 11 8 13 12 18 Z" />
      <path d="M12 18 C16 17 20 15 21 12 C19 11 16 13 12 18 Z" />
      <path d="M6 19.5 C9 21 15 21 18 19.5" strokeWidth="1" />
    </svg>
  );
}

function DiamondIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3 L18 3 L22 9 L12 21 L2 9 L6 3 Z" />
      <path d="M2 9 L22 9" />
      <path d="M12 21 L7 9 L10 3" />
      <path d="M12 21 L17 9 L14 3" />
    </svg>
  );
}

function NeedleThreadIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 3.5 L20.5 6.5 C21 7 20.5 8 19.5 9 L8 20.5 C7.5 21 6.5 21 6 20.5 L3.5 18 C3 17.5 3 16.5 3.5 16 L15 4.5 C16 3.5 17 3 17.5 3.5 Z" />
      <circle cx="18" cy="6" r="0.8" fill="currentColor" />
      <path d="M18 6 C20 4 22 7 21 10 C19.5 14 13 13 15 18 C16.5 21.5 21 21 21.5 19" strokeDasharray="1.5 1.5" strokeWidth="1.1" />
    </svg>
  );
}

function HeartArtIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21.35 L10.55 20.03 C5.4 15.36 2 12.28 2 8.5 C2 5.42 4.42 3 7.5 3 C9.24 3 10.91 3.81 12 5.09 C13.09 3.81 14.76 3 16.5 3 C19.58 3 22 5.42 22 8.5 C22 12.28 18.6 15.36 13.45 20.04 L12 21.35 Z" />
      <path d="M12 8 C12 12 9 14.5 7.5 15" strokeWidth="0.9" opacity="0.5" strokeDasharray="1 1" />
    </svg>
  );
}

export default function AboutPage({ setActivePage }) {
  return (
    <div className="bg-[#FAF7F2] text-[#2C2926] min-h-screen">
      
      {/* -------------------------------------------------------------
          1. PREMIUM 16:9 LUXURY ABOUT US HERO SECTION
          Shree Vishaka Boutique — Deep Teal (#003B36) & Antique Gold
      ------------------------------------------------------------- */}
      <section className="relative w-full bg-[#003B36] text-white overflow-hidden border-b border-[#D4AF37]/30">
        
        {/* Subtle Gold Botanical Leaf Illustrations in Top-Left and Bottom-Left corners */}
        <BotanicalLeafTopLeft className="top-0 left-0 w-32 h-32 sm:w-56 sm:h-56 lg:w-72 lg:h-72 z-10 opacity-25 sm:opacity-38" />
        <BotanicalLeafBottomLeft className="bottom-0 left-0 w-32 h-32 sm:w-56 sm:h-56 lg:w-72 lg:h-72 z-10 opacity-25 sm:opacity-35" />

        {/* 16:9 Landscape Layout Container */}
        <div className="w-full max-w-[1720px] mx-auto relative min-h-[540px] sm:min-h-[580px] lg:min-h-[640px] xl:min-h-[700px] flex flex-col lg:flex-row items-center">
          
          {/* LEFT SIDE — TEXT AND CONTENT (Order 2 on mobile, Order 1 on desktop) */}
          <div className="relative z-20 w-full lg:w-[50%] xl:w-[48%] px-5 sm:px-10 lg:pl-16 xl:pl-20 lg:pr-6 pt-4 pb-10 sm:pt-10 sm:pb-12 lg:py-10 xl:py-12 flex flex-col justify-center space-y-3.5 sm:space-y-4 lg:space-y-4 order-2 lg:order-1">
            
            {/* Small rounded gold-outline label with sparkle icon */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/70 bg-[#002B27]/70 backdrop-blur-sm self-start shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#ECC876]" />
              <span className="text-[10.5px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#ECC876]">
                OUR HERITAGE JOURNEY
              </span>
            </div>

            {/* Large editorial serif heading on two lines */}
            <div>
              <h1 className="font-serif leading-[1.06] tracking-tight text-left">
                <span className="block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#FAF7F2] font-normal">
                  About
                </span>
                <span className="block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#ECC876] font-normal mt-0.5">
                  Shree Vishaka
                </span>
              </h1>
            </div>

            {/* Delicate gold ornamental divider with a floral motif */}
            <GoldFloralDivider className="py-0" />

            {/* Italic serif tagline */}
            <p className="font-serif italic text-base sm:text-lg lg:text-xl text-[#FAF0CD]/95 font-light tracking-wide text-left">
              Rooted in Tradition • Styled for Today
            </p>

            {/* Clean, readable ivory paragraph */}
            <p className="text-xs sm:text-sm lg:text-[14.5px] text-[#FAF7F2]/90 leading-relaxed font-light max-w-xl text-left">
              At Shree Vishaka Boutique, we bring you a curated collection of traditional and contemporary ethnic wear. Our goal is to celebrate the timeless beauty of Indian weaves and designs, offering elegance, quality and craftsmanship in every piece.
            </p>

            {/* Four evenly spaced gold line-art icons inside thin circular gold borders */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-2 pt-1 pb-1 max-w-xl">
              
              {/* 1. Lotus icon — “Authentic Indian Weaves” */}
              <div className="flex items-center sm:flex-col sm:items-start gap-2.5 sm:gap-1.5 p-2 sm:p-0 rounded-xl bg-[#002B27]/40 sm:bg-transparent border border-[#D4AF37]/20 sm:border-0 text-left">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-[#D4AF37]/70 flex items-center justify-center text-[#ECC876] bg-[#002B27]/80 shrink-0 shadow-[0_0_10px_rgba(212,175,55,0.12)]">
                  <LotusIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-[11px] sm:text-xs font-medium text-[#FAF0CD] tracking-wide leading-tight">
                  Authentic Indian Weaves
                </span>
              </div>

              {/* 2. Diamond icon — “Premium Quality Fabrics” */}
              <div className="flex items-center sm:flex-col sm:items-start gap-2.5 sm:gap-1.5 p-2 sm:p-0 rounded-xl bg-[#002B27]/40 sm:bg-transparent border border-[#D4AF37]/20 sm:border-0 text-left">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-[#D4AF37]/70 flex items-center justify-center text-[#ECC876] bg-[#002B27]/80 shrink-0 shadow-[0_0_10px_rgba(212,175,55,0.12)]">
                  <DiamondIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-[11px] sm:text-xs font-medium text-[#FAF0CD] tracking-wide leading-tight">
                  Premium Quality Fabrics
                </span>
              </div>

              {/* 3. Needle and thread icon — “Exquisite Craftsmanship” */}
              <div className="flex items-center sm:flex-col sm:items-start gap-2.5 sm:gap-1.5 p-2 sm:p-0 rounded-xl bg-[#002B27]/40 sm:bg-transparent border border-[#D4AF37]/20 sm:border-0 text-left">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-[#D4AF37]/70 flex items-center justify-center text-[#ECC876] bg-[#002B27]/80 shrink-0 shadow-[0_0_10px_rgba(212,175,55,0.12)]">
                  <NeedleThreadIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-[11px] sm:text-xs font-medium text-[#FAF0CD] tracking-wide leading-tight">
                  Exquisite Craftsmanship
                </span>
              </div>

              {/* 4. Heart icon — “Elegant Styles for Every Occasion” */}
              <div className="flex items-center sm:flex-col sm:items-start gap-2.5 sm:gap-1.5 p-2 sm:p-0 rounded-xl bg-[#002B27]/40 sm:bg-transparent border border-[#D4AF37]/20 sm:border-0 text-left">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-[#D4AF37]/70 flex items-center justify-center text-[#ECC876] bg-[#002B27]/80 shrink-0 shadow-[0_0_10px_rgba(212,175,55,0.12)]">
                  <HeartArtIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-[11px] sm:text-xs font-medium text-[#FAF0CD] tracking-wide leading-tight">
                  Elegant Styles for Every Occasion
                </span>
              </div>

            </div>

            {/* Bottom-left rounded champagne-gold button with dark teal text and right arrow */}
            <div className="pt-2 pb-1 flex justify-start">
              <a
                href="#why-choose-us"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[#ECC876] via-[#F3DE9A] to-[#D4AF37] text-[#003B36] font-bold text-xs tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_4px_18px_rgba(212,175,55,0.25)] hover:shadow-[0_6px_24px_rgba(212,175,55,0.4)] hover:scale-[1.02] active:scale-[0.98] text-center"
              >
                <span>OUR STORY</span>
                <ArrowRight className="w-4 h-4 text-[#003B36] transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

          </div>

          {/* RIGHT SIDE — LUXURY FASHION PHOTOGRAPH (Order 1 on mobile, Order 2 on desktop) */}
          <div className="lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-[52%] xl:w-[54%] w-full h-[300px] sm:h-[400px] lg:h-full relative z-0 overflow-hidden order-1 lg:order-2">
            <img
              src="/images/about-luxury-hero.jpg"
              alt="Indian woman in luxury deep teal silk saree with antique-gold zari embroidery in traditional heritage palace"
              className="w-full h-full object-cover object-[center_18%] sm:object-[center_20%] lg:object-[68%_20%]"
            />
            
            {/* Seamless gradient transition into dark teal (#003B36) */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#003B36] via-[#003B36]/60 via-30% to-transparent pointer-events-none hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#003B36] via-transparent to-[#003B36]/30 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#003B36]/20 to-[#003B36] pointer-events-none lg:hidden" />
          </div>

        </div>
      </section>

      {/* 2. "WHY CHOOSE US?" SECTION */}
      <section id="why-choose-us" className="py-12 sm:py-16 lg:py-20 w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Image: Saree & Ornaments */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#D4AF37]/40 aspect-[4/3] sm:aspect-square max-w-md mx-auto lg:max-w-none bg-[#051C1C]">
              <img
                src="/images/silk-zari-macro.jpg"
                alt="Peacock teal pure silk saree with traditional temple zari"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#082928]/50 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right: Why Choose Us Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#082928] font-normal">
                Why Choose Us?
              </h2>
              <div className="h-[2px] w-16 bg-[#D4AF37] mt-3" />
            </div>

            <div className="space-y-5 sm:space-y-6">
              
              {/* Point 1 */}
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#D4AF37]/50 flex items-center justify-center text-[#937217] shrink-0 bg-white shadow-sm mt-0.5">
                  <Gem className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base sm:text-lg font-semibold text-[#082928]">
                    Premium Quality Fabrics
                  </h4>
                  <p className="text-xs sm:text-sm text-[#000000] mt-0.5 font-normal text-left leading-relaxed">
                    We source only the finest materials. Pure mulberry silks, tested gold and silver zaris, and natural dyes that stand the test of time.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#D4AF37]/50 flex items-center justify-center text-[#937217] shrink-0 bg-white shadow-sm mt-0.5">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base sm:text-lg font-semibold text-[#082928]">
                    Traditional Craftsmanship
                  </h4>
                  <p className="text-xs sm:text-sm text-[#000000] mt-0.5 font-normal text-left leading-relaxed">
                    Authentic weaving and intricate detailing. Honoring generation-old pit looms, jacquard patterns, and delicate hand Aari needlework.
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#D4AF37]/50 flex items-center justify-center text-[#937217] shrink-0 bg-white shadow-sm mt-0.5">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base sm:text-lg font-semibold text-[#082928]">
                    Elegant & Timeless Designs
                  </h4>
                  <p className="text-xs sm:text-sm text-[#000000] mt-0.5 font-normal text-left leading-relaxed">
                    Perfect for every occasion. From sacred wedding muhurthams to contemporary festive soirées and trousseau keepsakes.
                  </p>
                </div>
              </div>

              {/* Point 4 */}
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#D4AF37]/50 flex items-center justify-center text-[#937217] shrink-0 bg-white shadow-sm mt-0.5">
                  <HeartHandshake className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base sm:text-lg font-semibold text-[#082928]">
                    Personalized Service
                  </h4>
                  <p className="text-xs sm:text-sm text-[#000000] mt-0.5 font-normal text-left leading-relaxed">
                    Your satisfaction is our priority. Enjoy customized blouse stitching, video call drape viewings, and bespoke bridal color consultations.
                  </p>
                </div>
              </div>

            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setActivePage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto text-center px-7 py-3.5 bg-[#082928] text-[#ECC876] hover:bg-[#051C1C] rounded-lg text-xs font-semibold tracking-widest uppercase transition-colors shadow-md"
              >
                Schedule A Bridal Consultation →
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
