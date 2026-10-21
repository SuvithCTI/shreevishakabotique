import React, { useState, useEffect } from 'react';
import { 
  Search, 
  ShoppingBag, 
  Heart, 
  Menu, 
  X, 
  Phone, 
  MessageCircle,
  Truck
} from 'lucide-react';
import Logo from './Logo';

export default function Navbar({ 
  activePage, 
  setActivePage, 
  cartCount, 
  wishlistCount, 
  openCart, 
  openOrders,
  openWishlist, 
  openSearch 
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'collections', label: 'Collections' },
    { id: 'sarees', label: 'Sarees' },
    { id: 'blouses', label: 'Blouse Designs' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Main Sticky Navbar */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#082928]/95 backdrop-blur-md shadow-xl py-3 border-b border-[#D4AF37]/20' 
            : 'bg-[#082928] py-4 border-b border-[#D4AF37]/15'
        }`}
      >
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 flex items-center justify-between">
          
          {/* Mobile Menu Trigger & Logo in Mobile */}
          <div className="flex items-center gap-3 lg:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#ECC876] hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Brand Logo */}
          <div className="flex items-center">
            <Logo onClick={() => handleNavClick('home')} />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 text-sm tracking-[0.08em] transition-all duration-300 ${
                    isActive 
                      ? 'text-[#ECC876] font-medium' 
                      : 'text-[#E0E7E7] hover:text-[#ECC876]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-1 sm:gap-3 lg:gap-4">
            {/* My Orders Icon Button */}
            <button
              onClick={openOrders}
              className="hidden sm:flex p-1.5 sm:p-2 text-[#E0E7E7] hover:text-[#ECC876] transition-colors rounded-full hover:bg-white/5 cursor-pointer"
              aria-label="My Orders"
              title="My Orders"
            >
              <Truck className="w-5 h-5" />
            </button>

            {/* Search Icon (Hidden in mobile view alone) */}
            <button
              onClick={openSearch}
              className="hidden sm:flex p-1.5 sm:p-2 text-[#E0E7E7] hover:text-[#ECC876] transition-colors rounded-full hover:bg-white/5"
              aria-label="Search collection"
              title="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist Button */}
            <button
              onClick={openWishlist}
              className="relative p-1.5 sm:p-2 text-[#E0E7E7] hover:text-[#ECC876] transition-colors rounded-full hover:bg-white/5"
              aria-label="Wishlist"
              title="Saved items"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 w-4 h-4 bg-[#D4AF37] text-[#051C1C] text-[10px] font-bold rounded-full flex items-center justify-center animate-bounce">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Shopping Cart Bag */}
            <button
              onClick={openCart}
              className="relative p-1.5 sm:p-2 text-[#ECC876] hover:text-white transition-colors rounded-full hover:bg-white/5 group"
              aria-label="Shopping Cart"
              title="View Cart"
            >
              <ShoppingBag className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              {cartCount > 0 && (
                <span className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 w-4 h-4 bg-[#D4AF37] text-[#082928] text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down / Drawer Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#062020] border-t border-[#D4AF37]/20 px-6 py-6 transition-all duration-300 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                const isActive = activePage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`flex items-center justify-between text-left py-2 text-base tracking-wide border-b border-white/5 ${
                      isActive ? 'text-[#ECC876] font-semibold' : 'text-gray-200'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="text-[#D4AF37] text-xs">→</span>
                  </button>
                );
              })}

              {/* Track Orders Link in Mobile */}
              <button
                onClick={() => {
                  openOrders?.();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-between text-left py-2 text-base tracking-wide border-b border-white/5 text-[#ECC876] font-semibold"
              >
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#D4AF37]" />
                  <span>My Orders</span>
                </div>
                <span className="text-[#D4AF37] text-xs">→</span>
              </button>
              
              <div className="pt-4 flex flex-col gap-3 text-sm text-[#FAF0CD]/80">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <a href="tel:+916369374108" className="hover:text-[#D4AF37] transition-colors">
                    Call Boutique: +91 63693 74108
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <a 
                    href="https://wa.me/916369374108?text=Hi%20Shree%20Vishaka%20Boutique,%20I%20would%20like%20to%20enquire%20about%20your%20saree%20collection" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-[#25D366] underline"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
