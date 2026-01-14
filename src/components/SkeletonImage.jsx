import React, { useState } from 'react';

const SkeletonImage = ({ src, alt, className, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* 1. SKELETON (Muncul saat gambar belum siap) */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-neutral-800 dark:bg-neutral-800 animate-pulse flex items-center justify-center z-10">
           {/* Opsional: Icon gambar pecah/loading kecil di tengah */}
           <svg className="w-8 h-8 text-neutral-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
           </svg>
        </div>
      )}

      {/* 2. GAMBAR ASLI (Disembunyikan opacity-0 sampai onLoadingComplete) */}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-all duration-700 ease-in-out
          ${isLoaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-105 blur-lg'}
        `}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
    </div>
  );
};

export default SkeletonImage;