import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiArrowUpRight, FiShield, FiBookOpen, FiLock, FiCpu } from 'react-icons/fi'

const projects = [
  {
    number: '01',
    title: 'VeriTrust AI',
    subtitle: 'Multi-Agent Deepfake & Synthetic Identity KYC',
    description:
      'An AI-powered Know Your Customer system using multi-agent neural pipelines to detect deepfakes and synthetic identities, backed by blockchain verification for immutable audit trails.',
    tags: ['Python', 'FastAPI', 'React', 'OpenCV', 'Solidity', 'Docker'],
    accent: '#E91E63',
    icon: FiShield,
    link: 'https://github.com/Divyansh-co',
    stats: '99.4% Precision · <12ms Latency',
    buttonText: 'LIVE PROJECT',
    previewType: 'veritrust',
  },
  {
    number: '02',
    title: 'TutorConnect',
    subtitle: 'Full-Stack Tutoring Marketplace (SaaS)',
    description:
      'A production-grade tutoring marketplace with real-time scheduling, Stripe payments, WebRTC video sessions, and comprehensive analytical dashboards for tutors and students.',
    tags: ['Django', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'Stripe'],
    accent: '#10B981',
    icon: FiBookOpen,
    link: 'https://github.com/Divyansh-co',
    stats: 'Stripe Verified · WebRTC P2P',
    buttonText: 'LIVE PROJECT',
    previewType: 'tutorconnect',
  },
  {
    number: '03',
    title: 'APISentry',
    subtitle: 'Automated API Security & Contract Test Suite',
    description:
      'An automated testing framework that validates API contracts, detects security vulnerabilities, and generates compliance audits across microservice endpoints.',
    tags: ['Python', 'FastAPI', 'pytest', 'Docker', 'OpenAPI', 'CI/CD'],
    accent: '#8B5CF6',
    icon: FiLock,
    link: 'https://github.com/Divyansh-co',
    stats: 'OWASP Top 10 · Contract CI',
    buttonText: 'VIEW PROJECT',
    previewType: 'apisentry',
  },
  {
    number: '04',
    title: 'SentinelPrompt',
    subtitle: 'LLM Prompt Injection Firewall',
    description:
      'Security middleware that detects and blocks prompt injection attacks on LLM-powered applications using pattern analysis and semantic classification.',
    tags: ['Python', 'FastAPI', 'TensorFlow', 'NLP', 'Redis', 'Docker'],
    accent: '#3B82F6',
    icon: FiCpu,
    link: 'https://github.com/Divyansh-co',
    stats: 'Zero-Day Defense · Semantic Fuzzing',
    buttonText: 'VIEW PROJECT',
    previewType: 'sentinelprompt',
  },
]

