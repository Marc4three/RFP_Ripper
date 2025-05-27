import SectionHeader from '../components/SectionHeader';

const CRMPricing = () => {
  return (
    <section className="relative section-padding bg-background overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background/80 animate-gradient-move" />
      </div>
      <div className="container-custom relative z-10">
        <SectionHeader
          title="Investment"
          subtitle="Preferred client rate for Phase 2 development"
          titleClassName="text-6xl md:text-7xl font-extrabold text-center mb-4 text-accent drop-shadow-[0_2px_32px_#21C2F8aa]"
          subtitleClassName="text-2xl md:text-3xl text-center text-white/80 mb-12"
        />
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-accent mb-6">Phase 2 Investment</h2>
          <div className="divide-y divide-accent/10">
            <div className="flex flex-col md:flex-row md:items-center justify-between py-4">
              <span className="text-xl font-medium text-secondary">Preferred Client Rate</span>
              <span className="text-2xl font-bold text-accent">$5,000 – $7,000</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between py-4">
              <span className="text-xl font-medium text-secondary">Work Window</span>
              <span className="text-xl text-primary font-semibold">June 1 – July 1</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between py-4">
              <span className="text-xl font-medium text-secondary">Final Rate TBD Based On</span>
              <span className="text-xl text-primary font-semibold">UAT feedback & scope refinements</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CRMPricing; 