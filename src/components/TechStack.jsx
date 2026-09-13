import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiFastapi,
  SiDjango,
  SiNodedotjs,
  SiPytorch,
  SiOpencv,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiThreedotjs,
  SiDocker,
  SiPostgresql,
  SiRedis,
  SiGit,
  SiLinux,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'

const techCategories = [
  {
    category: 'Core Languages',
    accent: '#3B82F6',
    items: [
      { name: 'Python', icon: SiPython, level: 'Primary' },
      { name: 'TypeScript', icon: SiTypescript, level: 'Advanced' },
      { name: 'JavaScript', icon: SiJavascript, level: 'Advanced' },
      { name: 'SQL', icon: SiPostgresql, level: 'Database' },
    ],
  },
  {
    category: 'Backend & AI Systems',
    accent: '#E91E63',
    items: [
      { name: 'FastAPI', icon: SiFastapi, level: 'Async APIs' },
      { name: 'Django', icon: SiDjango, level: 'Full-Stack' },
      { name: 'Node.js', icon: SiNodedotjs, level: 'Services' },
      { name: 'PyTorch', icon: SiPytorch, level: 'Deep Learning' },
      { name: 'OpenCV', icon: SiOpencv, level: 'Computer Vision' },
    ],
  },
  {
    category: 'Frontend & 3D',
    accent: '#8B5CF6',
    items: [
      { name: 'React', icon: SiReact, level: 'UI Architecture' },
      { name: 'Next.js', icon: SiNextdotjs, level: 'SSR & SSG' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 'Modern CSS' },
      { name: 'Three.js / R3F', icon: SiThreedotjs, level: '3D Graphics' },
    ],
  },
  {
    category: 'Cloud, Data & DevOps',
    accent: '#10B981',
    items: [
      { name: 'Docker', icon: SiDocker, level: 'Containers' },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 'Relational' },
      { name: 'Redis', icon: SiRedis, level: 'In-Memory Cache' },
      { name: 'AWS', icon: FaAws, level: 'Cloud Ops' },
      { name: 'Git & CI/CD', icon: SiGit, level: 'Automation' },
      { name: 'Linux', icon: SiLinux, level: 'Environments' },
    ],
  },
]

export default function TechStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="tech-stack" ref={ref} className="py-28 px-6 relative border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141418] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#10B981] mb-4">
            <span>Capabilities</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-display uppercase">
            TECH STACK
          </h2>
          <p className="text-[#9CA3AF] text-sm max-w-lg mx-auto mt-4">
            Production-grade tooling curated for performance, reliability, and scale.
          </p>
        </motion.div>

        {/* Categorized Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
              className="video-card p-6 flex flex-col justify-between"
            >
              <div>
                <h3
                  className="text-xs font-mono uppercase tracking-wider mb-5 pb-2.5 border-b border-white/[0.06] font-semibold"
                  style={{ color: cat.accent }}
                >
                  {cat.category}
                </h3>

                <div className="space-y-3">
                  {cat.items.map((tech, tIdx) => (
                    <div
                      key={tIdx}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-[#181820]/70 hover:bg-[#20202A] border border-white/[0.04] hover:border-white/15 transition-all duration-200 group"
                    >
                      <div className="flex items-center gap-3">
                        <tech.icon
                          className="text-base transition-colors shrink-0"
                          style={{ color: cat.accent }}
                        />
                        <span className="text-xs font-medium text-white">
                          {tech.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-[#6B7280]">
                        {tech.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
