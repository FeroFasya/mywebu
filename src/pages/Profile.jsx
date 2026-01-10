import React, { useState } from 'react';
import { Instagram, Mail, ChevronDown, ChevronUp, HelpCircle, Linkedin, Heart, Code, GraduationCap, Quote, Star, CheckCircle, Sparkles, MessageCircle, TrendingUp } from 'lucide-react';
import { faqs, USER_INFO } from '../data/data';
import { useLanguage } from '../contexts/LanguageContext';

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
  },
  {
    id: 2,
    name: "Mami & Papi",
    role: "Orangtuaku",
    rating: 5,
    text: "Semangat Kuliah dan Kerjanya ya nak, kami selalu dukung kamu!",
    date: "Jan 2026",
    verified: false,
    isstarred: false
  },
];

const Profile = () => {
  const { t } = useLanguage();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="space-y-10 pb-8 animate-fade-in">
       
       {/* --- HEADER: ABOUT DEVELOPER --- */}
       <div className="pt-2">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-white dark:text-light-text mb-2 bg-gradient-to-r from-white dark:from-light-text via-indigo-200 dark:via-neutral-400 to-white dark:to-light-text bg-clip-text text-transparent">
              {t('whoMadeIt')}
            </h2>
            <p className="text-sm text-neutral-400 dark:text-neutral-600">{t('developerMagic')}</p>
          </div>
          
          {/* Developer Card - Enhanced Design */}
          <div className="relative bg-gradient-to-br from-neutral-900 dark:from-light-surface via-neutral-800 dark:via-light-surface to-neutral-900 dark:to-light-bg rounded-3xl p-6 border border-neutral-700 dark:border-light-border overflow-hidden group shadow-xl dark:shadow-none hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500">
             
             {/* Background Decorations */}
             <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-10 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-500 text-neutral-800 dark:text-neutral-200">
                <Code size={120} />
             </div>
             
             {/* Animated Gradient Orb */}
             <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-600/20 dark:bg-indigo-600/5 rounded-full blur-3xl group-hover:bg-indigo-600/30 dark:group-hover:bg-indigo-600/10 transition-all duration-700"></div>

             {/* Badge Role */}
             <div className="inline-flex items-center gap-1.5 bg-indigo-500/20 dark:bg-indigo-500/10 text-indigo-300 dark:text-indigo-700 px-3 py-1.5 rounded-full text-[11px] font-bold border border-indigo-500/30 dark:border-indigo-400/30 mb-6 backdrop-blur-sm">
                <GraduationCap size={14} /> Mahasiswa Informatics Eng.
             </div>

             <div className="flex flex-col sm:flex-row gap-6 items-start">
                
                {/* Foto Profile */}
                <div className="relative shrink-0 mx-auto sm:mx-0">
                    <div className="w-28 h-28 rounded-2xl bg-neutral-800 dark:bg-light-border overflow-hidden border-2 border-indigo-500 dark:border-indigo-600 rotate-3 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 shadow-2xl shadow-indigo-500/20">
                        <img src="/images/profil.jpg" alt="Fero" className="w-full h-full object-cover" />
                    </div>
                    {/* Floating Emoji with Animation */}
                    <div className="absolute -bottom-2 -right-2 bg-neutral-900 dark:bg-light-surface text-2xl rounded-full p-1.5 border-2 border-neutral-700 dark:border-light-border shadow-lg animate-bounce">
                      👋
                    </div>
                    {/* Sparkle Effect */}
                    <div className="absolute -top-1 -left-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Sparkles size={16} className="text-indigo-400 dark:text-indigo-600 animate-pulse" />
                    </div>
                </div>

                {/* Narasi Perkenalan */}
                <div className="space-y-4 flex-1">
                    <div>
                        <h3 className="text-2xl font-bold text-white dark:text-light-text group-hover:text-indigo-300 dark:group-hover:text-indigo-600 transition-colors">
                          Feroga Radja F.
                        </h3>
                        <p className="text-xs text-neutral-400 dark:text-neutral-600 flex items-center gap-2 mt-1">
                          @ferogaaa — <span className="text-indigo-400 dark:text-indigo-600 font-semibold">The Developer</span>
                        </p>
                    </div>
                    
                    {/* Kotak Dialog / Quote - Enhanced */}
                    <div className="relative bg-neutral-950/80 dark:bg-light-border/30 backdrop-blur-sm p-4 rounded-xl rounded-tl-none border border-neutral-700/50 dark:border-light-border/50 shadow-lg">
                        <Quote size={14} className="absolute top-3 left-3 text-indigo-500/30 dark:text-indigo-400/30" />
                        <p className="text-xs text-neutral-300 dark:text-neutral-700 leading-relaxed pl-4 italic">
                            "Halo! Aku Fero. Aku bikin platform ini karena gemes liat banyak kreator hebat tapi portofolionya masih pake PDF/Drive yang ribet. <br/><br/>
                            Aku bantu kamu punya <span className="text-indigo-400 dark:text-indigo-600 font-semibold">'Rumah Digital'</span> yang proper, biar karyamu makin dihargai. Let's make history together!"
                        </p>
                    </div>

                    {/* Social Buttons - Enhanced */}
                    <div className="flex flex-wrap gap-2 pt-2">
                        <a 
                          href={`https://instagram.com/${USER_INFO.instagram}`} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="p-2.5 bg-neutral-950 dark:bg-light-surface rounded-xl text-neutral-400 dark:text-neutral-700 hover:text-pink-500 dark:hover:text-pink-600 hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-500 dark:hover:from-pink-500/20 dark:hover:to-orange-500/20 hover:border-transparent transition-all border border-neutral-800 dark:border-light-border group/social"
                        >
                          <Instagram size={16} className="group-hover/social:text-white dark:group-hover/social:text-pink-600 transition-colors" />
                        </a>
                        <a 
                          href={`mailto:${USER_INFO.email}`} 
                          className="p-2.5 bg-neutral-950 dark:bg-light-surface rounded-xl text-neutral-400 dark:text-neutral-700 hover:text-red-500 dark:hover:text-red-600 hover:bg-gradient-to-br hover:from-red-500 hover:to-red-600 dark:hover:from-red-500/20 dark:hover:to-red-600/20 hover:border-transparent transition-all border border-neutral-800 dark:border-light-border group/social"
                        >
                          <Mail size={16} className="group-hover/social:text-white dark:group-hover/social:text-red-600 transition-colors" />
                        </a>
                        <a 
                          href={`https://linkedin.com/in/${USER_INFO.linkedin}`} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="p-2.5 bg-neutral-950 dark:bg-light-surface rounded-xl text-neutral-400 dark:text-neutral-700 hover:text-blue-600 dark:hover:text-blue-700 hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700 dark:hover:from-blue-600/20 dark:hover:to-blue-700/20 hover:border-transparent transition-all border border-neutral-800 dark:border-light-border group/social"
                        >
                          <Linkedin size={16} className="group-hover/social:text-white dark:group-hover/social:text-blue-700 transition-colors" />
                        </a>
                    </div>
                </div>
             </div>
          </div>
       </div>

       {/* --- TESTIMONIALS SECTION (NEW!) --- */}
       <div>
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white dark:text-light-text mb-2 flex items-center gap-2">
              <MessageCircle size={24} className="text-green-500" />
              Kata Mereka
            </h3>
            <p className="text-xs text-neutral-400 dark:text-neutral-600">
              Real feedback dari klien yang puas 💚
            </p>
          </div>

          {/* Testimonial Cards - Horizontal Scroll */}
          <div className="flex overflow-x-auto gap-4 pb-4 -mx-6 px-6 scrollbar-hide snap-x snap-mandatory">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="snap-center shrink-0 w-[85vw] sm:w-80 bg-gradient-to-br from-neutral-900 dark:from-light-surface to-neutral-800 dark:to-light-bg rounded-2xl p-5 border border-neutral-700 dark:border-light-border shadow-lg dark:shadow-none hover:shadow-xl hover:shadow-green-500/10 dark:hover:shadow-none hover:border-green-500/30 dark:hover:border-green-400/30 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                
                {/* Header: Stars + Verified */}
                <div className="flex items-center justify-between mb-4">
                  {(testimonial.isstarred ?? true) && (
                    <div className="flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={14} className="text-yellow-500 dark:text-yellow-600 fill-yellow-500 dark:fill-yellow-600" />
                      ))}
                    </div>
                  )}
                  {testimonial.verified && (
                    <div className="flex items-center gap-1 bg-green-500/20 dark:bg-green-500/10 text-green-400 dark:text-green-600 px-2 py-1 rounded-full text-[9px] font-bold border border-green-500/30 dark:border-green-500/20">
                      <CheckCircle size={10} />
                      Verified
                    </div>
                  )}
                </div>

                {/* Quote Icon */}
                <div className="mb-3">
                  <Quote size={24} className="text-neutral-700 dark:text-neutral-400 group-hover:text-green-500/30 dark:group-hover:text-green-500/20 transition-colors" />
                </div>

                {/* Testimonial Text */}
                <p className="text-sm text-neutral-300 dark:text-neutral-700 leading-relaxed mb-4 italic">
                  "{testimonial.text}"
                </p>

                {/* Footer: Client Info */}
                <div className="flex items-center justify-between pt-4 border-t border-neutral-800 dark:border-light-border">
                  <div>
                    <p className="text-sm font-bold text-white dark:text-light-text">{testimonial.name}</p>
                    <p className="text-[10px] text-neutral-500 dark:text-neutral-600">{testimonial.role}</p>
                  </div>
                  <p className="text-[10px] text-neutral-600 dark:text-neutral-700">{testimonial.date}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Badge Section */}
          <div className="mt-6 bg-neutral-900/50 dark:bg-light-surface border border-neutral-800 dark:border-light-border rounded-xl p-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-indigo-400 dark:text-indigo-600">10+</div>
                <div className="text-[10px] text-neutral-500 dark:text-neutral-600 mt-1">Projects Done</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400 dark:text-green-600">100%</div>
                <div className="text-[10px] text-neutral-500 dark:text-neutral-600 mt-1">Satisfaction</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400 dark:text-yellow-600">⚡2h</div>
                <div className="text-[10px] text-neutral-500 dark:text-neutral-600 mt-1">Avg. Response</div>
              </div>
            </div>
          </div>

          {/* Additional Trust Note */}
          <div className="mt-4 text-center">
            <p className="text-[11px] text-neutral-500 dark:text-neutral-600 italic">
              💬 Butuh bukti lebih? Chat aja, aku bisa share chat history asli (dengan izin klien)
            </p>
          </div>
       </div>

       {/* --- FAQ SECTION --- */}
       <div>
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white dark:text-light-text mb-2 flex items-center gap-2">
              <HelpCircle size={24} className="text-indigo-500 dark:text-indigo-600" />
              Tanya Jawab (F.A.Q)
            </h3>
            <p className="text-xs text-neutral-400 dark:text-neutral-600">
              Pertanyaan yang sering ditanyain 🤔
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className="bg-neutral-900/50 dark:bg-light-surface rounded-xl border border-neutral-800 dark:border-light-border overflow-hidden hover:border-neutral-700 dark:hover:border-neutral-300 transition-all"
                >
                    <button 
                        onClick={() => toggleFaq(idx)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-neutral-800/50 dark:hover:bg-light-border transition-colors group"
                    >
                        <span className="text-sm font-bold text-neutral-300 dark:text-neutral-700 group-hover:text-white dark:group-hover:text-light-text transition-colors pr-4">
                          {faq.question}
                        </span>
                        <div className={`shrink-0 p-1 rounded-lg transition-all ${openFaqIndex === idx ? 'bg-indigo-600 dark:bg-indigo-700 text-white rotate-180' : 'bg-neutral-800 dark:bg-light-border text-neutral-500 dark:text-neutral-700'}`}>
                          <ChevronDown size={16} />
                        </div>
                    </button>
                    
                    {openFaqIndex === idx && (
                        <div className="px-4 pb-4 pt-0 animate-fade-in">
                            <p className="text-xs text-neutral-400 dark:text-neutral-700 leading-relaxed border-t border-neutral-800 dark:border-light-border pt-3">
                                {faq.answer}
                            </p>
                        </div>
                    )}
                </div>
            ))}
          </div>
       </div>

       {/* --- FOOTER ENHANCED --- */}
       <div className="text-center pt-10 border-t border-neutral-900 dark:border-light-border">
          <div className="flex flex-col items-center gap-3 mb-4">
            <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-700">
              <Heart size={16} className="text-red-500 dark:text-red-600 fill-red-500 dark:fill-red-600 animate-pulse" />
              <span className="text-xs">Made with passion</span>
            </div>
            <p className="text-[11px] text-neutral-600 dark:text-neutral-700">
              © 2026 MyWebu. Built with Logic & Magic.
            </p>
          </div>
          
          <div className="inline-flex items-center gap-2 text-[11px] text-neutral-700 dark:text-neutral-700 bg-neutral-900/50 dark:bg-light-surface px-4 py-2 rounded-full border border-neutral-800 dark:border-light-border">
            Developed by <span className="font-bold text-indigo-400 dark:text-indigo-600">Feroga Radja Fasyahira</span>
          </div>
       </div>

    </div>
  );
};

export default Profile;