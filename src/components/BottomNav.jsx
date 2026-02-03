import React from 'react';
import { Home, Grid, Tag, Info } from 'lucide-react';

const BottomNav = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: <Home size={20} strokeWidth={2.5} /> },
    { id: 'catalog', label: 'Desain', icon: <Grid size={20} strokeWidth={2.5} /> },
    { id: 'pricing', label: 'Order', icon: <Tag size={20} strokeWidth={2.5} /> },
    { id: 'profile', label: 'Tentang', icon: <Info size={20} strokeWidth={2.5} /> },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 pointer-events-none">
      <div className="max-w-md md:max-w-4xl lg:max-w-7xl mx-auto pointer-events-auto">
        
        {/* Container Utama */}
        <div className="bg-ash-surface dark:bg-white border-t-4 border-ash-darker dark:border-gray-200 px-6 py-3 flex justify-between items-end relative transition-colors duration-500 rounded-t-3xl shadow-[0_-5px_20px_rgba(0,0,0,0.1)] pb-5 md:pb-3">
          
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className="group flex flex-col items-center gap-1 relative focus:outline-none"
              >
                {/* MIKI UPDATE: 'Ngaceng' Reduced.
                   - Translate Y dikurangi dari -4 jadi -2.
                   - Shadow dikurangi sedikit.
                */}
                <div 
                    className={`
                        p-3 rounded-xl transition-all duration-300 flex items-center justify-center
                        ${isActive 
                            ? 'bg-indigo-500 text-white border-b-4 border-indigo-700 -translate-y-2 shadow-md shadow-indigo-500/30' 
                            : 'bg-transparent text-gray-400 dark:text-gray-400 hover:bg-neutral-800 dark:hover:bg-gray-100 border-b-4 border-transparent'
                        }
                    `}
                >
                  {item.icon}
                </div>

                {/* Label */}
                <span 
                    className={`
                        text-[10px] font-bold tracking-wide transition-all duration-300 absolute -bottom-1
                        ${isActive 
                            ? 'opacity-100 translate-y-0 text-indigo-400 dark:text-indigo-600' 
                            : 'opacity-0 translate-y-1 text-gray-400'
                        }
                    `}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BottomNav;