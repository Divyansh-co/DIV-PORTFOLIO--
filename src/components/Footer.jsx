import { FiArrowUp } from 'react-icons/fi'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-12 px-6 border-t border-white/[0.04] bg-[#08080A]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#6E6A65]">
        <div className="flex items-center gap-2">
          <span className="text-white font-semibold font-display">DM.</span>
          <span>© 2026 Divyansh Mishra. Designed with architectural restraint.</span>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-[#9E9A95]">
            Built with React, Three.js & Tailwind
          </span>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#9E9A95] hover:text-[#E07A3D] transition-colors p-1"
            aria-label="Scroll to top"
          >
            <span>Top</span>
            <FiArrowUp className="text-xs" />
          </button>
        </div>
      </div>
    </footer>
  )
}
