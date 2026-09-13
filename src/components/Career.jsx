import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiCalendar, FiCheckCircle } from 'react-icons/fi'

const experiences = [
  {
    period: '2025 — Present',
    role: 'Research Associate & Chair',
    organization: 'IEEE Nanotechnology Council, SRM Student Branch',
    accent: '#E91E63',
    points: [
      'Led a cross-functional student team to author and submit a collaborative research paper.',
      'Directed CI/CD pipeline automation for internal tooling using GitHub Actions.',
      'Coordinated with faculty and council leadership across full-stack project delivery.',
    ],
  },
  {
    period: '2025',
    role: 'Lead Contributor',
    organization: 'IIT Virtual Lab Portal',
    accent: '#10B981',
    points: [
      'Architected an interactive virtual laboratory portal with 3D simulations for IIT coursework.',
      'Built with React, Three.js, and Node.js — deployed on AWS with auto-scaling infrastructure.',
      'Integrated real-time data visualization and experiment tracking modules.',
    ],
  },
]

export default function Career() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="career" ref={ref} className="py-28 px-6 relative border-t border-white/[0.04]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141418] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#8B5CF6] mb-4">
            <span>Trajectory</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-display uppercase">
            EXPERIENCE
          </h2>
        </motion.div>

        {/* Timeline Container with thin accent line */}
        <div className="relative pl-6 md:pl-10">
          <div className="absolute top-2 bottom-4 left-2.5 md:left-3.5 w-[2px] bg-gradient-to-b from-[#E91E63] via-[#8B5CF6] to-[#10B981]" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.2, ease: 'easeOut' }}
                className="relative group"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-6 md:-left-10 top-1.5 flex items-center justify-center">
                  <div
                    className="w-5 h-5 rounded-full bg-[#070709] flex items-center justify-center shadow-lg"
                    style={{
                      border: `1.5px solid ${exp.accent}`,
                      boxShadow: `0 0 10px ${exp.accent}50`,
                    }}
                  >
                    <div
                      className="w-2 h-2 rounded-full transition-transform group-hover:scale-125"
                      style={{ backgroundColor: exp.accent }}
                    />
                  </div>
                </div>

                {/* Experience Card */}
                <div className="video-card p-7 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight font-display">
                        {exp.role}
                      </h3>
                      <div
                        className="text-sm font-semibold mt-0.5"
                        style={{ color: exp.accent }}
                      >
                        {exp.organization}
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181820] border border-white/10 text-xs font-mono text-[#E4E4E7] w-fit">
                      <FiCalendar className="text-xs" style={{ color: exp.accent }} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mt-5 text-[#9CA3AF] text-sm leading-relaxed">
                    {exp.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5">
                        <FiCheckCircle
                          className="text-sm mt-1 shrink-0"
                          style={{ color: exp.accent }}
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
