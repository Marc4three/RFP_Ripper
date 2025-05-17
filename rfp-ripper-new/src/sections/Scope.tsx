'use client';

import SectionHeader from '../components/SectionHeader';
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
    <section className="relative section-padding bg-background overflow-hidden">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background/80 animate-gradient-move" />
      </div>
      <div className="container-custom relative z-10">
        <SectionHeader
          title="Phase 1 Scope of Work"
          subtitle="Comprehensive features designed to streamline your RFP processing workflow"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.06, boxShadow: '0 0 32px #21C2F8aa' }}
              whileTap={{ scale: 0.98 }}
              className="card flex flex-col items-center text-center transition-all duration-200 cursor-pointer"
            >
              <feature.icon className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-primary mb-2">{feature.title}</h3>
              <p className="text-secondary">{feature.description}</p>
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
          <h3 className="text-xl font-bold text-primary mb-2">Deliverables</h3>
          <ul className="text-secondary space-y-2 text-left">
            <li>• Complete source code and documentation</li>
            <li>• Deployment instructions and configuration guide</li>
            <li>• User manual and training materials</li>
            <li>• 30 days of post-launch support</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Scope; 