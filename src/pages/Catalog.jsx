import React, { useState } from 'react';
import { ExternalLink, Flame, Layout, Monitor } from 'lucide-react';
import { portfolioItems, specialItems, USER_INFO } from '../data/data';

const Catalog = ({ onNavigate, setSelectedTheme }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  // STATE MOBILE: Melacak card mana yang overlay-nya aktif
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

  // Logic Toggle: Tap sekali buka, Tap lagi tutup
  const toggleOverlay = (id) => {
    if (activeCardId === id) {
      setActiveCardId(null);
    } else {
      setActiveCardId(id);
    }
  };

  const categories = ["All", ...new Set(portfolioItems.map(item => item.category))];
  
  const filteredStandard = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const filteredSpecial = activeCategory === 'All'
    ? specialItems
    : specialItems.filter(item => item.category === activeCategory);

  return (
    <div className="space-y-8 pb-8 animate-fade-in">
      
      {/* HEADER */}
      <div>
        <h2 className="text-2xl font-bold text-white">
          Gallery{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-cyan-300">
            Desain
          </span>
        </h2>
        <p className="text-neutral-400 text-xs">Sentuh gambar untuk melihat detail.</p>
      </div>

      {/* --- SECTION 1: SPECIAL DROP (AMAN) --- */}
      {filteredSpecial.length > 0 && (
        <div>
            <div className="flex items-center gap-2 mb-4 px-1">
            <Flame size={18} className="text-purple-500 fill-purple-500 animate-pulse" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                {activeCategory === 'All' ? 'Limited / Special Edition' : `Special ${activeCategory}`}
            </h3>
            </div>

            <div className="flex overflow-x-auto gap-4 pb-4 -mx-6 px-6 scrollbar-hide snap-x snap-mandatory">
            {filteredSpecial.map((item) => (
                <div key={item.id} className="snap-center shrink-0 w-[85vw] sm:w-80 relative bg-neutral-900 rounded-2xl border border-purple-500/50 overflow-hidden shadow-[0_0_15px_rgba(168,85,247,0.15)] flex flex-col">
                <div className="absolute top-3 right-3 bg-purple-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg z-20">
                    LIMITED
                </div>
                <div className="h-40 relative">
                    {item.image.endsWith('.mp4') ? (
                        <video src={item.image} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                    ) : (
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent"></div>
                </div>
                <div className="p-4 flex flex-col flex-1">
                    <div className="text-[10px] font-bold text-purple-400 mb-1">{item.theme}</div>
                    <h3 className="text-lg font-bold text-white mb-1 leading-tight">{item.title}</h3>
                    <p className="text-[10px] text-neutral-400 mb-3 line-clamp-2 leading-relaxed">{item.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
                        {item.features.slice(0, 2).map((f, idx) => (
                        <span key={idx} className="px-1.5 py-0.5 bg-neutral-800 text-[9px] text-neutral-300 rounded border border-neutral-700">{f}</span>
                        ))}
                    </div>
                    <div className="flex items-center justify-between gap-2">
                        <span className="font-bold text-white text-sm">{item.price}</span>
                        <button 
                        onClick={() => handleBuySpecial(item)} 
                        className="bg-purple-600 hover:bg-purple-500 text-white text-[10px] font-bold py-2 px-4 rounded-lg shadow-lg shadow-purple-900/20"
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

      {/* --- SECTION 2: STANDARD COLLECTION (BUG FIX & ALIGNMENT UPDATE) --- */}
      <div>
        <div className="flex items-center justify-between mb-4 px-1">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <Layout size={18} className="text-indigo-400" />
            Standard Collection
          </h3>
        </div>
        
        {/* Category Tabs */}
        <div className="flex overflow-x-auto gap-2 mb-6 scrollbar-hide pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-[10px] font-bold whitespace-nowrap transition-all border
                ${activeCategory === cat 
                  ? 'bg-white text-black border-white' 
                  : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:border-neutral-600'}
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* MASONRY GRID */}
        <div className="columns-2 gap-4 space-y-4 px-1">
          {filteredStandard.map((item) => (
            <div key={item.id} className="break-inside-avoid">
              
              <div className="rounded-xl border border-neutral-800 bg-neutral-900 overflow-hidden shadow-sm transition-all hover:border-neutral-600">
                
                {/* INTERACTIVE IMAGE AREA */}
                <div 
                    className="relative group cursor-pointer"
                    onClick={() => toggleOverlay(item.id)}
                >
                    {/* Gambar */}
                    {item.image ? (
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-auto object-cover block" 
                        />
                    ) : (
                        <div className={`w-full h-32 bg-gradient-to-br ${item.color}`}></div>
                    )}

                    {/* OVERLAY (PERBAIKAN BUG & ALIGNMENT) */}
                    <div 
                        className={`absolute inset-0 bg-neutral-950/90 flex flex-col justify-center p-5 transition-all duration-300
                        ${activeCardId === item.id 
                            ? 'opacity-100 pointer-events-auto' // Mobile Active: Kelihatan & BISA DIKLIK
                            : 'opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto'} // Default: Invisible & HANTU (Gak bisa diklik)
                        `}
                    >
                        {/* Wrapper Konten (Items Start = Rata Kiri) */}
                        <div className="flex flex-col items-start w-full">
                            <span className="text-[9px] font-bold text-indigo-400 uppercase tracking-widest mb-1.5 text-left">
                              {item.category}
                            </span>
                            
                            <h3 className="font-bold text-white text-sm mb-3 text-left w-full">
                              {item.title}
                            </h3>
                            
                            {/* Text Justify (Rata Kanan Kiri) */}
                            <p className="text-[10px] text-neutral-300 mb-5 leading-relaxed text-justify w-full line-clamp-6">
                              {item.desc}
                            </p>
                            
                            {/* Tombol Full Width */}
                            <button 
                              onClick={(e) => {
                                e.stopPropagation(); // Mencegah toggle gambar ketutup
                                handleSelectStandard(item);
                              }}
                              className="w-full py-2 bg-indigo-600 text-white text-[10px] font-bold rounded-lg shadow-lg hover:bg-indigo-500 transition-colors"
                            >
                              Pilih Desain
                            </button>
                        </div>
                    </div>
                </div>

                {/* PREVIEW BAR */}
                <div className="bg-neutral-950 py-2.5 px-3 border-t border-neutral-800 flex justify-center">
                    <a 
                      href={item.demoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-[9px] font-semibold text-neutral-500 hover:text-indigo-400 transition-colors uppercase tracking-wide"
                    >
                      <Monitor size={10} /> Preview Live
                    </a>
                </div>

              </div>
            </div>
          ))}
        </div>
        
        {/* Empty State */}
        {filteredStandard.length === 0 && filteredSpecial.length === 0 && (
          <div className="text-center py-12 bg-neutral-900/30 rounded-xl border border-dashed border-neutral-800">
            <p className="text-xs text-neutral-500">Belum ada desain di kategori ini.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Catalog;