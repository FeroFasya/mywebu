import React from 'react';
import { ArrowRight, CheckCircle, Sparkles, Crown, Lock } from 'lucide-react';
import PriceDisplay from './PriceDisplay';

const PricingCard = ({ tier, isLocked, lockMessage, onOrder }) => {
    // Color Logic based on Tier Type
    const getThemeColors = () => {
        if (isLocked) return {
            bg: 'bg-ash-surface/50 dark:bg-gray-100/50',
            border: 'border-transparent',
            text: 'text-gray-400',
            accent: 'gray',
            button: 'bg-transparent text-transparent'
        };

        if (tier.isSpecial) return {
            bg: 'bg-gradient-to-b from-[#2a2418] to-[#1a160e] dark:from-amber-50 dark:to-white',
            border: 'border-amber-500/30 dark:border-amber-200',
            text: 'text-amber-100 dark:text-amber-900',
            accent: 'text-amber-400 dark:text-amber-600',
            button: 'bg-amber-500 hover:bg-amber-400 text-white',
            iconBg: 'bg-amber-500/20'
        };

        if (tier.highlight) return {
            bg: 'bg-gradient-to-b from-[#1e1f28] to-[#13141c] dark:from-indigo-50 dark:to-white',
            border: 'border-indigo-500/30 dark:border-indigo-200',
            text: 'text-indigo-100 dark:text-indigo-900',
            accent: 'text-indigo-400 dark:text-indigo-600',
            button: 'bg-indigo-600 hover:bg-indigo-500 text-white',
            iconBg: 'bg-indigo-500/20'
        };

        // Default (Basic/Standard)
        return {
            bg: 'bg-ash-surface dark:bg-white',
            border: 'border-ash-darker dark:border-gray-200',
            text: 'text-ash-text dark:text-gray-800',
            accent: 'text-gray-400 dark:text-gray-600',
            button: 'bg-ash-darker hover:bg-neutral-700 text-white dark:bg-black dark:text-white',
            iconBg: 'bg-ash-darker dark:bg-gray-100'
        };
    };

    const theme = getThemeColors();

    return (
        <div className={`relative group flex flex-col h-full transition-all duration-300 ${isLocked ? 'opacity-60 grayscale cursor-not-allowed' : 'hover:-translate-y-2'}`}>

            {/* --- TOP SECTION (TICKET BODY) --- */}
            <div className={`relative z-10 flex-1 p-8 rounded-3xl border ${theme.bg} ${theme.border} shadow-xl flex flex-col`}>

                {/* Badges */}
                {!isLocked && tier.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full shadow-lg border-2 border-ash-bg flex items-center gap-1">
                        <Sparkles size={10} strokeWidth={3} /> POPULAR
                    </div>
                )}
                {!isLocked && tier.isSpecial && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full shadow-lg border-2 border-ash-bg flex items-center gap-1">
                        <Crown size={10} strokeWidth={3} /> SULTAN
                    </div>
                )}

                {/* Lock Overlay */}
                {isLocked && (
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center bg-ash-darker/80 dark:bg-white/80 backdrop-blur-[2px] rounded-3xl">
                        <Lock size={32} className="text-gray-500 mb-3" />
                        <p className="text-xs font-bold text-gray-300 dark:text-neutral-800">Paket Terkunci</p>
                        <p className="text-[10px] text-gray-400 dark:text-neutral-600 mt-1 leading-relaxed">{lockMessage}</p>
                    </div>
                )}

                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                    <div className={`p-3 rounded-2xl ${theme.iconBg} ${theme.accent}`}>
                        {tier.icon}
                    </div>
                    {tier.bestFor && (
                        <span className={`text-[9px] font-bold px-2 py-1 rounded-lg border ${theme.border} ${theme.accent} opacity-80`}>
                            {tier.bestFor}
                        </span>
                    )}
                </div>

                <h3 className={`text-xl font-black mb-1 ${theme.text}`}>{tier.name}</h3>
                <div className="mb-6">
                    <PriceDisplay price={tier.price} isSpecial={tier.isSpecial} isHighlight={tier.highlight} />
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-current opacity-10 mb-6"></div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                    {tier.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm font-medium opacity-90 text-current">
                            <CheckCircle size={16} className={`shrink-0 mt-0.5 ${theme.accent}`} strokeWidth={2.5} />
                            <span className={`${theme.text}`}>{feat}</span>
                        </li>
                    ))}
                </ul>

            </div>

            {/* --- BOTTOM SECTION (TICKET STUB / ACTION) --- */}
            {/* Negatif margin agar terlihat 'nempel' seperti tiket sobek */}
            <div className="mx-4 -mt-4 pt-8 pb-4 bg-ash-darker dark:bg-gray-200 rounded-b-3xl relative z-0 flex flex-col items-center justify-center shadow-inner">
                {/* Garis Sobekan (Dashed Line) */}
                <div className="absolute top-0 w-full border-t-2 border-dashed border-ash-bg dark:border-white opacity-50"></div>

                <button
                    disabled={isLocked}
                    onClick={() => !isLocked && onOrder(tier)}
                    className={`w-[85%] py-3 rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-lg group ${theme.button} ${isLocked ? 'invisible' : ''}`}
                >
                    {tier.isSpecial ? 'Chat Sultan' : 'Pilih Paket'}
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" strokeWidth={3} />
                </button>
            </div>

        </div>
    );
};

export default PricingCard;
