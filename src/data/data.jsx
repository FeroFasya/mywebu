import { Smartphone, Star, Shield, Crown } from 'lucide-react';

// Data User
export const USER_INFO = {
  phone: "628815750989",
  instagram: "ferogaaa",
  email: "ferofasya@gmail.com",
  linkedin: "ferofasya"
};

// Portfolio Items
// Portfolio Items
export const portfolioItems = [
  {
    id: 1,
    title: "The Minimalist",
    category: "Personal Brand",
    image: "/images/1.jpg", 
    color: "from-purple-500 to-indigo-600", 
    desc: "Desain bersih untuk konten kamu yang ingin fokus pada portofolio.",
    demoLink: "https://client-fero.netlify.app"
  },
  {
    id: 2,
    title: "Cyber Gamer",
    category: "Gaming",
    image: "/images/gaming.jpg", 
    color: "from-emerald-400 to-cyan-600",
    desc: "Tema futuristik neon untuk streamer dan gamer profesional.",
    demoLink: "https://mygamingfero.netlify.app/"
  },
  {
    id: 3,
    title: "Soft Girl / Coquette",
    category: "Personal Brand",
    image: "/images/softgirl.png", 
    color: "from-pink-400 to-yellow-400", 
    desc: "Desain manis dengan palet warna pastel yang lembut.",
    demoLink: "https://softgirlfero.netlify.app/"
  },
  {
    id: 4,
    title: "Kawaii Bento Grid", // Nama kerennya
    category: "Creative Portfolio",
    image: "/images/bento.png", // Jangan lupa SS web bento-nya, save jadi bento.jpg
    color: "from-blue-400 to-pink-400", // Gradasi pop cerah
    desc: "Layout modular kotak-kotak ala Jepang yang modern. Dilengkapi fitur Spotify Embed & Map.",
    demoLink: "https://bentofero.netlify.app/" // Jangan lupa ganti link aslinya nanti
  },
  {
    id: 5,
    title: "Elegant Business",
    category: "UMKM/Jasa",
    image: "/images/business.jpg", 
    color: "from-orange-400 to-rose-600",
    desc: "Tampilan profesional untuk membangun kepercayaan klien bisnis.",
    demoLink: "https://myelegantbusiness.netlify.app/"
  },
  {
    id: 6,
    title: "Coffee Talk",
    category: "Personal Brand",
    image: "/images/coffe.jpg", 
    color: "from-brown-500 to-yellow-600",
    desc: "Desain warm & cozy, cocok buat pecinta kopi dan senja.",
    demoLink: "https://coffemyfero.netlify.app/"
  },
  {
    id: 7,
    title: "Pixel Art",
    category: "Creative Portfolio",
    image: "/images/pixel.jpg", 
    color: "from-pink-500 to-purple-600",
    desc: "Tema retro pixel art untuk seniman digital dan ilustrator.",
    demoLink: "https://pixelartfero.netlify.app/"
  },
];
// Data Special Edition
export const specialItems = [
  {
    id: 's1', 
    title: "The Noir / Brutalism",
    theme: "High-End Dark Edition",
    category: "Creative Portfolio",
    price: "Rp400.000", // Miki set paling mahal karena ini 'Masterpiece'
    image: "/images/noir.mp4", // Rekam layar PC kamu, save jadi noir.mp4!
    desc: "Tema monokrom brutalist dengan efek Noise Grain & Hover Reveal. Khusus buat kreator yang ingin terlihat misterius, mahal, dan edgy.",
    features: ["Noise Texture Overlay", "Grayscale to Color Hover", "Marquee Animation", "Custom Crosshair Cursor"]
  },
  {
    id: 's2', 
    title: "Domain Expansion: Void",
    theme: "Special Anime Edition",
    category: "Personal Brand",
    price: "Rp350.000",
    image: "/images/gojo_final.mp4", 
    desc: "Tema Ungu Gelap dengan efek partikel 'Infinity'. Cocok buat wibu elit yang mau flexing.",
    features: ["Animasi Infinity Scroll", "Cursor Custom", "Dark Mode Only"]
  },
  {
    id: 's3', 
    title: "The Urban Resto",
    theme: "Premium F&B Edition",
    category: "F&B Business",
    price: "Rp300.000", 
    image: "/images/urban.mp4", 
    desc: "Landing page kuliner 'Next Level'. Dilengkapi fitur Filter Menu & Maps Dark Mode.",
    features: ["Fitur Filter Makanan/Minuman", "Embed Google Maps", "Direct Link Gofood"]
  } 
];

// MIKI: Update Pricing Tiers (Full Detail Visual)
export const pricingTiers = [
  {
    id: 'basic',
    name: "Paket Basic",
    price: "Rp150.000",
    desc: "Hemat & Cepat. Pilihan cerdas pelajar.",
    bestFor: "Pelajar / Tugas Sekolah / LinkBio",
    icon: <Smartphone size={20} className="text-blue-400" />,
    features: ["Landing Page 3 Section", "Desain Modern & Responsif", "Form Kontak ke WA", "Hosting Netlify (Gratis Selamanya)"],
    highlight: false,
    borderColor: "border-neutral-800"
  },
  {
    id: 'standard',
    name: "Paket Standard",
    price: "Rp250.000",
    desc: "Paling pas buat portofolio lengkap.",
    bestFor: "Mahasiswa / Fresh Grad / Jobseeker",
    icon: <Star size={20} className="text-yellow-400" />,
    features: ["Semua Fitur Basic", "Ganti Warna & Font (Minor)", "Galeri Foto (Max 8)", "Layout Lebih Detail", "Embed Sosmed/Video"],
    highlight: true,
    borderColor: "border-yellow-500/50"
  },
  {
    id: 'premium',
    name: "Paket Premium",
    price: "Rp400.000",
    desc: "Standout & terlihat mewah.",
    bestFor: "Content Creator / Selebgram",
    icon: <Shield size={20} className="text-purple-400" />,
    features: ["Semua Fitur Standard", "5+ Section (Long Page)", "Animasi Interaktif (Scroll Reveal)", "Galeri Foto (Max 15)", "Prioritas Pengerjaan (Express)"],
    highlight: false,
    borderColor: "border-indigo-500"
  },
  {
    id: 'exclusive',
    name: "Exclusive Custom",
    price: "Start Rp750.000",
    desc: "Desain unik, tidak pakai template.",
    bestFor: "UMKM Serius / Brand / Company",
    icon: <Crown size={20} className="text-amber-400" />,
    features: ["Full Custom Layout (By Request)", "Fitur Khusus (Filter/Search Sederhana)", "Revisi Design Lebih Banyak", "Konsultasi Mendalam", "Prioritas VIP"],
    highlight: false,
    borderColor: "border-amber-500/80",
    isSpecial: true 
  }
];

// FAQ Data
export const faqs = [
  {
    question: "Apa saya perlu bayar hosting bulanan?",
    answer: "Tidak perlu! Saya menggunakan teknologi Static Site (Netlify) yang gratis selamanya untuk traffic wajar."
  },
  {
    question: "Berapa lama proses pengerjaannya?",
    answer: "Paket Basic & Standard 1-3 hari kerja. Premium & Custom 3-7 hari tergantung kompleksitas."
  },
  {
    question: "Apa bisa pakai nama domain sendiri?",
    answer: "Bisa banget! Domain berbayar (sekitar 150rb/tahun). Nanti saya bantu setting gratis."
  },
  {
    question: "Kalau ada revisi gimana?",
    answer: "Setiap paket ada jatah revisi minor. Kalau revisi rombak layout total, ada biaya tambahan."
  }
];