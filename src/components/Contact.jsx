import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail, FiSend, FiCheck, FiArrowUpRight } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    // Simulate submission
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    }, 800)
  }

  return (
    <section id="contact" ref={ref} className="py-24 px-6 relative border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Heading, Direct Info, and Socials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <div className="section-badge">
                <span>Initiate Contact</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display mb-4 leading-tight">
                Let’s build something <span className="text-[#E07A3D]">remarkable</span> together.
              </h2>

              <p className="text-[#9E9A95] text-sm sm:text-base leading-relaxed mb-8">
                Whether you have an upcoming project, research inquiry, or full-time software engineering opportunity, my inbox is always open.
              </p>

              {/* Direct Email Card */}
              <div className="studio-card p-4 mb-6">
                <div className="text-xs font-mono text-[#6E6A65] uppercase tracking-wider mb-1">
                  Direct Channel
                </div>
                <a
                  href="mailto:divyanshmishra.python@gmail.com"
                  className="text-sm font-medium text-white hover:text-[#E07A3D] transition-colors flex items-center gap-2"
                >
                  <FiMail className="text-[#E07A3D]" />
                  <span>divyanshmishra.python@gmail.com</span>
                </a>
              </div>

              {/* Availability Note */}
              <div className="flex items-center gap-2 text-xs text-[#E8E6E3] font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for SWE & AI Engineering Roles (2025/2026)</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 mt-8 border-t border-white/[0.04] flex items-center gap-4">
              <a
                href="https://github.com/Divyansh-co"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#181512] border border-white/5 text-xs text-[#9E9A95] hover:text-white hover:border-[#E07A3D]/40 transition-all"
              >
                <FaGithub className="text-sm" />
                <span>GitHub</span>
                <FiArrowUpRight className="text-xs text-[#6E6A65]" />
              </a>

              <a
                href="https://www.linkedin.com/in/divyanshmishra/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#181512] border border-white/5 text-xs text-[#9E9A95] hover:text-white hover:border-[#E07A3D]/40 transition-all"
              >
                <FaLinkedin className="text-sm text-[#0A66C2]" />
                <span>LinkedIn</span>
                <FiArrowUpRight className="text-xs text-[#6E6A65]" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Minimal Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <div className="studio-card p-7 sm:p-8">
              <h3 className="text-lg font-semibold text-white font-display mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-[#9E9A95] mb-6">
                Expect a response within 24 hours.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-lg bg-[#181512] border border-[#E07A3D]/40 text-center space-y-2"
                >
                  <div className="w-10 h-10 rounded-full bg-[#E07A3D]/20 text-[#E07A3D] flex items-center justify-center mx-auto text-lg">
                    <FiCheck />
                  </div>
                  <h4 className="text-sm font-semibold text-white">Message Transmitted</h4>
                  <p className="text-xs text-[#9E9A95]">
                    Thank you for reaching out. I'll review your transmission and get back to you promptly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-[#9E9A95] mb-1.5 uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-2.5 rounded-lg bg-[#08080A] border border-white/[0.08] text-sm text-white placeholder-[#6E6A65] focus:outline-none focus:border-[#E07A3D] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#9E9A95] mb-1.5 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-2.5 rounded-lg bg-[#08080A] border border-white/[0.08] text-sm text-white placeholder-[#6E6A65] focus:outline-none focus:border-[#E07A3D] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#9E9A95] mb-1.5 uppercase tracking-wider">
                      Message / Project Scope
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about the system, requirements, or role..."
                      className="w-full px-4 py-2.5 rounded-lg bg-[#08080A] border border-white/[0.08] text-sm text-white placeholder-[#6E6A65] focus:outline-none focus:border-[#E07A3D] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-ember py-3 mt-2"
                  >
                    {loading ? (
                      <span className="text-xs">Dispatching...</span>
                    ) : (
                      <>
                        <FiSend className="text-sm" />
                        <span>Send Transmission</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
