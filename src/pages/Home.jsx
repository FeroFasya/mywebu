import React from 'react';
import { ArrowRight, User, Zap, FileX, Image as ImageIcon, Sparkles, Settings, FileText, Globe, Monitor, MousePointer2, Share2 } from 'lucide-react';

const Home = ({ onNavigate }) => {
  return (
    <div className="space-y-12 pb-8">
      
      {/* --- HERO SECTION: RECTANGULAR LUXURY BANNER --- */}
      {/* MIKI: Tinggi diubah jadi h-[420px] biar lebih 'wide'. Flex items-end untuk posisi bawah. */}
      <section className="relative w-[calc(100%+3rem)] -mx-6 -mt-8 h-[420px] overflow-hidden flex items-end animate-fade-in">
        
        {/* 1. BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0">
           <img 
             src="/images/banner1.png" 
             alt="Hero Banner" 
             // MIKI: Object positioning diatur supaya bagian penting gambar tetap terlihat saat dipotong jadi wide
             className="w-full h-full object-cover object-center"
           />
        </div>

        {/* 2. GRADIENT OVERLAY (Lebih gelap di kiri bawah untuk teks) */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-transparent"></div>

        {/* 3. TEXT CONTENT (RATA KIRI & MINIMALIS) */}
        {/* MIKI: Padding diperbesar (px-8 pb-10) biar lega. Text-left. */}
        <div className="relative z-20 px-8 pb-10 text-left w-full">
            
            {/* Icon Kecil */}
            <div className="w-fit mb-4 p-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 animate-bounce-slow">
                <Globe size={20} className="text-white" />
            </div>

            <h1 className="text-3xl font-bold mb-3 leading-tight tracking-tight text-white drop-shadow-lg">
                Satu Link untuk <br/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-cyan-300">
                    Semua Ceritamu.
                </span>
            </h1>
            
            {/* MIKI: Max-width diatur biar teks ga kebablasan ke kanan. Rata kiri. */}
            <p className="text-neutral-300 text-sm mb-8 leading-relaxed max-w-[280px] drop-shadow-md">
                Kumpulkan karya, pengalaman, dan profilmu dalam satu website pribadi. Rapi, estetik, dan mudah dibagikan.
            </p>
            
            {/* MIKI: Tombol sejajar (flex-row), ukuran lebih kecil (py-3 px-5, text-sm, rounded-xl) */}
            <div className="flex flex-row gap-3">
                <button 
                    onClick={() => onNavigate('catalog')}
                    className="bg-white text-neutral-950 text-sm font-bold py-3 px-5 rounded-xl hover:bg-neutral-200 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                >
                    Lihat Contoh <ArrowRight size={16} />
                </button>
                <button 
                    onClick={() => onNavigate('pricing')}
                    className="bg-white/10 backdrop-blur-md text-white text-sm font-bold py-3 px-5 rounded-xl border border-white/20 hover:bg-white/20 transition-all"
                >
                    Mulai Bikin
                </button>
            </div>
        </div>
      </section>

      {/* --- EDUKASI: WEB VS PDF --- */}
      <section className="px-2">
        <div className="bg-neutral-900 rounded-3xl border border-neutral-800 p-6 relative overflow-hidden group hover:border-neutral-700 transition-colors shadow-xl">
            
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Monitor size={120} />
            </div>
            
            <h2 className="text-lg font-bold mb-6 flex items-center gap-2 relative z-10">
                <Zap size={20} className="text-yellow-400 fill-yellow-400" />
                Kenapa Harus Website?
            </h2>
            
            <div className="space-y-6 relative z-10">
                <div className="flex gap-4 items-start">
                    <div className="mt-1 bg-red-500/10 p-2 rounded-lg text-red-400 shrink-0"><FileX size={20} /></div>
                    <div>
                        <h3 className="font-bold text-sm text-neutral-200 mb-1">Masalah PDF & Drive</h3>
                        <p className="text-xs text-neutral-500 leading-relaxed">
                            Harus download dulu, makan memori HP orang, susah dibuka kalau sinyal jelek, dan tampilannya kaku.
                        </p>
                    </div>
                </div>
                
                <div className="w-full h-px bg-neutral-800"></div>

                <div className="flex gap-4 items-start">
                    <div className="mt-1 bg-green-500/10 p-2 rounded-lg text-green-400 shrink-0"><Globe size={20} /></div>
                    <div>
                        <h3 className="font-bold text-sm text-neutral-200 mb-1">Solusi Website</h3>
                        <p className="text-xs text-neutral-500 leading-relaxed">
                            Cukup satu link pendek. Langsung kebuka, interaktif, bisa putar video, dan terlihat jauh lebih profesional.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- MANFAAT UMUM --- */}
      <section>
        <h2 className="text-lg font-bold mb-6 flex items-center gap-2 px-2">
          <Sparkles size={20} className="text-purple-400" />
          Fungsinya Buat Apa?
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Card 1 */}
          <div className="bg-neutral-900/50 p-5 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400"><User size={18} /></div>
              <h3 className="font-bold text-neutral-200 text-sm">Arsip Digital</h3>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">Tempat aman buat simpan semua sertifikat, foto, atau hasil karyamu biar nggak tercecer.</p>
          </div>
          
           {/* Card 2 */}
           <div className="bg-neutral-900/50 p-5 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-pink-500/20 rounded-lg text-pink-400"><ImageIcon size={18} /></div>
              <h3 className="font-bold text-neutral-200 text-sm">Personal Branding</h3>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">Tunjukkan sisi profesionalmu dengan tampilan yang lebih niat daripada sekadar link bio biasa.</p>
          </div>
        </div>
      </section>

      {/* --- PROCESS SECTION --- */}
      <section>
          <h2 className="text-lg font-bold mb-6 flex items-center gap-2 px-2">
            <Settings size={20} className="text-cyan-400" />
            Caranya Gimana?
          </h2>

          <div className="space-y-6 relative px-2">
            <div className="absolute left-[30px] top-4 bottom-4 w-0.5 bg-neutral-800"></div>

            <div className="relative flex items-center gap-5">
              <div className="z-10 w-12 h-12 shrink-0 rounded-full bg-neutral-950 border-2 border-indigo-500 flex items-center justify-center text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.2)]"><FileText size={20} /></div>
              <div><h3 className="font-bold text-white text-sm">1. Pilih Tampilan</h3><p className="text-xs text-neutral-500 mt-1">Cek menu Desain, pilih tema yang kamu suka.</p></div>
            </div>

             <div className="relative flex items-center gap-5">
              <div className="z-10 w-12 h-12 shrink-0 rounded-full bg-neutral-950 border-2 border-cyan-500 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]"><Settings size={20} /></div>
              <div><h3 className="font-bold text-white text-sm">2. Kirim Data</h3><p className="text-xs text-neutral-500 mt-1">Isi data dirimu (foto/teks) lewat WA.</p></div>
            </div>

             <div className="relative flex items-center gap-5">
              <div className="z-10 w-12 h-12 shrink-0 rounded-full bg-neutral-950 border-2 border-green-500 flex items-center justify-center text-green-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]"><Globe size={20} /></div>
              <div><h3 className="font-bold text-white text-sm">3. Jadi Deh!</h3><p className="text-xs text-neutral-500 mt-1">Webmu online dan siap dipajang di bio.</p></div>
            </div>
          </div>
      </section>

    </div>
  );
};

export default Home;