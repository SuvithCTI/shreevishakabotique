import React from 'react';
import { Heart, ShoppingBag, Eye } from 'lucide-react';

export default function ProductCard({ 
  product, 
  onSelect, 
  onAddToCart, 
  onToggleWishlist, 
  isWishlisted,
  onQuickView
}) {
  return (
    <div className="group relative flex flex-col bg-white rounded-lg overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37] shadow-sm hover:shadow-xl transition-all duration-300">
      
      {/* Image Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100 cursor-pointer" onClick={() => onSelect(product)}>
        <img 
          src={product.images[0]} 
          alt={product.title}
          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
          loading="lazy"
        />

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className={`absolute top-2.5 right-2.5 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
            isWishlisted 
              ? 'bg-rose-50 text-rose-600' 
              : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:text-rose-600 hover:bg-white'
          }`}
          aria-label="Save to Wishlist"
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-600 text-rose-600' : ''}`} />
        </button>

        {/* Hover Quick Actions Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2">
          {onQuickView && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onQuickView(product);
              }}
              className="py-1.5 px-3 bg-white/90 hover:bg-white text-[#082928] text-xs font-medium rounded shadow flex items-center gap-1.5 transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Quick View</span>
            </button>
          )}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="py-1.5 px-3 bg-[#082928] hover:bg-[#051C1C] text-[#ECC876] text-xs font-medium rounded shadow flex items-center gap-1.5 transition-colors border border-[#D4AF37]/40"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Add to Bag</span>
          </button>
        </div>
      </div>

      {/* Info Details */}
      <div className="p-3.5 flex flex-col flex-1 justify-between text-center bg-[#FAF7F2]/50">
        <div className="cursor-pointer" onClick={() => onSelect(product)}>
          <span className="text-[10px] uppercase tracking-widest text-[#937217] font-semibold block mb-0.5">
            {product.fabric || product.categoryName}
          </span>
          <h3 className="font-serif text-base sm:text-lg font-medium text-[#082928] tracking-wide hover:text-[#937217] transition-colors line-clamp-1">
            {product.title}
          </h3>
        </div>

        <div className="mt-2 pt-2 border-t border-gray-200/60 flex items-center justify-center gap-2">
          <span className="font-medium text-base text-[#082928]">
            ₹ {product.price.toLocaleString('en-IN')}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through">
              ₹ {product.originalPrice.toLocaleString('en-IN')}
            </span>
          )}
        </div>
      </div>

    </div>
  );
}
