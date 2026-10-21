import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const sendWhatsApp = (msg) => {
    const text = encodeURIComponent(msg || "Hi Shree Vishaka Boutique, I'd like to explore your latest handloom sarees & custom blouse designs.");
    window.open(`https://wa.me/916369374108?text=${text}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-5 z-40">
      
      {/* Popup Chat Card */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-[#D4AF37]/40 overflow-hidden animate-fadeIn">
          <div className="bg-[#082928] p-4 text-white flex items-center justify-between border-b border-[#D4AF37]/30">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#FAF0CD]">Shree Vishaka Concierge</p>
                <p className="text-[10px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Stylist Online
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-gray-300 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-3 bg-[#FAF7F2] text-xs text-gray-700 space-y-2">
            <div className="bg-white p-2.5 rounded-lg border border-gray-200 shadow-2xs">
              Namaste! 🙏 Welcome to Shree Vishaka Boutique. How can our boutique stylists assist your drape or wedding requirements today?
            </div>

            <div className="space-y-1.5 pt-1">
              <button
                onClick={() => sendWhatsApp('Hi, I would like to book a Video Call Drape Consultation.')}
                className="w-full text-left p-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 rounded border border-emerald-200 text-[11px] transition-colors"
              >
                📹 Book Video Call Drape Viewing
              </button>
              <button
                onClick={() => sendWhatsApp('Hi, I need assistance with Custom Blouse Sizing & Embroidery designs.')}
                className="w-full text-left p-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 rounded border border-emerald-200 text-[11px] transition-colors"
              >
                ✂️ Custom Blouse Stitching Inquiry
              </button>
              <button
                onClick={() => sendWhatsApp('Hi, I want to check availability of Kanchipuram Bridal Sarees.')}
                className="w-full text-left p-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 rounded border border-emerald-200 text-[11px] transition-colors"
              >
                🥻 Check Kanchipuram Saree Availability
              </button>
            </div>
          </div>

          <div className="p-2.5 bg-white border-t border-gray-200 flex gap-1.5">
            <input
              type="text"
              placeholder="Type your question..."
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') sendWhatsApp(customMsg);
              }}
              className="flex-1 text-xs px-2.5 py-1.5 border border-gray-300 rounded focus:outline-none focus:border-emerald-600"
            />
            <button
              onClick={() => sendWhatsApp(customMsg)}
              className="p-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Main Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-13 h-13 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-108 active:scale-95 transition-all duration-300 flex items-center justify-center border-2 border-white ring-4 ring-emerald-500/20 group"
        aria-label="Direct WhatsApp Concierge"
      >
        <MessageCircle className="w-7 h-7 transition-transform group-hover:rotate-12" />
      </button>

    </div>
  );
}
