'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="header shadow-lg"
    >
      <div className="header-container flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-32 h-8">
            <Image
              src="/logos/P5TSLogo.png"
              alt="P5TechSolutions"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-white text-sm font-medium hidden md:block opacity-60">
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
    </motion.header>
  );
};

export default Navbar; 