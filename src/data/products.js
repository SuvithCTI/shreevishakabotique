// Curated luxury products database for Shree Vishaka Boutique

export const CATEGORIES = [
  { id: 'all', name: 'All' },
  { id: 'festive', name: 'Festival Wears' },
  { id: 'blouses', name: 'Blouse Designs' },
  { id: 'sarees', name: 'Sarees' },
];

export const PRODUCTS = [
  // --- FESTIVAL WEARS ---
  {
    id: 'kanchipuram-teal',
    title: 'Kanchipuram Silk Saree',
    category: 'festive',
    categoryName: 'Festival Wears',
    price: 2990,
    originalPrice: 5999,
    badge: 'Bestseller',
    color: 'Teal Green',
    fabric: 'Pure Kanchipuram Silk',
    work: 'Pure Gold Zari Weaving',
    rating: 5.0,
    reviewCount: 48,
    images: ['/images/collections/silk-sarees.jpg'],
    description: 'A stunning Kanchipuram silk saree with rich zari work and a traditional border. Perfect for weddings and festive occasions.',
    details: {
      sareeLength: '5.5 meters',
      blouseLength: '0.8 meters unstitched matching blouse piece',
      weaveType: 'Authentic Jacquard Korvai Handloom Weave',
      zariType: 'Fine Tested Gold & Copper Zari',
      certification: 'Silk Mark Certified 100% Pure Mulberry Silk',
      weight: '750 grams of pure drape luxury'
    },
    features: [
      'Pure Mulberry Silk',
      'Traditional Temple Zari Border',
      'Contrast Rich Grand Pallu',
      'Complimentary Fall & Pico Done'
    ]
  },
  {
    id: 'banarasi-crimson',
    title: 'Banarasi Silk Saree',
    category: 'festive',
    categoryName: 'Festival Wears',
    price: 2850,
    originalPrice: 5499,
    badge: 'Heritage',
    color: 'Crimson Rani Pink',
    fabric: 'Katan Banarasi Silk',
    work: 'Intricate Kadwa Meenakari Floral Weave',
    rating: 4.9,
    reviewCount: 36,
    images: ['/images/collections/banarasi-silk.jpg'],
    description: 'Royal crimson red Banarasi silk woven with golden bel motifs, traditional floral jaal, and heavy bridal pallu.',
    details: {
      sareeLength: '5.5 meters',
      blouseLength: '0.8 meters unstitched',
      weaveType: 'Handwoven Kadwa Jaal',
      zariType: 'Antique Gold Zari',
      certification: 'Silk Mark Certified',
      weight: '780 grams'
    },
    features: ['Royal Banarasi Brocade', 'Handwoven Kadwa Booti', 'Heirloom Finish', 'Custom Fall & Edging']
  },
  {
    id: 'tussar-golden',
    title: 'Tissue Silk Saree',
    category: 'festive',
    categoryName: 'Festival Wears',
    price: 2690,
    originalPrice: 4999,
    badge: 'Trending',
    color: 'Ivory Gold',
    fabric: 'Metallic Tissue Organza Silk',
    work: 'Fine Resham Cutwork & Mukaish Border',
    rating: 4.8,
    reviewCount: 29,
    images: ['/images/collections/tissue-silk.jpg'],
    description: 'Ethereal metallic tissue silk drape in champagne gold with subtle sheen and hand-cut scalloped borders.',
    details: {
      sareeLength: '5.5 meters',
      blouseLength: '0.8 meters brocade',
      weaveType: 'Tissue Weft Loom',
      zariType: 'Micro Champagne Shimmer',
      certification: 'Silk Blend Mark',
      weight: '520 grams'
    },
    features: ['Featherlight Shimmer', 'Modern Royal Aesthetic', 'Scalloped Edge Detail', 'Includes Designer Blouse Piece']
  },
  {
    id: 'soft-silk-emerald',
    title: 'Soft Silk Saree',
    category: 'festive',
    categoryName: 'Festival Wears',
    price: 2490,
    originalPrice: 4499,
    badge: 'Popular',
    color: 'Emerald Bottle Green',
    fabric: 'Pure Soft Mulberry Silk',
    work: 'Silver & Gold Dual Tone Zari Border',
    rating: 4.9,
    reviewCount: 42,
    images: ['/images/collections/soft-silk-emerald.jpg'],
    description: 'Buttery soft silk drape in rich emerald green, effortless to pleat and lightweight for all-day comfort.',
    details: {
      sareeLength: '5.5 meters',
      blouseLength: '0.8 meters',
      weaveType: 'Soft Weft Weave',
      zariType: 'Dual Metallic Zari',
      certification: 'Silk Mark Certified',
      weight: '590 grams'
    },
    features: ['Super Soft & Pleat-Friendly', 'Rich Jewel Tone', 'Grand Geometric Pallu', 'All-Day Wearable Comfort']
  },

  // --- BLOUSE DESIGNS ---
  {
    id: 'blouse-embroidered',
    title: 'Embroidered Blouse',
    category: 'blouses',
    categoryName: 'Blouse Designs',
    price: 2500,
    originalPrice: 3200,
    badge: 'Handcrafted',
    color: 'Teal Green & Gold',
    fabric: 'Raw Silk & Velvet Lining',
    work: 'Maggam / Aari Hand Embroidery',
    rating: 4.9,
    reviewCount: 51,
    images: ['/images/collections/blouse-designs.jpg'],
    description: 'Designer back-cutout blouse crafted in royal teal raw silk with intricate peacocks and floral Aari hand embroidery.',
    details: {
      cut: 'Deep U-Back with Handcrafted Dori Latkans',
      sleeves: 'Elbow length with heavy border work',
      padding: 'In-built soft cups with cotton lining',
      customFit: 'Available in standard sizes 32-44 or Made-to-Measure'
    },
    features: ['Handcrafted Aari Needlework', 'Custom Made-to-Measure Option', 'Padded with Premium Lining', 'Back Dori & Tassels']
  },
  {
    id: 'blouse-zari-work',
    title: 'Zari Work Blouse',
    category: 'blouses',
    categoryName: 'Blouse Designs',
    price: 2800,
    originalPrice: 3500,
    badge: 'Exclusive',
    color: 'Blush Pink & Gold',
    fabric: 'Pure Silk Brocade',
    work: 'Zari & Pearl Border Embroidery',
    rating: 4.8,
    reviewCount: 38,
    images: ['/images/collections/blouse-zari.jpg'],
    description: 'Regal blush pink brocade blouse featuring an ornate sweetheart neckline, circular keyhole back with handcrafted latkan tassels, and rich gold zari embroidery.',
    details: {
      cut: 'Sweetheart Neck with circular cutout back and latkans',
      sleeves: 'Elbow length embroidered sleeves',
      padding: 'Custom padded structure with pure cotton inner',
      customFit: 'Sizes 34 to 42 ready to dispatch'
    },
    features: ['Bridal Grade Zari Brocade', 'Pearl Border Accents', 'Handcrafted Latkan Tassels', 'Adjustable Margins Inside (2 inches)']
  },
  {
    id: 'blouse-sequins',
    title: 'Sequins Blouse',
    category: 'blouses',
    categoryName: 'Blouse Designs',
    price: 2800,
    originalPrice: 3600,
    badge: 'Festive',
    color: 'Wine Plum & Kundan Gold',
    fabric: 'Raw Silk',
    work: 'Kundan Stone Embellishment & Puff Sleeves',
    rating: 4.7,
    reviewCount: 22,
    images: ['/images/collections/blouse-sequins.jpg'],
    description: 'Contemporary wine plum silk blouse featuring a kundan-studded sweetheart neckline, pleated puff sleeves, and a charming tie-up back bow.',
    details: {
      cut: 'Sweetheart Neckline with V-Back Tie Bow',
      sleeves: 'Pleated puff sleeves with cuff detailing',
      padding: 'Molded foam cups with cotton lining',
      customFit: 'All sizes customizable'
    },
    features: ['Kundan Stone Neckline', 'Tie-Up Back Bow Silhouette', 'Pleated Puff Sleeves', 'Side Zip Closure']
  },
  {
    id: 'blouse-traditional',
    title: 'Traditional Blouse',
    category: 'blouses',
    categoryName: 'Blouse Designs',
    price: 2400,
    originalPrice: 2999,
    badge: 'Classic',
    color: 'Royal Purple & Gold',
    fabric: 'Raw Silk',
    work: 'Circular Aari Cutwork & Gold Embroidery',
    rating: 4.9,
    reviewCount: 44,
    images: ['/images/collections/blouse-traditional.jpg'],
    description: 'Traditional royal purple silk blouse adorned with intricate circular floral embroidery on the back cutout, pearl-drop chain accent, and festive hand needlework.',
    details: {
      cut: 'Round back cutout with pearl drop chain ornament',
      sleeves: 'Quarter length elbow sleeves with embroidered motifs',
      padding: 'Non-padded breathable fit with inner margins',
      customFit: 'Sizes 32-44'
    },
    features: ['Circular Floral Cutout Back', 'Pearl Drop Chain Ornament', '100% Breathable Raw Silk', 'Signature South Indian Heritage Cut']
  },

  // --- SAREES ---
  {
    id: 'cotton-saree',
    title: 'Pure Cotton Saree',
    category: 'sarees',
    categoryName: 'Sarees',
    price: 899,
    originalPrice: 1999,
    badge: 'Handwoven',
    color: 'Pastel Rose Pink',
    fabric: '100% Pure Handloom Cotton',
    work: 'Antique Gold Zari Border with Floral Pallu & Tassels',
    rating: 4.9,
    reviewCount: 35,
    images: ['/images/collections/cotton-saree.jpg'],
    description: 'Elegantly draped pastel rose pink handloom cotton saree featuring an antique gold woven border, artistic floral branch pallu, and handcrafted edge tassels.',
    details: {
      sareeLength: '5.5 meters',
      blouseLength: '0.8 meters contrast blouse piece',
      weaveType: 'Authentic Handloom Weave',
      zariType: 'Fine Tested Gold Zari',
      certification: '100% Handloom Certified',
      weight: '480 grams'
    },
    features: ['Pure Breathable Handloom Cotton', 'Contrast Slate Grey Blouse Piece', 'Rich Antique Gold Zari Border', 'Handcrafted Edge Tassels']
  },
  {
    id: 'georgette-saree',
    title: 'Ombre Georgette Saree',
    category: 'sarees',
    categoryName: 'Sarees',
    price: 999,
    originalPrice: 2499,
    badge: 'Trending',
    color: 'Ivory & Sage Ombre',
    fabric: 'Pure Viscose Georgette',
    work: 'Scalloped Cutwork Mirror Embroidery',
    rating: 4.8,
    reviewCount: 41,
    images: ['/images/collections/georgette-saree.jpg'],
    description: 'Ethereal ivory-to-sage green ombre georgette saree highlighted with a scalloped cutwork mirror-embellished border and a lightweight, graceful fall.',
    details: {
      sareeLength: '5.5 meters',
      blouseLength: '0.8 meters sage green silk blouse piece',
      weaveType: 'Flowing Georgette Weft',
      zariType: 'Real Mirror & Thread Embroidery',
      certification: 'Premium Fabric Guaranteed',
      weight: '550 grams'
    },
    features: ['Dual Tone Ombre Transition', 'Scalloped Mirrorwork Edging', 'Matching Sage Green Blouse', 'Effortless Draping & Fall']
  },
  {
    id: 'satin-saree',
    title: 'Royal Satin Saree',
    category: 'sarees',
    categoryName: 'Sarees',
    price: 1149,
    originalPrice: 2999,
    badge: 'Cocktail Luxury',
    color: 'Deep Royal Plum',
    fabric: 'Ultra-Luxe Japanese Satin Silk',
    work: 'Delicate Crystal & Micro-Bead Border',
    rating: 5.0,
    reviewCount: 58,
    images: ['/images/collections/satin-saree.jpg'],
    description: 'High-glamour deep plum satin silk saree with a lustrous liquid drape, refined micro-beadwork edging, and opulent evening presence.',
    details: {
      sareeLength: '5.5 meters',
      blouseLength: '0.8 meters embellished blouse fabric',
      weaveType: 'Glossy Liquid Satin',
      zariType: 'Crystal & Bead Embellishment',
      certification: 'Silk Blend Mark',
      weight: '620 grams'
    },
    features: ['Rich Liquid Satin Sheen', 'Subtle Crystal Embellished Border', 'Red Carpet Evening Silhouette', 'Pleats with Flawless Flow']
  },
  {
    id: 'tussar-silk-saree',
    title: 'Tussar Silk Saree',
    category: 'sarees',
    categoryName: 'Sarees',
    price: 1099,
    originalPrice: 2699,
    badge: 'Festive Drape',
    color: 'Lavender Mauve',
    fabric: 'Handloom Tussar Tissue Silk',
    work: 'Fine Zari Border & Subtle Self Weave',
    rating: 4.9,
    reviewCount: 47,
    images: ['/images/collections/tussar-silk-saree.jpg'],
    description: 'Luminous lavender mauve Tussar tissue silk saree blending natural rich textured silk with glistening gold zari edging and festive elegance.',
    details: {
      sareeLength: '5.5 meters',
      blouseLength: '0.8 meters contrast purple embroidered blouse piece',
      weaveType: 'Handloom Tussar Weave',
      zariType: 'Metallic Gold Zari Border',
      certification: 'Silk Mark Certified',
      weight: '540 grams'
    },
    features: ['Natural Tussar Textured Sheen', 'Contrast Embroidered Blouse Included', 'Metallic Gold Zari Border', 'Comfortable All-Day Festive Wear']
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sowmya Natarajan',
    location: 'Coimbatore, Tamil Nadu',
    rating: 5,
    date: 'October 2026',
    comment: 'Visited the boutique on Chettipalayam Road for my sister’s wedding muhurtham. The pure Kanchipuram silk collection with gold zari is truly breathtaking. Custom blouse stitching was delivered in 3 days with a 100% flawless fit!',
    verified: true
  },
  {
    id: 2,
    name: 'Kavitha Ramesh',
    location: 'Tiruppur, Tamil Nadu',
    rating: 5,
    date: 'September 2026',
    comment: 'Got my bridal Aari embroidery blouse designed here. The neck cutout and pearl detailing match my reception saree wonderfully. Best boutique near Tiruppur and Palladam for bespoke drapes and tailoring.',
    verified: true
  },
  {
    id: 3,
    name: 'Meera Krishnan',
    location: 'Chennai, Tamil Nadu',
    rating: 5,
    date: 'October 2026',
    comment: 'Ordered pure soft silk and festive drapes through WhatsApp video call. Parcel reached Chennai within 2 days with authentic Silk Mark certification, perfect fall & pico, and royal gift packaging.',
    verified: true
  }
];

export const INSTAGRAM_POSTS = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80',
    caption: 'Pure Kanchipuram silk drape under golden sun rays ✨ #ShreeVishakaBride #HeritageDrapes',
    likes: '1.4k'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80',
    caption: 'Back detailing on our signature Aari embroidered blouse in peacock hues 🦚 #BlouseInspiration',
    likes: '2.8k'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1610030469668-93510cb2866c?auto=format&fit=crop&w=600&q=80',
    caption: 'Bridal crimson moments with real zari jaal weaving. #RoyalIndianWeddings',
    likes: '3.1k'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80',
    caption: 'The art of temple motifs woven by generational artisans. #VocalForHandloom',
    likes: '980'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=600&q=80',
    caption: 'Subtle shimmer of metallic tissue silk for reception glam. #FestiveVibes',
    likes: '1.7k'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80',
    caption: 'Client diaries: Sneha looking regal on her engagement in our emerald drape 💚',
    likes: '2.2k'
  }
];
