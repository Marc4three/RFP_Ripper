'use client';

import SectionHeader from '../components/SectionHeader';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';

const pricingData = [
  {
    month: 'Month 1',
    features: [
      'Project setup and planning',
      'Core architecture development',
      'Basic UI framework'
    ],
    payment: '$8,000'
  },
  {
    month: 'Month 2',
    features: [
      'Document processing engine',
      'Data extraction implementation',
      'Review interface development'
    ],
    payment: '$8,000'
  },
  {
    month: 'Month 3',
    features: [
      'Testing and optimization',
      'Documentation',
      'Deployment and handover'
    ],
    payment: '$9,000'
  }
];

const Pricing = () => {
  return (
    <section className="relative section-padding bg-background overflow-hidden">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background/80 animate-gradient-move" />
      </div>
      <div className="container-custom relative z-10">
        <SectionHeader
          title="Investment"
          subtitle="A structured payment plan for Phase 2 development"
        />
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {pricingData.map((month, index) => (
            <motion.div
              key={month.month}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.06, boxShadow: '0 0 32px #21C2F8aa' }}
              whileTap={{ scale: 0.98 }}
              className="card flex flex-col items-center text-center transition-all duration-200 cursor-pointer"
            >
              <h3 className="text-lg font-bold text-primary mb-4">{month.month}</h3>
              <ul className="space-y-3 mb-6">
                {month.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="text-2xl font-bold text-accent">
                {month.payment}
              </div>
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
          className="card max-w-3xl mx-auto text-center transition-all duration-200 cursor-pointer"
        >
          <h3 className="text-xl font-bold text-primary mb-2">Total Investment</h3>
          <div className="text-4xl font-bold text-accent mb-4">$25,000</div>
          <p className="text-secondary">
            This investment includes all development, testing, documentation, and 30 days of post-launch support.
            Payment schedule designed to align with project milestones and ensure consistent delivery.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing; 