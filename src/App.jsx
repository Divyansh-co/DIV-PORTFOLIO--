import { useState, useCallback } from 'react'
import Loader from './components/Loader'
import CursorGlow from './components/CursorGlow'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
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
    <>
      <Loader onFinish={handleLoadFinish} />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Career />
        <Projects />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
