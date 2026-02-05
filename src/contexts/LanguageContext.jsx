import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

import { translations } from '../data/translations';

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('id');

  useEffect(() => {
    const saved = localStorage.getItem('language');
    if (saved) {
      setLanguage(saved);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'id' ? 'en' : 'id';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
