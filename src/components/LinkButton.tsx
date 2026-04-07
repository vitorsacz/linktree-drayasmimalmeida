import { motion } from 'motion/react';
import { LinkButtonProps } from '../types/LinkButtonProps';
import React from 'react';

const LinkButton: React.FC<LinkButtonProps> = ({ icon, text, url }) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center w-full p-4 mb-4 bg-[#ece7e1] border border-white/20 rounded-2xl shadow-lg hover:bg-white transition-all duration-300 group"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center justify-center w-12 h-12 bg-[#8d735c] text-white rounded-xl group-hover:bg-[#a99079] transition-colors duration-300">
        {icon}
      </div>
      <span className="flex-1 text-center font-bold text-[#8d735c] transition-colors duration-300">
        {text}
      </span>
      <div className="w-12" /> {/* Spacer to balance the icon on the left */}
    </motion.a>
  );
};

export default LinkButton;
