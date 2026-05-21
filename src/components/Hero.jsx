import { ArrowDown, Github, Linkedin, Instagram } from 'lucide-react'

const SOCIALS = [
  { icon: Github, href: 'https://github.com/', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com/', label: 'Instagram' },
]

export default function Hero() {
  const handleScroll = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end pb-20 pt-32 px-5 md:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background accent circle */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-accent/10 dark:bg-accent/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-20 w-[300px] h-[300px] rounded-full bg-accent2/10 dark:bg-accent2/5 blur-3xl" />

      {/* Year badge */}
      <div className="absolute top-28 right-5 md:right-8 flex items-center gap-2 animate-fade-in">
        <div className="w-2 h-2 rounded-full bg-accent2 animate-pulse" />
        <span className="font-mono text-xs text-ink-400 dark:text-ink-500">Available 2025</span>
      </div>

      {/* Social links — vertical on desktop */}
      <div className="hidden lg:flex flex-col items-center gap-5 fixed left-6 top-1/2 -translate-y-1/2 z-40">
        {SOCIALS.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-ink-400 hover:text-accent dark:text-ink-500 dark:hover:text-accent transition-colors"
          >
            <Icon size={18} />
          </a>
        ))}
        <div className="w-px h-20 bg-ink-200 dark:bg-ink-700 mt-2" />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Label */}
        <p className="section-label mb-6 animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
          — Computer Technology Student
        </p>

        {/* Big heading */}
        <h1 className="heading-xl text-ink-900 dark:text-ink-50 mb-6 animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
          As'ad<br />
          <em className="not-italic text-accent">Mahmud</em><br />
          Akram
        </h1>

        {/* Divider with text */}
        <div className="flex items-center gap-5 mb-6 animate-fade-up" style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>
          <div className="w-12 h-px bg-accent" />
          <p className="body-text max-w-md text-base">
            Front-end developer & designer crafting modern digital experiences.
            Based in Yogyakarta, Indonesia.
          </p>
        </div>

        {/* CTA row */}
        <div className="flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
          <button onClick={() => handleScroll('#projects')} className="btn-primary">
            View Work
          </button>
          <button onClick={() => handleScroll('#contact')} className="btn-outline">
            Get in Touch
          </button>

          {/* Mobile socials */}
          <div className="flex lg:hidden items-center gap-4 ml-2">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="text-ink-400 hover:text-accent transition-colors">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => handleScroll('#about')}
        className="absolute bottom-8 right-5 md:right-8 flex flex-col items-center gap-2 text-ink-400 hover:text-accent transition-colors animate-fade-in"
        style={{ animationDelay: '0.8s', opacity: 0, animationFillMode: 'forwards' }}
      >
        <span className="font-mono text-xs rotate-90 tracking-widest">scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </button>

      {/* Large background text */}
      <div
        className="pointer-events-none absolute bottom-10 right-0 font-display font-black text-[12vw] leading-none text-ink-100 dark:text-ink-800 select-none hidden lg:block"
        aria-hidden="true"
      >
        DEV
      </div>
    </section>
  )
}