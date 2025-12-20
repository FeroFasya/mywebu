import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Pricing from './pages/Pricing';
import Profile from './pages/Profile';

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
    <div className={`min-h-screen bg-neutral-950 text-neutral-100 font-sans pb-24 selection:bg-indigo-500 selection:text-white transition-opacity duration-700`}>
      
      {/* Header Top Fixed */}
      <Navbar />

      {/* Main Content Area */}
      <main className="max-w-md mx-auto pt-20 px-6 animate-fade-in">
        {renderContent()}
      </main>

      {/* Navigation Bottom Fixed */}
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      
    </div>
  );
};

export default App;