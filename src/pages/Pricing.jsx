import React, { useState } from 'react';
import { CheckCircle, MessageCircle, X, Crown, ArrowRight, Sparkles, Minus, ChevronDown, ChevronUp, AlertCircle, Lock } from 'lucide-react';
import { pricingTiers, USER_INFO } from '../data/data';
import { useLanguage } from '../contexts/LanguageContext';

// --- DATA TABLE ---
const comparisonData = [
  { label: "Terima Beres (Saya Inputkan)", basic: true, standard: true, premium: true, exclusive: true }, 
  { label: "Website Pages", basic: "1 Page", standard: "1 Page", premium: "Long Page", exclusive: "Custom" },
  { label: "Kebebasan Custom Desain", basic: "Template", standard: "Custom Colors", premium: "Premium Anim.", exclusive: "Full Custom" },
  { label: "Kapasitas Foto/Karya", basic: "Max 3", standard: "Max 8", premium: "Max 15", exclusive: "Unlimited" },
  { label: "Domain (.com)", basic: false, standard: false, premium: false, exclusive: true },
  { label: "Business Email", basic: false, standard: false, premium: false, exclusive: true },
  { label: "Music / Video / Gmaps", basic: false, standard: false, premium: true, exclusive: true },
  { label: "Kesempatan Revisi", basic: "0", standard: "1 (Minor)", premium: "2 (Major)", exclusive: "3 (VIP)" },
  { label: "Delivery Time", basic: "3-5 Days", standard: "3-5 Days", premium: "48 Hours", exclusive: "1 Week+" },
  { label: "Hak Akses & File Mentah", basic: "Dapat File Website", standard: "Dapat File Website", premium: "Gmail Key", exclusive: "Full Access" },
];

// --- MIKI: DEFINISI KATEGORI BISNIS (KELOMPOK) ---
// Sisanya otomatis dianggap PRIBADI.
const businessCategories = [
  "Cafe / Resto",
  "UMKM / Jasa",
  "Education / Course",
  "Wedding" // Jaga-jaga kalau nanti ada
];

