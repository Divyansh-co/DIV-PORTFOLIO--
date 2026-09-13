import { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { motion, useInView } from 'framer-motion'
import FloatingVideoIcons from './three/FloatingVideoIcons'
import { FiArrowRight } from 'react-icons/fi'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="about"
      ref={ref}
      className="relative min-h-[85vh] flex items-center justify-center py-28 px-6 overflow-hidden border-t border-white/[0.04]"
    >
      {/* 3D Floating Icons Canvas Layer */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Canvas
          camera={{ position: [0, 0, 7.2], fov: 48 }}
          style={{ background: 'transparent' }}
        >
          <Suspense fallback={null}>
            <FloatingVideoIcons />
          </Suspense>
        </Canvas>
      </div>

      {/* Central Content Box */}
      <div className="max-w-3xl w-full mx-auto text-center relative z-10">
        {/* Large Centered Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white font-display mb-8 uppercase"
        >
          ABOUT ME
        </motion.h2>

        {/* Exact Specified Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="text-base sm:text-lg md:text-xl text-[#E4E4E7] leading-relaxed font-normal mb-10 max-w-2xl mx-auto drop-shadow-sm"
        >
          B.Tech Computer Science student (Class of 2028, Dean’s List – Top 5%) specializing in Python, full-stack development, and applied AI systems. Experienced building production SaaS, multi-agent AI pipelines, and blockchain-backed verification systems. Strong foundation in system design, microservices, and cloud-native practices.
        </motion.p>

        {/* Rounded CONTACT ME Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="btn-pill btn-pill-magenta text-sm font-semibold tracking-wide uppercase px-8 py-3.5"
          >
            <span>CONTACT ME</span>
            <FiArrowRight className="text-base" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
