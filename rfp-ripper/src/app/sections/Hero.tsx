'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom text-center flex flex-col items-center justify-center min-h-[60vh]">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold text-primary mb-4"
        >
          Meet the RFP Ripper Tool
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-2xl text-primary/60 mb-10"
        >
          Built by P5TechSolutions, tailored for Vatortech
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10"
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
          className="btn-primary text-lg"
        >
          Walk Through the Vision
        </motion.button>
      </div>
    </section>
  );
};

export default Hero; 