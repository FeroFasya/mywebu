import React from 'react';
import { ArrowRight, User, Zap, FileX, Image as ImageIcon, Sparkles, Settings, FileText, Globe, Monitor, MousePointer2, Share2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Home = ({ onNavigate }) => {
  const { t } = useLanguage();

  return (
    <div className="space-y-12 pb-8">
      
      {/* --- HERO SECTION --- */}
      {/* MIKI: Styling Pop - Tidak ada border hitam tebal, hanya rounded corners yang halus */}
{/* --- HERO SECTION: HYBRID POP + FLOATING ELEMENTS --- */}
      <section className="relative w-[calc(100%+3rem)] -mx-6 -mt-8 h-[500px] md:h-[550px] overflow-hidden flex items-end animate-fade-in group">
        
        {/* 1. BACKGROUND IMAGE (Zoom Effect on Hover) */}
        <div className="absolute inset-0 z-0">
           <img 
             src="/images/banner5.png" 
             alt="Hero Banner" 
             className="w-full h-full object-cover object-center transition-transform duration-[10s] ease-in-out group-hover:scale-110"
           />
        </div>

        {/* 2. OVERLAY (Gradient Lebih Halus & Modern) */}
        {/* Menggunakan gradient radial di pojok biar fokus ke teks */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-ash-surface via-ash-surface/60 to-transparent dark:from-white dark:via-white/70 dark:to-transparent"></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-ash-surface/90 via-transparent to-transparent dark:from-white/90 dark:to-transparent"></div>

        {/* 3. FLOATING DECORATIONS (The "Alive" Factor) - MIKI MAGIC */}
        <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
            
            {/* Element 1: Code Icon (Top Right) */}
            <div className="absolute top-20 right-20 animate-bounce-slow" style={{ animationDuration: '3s' }}>
                <div className="bg-white dark:bg-ash-darker p-3 rounded-2xl border-b-4 border-indigo-500 shadow-lg transform rotate-12">
                    <Monitor size={24} className="text-indigo-500" />
                </div>
            </div>

            {/* Element 2: Star Badge (Middle Right) */}
            <div className="absolute top-1/2 right-10 animate-bounce-slow" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                <div className="bg-yellow-400 text-black text-[10px] font-black px-3 py-1.5 rounded-lg border-b-4 border-yellow-700 shadow-lg transform -rotate-6">
                    BEST CHOICE ✦
                </div>
            </div>

            {/* Element 3: Sparkles (Near Text) */}
            <div className="absolute bottom-40 left-1/2 animate-pulse">
                <Sparkles size={32} className="text-cyan-400 opacity-60" />
            </div>
        </div>

        {/* 4. TEXT CONTENT */}
        <div className="relative z-20 px-8 pb-12 text-left w-full max-w-3xl">
            
            {/* Tagline Kecil */}
            <div className="w-fit mb-4 flex items-center gap-2 px-3 py-1.5 bg-indigo-500/10 dark:bg-indigo-100/80 backdrop-blur-md rounded-lg border border-indigo-500/20 dark:border-indigo-200 animate-fade-in-up">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                <span className="text-[10px] font-bold text-indigo-300 dark:text-indigo-600 uppercase tracking-widest">
                    Open for Projects
                </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black mb-4 leading-[0.9] tracking-tight text-white dark:text-neutral-900 drop-shadow-sm">
                {t('heroTitle').split('Semua Ceritamu')[0] || t('heroTitle')}
                <br/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 dark:from-indigo-600 dark:to-cyan-600">
                    {t('heroTitle').includes('Semua Ceritamu') ? 'Semua Ceritamu.' : t('heroTitle').split('Semua Ceritamu')[1] || 'Your Stories.'}
                </span>
            </h1>
            
            <p className="text-gray-300 dark:text-gray-600 text-sm md:text-base font-medium mb-8 leading-relaxed max-w-md border-l-4 border-indigo-500 pl-4">
                {t('heroDesc')}
            </p>
            
            {/* BUTTONS: HYBRID POP STYLE */}
            <div className="flex flex-row gap-4">
                <button 
                    onClick={() => onNavigate('catalog')}
                    className="bg-white text-indigo-950 text-xs md:text-sm font-black py-3.5 px-6 rounded-xl border-b-4 border-gray-300 hover:border-indigo-300 hover:text-indigo-600 active:border-b-0 active:translate-y-1 transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                    {t('seeExamples')} <ArrowRight size={16} strokeWidth={3} />
                </button>
                
                <button 
                    onClick={() => onNavigate('pricing')}
                    className="bg-indigo-600 text-white text-xs md:text-sm font-black py-3.5 px-6 rounded-xl border-b-4 border-indigo-800 hover:bg-indigo-500 active:border-b-0 active:translate-y-1 transition-all shadow-lg shadow-indigo-900/20"
                >
                    {t('startBuilding')}
                </button>
            </div>
        </div>
      </section>

      {/* --- EDUKASI: WEB VS PDF --- */}
      <section className="px-2">
        {/* MIKI: Card Style - Border tipis keliling, TAPI border bawah tebal (Color Match) */}
        {/* Border bawah kuning mengikuti warna icon Zap */}
        <div className="bg-ash-surface dark:bg-white rounded-2xl border border-white/5 dark:border-gray-100 border-b-4 border-b-yellow-400 p-6 relative overflow-hidden group shadow-lg">
            
            <div className="absolute top-0 right-0 p-6 opacity-5 dark:opacity-10 text-white dark:text-black rotate-12 transition-transform group-hover:rotate-0">
                <Monitor size={120} />
            </div>
            
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 relative z-10 text-ash-text dark:text-black">
                <Zap size={24} className="text-yellow-400 fill-yellow-400" />
                {t('whyWebsite')}
            </h2>
            
            <div className="space-y-6 relative z-10">
                <div className="flex gap-4 items-start">
                    {/* Icon Box - Matching Red Border Bottom */}
                    <div className="mt-1 bg-red-500/10 dark:bg-red-50 p-2 rounded-xl border-b-4 border-red-500/30 text-red-500 shrink-0"><FileX size={20} strokeWidth={2.5} /></div>
                    <div>
                        <h3 className="font-bold text-sm text-gray-200 dark:text-black mb-1">{t('pdfProblem')}</h3>
                        <p className="text-xs text-gray-400 dark:text-gray-500 leading-relaxed">
                            {t('pdfDesc')}
                        </p>
                    </div>
                </div>
                
                <div className="w-full h-px bg-white/10 dark:bg-gray-200"></div>

                <div className="flex gap-4 items-start">
                    {/* Icon Box - Matching Green Border Bottom */}
                    <div className="mt-1 bg-green-500/10 dark:bg-green-50 p-2 rounded-xl border-b-4 border-green-500/30 text-green-500 shrink-0"><Globe size={20} strokeWidth={2.5} /></div>
                    <div>
                        <h3 className="font-bold text-sm text-gray-200 dark:text-black mb-1">{t('websiteSolution')}</h3>
                        <p className="text-xs text-gray-400 dark:text-gray-500 leading-relaxed">
                            {t('websiteDesc')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- MANFAAT UMUM --- */}
      <section>
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2 px-2 text-ash-text dark:text-light-text">
          <Sparkles size={24} className="text-purple-400" />
          {t('whatFor')}
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 px-2">
          {/* Card 1 - Border Bawah Indigo */}
          <div className="bg-ash-surface dark:bg-white p-5 rounded-2xl border border-white/5 dark:border-gray-100 border-b-4 border-b-indigo-500 hover:-translate-y-1 transition-transform shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-indigo-500/10 dark:bg-indigo-50 rounded-lg text-indigo-400 dark:text-indigo-600"><User size={18} strokeWidth={2.5} /></div>
              <h3 className="font-bold text-gray-200 dark:text-black text-sm uppercase tracking-wide">{t('digitalArchive')}</h3>
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-500 leading-relaxed">{t('archiveDesc')}</p>
          </div>
          
           {/* Card 2 - Border Bawah Pink */}
           <div className="bg-ash-surface dark:bg-white p-5 rounded-2xl border border-white/5 dark:border-gray-100 border-b-4 border-b-pink-500 hover:-translate-y-1 transition-transform shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-pink-500/10 dark:bg-pink-50 rounded-lg text-pink-400 dark:text-pink-600"><ImageIcon size={18} strokeWidth={2.5} /></div>
              <h3 className="font-bold text-gray-200 dark:text-black text-sm uppercase tracking-wide">{t('personalBranding')}</h3>
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-500 leading-relaxed">{t('brandingDesc')}</p>
          </div>
        </div>
      </section>

      {/* --- PROCESS SECTION --- */}
      <section>
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2 px-2 text-ash-text dark:text-light-text">
            <Settings size={24} className="text-cyan-400" />
            {t('howTo')}
          </h2>

          <div className="space-y-6 relative px-4">
            {/* Garis vertikal timeline */}
            <div className="absolute left-[34px] top-4 bottom-4 w-1 bg-white/5 dark:bg-gray-200 rounded-full"></div>

            {/* Step 1 - Indigo */}
            <div className="relative flex items-center gap-6">
              <div className="z-10 w-12 h-12 shrink-0 rounded-2xl bg-indigo-500 border-b-4 border-indigo-700 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                  <FileText size={20} strokeWidth={2.5} />
              </div>
              <div><h3 className="font-bold text-gray-200 dark:text-black text-sm">1. {t('step1')}</h3><p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{t('step1Desc')}</p></div>
            </div>

            {/* Step 2 - Cyan */}
             <div className="relative flex items-center gap-6">
              <div className="z-10 w-12 h-12 shrink-0 rounded-2xl bg-cyan-500 border-b-4 border-cyan-700 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
                  <Settings size={20} strokeWidth={2.5} />
              </div>
              <div><h3 className="font-bold text-gray-200 dark:text-black text-sm">2. {t('step2')}</h3><p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{t('step2Desc')}</p></div>
            </div>

            {/* Step 3 - Green */}
             <div className="relative flex items-center gap-6">
              <div className="z-10 w-12 h-12 shrink-0 rounded-2xl bg-green-500 border-b-4 border-green-700 flex items-center justify-center text-white shadow-lg shadow-green-500/20">
                  <Globe size={20} strokeWidth={2.5} />
              </div>
              <div><h3 className="font-bold text-gray-200 dark:text-black text-sm">3. {t('step3')}</h3><p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{t('step3Desc')}</p></div>
            </div>
          </div>
      </section>

    </div>
  );
};

export default Home;