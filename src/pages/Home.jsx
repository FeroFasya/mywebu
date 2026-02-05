import React from 'react';
import { ArrowRight, User, Zap, FileX, Image as ImageIcon, Sparkles, Settings, FileText, Globe, Monitor, MousePointer2, Share2 } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import { useLanguage } from '../contexts/LanguageContext';

const Home = ({ onNavigate }) => {
  const { t } = useLanguage();

  return (
    <div className="space-y-12 pb-8">

      {/* --- HERO SECTION --- */}
      {/* MIKI: Refactored into HeroSection component */}
      <HeroSection onNavigate={onNavigate} />


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