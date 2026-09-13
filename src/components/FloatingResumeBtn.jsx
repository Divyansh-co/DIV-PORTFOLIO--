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
        className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#E07A3D] text-white font-medium text-xs tracking-wide shadow-lg shadow-[#E07A3D]/25 border border-white/20 transition-all duration-300 hover:bg-[#EB894C] hover:scale-105 hover:shadow-xl hover:shadow-[#E07A3D]/35"
      >
        <FiFileText className="text-sm transition-transform duration-300 group-hover:-translate-y-0.5" />
        <span>Resume</span>
        <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
      </a>
    </aside>
  )
}
