import SectionHeader from '../components/SectionHeader';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="relative section-padding bg-background overflow-hidden">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background/80 animate-gradient-move" />
      </div>
      <div className="container-custom relative z-10">
        <SectionHeader
          title="Let's Build This Together"
          subtitle="Ready to transform your RFP processing workflow? Let's schedule a meeting to discuss the next steps."
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.06, boxShadow: '0 0 32px #21C2F8aa' }}
          whileTap={{ scale: 0.98 }}
          className="card max-w-4xl mx-auto transition-all duration-200 cursor-pointer"
        >
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-6">
            <div className="w-32 h-8 mb-4 md:mb-0">
              <img
                src="/P5TSLogo.png"
                alt="P5 Tech Solutions"
                className="object-contain w-full h-full"
                onError={(e) => {
                  e.currentTarget.src = "/p5techsolutions.svg";
                }}
              />
            </div>
            <div className="w-32 h-8">
              <img
                src="/Vatortechlogo.png"
                alt="Vatortech"
                className="object-contain w-full h-full"
                onError={(e) => {
                  e.currentTarget.src = "/vatortech.svg";
                }}
              />
            </div>
          </div>
          <div className="text-center">
            <p className="text-secondary text-sm">
              This proposal is confidential and intended solely for Vatortech.
              Unauthorized distribution or reproduction is prohibited.
            </p>
            <p className="text-tertiary text-sm mt-2">
              © {new Date().getFullYear()} P5 Tech Solutions. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA; 