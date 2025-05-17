'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] bg-background overflow-hidden">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background/80 animate-gradient-move" />
      </div>
      <div className="container-custom relative z-10 flex flex-col items-center justify-center text-center py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-12 mb-12"
        >
          <motion.img
            src="/logos/P5TSLogo.png"
            alt="P5TechSolutions"
            className="object-contain w-56 h-24 drop-shadow-[0_0_32px_#21C2F8aa]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <span className="text-4xl font-extrabold text-white/60 mx-6 hidden sm:inline-block">×</span>
          <motion.img
            src="/logos/Vatortechlogo.png"
            alt="Vatortech"
            className="object-contain w-56 h-24 drop-shadow-[0_0_32px_#21C2F8aa]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-5xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-accent via-primary to-white drop-shadow-[0_2px_32px_#21C2F8aa] mb-6 tracking-tight"
        >
          RFP Ripper Tool
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-xl md:text-3xl text-white/80 font-medium mb-10 max-w-2xl mx-auto"
        >
          Automated. Accurate. Effortless. <br />
          <span className="text-accent font-bold">Custom-built for Vatortech by P5TechSolutions</span>
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ scale: 1.08, boxShadow: '0 0 32px #21C2F8' }}
          whileTap={{ scale: 0.97 }}
          className="btn-primary text-xl px-10 py-4 rounded-full shadow-lg shadow-accent/30 hover:shadow-accent/60 transition-all duration-200"
        >
          Walk Through the Vision
        </motion.button>
      </div>
    </section>
  );
};

export default Hero; 