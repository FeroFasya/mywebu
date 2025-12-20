import React from 'react';
import { MessageCircle } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-40 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-md mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo Text/Image */}
        <div className="flex items-center gap-2">
             <img

            src="/images/mywebu.png"

            className="h-8 w-auto object-contain border border-neutral-700 bg-transparent rounded-full"


            alt="Fero Works Logo"

          />
            <span className="font-bold text-lg tracking-tight">My<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-cyan-300">Webu</span></span>
        </div>
        
        {/* Direct WA Button (Kanan Atas) */}
        <a 
          href="https://wa.me/628815750989" 
          target="_blank" 
          rel="noreferrer"
          className="p-2 bg-neutral-900 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors border border-neutral-800"
        >
          <MessageCircle size={20} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;