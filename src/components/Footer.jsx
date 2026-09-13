import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Divyansh Mishra. Crafted with passion.</p>
      <div className="footer-links">
        <a href="https://github.com/Divyansh-co" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/divyansh-mishra" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="mailto:divyanshmishra.python@gmail.com" aria-label="Email">
          <FiMail />
        </a>
      </div>
    </footer>
  )
}
