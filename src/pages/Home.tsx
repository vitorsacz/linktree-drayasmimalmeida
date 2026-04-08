import { Globe, MessageCircle } from 'lucide-react';
import LinkButton from '../components/LinkButton';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function Home() {
  const { t } = useLanguage();
  
  const whatsappMessage = encodeURIComponent(t.whatsappMessage);
  const whatsappUrl = `https://wa.me/5511942150355?text=${whatsappMessage}`;

  const links = [
    {
      icon: <Globe size={24} />,
      text: t.websiteButton,
      url: "https://drayasmimalmeida.com.br"
    },
    {
      icon: <MessageCircle size={24} />,
      text: t.whatsappButton,
      url: whatsappUrl
    }
  ];

  return (
    <div className="min-h-screen bg-[#a99079] flex flex-col items-center justify-center p-6 font-sans text-white">
      <LanguageSwitcher />
      
      <div className="w-full max-w-md">
        {/* Profile Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center mb-10 text-center"
        >
          <div className="w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden mb-6 bg-[#8d735c] flex items-center justify-center p-2">
            <img 
              src="/static/images/logo-yas.png" 
              alt={t.title} 
              className="w-full h-full object-contain translate-x-1"
            />
          </div>
          <h1 className="text-3xl font-bold mb-2 drop-shadow-sm">{t.title}</h1>
          <p className="text-white/90 font-medium text-lg">{t.subtitle}</p>
        </motion.div>

        {/* Links Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {links.map((link, index) => (
            <LinkButton 
              key={index}
              icon={link.icon}
              text={link.text}
              url={link.url}
            />
          ))}
        </motion.div>

        {/* Footer */}
        <footer className="mt-12 text-center text-white/70 text-sm">
          <p>{t.footer.replace('{year}', new Date().getFullYear().toString())}</p>
        </footer>
      </div>
    </div>
  );
}
