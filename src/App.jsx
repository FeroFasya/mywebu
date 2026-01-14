import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Pricing from './pages/Pricing';
import Profile from './pages/Profile';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);
  
  // MIKI: Global State untuk pilihan User biar sinkron antar halaman
  const [selectedTheme, setSelectedTheme] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Logic Render Halaman ala Mobile App
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home onNavigate={setActiveTab} />;
      case 'catalog':
        return <Catalog onNavigate={setActiveTab} setSelectedTheme={setSelectedTheme} />;
      case 'pricing':
        return <Pricing selectedTheme={selectedTheme} />;
      case 'profile':
        return <Profile />;
      default:
        return <Home onNavigate={setActiveTab} />;
    }
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        {/* MIKI UPDATE: Mengganti bg-neutral-950 jadi bg-ash */}
        <div className={`min-h-screen bg-ash text-ash-text dark:bg-light-bg dark:text-light-text font-sans pb-24 selection:bg-indigo-500 selection:text-white transition-colors duration-500`}>
          
          {/* Header Top Fixed */}
          <Navbar />

          {/* Main Content Area */}
          <main className="max-w-md md:max-w-4xl lg:max-w-7xl mx-auto pt-20 px-6 animate-fade-in">
            {renderContent()}
          </main>

          {/* Navigation Bottom Fixed */}
          <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
          
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;