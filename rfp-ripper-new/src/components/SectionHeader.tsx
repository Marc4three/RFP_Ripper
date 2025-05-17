import { motion } from 'framer-motion';
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="mb-12 text-center"
  >
    <h2 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-accent via-primary to-white drop-shadow-[0_2px_32px_#21C2F8aa] mb-4 tracking-tight animate-pulse">
      {title}
    </h2>
    {subtitle && (
      <p className="text-lg md:text-2xl text-white/80 font-medium max-w-2xl mx-auto">
        {subtitle}
      </p>
    )}
  </motion.div>
);

export default SectionHeader; 