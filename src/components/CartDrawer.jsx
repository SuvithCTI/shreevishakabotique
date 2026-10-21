import React, { useState, useEffect } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  Truck, 
  MapPin, 
  CreditCard, 
  Package, 
  Sparkles, 
  MessageCircle, 
  Search, 
  Copy, 
  ChevronRight, 
  Check, 
  AlertCircle,
  BadgeCheck,
  Lock,
  Smartphone,
  Landmark,
  QrCode
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  cartItems, 
  updateQuantity, 
  removeFromCart, 
  clearCart,
  onProductClick,
  initialTab = 'bag'
}) {
  // Navigation tabs inside drawer: 'bag' | 'shipping' | 'payment' | 'order-status' | 'order-history'
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    if (isOpen && initialTab) {
      setActiveTab(initialTab);
    }
  }, [isOpen, initialTab]);

  // Shipping Address Form State
  const [shippingData, setShippingData] = useState({
    fullName: 'Ananya Sharma',
    phone: '6369374108',
    email: 'ananya.sharma@example.com',
    addressLine: 'Flat 402, Lotus Grandeur, 12th Main',
    landmark: 'Near Indiranagar Club',
    city: 'Bangalore',
    state: 'Karnataka',
    pincode: '560038',
    addressType: 'home'
  });

  const [shippingMethod, setShippingMethod] = useState('express'); // 'express' | 'same-day'
  const [formErrors, setFormErrors] = useState({});
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  // Dedicated Payment Gateway State
  const [paymentSubTab, setPaymentSubTab] = useState('upi'); // 'upi' | 'card' | 'netbanking'
  const [upiId, setUpiId] = useState('ananya@okhdfcbank');
  const [cardData, setCardData] = useState({
    number: '4532 8910 2341 8912',
    name: 'Ananya Sharma',
    expiry: '08/29',
    cvv: '842'
  });
  const [selectedBank, setSelectedBank] = useState('HDFC Bank');

  // Active / Selected Order for Tracking
  const [activeOrder, setActiveOrder] = useState(null);
  const [copiedId, setCopiedId] = useState(false);
  const [searchOrderId, setSearchOrderId] = useState('');

  // Persistent Orders List in localStorage
  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem('svb_orders');
      if (saved) return JSON.parse(saved);
      
      // Default sample order so user can test tracking immediately
      return [
        {
          orderId: '#SVB-2026-89412',
          date: '20 Oct 2026, 04:30 PM',
          items: [
            {
              id: 'sample-1',
              title: 'Royal Peacock Kanchipuram Silk Saree',
              price: 2990,
              quantity: 1,
              fabric: 'Pure Mulberry Silk with Pure Zari',
              image: '/images/collections/silk-sarees.jpg'
            }
          ],
          subtotal: 2990,
          total: 2990,
          shippingAddress: {
            fullName: 'Ananya Sharma',
            phone: '6369374108',
            email: 'ananya.sharma@example.com',
            addressLine: 'Flat 402, Lotus Grandeur, 12th Main',
            landmark: 'Near Indiranagar Club',
            city: 'Bangalore',
            state: 'Karnataka',
            pincode: '560038',
            addressType: 'home'
          },
          shippingMethod: 'Express Insured Air Courier',
          paymentMethod: 'UPI Verified (Instant)',
          status: 'Hand Fall & Pico Tailoring',
          currentStep: 3, // 1: Placed, 2: Silk Mark Verified, 3: Fall & Pico, 4: Dispatched, 5: Delivered
          trackingNumber: 'BLUEDART-SVB-894127',
          carrier: 'Blue Dart Luxury Air Express',
          estimatedDelivery: '23 Oct 2026'
        }
      ];
    } catch {
      return [];
    }
  });

  // Save orders to localStorage
  useEffect(() => {
    localStorage.setItem('svb_orders', JSON.stringify(orders));
  }, [orders]);

  // If activeOrder is cleared and user opens 'order-status', fallback to most recent order
  useEffect(() => {
    if (activeTab === 'order-status' && !activeOrder && orders.length > 0) {
      setActiveOrder(orders[0]);
    }
  }, [activeTab, activeOrder, orders]);

  if (!isOpen) return null;

  // Pricing calculations
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const finalTotal = subtotal;
  const totalItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Validate Address Form before moving to Payment Gateway
  const handleProceedToPayment = () => {
    const errors = {};
    if (!shippingData.fullName.trim()) errors.fullName = 'Please enter your full name';
    if (!shippingData.phone.trim() || shippingData.phone.replace(/\D/g, '').length < 10) {
      errors.phone = 'Valid 10-digit mobile number is required';
    }
    if (!shippingData.email.trim() || !shippingData.email.includes('@')) {
      errors.email = 'Valid email address is required for dispatch updates';
    }
    if (!shippingData.addressLine.trim()) errors.addressLine = 'Street address / apartment is required';
    if (!shippingData.city.trim()) errors.city = 'City is required';
    if (!shippingData.state.trim()) errors.state = 'State is required';
    if (!shippingData.pincode.trim() || shippingData.pincode.length < 6) {
      errors.pincode = 'Valid 6-digit PIN code required';
    }

    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setActiveTab('payment');
    }
  };

  // Handle Complete Payment & Place Order
  const handleCompletePaymentAndPlaceOrder = () => {
    setIsPlacingOrder(true);

    const paymentLabel = 
      paymentSubTab === 'upi' ? `UPI / QR Instant (${upiId})` :
      paymentSubTab === 'card' ? `Credit/Debit Card (Ending in ${cardData.number.slice(-4)})` :
      `Net Banking (${selectedBank})`;

    setTimeout(() => {
      const newOrderId = `#SVB-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
      const currentDateStr = new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });

      const newOrderObj = {
        orderId: newOrderId,
        date: currentDateStr,
        items: [...cartItems],
        subtotal,
        total: finalTotal,
        shippingAddress: { ...shippingData },
        shippingMethod: shippingMethod === 'same-day' ? 'Palladam & Coimbatore Regional Express Hand Delivery' : 'Insured Air Express Courier',
        paymentMethod: paymentLabel,
        status: 'Order Confirmed & Silk Mark Verification',
        currentStep: 2,
        trackingNumber: `BLUEDART-${newOrderId.replace(/[^0-9]/g, '')}`,
        carrier: 'Blue Dart Luxury Air Express',
        estimatedDelivery: shippingMethod === 'same-day' ? 'Today / Tomorrow by 7 PM' : '3-4 Business Days'
      };

      // Prepend new order to list
      const updatedOrders = [newOrderObj, ...orders];
      setOrders(updatedOrders);
      setActiveOrder(newOrderObj);

      // Trigger Confetti
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });

      setIsPlacingOrder(false);
      clearCart();
      setActiveTab('order-status');
    }, 1200);
  };

  // Copy Order ID
  const handleCopyOrderId = (id) => {
    navigator.clipboard?.writeText(id);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  // Print Order Receipt
  const handlePrintReceipt = () => {
    window.print();
  };

  // Filtered orders for lookup
  const filteredOrders = searchOrderId.trim()
    ? orders.filter(o => o.orderId.toLowerCase().includes(searchOrderId.trim().toLowerCase()) || o.shippingAddress.fullName.toLowerCase().includes(searchOrderId.trim().toLowerCase()))
    : orders;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-xl bg-[#FAF7F2] text-[#000000] shadow-2xl flex flex-col border-l border-[#D4AF37]/40">
          
          {/* Header */}
          <div className="p-4 sm:p-5 bg-[#082928] text-white flex flex-col gap-3 border-b border-[#D4AF37]/30 shadow-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <ShoppingBag className="w-5 h-5 text-[#ECC876]" />
                <h2 className="font-serif text-lg sm:text-xl tracking-wider text-[#FAF0CD] font-medium">
                  Shree Vishaka Boutique Checkout
                </h2>
              </div>
              <button 
                onClick={onClose}
                className="p-1.5 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Stepper Navigation: Bag -> Shipping -> Payment Gateway -> Track Orders */}
            <div className="grid grid-cols-4 gap-1 bg-[#051C1C] p-1 rounded-lg border border-[#D4AF37]/25 text-[11px] font-medium">
              {/* Step 1: Bag */}
              <button
                onClick={() => setActiveTab('bag')}
                className={`py-2 px-1 rounded flex items-center justify-center gap-1 transition-all ${
                  activeTab === 'bag'
                    ? 'bg-[#D4AF37] text-[#082928] font-bold shadow-sm'
                    : 'text-[#FAF0CD]/80 hover:text-white hover:bg-white/5'
                }`}
              >
                <ShoppingBag className="w-3 h-3 shrink-0" />
                <span className="truncate">1. Bag ({totalItemCount})</span>
              </button>

              {/* Step 2: Shipping */}
              <button
                onClick={() => {
                  if (cartItems.length > 0) setActiveTab('shipping');
                }}
                disabled={cartItems.length === 0}
                className={`py-2 px-1 rounded flex items-center justify-center gap-1 transition-all ${
                  activeTab === 'shipping'
                    ? 'bg-[#D4AF37] text-[#082928] font-bold shadow-sm'
                    : cartItems.length === 0 
                      ? 'text-gray-500 cursor-not-allowed opacity-50' 
                      : 'text-[#FAF0CD]/80 hover:text-white hover:bg-white/5'
                }`}
              >
                <MapPin className="w-3 h-3 shrink-0" />
                <span className="truncate">2. Shipping</span>
              </button>

              {/* Step 3: Payment Gateway */}
              <button
                onClick={() => {
                  if (cartItems.length > 0) setActiveTab('payment');
                }}
                disabled={cartItems.length === 0}
                className={`py-2 px-1 rounded flex items-center justify-center gap-1 transition-all ${
                  activeTab === 'payment'
                    ? 'bg-[#D4AF37] text-[#082928] font-bold shadow-sm'
                    : cartItems.length === 0 
                      ? 'text-gray-500 cursor-not-allowed opacity-50' 
                      : 'text-[#FAF0CD]/80 hover:text-white hover:bg-white/5'
                }`}
              >
                <CreditCard className="w-3 h-3 shrink-0" />
                <span className="truncate">3. Payment</span>
              </button>

              {/* Step 4 / Orders: My Orders */}
              <button
                onClick={() => setActiveTab(activeOrder ? 'order-status' : 'order-history')}
                className={`py-2 px-1 rounded flex items-center justify-center gap-1 transition-all ${
                  activeTab === 'order-status' || activeTab === 'order-history'
                    ? 'bg-[#D4AF37] text-[#082928] font-bold shadow-sm'
                    : 'text-[#FAF0CD]/80 hover:text-white hover:bg-white/5'
                }`}
              >
                <Truck className="w-3 h-3 shrink-0" />
                <span className="truncate">My Orders ({orders.length})</span>
              </button>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* STEP 1: SHOPPING BAG ITEMS VIEW */}
          {/* ========================================================================= */}
          {activeTab === 'bag' && (
            <>
              {cartItems.length === 0 ? (
                /* Empty Bag State */
                <div className="flex-1 p-8 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center border border-[#D4AF37]/30 shadow-sm">
                    <ShoppingBag className="w-10 h-10 text-[#082928]/60" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#000000] font-semibold">Your Bag is Empty</h3>
                  <p className="text-sm text-[#000000] max-w-xs font-normal">
                    Explore our handwoven Pure Kanchipuram Silks, Banarasi zari treasures, and bridal heirlooms.
                  </p>
                  
                  <div className="pt-2 flex flex-col sm:flex-row gap-3 w-full max-w-xs">
                    <button
                      onClick={onClose}
                      className="flex-1 px-5 py-3 bg-[#082928] text-[#ECC876] rounded text-sm font-semibold tracking-wide hover:bg-[#051C1C] transition-colors shadow-md cursor-pointer"
                    >
                      Browse Sarees
                    </button>
                    {orders.length > 0 && (
                      <button
                        onClick={() => {
                          setActiveOrder(orders[0]);
                          setActiveTab('order-status');
                        }}
                        className="flex-1 px-5 py-3 border border-[#082928] text-[#000000] rounded text-sm font-semibold tracking-wide hover:bg-black/5 transition-colors cursor-pointer"
                      >
                        Track Past Orders
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                /* Active Bag Content */
                <>
                  <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
                    {/* Free Complimentary Saree Services Alert */}
                    <div className="p-3 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-300 rounded-lg flex items-center gap-2.5 text-xs text-[#000000]">
                      <Sparkles className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span><strong>Complimentary Artisan Services:</strong> Free hand-stitched Fall & Pico + Silk Mark Certificate included on all orders!</span>
                    </div>

                    {/* Saree & Blouse Items */}
                    <div className="space-y-3">
                      {cartItems.map((item) => (
                        <div 
                          key={item.id}
                          className="flex gap-3.5 p-3.5 bg-white rounded-lg border border-[#D4AF37]/30 shadow-sm relative group hover:border-[#D4AF37] transition-all"
                        >
                          <img 
                            src={item.images?.[0] || item.image} 
                            alt={item.title} 
                            className="w-20 h-28 object-cover rounded cursor-pointer shrink-0 border border-gray-200"
                            onClick={() => {
                              onProductClick(item);
                              onClose();
                            }}
                          />
                          <div className="flex-1 min-w-0 flex flex-col justify-between">
                            <div>
                              <div className="flex items-start justify-between gap-2">
                                <h4 
                                  onClick={() => {
                                    onProductClick(item);
                                    onClose();
                                  }}
                                  className="text-sm font-serif font-bold text-[#000000] truncate hover:text-[#937217] cursor-pointer"
                                >
                                  {item.title}
                                </h4>
                                <button 
                                  onClick={() => removeFromCart(item.id)}
                                  className="text-gray-400 hover:text-red-600 transition-colors p-1 cursor-pointer"
                                  title="Remove item"
                                  aria-label="Remove item"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                              <p className="text-xs text-[#000000] font-medium mt-0.5">{item.fabric || 'Pure Kanchipuram Silk'}</p>
                              
                              <div className="flex items-center gap-2 mt-1">
                                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-amber-50 text-[#000000] border border-amber-200 rounded text-[11px] font-semibold">
                                  <BadgeCheck className="w-3 h-3 text-[#D4AF37]" />
                                  Fall & Pico Included
                                </span>
                              </div>

                              <p className="text-sm font-bold text-[#000000] mt-1.5">
                                ₹ {item.price.toLocaleString('en-IN')}
                              </p>
                            </div>

                            {/* Quantity Controls */}
                            <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                              <div className="flex items-center border border-gray-400 rounded bg-gray-50 overflow-hidden">
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="px-2.5 py-1 hover:bg-gray-200 text-[#000000] transition-colors cursor-pointer"
                                  aria-label="Decrease quantity"
                                >
                                  <Minus className="w-3 h-3" />
                                </button>
                                <span className="px-3 py-1 text-xs font-bold text-[#000000] min-w-[24px] text-center">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="px-2.5 py-1 hover:bg-gray-200 text-[#000000] transition-colors cursor-pointer"
                                  aria-label="Increase quantity"
                                >
                                  <Plus className="w-3 h-3" />
                                </button>
                              </div>
                              <div className="text-right">
                                <span className="text-xs text-[#000000] block">Subtotal:</span>
                                <span className="text-sm font-bold text-[#000000]">
                                  ₹ {(item.price * item.quantity).toLocaleString('en-IN')}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Summary & Advance to Shipping CTA */}
                  <div className="p-4 sm:p-5 bg-white border-t border-[#D4AF37]/30 space-y-3 shadow-lg">
                    <div className="space-y-1.5 text-xs text-[#000000] font-medium">
                      <div className="flex justify-between">
                        <span>Items Subtotal ({totalItemCount} {totalItemCount === 1 ? 'item' : 'items'})</span>
                        <span className="font-bold">₹ {subtotal.toLocaleString('en-IN')}</span>
                      </div>

                      <div className="flex justify-between">
                        <span>Hand Fall & Pico Tailoring</span>
                        <span className="text-emerald-700 font-bold">FREE (Complimentary)</span>
                      </div>

                      <div className="flex justify-between">
                        <span>Silk Mark Insured Express Shipping</span>
                        <span className="text-emerald-700 font-bold">FREE</span>
                      </div>

                      <div className="flex justify-between text-base font-serif font-bold text-[#000000] pt-2 border-t border-gray-200">
                        <span>Total Payable Amount</span>
                        <span className="text-lg text-[#082928]">₹ {finalTotal.toLocaleString('en-IN')}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setActiveTab('shipping')}
                      className="w-full py-3.5 bg-[#082928] hover:bg-[#051C1C] text-[#ECC876] font-bold text-sm tracking-wider uppercase rounded flex items-center justify-center gap-2 transition-all duration-300 shadow-md group cursor-pointer"
                    >
                      <span>Proceed to Shipping Address</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>

                    <div className="flex items-center justify-center gap-2 text-[11px] text-[#000000] font-medium">
                      <ShieldCheck className="w-4 h-4 text-emerald-700" />
                      <span>100% Genuine Handloom Guarantee | Free 7-Day Boutique Exchange</span>
                    </div>
                  </div>
                </>
              )}
            </>
          )}

          {/* ========================================================================= */}
          {/* STEP 2: DEDICATED SHIPPING ADDRESS & COURIER METHOD */}
          {/* ========================================================================= */}
          {activeTab === 'shipping' && (
            <div className="flex-1 overflow-y-auto flex flex-col">
              <div className="p-4 sm:p-5 space-y-5 flex-1">
                {/* Header Back & Progress */}
                <div className="flex items-center justify-between border-b border-[#D4AF37]/20 pb-3 gap-2 flex-wrap">
                  <button
                    onClick={() => setActiveTab('bag')}
                    className="flex items-center gap-1.5 text-xs text-[#000000] font-bold hover:text-[#937217] transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Bag</span>
                  </button>
                  <span className="text-xs bg-amber-100 text-[#000000] px-2.5 py-1 rounded font-bold">
                    Step 2: Shipping Destination
                  </span>
                </div>

                {/* Recipient Details Form */}
                <div className="space-y-3">
                  <h3 className="font-serif text-base font-bold text-[#000000] flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#D4AF37]" />
                    Delivery Address Details
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-[#000000] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={shippingData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Smt. Ananya Sharma"
                        className={`w-full text-xs p-2.5 bg-white border ${formErrors.fullName ? 'border-red-500' : 'border-gray-300'} rounded text-[#000000] font-medium focus:outline-none focus:border-[#082928]`}
                      />
                      {formErrors.fullName && <p className="text-[11px] text-red-600 mt-0.5">{formErrors.fullName}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold text-[#000000] mb-1">
                        Mobile Number (+91) *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={shippingData.phone}
                        onChange={handleInputChange}
                        placeholder="10-digit mobile number"
                        className={`w-full text-xs p-2.5 bg-white border ${formErrors.phone ? 'border-red-500' : 'border-gray-300'} rounded text-[#000000] font-medium focus:outline-none focus:border-[#082928]`}
                      />
                      {formErrors.phone && <p className="text-[11px] text-red-600 mt-0.5">{formErrors.phone}</p>}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-[#000000] mb-1">
                      Email Address (For Live Dispatch Updates & Invoice) *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={shippingData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@domain.com"
                      className={`w-full text-xs p-2.5 bg-white border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded text-[#000000] font-medium focus:outline-none focus:border-[#082928]`}
                    />
                    {formErrors.email && <p className="text-[11px] text-red-600 mt-0.5">{formErrors.email}</p>}
                  </div>

                  {/* Address Line */}
                  <div>
                    <label className="block text-xs font-bold text-[#000000] mb-1">
                      Flat / House No., Apartment & Street *
                    </label>
                    <input
                      type="text"
                      name="addressLine"
                      value={shippingData.addressLine}
                      onChange={handleInputChange}
                      placeholder="e.g. Flat 402, Lotus Grandeur, 12th Main Road"
                      className={`w-full text-xs p-2.5 bg-white border ${formErrors.addressLine ? 'border-red-500' : 'border-gray-300'} rounded text-[#000000] font-medium focus:outline-none focus:border-[#082928]`}
                    />
                    {formErrors.addressLine && <p className="text-[11px] text-red-600 mt-0.5">{formErrors.addressLine}</p>}
                  </div>

                  {/* Landmark */}
                  <div>
                    <label className="block text-xs font-bold text-[#000000] mb-1">
                      Landmark / Colony (Optional)
                    </label>
                    <input
                      type="text"
                      name="landmark"
                      value={shippingData.landmark}
                      onChange={handleInputChange}
                      placeholder="e.g. Opposite Indiranagar Metro Station"
                      className="w-full text-xs p-2.5 bg-white border border-gray-300 rounded text-[#000000] font-medium focus:outline-none focus:border-[#082928]"
                    />
                  </div>

                  {/* City, State, PIN */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    <div>
                      <label className="block text-xs font-bold text-[#000000] mb-1">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={shippingData.city}
                        onChange={handleInputChange}
                        placeholder="City"
                        className={`w-full text-xs p-2.5 bg-white border ${formErrors.city ? 'border-red-500' : 'border-gray-300'} rounded text-[#000000] font-medium focus:outline-none focus:border-[#082928]`}
                      />
                      {formErrors.city && <p className="text-[10px] text-red-600 mt-0.5">{formErrors.city}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#000000] mb-1">
                        State *
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={shippingData.state}
                        onChange={handleInputChange}
                        placeholder="State"
                        className={`w-full text-xs p-2.5 bg-white border ${formErrors.state ? 'border-red-500' : 'border-gray-300'} rounded text-[#000000] font-medium focus:outline-none focus:border-[#082928]`}
                      />
                      {formErrors.state && <p className="text-[10px] text-red-600 mt-0.5">{formErrors.state}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#000000] mb-1">
                        PIN Code *
                      </label>
                      <input
                        type="text"
                        name="pincode"
                        maxLength={6}
                        value={shippingData.pincode}
                        onChange={handleInputChange}
                        placeholder="6 digits"
                        className={`w-full text-xs p-2.5 bg-white border ${formErrors.pincode ? 'border-red-500' : 'border-gray-300'} rounded text-[#000000] font-medium focus:outline-none focus:border-[#082928]`}
                      />
                      {formErrors.pincode && <p className="text-[10px] text-red-600 mt-0.5">{formErrors.pincode}</p>}
                    </div>
                  </div>
                </div>

                {/* Shipping Method Options */}
                <div className="space-y-2 pt-2 border-t border-gray-200">
                  <h4 className="text-xs font-bold text-[#000000] flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-[#082928]" />
                    Select Delivery Courier Method
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <label 
                      onClick={() => setShippingMethod('express')}
                      className={`p-3 rounded-lg border cursor-pointer flex flex-col justify-between transition-all ${
                        shippingMethod === 'express'
                          ? 'border-[#082928] bg-white ring-1 ring-[#082928]'
                          : 'border-gray-300 bg-white hover:border-gray-400'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <span className="font-bold text-[#000000]">Royal Air Express</span>
                        <span className="text-emerald-700 font-bold">FREE</span>
                      </div>
                      <p className="text-[11px] text-[#000000] mt-1">3-4 Days | Blue Dart Luxury Insured</p>
                    </label>

                    <label 
                      onClick={() => setShippingMethod('same-day')}
                      className={`p-3 rounded-lg border cursor-pointer flex flex-col justify-between transition-all ${
                        shippingMethod === 'same-day'
                          ? 'border-[#082928] bg-white ring-1 ring-[#082928]'
                          : 'border-gray-300 bg-white hover:border-gray-400'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <span className="font-bold text-[#000000]">Palladam & Coimbatore Hand-Delivery</span>
                        <span className="text-emerald-700 font-bold">FREE</span>
                      </div>
                      <p className="text-[11px] text-[#000000] mt-1">Same / Next Day Boutique Courier</p>
                    </label>
                  </div>
                </div>
              </div>

              {/* Bottom Sticky Proceed to Payment Button */}
              <div className="p-4 sm:p-5 bg-white border-t border-[#D4AF37]/30 shadow-lg space-y-3">
                <div className="flex items-center justify-between text-xs text-[#000000]">
                  <span>Order Total:</span>
                  <span className="text-lg font-serif font-bold text-[#082928]">₹ {finalTotal.toLocaleString('en-IN')}</span>
                </div>

                <button
                  onClick={handleProceedToPayment}
                  className="w-full py-3.5 bg-[#082928] hover:bg-[#051C1C] text-[#ECC876] font-bold text-sm tracking-wider uppercase rounded flex items-center justify-center gap-2 transition-all shadow-md group cursor-pointer"
                >
                  <span>Proceed to Payment Gateway</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <p className="text-center text-[11px] text-[#000000] font-medium">
                  Next Step: Choose UPI, Credit/Debit Card, or Net Banking
                </p>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* STEP 3: DEDICATED PAYMENT GATEWAY STEP */}
          {/* ========================================================================= */}
          {activeTab === 'payment' && (
            <div className="flex-1 overflow-y-auto flex flex-col">
              <div className="p-4 sm:p-5 space-y-5 flex-1">
                {/* Back button & Title */}
                <div className="flex items-center justify-between border-b border-[#D4AF37]/20 pb-3 gap-2 flex-wrap">
                  <button
                    onClick={() => setActiveTab('shipping')}
                    className="flex items-center gap-1.5 text-xs text-[#000000] font-bold hover:text-[#937217] transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Shipping</span>
                  </button>
                  <span className="text-xs bg-amber-100 text-[#000000] px-2.5 py-1 rounded font-bold flex items-center gap-1">
                    <Lock className="w-3 h-3 text-[#082928]" />
                    Step 3: Secure Payment Gateway
                  </span>
                </div>

                {/* Delivery Address Summary Bar */}
                <div className="p-3 bg-white rounded-lg border border-[#D4AF37]/30 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[11px] text-gray-500 block">Delivering To:</span>
                    <span className="font-bold text-[#000000]">{shippingData.fullName}</span>
                    <span className="text-gray-600 block text-[11px] truncate max-w-xs">{shippingData.addressLine}, {shippingData.city}</span>
                  </div>
                  <button 
                    onClick={() => setActiveTab('shipping')}
                    className="text-xs text-[#082928] font-bold underline hover:text-[#937217] cursor-pointer"
                  >
                    Change
                  </button>
                </div>

                {/* Payment Gateway Method Tabs */}
                <div className="space-y-3">
                  <h3 className="font-serif text-base font-bold text-[#000000] flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-[#D4AF37]" />
                      Select Payment Mode
                    </span>
                    <span className="text-[11px] text-emerald-700 font-bold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      256-Bit SSL Encrypted
                    </span>
                  </h3>

                  {/* Payment Selection Tabs */}
                  <div className="grid grid-cols-3 gap-1.5 bg-gray-100 p-1.5 rounded-lg border border-gray-200 text-xs font-bold">
                    <button
                      type="button"
                      onClick={() => setPaymentSubTab('upi')}
                      className={`py-2 px-1 rounded flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                        paymentSubTab === 'upi'
                          ? 'bg-[#082928] text-[#ECC876] shadow-sm'
                          : 'text-[#000000] hover:bg-white/60'
                      }`}
                    >
                      <Smartphone className="w-4 h-4" />
                      <span className="text-[10px]">UPI / QR</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentSubTab('card')}
                      className={`py-2 px-1 rounded flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                        paymentSubTab === 'card'
                          ? 'bg-[#082928] text-[#ECC876] shadow-sm'
                          : 'text-[#000000] hover:bg-white/60'
                      }`}
                    >
                      <CreditCard className="w-4 h-4" />
                      <span className="text-[10px]">Cards</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentSubTab('netbanking')}
                      className={`py-2 px-1 rounded flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                        paymentSubTab === 'netbanking'
                          ? 'bg-[#082928] text-[#ECC876] shadow-sm'
                          : 'text-[#000000] hover:bg-white/60'
                      }`}
                    >
                      <Landmark className="w-4 h-4" />
                      <span className="text-[10px]">NetBanking</span>
                    </button>
                  </div>

                  {/* Sub-tab 1: UPI Gateway */}
                  {paymentSubTab === 'upi' && (
                    <div className="p-4 bg-white rounded-xl border border-[#D4AF37]/30 shadow-sm space-y-4">
                      <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                        <span className="text-xs font-bold text-[#000000]">Instant UPI Payment</span>
                        <div className="flex items-center gap-2 text-[10px] font-bold text-gray-700">
                          <span className="bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded border border-emerald-200">GPay</span>
                          <span className="bg-purple-50 text-purple-800 px-2 py-0.5 rounded border border-purple-200">PhonePe</span>
                          <span className="bg-sky-50 text-sky-800 px-2 py-0.5 rounded border border-sky-200">Paytm</span>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#000000] mb-1">
                          Virtual Payment Address (UPI ID)
                        </label>
                        <div className="flex gap-2">
                          <input 
                            type="text" 
                            value={upiId}
                            onChange={(e) => setUpiId(e.target.value)}
                            placeholder="username@okhdfcbank"
                            className="flex-1 text-xs p-2.5 bg-gray-50 border border-gray-300 rounded text-[#000000] font-semibold focus:outline-none focus:border-[#082928]"
                          />
                          <button 
                            type="button"
                            className="px-3 py-2 bg-emerald-800 text-white rounded text-xs font-bold"
                          >
                            Verified ✓
                          </button>
                        </div>
                        <p className="text-[11px] text-gray-500 mt-1">
                          A payment request of ₹ {finalTotal.toLocaleString('en-IN')} will be authorized instantly.
                        </p>
                      </div>

                      <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-lg flex items-center gap-3">
                        <div className="w-12 h-12 bg-white rounded border border-gray-300 flex items-center justify-center shrink-0 shadow-sm">
                          <QrCode className="w-8 h-8 text-[#082928]" />
                        </div>
                        <div className="text-xs">
                          <p className="font-bold text-[#000000]">Or Scan QR Code to Pay</p>
                          <p className="text-[11px] text-[#000000]">Directly scan with any UPI App upon checkout.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Sub-tab 2: Cards Gateway */}
                  {paymentSubTab === 'card' && (
                    <div className="p-4 bg-white rounded-xl border border-[#D4AF37]/30 shadow-sm space-y-3">
                      <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                        <span className="text-xs font-bold text-[#000000]">Credit or Debit Card</span>
                        <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded font-bold text-gray-700">Visa / Mastercard / RuPay</span>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#000000] mb-1">
                          Card Number
                        </label>
                        <input 
                          type="text"
                          value={cardData.number}
                          onChange={(e) => setCardData(prev => ({ ...prev, number: e.target.value }))}
                          placeholder="4532 8910 2341 8912"
                          maxLength={19}
                          className="w-full text-xs p-2.5 bg-gray-50 border border-gray-300 rounded text-[#000000] font-mono font-bold focus:outline-none focus:border-[#082928]"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-bold text-[#000000] mb-1">
                            Expiry (MM/YY)
                          </label>
                          <input 
                            type="text"
                            value={cardData.expiry}
                            onChange={(e) => setCardData(prev => ({ ...prev, expiry: e.target.value }))}
                            placeholder="08/29"
                            maxLength={5}
                            className="w-full text-xs p-2.5 bg-gray-50 border border-gray-300 rounded text-[#000000] font-bold focus:outline-none focus:border-[#082928]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#000000] mb-1">
                            CVV
                          </label>
                          <input 
                            type="password"
                            value={cardData.cvv}
                            onChange={(e) => setCardData(prev => ({ ...prev, cvv: e.target.value }))}
                            placeholder="842"
                            maxLength={4}
                            className="w-full text-xs p-2.5 bg-gray-50 border border-gray-300 rounded text-[#000000] font-bold focus:outline-none focus:border-[#082928]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#000000] mb-1">
                          Name on Card
                        </label>
                        <input 
                          type="text"
                          value={cardData.name}
                          onChange={(e) => setCardData(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="Smt. Ananya Sharma"
                          className="w-full text-xs p-2.5 bg-gray-50 border border-gray-300 rounded text-[#000000] font-bold focus:outline-none focus:border-[#082928]"
                        />
                      </div>
                    </div>
                  )}

                  {/* Sub-tab 3: Net Banking Gateway */}
                  {paymentSubTab === 'netbanking' && (
                    <div className="p-4 bg-white rounded-xl border border-[#D4AF37]/30 shadow-sm space-y-3">
                      <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                        <span className="text-xs font-bold text-[#000000]">Select Your Bank</span>
                        <span className="text-[10px] text-emerald-700 font-bold">Fast Gateway</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-xs">
                        {['HDFC Bank', 'ICICI Bank', 'State Bank of India', 'Axis Bank', 'Kotak Mahindra', 'Punjab National Bank'].map((b) => (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setSelectedBank(b)}
                            className={`p-2.5 rounded border text-left font-bold transition-all cursor-pointer ${
                              selectedBank === b 
                                ? 'border-[#082928] bg-[#082928]/5 ring-1 ring-[#082928] text-[#082928]' 
                                : 'border-gray-200 hover:bg-gray-50 text-[#000000]'
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>

              {/* Bottom Sticky Complete Payment CTA */}
              <div className="p-4 sm:p-5 bg-white border-t border-[#D4AF37]/30 shadow-lg space-y-3">
                <div className="flex items-center justify-between text-xs text-[#000000]">
                  <span>Total Payable:</span>
                  <span className="text-lg font-serif font-bold text-[#082928]">₹ {finalTotal.toLocaleString('en-IN')}</span>
                </div>

                <button
                  onClick={handleCompletePaymentAndPlaceOrder}
                  disabled={isPlacingOrder}
                  className="w-full py-3.5 bg-[#082928] hover:bg-[#051C1C] text-[#ECC876] font-bold text-sm tracking-wider uppercase rounded flex items-center justify-center gap-2 transition-all shadow-md group cursor-pointer disabled:opacity-75"
                >
                  {isPlacingOrder ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-[#ECC876] border-t-transparent rounded-full animate-spin" />
                      <span>Processing Gateway Payment & Order...</span>
                    </div>
                  ) : (
                    <>
                      <span>Pay & Complete Order (₹ {finalTotal.toLocaleString('en-IN')})</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-[#000000] font-medium">
                  <Lock className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Authorized by RBI Verified Payment Gateway • Silk Mark Authenticated</span>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* STEP 4: ORDER STATUS & LIVE TRACKING MODULE */}
          {/* ========================================================================= */}
          {activeTab === 'order-status' && (
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-5">
              {activeOrder ? (
                <>
                  {/* Order Confirmed Banner */}
                  <div className="bg-gradient-to-r from-[#082928] to-[#0D3B3A] text-white p-5 rounded-xl border border-[#D4AF37]/40 shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />
                    <div className="flex items-center justify-between relative z-10">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="p-1.5 bg-[#D4AF37] text-[#082928] rounded-full">
                            <CheckCircle2 className="w-4 h-4" />
                          </span>
                          <span className="text-xs uppercase tracking-widest text-[#ECC876] font-semibold">
                            Order Confirmed
                          </span>
                        </div>
                        <h3 className="font-serif text-xl sm:text-2xl text-white font-bold mt-1">
                          {activeOrder.orderId}
                        </h3>
                        <p className="text-xs text-[#FAF0CD]/90 mt-0.5">
                          Placed on {activeOrder.date}
                        </p>
                      </div>

                      <button
                        onClick={() => handleCopyOrderId(activeOrder.orderId)}
                        className="px-2.5 py-1.5 bg-white/10 hover:bg-white/20 text-[#FAF0CD] text-xs rounded border border-white/20 flex items-center gap-1.5 transition-colors cursor-pointer"
                        title="Copy Order ID"
                      >
                        {copiedId ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedId ? 'Copied' : 'Copy ID'}</span>
                      </button>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-xs text-[#FAF0CD]">
                      <span>Estimated Delivery: <strong>{activeOrder.estimatedDelivery}</strong></span>
                      <span className="text-[#ECC876] font-bold">Total: ₹ {activeOrder.total.toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  {/* Visual Live Order Tracking Timeline */}
                  <div className="bg-white p-5 rounded-xl border border-[#D4AF37]/30 shadow-sm space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif text-base font-bold text-[#000000] flex items-center gap-2">
                        <Truck className="w-4 h-4 text-[#D4AF37]" />
                        Live Artisan & Courier Tracking
                      </h4>
                      <span className="text-xs px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded">
                        {activeOrder.status}
                      </span>
                    </div>

                    <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#D4AF37]/30">
                      
                      {/* Step 1: Order Placed */}
                      <div className="relative">
                        <div className="absolute -left-6 top-0.5 w-5 h-5 rounded-full bg-[#082928] text-[#ECC876] flex items-center justify-center text-xs font-bold ring-4 ring-white shadow">
                          <Check className="w-3 h-3" />
                        </div>
                        <div className="ml-2">
                          <p className="text-xs font-bold text-[#000000]">Order Placed & Payment Acknowledged</p>
                          <p className="text-[11px] text-[#000000] mt-0.5">{activeOrder.date} • {activeOrder.paymentMethod}</p>
                        </div>
                      </div>

                      {/* Step 2: Silk Mark Verified */}
                      <div className="relative">
                        <div className="absolute -left-6 top-0.5 w-5 h-5 rounded-full bg-[#082928] text-[#ECC876] flex items-center justify-center text-xs font-bold ring-4 ring-white shadow">
                          <Check className="w-3 h-3" />
                        </div>
                        <div className="ml-2">
                          <p className="text-xs font-bold text-[#000000]">Silk Mark Quality Inspection Passed</p>
                          <p className="text-[11px] text-[#000000] mt-0.5">
                            Authenticated 100% Pure Mulberry Silk & High-Grade Zari by Master Weaver.
                          </p>
                        </div>
                      </div>

                      {/* Step 3: Hand Fall & Pico Stitching */}
                      <div className="relative">
                        <div className={`absolute -left-6 top-0.5 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ring-4 ring-white shadow ${
                          activeOrder.currentStep >= 3 
                            ? 'bg-[#082928] text-[#ECC876]' 
                            : 'bg-amber-400 text-[#082928] animate-pulse'
                        }`}>
                          {activeOrder.currentStep > 3 ? <Check className="w-3 h-3" /> : '3'}
                        </div>
                        <div className="ml-2">
                          <p className="text-xs font-bold text-[#000000]">Artisan Hand Fall & Pico Edge Finishing</p>
                          <p className="text-[11px] text-[#000000] mt-0.5">
                            Tailored at Shree Vishaka Boutique Studio, Palladam, Tamil Nadu.
                          </p>
                        </div>
                      </div>

                      {/* Step 4: Dispatched */}
                      <div className="relative">
                        <div className={`absolute -left-6 top-0.5 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ring-4 ring-white shadow ${
                          activeOrder.currentStep >= 4 
                            ? 'bg-[#082928] text-[#ECC876]' 
                            : 'bg-gray-200 text-gray-600'
                        }`}>
                          {activeOrder.currentStep > 4 ? <Check className="w-3 h-3" /> : '4'}
                        </div>
                        <div className="ml-2">
                          <p className="text-xs font-bold text-[#000000]">Luxury Brass/Heirloom Box Packaging & Dispatch</p>
                          <p className="text-[11px] text-[#000000] mt-0.5">
                            Tracking: <strong className="text-[#082928]">{activeOrder.trackingNumber}</strong> via {activeOrder.carrier}
                          </p>
                        </div>
                      </div>

                      {/* Step 5: Doorstep Delivery */}
                      <div className="relative">
                        <div className={`absolute -left-6 top-0.5 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ring-4 ring-white shadow ${
                          activeOrder.currentStep >= 5 
                            ? 'bg-emerald-600 text-white' 
                            : 'bg-gray-200 text-gray-600'
                        }`}>
                          5
                        </div>
                        <div className="ml-2">
                          <p className="text-xs font-bold text-[#000000]">Doorstep White-Glove Handover</p>
                          <p className="text-[11px] text-[#000000] mt-0.5">
                            Delivering to {activeOrder.shippingAddress.fullName}, {activeOrder.shippingAddress.city} ({activeOrder.estimatedDelivery})
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Ordered Items List */}
                  <div className="bg-white p-4 rounded-xl border border-[#D4AF37]/30 shadow-sm space-y-3">
                    <h4 className="text-xs font-bold text-[#000000] flex items-center justify-between">
                      <span>Package Contents ({activeOrder.items?.length || 0} items)</span>
                      <span className="text-xs font-semibold text-[#082928]">Total: ₹ {activeOrder.total.toLocaleString('en-IN')}</span>
                    </h4>

                    <div className="divide-y divide-gray-100">
                      {activeOrder.items?.map((item, idx) => (
                        <div key={idx} className="py-2.5 flex items-center gap-3">
                          <img 
                            src={item.images?.[0] || item.image} 
                            alt={item.title} 
                            className="w-12 h-16 object-cover rounded border border-gray-200 shrink-0" 
                          />
                          <div className="flex-1 min-w-0 text-xs">
                            <p className="font-bold text-[#000000] truncate">{item.title}</p>
                            <p className="text-[11px] text-[#000000]">{item.fabric || 'Pure Silk'} • Qty: {item.quantity}</p>
                            <p className="text-xs font-bold text-[#000000] mt-0.5">₹ {(item.price * item.quantity).toLocaleString('en-IN')}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Shipping Address Summary Card */}
                  <div className="bg-white p-4 rounded-xl border border-[#D4AF37]/30 shadow-sm text-xs space-y-1.5 text-[#000000]">
                    <div className="flex items-center justify-between font-bold border-b border-gray-100 pb-2">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#082928]" />
                        Delivery Destination
                      </span>
                      <span className="text-[11px] bg-gray-100 text-[#000000] px-2 py-0.5 rounded capitalize">
                        {activeOrder.shippingAddress.addressType || 'Home'}
                      </span>
                    </div>
                    <p className="font-bold text-[#000000] pt-1">{activeOrder.shippingAddress.fullName}</p>
                    <p>{activeOrder.shippingAddress.addressLine}</p>
                    {activeOrder.shippingAddress.landmark && <p>Near: {activeOrder.shippingAddress.landmark}</p>}
                    <p>{activeOrder.shippingAddress.city}, {activeOrder.shippingAddress.state} - {activeOrder.shippingAddress.pincode}</p>
                    <p className="pt-1">Mobile: <strong>+91 {activeOrder.shippingAddress.phone}</strong></p>
                    <p>Updates sent to: <strong>{activeOrder.shippingAddress.email}</strong></p>
                  </div>

                  {/* Quick Action Button: WhatsApp Concierge */}
                  <div className="pt-1">
                    <a
                      href={`https://wa.me/916369374108?text=Hi%20Shree%20Vishaka%20Boutique,%20I%20would%20like%20a%20status%20update%20on%20my%20Order%20${encodeURIComponent(activeOrder.orderId)}%20for%20${encodeURIComponent(activeOrder.shippingAddress.fullName)}.`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-3 px-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm text-center cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp Concierge</span>
                    </a>
                  </div>

                  {/* Switch to All Orders button */}
                  <div className="text-center pt-2">
                    <button
                      onClick={() => setActiveTab('order-history')}
                      className="text-xs text-[#000000] font-bold hover:text-[#937217] underline cursor-pointer"
                    >
                      View All Saved Orders ({orders.length}) →
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-12 space-y-3">
                  <Package className="w-12 h-12 text-[#082928]/40 mx-auto" />
                  <h4 className="font-serif text-lg font-bold text-[#000000]">No Active Order Selected</h4>
                  <p className="text-xs text-[#000000]">Please place an order or select an existing order from history.</p>
                  <button
                    onClick={() => setActiveTab('order-history')}
                    className="px-4 py-2 bg-[#082928] text-[#ECC876] text-xs font-bold rounded hover:bg-[#051C1C] cursor-pointer"
                  >
                    View Order History
                  </button>
                </div>
              )}
            </div>
          )}

          {/* ========================================================================= */}
          {/* STEP 5: ORDER LOOKUP & HISTORY DIRECTORY */}
          {/* ========================================================================= */}
          {activeTab === 'order-history' && (
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#000000]">Your Order History</h3>
                  <p className="text-xs text-[#000000]">Track live dispatch status of all your saree & blouse orders</p>
                </div>
                <button
                  onClick={() => setActiveTab('bag')}
                  className="text-xs text-[#000000] font-bold hover:text-[#937217] cursor-pointer"
                >
                  Return to Bag
                </button>
              </div>

              {/* Order ID Search Box */}
              <div className="relative">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="Search by Order ID (e.g. #SVB-) or Name..."
                  value={searchOrderId}
                  onChange={(e) => setSearchOrderId(e.target.value)}
                  className="w-full text-xs pl-9 pr-3 py-2.5 bg-white border border-gray-300 rounded text-[#000000] font-medium focus:outline-none focus:border-[#082928]"
                />
              </div>

              {filteredOrders.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-xl border border-gray-200 p-6 space-y-3">
                  <AlertCircle className="w-10 h-10 text-gray-400 mx-auto" />
                  <p className="text-sm font-bold text-[#000000]">No matching orders found</p>
                  <p className="text-xs text-[#000000]">Try searching with a different order number or create a new order.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredOrders.map((ord) => (
                    <div
                      key={ord.orderId}
                      className="p-4 bg-white rounded-xl border border-[#D4AF37]/30 hover:border-[#D4AF37] shadow-sm transition-all space-y-3 cursor-pointer group"
                      onClick={() => {
                        setActiveOrder(ord);
                        setActiveTab('order-status');
                      }}
                    >
                      <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                        <div>
                          <span className="font-serif font-bold text-sm text-[#000000] group-hover:text-[#937217]">
                            {ord.orderId}
                          </span>
                          <span className="text-[11px] text-[#000000] block mt-0.5">{ord.date}</span>
                        </div>
                        <span className="text-xs px-2.5 py-1 bg-amber-50 text-[#000000] border border-amber-200 font-bold rounded">
                          {ord.status}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-xs text-[#000000]">
                        <div className="flex items-center gap-2">
                          <Package className="w-4 h-4 text-[#082928]" />
                          <span>{ord.items?.length || 1} {ord.items?.length === 1 ? 'Item' : 'Items'}</span>
                        </div>
                        <span className="font-bold text-sm text-[#082928]">
                          ₹ {ord.total.toLocaleString('en-IN')}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-xs pt-1 text-[#000000] font-medium border-t border-gray-100">
                        <span>Recipient: <strong>{ord.shippingAddress?.fullName}</strong></span>
                        <span className="text-[#082928] font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                          Live Tracking <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
