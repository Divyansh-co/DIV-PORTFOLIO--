import { FiFileText } from 'react-icons/fi'

export default function FloatingResumeBtn() {
  return (
    <aside
      aria-label="Resume quick access"
      className="fixed bottom-7 right-7 z-40"
    >
      <a
        href="https://drive.google.com/file/d/1XqjHq7Tq6f5A6N6a0q_V6d3k_sample/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#131317] text-white font-medium text-xs tracking-wide shadow-xl shadow-black/60 border border-white/15 transition-all duration-300 hover:bg-[#E91E63] hover:border-[#E91E63] hover:scale-105 hover:shadow-[0_0_24px_rgba(233,30,99,0.4)]"
      >
        <FiFileText className="text-sm transition-transform duration-300 group-hover:-translate-y-0.5" />
        <span className="font-semibold tracking-wider uppercase">RESUME</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
      </a>
    </aside>
  )
}
