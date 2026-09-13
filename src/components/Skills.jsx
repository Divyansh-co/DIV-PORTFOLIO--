import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import InflatedShape from './InflatedShape'

const skillsData = [
  {
    number: '01',
    title: 'Full-Stack Development',
    description: 'Django, FastAPI, React, TypeScript, REST API design and microservices.',
  },
  {
    number: '02',
    title: 'AI & Multi-Agent Systems',
    description: 'multi-agent pipelines, computer vision (OpenCV), TensorFlow/PyTorch, prompt engineering.',
  },
  {
    number: '03',
    title: 'Backend & Databases',
    description: 'PostgreSQL, MongoDB, Redis caching, Celery task queues.',
  },
  {
    number: '04',
    title: 'Blockchain Integration',
    description: 'Solidity smart contracts, ethers.js, Hardhat, tamper-evident verification systems.',
  },
  {
    number: '05',
    title: 'DevOps & Deployment',
    description: 'Docker, CI/CD with GitHub Actions, Agile/Scrum workflows.',
  },
  {
    number: '06',
    title: 'Security & Testing',
    description: 'OWASP API Security Top 10, unit testing with pytest, prompt-injection defense.',
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="skills"
      ref={ref}
      className="relative bg-[#F8F9FA] text-[#0A0A0A] py-32 px-6 overflow-hidden transition-colors"
    >
      {/* Decorative Floating 3D Shapes */}
      <div className="absolute top-12 right-12 pointer-events-none hidden md:block">
        <InflatedShape type="flower" color="purple" size={68} duration={4.6} delay={0.4} />
      </div>
      <div className="absolute bottom-12 left-10 pointer-events-none hidden md:block">
        <InflatedShape type="blob" color="emerald" size={60} duration={5.0} delay={1.5} />
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5E7EB] text-xs font-mono font-bold tracking-widest text-[#4B5563] uppercase mb-4">
            <span>Capabilities & Stack</span>
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-display uppercase tracking-tight text-[#0A0A0A]">
            SKILLS
          </h2>
        </motion.div>

        {/* Vertical Numbered List 01-06 with Divider Lines */}
        <div className="border-t border-black/10 divide-y divide-black/10">
          {skillsData.map((skill, idx) => (
            <motion.div
              key={skill.number}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
              className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline group hover:bg-black/[0.02] px-4 -mx-4 rounded-xl transition-colors"
            >
              {/* Large Bold Number */}
              <div className="md:col-span-2 text-3xl sm:text-4xl font-display text-[#8B5CF6] group-hover:text-[#EC4899] transition-colors">
                {skill.number}
              </div>

              {/* Title */}
              <div className="md:col-span-4 text-xl sm:text-2xl font-bold font-sans text-[#0A0A0A] tracking-tight">
                {skill.title}
              </div>

              {/* One-Line Description */}
              <div className="md:col-span-6 text-base sm:text-lg text-[#4B5563] leading-relaxed font-normal">
                {skill.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
