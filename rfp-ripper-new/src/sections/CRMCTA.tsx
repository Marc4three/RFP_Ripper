import { motion } from 'framer-motion';

const CRMCTA = () => {
  return (
    <section className="relative section-padding bg-background overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background/80 animate-gradient-move" />
      </div>
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Let's Move Forward
          </h2>
          <p className="text-white max-w-2xl mx-auto">
            Ready to begin the Phase 2 development? Let's schedule a meeting to finalize the details.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CRMCTA; 