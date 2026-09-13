import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiCalendar, FiCheckCircle } from 'react-icons/fi'

const experiences = [
  {
    period: '2025 — Present',
    role: 'Research Associate & Chair',
    organization: 'IEEE Nanotechnology Council, SRM Student Branch',
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
    <section id="career" ref={ref} className="py-24 px-6 relative border-t border-white/[0.04]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-badge mx-auto">
            <span>Career & Leadership</span>
          </div>
          <h2 className="section-heading">
            Experience
          </h2>
        </motion.div>

        {/* Timeline Container with thin ember line */}
        <div className="relative pl-6 md:pl-10">
          {/* Vertical ember timeline line */}
          <div className="absolute top-2 bottom-4 left-2.5 md:left-3.5 w-[1.5px] bg-gradient-to-b from-[#E07A3D] via-[#E07A3D]/40 to-transparent" />

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
                  <div className="w-5 h-5 rounded-full bg-[#08080A] border border-[#E07A3D] flex items-center justify-center shadow-[0_0_10px_rgba(224,122,61,0.4)]">
                    <div className="w-2 h-2 rounded-full bg-[#E07A3D] group-hover:scale-125 transition-transform" />
                  </div>
                </div>

                {/* Experience Card */}
                <div className="studio-card p-6 sm:p-7 border border-white/[0.06] hover:border-[#E07A3D]/30 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight font-display">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-medium text-[#E07A3D]">
                        {exp.organization}
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#181512] border border-white/5 text-xs font-mono text-[#9E9A95] w-fit">
                      <FiCalendar className="text-[#E07A3D] text-xs" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 mt-4 text-[#9E9A95] text-sm leading-relaxed">
                    {exp.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5">
                        <FiCheckCircle className="text-[#E07A3D]/70 text-xs mt-1 shrink-0" />
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
