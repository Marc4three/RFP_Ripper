'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const CTA = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
            Let's Build This Together
          </h2>
          <p className="text-secondary max-w-2xl mx-auto mb-8">
            Ready to transform your RFP processing workflow? Let's schedule a meeting
            to discuss the next steps.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg"
          >
            Schedule a Meeting
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-6">
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
            <p className="text-secondary text-sm">
              This proposal is confidential and intended solely for Vatortech.
              Unauthorized distribution or reproduction is prohibited.
            </p>
            <p className="text-tertiary text-sm mt-2">
              © {new Date().getFullYear()} P5TechSolutions. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA; 