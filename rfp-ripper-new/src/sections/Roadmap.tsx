'use client';

import SectionHeader from '../components/SectionHeader';
import { motion } from 'framer-motion';
import {
  UserCircleIcon,
  SparklesIcon,
  DocumentArrowDownIcon,
  ShareIcon,
  UserGroupIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const roadmapFeatures = [
  {
    icon: UserCircleIcon,
    title: 'Microsoft & Google Login',
    description: 'Secure authentication with enterprise SSO support'
  },
  {
    icon: SparklesIcon,
    title: 'GPT-powered AI Extraction',
    description: 'Advanced AI for improved data extraction accuracy'
  },
  {
    icon: DocumentArrowDownIcon,
    title: 'Export Tools',
    description: 'Export to PDF, CSV, and SharePoint formats'
  },
  {
    icon: ShareIcon,
    title: 'SharePoint Integration',
    description: 'Seamless integration with SharePoint and Planner'
  },
  {
    icon: UserGroupIcon,
    title: 'Multi-user Environment',
    description: 'Collaborative workspace for team members'
  },
  {
    icon: ChartBarIcon,
    title: 'Analytics & Monitoring',
    description: 'Usage analytics and performance monitoring'
  }
];

const Roadmap = () => {
  return (
    <section className="relative section-padding bg-background overflow-hidden">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background/80 animate-gradient-move" />
      </div>
      <div className="container-custom relative z-10">
        <SectionHeader
          title="Phase 2 Roadmap"
          subtitle="Future enhancements to expand functionality and improve user experience"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roadmapFeatures.map((feature, index) => (
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
          <h3 className="text-xl font-bold text-primary mb-2">Future Vision</h3>
          <p className="text-secondary">
            Phase 2 features will be developed based on user feedback and business needs. Timeline and pricing for Phase 2 will be determined after successful completion of Phase 1.
          </p>
        </motion.div>

        {/* Phase 2 Cost Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileHover={{ scale: 1.06, boxShadow: '0 0 32px #21C2F8aa' }}
          whileTap={{ scale: 0.98 }}
          className="card max-w-3xl mx-auto text-center transition-all duration-200 cursor-pointer mt-8"
        >
          <h3 className="text-xl font-bold text-primary mb-2">Phase 2 Estimated Cost</h3>
          <div className="text-4xl font-bold text-accent mb-4">$30,000 – $35,000</div>
          <p className="text-secondary">
            This investment covers the development of advanced features including AI-powered document analysis,
            automated proposal generation, and integration with additional business systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Roadmap; 