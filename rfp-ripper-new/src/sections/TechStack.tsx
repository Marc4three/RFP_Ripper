'use client';

import SectionHeader from '../components/SectionHeader';
import { motion } from 'framer-motion';

const techStack = [
  {
    category: 'Frontend',
    technologies: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
  },
  {
    category: 'Backend',
    technologies: ['Node.js', 'FastAPI', 'TypeScript', 'Python']
  },
  {
    category: 'Infrastructure',
    technologies: ['Azure Cloud', 'Azure Functions', 'Azure Storage', 'Azure App Service']
  },
  {
    category: 'AI/ML',
    technologies: ['GPT Model', 'Azure AI', 'Custom ML Models', 'NLP Processing']
  }
];

const TechStack = () => {
  return (
    <section className="relative section-padding bg-background overflow-hidden">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background/80 animate-gradient-move" />
      </div>
      <div className="container-custom relative z-10">
        <SectionHeader
          title="Technology Stack"
          subtitle="Modern, scalable, and secure technologies powering the RFP Ripper Tool"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.06, boxShadow: '0 0 32px #21C2F8aa' }}
              whileTap={{ scale: 0.98 }}
              className="card flex flex-col items-center text-center transition-all duration-200 cursor-pointer"
            >
              <h3 className="text-lg font-bold text-accent mb-4">
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.technologies.map((tech) => (
                  <li key={tech} className="text-secondary">
                    • {tech}
                  </li>
                ))}
              </ul>
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
          <h3 className="text-xl font-bold text-primary mb-2">Why This Stack?</h3>
          <p className="text-secondary">
            Our technology choices prioritize scalability, security, and developer productivity. The stack enables rapid development while maintaining enterprise-grade reliability and performance.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack; 