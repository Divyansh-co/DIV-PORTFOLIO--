import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiLayers, FiCpu, FiServer, FiGitBranch, FiArrowUpRight } from 'react-icons/fi'
import {
  SiPython,
  SiFastapi,
  SiDjango,
  SiReact,
  SiTypescript,
  SiDocker,
  SiPostgresql,
  SiRedis,
  SiSolidity,
} from 'react-icons/si'

const services = [
  {
    title: 'Full Stack Development',
    icon: FiLayers,
    description:
      'Designing and engineering end-to-end production web platforms with React, Next.js, and TypeScript paired with bulletproof backend architectures.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Next.js'],
  },
  {
    title: 'AI & Multi-Agent Systems',
    icon: FiCpu,
    description:
      'Architecting multi-agent neural pipelines, computer vision biometric liveness verification with OpenCV, and prompt injection defense firewalls.',
    tags: ['Multi-Agent AI', 'OpenCV', 'PyTorch', 'Prompt Defense'],
  },
  {
    title: 'Backend & APIs',
    icon: FiServer,
    description:
      'High-throughput microservices built with Python, FastAPI, and Django, featuring sub-15ms response times, JWT auth, and Redis caching layers.',
    tags: ['FastAPI', 'Django', 'REST', 'Celery & Redis'],
  },
  {
    title: 'System Design',
    icon: FiGitBranch,
    description:
      'Distributed systems with PostgreSQL, Docker containerization, CI/CD automated test suites, and blockchain-anchored immutable verification.',
    tags: ['Docker', 'PostgreSQL', 'Solidity', 'CI/CD'],
  },
]

const tools = [
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
  { name: 'Django', icon: SiDjango, color: '#092E20' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Redis', icon: SiRedis, color: '#DC382D' },
  { name: 'Solidity', icon: SiSolidity, color: '#627EEA' },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-70px' })

  return (
    <section
      id="services"
      ref={ref}
      className="py-32 px-6 lg:px-12 bg-[#000000] text-white relative border-t border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111115] border border-white/10 text-xs font-mono font-semibold tracking-widest text-[#FF0000] uppercase mb-4">
            <span>Specialization</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-display uppercase tracking-tight text-white leading-tight">
            What I help you to <span className="text-[#FF0000]">Shape...</span>
          </h2>
        </motion.div>

        {/* 4 Charcoal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: 'easeOut' }}
              className="ruchit-card p-8 sm:p-10 flex flex-col justify-between group cursor-default"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-[#16161D] border border-white/10 flex items-center justify-center text-xl text-[#FF0000] group-hover:scale-110 group-hover:border-[#FF0000]/40 transition-all duration-300">
                    <service.icon />
                  </div>
                  <span className="text-xs font-mono text-[#9CA3AF] group-hover:text-[#FF0000] transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-sans text-white mb-3 group-hover:text-white transition-colors">
                  {service.title}
                </h3>

                <p className="text-[#9CA3AF] text-sm sm:text-base leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                {service.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 rounded-full bg-[#15151B] text-xs font-mono text-[#D1D5DB] border border-white/[0.06]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools Icons Ecosystem Strip Below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="pt-12 border-t border-white/[0.08]"
        >
          <div className="text-center text-xs font-mono uppercase tracking-widest text-[#9CA3AF] mb-8">
            Engineered with modern tools & frameworks
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {tools.map((tool, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0D0D11] border border-white/[0.07] hover:border-[#FF0000]/40 transition-all hover:scale-105"
              >
                <tool.icon className="text-lg" style={{ color: tool.color }} />
                <span className="text-xs font-semibold text-[#E4E4E7] font-mono">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
