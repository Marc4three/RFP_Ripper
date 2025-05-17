'use client';

import SectionHeader from '../components/SectionHeader';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const steps = [
  {
    title: 'Upload',
    description: 'Upload RFP documents in PDF or Word format'
  },
  {
    title: 'Extract',
    description: 'Automatically extract key information and fields'
  },
  {
    title: 'Edit',
    description: 'Review and edit extracted data through an intuitive UI'
  },
  {
    title: 'Store',
    description: 'Securely store and organize processed RFPs'
  }
];

const Solution = () => {
  return (
    <section className="relative section-padding bg-background overflow-hidden">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background/80 animate-gradient-move" />
      </div>
      <div className="container-custom relative z-10">
        <SectionHeader
          title="Let's Make It Work"
          subtitle="Phase 1 MVP: A streamlined solution to transform your RFP processing workflow"
        />
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.06, boxShadow: '0 0 32px #21C2F8aa' }}
              whileTap={{ scale: 0.98 }}
              className="card relative flex flex-col items-center text-center transition-all duration-200 cursor-pointer"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRightIcon className="w-8 h-8 text-accent" />
                </div>
              )}
              <div className="text-2xl font-bold text-accent mb-2">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">{step.title}</h3>
              <p className="text-secondary">{step.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="card max-w-3xl mx-auto text-center"
        >
          <h3 className="text-xl font-bold text-primary mb-2">Timeline</h3>
          <p className="text-secondary mb-4">
            Estimated development time: 8-12 weeks
          </p>
          <div className="flex justify-center gap-6">
            <motion.div className="card min-w-[120px] transition-all duration-200 cursor-pointer"
              whileHover={{ scale: 1.06, boxShadow: '0 0 32px #21C2F8aa' }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-2xl font-bold text-accent">8</div>
              <div className="text-sm text-secondary">Weeks</div>
            </motion.div>
            <motion.div className="card min-w-[120px] transition-all duration-200 cursor-pointer"
              whileHover={{ scale: 1.06, boxShadow: '0 0 32px #21C2F8aa' }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-2xl font-bold text-accent">12</div>
              <div className="text-sm text-secondary">Weeks</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solution; 