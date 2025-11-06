import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import Labs from './components/Labs'
import Team from './components/Team'
import Partners from './components/Partners'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [activeServiceCategory, setActiveServiceCategory] = useState(null)

  return (
    <div className="min-h-screen bg-space-black">
      <Nav />
      <Hero 
        activeCategory={activeServiceCategory}
        setActiveCategory={setActiveServiceCategory}
      />
      <Services />
      <CaseStudies />
      <Labs />
      <Team />
      <Partners />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

