import React from 'react';
import { MessageCircle, Sun, Moon, Globe } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  return (
    <nav className="fixed top-0 w-full z-40 bg-ash-surface/90 dark:bg-light-bg/80 backdrop-blur-md border-b border-ash-darker dark:border-light-border transition-all duration-500 rounded-b-3xl shadow-lg shadow-black/20">
      <div className="max-w-md md:max-w-4xl lg:max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo Text/Image */}
        <div className="flex items-center gap-2">
             <img
            src="/images/mywebu.png"
            className="h-8 w-auto object-contain border border-ash-darker dark:border-light-border bg-transparent rounded-full"
            alt="Fero Works Logo"
          />
            <span className="font-bold text-lg tracking-tight text-ash-text dark:text-light-text">My<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-cyan-300">Webu</span></span>
        </div>
        
        {/* Right Side: Theme, Language, & WA Buttons */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 bg-ash-darker dark:bg-light-surface rounded-full text-ash-text dark:text-light-text hover:text-white dark:hover:text-light-text hover:bg-ash dark:hover:bg-light-border transition-all duration-300 border border-ash-darker dark:border-light-border"
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Language Toggle Button */}
          <button
            onClick={toggleLanguage}
            className="p-2 bg-ash-darker dark:bg-light-surface rounded-full text-ash-text dark:text-light-text hover:text-white dark:hover:text-light-text hover:bg-ash dark:hover:bg-light-border transition-all duration-300 border border-ash-darker dark:border-light-border text-sm font-bold"
            title={language === 'id' ? 'Switch to English' : 'Beralih ke Indonesian'}
          >
            {language === 'id' ? 'EN' : 'ID'}
          </button>

          {/* Direct WA Button */}
          <a 
            href="https://wa.me/628815750989" 
            target="_blank" 
            rel="noreferrer"
            className="p-2 bg-ash-darker dark:bg-light-surface rounded-full text-ash-text dark:text-light-text hover:text-white dark:hover:text-light-text hover:bg-ash dark:hover:bg-light-border transition-all duration-300 border border-ash-darker dark:border-light-border"
          >
            <MessageCircle size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;