// Right-Side Realistic Mockup Frame
function ProjectMockupVisual({ project }) {
  return (
    <div className="w-full h-full min-h-[220px] sm:min-h-[260px] rounded-2xl bg-[#0B0B0E] border border-white/[0.08] overflow-hidden flex flex-col font-mono text-xs shadow-xl shadow-black/60 group-hover:border-white/20 transition-all">
      {/* Chrome Window Header */}
      <div className="h-8 px-4 bg-[#141419] border-b border-white/[0.06] flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#E91E63]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#3B82F6]" />
          <span className="ml-2 text-[11px] text-[#9CA3AF] tracking-wider font-mono">
            {project.title.toLowerCase()}.ai/app
          </span>
        </div>
        <span
          className="text-[10px] font-semibold px-2 py-0.5 rounded-full font-mono"
          style={{
            color: project.accent,
            backgroundColor: `${project.accent}15`,
            border: `1px solid ${project.accent}30`,
          }}
        >
          {project.stats}
        </span>
      </div>

      {/* Screen Canvas Area */}
      <div className="p-5 flex-1 flex flex-col justify-between bg-gradient-to-br from-[#121217] via-[#0E0E12] to-[#08080A]">
        {project.previewType === 'veritrust' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#9CA3AF]">Neural Face Liveness:</span>
              <span className="text-[#10B981] font-bold">VERIFIED AUTHENTIC</span>
            </div>
            <div className="w-full bg-[#1F1F26] h-2 rounded-full overflow-hidden">
              <div className="bg-[#E91E63] h-full w-[96%]" />
            </div>
            <div className="p-2.5 rounded-lg bg-[#181820] border border-white/[0.04] text-[11px] text-[#D1D5DB] space-y-1">
              <div>• Biometric Mesh Analysis: Completed (0.002ms)</div>
              <div>• Solidity Ledger Receipt: Block #1982491</div>
            </div>
          </div>
        )}

        {project.previewType === 'tutorconnect' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#9CA3AF]">Real-Time Classroom:</span>
              <span className="text-[#10B981] font-bold">Live Stream Active</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="p-2 rounded-lg bg-[#181820] border border-white/[0.04] text-[#E4E4E7]">
                <div className="text-[10px] text-[#9CA3AF]">Stripe Payouts</div>
                <div className="text-[#10B981] font-semibold">$1,420 Completed</div>
              </div>
              <div className="p-2 rounded-lg bg-[#181820] border border-white/[0.04] text-[#E4E4E7]">
                <div className="text-[10px] text-[#9CA3AF]">WebRTC Latency</div>
                <div className="text-[#E91E63] font-semibold">14ms P2P</div>
              </div>
            </div>
          </div>
        )}

        {project.previewType === 'apisentry' && (
          <div className="space-y-2">
            <div className="text-xs text-[#8B5CF6] font-mono">$ apisentry audit --suite owasp-top10</div>
            <div className="p-2.5 rounded-lg bg-[#181820] border border-white/[0.04] text-[11px] text-[#D1D5DB] space-y-1 font-mono">
              <div className="text-[#10B981]">✓ 124 REST Endpoints Validated</div>
              <div className="text-[#10B981]">✓ Fuzzing Engine: 0 Token Exploits Found</div>
              <div className="text-[#9CA3AF]">• Compliance Audit: ISO/IEC 27001 Ready</div>
            </div>
          </div>
        )}

        {project.previewType === 'sentinelprompt' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#9CA3AF]">Prompt Injection Firewall:</span>
              <span className="text-[#3B82F6] font-bold">SHIELD ACTIVE</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#1C1724] border border-[#8B5CF6]/30 text-[11px] text-[#E4E4E7]">
              <span className="text-[#E91E63] font-semibold">[INTERCEPTED]</span> Jailbreak attack vector neutralized via semantic embedding divergence.
            </div>
          </div>
        )}

        {/* Footer Meta */}
        <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-[10px] text-[#6B7280]">
          <span>Full Stack Architecture</span>
          <span className="font-semibold text-[#E4E4E7]">Python & AI Engine</span>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" ref={ref} className="py-28 px-6 relative border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141418] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#E91E63] mb-4">
            <span>Portfolio</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white font-display uppercase">
            PROJECTS
          </h2>
        </motion.div>

        {/* Vertical Stacked Cards Matching Video Layout */}
        <div className="space-y-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: 'easeOut' }}
              className="video-card p-7 sm:p-9 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center group"
            >
              {/* Left Column: Number, Title, Description, Tags, Button */}
              <div className="lg:col-span-6 flex flex-col justify-between h-full">
                <div>
                  {/* Number Badge */}
                  <div
                    className="text-2xl sm:text-3xl font-extrabold font-mono mb-3"
                    style={{ color: project.accent }}
                  >
                    {project.number}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-display group-hover:text-white transition-colors">
                    {project.title}
                  </h3>

                  {/* Subtitle */}
                  <div
                    className="text-xs sm:text-sm font-semibold mb-4 tracking-wide"
                    style={{ color: project.accent }}
                  >
                    {project.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-[#9CA3AF] text-sm sm:text-base leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-full bg-[#181820] text-[#E4E4E7] text-xs font-mono border border-white/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Rounded LIVE PROJECT / VIEW PROJECT Button */}
                <div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill btn-pill-dark group/btn font-semibold tracking-wide"
                  >
                    <span>{project.buttonText}</span>
                    <FiArrowUpRight className="text-base transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>
              </div>

              {/* Right Column: Preview Image / Mockup */}
              <div className="lg:col-span-6 w-full">
                <ProjectMockupVisual project={project} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
