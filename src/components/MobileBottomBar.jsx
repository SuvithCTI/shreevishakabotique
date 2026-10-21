import React from 'react';
import { Home, Grid, ShoppingBag, User } from 'lucide-react';

export default function MobileBottomBar({ activePage, setActivePage, cartCount, openCart }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#062020] border-t border-[#D4AF37]/25 sm:hidden shadow-2xl backdrop-blur-md">
      <div className="grid grid-cols-4 py-2 px-1">
        {/* Home */}
        <button
          onClick={() => {
            setActivePage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center py-1 transition-colors ${
            activePage === 'home' ? 'text-[#ECC876]' : 'text-gray-400'
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] mt-1 font-medium tracking-wider">Home</span>
        </button>

        {/* Collections */}
        <button
          onClick={() => {
            setActivePage('collections');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center py-1 transition-colors ${
            activePage === 'collections' || activePage === 'sarees' || activePage === 'blouses' ? 'text-[#ECC876]' : 'text-gray-400'
          }`}
        >
          <Grid className="w-5 h-5" />
          <span className="text-[10px] mt-1 font-medium tracking-wider">Collections</span>
        </button>

        {/* Cart */}
        <button
          onClick={openCart}
          className="relative flex flex-col items-center justify-center py-1 text-gray-400 hover:text-[#ECC876] transition-colors"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-[#D4AF37] text-[#062020] text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-[10px] mt-1 font-medium tracking-wider">Cart</span>
        </button>

        {/* Profile / Contact */}
        <button
          onClick={() => {
            setActivePage('contact');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center py-1 transition-colors ${
            activePage === 'contact' ? 'text-[#ECC876]' : 'text-gray-400'
          }`}
        >
          <User className="w-5 h-5" />
          <span className="text-[10px] mt-1 font-medium tracking-wider">Contact</span>
        </button>
      </div>
    </nav>
  );
}
