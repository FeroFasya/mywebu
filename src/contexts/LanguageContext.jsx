import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  id: {
    // Home Page
    heroTitle: 'Satu link untuk',
    heroDesc: 'Kumpulkan karya, pengalaman, dan profilmu dalam satu website pribadi. Rapi, estetik, dan mudah dibagikan.',
    seeExamples: 'Lihat Contoh',
    startBuilding: 'Mulai Bangun',

    // Why Website Section
    whyWebsite: 'Mengapa Website?',
    pdfProblem: 'PDF itu ribet',
    pdfDesc: 'Harus download dulu, makan memori HP orang, susah dibuka kalau sinyal jelek, dan tampilannya kaku.',
    websiteSolution: 'Website itu elegant',
    websiteDesc: 'Website pribadi keliatan profesional, mudah di-share, dan keren!',

    // What For Section
    whatFor: 'Untuk Apa?',
    digitalArchive: 'Arsip Digital',
    archiveDesc: 'Semua karyamu terkumpul rapi di satu tempat. Ga perlu ribet cari-cari.',
    personalBranding: 'Personal Branding',
    brandingDesc: 'Bangun image profesional mu. Terima lebih banyak opportunities.',

    // How To Section
    howTo: 'Gimana Caranya?',
    step1: 'Pilih Template',
    step1Desc: 'Browse desain yang sudah kami siapkan. Ada banyak pilihan.',
    step2: 'Isi Data Mu',
    step2Desc: 'Input foto, bio, portofolio, dan semua data penting.',
    step3: 'Live & Share!',
    step3Desc: 'Website mu jadi live. Tinggal share link ke siapa saja!',

    // Catalog Page
    galleryDesign: 'Galeri Desain',
    touchImage: 'Sentuh gambar untuk preview',
    limitedEdition: 'Limited Edition',
    standardCollection: 'Koleksi Standar',
    chooseDesign: 'Pilih Desain',
    previewLive: 'Preview Live',
    designsNotAvailable: 'Desain tidak tersedia untuk kategori ini',
    scroll: '← Scroll untuk melihat lebih banyak →',

    // Pricing Page
    investment: 'Investment',
    choosePackage: 'Pilih paket sesuai kebutuhanmu.',
    showComparison: 'Lihat Perbandingan Lengkap',
    hideComparison: 'Sembunyikan Perbandingan',
    buyTemplate: 'Beli Template Saja',
    templateDesc: 'Dapat Source Code, edit sendiri.',
    savePrice: 'Hemat',
    buyViaLynk: 'Beli via Lynk.id →',
    or: 'ATAU',

    // Profile Page
    whoMadeIt: 'Siapa yang Bikin?',
    developerMagic: 'Developer di balik semua magic ini ✨',
    studentEngineer: 'Mahasiswa Informatics Eng.',
    testimonials: 'Kata Mereka',
    realFeedback: 'Real feedback dari klien yang puas 💚',
    verified: 'Verified',
    projectsDone: 'Projects Done',
    satisfaction: 'Satisfaction',
    avgResponse: 'Avg. Response',
    faq: 'Tanya Jawab (F.A.Q)',
    faqDesc: 'Pertanyaan yang sering ditanyain 🤔',
    madeWithPassion: 'Made with passion',
    copyright: '© 2026 MyWebu. Built with Logic & Magic.',
    developedBy: 'Developed by',
  },
  en: {
    // Home Page
    heroTitle: 'One Link For',
    heroDesc: 'Collect your work, experience, and profile in one personal website. Neat, aesthetic, and easy to share.',
    seeExamples: 'See Examples',
    startBuilding: 'Start Building',

    // Why Website Section
    whyWebsite: 'Why a Website?',
    pdfProblem: 'PDF is messy',
    pdfDesc: 'PDFs are hard to read, difficult to share, and look unprofessional.',
    websiteSolution: 'A website is elegant',
    websiteDesc: 'A personal website looks professional, easy to share, and awesome!',

    // What For Section
    whatFor: 'What For?',
    digitalArchive: 'Digital Archive',
    archiveDesc: 'All your work collected neatly in one place. No need to search around.',
    personalBranding: 'Personal Branding',
    brandingDesc: 'Build your professional image. Receive more opportunities.',

    // How To Section
    howTo: 'How To?',
    step1: 'Choose Template',
    step1Desc: 'Browse designs we\'ve prepared. Many options available.',
    step2: 'Fill Your Data',
    step2Desc: 'Input your photos, bio, portfolio, and all important data.',
    step3: 'Live & Share!',
    step3Desc: 'Your website goes live. Just share the link with anyone!',

    // Catalog Page
    galleryDesign: 'Design Gallery',
    touchImage: 'Touch image to preview',
    limitedEdition: 'Limited Edition',
    standardCollection: 'Standard Collection',
    chooseDesign: 'Choose Design',
    previewLive: 'Preview Live',
    designsNotAvailable: 'Designs not available for this category',
    scroll: '← Scroll to see more →',

    // Pricing Page
    investment: 'Investment',
    choosePackage: 'Choose a package that suits your needs.',
    showComparison: 'See Full Comparison',
    hideComparison: 'Hide Comparison',
    buyTemplate: 'Buy Template Only',
    templateDesc: 'Get Source Code, edit yourself.',
    savePrice: 'Save',
    buyViaLynk: 'Buy via Lynk.id →',
    or: 'OR',

    // Profile Page
    whoMadeIt: 'Who Made This?',
    developerMagic: 'The developer behind all this magic ✨',
    studentEngineer: 'Informatics Engineering Student',
    testimonials: 'What They Say',
    realFeedback: 'Real feedback from satisfied clients 💚',
    verified: 'Verified',
    projectsDone: 'Projects Done',
    satisfaction: 'Satisfaction',
    avgResponse: 'Avg. Response',
    faq: 'Frequently Asked Questions',
    faqDesc: 'Questions we get asked a lot 🤔',
    madeWithPassion: 'Made with passion',
    copyright: '© 2026 MyWebu. Built with Logic & Magic.',
    developedBy: 'Developed by',
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('id');

  useEffect(() => {
    const saved = localStorage.getItem('language');
    if (saved) {
      setLanguage(saved);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'id' ? 'en' : 'id';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
