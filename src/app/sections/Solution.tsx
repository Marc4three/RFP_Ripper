'use client';

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
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Let's Make It Work
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Phase 1 MVP: A streamlined solution to transform your RFP processing workflow
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card p-6 relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRightIcon className="w-8 h-8 text-[#21C2F8]" />
                </div>
              )}
              <div className="text-2xl font-bold text-[#21C2F8] mb-2">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="glass-card p-8 max-w-3xl mx-auto text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Timeline</h3>
          <p className="text-gray-400 mb-4">
            Estimated development time: 8-12 weeks
          </p>
          <div className="flex justify-center space-x-4">
            <div className="glass-card p-4 min-w-[120px]">
              <div className="text-2xl font-bold text-[#21C2F8]">8</div>
              <div className="text-sm text-gray-400">Weeks</div>
            </div>
            <div className="glass-card p-4 min-w-[120px]">
              <div className="text-2xl font-bold text-[#21C2F8]">12</div>
              <div className="text-sm text-gray-400">Weeks</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solution; 