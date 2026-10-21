import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  const whatsappUrl = "https://wa.me/916369374108?text=Hi%20Shree%20Vishaka%20Boutique,%20I%20would%20like%20to%20enquire%20about%20your%20saree%20collection";

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-5 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center border-2 border-white ring-4 ring-emerald-500/20 group cursor-pointer"
        aria-label="Direct WhatsApp Concierge"
        title="Chat with Shree Vishaka Boutique on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 transition-transform group-hover:rotate-12" />
      </a>
    </div>
  );
}
