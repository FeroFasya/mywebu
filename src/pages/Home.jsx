import React from 'react';
import { Zap, FileX, ImageIcon, Settings, FileText, Globe, Monitor, ArrowRight, Sparkles, Code2, Rocket, User } from 'lucide-react';

const Home = ({ onNavigate }) => {

  return (
    <div className="space-y-12 pb-8">

      {/* --- HERO SECTION: RESPONSIVE BENTO GRID (JAPANESE ARCADE VIBE) --- */}
      <section className="pt-4 px-4">
        {/* MIKI: Tambahkan md:grid-cols-4 dan md:auto-rows-[180px] untuk layout Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[140px] md:auto-rows-[180px] max-w-6xl mx-auto">
          
          {/* Bento 1: Tagline Utama 
              Mobile: Lebar penuh (2 kolom), 1 baris
              Desktop: Lebar 2 kolom, tinggi 2 baris (Kotak besar di kiri) 
          */}
          <div className="col-span-2 row-span-1 md:row-span-2 rounded-[2rem] bg-gradient-to-br from-ash-surface to-ash/50 dark:from-indigo-50 dark:to-white border-2 border-white/5 dark:border-indigo-100 border-b-[6px] border-b-indigo-500/50 dark:border-b-indigo-300 p-6 md:p-10 flex flex-col justify-center relative overflow-hidden shadow-lg group active:translate-y-1 active:border-b-2 transition-all duration-150">
            <div className="absolute -right-4 -top-4 opacity-10 dark:opacity-5 transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
              <Sparkles size={120} className="md:w-[200px] md:h-[200px]" />
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-ash-text dark:text-gray-900 leading-tight mb-2 md:mb-4 relative z-10">
              Bantu kamu <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Bikin Softwere !</span>
            </h1>
            <p className="text-sm md:text-lg text-gray-400 dark:text-gray-600 font-medium relative z-10 max-w-md">
              Seunik apapun idenya, <strong className="text-indigo-400 dark:text-indigo-600">MyWebu</strong> bantu wujudin dari nol sampai live.
            </p>
          </div>

          {/* Bento 2: Personal Brand (Kotak Kanan Atas 1) */}
          <div 
            onClick={() => onNavigate('catalog')}
            className="col-span-1 md:col-span-1 row-span-1 rounded-[2rem] relative overflow-hidden shadow-md cursor-pointer group border-2 border-white/5 dark:border-gray-100 border-b-[6px] border-b-orange-500 active:translate-y-1 active:border-b-2 transition-all duration-150"
          >
            <img src="/images/cs1.png" alt="Personal Brand" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-900/90 to-orange-500/40 mix-blend-multiply"></div>
            <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-orange-500 flex items-center justify-center text-white mb-2 md:mb-3 shadow-lg group-hover:-translate-y-1 transition-transform">
                <User size={18} className="md:w-5 md:h-5" />
              </div>
              <h3 className="text-white font-bold text-sm md:text-base leading-tight">Personal Brand</h3>
            </div>
          </div>

          {/* Bento 3: Company Profile (Kotak Kanan Atas 2) */}
          <div 
            onClick={() => onNavigate('catalog')}
            className="col-span-1 md:col-span-1 row-span-1 rounded-[2rem] relative overflow-hidden shadow-md cursor-pointer group border-2 border-white/5 dark:border-gray-100 border-b-[6px] border-b-blue-500 active:translate-y-1 active:border-b-2 transition-all duration-150"
          >
            <img src="/images/cs2.png" alt="Company Profile" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-blue-500/40 mix-blend-multiply"></div>
            <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-500 flex items-center justify-center text-white mb-2 md:mb-3 shadow-lg group-hover:-translate-y-1 transition-transform">
                <Globe size={18} className="md:w-5 md:h-5" />
              </div>
              <h3 className="text-white font-bold text-sm md:text-base leading-tight">Bisnis / UMKM</h3>
            </div>
          </div>

          {/* Bento 4: Custom Design 
              Desktop: Lebar 2 kolom, menempati baris ke-2 di sebelah kanan 
          */}
          <div 
            onClick={() => onNavigate('catalog')}
            className="col-span-2 md:col-span-2 row-span-1 rounded-[2rem] relative overflow-hidden shadow-md cursor-pointer group bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center p-1 md:p-2 border-2 border-white/5 dark:border-indigo-200 border-b-[6px] border-b-indigo-900 active:translate-y-1 active:border-b-2 transition-all duration-150"
          >
            <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden rounded-r-[2rem]">
              <img src="/images/animw.jpg" alt="Custom Creative" className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-transparent"></div>
            </div>
            
            <div className="relative z-10 pl-5 md:pl-8 pr-2 w-2/3">
              <div className="inline-flex items-center gap-1.5 px-2 md:px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-white text-[10px] md:text-xs font-bold uppercase tracking-wider mb-2">
                <Code2 size={12} /> Bebas Request
              </div>
              <h3 className="text-white font-bold text-lg md:text-2xl leading-none mb-1 md:mb-2">Custom Web!</h3>
              <p className="text-white/80 text-xs md:text-sm">Punya UI sendiri? Aku kodingin.</p>
            </div>

            <div className="relative z-10 ml-auto mr-4 md:mr-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center text-purple-600 shadow-xl group-hover:rotate-45 transition-transform">
              <ArrowRight size={20} className="md:w-6 md:h-6" />
            </div>
          </div>

        </div>
      </section>

      {/* --- EDUKASI: WEB VS PDF --- */}
      <section className="px-4">
        <div className="max-w-6xl mx-auto bg-ash-surface dark:bg-white rounded-3xl border border-white/5 dark:border-gray-100 border-b-4 border-b-orange-400 p-6 md:p-8 relative overflow-hidden group shadow-lg">
          <div className="absolute top-0 right-0 p-6 md:p-10 opacity-5 dark:opacity-10 text-white dark:text-black rotate-12 transition-transform group-hover:rotate-0">
            <Monitor size={120} className="md:w-[200px] md:h-[200px]" />
          </div>

          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 flex items-center gap-2 relative z-10 text-ash-text dark:text-black">
            <Zap size={24} className="text-orange-400 fill-orange-400 md:w-8 md:h-8" />
            PDF udah kuno, bro!
          </h2>

          <div className="space-y-6 md:space-y-8 relative z-10 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
            <div className="flex gap-4 items-start">
              <div className="mt-1 bg-red-500/10 dark:bg-red-50 p-2 md:p-3 rounded-xl border-b-4 border-red-500/30 text-red-500 shrink-0">
                <FileX size={20} strokeWidth={2.5} className="md:w-6 md:h-6" />
              </div>
              <div>
                <h3 className="font-bold text-sm md:text-base text-gray-200 dark:text-black mb-1 md:mb-2">Portofolio PDF itu Ribet</h3>
                <p className="text-xs md:text-sm text-gray-400 dark:text-gray-500 leading-relaxed">
                  Harus didownload, menuhin memori HP klien, kaku, dan pecah kalau di-zoom. Bikin males baca.
                </p>
              </div>
            </div>

            {/* Garis pembatas hanya muncul di mobile */}
            <div className="w-full h-px bg-white/10 dark:bg-gray-200 md:hidden"></div>

            <div className="flex gap-4 items-start">
              <div className="mt-1 bg-green-500/10 dark:bg-green-50 p-2 md:p-3 rounded-xl border-b-4 border-green-500/30 text-green-500 shrink-0">
                <Rocket size={20} strokeWidth={2.5} className="md:w-6 md:h-6" />
              </div>
              <div>
                <h3 className="font-bold text-sm md:text-base text-gray-200 dark:text-black mb-1 md:mb-2">Website Pribadi itu Elegan!</h3>
                <p className="text-xs md:text-sm text-gray-400 dark:text-gray-500 leading-relaxed">
                  Sebar satu link, langsung buka di mana aja. Kelihatan pro, estetik, dan pastinya naikin value kamu di mata klien.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- HOW TO SECTION --- */}
      <section className="px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-10 flex items-center gap-2 text-ash-text dark:text-light-text">
            <Sparkles size={24} className="text-cyan-400 md:w-8 md:h-8" />
            Tinggal Terima Beres!
          </h2>

          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-6 relative">
            {/* Garis vertikal timeline untuk mobile */}
            <div className="absolute left-[22px] top-4 bottom-4 w-1 bg-white/5 dark:bg-gray-200 rounded-full md:hidden"></div>

            {/* Step 1 */}
            <div className="relative flex md:flex-col items-center md:items-start gap-5 md:gap-4 md:bg-ash-surface md:dark:bg-white md:p-6 md:rounded-[2rem] md:border md:border-white/5 md:dark:border-gray-100 md:shadow-md">
              <div className="z-10 w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-2xl md:rounded-[1.25rem] bg-indigo-500 border-b-4 border-indigo-700 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                <ImageIcon size={20} strokeWidth={2.5} className="md:w-6 md:h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-200 dark:text-black text-sm md:text-lg">1. Pilih & Lirik</h3>
                <p className="text-xs md:text-sm text-gray-400 dark:text-gray-500 mt-1 md:mt-2">Cek Katalog desainku. Suka? Tinggal tunjuk. Punya referensi desain sendiri? Kita obrolin!</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex md:flex-col items-center md:items-start gap-5 md:gap-4 md:bg-ash-surface md:dark:bg-white md:p-6 md:rounded-[2rem] md:border md:border-white/5 md:dark:border-gray-100 md:shadow-md">
              <div className="z-10 w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-2xl md:rounded-[1.25rem] bg-cyan-500 border-b-4 border-cyan-700 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
                <Settings size={20} strokeWidth={2.5} className="md:w-6 md:h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-200 dark:text-black text-sm md:text-lg">2. Konsultasi Santai</h3>
                <p className="text-xs md:text-sm text-gray-400 dark:text-gray-500 mt-1 md:mt-2">Chat aku via WhatsApp, kirim materimu (foto/teks), dan biar aku yang ngetik kodenya sampai live.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex md:flex-col items-center md:items-start gap-5 md:gap-4 md:bg-ash-surface md:dark:bg-white md:p-6 md:rounded-[2rem] md:border md:border-white/5 md:dark:border-gray-100 md:shadow-md">
              <div className="z-10 w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-2xl md:rounded-[1.25rem] bg-green-500 border-b-4 border-green-700 flex items-center justify-center text-white shadow-lg shadow-green-500/20">
                <Globe size={20} strokeWidth={2.5} className="md:w-6 md:h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-200 dark:text-black text-sm md:text-lg">3. Live & Pamer!</h3>
                <p className="text-xs md:text-sm text-gray-400 dark:text-gray-500 mt-1 md:mt-2">Website-mu online dan siap dipamerkan ke calon klien, rekruter, atau taruh di bio sosmedmu.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;