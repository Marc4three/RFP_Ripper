'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding">
      <div className="container-custom text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-6 gradient-text"
        >
          Meet the RFP Ripper Tool
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 mb-12"
        >
          Built by P5TechSolutions, tailored for Vatortech
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center space-x-8 mb-12"
        >
          <div className="relative w-40 h-12">
            <Image
              src="/logos/P5TSLogo.png"
              alt="P5TechSolutions"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-40 h-12">
            <Image
              src="/logos/Vatortechlogo.png"
              alt="Vatortech"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
        
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-gradient-to-r from-[#243A78] to-[#21C2F8] rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Walk Through the Vision
        </motion.button>
      </div>
      
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#243A78]/10 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero; 