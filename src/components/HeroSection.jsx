import React from 'react';
import { ArrowRight, Monitor, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const HeroSection = ({ onNavigate }) => {
  const { t } = useLanguage();

  // Removed complex split logic in favor of separate translation keys
  // This is much safer and cleaner

  return (
    <section className="relative w-[calc(100%+3rem)] -mx-6 -mt-8 h-[500px] md:h-[550px] overflow-hidden flex items-end animate-fade-in group">

      {/* 1. BACKGROUND IMAGE (Zoom Effect on Hover) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/banner5.png"
          alt="Hero Banner"
          width="1920" // Explicit width/height to reduce CLS
          height="1080"
          fetchPriority="high" // Performance optimization
          decoding="async"
          className="w-full h-full object-cover object-center transition-transform duration-[10s] ease-in-out group-hover:scale-110"
        />
      </div>

      {/* 2. OVERLAY (Gradient) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-ash-surface via-ash-surface/60 to-transparent dark:from-white dark:via-white/70 dark:to-transparent"></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-ash-surface/90 via-transparent to-transparent dark:from-white/90 dark:to-transparent"></div>

      {/* 3. FLOATING DECORATIONS */}
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

        {/* Tagline */}
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
          {t('heroTitle')}
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 dark:from-indigo-600 dark:to-cyan-600">
            {t('heroTitleHighlight')}
          </span>
        </h1>

        <p className="text-gray-300 dark:text-gray-600 text-sm md:text-base font-medium mb-8 leading-relaxed max-w-md border-l-4 border-indigo-500 pl-4">
          {t('heroDesc')}
        </p>

        {/* BUTTONS */}
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
  );
};

export default HeroSection;
