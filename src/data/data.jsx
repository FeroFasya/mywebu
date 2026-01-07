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
    image: "/images/minimals.jpg", 
    color: "from-purple-500 to-indigo-600", 
    desc: "Desain bersih untuk konten kamu yang ingin fokus pada portofolio.",
    demoLink: "https://client-fero.netlify.app"
  },
  {
    id: 2,
    title: "Cyber Gamer",
    category: "Gaming / Creator",
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
    title: "Kawaii Bento Grid", 
    category: "Creative Portfolio",
    image: "/images/bento.png", 
    color: "from-blue-400 to-pink-400", 
    desc: "Layout modular kotak-kotak ala Jepang yang modern. Dilengkapi fitur Spotify Embed & Map.",
    demoLink: "https://bentofero.netlify.app/" 
  },
  {
    id: 5,
    title: "Elegant Business",
    category: "UMKM / Jasa",
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
  {
    id: 8,
    title: "Paws & Whiskers",
    category: "Pet Lovers / Business",
    image: "/images/paws.jpg", 
    color: "from-orange-400 to-teal-400", 
    desc: "Tema super gemoy dengan desain rounded dan animasi playful. Spesial buat Pet Shop & Grooming.",
    demoLink: "https://pawsfero.netlify.app/"
  },
  {
    id: 9,
    title: "Midnight Violet",
    category: "Tech / Luxury",
    image: "/images/violet.jpg", 
    color: "from-purple-900 to-indigo-900", 
    desc: "Tema Glassmorphism mewah dengan nuansa Dark Neon. Cocok untuk Web3, Tech, atau Personal Brand futuristik.",
    demoLink: "https://violetfero.netlify.app/"
  },
  {
    id: 10,
    title: "The Bistro",
    category: "F&B Business",
    image: "/images/bistro.jpg", 
    color: "from-red-500 to-yellow-500", 
    desc: "Tema kuliner menggugah selera Dilengkapi tombol Direct Order (WA/GoFood) untuk konversi penjualan instan.",
    demoLink: "https://bistrofero.netlify.app/"
  },
  {
    id: 11,
    title: "Streamer Hub",
    category: "Gaming / Creator",
    image: "/images/streamer.jpg", 
    color: "from-purple-600 to-pink-500", 
    desc: "Tema broadcast modern untuk Streamer & VTuber. Fitur lengkap: Jadwal Live, Embed Video, & Tombol Donasi.",
    demoLink: "https://streamerfero.netlify.app/"
  },
  {
    id: 12,
    title: "Glow Studio",
    category: "UMKM / Jasa",
    image: "/images/glow.jpg", 
    color: "from-orange-200 to-yellow-200", 
    desc: "Tema salon kecantikan premium dengan nuansa Nude & Gold. Fitur Pricelist Service & Booking WhatsApp.",
    demoLink: "https://glowfero.netlify.app/"
  },
  {
    id: 13,
    title: "The Garage",
    category: "UMKM / Jasa",
    image: "/images/garage.jpg", 
    color: "from-gray-900 to-red-600", 
    desc: "Tema maskulin industrial untuk Bengkel, Barbershop, atau Gym. Desain bold dengan tipografi yang kuat.",
    demoLink: "https://garagefero.netlify.app/"
  },
  {
    id: 14,
    title: "EduFocus",
    category: "Education / Course",
    image: "/images/edu.jpg", 
    color: "from-blue-600 to-indigo-500", 
    desc: "Landing page promosi kursus/bimbel. Fitur katalog kelas dengan tombol Direct WhatsApp untuk pendaftaran manual.",
    demoLink: "https://edufero.netlify.app/"
  },
  {
    id: 15,
    title: "Travel Journal",
    category: "Hobby / Blog",
    image: "/images/travel.jpg", 
    color: "from-green-600 to-emerald-500", 
    desc: "Tema blog travel dengan gaya editorial majalah. Fitur Parallax Hero dan layout cerita zig-zag yang estetik.",
    demoLink: "https://travelfero.netlify.app/"
  },
  // --- NEW ADDITIONS ---
  {
    id: 16,
    title: "Apex Creator",
    category: "Personal Brand",
    image: "/images/gym.png", // Jangan lupa SS web gym tadi!
    color: "from-red-600 to-slate-900", // Merah Crimson ke Hitam
    desc: "Desain agresif untuk Fitness Influencer. Fitur 'Split CTA' memisahkan tawaran Brand Deals & Klien Coaching, plus Grid Konten Video.",
    demoLink: "https://apexfero.netlify.app/"
  },
  {
    id: 17,
    title: "Swiss Minimalist",
    category: "Creative Portfolio",
    image: "/images/swiss_minimal.png", // Jangan lupa SS web putih tadi!
    color: "from-gray-200 to-gray-400", // Off-white elegan
    desc: "Estetika 'Swiss Style' ultra-bersih dengan struktur Grid Lines halus. Cocok untuk desainer yang ingin karya mereka jadi pusat perhatian.",
    demoLink: "https://swissfero.netlify.app/"
  }
];

