import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiExternalLink, FiArrowRight } from 'react-icons/fi'

const projects = [
  {
    number: '01',
    title: 'VeriTrust AI',
    subtitle: 'Multi-Agent Deepfake & Synthetic Identity KYC',
    description: 'An AI-powered Know Your Customer system using multi-agent pipelines to detect deepfakes, synthetic identities, and fraudulent documents — backed by blockchain verification for immutable audit trails.',
    tags: ['React', 'Vite', 'Tailwind', 'Node.js', 'FastAPI', 'OpenCV', 'Solidity', 'Docker'],
    live: true,
    color: '#00e5ff',
  },
  {
    number: '02',
    title: 'TutorConnect',
    subtitle: 'Full-Stack Tutoring Marketplace SaaS',
    description: 'A production-grade tutoring marketplace with real-time scheduling, payment processing via Stripe, video sessions, and a comprehensive dashboard for tutors and students.',
    tags: ['Django', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'Stripe', 'WebSockets'],
    live: true,
    color: '#a855f7',
  },
  {
    number: '03',
    title: 'APISentry',
    subtitle: 'Automated API Security & Contract Test Suite',
    description: 'An automated testing framework that validates API contracts, detects security vulnerabilities (injection, auth bypass, rate-limit evasion), and generates compliance reports.',
    tags: ['Python', 'FastAPI', 'pytest', 'Docker', 'OpenAPI', 'CI/CD'],
    live: false,
    color: '#ec4899',
  },
  {
    number: '04',
    title: 'SentinelPrompt',
    subtitle: 'LLM Prompt Injection Firewall',
    description: 'A security middleware that detects and blocks prompt injection attacks on LLM-powered applications, using pattern analysis and semantic classification to protect AI endpoints.',
    tags: ['Python', 'FastAPI', 'TensorFlow', 'NLP', 'Redis', 'Docker'],
    live: false,
    color: '#14b8a6',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section projects" id="projects" ref={ref}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        My Work
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <motion.div
            key={project.number}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
            whileHover={{ y: -8 }}
          >
            <div className="project-number">{project.number}</div>

            <div className="project-preview">
              <div className="project-preview-inner" style={{
                borderColor: `${project.color}20`,
              }}>
                <span style={{ opacity: 0.3, fontSize: '1rem' }}>{project.title}</span>
              </div>
            </div>

            <div className="project-body">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px' }}>
                <h3 className="project-title" style={{ marginBottom: 0 }}>{project.title}</h3>
                {project.live && <span className="live-badge">Live</span>}
              </div>
              <p className="project-subtitle">{project.subtitle}</p>
              <p className="project-subtitle" style={{ marginBottom: '16px' }}>{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              <motion.a
                href="#"
                className="project-link"
                whileHover={{ x: 4 }}
                style={{ marginTop: '16px', display: 'inline-flex' }}
              >
                View Project <FiArrowRight />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
