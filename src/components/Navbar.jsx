import { useState, useEffect } from 'react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Detect active section
      const sections = ['hero', 'about', 'skills', 'career', 'projects', 'techstack', 'contact']
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 200) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#hero" className="nav-logo" onClick={(e) => handleNavClick(e, '#hero')}>
        DM
      </a>

      <span className="nav-email">divyanshmishra.python@gmail.com</span>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className={activeSection === item.href.slice(1) ? 'active' : ''}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        className="nav-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <span style={menuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}} />
        <span style={menuOpen ? { opacity: 0 } : {}} />
        <span style={menuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}} />
      </button>
    </nav>
  )
}
