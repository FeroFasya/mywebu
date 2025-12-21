import React, { useState, useEffect } from 'react';
import { CheckCircle, MessageCircle, X, Crown, ArrowRight, Sparkles } from 'lucide-react';
import { pricingTiers, portfolioItems, USER_INFO } from '../data/data';

const Pricing = ({ selectedTheme }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [localTheme, setLocalTheme] = useState(null);

  useEffect(() => {
    if (selectedTheme) {
      setLocalTheme(selectedTheme);
    }
  }, [selectedTheme]);

  const handleOrderClick = (pkg) => {
    setSelectedPackage(pkg);
    setShowModal(true);
  };

  const generateWALink = () => {
    if (!selectedPackage) return "#";
    
    if (selectedPackage.id === 'exclusive') {
       const message = `Halo Fero! Saya tertarik dengan paket *${selectedPackage.name}* (Budget sekitar ${selectedPackage.price}). \n\nSaya butuh website custom. Bisa diskusi dulu?`;
       return `https://wa.me/${USER_INFO.phone}?text=${encodeURIComponent(message)}`;
    }

    const themeName = localTheme ? localTheme.title : "Belum Pilih (Mau Konsultasi Dulu)";
    const message = `Halo Fero! Saya mau ambil ${selectedPackage.name} seharga ${selectedPackage.price}. \n\nBase desain yang saya suka: *${themeName}*.\n\nBisa dibantu prosesnya?`;
    
    return `https://wa.me/${USER_INFO.phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="space-y-8 pb-8 animate-fade-in">
      
      {/* Header Section */}
       <div>
         <h2 className="text-2xl font-bold text-white">
          Invesasi{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-cyan-300">
            Terbaik
          </span>
        </h2>

          <p className="text-neutral-400 text-xs">Pilih paket sesuai kebutuhanmu sekarang.</p>
        </div>
      

      {/* Pricing Cards */}
      <div className="space-y-6">
        {pricingTiers.map((tier) => (
          <div 
            key={tier.id} 
            className={`relative bg-neutral-900 p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl
              ${tier.borderColor} 
              ${tier.highlight ? 'bg-gradient-to-b from-neutral-800 to-neutral-900 shadow-lg shadow-indigo-500/10 scale-[1.02]' : ''}
              ${tier.isSpecial ? 'bg-gradient-to-br from-neutral-900 to-amber-950/30 border-amber-500/50 shadow-lg shadow-amber-500/10' : ''}
            `}
          >
            
            {/* Badges */}
            {tier.highlight && (
              <div className="absolute -top-3 right-4 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white text-[10px] font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                <Sparkles size={10} /> POPULAR
              </div>
            )}
            {tier.isSpecial && (
              <div className="absolute -top-3 right-4 bg-gradient-to-r from-amber-600 to-amber-500 text-white text-[10px] font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                <Crown size={10} /> SULTAN ONLY
              </div>
            )}
            
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className={`text-xl font-bold ${tier.isSpecial ? 'text-amber-400' : 'text-white'}`}>
                  {tier.name}
                </h3>
                <div className={`text-2xl font-bold mt-1 ${tier.isSpecial ? 'text-amber-300' : 'text-white'}`}>
                  {tier.price}
                </div>
                
                {tier.bestFor && (
                  <div className="mt-3 inline-block bg-neutral-800/80 px-3 py-1.5 rounded-lg text-[11px] text-neutral-400 font-medium border border-neutral-700/50">
                    Cocok buat: <span className={tier.isSpecial ? "text-amber-200 font-semibold" : "text-white font-semibold"}>{tier.bestFor}</span>
                  </div>
                )}
              </div>
              <div className={`p-3 rounded-xl ${tier.isSpecial ? 'bg-amber-500/10 text-amber-400' : 'bg-neutral-800 text-indigo-400'}`}>
                {tier.icon}
              </div>
            </div>
            
            {/* Description */}
            <p className="text-xs text-neutral-400 mb-5 italic border-l-2 border-neutral-700 pl-4 py-1">
              "{tier.desc}"
            </p>

            {/* Features List */}
            <ul className="space-y-3 mb-6">
              {tier.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-neutral-300">
                  <CheckCircle 
                    size={16} 
                    className={`shrink-0 mt-0.5 ${tier.isSpecial ? 'text-amber-500' : tier.highlight ? 'text-indigo-500' : 'text-neutral-500'}`} 
                  />
                  <span className="leading-snug">{feat}</span>
                </li>
              ))}
            </ul>
            
            {/* CTA Button */}
            <button 
              onClick={() => handleOrderClick(tier)}
              className={`w-full font-bold py-3.5 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 group
                ${tier.isSpecial 
                  ? 'bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white shadow-lg shadow-amber-600/30' 
                  : tier.highlight
                  ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700 hover:border-neutral-500'}
              `}
            >
              {tier.isSpecial ? 'Konsultasi VIP' : `Pilih ${tier.name}`} 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        ))}
      </div>
      
        
     
       {/* Elegant Divider */}
      <div className="flex items-center py-4">
        <div className="h-px flex-1 bg-neutral-800"></div>
            <span className="px-4 text-xs text-neutral-500 font-medium">ATAU</span>
            <div className="h-px flex-1 bg-neutral-800"></div>
      </div>
       {/* Footer Link */}
      <div className="bg-neutral-950 p-5 rounded-2xl border border-dashed border-neutral-700 hover:border-neutral-500 transition-colors">
         <div className="flex justify-between items-start mb-3"><div><h3 className="text-base font-bold text-white">Beli Template Saja</h3><p className="text-xs text-neutral-400">Dapat Source Code, edit sendiri.</p></div><span className="text-[10px] font-bold bg-green-900/30 text-green-400 px-2 py-1 rounded border border-green-900">Hemat</span></div>
          <a href="https://lynk.id/fasuya" target="_blank" rel="noreferrer" className="w-full block text-center text-neutral-300 hover:text-white text-sm font-medium py-2 rounded-lg transition-colors hover:bg-neutral-900">Beli via Lynk.id (Start 50rb) &rarr;</a>
      </div>


      {/* Modal Popup */}
      {showModal && selectedPackage && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:p-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
            onClick={() => setShowModal(false)}
          ></div>
          
          <div className="relative bg-neutral-900 border-t sm:border border-neutral-700 w-full max-w-lg sm:rounded-2xl rounded-t-3xl p-6 shadow-2xl animate-fade-in-up max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button 
              onClick={() => setShowModal(false)} 
              className="absolute top-4 right-4 text-neutral-500 hover:text-white bg-neutral-800 hover:bg-neutral-700 rounded-full p-1.5 transition-colors"
            >
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div className="mb-6 border-b border-neutral-800 pb-4">
              <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2">
                Konfirmasi Pesanan
              </div>
              <h2 className="text-2xl font-bold text-white mb-1">
                {selectedPackage.name}
              </h2>
              <p className={`text-xl font-bold ${selectedPackage.isSpecial ? 'text-amber-400' : 'text-neutral-300'}`}>
                {selectedPackage.price}
              </p>
            </div>

            {/* Design Selection Logic */}
            {selectedPackage.id === 'exclusive' ? (
              // Exclusive Package Display
              <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/30 p-5 rounded-xl text-center mb-6">
                <Crown size={32} className="text-amber-400 mx-auto mb-3" />
                <p className="text-sm text-amber-200 font-bold mb-2">
                  Paket Sultan (Custom)
                </p>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Untuk paket ini, kita perlu diskusi detail keinginanmu dulu agar harganya sesuai dengan kerumitan fitur.
                </p>
              </div>
            ) : (
              // Regular Package with Design Selection
              <div className="mb-6">
                <h3 className="text-sm font-bold text-neutral-300 mb-4 flex items-center gap-2">
                  <span className="w-1 h-4 bg-indigo-500 rounded-full"></span>
                  Pilih Base Desain (Wajib)
                </h3>
                
                {/* Design Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {/* Consultation Option */}
                  <div 
                    onClick={() => setLocalTheme(null)}
                    className={`cursor-pointer rounded-xl p-4 border-2 flex flex-col items-center justify-center gap-2 text-center h-28 transition-all
                      ${localTheme === null 
                        ? 'border-yellow-500 bg-yellow-500/10 shadow-lg shadow-yellow-500/20' 
                        : 'border-neutral-800 bg-neutral-800/50 hover:border-neutral-600 hover:bg-neutral-800'}
                    `}
                  >
                    <MessageCircle size={24} className={localTheme === null ? 'text-yellow-400' : 'text-neutral-500'} />
                    <span className="text-[10px] font-bold text-neutral-300 leading-tight">
                      Belum Tahu /<br/>Konsultasi Dulu
                    </span>
                    {localTheme === null && (
                      <CheckCircle size={14} className="text-yellow-500" />
                    )}
                  </div>

                  {/* Portfolio Items */}
                  {portfolioItems.map((item) => (
                    <div 
                      key={item.id}
                      onClick={() => setLocalTheme(item)}
                      className={`cursor-pointer relative rounded-xl overflow-hidden border-2 h-28 group transition-all
                        ${localTheme?.id === item.id 
                          ? 'border-green-500 ring-2 ring-green-500/20 shadow-lg shadow-green-500/20' 
                          : 'border-neutral-800 hover:border-neutral-600'}
                      `}
                    >
                      {item.image ? (
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" 
                        />
                      ) : (
                        <div className={`w-full h-full bg-gradient-to-br ${item.color}`}></div>
                      )}
                      
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50 group-hover:bg-black/40 transition-colors">
                        <span className="text-[11px] font-bold text-white text-center px-2 drop-shadow-lg">
                          {item.title}
                        </span>
                      </div>

                      {localTheme?.id === item.id && (
                        <div className="absolute top-2 right-2 bg-green-500 rounded-full p-1 shadow-lg">
                          <CheckCircle size={12} className="text-neutral-900" fill="currentColor" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Feedback Text */}
                <div className="bg-neutral-800/50 rounded-lg p-3 space-y-1">
                  <p className="text-[11px] text-center font-medium text-neutral-300">
                    {localTheme 
                      ? `✓ Desain terpilih: ${localTheme.title}` 
                      : "⚡ Kamu memilih untuk diskusi/konsultasi dulu"}
                  </p>
                  <p className="text-[10px] text-center italic text-neutral-500">
                    Setiap desain boleh custom warna, konsul di chat ya! 🎨
                  </p>
                </div>
              </div>
            )}

            {/* WhatsApp CTA Button */}
            <a 
              href={generateWALink()}
              target="_blank" 
              rel="noreferrer"
              className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg group
                ${selectedPackage.id === 'exclusive' 
                  ? 'bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white shadow-amber-900/30' 
                  : 'bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white shadow-green-900/30'}
              `}
            >
              Lanjut ke WhatsApp 
              <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <p className="text-center text-[10px] text-neutral-500 mt-3">
              Kamu akan diarahkan ke WhatsApp untuk detail pembayaran & diskusi lebih lanjut
            </p>
          </div>
        </div>
      )}

    </div>  
  );
};

export default Pricing;