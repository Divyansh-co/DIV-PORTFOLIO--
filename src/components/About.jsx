import { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { motion, useInView } from 'framer-motion'
import { FiAward, FiCode, FiLayers, FiDownload } from 'react-icons/fi'
import AbstractSculpture from './three/AbstractSculpture'

const stats = [
  {
    icon: FiAward,
    label: "Dean's List (Top 5%)",
    sub: 'Academic Excellence in CS',
  },
  {
    icon: FiCode,
    label: 'Full Stack & AI',
    sub: 'Python, Microservices & Agents',
  },
  {
    icon: FiLayers,
    label: 'Class of 2028',
    sub: 'SRM Institute of Science & Tech',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="py-24 px-6 relative border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative & Credentials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <div className="section-badge">
              <span>Profile & Overview</span>
            </div>

            <h2 className="section-heading mb-6">
              About
            </h2>

            {/* Exact Resume Summary */}
            <p className="text-[#E8E6E3] text-base sm:text-lg leading-relaxed mb-6 font-normal">
              B.Tech Computer Science student (Class of 2028, Dean’s List – Top 5%) specializing in Python, full-stack development, and applied AI systems.
            </p>

            <p className="text-[#9E9A95] text-sm sm:text-base leading-relaxed mb-8">
              Experienced building production SaaS platforms, multi-agent AI pipelines, and blockchain-backed verification systems. Strong foundation in system design, microservices, and cloud-native practices.
            </p>

            {/* Key Metric Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {stats.map((item, idx) => (
                <div
                  key={idx}
                  className="studio-card p-4 flex flex-col justify-between"
                >
                  <item.icon className="text-[#E07A3D] text-lg mb-2.5" />
                  <div>
                    <div className="text-white text-sm font-semibold tracking-tight">
                      {item.label}
                    </div>
                    <div className="text-[#9E9A95] text-xs mt-0.5 font-sans">
                      {item.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Resume / Contact action */}
            <div className="flex items-center gap-4">
              <a
                href="#career"
                className="btn-ghost text-xs"
              >
                <span>View Timeline</span>
              </a>
              <a
                href="https://drive.google.com/file/d/1XqjHq7Tq6f5A6N6a0q_V6d3k_sample/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#E07A3D] hover:underline font-mono tracking-wide"
              >
                <FiDownload className="text-xs" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Abstract Geometric Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 h-[340px] sm:h-[380px] w-full relative flex items-center justify-center rounded-2xl bg-[#12100E]/40 border border-white/[0.04] p-4"
          >
            <Canvas
              camera={{ position: [0, 0, 4.2], fov: 45 }}
              className="w-full h-full"
              style={{ background: 'transparent' }}
            >
              <ambientLight intensity={0.7} />
              <directionalLight position={[3, 4, 2]} intensity={1.2} color="#FFFFFF" />
              <pointLight position={[-2, -2, -2]} intensity={0.8} color="#3D2A3D" />
              <Suspense fallback={null}>
                <AbstractSculpture />
              </Suspense>
            </Canvas>

            <div className="absolute bottom-3 right-4 text-[10px] font-mono uppercase tracking-widest text-[#6E6A65]">
              System Core · Abstract
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
