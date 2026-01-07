import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Initialize with dark mode as default
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme-mode');
    // If nothing saved, default to dark (true). If saved, use that.
    return savedTheme ? savedTheme === 'dark' : true;
  });

  // Update DOM & localStorage saat theme berubah
  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    localStorage.setItem('theme-mode', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme harus dipakai dalam ThemeProvider');
  }
  return context;
};
