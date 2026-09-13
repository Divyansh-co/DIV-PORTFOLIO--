import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiArrowUpRight, FiShield, FiCpu, FiLock, FiBookOpen } from 'react-icons/fi'

const projects = [
  {
    id: '01',
    title: 'VeriTrust AI',
    subtitle: 'Multi-Agent Deepfake & Synthetic Identity KYC',
    description:
      'An AI-powered Know Your Customer system using multi-agent pipelines to detect deepfakes and synthetic identities, backed by blockchain verification for immutable audit trails.',
    tags: ['Python', 'FastAPI', 'React', 'OpenCV', 'Solidity', 'Docker'],
    icon: FiShield,
    previewType: 'neural',
    link: 'https://github.com/Divyansh-co',
    stats: '99.4% Precision · <12ms Latency',
  },
  {
    id: '02',
    title: 'TutorConnect',
    subtitle: 'Full-Stack Tutoring Marketplace SaaS',
    description:
      'A production-grade tutoring marketplace with real-time scheduling, Stripe payments, WebRTC video sessions, and comprehensive dashboards for tutors and students.',
    tags: ['Django', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'Stripe', 'WebSockets'],
    icon: FiBookOpen,
    previewType: 'saas',
    link: 'https://github.com/Divyansh-co',
    stats: 'Stripe Verified · WebRTC P2P',
  },
  {
    id: '03',
    title: 'APISentry',
    subtitle: 'Automated API Security & Contract Test Suite',
    description:
      'An automated testing framework that validates API contracts, detects security vulnerabilities, and generates automated OWASP compliance reports.',
    tags: ['Python', 'FastAPI', 'pytest', 'Docker', 'OpenAPI', 'CI/CD'],
    icon: FiLock,
    previewType: 'terminal',
    link: 'https://github.com/Divyansh-co',
    stats: 'OWASP Top 10 · Contract CI',
  },
  {
    id: '04',
    title: 'SentinelPrompt',
    subtitle: 'LLM Prompt Injection Firewall',
    description:
      'Security middleware that detects and blocks prompt injection attacks on LLM-powered applications using pattern analysis and semantic classification.',
    tags: ['Python', 'FastAPI', 'TensorFlow', 'NLP', 'Redis', 'Docker'],
    icon: FiCpu,
    previewType: 'firewall',
    link: 'https://github.com/Divyansh-co',
    stats: 'Zero-Day Defense · Semantic Fuzzing',
  },
]

// Visual Frame Mockup Component
function ProjectDeviceFrame({ project }) {
  return (
    <div className="w-full h-44 sm:h-48 rounded-lg bg-[#0D0B0A] border border-white/[0.06] overflow-hidden flex flex-col font-mono text-xs">
      {/* Window Title Bar */}
      <div className="h-7 px-3 bg-[#171412] border-b border-white/[0.04] flex items-center justify-between shrink-0">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#E07A3D]" />
          <div className="w-2 h-2 rounded-full bg-[#3D2A3D]" />
          <div className="w-2 h-2 rounded-full bg-[#6E6A65]" />
          <span className="ml-2 text-[10px] text-[#6E6A65] tracking-wider uppercase">
            {project.title.toLowerCase()}.system
          </span>
        </div>
        <div className="text-[10px] text-[#E07A3D] font-mono">
          {project.stats}
        </div>
      </div>

      {/* Frame Screen Content */}
      <div className="p-3.5 flex-1 flex flex-col justify-between bg-gradient-to-b from-[#12100E] to-[#0A0807]">
        {project.previewType === 'neural' && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-[#9E9A95]">Multi-Agent Consensus:</span>
              <span className="text-emerald-400 font-semibold">AUTHENTIC (99.4%)</span>
            </div>
            <div className="w-full bg-[#1A1613] h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#E07A3D] h-full w-[94%]" />
            </div>
            <div className="text-[10px] text-[#6E6A65] truncate">
              HASH: 0x8f2d...4a19 [Solidity Smart Contract Verified]
            </div>
          </div>
        )}

        {project.previewType === 'saas' && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-[#9E9A95]">Session Pipeline:</span>
              <span className="text-[#E07A3D] font-semibold">WebSockets Connected</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[10px]">
              <div className="p-1.5 rounded bg-[#181411] border border-white/[0.04] text-[#D4D4D4]">
                Latency: <span className="text-emerald-400">18ms</span>
              </div>
              <div className="p-1.5 rounded bg-[#181411] border border-white/[0.04] text-[#D4D4D4]">
                Payouts: <span className="text-[#E07A3D]">Stripe Live</span>
              </div>
            </div>
          </div>
        )}

        {project.previewType === 'terminal' && (
          <div className="space-y-1 text-[11px]">
            <div className="text-[#E07A3D] font-mono">$ apisentry scan --target /v1/core</div>
            <div className="text-emerald-400 text-[10px]">✓ Schema Contract: 142 endpoints validated</div>
            <div className="text-[#9E9A95] text-[10px]">✓ 0 Critical OWASP Vulnerabilities</div>
          </div>
        )}

        {project.previewType === 'firewall' && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-[#9E9A95]">Prompt Firewall:</span>
              <span className="text-[#E07A3D] font-semibold">Active Shielding</span>
            </div>
            <div className="p-1.5 rounded bg-[#1A1210] border border-[#E07A3D]/20 text-[10px] text-[#E8E6E3] truncate">
              [BLOCKED] Adversarial injection vector detected (score: 0.991)
            </div>
          </div>
        )}

        <div className="flex items-center justify-between pt-2 border-t border-white/[0.04] text-[10px] text-[#6E6A65]">
          <span>Engine: Python / FastAPI</span>
          <span className="text-[#E07A3D]">Status: Production Ready</span>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" ref={ref} className="py-24 px-6 relative border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4"
        >
          <div>
            <div className="section-badge">
              <span>Selected Work</span>
            </div>
            <h2 className="section-heading">
              Featured Projects
            </h2>
          </div>
          <p className="text-[#9E9A95] text-sm max-w-md font-sans">
            Production-grade systems showcasing full-stack robustness, applied AI pipelines, and strict security posture.
          </p>
        </motion.div>

        {/* Clean 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: 'easeOut' }}
              className="studio-card p-6 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Row: Meta and View link */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-[#E07A3D] font-medium">
                      [{project.id}]
                    </span>
                    <project.icon className="text-[#E07A3D] text-sm" />
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-[#9E9A95] group-hover:text-white transition-colors"
                  >
                    <span>View Project</span>
                    <FiArrowUpRight className="text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

                {/* Device Mockup Frame */}
                <div className="mb-5">
                  <ProjectDeviceFrame project={project} />
                </div>

                {/* Project Header */}
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#E07A3D] transition-colors font-display">
                  {project.title}
                </h3>
                <div className="text-xs font-medium text-[#E07A3D] mb-3">
                  {project.subtitle}
                </div>

                {/* Description */}
                <p className="text-[#9E9A95] text-xs sm:text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Bottom: Tech Stack Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.04]">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded bg-[#181512] text-[#E8E6E3] text-[11px] font-mono border border-white/[0.04]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
