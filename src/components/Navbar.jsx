import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Work', path: '/work' },
  { name: 'About', path: '/about' },
  { name: 'Developers', path: '/developers' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled ? 'glass-nav shadow-lg shadow-black/20 border-white/[0.06]' : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img src="/text_DevStudio.png" alt="DevStudio Text Logo" className="h-10 object-contain" />
          <span className="hidden sm:block text-xl font-bold tracking-tight text-white font-display">
            DevStudio
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors relative ${
                location.pathname === link.path
                  ? 'text-primary'
                  : 'text-surface-400 hover:text-primary'
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          to="/contact"
          className="hidden md:inline-flex bg-gradient-primary text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all glow-hover"
        >
          Get in touch
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center text-surface-300 hover:text-white transition-colors"
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          <span className="material-symbols-outlined text-2xl">
            {isOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 pt-2 bg-background/95 backdrop-blur-xl border-t border-surface-700/50 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? 'text-primary bg-primary/10'
                  : 'text-surface-400 hover:text-white hover:bg-surface-800/50'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block mt-4 bg-gradient-primary text-white px-4 py-3 rounded-xl text-sm font-bold text-center"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </nav>
  )
}
