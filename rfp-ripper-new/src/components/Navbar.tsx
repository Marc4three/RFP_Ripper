'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {
  const [p5LogoError, setP5LogoError] = useState(false);
  const [vatorLogoError, setVatorLogoError] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10 shadow-lg"
    >
      <div className="header-container flex items-center justify-between py-4">
        <div className="flex items-center gap-6">
          <div className="relative w-32 h-10">
            {!p5LogoError ? (
              <img
                src="/P5TSLogo.png"
                alt="P5TechSolutions"
                className="object-contain w-full h-full drop-shadow-[0_0_16px_#21C2F8aa]"
                onError={() => setP5LogoError(true)}
              />
            ) : (
              <img
                src="/p5techsolutions.svg"
                alt="P5TechSolutions"
                className="object-contain w-full h-full drop-shadow-[0_0_16px_#21C2F8aa]"
              />
            )}
          </div>
          <div className="hidden md:flex flex-col">
            <span className="text-white text-lg font-semibold opacity-80 tracking-wide">
              Custom proposal for <span className="text-accent font-bold">Vatortech</span>
            </span>
            <span className="text-white/60 text-sm">
              Customer Proposals Portal
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-accent text-2xl font-bold">×</span>
          <div className="relative w-32 h-10">
            {!vatorLogoError ? (
              <img
                src="/Vatortechlogo.png"
                alt="Vatortech"
                className="object-contain w-full h-full drop-shadow-[0_0_16px_#21C2F8aa]"
                onError={() => setVatorLogoError(true)}
              />
            ) : (
              <img
                src="/vatortech.svg"
                alt="Vatortech"
                className="object-contain w-full h-full drop-shadow-[0_0_16px_#21C2F8aa]"
              />
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar; 