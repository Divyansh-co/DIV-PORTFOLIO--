import { useRef, useEffect, useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import Avatar from './three/Avatar'
import FloatingParticles from './three/FloatingParticles'
import { FiDownload } from 'react-icons/fi'

const roles = ['AI ENGINEER', 'DEVELOPER', 'BUILDER', 'INNOVATOR']

function AnimatedRole() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % roles.length)
        setVisible(true)
      }, 400)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.span
      className="role-word"
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {roles[index]}
    </motion.span>
  )
}

export default function Hero() {
  const mousePos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouse = (e) => {
      mousePos.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      }
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <motion.div
          className="hero-text-left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: 'easeOut' }}
        >
          <p className="greeting">Hello! I'm</p>
          <h1 className="name glow-text-cyan">DIVYANSH<br />MISHRA</h1>
        </motion.div>

        <motion.div
          className="hero-avatar"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1, ease: 'easeOut' }}
        >
          <Canvas
            camera={{ position: [0, 0, 4], fov: 45 }}
            style={{ background: 'transparent' }}
          >
            <Suspense fallback={null}>
              <ambientLight intensity={0.3} />
              <Avatar mousePos={mousePos} />
              <FloatingParticles count={150} radius={5} />
            </Suspense>
          </Canvas>
        </motion.div>

        <motion.div
          className="hero-text-right"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.8, ease: 'easeOut' }}
        >
          <p className="role-label">A Full Stack /</p>
          <h2 className="role-title">
            <AnimatedRole />
          </h2>
        </motion.div>
      </div>

      {/* Background particles canvas */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, opacity: 0.4,
        pointerEvents: 'none',
      }}>
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <FloatingParticles count={200} radius={12} />
        </Canvas>
      </div>

      {/* Resume button */}
      <motion.a
        href="/resume.pdf"
        download
        className="btn-primary resume-btn"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <FiDownload /> RESUME
        </span>
      </motion.a>
    </section>
  )
}
