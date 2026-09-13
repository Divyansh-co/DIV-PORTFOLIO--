import { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight, FiAward } from 'react-icons/fi'
import Avatar3DHead from './three/Avatar3DHead'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-70px' })

  return (
    <section
      id="about"
      ref={ref}
      className="py-32 px-6 lg:px-12 bg-[#000000] text-white relative border-t border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111115] border border-white/10 text-xs font-mono font-semibold tracking-widest text-[#FF0000] uppercase mb-4">
            <span>Profile & Philosophy</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-display uppercase tracking-tight text-white leading-tight">
            Building systems that <span className="text-[#FF0000]">make sense.</span>
          </h2>
        </motion.div>

        {/* Split Grid: Left 3D Avatar / Portrait + Right Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: 3D Avatar in Rounded Charcoal Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <div className="w-full h-[380px] sm:h-[440px] rounded-3xl bg-gradient-to-b from-[#121217] via-[#0E0E12] to-[#07070A] border border-white/[0.08] shadow-2xl relative overflow-hidden flex items-center justify-center group hover:border-[#FF0000]/40 transition-colors">
              {/* Subtle Red Halo behind avatar */}
              <div className="absolute w-56 h-56 rounded-full bg-[#FF0000]/20 blur-3xl pointer-events-none" />

              <Canvas
                camera={{ position: [0, 0.2, 4.0], fov: 42 }}
                className="w-full h-full cursor-grab active:cursor-grabbing"
                style={{ background: 'transparent' }}
              >
                <Suspense fallback={null}>
                  <Avatar3DHead mousePos={{ x: 0.2, y: 0.1 }} />
                </Suspense>
              </Canvas>

              {/* Bottom Badge inside frame */}
              <div className="absolute bottom-4 left-4 right-4 py-2 px-4 rounded-xl bg-[#000000]/80 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-[#E4E4E7] font-semibold">Divyansh Mishra</span>
                <span className="text-[#FF0000] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF0000] animate-pulse" />
                  Class of 2028
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: Short Bio from Resume & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Dean's list pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#14141A] border border-[#FF0000]/30 text-xs font-mono text-[#D1D5DB]">
              <FiAward className="text-[#FF0000] text-sm" />
              <span>Dean’s List – Top 5% · Academic Distinction</span>
            </div>

            {/* Exact Resume Bio */}
            <p className="text-xl sm:text-2xl text-[#E4E4E7] font-normal leading-relaxed">
              B.Tech Computer Science student (Class of 2028, Dean’s List – Top 5%). Specializing in Python, full-stack development, and applied AI systems. Experienced in building production SaaS, multi-agent AI pipelines, and blockchain-backed solutions.
            </p>

            <p className="text-base text-[#9CA3AF] leading-relaxed">
              Passionate about mathematically rigorous software architecture, resilient microservices, and AI that creates real utility rather than buzz. Actively designing systems that scale gracefully from proof-of-concept to thousands of production transactions.
            </p>

            {/* Social Icons & Direct Links */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="https://github.com/Divyansh-co"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-red-outline font-semibold tracking-wide flex items-center gap-2"
              >
                <FiGithub className="text-base" />
                <span>GitHub Profile</span>
                <FiArrowUpRight className="text-xs text-[#FF0000]" />
              </a>

              <a
                href="https://www.linkedin.com/in/divyanshmishra/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-red-outline font-semibold tracking-wide flex items-center gap-2"
              >
                <FiLinkedin className="text-base text-[#0A66C2]" />
                <span>LinkedIn</span>
                <FiArrowUpRight className="text-xs text-[#FF0000]" />
              </a>

              <a
                href="mailto:divyanshmishra.python@gmail.com"
                className="btn-red font-bold text-xs tracking-wider uppercase flex items-center gap-2"
              >
                <FiMail className="text-base" />
                <span>Get in Touch</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
