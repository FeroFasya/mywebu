import React from 'react';
import { MessageCircle, Sun, Moon, Globe } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  return (
    // Navbar Container - Hybrid Pop Style (Solid + Thick Bottom Border)
    <nav className="fixed top-0 w-full z-40 bg-ash-surface dark:bg-white border-b-4 border-ash-darker dark:border-gray-200 transition-colors duration-500 rounded-b-3xl shadow-lg shadow-black/10 dark:shadow-none">
      <div className="max-w-md md:max-w-4xl lg:max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3">
             {/* MIKI FIX: Kembali ke Bulat Sempurna (rounded-full) */}
             <div className="w-10 h-10 bg-ash-darker dark:bg-gray-100 rounded-full border-2 border-ash-darker dark:border-gray-200 overflow-hidden shadow-sm p-0.5">
                <img
                    src="/images/mywebu.png"
                    className="w-full h-full object-contain rounded-full"
                    alt="Fero Works Logo"
                />
             </div>
            <span className="font-black text-xl tracking-tight text-white dark:text-neutral-900">
                My<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Webu</span>
            </span>
        </div>
        
        {/* Right Side: Pop Buttons (Tetap Kotak Tumpul) */}
        <div className="flex items-center gap-3">
          
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="group w-10 h-10 flex items-center justify-center bg-ash-darker dark:bg-gray-100 rounded-xl text-gray-400 dark:text-gray-500 border-b-4 border-ash-text/20 dark:border-gray-300 hover:border-indigo-500 dark:hover:border-indigo-400 hover:bg-indigo-500/10 hover:text-indigo-400 dark:hover:text-indigo-600 active:border-b-0 active:translate-y-1 transition-all"
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDark ? <Sun size={20} strokeWidth={2.5} /> : <Moon size={20} strokeWidth={2.5} />}
          </button>

          {/* Language Toggle Button */}
          <button
            onClick={toggleLanguage}
            className="group w-10 h-10 flex items-center justify-center bg-ash-darker dark:bg-gray-100 rounded-xl text-xs font-black text-gray-400 dark:text-gray-500 border-b-4 border-ash-text/20 dark:border-gray-300 hover:border-pink-500 dark:hover:border-pink-400 hover:bg-pink-500/10 hover:text-pink-400 dark:hover:text-pink-600 active:border-b-0 active:translate-y-1 transition-all"
            title={language === 'id' ? 'Switch to English' : 'Beralih ke Indonesian'}
          >
            {language === 'id' ? 'EN' : 'ID'}
          </button>

          {/* Direct WA Button */}
          <a 
            href="https://wa.me/628815750989" 
            target="_blank" 
            rel="noreferrer"
            className="group w-10 h-10 flex items-center justify-center bg-ash-darker dark:bg-gray-100 rounded-xl text-gray-400 dark:text-gray-500 border-b-4 border-ash-text/20 dark:border-gray-300 hover:bg-green-500 hover:text-white hover:border-green-700 active:border-b-0 active:translate-y-1 transition-all"
          >
            <MessageCircle size={20} strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;