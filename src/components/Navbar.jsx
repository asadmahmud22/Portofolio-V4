import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { NAV_LINKS } from '../data/portfolio'
import { useDarkMode } from '../hooks/useDarkMode'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dark, setDark] = useDarkMode()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-50/90 dark:bg-ink-900/90 backdrop-blur-md border-b border-ink-100 dark:border-ink-800 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNav('#hero') }}
          className="font-display font-black text-xl text-ink-900 dark:text-ink-50 tracking-tight"
        >
          A<span className="text-accent">.</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <button
                onClick={() => handleNav(l.href)}
                className="underline-anim font-body text-sm font-medium text-ink-600 dark:text-ink-300 hover:text-ink-900 dark:hover:text-ink-50 transition-colors"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle dark mode"
            className="p-2 rounded-full text-ink-500 dark:text-ink-400 hover:text-accent dark:hover:text-accent transition-colors"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-ink-700 dark:text-ink-300"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* CTA Desktop */}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNav('#contact') }}
            className="hidden md:inline-flex btn-primary text-xs py-2 px-4"
          >
            Hire Me
          </a>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } bg-ink-50 dark:bg-ink-900 border-t border-ink-100 dark:border-ink-800`}
      >
        <ul className="flex flex-col px-5 py-4 gap-1">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <button
                onClick={() => handleNav(l.href)}
                className="w-full text-left py-3 font-body text-base font-medium text-ink-700 dark:text-ink-200 border-b border-ink-100 dark:border-ink-800 hover:text-accent transition-colors"
              >
                {l.label}
              </button>
            </li>
          ))}
          <li className="pt-3">
            <button
              onClick={() => handleNav('#contact')}
              className="btn-primary w-full justify-center"
            >
              Hire Me
            </button>
          </li>
        </ul>
      </div>
    </header>
  )
}