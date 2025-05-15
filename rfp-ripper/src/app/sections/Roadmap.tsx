'use client';

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
            Phase 2 Roadmap
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Future enhancements to expand functionality and improve user experience
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roadmapFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card flex flex-col items-center text-center hover:bg-gray-50 transition-colors duration-200"
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
          className="mt-16 text-center"
        >
          <div className="card max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-primary mb-2">Future Vision</h3>
            <p className="text-secondary">
              Phase 2 features will be developed based on user feedback and business needs. Timeline and pricing for Phase 2 will be determined after successful completion of Phase 1.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Roadmap; 