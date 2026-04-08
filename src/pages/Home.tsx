import { Globe, MessageCircle, Instagram, Linkedin } from 'lucide-react';
import LinkButton from '../components/LinkButton';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from '../components/LanguageSwitcher';
import yasModel from '../assets/yas-model.svg';

export default function Home() {
  const { t } = useLanguage();
  
  const whatsappMessage = encodeURIComponent(t.whatsappMessage);
  const whatsappUrl = `https://wa.me/5511942150355?text=${whatsappMessage}`;
  const instagramUrl = `https://www.instagram.com/dra.yasmimalmeidaa/`;
  const linkedinUrl = `https://www.linkedin.com/in/yasmimcruzalmeida/`;
  

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
    },
    {
      icon: <Instagram size={24} />,
      text: t.instagramButton,
      url: instagramUrl
    },
    {
      icon: <Linkedin size={24} />,
      text: t.linkedinButton,
      url: linkedinUrl
    }
  ];

  return (
    <div className="min-h-screen bg-[#a99079] flex flex-col items-center p-6 font-sans text-white">
      <LanguageSwitcher />
      
      <div className="w-full max-w-md flex flex-col flex-grow pt-12">
        {/* Content Section */}
        <div className="flex-grow">
          {/* Profile Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center mb-10 text-center"
          >
            <div className="w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden mb-6 flex items-center justify-center">
              <img 
                src={yasModel} 
                alt={t.title} 
                className="w-full h-full object-cover"
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
        </div>

        {/* Footer Section */}
        <footer className="mt-12 pb-4 text-center text-white/70 text-sm space-y-2">
          <p className="opacity-80">{t.footer.replace('{year}', new Date().getFullYear().toString())}</p>
          
          <div className="pt-4 border-t border-white/10 flex flex-col items-center space-y-0.5 opacity-40 hover:opacity-100 transition-opacity text-[10px] uppercase tracking-wider">
            <p className="font-medium">{t.developedBy}</p>
            <div className="flex gap-3">
              <a href={`mailto:${t.devEmail}`} className="hover:underline">{t.devEmail}</a>
              <a href={`tel:${t.devPhone.replace(/\s/g, '')}`} className="hover:underline">{t.devPhone}</a>
              <a href={`https://${t.devWebsite}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{t.devWebsite}</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
