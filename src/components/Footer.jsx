import { FiArrowUp, FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-[#000000] text-white pt-20 pb-12 px-6 lg:px-12 border-t border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Navigation & Meta Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-16 border-b border-white/[0.06]">
          {/* Left: Branding */}
          <div className="flex items-center gap-2">
            <span className="font-display text-3xl tracking-tight text-white">DM</span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF0000] shadow-[0_0_10px_#FF0000]" />
            <span className="text-xs font-mono text-[#9CA3AF] ml-2">
              Divyansh Mishra · Full Stack Python & AI Engineer
            </span>
          </div>

          {/* Center: Social & Contact Quick Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono">
            <a
              href="https://github.com/Divyansh-co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D1D5DB] hover:text-[#FF0000] transition-colors flex items-center gap-1.5"
            >
              <FiGithub />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/divyanshmishra/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D1D5DB] hover:text-[#FF0000] transition-colors flex items-center gap-1.5"
            >
              <FiLinkedin className="text-[#0A66C2]" />
              <span>LinkedIn</span>
            </a>

            <a
              href="mailto:divyanshmishra.python@gmail.com"
              className="text-[#D1D5DB] hover:text-[#FF0000] transition-colors flex items-center gap-1.5"
            >
              <FiMail className="text-[#FF0000]" />
              <span>divyanshmishra.python@gmail.com</span>
            </a>
          </div>

          {/* Right: Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#111115] border border-white/10 hover:border-[#FF0000]/40 text-xs font-mono text-white transition-all cursor-pointer group"
          >
            <span>Top</span>
            <FiArrowUp className="text-xs text-[#FF0000] group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* ======================================================
            MASSIVE RED STATEMENT TEXT AT BOTTOM: "MR. DIVYANSH"
            (Exact signature from Ruchit P. reference)
            ====================================================== */}
        <div className="pt-12 pb-6 text-center overflow-hidden select-none">
          <div className="text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] xl:text-[13rem] font-display uppercase tracking-tighter text-[#FF0000] leading-none whitespace-nowrap drop-shadow-[0_0_50px_rgba(255,0,0,0.35)] opacity-95 hover:opacity-100 transition-opacity">
            MR. DIVYANSH
          </div>
        </div>

        {/* Sub-Footer Copyright Line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#6B7280] border-t border-white/[0.04]">
          <div>© 2026 Divyansh Mishra. All rights reserved.</div>
          <div className="mt-2 sm:mt-0">
            Crafted with React, Tailwind CSS, & React Three Fiber.
          </div>
        </div>
      </div>
    </footer>
  )
}
