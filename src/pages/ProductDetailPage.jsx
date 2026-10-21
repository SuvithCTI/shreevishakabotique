import React, { useState } from 'react';
import { 
  ChevronRight, 
  Minus, 
  Plus, 
  ShoppingBag, 
  MessageCircle, 
  Heart, 
  Sparkles, 
  ShieldCheck, 
  Truck, 
  RefreshCw, 
  Star,
  Check
} from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data/products';

export default function ProductDetailPage({ 
  product, 
  setActivePage, 
  onSelectProduct, 
  onAddToCart, 
  onToggleWishlist, 
  isWishlisted, 
  wishlistIds,
  onQuickView
}) {
  // Fallback to first product if none selected
  const currentProduct = product || PRODUCTS[0];
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [addedToast, setAddedToast] = useState(false);

  const mainImage = (currentProduct.images && currentProduct.images[0]) || '/images/collections/silk-sarees.jpg';

  const handleAddToCart = () => {
    onAddToCart({ ...currentProduct, quantity });
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 3000);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Shree Vishaka Boutique! I am interested in inquiring about the "${currentProduct.title}" (Price: ₹${currentProduct.price}). Is it available for order or custom blouse stitching?`
  );

  const relatedProducts = PRODUCTS.filter(p => p.id !== currentProduct.id).slice(0, 4);

  return (
    <div className="bg-[#FAF7F2] min-h-screen text-[#2C2926] pb-20">
      
      {/* 1. BREADCRUMB NAVIGATION */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pt-6 pb-4">
        <nav className="flex items-center gap-2 text-xs text-gray-500 font-light">
          <button 
            onClick={() => setActivePage('home')}
            className="hover:text-[#082928] transition-colors"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <button 
            onClick={() => setActivePage('collections')}
            className="hover:text-[#082928] transition-colors"
          >
            Collections
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <button 
            onClick={() => {
              setActivePage('collections');
            }}
            className="hover:text-[#082928] transition-colors capitalize"
          >
            {currentProduct.categoryName || 'Sarees'}
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-[#082928] font-medium truncate max-w-[200px]">
            {currentProduct.title}
          </span>
        </nav>
      </div>

      {/* 2. PRODUCT MAIN STAGE (Thumbnails + Main Image + Details) */}
      <section className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pt-4 pb-1 sm:py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT: MAIN PRODUCT IMAGE (Single Full-Size Image) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[3/4] sm:aspect-auto sm:h-[640px] rounded-xl overflow-hidden bg-white shadow-xl border border-[#D4AF37]/30 group">
              <img 
                src={mainImage} 
                alt={currentProduct.title}
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 cursor-zoom-in"
              />

              {/* Wishlist Heart Top Right */}
              <button
                onClick={() => onToggleWishlist(currentProduct)}
                className={`absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all ${
                  isWishlisted 
                    ? 'bg-rose-50 text-rose-600' 
                    : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:text-rose-600'
                }`}
                aria-label="Wishlist"
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-rose-600' : ''}`} />
              </button>

              {/* Silk Mark Badge */}
              <div className="absolute bottom-4 left-4 bg-[#082928]/90 backdrop-blur-sm text-[#ECC876] border border-[#D4AF37]/40 px-3 py-1.5 rounded text-xs flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>100% Pure Certified Mulberry Silk</span>
              </div>
            </div>
          </div>

          {/* RIGHT: BUY BOX & PRODUCT DETAILS (Matching Mockup Screen 3) */}
          <div className="lg:col-span-5 flex flex-col justify-start space-y-6">
            
            {/* Title & Price */}
            <div>
              <span className="text-xs uppercase tracking-widest text-[#937217] font-semibold">
                Authentic Handloom
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl text-[#082928] font-normal mt-1 leading-tight">
                {currentProduct.title}
              </h1>

              {/* Price */}
              <div className="flex items-baseline gap-3 mt-3">
                <span className="font-serif text-3xl font-medium text-[#082928]">
                  ₹ {currentProduct.price.toLocaleString('en-IN')}
                </span>
                {currentProduct.originalPrice && (
                  <span className="text-base text-gray-400 line-through">
                    ₹ {currentProduct.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
                <span className="text-xs text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded font-medium">
                  Tax Included
                </span>
              </div>
            </div>

            {/* Short Description */}
            <p className="text-sm text-[#000000] leading-relaxed font-normal">
              {currentProduct.description}
            </p>

            {/* Key Specs Table matching mockup */}
            <div className="py-4 border-y border-[#D4AF37]/20 space-y-2 text-sm">
              <div className="flex">
                <span className="w-24 text-[#000000] font-medium">Fabric :</span>
                <span className="font-semibold text-[#082928]">{currentProduct.fabric}</span>
              </div>
              <div className="flex">
                <span className="w-24 text-[#000000] font-medium">Color :</span>
                <span className="font-semibold text-[#082928]">{currentProduct.color}</span>
              </div>
              <div className="flex">
                <span className="w-24 text-[#000000] font-medium">Work :</span>
                <span className="font-semibold text-[#082928]">{currentProduct.work}</span>
              </div>
            </div>

            {/* Quantity Selector & Action Buttons matching mockup */}
            <div className="space-y-4 pt-1">
              
              {/* Quantity */}
              <div className="flex items-center gap-4">
                <span className="text-xs uppercase tracking-wider text-gray-600 font-medium">Quantity:</span>
                <div className="inline-flex items-center border border-[#082928]/30 rounded-md bg-white">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 text-gray-600 hover:text-[#082928] transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-4 text-sm font-semibold text-[#082928]">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 text-gray-600 hover:text-[#082928] transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Add to Cart (Solid button matching mockup) */}
              <button
                onClick={handleAddToCart}
                className="w-full py-4 bg-[#082928] hover:bg-[#051C1C] text-[#ECC876] text-sm font-semibold tracking-widest uppercase rounded shadow-lg flex items-center justify-center gap-2.5 transition-all duration-300 border border-[#D4AF37]/40 group"
              >
                <ShoppingBag className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>Add to Cart</span>
              </button>

              {/* Enquire Now (Outlined/WhatsApp button matching mockup) */}
              <a
                href={`https://wa.me/916369374108?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 bg-transparent hover:bg-emerald-50 text-emerald-800 border-2 border-emerald-700/60 text-xs font-semibold tracking-widest uppercase rounded flex items-center justify-center gap-2.5 transition-all duration-300 text-center"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Enquire Now (WhatsApp)</span>
              </a>

              {/* Toast Feedback */}
              {addedToast && (
                <div className="p-3 bg-emerald-50 border border-emerald-300 text-emerald-800 rounded text-xs flex items-center justify-between animate-fadeIn">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Check className="w-4 h-4 text-emerald-600" />
                    Added {quantity} x {currentProduct.title} to your bag!
                  </span>
                  <button 
                    onClick={() => setActivePage('collections')} 
                    className="underline text-[11px] font-semibold"
                  >
                    View Bag
                  </button>
                </div>
              )}
            </div>

            {/* Trust Assurances */}
            <div className="p-4 bg-white rounded-lg border border-[#D4AF37]/25 text-xs text-gray-600 space-y-2">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#D4AF37]" />
                <span>Free Insured Express Delivery across India (3-4 Days)</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>Silk Mark Certified Guarantee of 100% Purity</span>
              </div>
              <div className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-[#D4AF37]" />
                <span>7-Day Easy Exchange Policy & Video Call Inspection Available</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. PRODUCT DETAILS TABS (Description | Care Instructions | Shipping) matching mockup */}
      <section className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 mt-4 sm:mt-16 pt-4 sm:pt-10 border-t border-[#D4AF37]/25">
        
        {/* Tab Headers matching mockup */}
        <div className="flex items-center justify-start gap-4 sm:gap-8 border-b border-gray-200 overflow-x-auto scrollbar-none whitespace-nowrap pb-1">
          <button
            onClick={() => setActiveTab('description')}
            className={`pb-3 text-xs sm:text-sm font-medium tracking-wider uppercase transition-all relative shrink-0 ${
              activeTab === 'description' 
                ? 'text-[#082928] font-semibold' 
                : 'text-gray-400 hover:text-gray-700'
            }`}
          >
            Description
            {activeTab === 'description' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4AF37]" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('care')}
            className={`pb-3 text-xs sm:text-sm font-medium tracking-wider uppercase transition-all relative shrink-0 ${
              activeTab === 'care' 
                ? 'text-[#082928] font-semibold' 
                : 'text-gray-400 hover:text-gray-700'
            }`}
          >
            Care Instructions
            {activeTab === 'care' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4AF37]" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('shipping')}
            className={`pb-3 text-xs sm:text-sm font-medium tracking-wider uppercase transition-all relative shrink-0 ${
              activeTab === 'shipping' 
                ? 'text-[#082928] font-semibold' 
                : 'text-gray-400 hover:text-gray-700'
            }`}
          >
            Shipping
            {activeTab === 'shipping' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4AF37]" />
            )}
          </button>
        </div>

        {/* Tab Body matching mockup */}
        <div className="py-6 max-w-3xl text-sm sm:text-base text-[#000000] leading-relaxed font-normal">
          {activeTab === 'description' && (
            <div className="space-y-4">
              <p>
                This beautiful {currentProduct.title} features intricate gold zari work with a rich border and elegant pallu. The fabric is soft, luxurious and perfect for special occasions and sacred wedding celebrations.
              </p>
              <p>
                Handcrafted using pure mulberry silk threads, the warp and weft are interlocked in authentic Korvai craftsmanship that takes over 14 days of dedicated master-loom weaving.
              </p>
            </div>
          )}

          {activeTab === 'care' && (
            <ul className="space-y-2 list-disc list-inside">
              <li>Dry clean only by specialized silk cleaners.</li>
              <li>Always store wrapped inside pure white muslin or breathable cotton cloth.</li>
              <li>Avoid spraying perfume, deodorants, or water directly onto zari borders.</li>
              <li>Air the saree in a shaded, well-ventilated space once every 6 months.</li>
            </ul>
          )}

          {activeTab === 'shipping' && (
            <div className="space-y-3">
              <p>
                All orders are dispatched within 24 to 48 hours from our Palladam flagship boutique (Chettipalayam Road, Tamil Nadu) in insured, tamper-proof luxury packaging.
              </p>
              <p>
                <strong>Domestic Delivery:</strong> 2 to 4 business days across India (Complimentary Free Express Shipping).
              </p>
              <p>
                <strong>International Delivery:</strong> 6 to 9 business days worldwide via DHL Express.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 4. "YOU MAY ALSO LIKE" SECTION matching mockup Screen 3 Bottom */}
      <section className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 mt-16">
        <h2 className="font-serif text-2xl sm:text-3xl text-[#082928] mb-8 font-normal">
          You May Also Like
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {relatedProducts.map((rel) => (
            <ProductCard
              key={rel.id}
              product={rel}
              onSelect={(p) => {
                onSelectProduct(p);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onAddToCart={onAddToCart}
              onToggleWishlist={onToggleWishlist}
              isWishlisted={wishlistIds.includes(rel.id)}
              onQuickView={onQuickView}
            />
          ))}
        </div>
      </section>

    </div>
  );
}
