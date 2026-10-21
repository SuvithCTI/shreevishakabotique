import React, { useState, useMemo } from 'react';
import { 
  Filter, 
  SlidersHorizontal, 
  Sparkles, 
  Search,
  Check
} from 'lucide-react';
import FiligreeOrnament from '../components/FiligreeOrnament';
import ProductCard from '../components/ProductCard';
import { PRODUCTS, CATEGORIES } from '../data/products';

export default function CollectionsPage({ 
  selectedCategory, 
  setSelectedCategory, 
  onSelectProduct, 
  onAddToCart, 
  onToggleWishlist, 
  wishlistIds, 
  onQuickView 
}) {
  const [sortBy, setSortBy] = useState('featured');
  const [searchFilter, setSearchFilter] = useState('');
  const [priceRange, setPriceRange] = useState('all');

  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS];

    // Category filter
    if (selectedCategory && selectedCategory !== 'all') {
      if (selectedCategory === 'sarees') {
        list = list.filter(p => p.category === 'sarees');
      } else if (selectedCategory === 'blouses') {
        list = list.filter(p => p.category === 'blouses');
      } else if (selectedCategory === 'festive') {
        list = list.filter(p => p.category === 'festive');
      }
    }

    // Search filter
    if (searchFilter.trim() !== '') {
      const q = searchFilter.toLowerCase();
      list = list.filter(p => 
        p.title.toLowerCase().includes(q) || 
        p.fabric.toLowerCase().includes(q) ||
        p.color.toLowerCase().includes(q)
      );
    }

    // Price filter
    if (priceRange === 'under5k') {
      list = list.filter(p => p.price < 5000);
    } else if (priceRange === '5k-10k') {
      list = list.filter(p => p.price >= 5000 && p.price <= 10000);
    } else if (priceRange === 'above10k') {
      list = list.filter(p => p.price > 10000);
    }

    // Sorting
    if (sortBy === 'price-low') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [selectedCategory, searchFilter, priceRange, sortBy]);

  // Grouped products when "all" is active, strictly matching screen 2 of mockup
  const sareesGroup = PRODUCTS.filter(p => p.category === 'sarees');
  const blousesGroup = PRODUCTS.filter(p => p.category === 'blouses');
  const festiveGroup = PRODUCTS.filter(p => p.category === 'festive');

  return (
    <div className="bg-[#FAF7F2] min-h-screen text-[#2C2926]">
      
      {/* 1. HERO TITLE BANNER (Matching Mockup Screen 2 Top) */}
      <section className="relative bg-[#082928] text-white py-14 sm:py-18 overflow-hidden border-b border-[#D4AF37]/30 text-center">
        <FiligreeOrnament className="top-2 left-4 w-32 h-32 opacity-35" />
        <FiligreeOrnament className="top-2 right-4 w-32 h-32 opacity-35 rotate-90" />
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#051C1C]/50 text-xs tracking-widest uppercase text-[#ECC876] mb-3">
            <Sparkles className="w-3 h-3 text-[#D4AF37]" />
            <span>Master Weaver Archives</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-[#FAF0CD] font-normal tracking-wide">
            Our Collections
          </h1>

          <p className="font-serif italic text-base sm:text-lg text-[#ECC876] mt-2 font-light">
            Traditional, Elegant, Timeless.
          </p>
        </div>
      </section>

      {/* 2. CATEGORY PILLS & CONTROLS BAR (Matching Mockup Pills) */}
      <section className="sticky top-[69px] z-30 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#D4AF37]/25 py-4 shadow-xs">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Filter Pills matching mockup */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
              {CATEGORIES.map((cat) => {
                const isActive = (selectedCategory || 'all') === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-5 py-1.5 rounded-full text-xs sm:text-sm font-medium tracking-wider whitespace-nowrap transition-all duration-300 ${
                      isActive
                        ? 'bg-[#CCA342] text-[#082928] font-semibold shadow-md border border-[#937217]'
                        : 'bg-white text-gray-700 hover:bg-[#082928] hover:text-[#ECC876] border border-gray-200'
                    }`}
                  >
                    {cat.name}
                  </button>
                );
              })}
            </div>

            {/* Quick Sort & Search Filter */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-end text-xs">
              {/* Search in collections */}
              <div className="relative flex-1 md:w-48">
                <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter weave..."
                  value={searchFilter}
                  onChange={(e) => setSearchFilter(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 bg-white border border-gray-200 rounded-md text-xs focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="py-1.5 px-3 bg-white border border-gray-200 rounded-md text-xs text-gray-700 focus:outline-none focus:border-[#D4AF37]"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Customer Rating</option>
              </select>
            </div>

          </div>
        </div>
      </section>

      {/* 3. PRODUCTS CATALOG */}
      <section className="py-12 w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-16">
        
        {/* If user filtered by specific category or typed a search, show simple grid */}
        {(selectedCategory && selectedCategory !== 'all') || searchFilter !== '' ? (
          <div>
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#D4AF37]/20">
              <h2 className="font-serif text-2xl text-[#082928] capitalize">
                {selectedCategory === 'sarees' ? 'Sacred Handloom Sarees' : 
                 selectedCategory === 'blouses' ? 'Designer Embroidered Blouses' : 
                 selectedCategory === 'festive' ? 'Festive Drapes' : 'Matching Creations'}
                <span className="text-sm font-sans text-gray-500 font-normal ml-3">
                  ({filteredProducts.length} items)
                </span>
              </h2>

              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchFilter('');
                }}
                className="text-xs text-[#937217] hover:underline"
              >
                Reset All Filters
              </button>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-xl border border-dashed border-gray-300">
                <p className="text-gray-500 text-sm">No creations found matching your filter criteria.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchFilter('');
                  }}
                  className="mt-3 px-4 py-2 bg-[#082928] text-[#ECC876] text-xs rounded"
                >
                  View All Collections
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {filteredProducts.map((p) => (
                  <ProductCard
                    key={p.id}
                    product={p}
                    onSelect={onSelectProduct}
                    onAddToCart={onAddToCart}
                    onToggleWishlist={onToggleWishlist}
                    isWishlisted={wishlistIds.includes(p.id)}
                    onQuickView={onQuickView}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          /* DEFAULT VIEW: Categorized exactly like Mockup Screen 2 (Sarees, Blouse Designs, Bridal & Festive Wear) */
          <>
            {/* GROUP 1: FESTIVAL WEARS */}
            <div>
              <div className="mb-6 pb-2 border-b border-[#D4AF37]/25">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#082928] tracking-wide">
                  Festival Wears
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {festiveGroup.map((p) => (
                  <ProductCard
                    key={p.id}
                    product={p}
                    onSelect={onSelectProduct}
                    onAddToCart={onAddToCart}
                    onToggleWishlist={onToggleWishlist}
                    isWishlisted={wishlistIds.includes(p.id)}
                    onQuickView={onQuickView}
                  />
                ))}
              </div>
            </div>

            {/* GROUP 2: BLOUSE DESIGNS */}
            <div>
              <div className="mb-6 pb-2 border-b border-[#D4AF37]/25">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#082928] tracking-wide">
                  Blouse Designs
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {blousesGroup.map((p) => (
                  <ProductCard
                    key={p.id}
                    product={p}
                    onSelect={onSelectProduct}
                    onAddToCart={onAddToCart}
                    onToggleWishlist={onToggleWishlist}
                    isWishlisted={wishlistIds.includes(p.id)}
                    onQuickView={onQuickView}
                  />
                ))}
              </div>
            </div>

            {/* GROUP 3: SAREES */}
            <div>
              <div className="mb-6 pb-2 border-b border-[#D4AF37]/25">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#082928] tracking-wide">
                  Sarees
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {sareesGroup.map((p) => (
                  <ProductCard
                    key={p.id}
                    product={p}
                    onSelect={onSelectProduct}
                    onAddToCart={onAddToCart}
                    onToggleWishlist={onToggleWishlist}
                    isWishlisted={wishlistIds.includes(p.id)}
                    onQuickView={onQuickView}
                  />
                ))}
              </div>
            </div>
          </>
        )}

      </section>

    </div>
  );
}
