'use client';

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
            Investment
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A structured payment plan designed for consistent delivery and cash flow management
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingData.map((month, index) => (
            <motion.div
              key={month.month}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-bold mb-4">{month.month}</h3>
              <ul className="space-y-3 mb-6">
                {month.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-[#21C2F8] mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="text-2xl font-bold text-[#21C2F8]">
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
          className="glass-card p-8 max-w-3xl mx-auto text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Total Investment</h3>
          <div className="text-4xl font-bold text-[#21C2F8] mb-4">$25,000</div>
          <p className="text-gray-400">
            This investment includes all development, testing, documentation, and 30 days of post-launch support.
            Payment schedule designed to align with project milestones and ensure consistent delivery.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing; 