'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/10"
    >
      <div className="container-custom px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative w-32 h-8">
            <Image
              src="/logos/P5TSLogo.png"
              alt="P5TechSolutions"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-sm text-gray-400 hidden md:block">
            Custom proposal for Vatortech
          </span>
        </div>
        
        <div className="relative w-32 h-8">
          <Image
            src="/logos/Vatortechlogo.png"
            alt="Vatortech"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 