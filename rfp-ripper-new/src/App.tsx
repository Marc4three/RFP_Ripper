import Hero from './sections/Hero';
import Problem from './sections/Problem';
import Solution from './sections/Solution';
import Scope from './sections/Scope';
import Pricing from './sections/Pricing';
import Roadmap from './sections/Roadmap';
import TechStack from './sections/TechStack';
import CTA from './sections/CTA';
import SectionDivider from './components/SectionDivider';

function App() {
  return (
    <main className="min-h-screen bg-background">
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
    </main>
  );
}

export default App;
