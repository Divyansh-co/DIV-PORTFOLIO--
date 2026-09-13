import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Work', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#000000]/90 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/80 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Left: Logo "DM" */}
        <a
          href="#"
          className="group flex items-center gap-1.5 text-2xl font-bold tracking-tighter text-white"
        >
          <span className="font-display tracking-tight text-3xl">DM</span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF0000] shadow-[0_0_12px_#FF0000] transition-transform duration-300 group-hover:scale-125" />
        </a>

        {/* Center/Right: Nav Links */}
        <nav className="hidden md:flex items-center gap-9 text-xs font-semibold tracking-widest uppercase">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#9CA3AF] hover:text-white transition-colors duration-200 tracking-[0.18em]"
            >
              {link.name}
            </a>
          ))}

          {/* Red Contact Button */}
          <a
            href="#contact"
            className="btn-red !py-2.5 !px-6 !text-xs !font-bold"
          >
            Contact Me
          </a>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white text-2xl p-1 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#000000]/98 border-b border-white/10 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold tracking-widest text-[#D1D5DB] hover:text-[#FF0000] uppercase py-1"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-red w-full text-center block text-xs font-bold"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
