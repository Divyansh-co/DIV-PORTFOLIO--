import { useState, useEffect, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import { FiArrowRight, FiMail } from 'react-icons/fi'
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
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#E91E63]/8 via-[#8B5CF6]/5 to-[#10B981]/6 blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left: Clean Hero Typography */}
        <div className="lg:col-span-7 flex flex-col justify-center z-10">
          {/* Status pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141418] border border-white/10 w-fit mb-6 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-xs font-mono text-[#E4E4E7] tracking-wide">
              Dean’s List (Top 5%) · Class of 2028
            </span>
          </motion.div>

          {/* Salutation */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="text-lg md:text-xl font-medium text-[#9CA3AF] mb-2 tracking-tight"
          >
            Hello, I’m
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white font-display leading-[1.05] mb-4"
          >
            Divyansh Mishra
          </motion.h1>

          {/* Short Title: Full Stack Python Developer */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="text-2xl sm:text-3xl font-bold text-[#E91E63] mb-5 tracking-tight"
          >
            Full Stack Python Developer
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            className="text-[#9CA3AF] text-base sm:text-lg max-w-xl font-normal leading-relaxed mb-8"
          >
            Building production SaaS platforms, multi-agent AI pipelines, and cloud-native systems with clean architecture and mathematical rigor.
          </motion.p>

          {/* Rounded Pill Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="btn-pill btn-pill-magenta font-semibold tracking-wide"
            >
              <span>EXPLORE WORK</span>
              <FiArrowRight className="text-sm" />
            </a>

            <a
              href="#contact"
              className="btn-pill btn-pill-dark font-medium"
            >
              <FiMail className="text-sm text-[#E91E63]" />
              <span>Get in Touch</span>
            </a>
          </motion.div>
        </div>

        {/* Right: 3D Workstation Laptop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
          className="lg:col-span-5 h-[360px] sm:h-[420px] lg:h-[460px] w-full relative flex items-center justify-center"
        >
          <Canvas
            camera={{ position: [0, 0.4, 4.6], fov: 42 }}
            className="w-full h-full"
            style={{ background: 'transparent' }}
          >
            <ambientLight intensity={0.9} />
            <directionalLight position={[4, 5, 4]} intensity={1.3} color="#FFFFFF" />
            <directionalLight position={[-4, 3, -2]} intensity={0.8} color="#E91E63" />
            <pointLight position={[2, 2, 2]} intensity={1.4} color="#10B981" />
            
            <Suspense fallback={null}>
              <SubtleDepthField count={70} />
              <RealisticLaptop mousePos={mousePos} />
            </Suspense>
          </Canvas>
        </motion.div>
      </div>
    </section>
  )
}
