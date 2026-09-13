import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

const projects = [
  {
    number: '01',
    title: 'VeriTrust AI',
    subtitle: 'Multi-Agent Deepfake & Synthetic Identity KYC',
    description: 'An AI-powered Know Your Customer system using multi-agent pipelines to detect deepfakes and synthetic identities, backed by blockchain verification for immutable audit trails.',
    tags: ['React', 'Vite', 'Tailwind', 'Node.js', 'FastAPI', 'OpenCV', 'Solidity', 'Docker'],
    live: true,
  },
  {
    number: '02',
    title: 'TutorConnect',
    subtitle: 'Full-Stack Tutoring Marketplace SaaS',
    description: 'A production-grade tutoring marketplace with real-time scheduling, Stripe payments, video sessions, and comprehensive dashboards for tutors and students.',
    tags: ['Django', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'Stripe', 'WebSockets'],
    live: true,
  },
  {
    number: '03',
    title: 'APISentry',
    subtitle: 'Automated API Security & Contract Test Suite',
    description: 'An automated testing framework that validates API contracts, detects security vulnerabilities, and generates compliance reports.',
    tags: ['Python', 'FastAPI', 'pytest', 'Docker', 'OpenAPI', 'CI/CD'],
    live: false,
  },
  {
    number: '04',
    title: 'SentinelPrompt',
    subtitle: 'LLM Prompt Injection Firewall',
    description: 'Security middleware that detects and blocks prompt injection attacks on LLM-powered applications using pattern analysis and semantic classification.',
    tags: ['Python', 'FastAPI', 'TensorFlow', 'NLP', 'Redis', 'Docker'],
    live: false,
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section projects" id="projects" ref={ref}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 25 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <motion.div
            key={project.number}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 + i * 0.12 }}
          >
            <div className="project-number">{project.number}</div>

            <div className="project-preview">
              <div className="project-preview-inner">
                <span>{project.title}</span>
              </div>
            </div>

            <div className="project-body">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px' }}>
                <h3 className="project-title">{project.title}</h3>
                {project.live && <span className="live-badge">Live</span>}
              </div>
              <p className="project-subtitle">{project.subtitle}</p>
              <p className="project-subtitle">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              <motion.a
                href="#"
                className="project-link"
                whileHover={{ x: 4 }}
                style={{ marginTop: '14px', display: 'inline-flex' }}
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
