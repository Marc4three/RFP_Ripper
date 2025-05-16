'use client';

import { motion } from 'framer-motion';
import { DocumentTextIcon, ClockIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';

const problems = [
  {
    icon: DocumentTextIcon,
    title: 'Manual Work',
    description: 'Hours spent manually copying and pasting information from RFPs into spreadsheets and documents.'
  },
  {
    icon: ClockIcon,
    title: 'Slow Deadlines',
    description: 'Tight deadlines become even tighter when dealing with manual data entry and verification.'
  },
  {
    icon: ExclamationCircleIcon,
    title: 'Inefficiency',
    description: 'Human error and repetitive tasks lead to inconsistencies and wasted time.'
  }
];

const Problem = () => {
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
            The RFP Challenge
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Traditional RFP processing is time-consuming, error-prone, and inefficient.
            Let's change that.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card p-6"
            >
              <problem.icon className="w-12 h-12 text-[#21C2F8] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
              <p className="text-gray-400">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">The Solution</h3>
            <p className="text-gray-400">
              Our RFP Ripper Tool automates the extraction and processing of RFP data,
              reducing manual work by up to 80% and ensuring consistent, accurate results.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem; 