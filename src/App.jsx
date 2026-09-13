import { useState, useCallback } from 'react'
import Loader from './components/Loader'
import CursorGlow from './components/CursorGlow'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  const handleLoadFinish = useCallback(() => {
    setLoaded(true)
  }, [])

  return (
    <div className="relative min-h-screen bg-[#000000] text-white selection:bg-[#FF0000]/30 selection:text-white">
      {/* Ambient Red Glow Filter */}
      <div className="red-ambient-glow" />

      {/* Global Overlays */}
      <Loader onFinish={handleLoadFinish} />
      <CursorGlow />

      {/* Top Sticky Navigation */}
      <Navbar />

      {/* Main Assembly — Strict Ruchit P. Section Sequence */}
      <main>
        {/* 1. Hero Section: THINK CREATIVELY + 3D Avatar Head + Red Contact */}
        <Hero />

        {/* 2. Services Section: What I help you to Shape... + 4 Cards + Tools */}
        <Services />

        {/* 3. About Section: Building systems that make sense. + 3D Showcase + Bio */}
        <About />

        {/* 4. Projects / Work Section: 01-04 Project Cards with Red Accents */}
        <Projects />

        {/* 5. Experience Section: IEEE & IIT Engineering Leadership */}
        <Experience />

        {/* 6. FAQ & Contact: Expandable FAQ + "Let's build incredible work together" CTA */}
        <Contact />
      </main>

      {/* 7. Footer: Meta + Huge Red "MR. DIVYANSH" Bottom Statement */}
      <Footer />
    </div>
  )
}
