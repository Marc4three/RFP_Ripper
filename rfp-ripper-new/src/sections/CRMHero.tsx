import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

const CRMHero = () => {
  return (
    <section className="relative section-padding bg-background overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background/80 animate-gradient-move" />
      </div>
      <div className="container-custom relative z-10">
        <SectionHeader
          title="Clinovators CRM App Phase 2"
          subtitle="Transitioning from Power Apps to a custom web application with enhanced dashboards"
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center items-center gap-4 mt-12"
        >
          <div className="flex items-center gap-6">
            <div className="relative w-56 h-24">
              <img
                src="/P5TSLogo.png"
                alt="P5TechSolutions"
                className="object-contain w-full h-full drop-shadow-[0_0_16px_#21C2F8aa]"
                onError={(e) => {
                  e.currentTarget.src = "/p5techsolutions.svg";
                }}
              />
            </div>
            <span className="text-accent text-4xl font-bold">×</span>
            <div className="relative w-56 h-24">
              <img
                src="/Vatortechlogo.png"
                alt="Vatortech"
                className="object-contain w-full h-full drop-shadow-[0_0_16px_#21C2F8aa]"
                onError={(e) => {
                  e.currentTarget.src = "/vatortech.svg";
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CRMHero; 