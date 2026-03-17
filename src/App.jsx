import Nav from './components/Nav'
import Hero from './components/Hero'
import Capabilities from './components/Capabilities'
import HowItWorks from './components/HowItWorks'
import BuiltFor from './components/BuiltFor'
import Integrations from './components/Integrations'
import Pricing from './components/Pricing'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div id="capabilities"><Capabilities /></div>
        <div id="how"><HowItWorks /></div>
        <BuiltFor />
        <div id="integrations"><Integrations /></div>
        <div id="pricing"><Pricing /></div>
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
