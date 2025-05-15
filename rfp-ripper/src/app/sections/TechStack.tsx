'use client';

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
            Technology Stack
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Modern, scalable, and secure technologies powering the RFP Ripper Tool
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card flex flex-col items-center text-center"
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
          className="mt-16 text-center"
        >
          <div className="card max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-primary mb-2">Why This Stack?</h3>
            <p className="text-secondary">
              Our technology choices prioritize scalability, security, and developer productivity. The stack enables rapid development while maintaining enterprise-grade reliability and performance.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack; 