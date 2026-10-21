import React from 'react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';

export default function WishlistDrawer({ 
  isOpen, 
  onClose, 
  wishlistItems, 
  removeFromWishlist, 
  moveToCart, 
  onProductClick 
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] text-[#2D2A26] shadow-2xl flex flex-col border-l border-[#D4AF37]/30">
          
          {/* Header */}
          <div className="p-5 bg-[#082928] text-white flex items-center justify-between border-b border-[#D4AF37]/30">
            <div className="flex items-center gap-2.5">
              <Heart className="w-5 h-5 text-[#ECC876] fill-[#ECC876]" />
              <h2 className="font-serif text-xl tracking-wider text-[#FAF0CD]">
                Saved Favorites ({wishlistItems.length})
              </h2>
            </div>
            <button 
              onClick={onClose}
              className="p-1 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {wishlistItems.length === 0 ? (
            <div className="flex-1 p-8 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center border border-[#D4AF37]/30">
                <Heart className="w-10 h-10 text-[#082928]/40" />
              </div>
              <h3 className="font-serif text-xl text-[#082928]">Your Wishlist is Empty</h3>
              <p className="text-sm text-gray-500 max-w-xs">
                Save your favorite handloom sarees and designer blouses to review anytime.
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-6 py-2.5 bg-[#082928] text-[#ECC876] rounded text-sm font-medium tracking-wide hover:bg-[#051C1C] transition-colors"
              >
                Browse Collections
              </button>
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {wishlistItems.map((item) => (
                <div 
                  key={item.id}
                  className="flex gap-3 p-3 bg-white rounded-lg border border-[#D4AF37]/20 shadow-sm"
                >
                  <img 
                    src={item.images?.[0] || item.image} 
                    alt={item.title} 
                    className="w-20 h-24 object-cover rounded cursor-pointer shrink-0"
                    onClick={() => {
                      onProductClick(item);
                      onClose();
                    }}
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4 
                          onClick={() => {
                            onProductClick(item);
                            onClose();
                          }}
                          className="text-sm font-serif font-medium text-[#082928] truncate hover:text-[#937217] cursor-pointer"
                        >
                          {item.title}
                        </h4>
                        <button 
                          onClick={() => removeFromWishlist(item.id)}
                          className="text-gray-400 hover:text-red-500 p-1"
                          title="Remove from favorites"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-gray-500">{item.fabric}</p>
                      <p className="text-sm font-semibold text-[#082928] mt-1">
                        ₹ {item.price.toLocaleString('en-IN')}
                      </p>
                    </div>

                    <button
                      onClick={() => moveToCart(item)}
                      className="mt-2 py-1.5 px-3 bg-[#082928] hover:bg-[#051C1C] text-[#ECC876] text-xs font-medium rounded flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Move to Bag</span>
                    </button>
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
