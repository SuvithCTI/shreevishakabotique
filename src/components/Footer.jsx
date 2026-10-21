import React, { useState } from 'react';
import { MessageCircle, MapPin, Phone, Mail, Sparkles, X } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './SocialIcons';
import Logo from './Logo';

export default function Footer({ setActivePage, openOrders }) {
  const [modalType, setModalType] = useState(null);

  const handleNav = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#051C1C] text-[#E0E7E7] border-t border-[#D4AF37]/25 pt-16 pb-24 sm:pb-12 relative overflow-hidden">
      {/* Subtle background golden glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#D4AF37]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Philosophy */}
          <div className="md:col-span-2 space-y-4">
            <Logo size="lg" onClick={() => handleNav('home')} />
            <p className="text-sm text-[#FAF0CD]/75 leading-relaxed max-w-md pt-2 font-light">
              Celebrating India's finest handloom legacy. From the sacred looms of Kanchipuram to the royal weaves of Banaras, each drape at Shree Vishaka Boutique is an heirloom woven with devotion, tradition, and timeless grace.
            </p>
            <div className="flex items-center gap-3 pt-2 text-xs text-[#ECC876]">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>Silk Mark Certified • 100% Pure Zari Handloom Guarantee</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-[#ECC876] text-lg tracking-wider uppercase font-normal">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-[#FAF0CD]/80 font-light">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-[#ECC876] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('collections')} className="hover:text-[#ECC876] transition-colors">
                  Collections
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-[#ECC876] transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-[#ECC876] transition-colors">
                  Contact
                </button>
              </li>
              <li>
                <button onClick={openOrders} className="hover:text-[#ECC876] transition-colors font-medium text-[#ECC876] cursor-pointer">
                  My Orders
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div className="space-y-3">
            <h4 className="font-serif text-[#ECC876] text-lg tracking-wider uppercase font-normal">
              Contact Us
            </h4>
            <div className="space-y-2.5 text-sm text-[#FAF0CD]/80 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Shree Vishaka Boutique, Chettipalayam road, Palladam, Tamil Nadu 641664</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href="tel:+916369374108" className="hover:text-[#ECC876] transition-colors">+91 63693 74108</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>shreevishakaboutique@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar matching mockup */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Policy Links */}
          <div className="flex items-center gap-4 text-xs tracking-wider text-[#FAF0CD]/75">
            <button 
              onClick={() => setModalType('terms')} 
              className="hover:text-[#ECC876] transition-colors"
            >
              Terms & Conditions
            </button>
            <span className="text-white/20">•</span>
            <button 
              onClick={() => setModalType('privacy')} 
              className="hover:text-[#ECC876] transition-colors"
            >
              Privacy Policy
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a 
              href="https://www.instagram.com/shreevishakaboutique?vrfl=MWhnYnBkcm53YnowNA==" 
              target="_blank" 
              rel="noreferrer"
              className="w-9 h-9 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#ECC876] hover:bg-[#D4AF37] hover:text-[#051C1C] transition-all duration-300"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noreferrer"
              className="w-9 h-9 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#ECC876] hover:bg-[#D4AF37] hover:text-[#051C1C] transition-all duration-300"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a 
              href="https://wa.me/916369374108?text=Hi%20Shree%20Vishaka%20Boutique" 
              target="_blank" 
              rel="noreferrer"
              className="w-9 h-9 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#ECC876] hover:bg-[#D4AF37] hover:text-[#051C1C] transition-all duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright notice */}
          <div className="text-xs text-[#FAF0CD]/60 font-light">
            © 2026 Shree Vishaka Boutique. All rights reserved.
          </div>
        </div>

      </div>

      {/* Policy Modal */}
      {modalType && (
        <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 flex items-center justify-center">
          <div 
            className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
            onClick={() => setModalType(null)} 
          />
          <div className="relative w-full max-w-2xl bg-[#082928] text-[#FAF0CD] border border-[#D4AF37]/40 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 animate-fadeIn max-h-[85vh] overflow-y-auto">
            <button 
              onClick={() => setModalType(null)}
              className="absolute top-4 right-4 p-2 text-[#ECC876] hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {modalType === 'terms' ? (
              <div className="space-y-4">
                <div className="border-b border-[#D4AF37]/25 pb-3">
                  <span className="text-xs tracking-widest uppercase text-[#ECC876]">Legal Information</span>
                  <h3 className="font-serif text-2xl text-[#FAF0CD] mt-1">Terms & Conditions</h3>
                </div>
                <div className="space-y-3 text-sm text-[#FAF0CD]/85 font-light leading-relaxed">
                  <p><strong className="text-[#ECC876] font-medium">1. Handloom Authenticity:</strong> All sarees and silk fabrics showcased at Shree Vishaka Boutique are authentic, Silk Mark certified creations crafted by master handloom weavers.</p>
                  <p><strong className="text-[#ECC876] font-medium">2. Custom Blouse Stitching:</strong> Orders with made-to-measure tailoring require 5–7 business days for hand-embroidery and precision fit verification prior to dispatch.</p>
                  <p><strong className="text-[#ECC876] font-medium">3. Shipping & Transit:</strong> Complimentary insured shipping is provided across India. Consignments are tracked and require signature confirmation upon delivery.</p>
                  <p><strong className="text-[#ECC876] font-medium">4. Returns & Exchanges:</strong> Unaltered sarees in original folds with intact Silk Mark tags can be exchanged within 7 days of delivery. Custom-stitched blouses and bridal lehengas are non-returnable.</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="border-b border-[#D4AF37]/25 pb-3">
                  <span className="text-xs tracking-widest uppercase text-[#ECC876]">Your Trust</span>
                  <h3 className="font-serif text-2xl text-[#FAF0CD] mt-1">Privacy Policy</h3>
                </div>
                <div className="space-y-3 text-sm text-[#FAF0CD]/85 font-light leading-relaxed">
                  <p><strong className="text-[#ECC876] font-medium">1. Information We Collect:</strong> We collect only necessary details (name, contact number, shipping address, and tailoring measurements) solely to process orders and provide bespoke styling concierge assistance.</p>
                  <p><strong className="text-[#ECC876] font-medium">2. Payment Security:</strong> All financial transactions are encrypted with industry-standard 256-bit SSL encryption. We never store credit/debit card credentials on our servers.</p>
                  <p><strong className="text-[#ECC876] font-medium">3. Data Protection:</strong> Your private information is strictly confidential. We never sell, lease, or distribute customer details to third parties.</p>
                  <p><strong className="text-[#ECC876] font-medium">4. Contact & Inquiries:</strong> For inquiries regarding your personal data or order history, reach our boutique concierge at <span className="text-[#ECC876]">shreevishakaboutique@gmail.com</span>.</p>
                </div>
              </div>
            )}

            <div className="pt-6 mt-6 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setModalType(null)}
                className="px-6 py-2 bg-[#D4AF37] text-[#082928] text-xs font-semibold uppercase tracking-wider rounded hover:bg-[#ECC876] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
