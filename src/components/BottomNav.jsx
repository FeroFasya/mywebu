import React from 'react';
import { Home, Grid, Tag, Info } from 'lucide-react';

const BottomNav = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: <Home size={20} /> },
    { id: 'catalog', label: 'Desain', icon: <Grid size={20} /> },
    { id: 'pricing', label: 'Order', icon: <Tag size={20} /> },
    { id: 'profile', label: 'Tentang', icon: <Info size={20} /> },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full z-50">
      <div className="max-w-md md:max-w-4xl lg:max-w-7xl mx-auto">
        {/* MIKI UPDATE: Ganti bg-neutral jadi bg-ash-surface, border jadi ash-darker, dan rounded-t-3xl */}
        <div className="bg-ash-surface/95 dark:bg-light-bg/80 backdrop-blur-lg border-t border-ash-darker dark:border-light-border px-6 py-3 flex justify-between items-center relative transition-colors duration-500 rounded-t-3xl shadow-[0_-5px_20px_rgba(0,0,0,0.2)]">
          
          {/* MIKI: Indikator Glow yang bergerak */}
          <div className="absolute top-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent w-full left-0 opacity-50"></div>

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center gap-1 transition-all duration-300 ${
                activeTab === item.id 
                  ? 'text-indigo-400 dark:text-indigo-500 transform -translate-y-1' 
                  : 'text-gray-500 dark:text-neutral-400 hover:text-ash-text dark:hover:text-neutral-600'
              }`}
            >
              <div className={`p-1.5 rounded-xl transition-all ${activeTab === item.id ? 'bg-ash dark:bg-indigo-500/15' : ''}`}>
                {item.icon}
              </div>
              <span className={`text-[10px] font-medium ${activeTab === item.id ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'} transition-all`}>
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomNav;