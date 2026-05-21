import { Heart } from 'lucide-react'
import { NAV_LINKS } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  const handleNav = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-ink-900 dark:bg-ink-950 border-t border-ink-800 px-5 md:px-8 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNav('#hero') }}
            className="font-display font-black text-2xl text-ink-50 tracking-tight"
          >
            A<span className="text-accent">.</span>
          </a>

          {/* Nav links */}
          <ul className="flex flex-wrap justify-center gap-6">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <button
                  onClick={() => handleNav(l.href)}
                  className="font-body text-xs text-ink-500 hover:text-ink-200 transition-colors tracking-wide"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Copyright */}
          <p className="font-body text-xs text-ink-600 flex items-center gap-1.5">
            © {year} As'ad Mahmud Akram · Built with{' '}
            <Heart size={11} className="text-accent fill-accent" />
          </p>
        </div>
      </div>
    </footer>
  )
}