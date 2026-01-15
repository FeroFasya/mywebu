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
    if (value === false) return <div className="flex justify-center"><Minus size={18} className="text-ash-darker dark:text-neutral-700" /></div>;
    return <span className="text-xs font-medium text-gray-400 dark:text-neutral-500">{value}</span>;
  };

  const getHeaderColor = (index) => {
    const colors = ['text-blue-400', 'text-yellow-400', 'text-indigo-400', 'text-amber-400'];
    return colors[index] || 'text-ash-text';
  };

  return (
    <div className="space-y-8 pb-8 animate-fade-in">
      
      {/* Header Section */}
       <div>
         <h2 className="text-2xl font-bold text-ash-text dark:text-light-text">
          Investasi{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-cyan-300">
            Terbaik
          </span>
        </h2>
          <p className="text-gray-400 dark:text-neutral-600 text-xs">Pilih paket sesuai kebutuhanmu sekarang.</p>
        </div>

      {/* --- SELECTED DESIGN BANNER --- */}
      {selectedTheme && (
        <div className="relative bg-gradient-to-r from-ash-surface to-ash-darker dark:from-white dark:to-neutral-100 rounded-2xl border border-indigo-500/30 dark:border-indigo-200 p-4 flex items-center justify-between shadow-lg shadow-indigo-900/10 animate-fade-in-up">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-ash-darker overflow-hidden border border-ash-text/10 shrink-0">
                    <img src={selectedTheme.image} alt="Selected" className="w-full h-full object-cover" />
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold bg-indigo-500 text-white px-2 py-0.5 rounded-full">
                            TERPILIH
                        </span>
                        <span className="text-[10px] text-gray-400 dark:text-neutral-500 uppercase tracking-wider">
                            {selectedTheme.category} ({isBusinessDesign ? 'Bisnis' : 'Pribadi'})
                        </span>
                    </div>
                    <h3 className="text-sm font-bold text-white dark:text-neutral-800 line-clamp-1 mt-0.5">
                        {selectedTheme.title}
                    </h3>
                </div>
            </div>
            <button 
                onClick={() => {
                    setSelectedTheme(null);
                    onNavigate('catalog');
                }}
                className="group flex flex-col items-center justify-center gap-1 pl-4 border-l border-ash-text/10"
            >
                <div className="p-2 rounded-full bg-ash-darker dark:bg-neutral-200 group-hover:bg-red-500/20 dark:group-hover:bg-red-200 transition-colors">
                    <X size={16} className="text-gray-400 dark:text-neutral-500 group-hover:text-red-500 dark:group-hover:text-red-600" />
                </div>
                <span className="text-[9px] font-medium text-gray-500 group-hover:text-red-400 transition-colors">
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
                className={`relative p-6 rounded-2xl border transition-all duration-300 group
                  ${/* Style Kondisional: Locked vs Active */ ''}
                  ${isLocked 
                    ? 'bg-ash-darker/50 dark:bg-neutral-200/50 border-transparent opacity-60 cursor-not-allowed grayscale-[0.8]' 
                    : tier.isSpecial 
                        ? 'bg-gradient-to-b from-ash-surface to-[#252015] border-amber-500/30 shadow-lg shadow-amber-500/10 dark:from-amber-50 dark:to-white dark:border-amber-200 dark:shadow-amber-500/10 hover:shadow-xl' 
                    : tier.highlight
                        ? 'bg-gradient-to-b from-ash-surface to-[#1e1f28] border-indigo-500/30 shadow-lg shadow-indigo-500/10 dark:from-indigo-50 dark:to-white dark:border-indigo-200 dark:shadow-indigo-500/10 hover:shadow-xl'
                    : 'bg-ash-surface border-ash-darker hover:border-neutral-600 dark:bg-white dark:border-neutral-200 dark:hover:border-neutral-300 hover:shadow-xl'
                  }
                `}
              >
                {/* --- MIKI: OVERLAY PESAN KUNCI (Muncul kalau isLocked) --- */}
                {isLocked && (
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-4 text-center bg-ash-darker/80 dark:bg-white/80 backdrop-blur-[2px] rounded-2xl">
                        <Lock size={32} className="text-gray-500 mb-2" />
                        <p className="text-xs font-bold text-gray-300 dark:text-neutral-800">
                            Paket Terkunci
                        </p>
                        <p className="text-[10px] text-gray-400 dark:text-neutral-600 mt-1 leading-relaxed">
                            {lockMessage}
                        </p>
                    </div>
                )}

                {/* Badges (Only show if not locked) */}
                {!isLocked && tier.highlight && (
                  <div className="absolute -top-3 right-4 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white text-[10px] font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1 border border-indigo-400/20">
                    <Sparkles size={10} /> POPULAR
                  </div>
                )}
                {!isLocked && tier.isSpecial && (
                  <div className="absolute -top-3 right-4 bg-gradient-to-r from-amber-600 to-amber-500 text-white text-[10px] font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1 border border-amber-400/20">
                    <Crown size={10} /> SULTAN ONLY
                  </div>
                )}
                
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className={`text-xl font-bold ${tier.isSpecial ? 'text-amber-400 dark:text-amber-600' : tier.highlight ? 'text-indigo-300 dark:text-indigo-600' : 'text-ash-text dark:text-neutral-800'}`}>
                      {tier.name}
                    </h3>
                    <div className={`text-2xl font-bold mt-1 ${tier.isSpecial ? 'text-amber-200 dark:text-amber-700' : 'text-ash-text dark:text-neutral-900'}`}>
                      {tier.price}
                    </div>
                    {tier.bestFor && (
                      <div className={`mt-3 inline-block px-3 py-1.5 rounded-lg text-[11px] font-medium border
                        ${tier.isSpecial 
                            ? 'bg-amber-900/20 border-amber-500/20 text-amber-300' 
                            : 'bg-ash-darker dark:bg-light-border border-ash-darker text-gray-400 dark:text-neutral-700'}
                      `}>
                        Cocok buat: <span className="font-semibold">{tier.bestFor}</span>
                      </div>
                    )}
                  </div>
                  <div className={`p-3 rounded-xl 
                    ${tier.isSpecial 
                        ? 'bg-amber-500/10 text-amber-400' 
                        : tier.highlight 
                        ? 'bg-indigo-500/10 text-indigo-400' 
                        : 'bg-ash-darker dark:bg-light-border text-gray-400 dark:text-neutral-500'}
                  `}>
                    {tier.icon}
                  </div>
                </div>
                
                <p className="text-xs text-gray-400 dark:text-neutral-600 mb-5 italic border-l-2 border-ash-darker dark:border-light-border pl-4 py-1">
                  "{tier.desc}"
                </p>

                <ul className="space-y-3 mb-6">
                  {tier.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300 dark:text-neutral-700">
                      <CheckCircle 
                        size={16} 
                        className={`shrink-0 mt-0.5 
                            ${tier.isSpecial ? 'text-amber-500' : tier.highlight ? 'text-indigo-400' : 'text-gray-500 dark:text-neutral-500'}
                        `} 
                      />
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  disabled={isLocked} // Matikan tombol kalau terkunci
                  onClick={() => !isLocked && handleOrderClick(tier)}
                  className={`w-full font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 group
                    ${isLocked 
                        ? 'bg-transparent text-transparent cursor-not-allowed' // Hidden text, overlay handles it
                        : tier.isSpecial 
                        ? 'bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-white shadow-lg shadow-amber-900/20 cursor-pointer' 
                        : tier.highlight
                        ? 'bg-gradient-to-r from-indigo-700 to-indigo-600 hover:from-indigo-600 hover:to-indigo-500 text-white shadow-lg shadow-indigo-900/20 cursor-pointer'
                        : 'bg-ash-darker hover:bg-neutral-700 text-ash-text border border-ash-darker dark:bg-neutral-100 dark:hover:bg-neutral-200 dark:text-neutral-800 dark:border-neutral-300 cursor-pointer'}
                  `}
                >
                  {tier.isSpecial ? 'Chat Sultan (Diskusi Dulu)' : `Mau ${tier.name}`} 
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
        })}
      </div>
      
      {/* Comparison Table */}
      <div className="py-4">
        <button 
          onClick={() => setShowComparison(!showComparison)}
          className="mx-auto flex items-center gap-2 text-sm text-gray-400 dark:text-neutral-600 hover:text-white dark:hover:text-neutral-700 transition-colors bg-ash-surface dark:bg-light-surface px-4 py-2 rounded-full border border-ash-darker dark:border-light-border hover:border-neutral-500"
        >
          {showComparison ? "Sembunyikan Perbandingan" : "Lihat Perbandingan Lengkap"}
          {showComparison ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {showComparison && (
          <div className="mt-6 overflow-x-auto rounded-2xl border border-ash-darker dark:border-light-border bg-ash-surface/50 dark:bg-light-surface animate-fade-in-up backdrop-blur-sm">
             <table className="w-full text-left border-collapse min-w-[600px]">
               <thead>
                 <tr className="border-b border-ash-darker dark:border-light-border bg-ash-surface dark:bg-light-bg">
                   <th className="p-4 text-xs font-bold text-gray-400 dark:text-neutral-700 uppercase tracking-wider sticky left-0 bg-ash-surface dark:bg-light-bg z-10 w-1/4 shadow-[2px_0_5px_rgba(0,0,0,0.1)]">
                     Fitur
                   </th>
                   {pricingTiers.map((tier, index) => (
                     <th key={tier.id} className={`p-4 text-xs font-bold text-center uppercase tracking-wider whitespace-nowrap ${getHeaderColor(index)}`}>
                       {tier.name}
                     </th>
                   ))}
                 </tr>
               </thead>
               <tbody className="divide-y divide-ash-darker dark:divide-light-border">
                 {comparisonData.map((row, idx) => (
                   <tr key={idx} className="hover:bg-ash-darker/30 dark:hover:bg-light-border transition-colors">
                     <td className="p-4 text-xs font-medium text-gray-300 dark:text-neutral-700 sticky left-0 bg-ash-surface dark:bg-light-bg z-10 border-r border-ash-darker dark:border-light-border whitespace-nowrap shadow-[2px_0_5px_rgba(0,0,0,0.1)]">
                       {row.label}
                     </td>
                     <td className="p-4 text-center min-w-[100px]">{renderCell(row.basic)}</td>
                     <td className="p-4 text-center min-w-[100px]">{renderCell(row.standard)}</td>
                     <td className="p-4 text-center min-w-[100px]">{renderCell(row.premium)}</td>
                     <td className="p-4 text-center min-w-[100px]">{renderCell(row.exclusive)}</td>
                   </tr>
                 ))}
               </tbody>
             </table>
          </div>
        )}
      </div>

       {/* Elegant Divider */}
      <div className="flex items-center py-4">
        <div className="h-px flex-1 bg-ash-darker dark:bg-light-border"></div>
        <span className="px-4 text-xs text-gray-500 dark:text-neutral-600 font-medium">{t('or')}</span>
        <div className="h-px flex-1 bg-ash-darker dark:bg-light-border"></div>
      </div>
      
       {/* Footer Link */}
      <div className="bg-ash-surface dark:bg-light-bg p-5 rounded-2xl border border-dashed border-ash-darker dark:border-light-border hover:border-neutral-500 dark:hover:border-neutral-400 transition-colors">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-base font-bold text-ash-text dark:text-light-text">{t('buyTemplate')}</h3>
            <p className="text-xs text-gray-400 dark:text-neutral-600">{t('templateDesc')}</p>
          </div>
          <span className="text-[10px] font-bold bg-green-900/20 dark:bg-green-900/40 text-green-400 dark:text-green-600 px-2 py-1 rounded border border-green-900/50 dark:border-green-800">{t('savePrice')}</span>
        </div>
        <a href="https://lynk.id/fasuya" target="_blank" rel="noreferrer" className="w-full block text-center text-gray-400 dark:text-neutral-700 hover:text-white dark:hover:text-neutral-800 text-sm font-medium py-2 rounded-lg transition-colors hover:bg-ash-darker dark:hover:bg-light-border">{t('buyViaLynk')}</a>
      </div>

      {/* Modal Popup (Confirmation) */}
      {showModal && selectedPackage && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:p-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
            onClick={() => setShowModal(false)}
          ></div>
          
          <div className="relative bg-ash-surface dark:bg-light-surface border-t sm:border border-ash-darker dark:border-neutral-700 w-full max-w-lg sm:rounded-2xl rounded-t-3xl p-6 shadow-2xl animate-fade-in-up max-h-[85vh] overflow-y-auto pb-24 sm:pb-6">
            <button 
              onClick={() => setShowModal(false)} 
              className="absolute top-4 right-4 text-gray-400 hover:text-white bg-ash-darker hover:bg-neutral-700 rounded-full p-1.5 transition-colors z-10"
            >
              <X size={20} />
            </button>

            {/* Header Modal */}
            <div className="mb-6 border-b border-ash-darker pb-4">
              <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2">
                Konfirmasi Pesanan
              </div>
              <h2 className="text-2xl font-bold text-white dark:text-light-text mb-1">
                {selectedPackage.name}
              </h2>
              <p className={`text-xl font-bold ${selectedPackage.isSpecial ? 'text-amber-400' : 'text-gray-300 dark:text-neutral-700'}`}>
                {selectedPackage.price}
              </p>
            </div>

            {/* Content Logic */}
            {selectedTheme ? (
                <div className="bg-ash-darker/50 dark:bg-light-bg border border-ash-darker dark:border-light-border p-4 rounded-xl flex gap-4 items-center mb-6">
                    <div className="w-16 h-16 shrink-0 rounded-lg overflow-hidden border border-ash-darker">
                         <img src={selectedTheme.image} alt={selectedTheme.title} className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <p className="text-[10px] text-gray-400 dark:text-neutral-500 font-bold uppercase tracking-wider mb-0.5">
                            Desain Pilihanmu:
                        </p>
                        <h4 className="text-sm font-bold text-white dark:text-light-text line-clamp-1">
                            {selectedTheme.title}
                        </h4>
                        <p className="text-[11px] text-indigo-400 dark:text-indigo-600 font-medium">
                            {selectedTheme.theme}
                        </p>
                    </div>
                </div>
            ) : (
                <div className="bg-yellow-900/10 dark:bg-yellow-100 border border-yellow-500/20 dark:border-yellow-300 p-4 rounded-xl flex gap-3 items-start mb-6">
                    <AlertCircle size={20} className="text-yellow-500 shrink-0 mt-0.5" />
                    <div>
                        <h4 className="text-sm font-bold text-yellow-200 dark:text-yellow-800 mb-1">
                            Belum Memilih Desain?
                        </h4>
                        <p className="text-xs text-gray-400 dark:text-yellow-900/80 leading-relaxed">
                            Tidak masalah! Kita bisa diskusi dulu di WhatsApp untuk menentukan desain yang cocok buatmu.
                        </p>
                    </div>
                </div>
            )}

            <a 
              href={generateWALink()}
              target="_blank" 
              rel="noreferrer"
              className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg group
                ${selectedPackage.id === 'exclusive' 
                  ? 'bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-white shadow-amber-900/30' 
                  : 'bg-gradient-to-r from-green-700 to-green-600 hover:from-green-600 hover:to-green-500 text-white shadow-green-900/30'}
              `}
            >
              Lanjut ke WhatsApp 
              <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <p className="text-center text-[10px] text-gray-500 dark:text-neutral-500 mt-3">
              Tenang, ini baru chat kok. Belum ada transaksi.
            </p>
          </div>
        </div>
      )}

    </div>  
  );
};

export default Pricing;