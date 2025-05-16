'use client';

import { motion } from 'framer-motion';
import {
  DocumentArrowUpIcon,
  DocumentTextIcon,
  ClipboardDocumentCheckIcon,
  ChartBarIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    icon: DocumentArrowUpIcon,
    title: 'Upload RFP',
    description: 'Support for PDF and Word document formats with drag-and-drop interface'
  },
  {
    icon: DocumentTextIcon,
    title: 'Extract Fields',
    description: 'Automated extraction of key information and requirements'
  },
  {
    icon: ClipboardDocumentCheckIcon,
    title: 'Manual Review UI',
    description: 'Intuitive interface for reviewing and editing extracted data'
  },
  {
    icon: ChartBarIcon,
    title: 'Status Tracking',
    description: 'Real-time progress monitoring and status updates'
  },
  {
    icon: UserGroupIcon,
    title: 'Customer Front-end',
    description: 'User-friendly interface for accessing and managing RFPs'
  }
];

const Scope = () => {
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
            Phase 1 Scope of Work
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive features designed to streamline your RFP processing workflow
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6"
            >
              <feature.icon className="w-12 h-12 text-[#21C2F8] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
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
            <h3 className="text-2xl font-bold mb-4">Deliverables</h3>
            <ul className="text-gray-400 space-y-2 text-left">
              <li>• Complete source code and documentation</li>
              <li>• Deployment instructions and configuration guide</li>
              <li>• User manual and training materials</li>
              <li>• 30 days of post-launch support</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Scope; 