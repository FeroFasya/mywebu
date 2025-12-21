import React, { useState } from 'react';
import { Instagram, Mail, ChevronDown, ChevronUp, HelpCircle, Linkedin, Heart, Code, GraduationCap, Quote, Star, CheckCircle, Sparkles, MessageCircle, TrendingUp } from 'lucide-react';
import { faqs, USER_INFO } from '../data/data';

// Data Testimonial (nanti bisa dipindah ke data.js)
const testimonials = [
  {
    id: 1,
    name: "Riski Y.",
    role: "Ilustrator/Animator",
    rating: 5,
    text: "Website-nya keren banget dah!",
    date: "Dec 2025",
    verified: true
  }
];

const Profile = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="space-y-10 pb-8 animate-fade-in">
       
       {/* --- HEADER: ABOUT DEVELOPER --- */}
       <div className="pt-2">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent">
              Siapa yang Bikin?
            </h2>
            <p className="text-sm text-neutral-400">Developer di balik semua magic ini ✨</p>
          </div>
          
          {/* Developer Card - Enhanced Design */}
          <div className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-3xl p-6 border border-neutral-700 overflow-hidden group shadow-xl hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500">
             
             {/* Background Decorations */}
             <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <Code size={120} />
             </div>
             
             {/* Animated Gradient Orb */}
             <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-600/20 rounded-full blur-3xl group-hover:bg-indigo-600/30 transition-all duration-700"></div>

             {/* Badge Role */}
             <div className="inline-flex items-center gap-1.5 bg-indigo-500/20 text-indigo-300 px-3 py-1.5 rounded-full text-[11px] font-bold border border-indigo-500/30 mb-6 backdrop-blur-sm">
                <GraduationCap size={14} /> Mahasiswa Informatics Eng.
             </div>

             <div className="flex flex-col sm:flex-row gap-6 items-start">
                
                {/* Foto Profile */}
                <div className="relative shrink-0 mx-auto sm:mx-0">
                    <div className="w-28 h-28 rounded-2xl bg-neutral-800 overflow-hidden border-2 border-indigo-500 rotate-3 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 shadow-2xl shadow-indigo-500/20">
                        <img src="/images/profil.jpg" alt="Fero" className="w-full h-full object-cover" />
                    </div>
                    {/* Floating Emoji with Animation */}
                    <div className="absolute -bottom-2 -right-2 bg-neutral-900 text-2xl rounded-full p-1.5 border-2 border-neutral-700 shadow-lg animate-bounce">
                      👋
                    </div>
                    {/* Sparkle Effect */}
                    <div className="absolute -top-1 -left-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Sparkles size={16} className="text-indigo-400 animate-pulse" />
                    </div>
                </div>

                {/* Narasi Perkenalan */}
                <div className="space-y-4 flex-1">
                    <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                          Feroga Radja F.
                        </h3>
                        <p className="text-xs text-neutral-400 flex items-center gap-2 mt-1">
                          @ferogaaa — <span className="text-indigo-400 font-semibold">The Developer</span>
                        </p>
                    </div>
                    
                    {/* Kotak Dialog / Quote - Enhanced */}
                    <div className="relative bg-neutral-950/80 backdrop-blur-sm p-4 rounded-xl rounded-tl-none border border-neutral-700/50 shadow-lg">
                        <Quote size={14} className="absolute top-3 left-3 text-indigo-500/30" />
                        <p className="text-xs text-neutral-300 leading-relaxed pl-4 italic">
                            "Halo! Aku Fero. Aku bikin platform ini karena gemes liat banyak kreator hebat tapi portofolionya masih pake PDF/Drive yang ribet. <br/><br/>
                            Aku bantu kamu punya <span className="text-indigo-400 font-semibold">'Rumah Digital'</span> yang proper, biar karyamu makin dihargai. Let's make history together!"
                        </p>
                    </div>

                    {/* Social Buttons - Enhanced */}
                    <div className="flex flex-wrap gap-2 pt-2">
                        <a 
                          href={`https://instagram.com/${USER_INFO.instagram}`} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="p-2.5 bg-neutral-950 rounded-xl text-neutral-400 hover:text-pink-500 hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-500 hover:border-transparent transition-all border border-neutral-800 group/social"
                        >
                          <Instagram size={16} className="group-hover/social:text-white transition-colors" />
                        </a>
                        <a 
                          href={`mailto:${USER_INFO.email}`} 
                          className="p-2.5 bg-neutral-950 rounded-xl text-neutral-400 hover:text-red-500 hover:bg-gradient-to-br hover:from-red-500 hover:to-red-600 hover:border-transparent transition-all border border-neutral-800 group/social"
                        >
                          <Mail size={16} className="group-hover/social:text-white transition-colors" />
                        </a>
                        <a 
                          href={`https://linkedin.com/in/${USER_INFO.linkedin}`} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="p-2.5 bg-neutral-950 rounded-xl text-neutral-400 hover:text-blue-600 hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700 hover:border-transparent transition-all border border-neutral-800 group/social"
                        >
                          <Linkedin size={16} className="group-hover/social:text-white transition-colors" />
                        </a>
                    </div>
                </div>
             </div>
          </div>
       </div>

       {/* --- TESTIMONIALS SECTION (NEW!) --- */}
       <div>
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <MessageCircle size={24} className="text-green-500" />
              Kata Mereka
            </h3>
            <p className="text-xs text-neutral-400">
              Real feedback dari klien yang puas 💚
            </p>
          </div>

          {/* Testimonial Cards - Horizontal Scroll */}
          <div className="flex overflow-x-auto gap-4 pb-4 -mx-6 px-6 scrollbar-hide snap-x snap-mandatory">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="snap-center shrink-0 w-[85vw] sm:w-80 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-5 border border-neutral-700 shadow-lg hover:shadow-xl hover:shadow-green-500/10 hover:border-green-500/30 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                
                {/* Header: Stars + Verified */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={14} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  {testimonial.verified && (
                    <div className="flex items-center gap-1 bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-[9px] font-bold border border-green-500/30">
                      <CheckCircle size={10} />
                      Verified
                    </div>
                  )}
                </div>

                {/* Quote Icon */}
                <div className="mb-3">
                  <Quote size={24} className="text-neutral-700 group-hover:text-green-500/30 transition-colors" />
                </div>

                {/* Testimonial Text */}
                <p className="text-sm text-neutral-300 leading-relaxed mb-4 italic">
                  "{testimonial.text}"
                </p>

                {/* Footer: Client Info */}
                <div className="flex items-center justify-between pt-4 border-t border-neutral-800">
                  <div>
                    <p className="text-sm font-bold text-white">{testimonial.name}</p>
                    <p className="text-[10px] text-neutral-500">{testimonial.role}</p>
                  </div>
                  <p className="text-[10px] text-neutral-600">{testimonial.date}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Badge Section */}
          <div className="mt-6 bg-neutral-900/50 border border-neutral-800 rounded-xl p-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-indigo-400">10+</div>
                <div className="text-[10px] text-neutral-500 mt-1">Projects Done</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400">100%</div>
                <div className="text-[10px] text-neutral-500 mt-1">Satisfaction</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400">⚡2h</div>
                <div className="text-[10px] text-neutral-500 mt-1">Avg. Response</div>
              </div>
            </div>
          </div>

          {/* Additional Trust Note */}
          <div className="mt-4 text-center">
            <p className="text-[11px] text-neutral-500 italic">
              💬 Butuh bukti lebih? Chat aja, aku bisa share chat history asli (dengan izin klien)
            </p>
          </div>
       </div>

       {/* --- FAQ SECTION --- */}
       <div>
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <HelpCircle size={24} className="text-indigo-500" />
              Tanya Jawab (F.A.Q)
            </h3>
            <p className="text-xs text-neutral-400">
              Pertanyaan yang sering ditanyain 🤔
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className="bg-neutral-900/50 rounded-xl border border-neutral-800 overflow-hidden hover:border-neutral-700 transition-all"
                >
                    <button 
                        onClick={() => toggleFaq(idx)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-neutral-800/50 transition-colors group"
                    >
                        <span className="text-sm font-bold text-neutral-300 group-hover:text-white transition-colors pr-4">
                          {faq.question}
                        </span>
                        <div className={`shrink-0 p-1 rounded-lg transition-all ${openFaqIndex === idx ? 'bg-indigo-600 text-white rotate-180' : 'bg-neutral-800 text-neutral-500'}`}>
                          <ChevronDown size={16} />
                        </div>
                    </button>
                    
                    {openFaqIndex === idx && (
                        <div className="px-4 pb-4 pt-0 animate-fade-in">
                            <p className="text-xs text-neutral-400 leading-relaxed border-t border-neutral-800 pt-3">
                                {faq.answer}
                            </p>
                        </div>
                    )}
                </div>
            ))}
          </div>
       </div>

       {/* --- FOOTER ENHANCED --- */}
       <div className="text-center pt-10 border-t border-neutral-900">
          <div className="flex flex-col items-center gap-3 mb-4">
            <div className="flex items-center gap-2 text-neutral-600">
              <Heart size={16} className="text-red-500 fill-red-500 animate-pulse" />
              <span className="text-xs">Made with passion</span>
            </div>
            <p className="text-[11px] text-neutral-600">
              © 2026 MyWebu. Built with Logic & Magic.
            </p>
          </div>
          
          <div className="inline-flex items-center gap-2 text-[11px] text-neutral-700 bg-neutral-900/50 px-4 py-2 rounded-full border border-neutral-800">
            Developed by <span className="font-bold text-indigo-400">Feroga Radja Fasyahira</span>
          </div>
       </div>

    </div>
  );
};

export default Profile;