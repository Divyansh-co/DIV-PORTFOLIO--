import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const experiences = [
  {
    year: '2025',
    role: 'Research Associate & Chair',
    org: 'IEEE Nanotechnology Council, SRM Student Branch',
    points: [
      'Led a cross-functional student team to author and submit a collaborative research paper',
      'Directed CI/CD pipeline automation for internal tooling using GitHub Actions, reducing deployment time',
      'Coordinated with faculty and council leadership across MERN stack project delivery',
    ],
  },
  {
    year: '2025',
    role: 'Lead Contributor',
    org: 'IIT Virtual Lab Portal',
    points: [
      'Architected and developed an interactive virtual laboratory portal with 3D simulations for IIT coursework',
      'Built with React, Three.js, and Node.js — deployed on AWS with auto-scaling infrastructure',
      'Integrated real-time data visualization and experiment tracking modules',
    ],
  },
]

export default function Career() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section career" id="career" ref={ref}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        My Career & Experience
      </motion.h2>

      <div className="timeline">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className="timeline-item"
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 + i * 0.25 }}
          >
            <div className="timeline-dot" />
            <div className="timeline-year">{exp.year}</div>
            <h3 className="timeline-role">{exp.role}</h3>
            <p className="timeline-org">{exp.org}</p>
            <div className="timeline-desc">
              <ul>
                {exp.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}

        {/* NOW marker */}
        <motion.div
          className="timeline-item"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          <div className="timeline-dot now" />
          <div className="timeline-year" style={{ color: 'var(--accent-cyan)' }}>NOW</div>
          <h3 className="timeline-role" style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
            Building the future — open to opportunities
          </h3>
        </motion.div>
      </div>
    </section>
  )
}
