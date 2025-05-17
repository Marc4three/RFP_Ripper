'use client';

import SectionHeader from '../components/SectionHeader';
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
    <section className="relative section-padding bg-background overflow-hidden">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background/80 animate-gradient-move" />
      </div>
      <div className="container-custom relative z-10">
        <SectionHeader
          title="The RFP Challenge"
          subtitle="Traditional RFP processing is time-consuming, error-prone, and inefficient. Let's change that."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.06, boxShadow: '0 0 32px #21C2F8aa' }}
              whileTap={{ scale: 0.98 }}
              className="card flex flex-col items-center text-center transition-all duration-200 cursor-pointer"
            >
              <problem.icon className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-primary mb-2">{problem.title}</h3>
              <p className="text-secondary">{problem.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.06, boxShadow: '0 0 32px #21C2F8aa' }}
          whileTap={{ scale: 0.98 }}
          className="card max-w-3xl mx-auto transition-all duration-200 cursor-pointer mt-16 text-center"
        >
          <h3 className="text-xl font-bold text-primary mb-2">The Solution</h3>
          <p className="text-secondary">
            Our RFP Ripper Tool automates the extraction and processing of RFP data, reducing manual work by up to 80% and ensuring consistent, accurate results.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem; 