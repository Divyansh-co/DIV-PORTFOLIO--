import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiArrowUpRight, FiShield, FiBookOpen, FiLock, FiCpu } from 'react-icons/fi'

const projects = [
  {
    number: '01',
    title: 'VeriTrust AI',
    subtitle: 'Multi-Agent Deepfake & Synthetic Identity KYC',
    description:
      'Autonomous multi-agent verification system detecting generative deepfakes, face swaps, and synthetic identities in real time, anchored to Solidity smart contracts for tamper-evident verification audits.',
    tags: ['React', 'FastAPI', 'OpenCV', 'Solidity', 'Docker'],
    icon: FiShield,
    github: 'https://github.com/Divyansh-co',
    metric: '99.4% Precision · <12ms Latency',
    highlight: 'Deepfake & Biometric Liveness Verification',
  },
  {
    number: '02',
    title: 'TutorConnect',
    subtitle: 'Full-Stack Tutoring Marketplace (SaaS)',
    description:
      'Production-grade educational SaaS platform supporting real-time scheduling, Stripe automated escrow payouts, WebRTC peer-to-peer classroom streaming, and comprehensive analytical tutor dashboards.',
    tags: ['Django', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'Stripe'],
    icon: FiBookOpen,
    github: 'https://github.com/Divyansh-co',
    metric: 'Stripe Verified · WebRTC P2P',
    highlight: 'Real-Time Classroom & Automated Escrow',
  },
  {
    number: '03',
    title: 'APISentry',
    subtitle: 'Automated API Security Suite',
    description:
      'Automated testing framework that audits microservice endpoints against the OWASP API Security Top 10, executes dynamic schema fuzzing, and enforces contract compliance directly in CI/CD pipelines.',
    tags: ['Python', 'FastAPI', 'pytest', 'Docker', 'OpenAPI', 'CI/CD'],
    icon: FiLock,
    github: 'https://github.com/Divyansh-co',
    metric: 'OWASP Top 10 · 124 REST Endpoints',
    highlight: 'Continuous Security Fuzzing & Audit CI',
  },
  {
    number: '04',
    title: 'SentinelPrompt',
    subtitle: 'LLM Prompt Injection Firewall',
    description:
      'Low-latency security middleware that inspects and filters prompt injection attacks on generative AI applications using semantic embedding vector analysis and token-level anomaly detection.',
    tags: ['Python', 'FastAPI', 'PyTorch', 'NLP', 'Redis', 'Docker'],
    icon: FiCpu,
    github: 'https://github.com/Divyansh-co',
    metric: 'Zero-Day Defense · Semantic Fuzzing',
    highlight: 'Real-Time Token Stream Anomaly Shield',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-70px' })

  return (
    <section
      id="projects"
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
            <span>Selected Projects</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-display uppercase tracking-tight text-white leading-tight">
            Featured <span className="text-[#FF0000]">Work</span>
          </h2>
        </motion.div>

        {/* 4 Clean Project Cards */}
        <div className="space-y-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 35 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: idx * 0.12, ease: 'easeOut' }}
              className="ruchit-card p-8 sm:p-11 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center group"
            >
              {/* Left Column: Number, Title, Description, Tags, View Project Button */}
              <div className="lg:col-span-7 flex flex-col justify-between h-full">
                <div>
                  {/* Red Number */}
                  <div className="text-2xl sm:text-3xl font-mono font-extrabold text-[#FF0000] mb-3">
                    {project.number}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-3xl sm:text-4xl font-bold font-sans text-white mb-2 tracking-tight group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-sm font-semibold text-[#FF0000] mb-4 tracking-wide font-mono">
                    {project.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-[#9CA3AF] text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3.5 py-1 rounded-full bg-[#141419] text-[#D1D5DB] text-xs font-mono border border-white/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Project Button */}
                <div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-red-outline group/btn font-bold tracking-wider text-xs uppercase px-7 py-3.5 inline-flex items-center gap-2.5"
                  >
                    <span>View Project</span>
                    <FiArrowUpRight className="text-base text-[#FF0000] transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>
              </div>

              {/* Right Column: Sleek Charcoal Preview Frame */}
              <div className="lg:col-span-5 w-full">
                <div className="w-full rounded-2xl bg-[#09090C] border border-white/[0.08] overflow-hidden p-6 shadow-xl flex flex-col justify-between min-h-[220px] group-hover:border-[#FF0000]/30 transition-all duration-300">
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF0000]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      <span className="ml-2 text-[11px] font-mono text-[#9CA3AF]">
                        {project.title.toLowerCase()}.ai/core
                      </span>
                    </div>
                    <project.icon className="text-[#FF0000] text-lg" />
                  </div>

                  <div className="py-6 space-y-3">
                    <div className="text-xs font-mono text-[#9CA3AF] uppercase tracking-wider">
                      Module Status
                    </div>
                    <div className="text-sm font-semibold text-white">
                      {project.highlight}
                    </div>
                    <div className="w-full bg-[#16161D] h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#FF0000] h-full w-[94%]" />
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                    <span className="text-[#9CA3AF]">Verified Metric</span>
                    <span className="text-[#FF0000] font-semibold">{project.metric}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
