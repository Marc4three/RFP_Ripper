import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './sections/Hero';
import Problem from './sections/Problem';
import Solution from './sections/Solution';
import Scope from './sections/Scope';
import Pricing from './sections/Pricing';
import Roadmap from './sections/Roadmap';
import Phase2Overview from './sections/Phase2Overview';
import TechStack from './sections/TechStack';
import CTA from './sections/CTA';
import SectionDivider from './components/SectionDivider';
import LandingPage from './sections/LandingPage';
import CRMHero from './sections/CRMHero';
import CRMPhase2Overview from './sections/CRMPhase2Overview';
import CRMPricing from './sections/CRMPricing';
import CRMCTA from './sections/CRMCTA';

// RFP Ripper Project Page
const RFPProjectPage = () => {
  return (
    <>
      <div className="bg-background">
        <Hero />
      </div>
      <SectionDivider />
      <div className="bg-background/90">
        <Problem />
      </div>
      <SectionDivider />
      <div className="bg-background">
        <Solution />
      </div>
      <SectionDivider />
      <div className="bg-background/90">
        <Scope />
      </div>
      <SectionDivider />
      <div className="bg-background">
        <Pricing />
      </div>
      <SectionDivider />
      <div className="bg-background/90">
        <Roadmap />
      </div>
      <SectionDivider />
      <div className="bg-background">
        <TechStack />
      </div>
      <SectionDivider />
      <div className="bg-background/90">
        <CTA />
      </div>
    </>
  );
};

// CRM App Project Page
const CRMProjectPage = () => {
  return (
    <>
      <div className="bg-background">
        <CRMHero />
      </div>
      <SectionDivider />
      <div className="bg-background/90">
        <CRMPhase2Overview />
      </div>
      <SectionDivider />
      <div className="bg-background">
        <CRMPricing />
      </div>
      <SectionDivider />
      <div className="bg-background/90">
        <CRMCTA />
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <main className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/rfp-estimate" element={<RFPProjectPage />} />
          <Route path="/crm-app" element={<CRMProjectPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
