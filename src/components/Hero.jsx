import { useState, useEffect, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import { FiArrowRight, FiMail, FiTerminal } from 'react-icons/fi'
import RealisticLaptop from './three/RealisticLaptop'
import SubtleDepthField from './three/SubtleDepthField'

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
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      {/* Soft Volumetric Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-br from-[#E07A3D]/7 via-[#3D2A3D]/5 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left: Elegant Typography */}
        <div className="lg:col-span-7 flex flex-col justify-center z-10">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-[#12100E] border border-[#E07A3D]/25 w-fit mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#E07A3D] animate-pulse" />
            <span className="text-xs font-mono text-[#E8E6E3] tracking-wide">
              Dean’s List (Top 5%) · Class of 2028
            </span>
          </motion.div>

          {/* Salutation */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="text-lg md:text-xl font-normal text-[#E8E6E3] mb-2 font-sans tracking-tight"
          >
            Hello, I’m
          </motion.p>

          {/* Name with thin ember underline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="mb-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white font-display leading-[1.1]">
              <span className="ember-underline">Divyansh Mishra</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="text-xl sm:text-2xl font-medium text-[#E07A3D] mb-4 tracking-tight"
          >
            Full Stack Python Developer & AI Engineer
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            className="text-[#9E9A95] text-base md:text-lg max-w-xl font-normal leading-relaxed mb-8"
          >
            Designing resilient cloud microservices, multi-agent AI pipelines, and production systems with mathematical precision and clean architecture.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="btn-ember"
            >
              <span>Selected Work</span>
              <FiArrowRight className="text-sm" />
            </a>

            <a
              href="#contact"
              className="btn-ghost"
            >
              <FiMail className="text-sm text-[#E07A3D]" />
              <span>Get in Touch</span>
            </a>

            <div className="flex items-center gap-2 pl-2 text-xs font-mono text-[#6E6A65]">
              <FiTerminal className="text-[#E07A3D]" />
              <span>Python · FastAPI · PyTorch</span>
            </div>
          </motion.div>
        </div>

        {/* Right: Realistic 3D Workstation Laptop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
          className="lg:col-span-5 h-[360px] sm:h-[440px] lg:h-[480px] w-full relative flex items-center justify-center"
        >
          <Canvas
            camera={{ position: [0, 0.4, 4.6], fov: 42 }}
            className="w-full h-full"
            style={{ background: 'transparent' }}
          >
            {/* Studio Lighting */}
            <ambientLight intensity={0.8} />
            <directionalLight
              position={[4, 5, 4]}
              intensity={1.2}
              color="#FFFFFF"
            />
            <directionalLight
              position={[-4, 3, -2]}
              intensity={0.6}
              color="#3D2A3D"
            />
            <pointLight
              position={[2, 2, 2]}
              intensity={1.5}
              color="#E07A3D"
            />
            
            <Suspense fallback={null}>
              <SubtleDepthField count={60} />
              <RealisticLaptop mousePos={mousePos} />
            </Suspense>
          </Canvas>

          {/* Subtle bottom shadow vignette */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/60 blur-xl rounded-full pointer-events-none" />
        </motion.div>
      </div>
    </section>
  )
}
