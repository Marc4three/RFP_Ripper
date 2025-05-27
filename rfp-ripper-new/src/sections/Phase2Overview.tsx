import SectionHeader from '../components/SectionHeader';

const Phase2Overview = () => {
  return (
    <section className="relative section-padding bg-background overflow-hidden">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background/80 animate-gradient-move" />
      </div>
      <div className="container-custom relative z-10">
        <SectionHeader
          title="Phase 2 Scope & Pricing Overview"
          subtitle="Final Development Phase (Post–Power Apps Build)"
        />
        
        <div className="space-y-8">
          {/* Timeline */}
          <div className="card p-6">
            <h3 className="text-xl font-bold text-primary mb-4">Timeline: June 1 – July 1</h3>
          </div>

          {/* Scope Overview */}
          <div className="card p-6">
            <h3 className="text-xl font-bold text-primary mb-4">🔧 Scope Overview</h3>
            <p className="text-secondary mb-4">This final phase includes:</p>
            <ul className="list-disc list-inside space-y-2 text-secondary">
              <li>Transitioning the existing Power App to a <span className="font-semibold">custom web application</span></li>
              <li>Implementing <span className="font-semibold">role-based access</span> (Schedulers, Managers, Executives)</li>
              <li>Integrating with the <span className="font-semibold">existing SQL Server backend</span></li>
              <li>Connecting to <span className="font-semibold">SharePoint</span> for document access</li>
              <li>Delivering <span className="font-semibold">enhanced Power BI dashboards</span> focused on executive insights, trending performance, and operational metrics</li>
            </ul>
          </div>

          {/* Pricing Summary */}
          <div className="card p-6">
            <h3 className="text-xl font-bold text-primary mb-4">💰 Pricing Summary</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b border-accent/20">
                    <th className="text-left py-3 px-4 text-primary font-semibold">Category</th>
                    <th className="text-left py-3 px-4 text-primary font-semibold">Description</th>
                    <th className="text-left py-3 px-4 text-primary font-semibold">Estimate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-accent/10">
                    <td className="py-3 px-4 text-primary font-semibold">Market Rate</td>
                    <td className="py-3 px-4 text-secondary">Based on industry standards for full rebuild + BI enhancements</td>
                    <td className="py-3 px-4 text-accent font-semibold">$30,000 – $35,000</td>
                  </tr>
                  <tr className="border-b border-accent/10">
                    <td className="py-3 px-4 text-primary font-semibold">Preferred Client Rate</td>
                    <td className="py-3 px-4 text-secondary">Final discounted rate for Vatortech</td>
                    <td className="py-3 px-4 text-accent font-semibold">$5,000 – $7,000 ✅</td>
                  </tr>
                  <tr className="border-b border-accent/10">
                    <td className="py-3 px-4 text-primary font-semibold">Final Rate TBD Based On</td>
                    <td className="py-3 px-4 text-secondary">
                      <ul className="list-disc list-inside">
                        <li>Final UAT feedback</li>
                        <li>Scope refinements</li>
                        <li>Change requests</li>
                      </ul>
                    </td>
                    <td className="py-3 px-4 text-secondary">—</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-primary font-semibold">Work Window</td>
                    <td className="py-3 px-4 text-secondary">All changes and deliverables to be completed from <span className="font-semibold">6/1 – 7/1</span></td>
                    <td className="py-3 px-4 text-secondary">—</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Deliverables */}
          <div className="card p-6">
            <h3 className="text-xl font-bold text-primary mb-4">📊 Included Deliverables</h3>
            <ul className="space-y-2 text-secondary">
              <li className="flex items-start">
                <span className="text-accent mr-2">✅</span>
                <span>Web App rebuild from Power Apps (custom UI, navigation, logic)</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">✅</span>
                <span>Role-based access using Azure AD (Scheduler, Manager, Executive)</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">✅</span>
                <span>SQL Server integration (existing backend)</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">✅</span>
                <span>SharePoint integration for file access</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">✅</span>
                <span>Power BI dashboard upgrades, including:</span>
              </li>
              <ul className="ml-6 space-y-2 text-secondary">
                <li>• Executive summary views</li>
                <li>• Daily vested vs. non-vested performance tracking</li>
                <li>• Call queue logic for no-shows/cancellations</li>
                <li>• Provider & scheduler productivity</li>
                <li>• Conversion rate logic and discrepancy surfacing</li>
              </ul>
            </ul>
          </div>

          {/* Market Ready Note */}
          <div className="card p-6 bg-accent/5 border border-accent/20">
            <h3 className="text-xl font-bold text-primary mb-4">🚀 Market Ready Investment</h3>
            <p className="text-secondary mb-4">
              To bring this product fully to market, including all necessary enhancements, testing, and deployment, 
              the total investment would be in the range of <span className="font-semibold text-accent">$30,000 – $35,000</span>.
            </p>
            <p className="text-secondary">
              This comprehensive package ensures a production-ready application with all features, 
              security measures, and performance optimizations in place.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Phase2Overview; 