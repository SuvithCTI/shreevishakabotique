import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Tag } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function SearchModal({ isOpen, onClose, onSelectProduct }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredProducts = query.trim() === '' ? [] : PRODUCTS.filter(p => 
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.categoryName.toLowerCase().includes(query.toLowerCase()) ||
    p.fabric.toLowerCase().includes(query.toLowerCase()) ||
    p.color.toLowerCase().includes(query.toLowerCase()) ||
    p.work.toLowerCase().includes(query.toLowerCase())
  );

  const quickTags = ['Kanchipuram', 'Banarasi', 'Aari Blouse', 'Bridal Lehenga', 'Pure Silk', 'Teal Green'];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-20 flex justify-center items-start">
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />

      <div className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-xl shadow-2xl border border-[#D4AF37]/40 overflow-hidden z-10 animate-fadeIn">
        {/* Search Input Bar */}
        <div className="p-4 bg-[#082928] border-b border-[#D4AF37]/30 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#ECC876]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search sarees, blouses, fabrics (e.g. Kanchipuram, Banarasi, Zari)..."
            className="flex-1 bg-transparent text-white placeholder-gray-400 text-sm sm:text-base focus:outline-none"
          />
          <button 
            onClick={onClose}
            className="p-1 rounded-full text-gray-300 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Suggestion Pills */}
        <div className="p-3 bg-[#f5efe2] border-b border-[#D4AF37]/15 flex items-center gap-2 overflow-x-auto text-xs">
          <span className="text-gray-500 flex items-center gap-1 shrink-0">
            <Tag className="w-3.5 h-3.5 text-[#937217]" />
            Trending:
          </span>
          {quickTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-2.5 py-1 rounded-full bg-white text-[#082928] hover:bg-[#082928] hover:text-[#ECC876] transition-colors border border-gray-200 shrink-0"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto p-4">
          {query.trim() === '' ? (
            <div className="py-8 text-center text-gray-500 text-sm">
              Type keywords above to discover exquisite handloom drapes and boutique collections.
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="py-8 text-center text-gray-500 text-sm">
              No matching creations found for "<span className="text-[#082928] font-semibold">{query}</span>". Try another search or explore all collections.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  className="flex gap-3 p-2.5 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-md cursor-pointer transition-all group"
                >
                  <img 
                    src={product.images[0]} 
                    alt={product.title} 
                    className="w-16 h-20 object-cover rounded shrink-0 group-hover:scale-105 transition-transform"
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-center">
                    <span className="text-[10px] text-[#937217] uppercase tracking-wider font-semibold">
                      {product.categoryName}
                    </span>
                    <h4 className="text-sm font-serif font-semibold text-[#082928] truncate group-hover:text-[#937217]">
                      {product.title}
                    </h4>
                    <p className="text-xs text-gray-500 truncate">{product.fabric}</p>
                    <p className="text-sm font-bold text-[#082928] mt-1">
                      ₹ {product.price.toLocaleString('en-IN')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
