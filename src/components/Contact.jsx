import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck, FiChevronDown, FiGithub, FiLinkedin, FiArrowUpRight } from 'react-icons/fi'

const faqs = [
  {
    question: 'What core technologies and stacks do you specialize in?',
    answer:
      'I specialize in Python (FastAPI, Django, PyTorch), modern frontend (React, Next.js, TypeScript, Tailwind CSS), distributed databases (PostgreSQL, Redis, MongoDB), and cloud/DevOps tooling (Docker, CI/CD, microservices architecture).',
  },
  {
    question: 'How do you approach multi-agent AI and biometric verification?',
    answer:
      'I architect autonomous multi-agent pipelines with clear sensory inputs, prompt isolation, and deterministic validation layers. In systems like VeriTrust AI, neural computer vision (OpenCV) detects liveness and deepfakes before emitting verifiable state receipts to a Solidity smart contract.',
  },
  {
    question: 'Are you available for full-time engineering roles or internships?',
    answer:
      'Yes, I am actively open to full-time software engineering and AI engineering roles, high-impact internships, and collaborative research initiatives for 2025 and 2026.',
  },
  {
    question: 'How do you ensure security and code quality in production?',
    answer:
      'Every project adheres to test-driven design (pytest, contract validation), OWASP API Security Top 10 compliance audits, token-level prompt injection firewalls, and continuous automated GitHub Actions pipelines.',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-70px' })

  const [activeFaq, setActiveFaq] = useState(null)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const apiUrl = import.meta.env.VITE_API_URL !== undefined
        ? import.meta.env.VITE_API_URL
        : (import.meta.env.DEV ? 'http://localhost:5000' : '')
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('API server returned error')
      }
    } catch {
      // Fallback for static GitHub Pages / offline mode: simulated transmission
    } finally {
      setLoading(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    }
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="py-32 px-6 lg:px-12 bg-[#000000] text-white relative border-t border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto">
        {/* ======================================================
            PART 1: FAQ ACCORDION SECTION
            ====================================================== */}
        <div className="mb-28 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111115] border border-white/10 text-xs font-mono font-semibold tracking-widest text-[#FF0000] uppercase mb-4">
              <span>FAQ</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-display uppercase tracking-tight text-white">
              Frequently Asked <span className="text-[#FF0000]">Questions</span>
            </h2>
          </motion.div>

          {/* Accordion List */}
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="ruchit-card overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-bold font-sans text-white group-hover:text-white transition-colors">
                      {faq.question}
                    </span>
                    <FiChevronDown
                      className={`text-xl text-[#FF0000] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 sm:px-7 pb-6 text-[#9CA3AF] text-sm sm:text-base leading-relaxed border-t border-white/[0.06] pt-4 font-normal">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* ======================================================
            PART 2: FINAL CTA & CONTACT FORM
            ====================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-8 border-t border-white/[0.08]">
          {/* Left Column: CTA Title & Direct Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111115] border border-white/10 text-xs font-mono font-semibold tracking-widest text-[#FF0000] uppercase mb-4">
                <span>Direct Inquiry</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-display uppercase tracking-tight text-white leading-tight">
                Let’s build <span className="text-[#FF0000]">incredible work</span> together.
              </h2>
            </div>

            <p className="text-[#9CA3AF] text-base sm:text-lg leading-relaxed font-normal">
              Have an ambitious SaaS concept, a multi-agent AI architecture, or an open engineering role? Reach out directly.
            </p>

            {/* Direct Details */}
            <div className="space-y-4 pt-2">
              {/* Email */}
              <div className="ruchit-card p-6">
                <div className="text-xs font-mono text-[#9CA3AF] uppercase tracking-wider mb-1">
                  Email Address
                </div>
                <a
                  href="mailto:divyanshmishra.python@gmail.com"
                  className="text-base sm:text-lg font-bold text-white hover:text-[#FF0000] transition-colors flex items-center gap-2"
                >
                  <FiMail className="text-[#FF0000] shrink-0" />
                  <span className="truncate">divyanshmishra.python@gmail.com</span>
                </a>
              </div>

              {/* Phone */}
              <div className="ruchit-card p-6">
                <div className="text-xs font-mono text-[#9CA3AF] uppercase tracking-wider mb-1">
                  Phone
                </div>
                <a
                  href="tel:+919026379972"
                  className="text-base sm:text-lg font-bold text-white hover:text-[#FF0000] transition-colors flex items-center gap-2"
                >
                  <FiPhone className="text-[#FF0000] shrink-0" />
                  <span>+91 90263 79972</span>
                </a>
              </div>

              {/* Location */}
              <div className="ruchit-card p-6 flex items-center gap-3">
                <FiMapPin className="text-[#FF0000] text-xl shrink-0" />
                <div>
                  <div className="text-xs font-mono text-[#9CA3AF] uppercase tracking-wider">
                    Base Location
                  </div>
                  <div className="text-sm font-semibold text-white">
                    Kanpur, Uttar Pradesh, India
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://github.com/Divyansh-co"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-red-outline flex-1 flex items-center justify-center gap-2"
              >
                <FiGithub className="text-base" />
                <span>GitHub</span>
                <FiArrowUpRight className="text-xs text-[#FF0000]" />
              </a>

              <a
                href="https://www.linkedin.com/in/divyanshmishra/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-red-outline flex-1 flex items-center justify-center gap-2"
              >
                <FiLinkedin className="text-base text-[#0A66C2]" />
                <span>LinkedIn</span>
                <FiArrowUpRight className="text-xs text-[#FF0000]" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Clean Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="ruchit-card p-8 sm:p-12">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#FF0000]/15 text-[#FF0000] flex items-center justify-center mx-auto text-2xl border border-[#FF0000]/30 shadow-[0_0_20px_rgba(255,0,0,0.3)]">
                    <FiCheck />
                  </div>
                  <h4 className="text-2xl font-bold font-sans text-white">
                    Message Dispatched
                  </h4>
                  <p className="text-sm text-[#9CA3AF] max-w-sm mx-auto font-normal">
                    Thank you for reaching out. Divyansh will review your message and respond promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs font-mono text-[#9CA3AF] mb-2 uppercase tracking-wider font-semibold">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Divyansh or your company"
                      className="w-full px-5 py-4 rounded-xl bg-[#07070A] border border-white/10 text-white placeholder-[#6B7280] focus:outline-none focus:border-[#FF0000] focus:shadow-[0_0_15px_rgba(255,0,0,0.25)] transition-all font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#9CA3AF] mb-2 uppercase tracking-wider font-semibold">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-5 py-4 rounded-xl bg-[#07070A] border border-white/10 text-white placeholder-[#6B7280] focus:outline-none focus:border-[#FF0000] focus:shadow-[0_0_15px_rgba(255,0,0,0.25)] transition-all font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#9CA3AF] mb-2 uppercase tracking-wider font-semibold">
                      Your Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your product, multi-agent AI requirements, or open role..."
                      className="w-full px-5 py-4 rounded-xl bg-[#07070A] border border-white/10 text-white placeholder-[#6B7280] focus:outline-none focus:border-[#FF0000] focus:shadow-[0_0_15px_rgba(255,0,0,0.25)] transition-all resize-none font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-red py-4 font-bold tracking-wider text-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {loading ? (
                      <span>TRANSMITTING...</span>
                    ) : (
                      <>
                        <FiSend className="text-base" />
                        <span>Send Message</span>
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
