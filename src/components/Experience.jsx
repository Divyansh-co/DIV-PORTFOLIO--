import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiUsers, FiAward, FiLayers, FiCheckCircle } from 'react-icons/fi'

const experiences = [
  {
    role: 'Agile Team Lead & Technical Coordinator',
    organization: 'IEEE Student Branch',
    timeline: '2024 – Present',
    icon: FiUsers,
    quote:
      'Led a cross-functional engineering team of 40+ members, running disciplined Scrum sprints, code reviews, and shipping campus-wide platforms. Mentored and trained 150+ students in Python, web architecture, and applied systems engineering.',
    highlight: '40+ Members Led · 150+ Students Mentored',
  },
  {
    role: 'Full-Stack Platform Engineering Lead',
    organization: 'Virtual Lab Portal (IIT Collaborative Project)',
    timeline: '2024',
    icon: FiLayers,
    quote:
      'Architected and deployed an interactive virtual laboratory portal delivering real-time simulation capabilities. Boosted active student engagement by 25% through optimized state management, low latency REST endpoints, and intuitive UI.',
    highlight: '25% Engagement Boost · Production Deployment',
  },
  {
    role: '1st Place Team Lead',
    organization: 'University Hackathon for Web Innovation',
    timeline: '2024',
    icon: FiAward,
    quote:
      'Spearheaded the technical design and rapid implementation of an end-to-end full stack web application within a high-pressure 36-hour sprint, winning first place for technical depth, system resilience, and UI polish.',
    highlight: '1st Place Winner · 36-Hour Sprint Execution',
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-70px' })

  return (
    <section
      id="experience"
      ref={ref}
      className="py-32 px-6 lg:px-12 bg-[#000000] text-white relative border-t border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111115] border border-white/10 text-xs font-mono font-semibold tracking-widest text-[#FF0000] uppercase mb-4">
            <span>Leadership & Track Record</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-display uppercase tracking-tight text-white leading-tight">
            Hear from what my <span className="text-[#FF0000]">collaborators</span> have to say.
          </h2>
          <p className="text-[#9CA3AF] text-base sm:text-lg max-w-xl mt-4 font-normal">
            Proven leadership and engineering impact across student organizations, collaborative academic portals, and hackathons.
          </p>
        </motion.div>

        {/* 3 Experience / Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((item, idx) => (
            <motion.div
              key={item.organization}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: idx * 0.12, ease: 'easeOut' }}
              className="ruchit-card p-8 sm:p-9 flex flex-col justify-between group"
            >
              <div>
                {/* Top Role & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-[#14141A] border border-white/10 flex items-center justify-center text-[#FF0000] group-hover:scale-110 transition-transform">
                    <item.icon className="text-xl" />
                  </div>
                  <span className="text-xs font-mono text-[#9CA3AF] tracking-wider">
                    {item.timeline}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-sans text-white mb-1">
                  {item.role}
                </h3>
                <div className="text-xs font-mono text-[#FF0000] mb-5 font-semibold">
                  {item.organization}
                </div>

                {/* Quote / Summary */}
                <p className="text-[#9CA3AF] text-sm leading-relaxed mb-6 italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Bottom Highlight Badge */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-[#E4E4E7]">
                <FiCheckCircle className="text-[#FF0000] shrink-0" />
                <span>{item.highlight}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
