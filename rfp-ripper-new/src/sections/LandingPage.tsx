'use client';

import SectionHeader from '../components/SectionHeader';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const LandingPage = () => {
  const [p5LogoError, setP5LogoError] = useState(false);
  const [vatorLogoError, setVatorLogoError] = useState(false);

  return (
    <section className="relative section-padding bg-background overflow-hidden">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background/80 animate-gradient-move" />
      </div>
      <div className="container-custom relative z-10">
        <SectionHeader
          title="Welcome Vatortech"
          subtitle="Choose a project to view its details and estimates"
        />

        {/* Logos Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center items-center gap-4 mb-16"
        >
          <div className="flex items-center gap-6">
            <div className="relative w-56 h-24">
              {!p5LogoError ? (
                <img
                  src="/P5TSLogo.png"
                  alt="P5TechSolutions"
                  className="object-contain w-full h-full drop-shadow-[0_0_16px_#21C2F8aa]"
                  onError={() => setP5LogoError(true)}
                />
              ) : (
                <img
                  src="/p5techsolutions.svg"
                  alt="P5TechSolutions"
                  className="object-contain w-full h-full drop-shadow-[0_0_16px_#21C2F8aa]"
                />
              )}
            </div>
          </div>
          <span className="text-accent text-4xl font-bold">×</span>
          <div className="flex items-center gap-4">
            <div className="relative w-56 h-24">
              {!vatorLogoError ? (
                <img
                  src="/Vatortechlogo.png"
                  alt="Vatortech"
                  className="object-contain w-full h-full drop-shadow-[0_0_16px_#21C2F8aa]"
                  onError={() => setVatorLogoError(true)}
                />
              ) : (
                <img
                  src="/vatortech.svg"
                  alt="Vatortech"
                  className="object-contain w-full h-full drop-shadow-[0_0_16px_#21C2F8aa]"
                />
              )}
            </div>
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* RFP Ripper Project Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card hover:shadow-lg transition-shadow duration-300"
          >
            <Link to="/rfp-estimate" className="block p-6">
              <div className="flex items-center mb-4">
                <h3 className="text-xl font-bold text-primary">RFP Ripper Project</h3>
              </div>
              <p className="text-secondary mb-6">
                A comprehensive document analysis and automation platform for streamlining RFP processing and analysis.
              </p>
              <div className="flex items-center text-accent font-semibold group">
                <span>View RFP Ripper Details</span>
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

          {/* CRM App Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card hover:shadow-lg transition-shadow duration-300"
          >
            <Link to="/crm-app" className="block p-6">
              <div className="flex items-center mb-4">
                <h3 className="text-xl font-bold text-primary">CRM App Project</h3>
              </div>
              <p className="text-secondary mb-6">
                Phase 2 development: Transitioning from Power Apps to a custom web application with enhanced dashboards and role-based access.
              </p>
              <div className="flex items-center text-accent font-semibold group">
                <span>View CRM App Details</span>
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
      </div>
    </section>
  );
};

export default LandingPage; 