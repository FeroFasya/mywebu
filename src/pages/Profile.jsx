import React, { useState } from 'react';
import { Instagram, Mail, ChevronDown, ChevronUp, HelpCircle, Linkedin, Heart, Code, GraduationCap, Quote } from 'lucide-react';
import { faqs, USER_INFO } from '../data/data';

const Profile = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="space-y-10 pb-8 animate-fade-in">
       
       {/* --- HEADER: ABOUT DEVELOPER --- */}
       <div className="pt-2">
          <h2 className="text-2xl font-bold text-white mb-6 px-1">Siapa yang Bikin?</h2>
          
          {/* Developer Card - Layout Storytelling */}
          <div className="relative bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-6 border border-neutral-700 overflow-hidden group">
             
             {/* Background Decoration */}
             <div className="absolute top-0 right-0 p-8 opacity-5">
                <Code size={120} />
             </div>
             
             {/* Badge Role */}
             <div className="inline-flex items-center gap-1 bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-[10px] font-bold border border-indigo-500/30 mb-6">
                <GraduationCap size={14} /> Mahasiswa Informatics Eng.
             </div>

             <div className="flex flex-col sm:flex-row gap-6 items-start">
                
                {/* Foto Profile (Agak besar biar kayak Character VN) */}
                <div className="relative shrink-0 mx-auto sm:mx-0">
                    <div className="w-24 h-24 rounded-2xl bg-neutral-800 overflow-hidden border-2 border-indigo-500 rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-xl">
                        <img src="/images/profil.jpg" alt="Fero" className="w-full h-full object-cover" />
                    </div>
                    {/* Floating Emoji */}
                    <div className="absolute -bottom-2 -right-2 bg-neutral-900 text-xl rounded-full p-1 border border-neutral-700">👋</div>
                </div>

                {/* Narasi Perkenalan */}
                <div className="space-y-3">
                    <div>
                        <h3 className="text-xl font-bold text-white">Feroga Radja F.</h3>
                        <p className="text-xs text-neutral-400">@ferogaaa — The Developer</p>
                    </div>
                    
                    {/* Kotak Dialog / Quote */}
                    <div className="relative bg-neutral-950/50 p-3 rounded-xl rounded-tl-none border border-neutral-700/50">
                        <Quote size={12} className="absolute top-2 left-2 text-neutral-600 opacity-50" />
                        <p className="text-xs text-neutral-300 leading-relaxed pl-2 italic">
                            "Halo! Aku Fero. Aku bikin platform ini karena gemes liat banyak kreator hebat tapi portofolionya masih pake PDF/Drive yang ribet. <br/><br/>
                            Aku bantu kamu punya 'Rumah Digital' yang proper, biar karyamu makin dihargai. Let's make history together!"
                        </p>
                    </div>

                    {/* Social Buttons */}
                    <div className="flex flex-wrap gap-2 pt-2">
                        <a href={`https://instagram.com/${USER_INFO.instagram}`} target="_blank" rel="noreferrer" className="p-2 bg-neutral-950 rounded-lg text-neutral-400 hover:text-pink-500 hover:bg-white transition-all border border-neutral-800"><Instagram size={16} /></a>
                        <a href={`mailto:${USER_INFO.email}`} className="p-2 bg-neutral-950 rounded-lg text-neutral-400 hover:text-red-500 hover:bg-white transition-all border border-neutral-800"><Mail size={16} /></a>
                        <a href={`https://linkedin.com/in/${USER_INFO.linkedin}`} target="_blank" rel="noreferrer" className="p-2 bg-neutral-950 rounded-lg text-neutral-400 hover:text-blue-600 hover:bg-white transition-all border border-neutral-800"><Linkedin size={16} /></a>
                    </div>
                </div>
             </div>
          </div>
       </div>

       {/* --- FAQ SECTION --- */}
       <div>
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <HelpCircle size={16} className="text-indigo-500" />
            Tanya Jawab (F.A.Q)
          </h3>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
                <div key={idx} className="bg-neutral-900/50 rounded-xl border border-neutral-800 overflow-hidden">
                    <button 
                        onClick={() => toggleFaq(idx)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-neutral-800/50 transition-colors"
                    >
                        <span className="text-sm font-bold text-neutral-300">{faq.question}</span>
                        {openFaqIndex === idx ? <ChevronUp size={16} className="text-indigo-400"/> : <ChevronDown size={16} className="text-neutral-500"/>}
                    </button>
                    {openFaqIndex === idx && (
                        <div className="px-4 pb-4 pt-0">
                            <p className="text-xs text-neutral-400 leading-relaxed border-t border-neutral-800 pt-3">
                                {faq.answer}
                            </p>
                        </div>
                    )}
                </div>
            ))}
          </div>
       </div>

       {/* --- FOOTER SIMPLE --- */}
       <div className="text-center pt-8 border-t border-neutral-900 flex flex-col items-center gap-2">
          <p className="text-[10px] text-neutral-600">© 2025 Fero Works. Built with Logic & Magic.</p>
          <div className="flex items-center gap-1 text-[10px] text-neutral-700">
             Develop by <span className="font-bold text-neutral-500">Feroga Radja</span>
          </div>
       </div>

    </div>
  );
};

export default Profile;