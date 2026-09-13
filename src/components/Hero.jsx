import { useState, useEffect, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import { FiArrowRight, FiMail } from 'react-icons/fi'
import Avatar3DHead from './three/Avatar3DHead'

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = -(e.clientY / window.innerHeight) * 2 + 1
      setMousePos({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-6 lg:px-12 overflow-hidden bg-[#000000]">
      {/* Subtle Red Atmosphere Glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[500px] bg-[#FF0000]/10 blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left: Bold Typography */}
        <div className="lg:col-span-7 flex flex-col justify-center z-10">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0D0D11] border border-white/10 w-fit mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF0000] animate-pulse shadow-[0_0_8px_#FF0000]" />
            <span className="text-xs font-mono text-[#D1D5DB] tracking-wider uppercase">
              Dean’s List (Top 5%) · Python & AI Engineer
            </span>
          </motion.div>

          {/* Huge Bold Text: THINK CREATIVELY (with CREATIVELY in Red) */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-7xl lg:text-8xl xl:text-[6.2rem] font-display uppercase tracking-tight text-white leading-[0.95] mb-6"
          >
            THINK <span className="text-[#FF0000] drop-shadow-[0_0_35px_rgba(255,0,0,0.45)]">CREATIVELY</span>
          </motion.h1>

          {/* Short Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-[#9CA3AF] max-w-xl font-normal leading-relaxed mb-10"
          >
            I help turn complex ideas into production-ready full-stack and AI systems.
          </motion.p>

          {/* Buttons: Red "Contact Me" + "Explore Work" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="btn-red font-bold text-sm tracking-wider"
            >
              <span>Contact Me</span>
              <FiMail className="text-base" />
            </a>

            <a
              href="#projects"
              className="btn-red-outline font-semibold text-sm tracking-wide"
            >
              <span>Explore Work</span>
              <FiArrowRight className="text-sm text-[#FF0000]" />
            </a>
          </motion.div>
        </div>

        {/* Right: Large 3D Cartoon Head with Glasses, Earrings & Mouse Tracking */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="lg:col-span-5 h-[400px] sm:h-[480px] lg:h-[540px] w-full relative flex items-center justify-center"
        >
          {/* Subtle Red Halo behind the 3D Head */}
          <div className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-[#FF0000]/25 via-transparent to-transparent blur-3xl pointer-events-none" />

          <Canvas
            camera={{ position: [0, 0.2, 4.2], fov: 42 }}
            className="w-full h-full cursor-grab active:cursor-grabbing"
            style={{ background: 'transparent' }}
          >
            <Suspense fallback={null}>
              <Avatar3DHead mousePos={mousePos} />
            </Suspense>
          </Canvas>
        </motion.div>
      </div>
    </section>
  )
}
