import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Gem, 
  HeartHandshake, 
  Award, 
  Star,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import FiligreeOrnament from '../components/FiligreeOrnament';
import { TESTIMONIALS } from '../data/products';
import heroModelImg from '../assets/hero-model.jpg';

export default function HomePage({ 
  setActivePage, 
  setSelectedCategory, 
  onSelectProduct, 
  onAddToCart, 
  onToggleWishlist, 
  wishlistIds, 
  onQuickView 
}) {
  const categoryCards = [
    {
      id: 'festive',
      title: 'Festival Wears',
      image: '/images/collections/silk-sarees.jpg',
      tag: 'Kanchipuram & Banarasi'
    },
    {
      id: 'blouses',
      title: 'Blouse Designs',
      image: '/images/collections/blouse-designs.jpg',
      tag: 'Aari & Zardozi Handwork'
    },
    {
      id: 'sarees',
      title: 'Sarees',
      image: '/images/collections/georgette-saree.jpg',
      tag: 'Cotton, Georgette, Satin & Tussar'
    }
  ];

  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);

  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 35) {
      // Swipe left -> advance, moving front card to back
      setActiveReviewIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    } else if (diff < -35) {
      // Swipe right -> prev card
      setActiveReviewIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    }
    setTouchStartX(null);
  };

  const handleCategoryClick = (catId) => {
    setSelectedCategory(catId);
    setActivePage('collections');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FAF7F2] text-[#2C2926] overflow-hidden">
      
      {/* 1. HERO BANNER - Full Size Edge-to-Edge */}
      <section className="relative w-full overflow-hidden bg-[#062422] border-b border-[#D4AF37]/30 min-h-[calc(100vh-120px)] min-h-[calc(100svh-120px)] sm:min-h-[640px] lg:min-h-[720px] flex items-end sm:items-center">
        
        {/* Background Model Image on the Right / Centered on Mobile */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroModelImg} 
            alt="Model in emerald green silk saree" 
            className="w-full h-full object-cover object-[52%_15%] sm:object-[center_right] lg:object-[80%_center]"
          />
          {/* Smooth Gradient Overlay for Contrast: Soft bottom fade on mobile so model's face & jewelry shine, Left-to-right on desktop */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#062422] via-[#062422]/80 via-45% to-transparent sm:hidden" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#062422] via-[#062422]/75 to-transparent hidden sm:block" />
        </div>

        {/* Vertical Gold Vine Filigree on the Left (hidden on mobile to prevent text clash) */}
        <div className="hidden sm:block absolute left-2 sm:left-4 lg:left-8 top-0 bottom-0 w-8 sm:w-12 z-10 pointer-events-none opacity-85">
          <FiligreeOrnament variant="vertical-vine" className="h-full w-full" />
        </div>

        {/* Hero Content: Positioned at Bottom on Mobile so Model is fully visible, Left-aligned on Desktop */}
        <div className="w-full max-w-[1720px] mx-auto px-5 sm:px-14 lg:px-20 xl:px-24 relative z-10 pt-16 pb-8 sm:py-24 lg:py-28">
          <div className="max-w-xl md:max-w-2xl space-y-3.5 sm:space-y-8 text-center sm:text-left mx-auto sm:mx-0">
            <h1 className="font-serif text-2xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#FAF0CD] font-normal leading-[1.18] tracking-wide text-center sm:text-left">
              Timeless Elegance <br />
              <span className="italic font-light text-[#ECC876]">in Every Drape</span>
            </h1>

            <p className="text-[11px] sm:text-sm md:text-base lg:text-lg text-[#ECC876]/90 font-light tracking-wide flex flex-wrap items-center justify-center sm:justify-start gap-x-2 gap-y-1">
              <span>Traditional Sarees</span>
              <span className="text-[#D4AF37]/60">•</span>
              <span>Designer Blouses</span>
              <span className="text-[#D4AF37]/60">•</span>
              <span>Festive Wear</span>
            </p>

            <div className="pt-1 sm:pt-4 flex justify-center sm:justify-start">
              <button
                onClick={() => {
                  setActivePage('collections');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-2.5 sm:px-8 sm:py-3.5 bg-[#082928]/90 hover:bg-[#082928] border border-[#ECC876] text-[#ECC876] hover:text-[#FAF0CD] rounded-lg text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 shadow-lg inline-flex items-center gap-2 sm:gap-3 group"
              >
                <span>Explore Collections</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1 font-serif text-sm sm:text-base">→</span>
              </button>
            </div>
          </div>
        </div>

      </section>


      {/* 2. SECTION: "OUR COLLECTIONS" (Visual Category Cards matching mockup) */}
      <section className="pt-12 pb-4 sm:py-20 w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-[#937217] mb-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#D4AF37]">
              <path d="M12 3 C10 8 7 12 12 18 C17 12 14 8 12 3 Z" fill="currentColor" />
              <path d="M12 18 C8 14 3 11 4 7 C6 10 9 14 12 18 Z" fill="currentColor" opacity="0.8" />
              <path d="M12 18 C16 14 21 11 20 7 C18 10 15 14 12 18 Z" fill="currentColor" opacity="0.8" />
            </svg>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-[#D4AF37]" />
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#082928] tracking-[0.12em] uppercase font-normal">
              OUR COLLECTIONS
            </h2>
            <div className="h-[1px] w-12 bg-[#D4AF37]" />
          </div>
          <p className="text-xs sm:text-sm text-[#000000] mt-2 font-medium">
            Each drape an ode to generational Indian handloom artistry and royal ceremonial grandeur.
          </p>
        </div>

        {/* 3 Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryCards.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer border border-[#D4AF37]/30 bg-[#082928]"
            >
              {/* Card Image */}
              <div className="h-64 sm:h-72 md:h-80 lg:h-[350px] w-full overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover object-[center_20%] group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Gradient Shade */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#051C1C]/95 via-[#082928]/40 to-transparent" />

              {/* Bottom Label matching mockup */}
              <div className="absolute bottom-0 inset-x-0 p-5 flex items-center justify-between text-white border-t border-[#D4AF37]/20 backdrop-blur-[2px]">
                <div>
                  <span className="text-[10px] text-[#ECC876] tracking-widest uppercase font-medium">
                    {cat.tag}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-medium tracking-wide text-[#FAF0CD]">
                    {cat.title}
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-full border border-[#D4AF37]/50 flex items-center justify-center text-[#ECC876] group-hover:bg-[#D4AF37] group-hover:text-[#082928] transition-all duration-300">
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </section>


      {/* 3. SECTION: "Handpicked with Love" (Side-by-side banner matching mockup) */}
      <section className="pt-4 pb-10 sm:py-10 w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#D4AF37]/30 grid grid-cols-1 md:grid-cols-12 bg-[#082928]">
          
          {/* Left: Close-up Silk Zari Fabric Image */}
          <div className="md:col-span-6 relative aspect-[4/3] md:aspect-auto min-h-[300px] md:min-h-[380px]">
            <img
              src="/images/handpicked-banner.jpg"
              alt="Handcrafted pure silk fabrics and artisan curation"
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#082928]/90 hidden md:block" />
          </div>

          {/* Right: Dark Teal Banner Content */}
          <div className="md:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-center text-center md:text-left relative">
            <FiligreeOrnament className="top-4 right-4 w-28 h-28 opacity-25" />
            
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#ECC876] mb-3 self-center md:self-start">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Artisan Curations</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF0CD] font-normal leading-tight">
              Handpicked with Love
            </h2>

            <p className="text-sm sm:text-base text-[#FAF0CD]/85 mt-4 leading-relaxed font-light max-w-md">
              Curated collections for the modern woman who cherishes tradition. Every piece in our boutique is individually inspected, hand-measured, and blessed with the purity of heritage weaves.
            </p>

            <div className="mt-8 flex justify-center md:justify-start">
              <button
                onClick={() => {
                  setActivePage('collections');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-3 bg-[#D4AF37] text-[#082928] hover:bg-[#ECC876] rounded text-xs font-semibold tracking-widest uppercase transition-all duration-300 shadow-md flex items-center gap-2 group"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

        </div>
      </section>


      {/* 4. VALUE PROPOSITION / TRUST BAR (4 Icons matching mockup) */}
      <section className="py-8 sm:py-16 bg-[#E2EFF7] border-y border-[#c8dde9]">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6 text-center">
            
            {/* Feature 1 */}
            <div className="flex flex-col items-center space-y-2 sm:space-y-3 p-2 sm:p-4 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#D4AF37]/50 bg-white flex items-center justify-center text-[#937217] group-hover:scale-110 group-hover:bg-[#082928] group-hover:text-[#ECC876] transition-all duration-300 shadow-sm">
                <Gem className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h4 className="font-serif text-sm sm:text-lg text-[#082928] font-semibold">
                Premium Quality Fabrics
              </h4>
              <p className="text-xs text-[#000000] max-w-xs font-normal">
                100% pure certified mulberry silks, natural zari weaves, and hand-selected raw silks.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center space-y-2 sm:space-y-3 p-2 sm:p-4 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#D4AF37]/50 bg-white flex items-center justify-center text-[#937217] group-hover:scale-110 group-hover:bg-[#082928] group-hover:text-[#ECC876] transition-all duration-300 shadow-sm">
                <Award className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h4 className="font-serif text-sm sm:text-lg text-[#082928] font-semibold">
                Traditional Craftsmanship
              </h4>
              <p className="text-xs text-[#000000] max-w-xs font-normal">
                Hand-woven by multi-generational master weavers in Kanchipuram and Varanasi.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center space-y-2 sm:space-y-3 p-2 sm:p-4 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#D4AF37]/50 bg-white flex items-center justify-center text-[#937217] group-hover:scale-110 group-hover:bg-[#082928] group-hover:text-[#ECC876] transition-all duration-300 shadow-sm">
                <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h4 className="font-serif text-sm sm:text-lg text-[#082928] font-semibold">
                Elegant & Timeless Designs
              </h4>
              <p className="text-xs text-[#000000] max-w-xs font-normal">
                Classic temple borders, sacred peacock motifs, and contemporary festive palettes.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center space-y-2 sm:space-y-3 p-2 sm:p-4 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#D4AF37]/50 bg-white flex items-center justify-center text-[#937217] group-hover:scale-110 group-hover:bg-[#082928] group-hover:text-[#ECC876] transition-all duration-300 shadow-sm">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h4 className="font-serif text-sm sm:text-lg text-[#082928] font-semibold">
                Secure Shopping
              </h4>
              <p className="text-xs text-[#000000] max-w-xs font-normal">
                Safe payment encryption, tracked transit insurance, and hassle-free authenticity proof.
              </p>
            </div>

          </div>
        </div>
      </section>




      {/* 6. VERIFIED BRIDE & CLIENT TESTIMONIALS */}
      <section className="pt-7 pb-12 sm:py-20 bg-[#f4ece0]/60 border-t border-[#D4AF37]/20">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-xl mx-auto mb-6 sm:mb-12">
            <span className="text-xs uppercase tracking-widest text-[#937217] font-semibold">
              Love From Our Brides
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#082928] font-normal mt-1">
              Cherished Moments & Drapes
            </h2>
            <div className="h-[1px] w-16 bg-[#D4AF37] mx-auto mt-2.5 sm:mt-3" />
          </div>

          {/* DESKTOP VIEW: 3-column grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div 
                key={t.id} 
                className="bg-white p-7 rounded-xl border border-[#D4AF37]/25 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-amber-500 mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-[#000000] italic leading-relaxed font-normal">
                    "{t.comment}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <h5 className="font-serif font-semibold text-[#082928] text-sm">
                      {t.name}
                    </h5>
                    <p className="text-[11px] text-[#000000] font-medium">{t.location}</p>
                  </div>
                  <span className="text-[10px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded font-medium border border-emerald-200">
                    Verified Bride
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* MOBILE VIEW ALONE: Single column & row with stacked cards that move to the back */}
          <div className="block md:hidden">
            <div 
              className="relative h-[270px] w-full max-w-[340px] mx-auto"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {TESTIMONIALS.map((t, index) => {
                const offset = (index - activeReviewIndex + TESTIMONIALS.length) % TESTIMONIALS.length;
                if (offset > 2) return null;

                const zIndex = 30 - offset * 10;
                const scale = 1 - offset * 0.05;
                const translateY = offset * 12;
                const opacity = offset === 0 ? 1 : offset === 1 ? 0.75 : 0.45;

                return (
                  <div
                    key={t.id}
                    onClick={offset === 0 ? () => setActiveReviewIndex((prev) => (prev + 1) % TESTIMONIALS.length) : undefined}
                    style={{
                      zIndex,
                      transform: `translateY(${translateY}px) scale(${scale})`,
                      opacity,
                    }}
                    className={`absolute inset-x-0 top-0 h-[240px] bg-white p-5 rounded-2xl border border-[#D4AF37]/35 shadow-lg flex flex-col justify-between transition-all duration-500 ease-out select-none ${
                      offset === 0 ? 'cursor-pointer active:scale-[0.98]' : 'pointer-events-none'
                    }`}
                  >
                    <div>
                      <div className="flex text-amber-500 mb-2">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="text-xs text-[#000000] italic leading-relaxed font-normal line-clamp-4">
                        "{t.comment}"
                      </p>
                    </div>

                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                      <div>
                        <h5 className="font-serif font-semibold text-[#082928] text-xs">
                          {t.name}
                        </h5>
                        <p className="text-[10px] text-[#000000] font-medium">{t.location}</p>
                      </div>
                      <span className="text-[9px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded font-medium border border-emerald-200">
                        Verified Bride
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile Controls: Prev Button, Animated Indicator Dots, Next Button */}
            <div className="flex items-center justify-between max-w-[340px] mx-auto mt-4 px-2">
              <button
                onClick={() => setActiveReviewIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                className="w-8 h-8 rounded-full border border-[#D4AF37]/50 bg-white text-[#082928] flex items-center justify-center hover:bg-[#FAF7F2] transition-colors shadow-sm"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-1.5">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveReviewIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeReviewIndex === i 
                        ? 'w-5 bg-[#082928]' 
                        : 'w-1.5 bg-[#D4AF37]/40'
                    }`}
                    aria-label={`Go to review ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => setActiveReviewIndex((prev) => (prev + 1) % TESTIMONIALS.length)}
                className="w-8 h-8 rounded-full border border-[#D4AF37]/50 bg-white text-[#082928] flex items-center justify-center hover:bg-[#FAF7F2] transition-colors shadow-sm"
                aria-label="Next review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-center text-[10.5px] text-[#937217] mt-2 font-medium">
              Tap card or swipe to cycle reviews
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
