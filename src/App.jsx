import { useState, useCallback } from 'react'
import Loader from './components/Loader'
import CursorGlow from './components/CursorGlow'
import Navbar from './components/Navbar'
import FloatingResumeBtn from './components/FloatingResumeBtn'
import Hero from './components/Hero'
import About from './components/About'
import Career from './components/Career'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  const handleLoadFinish = useCallback(() => {
    setLoaded(true)
  }, [])

  return (
    <div className="relative min-h-screen bg-[#08080A] text-[#E8E6E3]">
      {/* Ambient Film Grain & Volumetric Lighting */}
      <div className="ambient-grain" />
      <div className="volumetric-light" />

      {/* Global Overlays */}
      <Loader onFinish={handleLoadFinish} />
      <CursorGlow />
      <FloatingResumeBtn />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Assembly */}
      <main>
        <Hero />
        <About />
        <Career />
        <Projects />
        <TechStack />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  )
}
