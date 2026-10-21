import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  ExternalLink,
  MessageCircle,
  Clock
} from 'lucide-react';
import { InstagramIcon } from '../components/SocialIcons';
import FiligreeOrnament from '../components/FiligreeOrnament';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format structured message for WhatsApp
    const lines = [
      "✨ *New Inquiry | Shree Vishaka Boutique*",
      "",
      `*Name:* ${formData.name.trim()}`,
      `*Email:* ${formData.email.trim()}`
    ];
    if (formData.phone.trim()) {
      lines.push(`*Phone:* ${formData.phone.trim()}`);
    }
    lines.push("", "*Message:*", formData.message.trim());

    const messageText = lines.join("\n");
    const whatsappUrl = `https://wa.me/916369374108?text=${encodeURIComponent(messageText)}`;
    
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="bg-[#FAF7F2] text-[#2C2926] min-h-screen">
      
      {/* 1. HERO BANNER matching Screen 5 Top */}
      <section className="relative bg-[#082928] text-white py-14 sm:py-18 overflow-hidden border-b border-[#D4AF37]/30 text-center">
        <FiligreeOrnament className="top-2 left-4 w-32 h-32 opacity-35" />
        <FiligreeOrnament className="top-2 right-4 w-32 h-32 opacity-35 rotate-90" />
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/30 bg-[#051C1C]/50 text-xs tracking-widest uppercase text-[#ECC876] mb-3">
            <Sparkles className="w-3 h-3 text-[#D4AF37]" />
            <span>We Are Here For You</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-[#FAF0CD] font-normal tracking-wide">
            Get in Touch
          </h1>

          <p className="font-serif italic text-base sm:text-lg text-[#ECC876] mt-2 font-light">
            We'd love to hear from you
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTACT SECTION matching Screen 5 Two Columns */}
      <section className="py-16 w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* COLUMN 1: "Send Us a Message" Form matching mockup */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-10 rounded-2xl border border-[#D4AF37]/30 shadow-md">
            <h2 className="font-serif text-3xl text-[#082928] font-medium mb-6">
              Send Us a Message
            </h2>

            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center shadow-lg border-2 border-emerald-500">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl text-[#082928] font-semibold">
                  Thank You, {formData.name || 'Valued Guest'}!
                </h3>
                <p className="text-sm text-gray-600 max-w-sm">
                  Your message has been formatted and opened in WhatsApp to chat directly with our Shree Vishaka Boutique team.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={() => {
                      const lines = [
                        "✨ *New Inquiry | Shree Vishaka Boutique*",
                        "",
                        `*Name:* ${formData.name.trim()}`,
                        `*Email:* ${formData.email.trim()}`
                      ];
                      if (formData.phone.trim()) {
                        lines.push(`*Phone:* ${formData.phone.trim()}`);
                      }
                      lines.push("", "*Message:*", formData.message.trim());
                      window.open(`https://wa.me/916369374108?text=${encodeURIComponent(lines.join("\n"))}`, '_blank');
                    }}
                    className="px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Reopen WhatsApp Chat</span>
                  </button>
                  <button
                    onClick={handleReset}
                    className="px-5 py-2.5 bg-[#082928] text-[#ECC876] rounded text-xs font-semibold uppercase tracking-wider hover:bg-[#051C1C] transition-colors cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-[#082928] mb-1">
                    Name <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 text-base text-[#082928] placeholder:text-gray-600 bg-[#FAF7F2] border border-gray-300 rounded-md focus:outline-none focus:border-[#082928] focus:bg-white transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-[#082928] mb-1">
                    Email <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 text-base text-[#082928] placeholder:text-gray-600 bg-[#FAF7F2] border border-gray-300 rounded-md focus:outline-none focus:border-[#082928] focus:bg-white transition-all"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-[#082928] mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 63693 74108"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 text-base text-[#082928] placeholder:text-gray-600 bg-[#FAF7F2] border border-gray-300 rounded-md focus:outline-none focus:border-[#082928] focus:bg-white transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-[#082928] mb-1">
                    Message <span className="text-rose-600">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Your message, custom blouse requests, or wedding styling dates..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 text-base text-[#082928] placeholder:text-gray-600 bg-[#FAF7F2] border border-gray-300 rounded-md focus:outline-none focus:border-[#082928] focus:bg-white transition-all resize-none"
                  />
                </div>

                {/* Submit button connecting to WhatsApp */}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#082928] hover:bg-[#051C1C] text-[#ECC876] font-semibold text-sm tracking-widest uppercase rounded shadow-md flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer group"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366] transition-transform group-hover:scale-110" />
                  <span>Send Message via WhatsApp</span>
                </button>
              </form>
            )}
          </div>

          {/* COLUMN 2: "Our Contact Details" matching mockup */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              <h2 className="font-serif text-2xl text-[#082928] font-medium mb-6">
                Our Contact Details
              </h2>

              <div className="space-y-4">
                
                {/* Phone */}
                <a 
                  href="tel:+916369374108"
                  className="flex items-start gap-4 p-3 bg-white rounded-xl border border-gray-200 hover:border-[#D4AF37] transition-colors group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-[#082928] group-hover:bg-[#937217] text-[#ECC876] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#000000] font-medium">Phone</span>
                    <p className="text-sm font-semibold text-[#082928] group-hover:text-[#937217] transition-colors">
                      +91 63693 74108
                    </p>
                    <p className="text-xs text-gray-500">Mon - Sat: 10:30 AM – 8:30 PM IST</p>
                  </div>
                </a>

                {/* Email */}
                <div className="flex items-start gap-4 p-3 bg-white rounded-xl border border-gray-200">
                  <div className="w-10 h-10 rounded-full bg-[#082928] text-[#ECC876] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#000000] font-medium">Email</span>
                    <p className="text-sm font-semibold text-[#082928]">
                      shreevishakaboutique@gmail.com
                    </p>
                  </div>
                </div>

                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/shreevishakaboutique?vrfl=MWhnYnBkcm53YnowNA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-3 bg-white rounded-xl border border-gray-200 hover:border-[#D4AF37] transition-colors group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-[#082928] group-hover:bg-gradient-to-tr group-hover:from-amber-600 group-hover:via-rose-600 group-hover:to-purple-600 text-[#ECC876] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                    <InstagramIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#000000] font-medium">Instagram</span>
                    <p className="text-sm font-semibold text-[#082928] group-hover:text-[#937217] transition-colors">
                      @shreevishakaboutique
                    </p>
                    <p className="text-xs text-gray-500">Follow our reels & daily drape styling</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-3 bg-white rounded-xl border border-gray-200">
                  <div className="w-10 h-10 rounded-full bg-[#082928] text-[#ECC876] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#000000] font-medium">Boutique Address</span>
                    <p className="text-sm font-semibold text-[#082928]">
                      Shree Vishaka Boutique
                    </p>
                    <p className="text-xs text-gray-600 mt-0.5">Chettipalayam road, Palladam, Tamil Nadu 641664</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Interactive Location Map Card matching mockup Screen 5 */}
            <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-lg bg-[#e5e3df] p-4 flex flex-col justify-between min-h-[160px]">
              {/* Stylized vector map graphic background */}
              <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#082928_1px,transparent_1px)] [background-size:16px_16px]" />
              
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-600 animate-ping" />
                  <span className="font-serif font-semibold text-sm text-[#082928]">Shree Vishaka Boutique</span>
                </div>
                <span className="text-[11px] text-gray-600 bg-white/80 px-2.5 py-0.5 rounded-full border border-gray-300">
                  Chettipalayam Rd, Palladam
                </span>
              </div>

              <div className="relative z-10 flex items-center justify-center py-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-[#082928] text-[#ECC876] rounded-full flex items-center justify-center shadow-lg border-2 border-[#D4AF37]">
                    <MapPin className="w-5 h-5 text-[#ECC876]" />
                  </div>
                  <span className="text-xs font-bold text-[#082928] mt-1 bg-white/90 px-2 py-0.5 rounded shadow text-center">
                    Shree Vishaka Boutique<br/>
                    <span className="font-normal text-[10px] text-gray-600">Chettipalayam road, Palladam</span>
                  </span>
                </div>
              </div>

              <div className="relative z-10 flex justify-end">
                <a 
                  href="https://maps.google.com/?q=Shree+Vishaka+Boutique+Chettipalayam+road+Palladam+Tamil+Nadu+641664"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#082928] hover:text-[#937217] font-semibold flex items-center gap-1 bg-white px-3 py-1.5 rounded-md shadow-sm border border-gray-300"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>



    </div>
  );
}
