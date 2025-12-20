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
      <div className="max-w-md mx-auto">
        <div className="bg-neutral-950/80 backdrop-blur-lg border-t border-neutral-800 px-6 py-3 flex justify-between items-center relative">
          
          {/* MIKI: Indikator Glow yang bergerak (Opsional tapi keren) */}
          <div className="absolute top-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent w-full left-0 opacity-50"></div>

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center gap-1 transition-all duration-300 ${
                activeTab === item.id 
                  ? 'text-indigo-400 transform -translate-y-1' 
                  : 'text-neutral-500 hover:text-neutral-300'
              }`}
            >
              <div className={`p-1.5 rounded-xl transition-all ${activeTab === item.id ? 'bg-indigo-500/10' : ''}`}>
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