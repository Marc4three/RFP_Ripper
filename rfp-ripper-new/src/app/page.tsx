import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Problem from './sections/Problem'
import Solution from './sections/Solution'
import Scope from './sections/Scope'
import Pricing from './sections/Pricing'
import Roadmap from './sections/Roadmap'
import TechStack from './sections/TechStack'
import CTA from './sections/CTA'

export default function Home() {
  return (
    <main className="bg-dark min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Scope />
      <Pricing />
      <Roadmap />
      <TechStack />
      <CTA />
    </main>
  )
} 