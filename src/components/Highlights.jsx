import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiAward, FiUsers, FiTrendingUp, FiCheck, FiStar } from 'react-icons/fi'
import InflatedShape from './InflatedShape'

const highlights = [
  {
    stat: 'Top 5%',
    label: "Dean's List, B.Tech Computer Science",
    icon: FiAward,
    accent: '#8B5CF6',
  },
  {
    stat: '40+ Members',
    label: 'Led a cross-functional Agile team at IEEE Student Branch',
    icon: FiUsers,
    accent: '#EC4899',
  },
  {
    stat: '25% Increase',
    label: 'Student engagement boost from a full-stack virtual lab portal',
    icon: FiTrendingUp,
    accent: '#10B981',
  },
  {
    stat: '150+ Students',
    label: 'Trained through hands-on technical workshops',
    icon: FiCheck,
    accent: '#F97316',
  },
  {
    stat: '1st Place',
    label: 'University Hackathon for Web Innovation',
    icon: FiStar,
    accent: '#EAB308',
  },
]

export default function Highlights() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="highlights"
      ref={ref}
      className="relative bg-[#0a0a0a] text-white py-32 px-6 overflow-hidden border-t border-white/[0.06]"
    >
      {/* Decorative Floating Inflated Shapes */}
      <div className="absolute top-12 left-10 pointer-events-none hidden md:block">
        <InflatedShape type="star" color="orange" size={62} duration={4.8} delay={0.2} />
      </div>
      <div className="absolute bottom-12 right-12 pointer-events-none hidden md:block">
        <InflatedShape type="heart" color="pink" size={70} duration={4.1} delay={1.1} />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181820] text-xs font-mono font-semibold tracking-widest text-[#F97316] uppercase mb-4 border border-white/10">
            <span>Milestones</span>
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-display uppercase tracking-tight text-white">
            HIGHLIGHTS
          </h2>
        </motion.div>

        {/* 3-Column / Responsive Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
              className={`project-card p-8 flex flex-col justify-between group hover:border-white/20 transition-all ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.accent }} />
                  <item.icon className="text-xl" style={{ color: item.accent }} />
                </div>

                {/* Big Bold Number / Stat */}
                <div className="text-4xl sm:text-5xl font-display text-white mb-3 tracking-tight group-hover:text-[#EC4899] transition-colors">
                  {item.stat}
                </div>
              </div>

              {/* Short Caption */}
              <p className="text-[#9CA3AF] text-sm sm:text-base leading-relaxed mt-4 font-normal">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
