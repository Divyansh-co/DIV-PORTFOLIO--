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
    items: [
      { name: 'Python', icon: SiPython, level: 'Primary' },
      { name: 'TypeScript', icon: SiTypescript, level: 'Advanced' },
      { name: 'JavaScript', icon: SiJavascript, level: 'Advanced' },
      { name: 'SQL', icon: SiPostgresql, level: 'Database' },
    ],
  },
  {
    category: 'Backend & AI Systems',
    items: [
      { name: 'FastAPI', icon: SiFastapi, level: 'Async APIs' },
      { name: 'Django', icon: SiDjango, level: 'Full-Stack' },
      { name: 'Node.js', icon: SiNodedotjs, level: 'Services' },
      { name: 'PyTorch', icon: SiPytorch, level: 'Deep Learning' },
      { name: 'OpenCV', icon: SiOpencv, level: 'Vision & Biometrics' },
    ],
  },
  {
    category: 'Frontend & 3D',
    items: [
      { name: 'React', icon: SiReact, level: 'UI Architecture' },
      { name: 'Next.js', icon: SiNextdotjs, level: 'SSR & SSG' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 'Styling' },
      { name: 'Three.js / R3F', icon: SiThreedotjs, level: '3D Graphics' },
    ],
  },
  {
    category: 'Cloud, Data & DevOps',
    items: [
      { name: 'Docker', icon: SiDocker, level: 'Containers' },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 'Relational' },
      { name: 'Redis', icon: SiRedis, level: 'Caching & Queues' },
      { name: 'AWS', icon: FaAws, level: 'Cloud Ops' },
      { name: 'Git & CI/CD', icon: SiGit, level: 'Automation' },
      { name: 'Linux', icon: SiLinux, level: 'Kernel & Systems' },
    ],
  },
]

export default function TechStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="tech-stack" ref={ref} className="py-24 px-6 relative border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-badge mx-auto">
            <span>Capabilities & Tooling</span>
          </div>
          <h2 className="section-heading mb-4">
            Technical Arsenal
          </h2>
          <p className="text-[#9E9A95] text-sm max-w-lg mx-auto">
            Battle-tested technologies selected for resilience, computational performance, and developer velocity.
          </p>
        </motion.div>

        {/* Clean Categorized Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
              className="studio-card p-5 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#E07A3D] mb-4 pb-2 border-b border-white/[0.04]">
                  {cat.category}
                </h3>

                <div className="space-y-3">
                  {cat.items.map((tech, tIdx) => (
                    <div
                      key={tIdx}
                      className="flex items-center justify-between p-2 rounded-lg bg-[#181512]/60 hover:bg-[#1F1B17] border border-white/[0.03] hover:border-[#E07A3D]/25 transition-all duration-200 group"
                    >
                      <div className="flex items-center gap-2.5">
                        <tech.icon className="text-[#9E9A95] group-hover:text-[#E07A3D] text-base transition-colors shrink-0" />
                        <span className="text-xs font-medium text-white group-hover:text-white transition-colors">
                          {tech.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-[#6E6A65] group-hover:text-[#9E9A95]">
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
