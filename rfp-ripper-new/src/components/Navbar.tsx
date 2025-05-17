'use client';

import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10 shadow-lg"
    >
      <div className="header-container flex items-center justify-between py-4">
        <div className="flex items-center gap-6">
          <div className="relative w-44 h-14">
            <img
              src="/logos/P5TSLogo.png"
              alt="P5TechSolutions"
              className="object-contain w-44 h-14 drop-shadow-[0_0_16px_#21C2F8aa]"
            />
          </div>
          <span className="text-white text-lg font-semibold hidden md:block opacity-80 tracking-wide">
            Custom proposal for <span className="text-accent font-bold">Vatortech</span>
          </span>
        </div>
        <div className="relative w-44 h-14">
          <img
            src="/logos/Vatortechlogo.png"
            alt="Vatortech"
            className="object-contain w-44 h-14 drop-shadow-[0_0_16px_#21C2F8aa]"
          />
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar; 