import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';
import CartDrawer from './components/CartDrawer';
import WishlistDrawer from './components/WishlistDrawer';
import SearchModal from './components/SearchModal';
import QuickViewModal from './components/QuickViewModal';
import WhatsAppFloat from './components/WhatsAppFloat';

import HomePage from './pages/HomePage';
import CollectionsPage from './pages/CollectionsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

import { PRODUCTS } from './data/products';

export default function App() {
  // Navigation State
  const [activePage, setActivePage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);

  // Modals & Drawers
  const [cartOpen, setCartOpen] = useState(false);
  const [cartDrawerTab, setCartDrawerTab] = useState('bag');
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const openCartWithTab = (tab = 'bag') => {
    setCartDrawerTab(tab);
    setCartOpen(true);
  };

  // Cart & Wishlist state with localStorage persistence
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('svb_cart');
      return saved ? JSON.parse(saved) : [
        // Seed initial sample item matching mockup cart state
        { ...PRODUCTS[0], quantity: 1 }
      ];
    } catch {
      return [{ ...PRODUCTS[0], quantity: 1 }];
    }
  });

  const [wishlistItems, setWishlistItems] = useState(() => {
    try {
      const saved = localStorage.getItem('svb_wishlist');
      return saved ? JSON.parse(saved) : [PRODUCTS[1]];
    } catch {
      return [PRODUCTS[1]];
    }
  });

  useEffect(() => {
    localStorage.setItem('svb_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('svb_wishlist', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  // Cart operations
  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      const addQty = product.quantity || 1;
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + addQty } : item
        );
      }
      return [...prev, { ...product, quantity: addQty }];
    });
    setCartOpen(true);
  };

  const updateCartQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item => (item.id === productId ? { ...item, quantity: newQuantity } : item))
    );
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // Wishlist operations
  const handleToggleWishlist = (product) => {
    setWishlistItems(prev => {
      const exists = prev.some(item => item.id === product.id);
      if (exists) {
        return prev.filter(item => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlistItems(prev => prev.filter(item => item.id !== productId));
  };

  const moveToCartFromWishlist = (product) => {
    removeFromWishlist(product.id);
    handleAddToCart(product);
  };

  // Product Selection & Routing handler
  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setActivePage('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle direct navigation to categories from navbar
  const handleNavPageChange = (pageId) => {
    if (pageId === 'sarees') {
      setSelectedCategory('sarees');
      setActivePage('collections');
    } else if (pageId === 'blouses') {
      setSelectedCategory('blouses');
      setActivePage('collections');
    } else {
      if (pageId === 'collections') {
        setSelectedCategory('all');
      }
      setActivePage(pageId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cartTotalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const wishlistIds = wishlistItems.map(item => item.id);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2C2926] selection:bg-[#D4AF37]/30 selection:text-[#082928]">
      
      {/* 1. Global Luxury Navigation */}
      <Navbar
        activePage={
          activePage === 'collections' && selectedCategory === 'sarees' ? 'sarees' :
          activePage === 'collections' && selectedCategory === 'blouses' ? 'blouses' :
          activePage
        }
        setActivePage={handleNavPageChange}
        cartCount={cartTotalCount}
        wishlistCount={wishlistItems.length}
        openCart={() => openCartWithTab('bag')}
        openOrders={() => openCartWithTab('order-history')}
        openWishlist={() => setWishlistOpen(true)}
        openSearch={() => setSearchOpen(true)}
      />

      {/* 2. Page Router */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage
            setActivePage={handleNavPageChange}
            setSelectedCategory={setSelectedCategory}
            onSelectProduct={handleSelectProduct}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            wishlistIds={wishlistIds}
            onQuickView={(p) => setQuickViewProduct(p)}
          />
        )}

        {activePage === 'collections' && (
          <CollectionsPage
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            onSelectProduct={handleSelectProduct}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            wishlistIds={wishlistIds}
            onQuickView={(p) => setQuickViewProduct(p)}
          />
        )}

        {activePage === 'product-detail' && (
          <ProductDetailPage
            product={selectedProduct}
            setActivePage={handleNavPageChange}
            onSelectProduct={handleSelectProduct}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            isWishlisted={wishlistIds.includes(selectedProduct?.id)}
            wishlistIds={wishlistIds}
            onQuickView={(p) => setQuickViewProduct(p)}
          />
        )}

        {activePage === 'about' && (
          <AboutPage setActivePage={handleNavPageChange} />
        )}

        {activePage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* 3. Global Footer matching all mockup screens */}
      <Footer 
        setActivePage={handleNavPageChange} 
        openOrders={() => openCartWithTab('order-history')}
      />

      {/* 4. Mobile Bottom Navigation Bar (Screen 6 Preview) */}
      <MobileBottomBar
        activePage={activePage}
        setActivePage={handleNavPageChange}
        cartCount={cartTotalCount}
        openCart={() => openCartWithTab('bag')}
      />

      {/* 5. Modals & Overlays */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        initialTab={cartDrawerTab}
        cartItems={cartItems}
        updateQuantity={updateCartQuantity}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        onProductClick={handleSelectProduct}
      />

      <WishlistDrawer
        isOpen={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
        wishlistItems={wishlistItems}
        removeFromWishlist={removeFromWishlist}
        moveToCart={moveToCartFromWishlist}
        onProductClick={handleSelectProduct}
      />

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectProduct={handleSelectProduct}
      />

      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={quickViewProduct ? wishlistIds.includes(quickViewProduct.id) : false}
        onGoToDetail={handleSelectProduct}
      />

      {/* 6. WhatsApp Concierge Float */}
      <WhatsAppFloat />

    </div>
  );
}
