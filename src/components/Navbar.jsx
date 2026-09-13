import { useState, useEffect } from 'react'
import { FiCopy, FiCheck } from 'react-icons/fi'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const copyEmail = () => {
    navigator.clipboard.writeText('divyanshmishra.python@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08080A]/85 backdrop-blur-md border-b border-[#201D1A]/60 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Left: Logo */}
        <a
          href="#"
          className="group flex items-center gap-1.5 text-lg font-bold tracking-tight text-white transition-opacity hover:opacity-90"
        >
          <span className="font-display tracking-tight text-[1.15rem]">DM</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#E07A3D] transition-transform duration-300 group-hover:scale-125" />
        </a>

        {/* Center: Email with quick copy */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#12100E]/70 border border-white/5 text-xs text-[#9E9A95] transition-all hover:border-[#E07A3D]/30 hover:text-[#E8E6E3]">
          <a
            href="mailto:divyanshmishra.python@gmail.com"
            className="hover:underline tracking-wide transition-colors"
          >
            divyanshmishra.python@gmail.com
          </a>
          <button
            onClick={copyEmail}
            title="Copy email"
            aria-label="Copy email address"
            className="text-[#6E6A65] hover:text-[#E07A3D] transition-colors p-0.5 ml-1"
          >
            {copied ? <FiCheck className="text-emerald-400 text-xs" /> : <FiCopy className="text-xs" />}
          </button>
        </div>

        {/* Right: Minimal Navigation */}
        <nav className="flex items-center gap-6 text-xs font-medium tracking-widest text-[#9E9A95] uppercase">
          <a
            href="#about"
            className="hover:text-white transition-colors duration-200 tracking-[0.15em]"
          >
            ABOUT
          </a>
          <a
            href="#projects"
            className="hover:text-white transition-colors duration-200 tracking-[0.15em]"
          >
            WORK
          </a>
          <a
            href="#contact"
            className="hover:text-white transition-colors duration-200 tracking-[0.15em]"
          >
            CONTACT
          </a>
        </nav>
      </div>
    </header>
  )
}
