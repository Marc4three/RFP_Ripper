'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const CTA = () => {
  return (
    <section className="section-padding bg-black/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Let's Build This Together
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Ready to transform your RFP processing workflow? Let's schedule a meeting
            to discuss the next steps.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-[#243A78] to-[#21C2F8] rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Schedule a Meeting
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card p-8 max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div className="relative w-32 h-8 mb-4 md:mb-0">
              <Image
                src="/logos/P5TSLogo.png"
                alt="P5TechSolutions"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-32 h-8">
              <Image
                src="/logos/Vatortechlogo.png"
                alt="Vatortech"
                fill
                className="object-contain"
              />
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              This proposal is confidential and intended solely for Vatortech.
              Unauthorized distribution or reproduction is prohibited.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © {new Date().getFullYear()} P5TechSolutions. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA; 