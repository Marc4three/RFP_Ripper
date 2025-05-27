import SectionHeader from '../components/SectionHeader';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Estimates = () => {
  return (
    <section className="relative section-padding bg-background overflow-hidden">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background/80 animate-gradient-move" />
      </div>
      <div className="container-custom relative z-10">
        <SectionHeader
          title="Choose an Estimate"
          subtitle="Select the estimate you'd like to review"
        />
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* RFP Ripper Estimate Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card hover:shadow-lg transition-shadow duration-300"
          >
            <Link to="/rfp-estimate" className="block p-6">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">📝</span>
                <h3 className="text-xl font-bold text-primary">RFP Ripper Estimate</h3>
              </div>
              <p className="text-secondary mb-6">
                A breakdown of features, pricing, and scope for Vatortech's document analysis and automation platform.
              </p>
              <div className="flex items-center text-accent font-semibold group">
                <span>View RFP Ripper Estimate</span>
                <svg 
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </motion.div>

          {/* CRM Phase 2 Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card hover:shadow-lg transition-shadow duration-300"
          >
            <Link to="/phase2-estimate" className="block p-6">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🛠️</span>
                <h3 className="text-xl font-bold text-primary">CRM App Phase 2</h3>
              </div>
              <p className="text-secondary mb-6">
                The final development phase to transition the CRM from Power Apps to a custom web app, including enhanced dashboards.
              </p>
              <div className="flex items-center text-accent font-semibold group">
                <span>View CRM Phase 2 Estimate</span>
                <svg 
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Back to Home Link */}
        <div className="mt-12 text-center">
          <Link 
            to="/" 
            className="inline-flex items-center text-accent hover:text-primary transition-colors"
          >
            <svg 
              className="w-5 h-5 mr-2 transform rotate-180" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Estimates; 