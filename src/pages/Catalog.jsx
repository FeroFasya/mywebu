import React, { useState } from 'react';
import { Flame, Layout, Monitor } from 'lucide-react';
import { portfolioItems, specialItems, USER_INFO, categoryStyles } from '../data/data';
import { useLanguage } from '../contexts/LanguageContext';
import SkeletonImage from '../components/SkeletonImage';

const Catalog = ({ onNavigate, setSelectedTheme }) => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeCardId, setActiveCardId] = useState(null);

  const handleSelectStandard = (item) => {
    setSelectedTheme(item);
    onNavigate('pricing');
  };

  const handleBuySpecial = (item) => {
    const message = `Halo Fero! Saya mau ambil SPECIAL EDITION: *${item.title}* (${item.theme}) seharga ${item.price}. \n\nApakah masih available?`;
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
        <h2 className="text-2xl font-bold text-ash-text dark:text-light-text">
          Gallery{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-cyan-300">
            Desain
          </span>
        </h2>
        <p className="text-gray-400 dark:text-neutral-600 text-xs">Sentuh gambar untuk melihat detail.</p>
      </div>

      {/* --- SECTION 1: LIMITED EDITION --- */}
      {filteredSpecial.length > 0 && (
        <div>
            <div className="flex items-center gap-2 mb-4 px-1">
            <Flame size={18} className="text-purple-500 fill-purple-500 animate-pulse" />
            <h3 className="text-sm font-bold text-ash-text dark:text-light-text uppercase tracking-wider">
                {activeCategory === 'All' ? 'Limited / Special Edition' : `Special ${activeCategory}`}
            </h3>
            </div>

            <div className="flex overflow-x-auto gap-4 pb-4 -mx-6 px-6 scrollbar-hide snap-x snap-mandatory">
            {filteredSpecial.map((item) => (
                <div key={item.id} className="snap-center shrink-0 w-[85vw] sm:w-80 relative bg-ash-surface dark:bg-light-surface rounded-2xl border border-purple-500/30 dark:border-purple-400/30 overflow-hidden shadow-[0_0_15px_rgba(168,85,247,0.1)] dark:shadow-none flex flex-col group hover:border-purple-500/60 transition-colors">
                <div className="absolute top-3 right-3 bg-purple-600 dark:bg-purple-700 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg z-20">
                    LIMITED
                </div>
                <div className="h-40 relative">
                    {item.image.endsWith('.mp4') ? (
                        <video src={item.image} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                    ) : (
                        <SkeletonImage 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full"
                        />
                    )}
                    {/* MIKI: Gradient disesuaikan ke ash-surface supaya nyatu */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ash-surface dark:from-light-surface via-transparent to-transparent"></div>
                </div>
                <div className="p-4 flex flex-col flex-1">
                    <div className="text-[10px] font-bold text-purple-400 dark:text-purple-600 mb-1">{item.theme}</div>
                    <h3 className="text-lg font-bold text-ash-text dark:text-light-text mb-1 leading-tight">{item.title}</h3>
                    <p className="text-[10px] text-gray-400 dark:text-neutral-600 mb-3 line-clamp-2 leading-relaxed">{item.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
                        {item.features && item.features.slice(0, 2).map((f, idx) => (
                        <span key={idx} className="px-1.5 py-0.5 bg-ash-darker dark:bg-light-border text-[9px] text-gray-300 dark:text-neutral-700 rounded border border-ash-darker dark:border-neutral-300">{f}</span>
                        ))}
                    </div>
                    <div className="flex items-center justify-between gap-2">
                        <span className="font-bold text-white dark:text-light-text text-sm">{item.price}</span>
                        <button 
                        onClick={() => handleBuySpecial(item)} 
                        className="bg-purple-600 dark:bg-purple-700 hover:bg-purple-500 dark:hover:bg-purple-600 text-white text-[10px] font-bold py-2 px-4 rounded-lg shadow-lg shadow-purple-900/20 active:scale-95 transition-transform"
                        >
                        Ambil ini
                        </button>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
      )}

      {/* --- SECTION 2: STANDARD COLLECTION (PREMIUM REFRESH) --- */}
      <div>
        <div className="flex items-center justify-between mb-4 px-1">
          <h3 className="text-sm font-bold text-ash-text dark:text-light-text flex items-center gap-2">
            <Layout size={18} className="text-indigo-400" />
            Standard Collection
          </h3>
        </div>
        
        {/* Category Tabs */}
        <div className="flex overflow-x-auto gap-2 mb-6 scrollbar-hide pb-2 px-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setActiveCardId(null); 
              }}
              className={`px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all border
                ${activeCategory === cat 
                  ? 'bg-ash-text dark:bg-light-text text-ash-darker dark:text-neutral-950 border-ash-text dark:border-light-text shadow-lg shadow-white/5 scale-105' 
                  : 'bg-ash-darker dark:bg-light-surface text-gray-500 dark:text-neutral-600 border-ash-darker dark:border-light-border hover:border-neutral-600 dark:hover:border-neutral-400'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* THE SNAP SLIDER CONTAINER */}
        <div className="relative -mx-6">
          <div className="flex overflow-x-auto gap-4 px-6 pb-4 snap-x snap-mandatory scrollbar-hide">
            {filteredStandard.length > 0 ? (
              filteredStandard.map((item) => {
                const styleClass = categoryStyles[item.category] || categoryStyles.default;
                
                return (
                  <div key={item.id} className="snap-center shrink-0 w-[85vw] sm:w-[400px]">
                    <div className="rounded-3xl border border-ash-darker dark:border-light-border bg-gradient-to-br from-ash-surface/60 dark:from-light-surface to-ash-darker/80 dark:to-light-surface overflow-hidden shadow-xl dark:shadow-none flex flex-col group backdrop-blur-sm transition-all hover:border-indigo-500/40 dark:hover:border-indigo-400 hover:shadow-2xl hover:shadow-indigo-500/5">
                      
                      {/* IMAGE AREA (Focus 4:5 Aspect) */}
                      <div className="relative aspect-[4/5] overflow-hidden cursor-pointer" onClick={() => toggleOverlay(item.id)}>
                        {/* Legend Label */}
                        <div className={`absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full border text-xs font-black backdrop-blur-xl shadow-lg uppercase ${styleClass}`}>
                          <span className="opacity-80">✦</span> {item.category}
                        </div>

                       <SkeletonImage 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full"
                          loading="lazy"  // <--- TAMBAHKAN BARIS AJAIB INI
                        />
                                                
                        {/* INTERACTIVE OVERLAY */}
                        {/* MIKI: Gradient diubah ke ash-darker */}
                        <div className={`absolute inset-0 bg-gradient-to-t from-ash-darker dark:from-light-bg via-ash-darker/80 dark:via-light-surface/70 to-transparent flex flex-col justify-end p-6 transition-all duration-500
                          ${activeCardId === item.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0'}`}
                        >
                          <h4 className="text-white dark:text-light-text font-black text-xl mb-2 tracking-tight uppercase">{item.title}</h4>
                          <p className="text-gray-300 dark:text-neutral-700 text-sm leading-relaxed line-clamp-4 mb-6 font-medium opacity-90">
                            "{item.desc}"
                          </p>
                          <button 
                            onClick={(e) => { e.stopPropagation(); handleSelectStandard(item); }}
                            className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-indigo-500 dark:from-indigo-600 dark:to-indigo-700 text-white dark:text-white text-xs font-black rounded-xl hover:from-indigo-500 hover:to-indigo-400 dark:hover:from-indigo-500 dark:hover:to-indigo-600 transition-all active:scale-95 shadow-lg shadow-indigo-900/40 uppercase tracking-widest"
                          >
                            Pilih Desain
                          </button>
                        </div>
                      </div>

                      {/* PREVIEW BAR */}
                      <div className="p-4 bg-ash-darker dark:bg-light-surface border-t border-ash-darker dark:border-light-border flex justify-center items-center">
                        <a 
                          href={item.demoLink}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 text-xs font-bold text-gray-400 dark:text-neutral-600 hover:text-white dark:hover:text-neutral-800 transition-colors tracking-widest uppercase"
                        >
                          <Monitor size={16} className="text-indigo-400" /> Buka Website
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              /* Empty State */
              <div className="w-[85vw] text-center py-20 bg-ash-surface dark:bg-light-surface rounded-3xl border border-dashed border-ash-darker dark:border-light-border mx-auto">
                <p className="text-xs text-gray-500 dark:text-neutral-600 font-bold uppercase tracking-[0.2em]">Desain belum tersedia</p>
              </div>
            )}
          </div>

          {/* SCROLL HINT */}
          {filteredStandard.length > 0 && (
            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500 dark:text-neutral-600 font-medium tracking-wider uppercase">
                ← Geser ke samping untuk lihat desain lainnya →
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Catalog;