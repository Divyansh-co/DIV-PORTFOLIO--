import { FiArrowUp } from 'react-icons/fi'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-12 px-6 border-t border-white/[0.06] bg-[#070709]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#6B7280]">
        <div className="flex items-center gap-2">
          <span className="text-white font-bold font-display text-sm">DM</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#E91E63]" />
          <span>© 2026 Divyansh Mishra. All rights reserved.</span>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-[#9CA3AF]">
            Next.js · Tailwind CSS · React Three Fiber
          </span>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#9CA3AF] hover:text-[#E91E63] transition-colors p-1"
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
