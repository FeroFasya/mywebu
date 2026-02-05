import React from 'react';

const PriceDisplay = ({ price, isSpecial = false, isHighlight = false, size = "text-2xl" }) => {
    if (!price) return null;

    // Split logic: Expects "RpXXX / $YY" or just "RpXXX"
    const parts = price.split('/');
    const mainPrice = parts[0]?.trim();
    const secondaryPrice = parts[1]?.trim();

    // Color logic based on context
    const mainColor = isSpecial
        ? 'text-amber-200 dark:text-amber-700'
        : isHighlight
            ? 'text-white dark:text-black' // Highlight card usually has dark bg or specific styling
            : 'text-ash-text dark:text-black'; // Default card

    const subColor = isSpecial
        ? 'text-amber-300/60 dark:text-amber-800/60'
        : isHighlight
            ? 'text-indigo-200/60 dark:text-gray-500'
            : 'text-gray-400 dark:text-gray-500';

    return (
        <div className="flex flex-col items-start leading-none">
            {/* Main Price (IDR) */}
            <span className={`${size} font-black tracking-tight ${mainColor} whitespace-nowrap`}>
                {mainPrice}
            </span>

            {/* Secondary Price (USD) - Smaller & Opacity */}
            {secondaryPrice && (
                <span className={`text-sm font-bold mt-1 ${subColor}`}>
                    ≈ {secondaryPrice} <span className="text-[10px] font-normal opacity-80">(USD)</span>
                </span>
            )}
        </div>
    );
};

export default PriceDisplay;
