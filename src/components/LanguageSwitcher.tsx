import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2 bg-white/80 backdrop-blur-sm p-1 rounded-full shadow-sm border border-[#ece7e1]">
      <button
        onClick={() => setLanguage('pt-BR')}
        className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
          language === 'pt-BR' 
            ? 'bg-[#8d735c] text-white shadow-sm' 
            : 'text-[#8d735c] hover:bg-[#ece7e1]'
        }`}
      >
        PT
      </button>
      <button
        onClick={() => setLanguage('en-US')}
        className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
          language === 'en-US' 
            ? 'bg-[#8d735c] text-white shadow-sm' 
            : 'text-[#8d735c] hover:bg-[#ece7e1]'
        }`}
      >
        EN
      </button>
    </div>
  );
}
