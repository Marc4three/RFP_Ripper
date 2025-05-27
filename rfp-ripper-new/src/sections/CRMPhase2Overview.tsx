import SectionHeader from '../components/SectionHeader';
import { motion } from 'framer-motion';

const CRMPhase2Overview = () => {
  return (
    <section className="relative section-padding bg-background overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background/80 animate-gradient-move" />
      </div>
      <div className="container-custom relative z-10">
        <SectionHeader
          title="Phase 2 Deliverables"
          subtitle="Comprehensive enhancements to elevate your CRM system"
        />
        
        <div className="space-y-8">
          {/* Main Application */}
          <div className="card p-6">
            <h3 className="text-xl font-bold text-primary mb-4 text-left">🔄 Transition to Custom Web App</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="space-y-2 text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Building new UI/UX for the application</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Connecting to existing SQL Server</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Implementing role-based access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>SharePoint integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Microsoft authentication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Migrating logic and workflows from Power Apps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Recreating conditional logic or flows from Power Automate</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Embedding or integrating Power BI dashboards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>QA testing across all roles and views</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Deploying to production (e.g., Azure Web App)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Creating optional admin panel for user/settings management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Writing basic documentation or usage notes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Optimizing for performance (queries, loading, auth)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Power BI Dashboards */}
          <div className="card p-6">
            <h3 className="text-xl font-bold text-primary mb-4 text-left">📊 Power BI Dashboard Enhancements</h3>
            <ul className="list-disc list-inside space-y-2 text-secondary">
              <li>New updated look and feel of Power BI reporting</li>
              <li>Executive Insights Dashboard</li>
              <li>Daily Vested vs Non-Vested performance tracking</li>
              <li>Financial metrics (PMPM rate based on vested vs non-vested)*</li>
              <li>Provider and scheduler productivity tracking</li>
              <li>Conversion rate logic and discrepancy report</li>
            </ul>
            <p className="text-secondary mt-4 text-sm">* Jovan: Would you like to add operations expenses to the financial metrics?</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CRMPhase2Overview; 