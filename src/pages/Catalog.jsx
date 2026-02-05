import React, { useState } from 'react';
import { Flame, Layout, Monitor, Hand, ArrowRight } from 'lucide-react';
import { portfolioItems, specialItems, categoryStyles, USER_INFO } from '../data/data';
import PriceDisplay from '../components/PriceDisplay';
import { useLanguage } from '../contexts/LanguageContext';
import SkeletonImage from '../components/SkeletonImage';

const Catalog = ({ onNavigate, setSelectedTheme }) => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeCardId, setActiveCardId] = useState(null);

  const handleSelectStandard = (item) => {
    setSelectedTheme(item);
    onNavigate('pricing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBuySpecial = (item) => {
    const message = `Halo Fero! Saya mau ambil SPECIAL EDITION: * ${item.title}* (${item.theme}) seharga ${item.price}.\n\nApakah masih available ? `;
    const waLink = `https://wa.me/${USER_INFO.phone}?text=${encodeURIComponent(message)}`;
    window.open(waLink, '_blank');
  };

  const toggleOverlay = (id) => {
    setActiveCardId(activeCardId === id ? null : id);
  };

  const categories = ["All", ...new Set(portfolioItems.map(item => item.category))];

  const filteredStandard = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  const filteredSpecial = activeCategory === 'All'
    ? specialItems
    : specialItems.filter(item => item.category === activeCategory);

  return (
    <div className="space-y-10 pb-12 animate-fade-in overflow-x-hidden">

      {/* --- HEADER --- */}
      <div>
        <h2 className="text-3xl font-black text-ash-text dark:text-light-text mb-2 tracking-tight">
          Gallery{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            Desain
          </span>
        </h2>
        <p className="text-gray-400 dark:text-neutral-500 text-sm font-medium">Geser untuk melihat lebih banyak desain</p>
      </div>

      {/* --- SECTION 1: LIMITED EDITION --- */}
      {filteredSpecial.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4 px-1">
            <Flame size={20} className="text-purple-500 fill-purple-500 animate-pulse" />
            <h3 className="text-sm font-bold text-ash-text dark:text-light-text uppercase tracking-widest">
              {activeCategory === 'All' ? 'Limited / Special Edition' : `Special ${activeCategory}`}
            </h3>
          </div>

          <div className="flex overflow-x-auto gap-5 pb-6 -mx-6 px-6 scrollbar-hide snap-x snap-mandatory">
            {filteredSpecial.map((item) => (
              // MIKI: Default = Dark (Ash), Dark Mode = Light (White)
              <div key={item.id} className="snap-center shrink-0 w-[85vw] sm:w-80 relative bg-ash-surface dark:bg-white rounded-3xl overflow-hidden shadow-xl shadow-black/20 dark:shadow-purple-900/10 flex flex-col group border border-purple-500/20 dark:border-purple-100 hover:border-purple-500/50 transition-all duration-300">

                {/* Badge Limited */}
                <div className="absolute top-3 right-3 bg-purple-600 text-white text-[10px] font-black px-3 py-1.5 rounded-lg border-b-4 border-purple-800 shadow-lg z-20">
                  LIMITED
                </div>

                {/* Media Area - MIKI FIX: Menggunakan object-contain agar video tampil 100% tanpa terpotong */}
                {/* Menambahkan flex center agar jika ada sisa ruang, video tetap di tengah */}
                <div className="h-48 relative bg-black/20 dark:bg-gray-100 flex items-center justify-center">
                  {item.image.endsWith('.mp4') ? (
                    <video src={item.image} autoPlay loop muted playsInline className="w-full h-full object-contain" />
                  ) : (
                    <SkeletonImage
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/5 dark:bg-transparent pointer-events-none"></div>
                </div>

                {/* Content Area */}
                <div className="p-5 flex flex-col flex-1 relative">

                  <div className="mb-3">
                    <div className="text-[10px] font-bold text-purple-400 dark:text-purple-600 mb-1 uppercase tracking-wide">{item.theme}</div>
                    <h3 className="text-2xl font-black text-white dark:text-neutral-900 leading-none">{item.title}</h3>
                  </div>

                  <p className="text-xs text-gray-400 dark:text-gray-500 mb-4 line-clamp-2 leading-relaxed font-medium">{item.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-5 mt-auto">
                    {item.features && item.features.slice(0, 2).map((f, idx) => (
                      <span key={idx} className="px-2 py-1 bg-ash-darker dark:bg-purple-50 text-[9px] font-bold text-purple-300 dark:text-purple-600 rounded-md border border-purple-500/20 dark:border-purple-100">{f}</span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between gap-2 pt-4 border-t border-dashed border-ash-darker dark:border-gray-100">
                    <div className="shrink-0">
                      <PriceDisplay price={item.price} isSpecial={true} size="text-lg" />
                    </div>
                    <button
                      onClick={() => handleBuySpecial(item)}
                      className="bg-purple-600 hover:bg-purple-500 text-white text-xs font-black py-2.5 px-5 rounded-xl border-b-4 border-purple-800 active:border-b-0 active:translate-y-1 transition-all shadow-lg shadow-purple-900/30"
                    >
                      AMBIL INI
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* --- SECTION 2: STANDARD COLLECTION --- */}
      <div>
        <div className="flex items-center justify-between mb-4 px-1">
          <h3 className="text-sm font-bold text-ash-text dark:text-light-text flex items-center gap-2 uppercase tracking-wide">
            <Layout size={18} className="text-indigo-400 dark:text-indigo-600" strokeWidth={2.5} />
            Standard Collection
          </h3>
        </div>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto gap-3 mb-8 scrollbar-hide pb-2 px-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setActiveCardId(null);
              }}
              className={`px-5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border-b-4 
                ${activeCategory === cat
                  ? 'bg-indigo-500 text-white border-indigo-700 shadow-lg shadow-indigo-500/20'
                  : 'bg-ash-darker dark:bg-gray-100 text-gray-400 dark:text-gray-500 border-neutral-700 dark:border-gray-200 hover:bg-neutral-800 dark:hover:bg-gray-200'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* THE SNAP SLIDER CONTAINER */}
        <div className="relative -mx-6 group">

          <div className="flex overflow-x-auto gap-6 px-6 pb-8 snap-x snap-mandatory scrollbar-hide">
            {filteredStandard.length > 0 ? (
              filteredStandard.map((item) => {
                return (
                  <div key={item.id} className="snap-center shrink-0 w-[85vw] sm:w-[350px]">

                    {/* Card Container */}
                    <div className="rounded-3xl bg-ash-surface dark:bg-white overflow-hidden shadow-lg shadow-black/30 dark:shadow-gray-200/50 flex flex-col group border border-ash-darker dark:border-gray-100">

                      {/* IMAGE AREA */}
                      <div className="relative aspect-[4/5] overflow-hidden cursor-pointer bg-ash-darker dark:bg-gray-50" onClick={() => toggleOverlay(item.id)}>

                        {/* Category Badge */}
                        <div className={`absolute top-4 right-4 z-20 px-3 py-1 rounded-lg border-b-4 border-black/30 text-[10px] font-black shadow-sm bg-ash-surface dark:bg-white text-white dark:text-black uppercase tracking-wider`}>
                          {item.category}
                        </div>

                        <SkeletonImage
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />

                        {/* INTERACTIVE OVERLAY */}
                        <div className={`absolute inset-0 bg-neutral-950/95 flex flex-col justify-end p-6 transition-all duration-300
                          ${activeCardId === item.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0'}`}
                        >
                          <h4 className="text-white font-black text-xl mb-2 tracking-tight uppercase">{item.title}</h4>
                          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-6 font-medium">
                            "{item.desc}"
                          </p>

                          <button
                            onClick={(e) => { e.stopPropagation(); handleSelectStandard(item); }}
                            className="w-full py-3.5 bg-white text-indigo-900 text-xs font-black rounded-xl hover:bg-gray-100 transition-all border-b-4 border-gray-400 active:border-b-0 active:translate-y-1 uppercase tracking-widest flex items-center justify-center gap-2"
                          >
                            Pilih Desain Ini <ArrowRight size={14} strokeWidth={3} />
                          </button>
                        </div>
                      </div>

                      {/* FOOTER BAR */}
                      <div className="p-4 bg-ash-surface dark:bg-white border-t border-ash-darker dark:border-gray-100 flex justify-center items-center">
                        <a
                          href={item.demoLink}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-indigo-400 dark:hover:text-indigo-600 transition-colors tracking-widest uppercase group/link"
                        >
                          <Monitor size={16} className="text-gray-600 dark:text-gray-300 group-hover/link:text-indigo-400 dark:group-hover/link:text-indigo-600 transition-colors" strokeWidth={2.5} />
                          <span className="group-hover/link:underline decoration-2 underline-offset-4">See Website</span>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="w-[85vw] text-center py-20 bg-ash-surface dark:bg-gray-50 rounded-3xl border border-dashed border-ash-darker dark:border-gray-300 mx-auto">
                <p className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-[0.2em]">Desain belum tersedia</p>
              </div>
            )}
          </div>

          {/* SCROLL HINT */}
          {filteredStandard.length > 0 && (
            <div className="mt-4 flex justify-center opacity-60">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-ash-darker dark:border-gray-200 bg-ash-surface dark:bg-white animate-bounce">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-400">
                  Geser Kanan
                </span>
                <ArrowRight size={12} className="text-gray-400" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Catalog;