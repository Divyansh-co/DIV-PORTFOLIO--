import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail, FiSend, FiCheck, FiArrowUpRight } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {
  SiPython,
  SiPytorch,
  SiReact,
  SiFastapi,
  SiDocker,
  SiDjango,
  SiPostgresql,
  SiTypescript,
} from 'react-icons/si'

const techLogos = [
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
  { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Django', icon: SiDjango, color: '#092E20' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 6000)
    }, 700)
  }

  return (
    <section id="contact" ref={ref} className="py-28 px-6 relative border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto">
        {/* Title Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141418] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#10B981] mb-4">
            <span>Connect</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white font-display uppercase">
            GET IN TOUCH
          </h2>
          <p className="text-[#9CA3AF] text-base max-w-lg mx-auto mt-4">
            Available for full-time software engineering, AI engineering opportunities, and production collaborations.
          </p>
        </motion.div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          {/* Left Column: Direct Info & Social Channels */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="video-card p-8">
              <h3 className="text-xl font-bold text-white font-display mb-2">
                Let’s talk about your next system.
              </h3>
              <p className="text-[#9CA3AF] text-sm leading-relaxed mb-6">
                Feel free to email directly or submit the contact form. I typically respond within 24 hours.
              </p>

              {/* Displayed Email */}
              <div className="mb-6">
                <div className="text-xs font-mono text-[#9CA3AF] uppercase tracking-wider mb-1.5">
                  Email Address
                </div>
                <a
                  href="mailto:divyanshmishra.python@gmail.com"
                  className="text-base sm:text-lg font-semibold text-white hover:text-[#E91E63] transition-colors flex items-center gap-2"
                >
                  <FiMail className="text-[#E91E63] shrink-0" />
                  <span className="truncate">divyanshmishra.python@gmail.com</span>
                </a>
              </div>

              {/* Status indicator */}
              <div className="flex items-center gap-2.5 text-xs text-[#E4E4E7] font-mono pt-4 border-t border-white/[0.06]">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span>Open for 2025/2026 Developer Roles</span>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/Divyansh-co"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-pill-dark flex-1"
              >
                <FaGithub className="text-base" />
                <span>GitHub Profile</span>
                <FiArrowUpRight className="text-xs text-[#9CA3AF]" />
              </a>

              <a
                href="https://www.linkedin.com/in/divyanshmishra/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-pill-dark flex-1"
              >
                <FaLinkedin className="text-base text-[#0A66C2]" />
                <span>LinkedIn</span>
                <FiArrowUpRight className="text-xs text-[#9CA3AF]" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Clean Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <div className="video-card p-8 sm:p-10">
              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#10B981]/20 text-[#10B981] flex items-center justify-center mx-auto text-xl">
                    <FiCheck />
                  </div>
                  <h4 className="text-xl font-bold text-white font-display">
                    Message Dispatched!
                  </h4>
                  <p className="text-sm text-[#9CA3AF] max-w-sm mx-auto">
                    Thank you, Divyansh will review your inquiry and respond shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-mono text-[#9CA3AF] mb-2 uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-5 py-3.5 rounded-xl bg-[#09090C] border border-white/10 text-white placeholder-[#6B7280] focus:outline-none focus:border-[#E91E63] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#9CA3AF] mb-2 uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@company.com"
                      className="w-full px-5 py-3.5 rounded-xl bg-[#09090C] border border-white/10 text-white placeholder-[#6B7280] focus:outline-none focus:border-[#E91E63] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#9CA3AF] mb-2 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your team, project, or role..."
                      className="w-full px-5 py-3.5 rounded-xl bg-[#09090C] border border-white/10 text-white placeholder-[#6B7280] focus:outline-none focus:border-[#E91E63] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-pill btn-pill-magenta py-4 font-semibold tracking-wide text-sm"
                  >
                    {loading ? (
                      <span>TRANSMITTING...</span>
                    ) : (
                      <>
                        <FiSend className="text-base" />
                        <span>SEND MESSAGE</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Colorful Geometric Logo Bar (as seen in the video footer) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="pt-12 border-t border-white/[0.06]"
        >
          <div className="text-center text-xs font-mono text-[#6B7280] uppercase tracking-widest mb-8">
            Core Technology Stack & Ecosystem
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {techLogos.map((tech, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#131317] border border-white/[0.06] hover:border-white/20 transition-all hover:scale-105"
              >
                <tech.icon
                  className="text-lg"
                  style={{ color: tech.color }}
                />
                <span className="text-xs font-semibold text-[#E4E4E7]">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