// Data Special Edition
export const specialItems = [
  {
    id: 's1', 
    title: "The Noir / Brutalism",
    theme: "High-End Dark Edition",
    category: "Creative Portfolio",
    price: "Rp400.000", 
    image: "/images/noir.mp4", 
    desc: "Tema monokrom brutalist dengan efek Noise Grain & Hover Reveal. Khusus buat kreator yang ingin terlihat misterius, mahal, dan edgy.",
    features: ["Noise Texture Overlay", "Grayscale to Color Hover", "Marquee Animation", "Custom Crosshair Cursor"]
  },
  // --- NEW SPECIAL ITEM (Rival The Noir) ---
  {
    id: 's2', 
    title: "The White Luxury",
    theme: "High-End Editorial Edition",
    category: "Creative Portfolio",
    price: "Rp400.000", // Harganya sama kayak Noir, biar selevel
    image: "/images/luxury_white.mp4", // Rekam layar efek knockout-nya!
    desc: "Tema Editorial Mahal dengan teknik 'Partial Overlay' & 'Knockout Text'. Teks transparan yang membelah background statis menciptakan ilusi kedalaman.",
    features: ["Knockout Text Effect", "Partial Overlay Layout", "Custom Cursor Interaction", "Parallax Scroll Reveal"]
  },
  // --- SHIFTED ITEMS ---
  {
    id: 's3', 
    title: "Domain Expansion: Void",
    theme: "Special Anime Edition",
    category: "Personal Brand",
    price: "Rp350.000",
    image: "/images/gojo_final.mp4", 
    desc: "Tema Ungu Gelap dengan efek partikel 'Infinity'. Cocok buat wibu elit yang mau flexing.",
    features: ["Animasi Infinity Scroll", "Cursor Custom", "Dark Mode Only"]
  },
  {
    id: 's4', 
    title: "The Urban Resto",
    theme: "Premium F&B Edition",
    category: "F&B Business",
    price: "Rp300.000", 
    image: "/images/urban.mp4", 
    desc: "Landing page kuliner 'Next Level'. Dilengkapi fitur Filter Menu & Maps Dark Mode.",
    features: ["Fitur Filter Makanan/Minuman", "Embed Google Maps", "Direct Link Gofood"]
  },
  {
    id: 's5',
    title: "Soft Archive / Memory Room",
    theme: "Dreamy Pastel Edition",
    category: "Digital Gallery",
    price: "Rp300.000",
    image: "/images/gallerydigital.mp4",
    desc: "Galeri online untuk menampilkan karya terpilih dengan tampilan bersih dan emosional.",
    features: [
      "Smooth Fade Transition",
      "Pastel Gradient Background",
      "Minimal Caption Overlay",
      "Ambient Hover Animation"
    ]
  }
];

// Miki: Final Pricing - The "Know Your Worth" Edition
export const pricingTiers = [
  {
    id: 'basic',
    name: "Paket Pelajar",
    price: "Rp150.000",
    desc: "Simpel, cepat, dan tanpa biaya bulanan.",
    bestFor: "Tugas Sekolah / Link Bio",
    icon: <Smartphone size={20} className="text-blue-400" />,
    features: [
      "1 Halaman Website Simpel", 
      "Tampilan Bagus di HP & Laptop", 
      "Tombol Chat ke WhatsApp", 
      "Hosting Gratis Selamanya"
    ],
    highlight: false,
    borderColor: "border-neutral-800"
  },
  {
    id: 'standard',
    name: "Personal Branding",
    price: "Rp250.000",
    desc: "Tampil beda dan terlihat profesional.",
    bestFor: "Mahasiswa / Fresh Grad / Jobseeker",
    icon: <Star size={20} className="text-yellow-400" />,
    features: [
      "Semua Fitur Paket Pelajar", 
      "Bebas Request Warna & Font", 
      "Galeri Portofolio (Pamer Karya)", 
      "Sambung ke IG & TikTok",
      "Animasi Hover & Scroll"
    ],
    highlight: true,
    borderColor: "border-yellow-500/50"
  },
  {
    id: 'premium',
    name: "Paket Premium", // Or "Pro Creator" if you want to sound cool
    price: "Rp550.000",
    desc: "Tampilan mewah, interaktif, dan terima beres.", // Changed to emphasize convenience
    bestFor: "Influencer / Selebgram",
    icon: <Shield size={20} className="text-purple-400" />,
    features: [
      "Desain 'Long Page' & Animasi", // Combined visual features
      "Fitur Auto-Play Musik/Video",
      "Galeri Foto Besar (Max 15)",
      "Gratis Setup Hosting (Terima Beres)", // KEY POINT: They don't need to watch a tutorial
      "Dapat Akun Gmail & Netlify Pribadi", // KEY POINT: You give them the keys
      "Animasi Lanjutan (Scroll, Hover, dll)"
    ],
    highlight: false,
    borderColor: "border-indigo-500"
  },
  {
    id: 'exclusive',
    name: "Bisnis Eksklusif",
    price: "Mulai Rp1.250.000",
    desc: "Investasi aset digital serius untuk usahamu.",
    bestFor: "UMKM / Brand / Perusahaan",
    icon: <Crown size={20} className="text-amber-400" />,
    features: [
      "Gratis Domain .COM / .ID (1 Tahun)", 
      "Email Bisnis (admin@namausaha.com)", 
      "Desain Premium (Tanpa Template)", 
      "Terdaftar di Google Maps", 
      "Garansi Maintenance 1 Bulan"   
    ],
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

export const categoryStyles = {
  'Personal Brand': 'bg-pink-500/20 text-pink-400 border-pink-500/50',
  'Gaming / Creator': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50',
  'F&B Business': 'bg-orange-500/20 text-orange-400 border-orange-500/50',
  'Creative Portfolio': 'bg-purple-500/20 text-purple-400 border-purple-500/50',
  'UMKM / Jasa': 'bg-blue-500/20 text-blue-400 border-blue-500/50',
  'default': 'bg-neutral-500/20 text-neutral-400 border-neutral-500/50'
};