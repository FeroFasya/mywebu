import React, { useState, useEffect } from 'react';
import { CheckCircle, MessageCircle, X, Crown, ArrowRight } from 'lucide-react';
import { pricingTiers, portfolioItems, USER_INFO } from '../data/data';

const Pricing = ({ selectedTheme }) => { // Menerima props tema dari Catalog
  const [showModal, setShowModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  
  // State lokal untuk tema yang dipilih DI DALAM MODAL
  const [localTheme, setLocalTheme] = useState(null);

  // Efek: Kalau user datang dari Catalog membawa tema, set ke localTheme
  useEffect(() => {
    if (selectedTheme) {
      setLocalTheme(selectedTheme);
    }
  }, [selectedTheme]);

  // Handle Buka Modal
  const handleOrderClick = (pkg) => {
    setSelectedPackage(pkg);
    setShowModal(true);
  };

  // Logic Link WA
  const generateWALink = () => {
    if (!selectedPackage) return "#";
    
    // 1. Logic Paket Exclusive (Langsung Konsul)
    if (selectedPackage.id === 'exclusive') {
       const message = `Halo Fero! Saya tertarik dengan paket *${selectedPackage.name}* (Budget sekitar ${selectedPackage.price}). \n\nSaya butuh website custom. Bisa diskusi dulu?`;
       return `https://wa.me/${USER_INFO.phone}?text=${encodeURIComponent(message)}`;
    }

    // 2. Logic Paket Biasa (Cek Desain)
    const themeName = localTheme ? localTheme.title : "Belum Pilih (Mau Konsultasi Dulu)";
    const message = `Halo Fero! Saya mau ambil ${selectedPackage.name} seharga ${selectedPackage.price}. \n\nBase desain yang saya suka: *${themeName}*.\n\nBisa dibantu prosesnya?`;
    
    return `https://wa.me/${USER_INFO.phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="space-y-8 pb-8 animate-fade-in">
      
      <div>
        <h2 className="text-2xl font-bold mb-2">Investasi Terbaik</h2>
        <p className="text-neutral-400 text-sm">Pilih paket sesuai kebutuhanmu sekarang.</p>
      </div>

      {/* --- PRICING LIST --- */}
      <div className="space-y-6">
        {pricingTiers.map((tier) => (
          <div 
            key={tier.id} 
            className={`relative bg-neutral-900 p-6 rounded-2xl border transition-all duration-300
              ${tier.borderColor} 
              ${tier.highlight ? 'bg-gradient-to-b from-neutral-800 to-neutral-900 shadow-lg shadow-indigo-500/10 scale-[1.02]' : ''}
              ${tier.isSpecial ? 'bg-gradient-to-br from-neutral-900 to-amber-950/30 border-amber-500/50' : ''}
            `}
          >
            
            {/* Badges */}
            {tier.highlight && <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl shadow-md">POPULAR</div>}
            {tier.isSpecial && <div className="absolute top-0 right-0 bg-amber-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl flex items-center gap-1 shadow-md"><Crown size={10} /> SULTAN ONLY</div>}
            
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className={`text-lg font-bold ${tier.isSpecial ? 'text-amber-400' : 'text-white'}`}>{tier.name}</h3>
                <div className="text-xl font-bold text-white mt-1">{tier.price}</div>
                
                {/* MIKI: Restore Best For Badge */}
                {tier.bestFor && (
                    <div className="mt-2 inline-block bg-neutral-800/80 px-2 py-1 rounded text-[10px] text-neutral-400 font-medium border border-neutral-700/50">
                        Cocok buat: <span className={tier.isSpecial ? "text-amber-200" : "text-white"}>{tier.bestFor}</span>
                    </div>
                )}
              </div>
              <div className={`p-2 rounded-lg ${tier.isSpecial ? 'bg-amber-500/10 text-amber-400' : 'bg-neutral-800'}`}>{tier.icon}</div>
            </div>
            
            {/* Description */}
            <p className="text-xs text-neutral-400 mb-4 italic border-l-2 border-neutral-700 pl-3">"{tier.desc}"</p>

            <ul className="space-y-3 mb-6">
              {tier.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-neutral-300">
                    <CheckCircle size={16} className={`shrink-0 mt-0.5 ${tier.isSpecial ? 'text-amber-500' : 'text-neutral-500'}`} />
                    <span className="leading-snug">{feat}</span>
                </li>
              ))}
            </ul>
            
            <button 
              onClick={() => handleOrderClick(tier)}
              className={`w-full font-bold py-3 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2
                ${tier.isSpecial 
                  ? 'bg-amber-600 hover:bg-amber-500 text-white shadow-lg shadow-amber-600/20' 
                  : 'bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700 hover:border-neutral-500'}
              `}
            >
              {tier.isSpecial ? 'Konsultasi VIP' : `Pilih ${tier.name}`} <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </div>

      {/* --- MODAL POPUP --- */}
      {showModal && selectedPackage && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowModal(false)}></div>
          
          <div className="relative bg-neutral-900 border-t sm:border border-neutral-700 w-full max-w-lg sm:rounded-2xl rounded-t-3xl p-6 shadow-2xl animate-fade-in-up max-h-[90vh] overflow-y-auto">
            
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-neutral-500 hover:text-white bg-neutral-800 rounded-full p-1">
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div className="mb-6 border-b border-neutral-800 pb-4">
              <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-1">Konfirmasi Pesanan</div>
              <h2 className="text-2xl font-bold text-white">{selectedPackage.name}</h2>
              <p className={`text-xl font-bold ${selectedPackage.isSpecial ? 'text-amber-400' : 'text-neutral-300'}`}>{selectedPackage.price}</p>
            </div>

            {/* --- LOGIC PILIHAN DESAIN DI DALAM MODAL --- */}
            {selectedPackage.id === 'exclusive' ? (
                // Tampilan Khusus Paket Exclusive (Tanpa Pilihan Desain)
                <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-xl text-center mb-6">
                    <Crown size={32} className="text-amber-400 mx-auto mb-2" />
                    <p className="text-sm text-amber-200 font-bold mb-2">Paket Sultan (Custom)</p>
                    <p className="text-xs text-neutral-400">
                        Untuk paket ini, kita perlu diskusi detail keinginanmu dulu agar harganya sesuai dengan kerumitan fitur.
                    </p>
                </div>
            ) : (
                // Tampilan Paket Biasa (Ada Grid Pilihan Desain)
                <div className="mb-6">
                    <h3 className="text-sm font-bold text-neutral-300 mb-3 flex items-center gap-2">
                         Pilih Base Desain (Wajib)
                    </h3>
                    
                    {/* Grid Pilihan */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                        {/* Opsi 1: Konsultasi / Belum Tau */}
                        <div 
                           onClick={() => setLocalTheme(null)}
                           className={`cursor-pointer rounded-xl p-3 border-2 flex flex-col items-center justify-center gap-2 text-center h-24 transition-all
                             ${localTheme === null ? 'border-yellow-500 bg-yellow-500/10' : 'border-neutral-800 bg-neutral-800 hover:border-neutral-600'}
                           `}
                        >
                           <MessageCircle size={24} className={localTheme === null ? 'text-yellow-400' : 'text-neutral-500'} />
                           <span className="text-[10px] font-bold text-neutral-300 leading-tight">Belum Tahu /<br/>Konsultasi Dulu</span>
                           {localTheme === null && <CheckCircle size={14} className="text-yellow-500" />}
                        </div>

                        {/* Opsi 2-dst: Loop dari Portfolio Items */}
                        {portfolioItems.map((item) => (
                           <div 
                              key={item.id}
                              onClick={() => setLocalTheme(item)}
                              className={`cursor-pointer relative rounded-xl overflow-hidden border-2 h-24 group transition-all
                                ${localTheme?.id === item.id ? 'border-green-500 ring-2 ring-green-500/20' : 'border-neutral-800 hover:border-neutral-600'}
                              `}
                           >
                              {item.image ? (
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                              ) : (
                                <div className={`w-full h-full bg-gradient-to-br ${item.color}`}></div>
                              )}
                              
                              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                                  <span className="text-[10px] font-bold text-white text-center px-1">{item.title}</span>
                              </div>

                              {localTheme?.id === item.id && (
                                <div className="absolute top-1 right-1 bg-green-500 rounded-full p-0.5">
                                   <CheckCircle size={12} className="text-neutral-900" fill="currentColor" />
                                </div>
                              )}
                           </div>
                        ))}
                    </div>

                    {/* Feedback Text */}
                    <p className="text-[10px] text-center italic text-neutral-500">
                        {localTheme 
                          ? `Desain terpilih: ${localTheme.title}` 
                          : "Kamu memilih untuk diskusi/konsultasi dulu."}
                    </p>
                    <p className="text-[10px] text-center italic text-neutral-500">Setiap desain boleh memilih pilihan warna lain, konsul di chat ya!</p>
                </div>
            )}

            {/* Tombol Action */}
            <a 
              href={generateWALink()}
              target="_blank" 
              rel="noreferrer"
              className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg
                ${selectedPackage.id === 'exclusive' 
                   ? 'bg-amber-600 hover:bg-amber-500 text-white shadow-amber-900/20' 
                   : 'bg-green-600 hover:bg-green-500 text-white shadow-green-900/20'}
              `}
            >
              Lanjut ke WhatsApp <MessageCircle size={20} />
            </a>
            <p className="text-center text-[10px] text-neutral-500 mt-3">
              Kamu akan diarahkan ke WhatsApp untuk detail pembayaran.
            </p>
          </div>
        </div>
      )}

    </div>
  );
};

export default Pricing;