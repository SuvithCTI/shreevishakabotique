import React, { useState } from 'react';
import { X, ShoppingBag, Heart, Star, Check, ArrowRight } from 'lucide-react';

export default function QuickViewModal({ 
  product, 
  isOpen, 
  onClose, 
  onAddToCart, 
  onToggleWishlist, 
  isWishlisted,
  onGoToDetail 
}) {
  const [selectedImgIdx, setSelectedImgIdx] = useState(0);

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-10 flex items-center justify-center">
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />

      <div className="relative w-full max-w-3xl bg-[#FAF7F2] rounded-2xl shadow-2xl border border-[#D4AF37]/40 overflow-hidden z-10 animate-fadeIn">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-[#082928]/80 text-[#ECC876] hover:text-white rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Images side */}
          <div className="p-4 sm:p-6 bg-white flex flex-col items-center justify-center">
            <div className="relative aspect-[3/4] w-full max-w-xs rounded-lg overflow-hidden border border-[#D4AF37]/30 shadow-md">
              <img 
                src={product.images[selectedImgIdx] || product.images[0]} 
                alt={product.title} 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-2 mt-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImgIdx(idx)}
                    className={`w-12 h-14 rounded overflow-hidden border-2 transition-all ${
                      selectedImgIdx === idx ? 'border-[#D4AF37] scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details side */}
          <div className="p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#937217] font-semibold">
                {product.categoryName}
              </span>
              <h2 className="font-serif text-2xl text-[#082928] font-medium mt-1">
                {product.title}
              </h2>
              
              <div className="flex items-center gap-2 mt-2">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs text-gray-500">({product.reviewCount || 40} reviews)</span>
              </div>

              <div className="flex items-baseline gap-3 mt-3">
                <span className="text-2xl font-serif font-bold text-[#082928]">
                  ₹ {product.price.toLocaleString('en-IN')}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    ₹ {product.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
                <span className="text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium">
                  Inclusive of all taxes
                </span>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 mt-4 leading-relaxed font-light">
                {product.description}
              </p>

              {/* Specs */}
              <div className="mt-4 p-3 bg-white rounded-lg border border-gray-200 text-xs space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-gray-500">Fabric:</span>
                  <span className="font-medium text-[#082928]">{product.fabric}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Work:</span>
                  <span className="font-medium text-[#082928]">{product.work}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Color:</span>
                  <span className="font-medium text-[#082928]">{product.color}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 space-y-2.5">
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    onAddToCart(product);
                    onClose();
                  }}
                  className="flex-1 py-3 bg-[#082928] hover:bg-[#051C1C] text-[#ECC876] text-xs font-semibold tracking-wider uppercase rounded flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bag</span>
                </button>
                <button
                  onClick={() => onToggleWishlist(product)}
                  className={`p-3 rounded border transition-colors ${
                    isWishlisted 
                      ? 'border-rose-400 bg-rose-50 text-rose-600' 
                      : 'border-gray-300 hover:border-[#D4AF37] text-gray-700'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-600' : ''}`} />
                </button>
              </div>

              <button
                onClick={() => {
                  onGoToDetail(product);
                  onClose();
                }}
                className="w-full py-2 text-center text-xs text-[#082928] hover:text-[#937217] flex items-center justify-center gap-1 font-medium transition-colors"
              >
                <span>View Full Product Details & Styling Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
