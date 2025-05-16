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
            Phase 2 Roadmap
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Future enhancements to expand functionality and improve user experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roadmapFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 hover:bg-white/10 transition-colors duration-300"
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
            <h3 className="text-2xl font-bold mb-4">Future Vision</h3>
            <p className="text-gray-400">
              Phase 2 features will be developed based on user feedback and business needs.
              Timeline and pricing for Phase 2 will be determined after successful completion of Phase 1.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Roadmap; 