const Pricing = ({ selectedTheme, onNavigate, setSelectedTheme }) => {
  const { t } = useLanguage();
  const [showModal, setShowModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showComparison, setShowComparison] = useState(false);

  // --- MIKI: LOGIC PENENTU TIPE DESAIN ---
  const isBusinessDesign = selectedTheme && businessCategories.includes(selectedTheme.category);
  const isPersonalDesign = selectedTheme && !isBusinessDesign;

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

    if (selectedTheme) {
        const message = `Halo Fero! Saya mau ambil ${selectedPackage.name} seharga ${selectedPackage.price}. \n\nDesain Pilihan: *${selectedTheme.title}* (${selectedTheme.theme}).\n\nBisa dibantu prosesnya?`;
        return `https://wa.me/${USER_INFO.phone}?text=${encodeURIComponent(message)}`;
    } else {
        const message = `Halo Fero! Saya mau ambil ${selectedPackage.name} seharga ${selectedPackage.price}. \n\nSaya belum pilih desain di Catalog, mau diskusi/konsultasi dulu ya.`;
        return `https://wa.me/${USER_INFO.phone}?text=${encodeURIComponent(message)}`;
    }
  };

  const renderCell = (value) => {
    if (value === true) return <div className="flex justify-center"><CheckCircle size={18} className="text-green-500" /></div>;
    if (value === false) return <div className="flex justify-center"><Minus size={18} className="text-ash-darker dark:text-neutral-300" /></div>;
    return <span className="text-xs font-medium text-gray-400 dark:text-neutral-600">{value}</span>;
  };

  const getHeaderColor = (index) => {
    const colors = ['text-blue-400 dark:text-blue-600', 'text-yellow-400 dark:text-yellow-600', 'text-indigo-400 dark:text-indigo-600', 'text-amber-400 dark:text-amber-600'];
    return colors[index] || 'text-ash-text dark:text-black';
  };

  return (
    <div className="space-y-10 pb-12 animate-fade-in">
      
      {/* Header Section */}
       <div>
         <h2 className="text-3xl font-black text-ash-text dark:text-light-text tracking-tight">
          Investasi{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            Terbaik
          </span>
        </h2>
          <p className="text-gray-400 dark:text-neutral-500 text-sm font-medium mt-1">Pilih paket sesuai kebutuhanmu sekarang.</p>
        </div>

      {/* --- SELECTED DESIGN BANNER (Hybrid Clean) --- */}
      {selectedTheme && (
        <div className="relative bg-ash-surface dark:bg-white rounded-3xl border border-ash-darker dark:border-gray-200 p-1 flex items-center justify-between shadow-lg shadow-black/10 animate-fade-in-up pr-6">
            <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-ash-darker overflow-hidden border border-ash-darker shrink-0 m-1">
                    <img src={selectedTheme.image} alt="Selected" className="w-full h-full object-cover" />
                </div>
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-[9px] font-black bg-indigo-500 text-white px-2 py-0.5 rounded-md uppercase tracking-wider shadow-sm">
                            TERPILIH
                        </span>
                        <span className="text-[10px] font-bold text-gray-400 dark:text-neutral-500 uppercase tracking-wider">
                            {selectedTheme.category} ({isBusinessDesign ? 'Bisnis' : 'Pribadi'})
                        </span>
                    </div>
                    <h3 className="text-sm font-black text-white dark:text-neutral-800 line-clamp-1">
                        {selectedTheme.title}
                    </h3>
                </div>
            </div>
            <button 
                onClick={() => {
                    setSelectedTheme(null);
                    onNavigate('catalog');
                }}
                className="group flex flex-col items-center justify-center gap-1 pl-6 border-l border-ash-darker dark:border-gray-100"
            >
                <div className="p-2 rounded-xl bg-ash-darker dark:bg-gray-100 group-hover:bg-red-500/10 dark:group-hover:bg-red-50 transition-colors border border-transparent group-hover:border-red-200">
                    <X size={16} className="text-gray-400 dark:text-neutral-500 group-hover:text-red-500" strokeWidth={2.5} />
                </div>
                <span className="text-[9px] font-bold text-gray-500 group-hover:text-red-400 transition-colors uppercase tracking-wide">
                    Ganti
                </span>
            </button>
        </div>
      )}
      
      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pricingTiers.map((tier) => {
            // --- MIKI: LOGIC PENGUNCIAN PAKET (THE GATEKEEPER) ---
            let isLocked = false;
            let lockMessage = "";

            // Aturan 1: Jika Desain KELOMPOK (Bisnis), Paket Pelajar (basic) dikunci.
            if (isBusinessDesign && tier.id === 'basic') {
                isLocked = true;
                lockMessage = "Pilihan paket ini tidak tersedia untuk desain pilihan ini (Desain Kompleks).";
            }

            // Aturan 2: Jika Desain PRIBADI, Paket Sultan (exclusive) dikunci.
            if (isPersonalDesign && tier.id === 'exclusive') {
                isLocked = true;
                lockMessage = "Pilihan paket ini ditujukan untuk custom desain. Silahkan batalkan pilihan desain template untuk memilih ini.";
            }

            return (
              <div 
                key={tier.id} 
                className={`relative p-6 rounded-3xl border transition-all duration-300 group flex flex-col
                  ${isLocked 
                    ? 'bg-ash-surface/50 dark:bg-gray-100/50 border-transparent opacity-60 cursor-not-allowed grayscale' 
                    : tier.isSpecial 
                        ? 'bg-gradient-to-b from-ash-surface to-[#252015] border-amber-500/30 shadow-xl shadow-amber-900/10 dark:from-white dark:to-amber-50 dark:border-amber-200 hover:-translate-y-1' 
                    : tier.highlight
                        ? 'bg-gradient-to-b from-ash-surface to-[#1e1f28] border-indigo-500/30 shadow-xl shadow-indigo-900/10 dark:from-white dark:to-indigo-50 dark:border-indigo-200 hover:-translate-y-1'
                    : 'bg-ash-surface border-ash-darker dark:bg-white dark:border-gray-200 shadow-xl shadow-black/5 dark:shadow-gray-200/50 hover:-translate-y-1'
                  }
                `}
              >
                {/* --- MIKI: OVERLAY PESAN KUNCI --- */}
                {isLocked && (
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-4 text-center bg-ash-darker/80 dark:bg-white/60 backdrop-blur-[2px] rounded-3xl">
                        <Lock size={32} className="text-gray-500 mb-2" />
                        <p className="text-xs font-bold text-gray-300 dark:text-neutral-800">
                            Paket Terkunci
                        </p>
                        <p className="text-[10px] text-gray-400 dark:text-neutral-600 mt-1 leading-relaxed max-w-[150px]">
                            {lockMessage}
                        </p>
                    </div>
                )}

                {/* Badges - Sticker Style */}
                {!isLocked && tier.highlight && (
                  <div className="absolute -top-3 right-4 bg-indigo-500 text-white text-[10px] font-black px-3 py-1 rounded-lg shadow-md border-b-2 border-indigo-700 flex items-center gap-1 transform rotate-2">
                    <Sparkles size={10} strokeWidth={3} /> POPULAR
                  </div>
                )}
                {!isLocked && tier.isSpecial && (
                  <div className="absolute -top-3 right-4 bg-amber-500 text-white text-[10px] font-black px-3 py-1 rounded-lg shadow-md border-b-2 border-amber-700 flex items-center gap-1 transform -rotate-1">
                    <Crown size={10} strokeWidth={3} /> SULTAN
                  </div>
                )}
                
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className={`text-lg font-black ${tier.isSpecial ? 'text-amber-400 dark:text-amber-600' : tier.highlight ? 'text-indigo-400 dark:text-indigo-600' : 'text-ash-text dark:text-neutral-800'}`}>
                      {tier.name}
                    </h3>
                    <div className={`text-2xl font-black mt-1 tracking-tight ${tier.isSpecial ? 'text-amber-200 dark:text-amber-700' : 'text-white dark:text-black'}`}>
                      {tier.price}
                    </div>
                    {tier.bestFor && (
                      <div className={`mt-3 inline-block px-3 py-1 rounded-lg text-[10px] font-bold border
                        ${tier.isSpecial 
                            ? 'bg-amber-900/20 border-amber-500/20 text-amber-300 dark:bg-amber-100 dark:text-amber-800 dark:border-amber-200' 
                            : 'bg-ash-darker dark:bg-gray-100 border-ash-darker dark:border-gray-200 text-gray-400 dark:text-gray-600'}
                      `}>
                        {tier.bestFor}
                      </div>
                    )}
                  </div>
                  <div className={`p-3 rounded-2xl border-b-4
                    ${tier.isSpecial 
                        ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' 
                        : tier.highlight 
                        ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' 
                        : 'bg-ash-darker dark:bg-gray-100 text-gray-400 dark:text-gray-500 border-ash-text/10 dark:border-gray-200'}
                  `}>
                    {tier.icon}
                  </div>
                </div>
                
                <p className="text-xs text-gray-400 dark:text-gray-500 mb-6 italic border-l-2 border-ash-darker dark:border-gray-200 pl-4 py-1 leading-relaxed">
                  "{tier.desc}"
                </p>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300 dark:text-gray-700 font-medium">
                      <CheckCircle 
                        size={16} 
                        className={`shrink-0 mt-0.5 
                            ${tier.isSpecial ? 'text-amber-500' : tier.highlight ? 'text-indigo-500' : 'text-gray-500 dark:text-gray-400'}
                        `} 
                        strokeWidth={2.5}
                      />
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
                
                {/* BUTTON - POP STYLE (Border Bottom Thick) */}
                <button 
                  disabled={isLocked} 
                  onClick={() => !isLocked && handleOrderClick(tier)}
                  className={`w-full font-black text-xs py-4 rounded-xl transition-all flex items-center justify-center gap-2 group border-b-4 active:border-b-0 active:translate-y-1 uppercase tracking-widest
                    ${isLocked 
                        ? 'bg-transparent text-transparent cursor-not-allowed border-none' 
                        : tier.isSpecial 
                        ? 'bg-amber-500 hover:bg-amber-400 text-white border-amber-700 shadow-lg shadow-amber-900/20' 
                        : tier.highlight
                        ? 'bg-indigo-600 hover:bg-indigo-500 text-white border-indigo-800 shadow-lg shadow-indigo-900/20'
                        : 'bg-white text-black border-gray-300 hover:bg-gray-50 dark:bg-black dark:text-white dark:border-gray-700 dark:hover:bg-neutral-900'}
                  `}
                >
                  {tier.isSpecial ? 'Chat Sultan' : `Pilih ${tier.name}`} 
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" strokeWidth={3} />
                </button>
              </div>
            );
        })}
      </div>
      
      {/* Comparison Table (Clean & Modern) */}
      <div className="py-4">
        <button 
          onClick={() => setShowComparison(!showComparison)}
          className="mx-auto flex items-center gap-2 text-xs font-bold text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-black transition-all bg-ash-surface dark:bg-white px-6 py-3 rounded-full border-b-4 border-ash-darker dark:border-gray-200 hover:border-indigo-500 dark:hover:border-indigo-500 active:border-b-0 active:translate-y-1 uppercase tracking-wider"
        >
          {showComparison ? "Sembunyikan Perbandingan" : "Lihat Perbandingan Lengkap"}
          {showComparison ? <ChevronUp size={14} strokeWidth={3} /> : <ChevronDown size={14} strokeWidth={3} />}
        </button>

        {showComparison && (
          <div className="mt-8 overflow-x-auto rounded-3xl border border-ash-darker dark:border-gray-200 bg-ash-surface dark:bg-white animate-fade-in-up shadow-xl">
             <table className="w-full text-left border-collapse min-w-[700px]">
               <thead>
                 <tr className="border-b border-ash-darker dark:border-gray-100 bg-ash-darker/30 dark:bg-gray-50">
                   <th className="p-5 text-xs font-black text-gray-500 dark:text-gray-400 uppercase tracking-widest sticky left-0 bg-ash-surface dark:bg-white z-10 w-1/4 shadow-[2px_0_10px_rgba(0,0,0,0.05)]">
                     Fitur
                   </th>
                   {pricingTiers.map((tier, index) => (
                     <th key={tier.id} className={`p-5 text-xs font-black text-center uppercase tracking-widest whitespace-nowrap ${getHeaderColor(index)}`}>
                       {tier.name}
                     </th>
                   ))}
                 </tr>
               </thead>
               <tbody className="divide-y divide-ash-darker dark:divide-gray-100">
                 {comparisonData.map((row, idx) => (
                   <tr key={idx} className="hover:bg-ash-darker/20 dark:hover:bg-gray-50 transition-colors">
                     <td className="p-4 text-xs font-bold text-gray-300 dark:text-gray-700 sticky left-0 bg-ash-surface dark:bg-white z-10 border-r border-ash-darker dark:border-gray-100 whitespace-nowrap shadow-[2px_0_10px_rgba(0,0,0,0.05)]">
                       {row.label}
                     </td>
                     <td className="p-4 text-center min-w-[120px]">{renderCell(row.basic)}</td>
                     <td className="p-4 text-center min-w-[120px]">{renderCell(row.standard)}</td>
                     <td className="p-4 text-center min-w-[120px]">{renderCell(row.premium)}</td>
                     <td className="p-4 text-center min-w-[120px]">{renderCell(row.exclusive)}</td>
                   </tr>
                 ))}
               </tbody>
             </table>
          </div>
        )}
      </div>

       {/* Elegant Divider */}
      <div className="flex items-center py-4 px-8 opacity-50">
        <div className="h-0.5 flex-1 bg-ash-darker dark:bg-gray-200 rounded-full"></div>
        <span className="px-4 text-[10px] font-black text-gray-500 dark:text-gray-400 uppercase tracking-widest">{t('or')}</span>
        <div className="h-0.5 flex-1 bg-ash-darker dark:bg-gray-200 rounded-full"></div>
      </div>
      
       {/* Footer Link (Template) - Hybrid Style */}
      <div className="bg-ash-surface dark:bg-white p-6 rounded-3xl border-2 border-dashed border-ash-darker dark:border-gray-300 hover:border-gray-500 dark:hover:border-gray-400 transition-colors">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-base font-black text-white dark:text-black uppercase tracking-tight">{t('buyTemplate')}</h3>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1 font-medium">{t('templateDesc')}</p>
          </div>
          <span className="text-[9px] font-black bg-green-500/10 dark:bg-green-50 text-green-500 dark:text-green-600 px-3 py-1.5 rounded-lg border border-green-500/20">{t('savePrice')}</span>
        </div>
        <a href="https://lynk.id/fasuya" target="_blank" rel="noreferrer" className="w-full block text-center text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-black text-xs font-black py-3 rounded-xl transition-all bg-ash-darker dark:bg-gray-100 hover:bg-neutral-700 dark:hover:bg-gray-200 border-b-4 border-black/20 active:border-b-0 active:translate-y-1 uppercase tracking-widest">
            {t('buyViaLynk')}
        </a>
      </div>

      {/* Modal Popup (Confirmation) */}
      {showModal && selectedPackage && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:p-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
            onClick={() => setShowModal(false)}
          ></div>
          
          <div className="relative bg-ash-surface dark:bg-white w-full max-w-lg sm:rounded-3xl rounded-t-3xl p-6 shadow-2xl animate-fade-in-up max-h-[85vh] overflow-y-auto pb-24 sm:pb-6 border border-ash-darker dark:border-gray-200">
            <button 
              onClick={() => setShowModal(false)} 
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 bg-ash-darker dark:bg-gray-100 hover:bg-red-500/10 rounded-xl p-2 transition-colors z-10"
            >
              <X size={20} strokeWidth={2.5} />
            </button>

            {/* Header Modal */}
            <div className="mb-8 border-b border-ash-darker dark:border-gray-100 pb-6 text-center">
              <div className="inline-block text-[10px] font-black text-indigo-500 bg-indigo-500/10 px-3 py-1 rounded-full uppercase tracking-widest mb-3">
                Konfirmasi Pesanan
              </div>
              <h2 className="text-3xl font-black text-white dark:text-black mb-2 tracking-tight">
                {selectedPackage.name}
              </h2>
              <p className={`text-2xl font-black ${selectedPackage.isSpecial ? 'text-amber-400' : 'text-gray-400 dark:text-gray-500'}`}>
                {selectedPackage.price}
              </p>
            </div>

            {/* Content Logic */}
            {selectedTheme ? (
                <div className="bg-ash-darker dark:bg-gray-50 border border-ash-darker dark:border-gray-200 p-4 rounded-2xl flex gap-4 items-center mb-8">
                    <div className="w-16 h-16 shrink-0 rounded-xl overflow-hidden border border-ash-darker dark:border-gray-200">
                         <img src={selectedTheme.image} alt={selectedTheme.title} className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <p className="text-[9px] text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider mb-1">
                            Desain Pilihanmu:
                        </p>
                        <h4 className="text-sm font-black text-white dark:text-black line-clamp-1">
                            {selectedTheme.title}
                        </h4>
                        <p className="text-[11px] text-indigo-400 dark:text-indigo-600 font-bold mt-0.5">
                            {selectedTheme.theme}
                        </p>
                    </div>
                </div>
            ) : (
                <div className="bg-yellow-500/5 dark:bg-yellow-50 border border-yellow-500/20 dark:border-yellow-200 p-4 rounded-2xl flex gap-3 items-start mb-8">
                    <AlertCircle size={20} className="text-yellow-500 shrink-0 mt-0.5" strokeWidth={2.5} />
                    <div>
                        <h4 className="text-sm font-bold text-yellow-400 dark:text-yellow-700 mb-1">
                            Belum Memilih Desain?
                        </h4>
                        <p className="text-xs text-gray-400 dark:text-yellow-800/70 leading-relaxed font-medium">
                            Tidak masalah! Kita bisa diskusi dulu di WhatsApp untuk menentukan desain yang cocok buatmu.
                        </p>
                    </div>
                </div>
            )}

            <a 
              href={generateWALink()}
              target="_blank" 
              rel="noreferrer"
              className={`w-full py-4 rounded-xl font-black text-sm flex items-center justify-center gap-2 transition-all shadow-lg group border-b-4 active:border-b-0 active:translate-y-1 uppercase tracking-widest
                ${selectedPackage.id === 'exclusive' 
                  ? 'bg-amber-500 hover:bg-amber-400 text-white border-amber-700 shadow-amber-900/30' 
                  : 'bg-green-500 hover:bg-green-400 text-white border-green-700 shadow-green-900/30'}
              `}
            >
              Lanjut ke WhatsApp 
              <MessageCircle size={18} className="group-hover:scale-110 transition-transform" strokeWidth={3} />
            </a>
            <p className="text-center text-[10px] text-gray-500 dark:text-gray-400 mt-4 font-medium">
              Tenang, ini baru chat kok. Belum ada transaksi.
            </p>
          </div>
        </div>
      )}

    </div>  
  );
};

export default Pricing;