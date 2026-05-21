import { MapPin, GraduationCap, Calendar } from 'lucide-react'

const STATS = [
  { value: '25+', label: 'Certificates' },
  { value: '4+', label: 'Projects' },
  { value: '3+', label: 'Years Learning' },
  { value: '2', label: 'Competition Awards' },
]

const INFO = [
  { icon: MapPin, text: 'Yogyakarta, Indonesia' },
  { icon: GraduationCap, text: 'S1 Teknologi Komputer — UTDI' },
  { icon: Calendar, text: 'Class of 2026' },
]

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <div>
            <p className="section-label mb-4 observe">— About Me</p>
            <h2 className="heading-lg text-ink-900 dark:text-ink-50 mb-6 observe observe-delay-1">
              Crafting interfaces that{' '}
              <em className="text-accent not-italic">speak</em> for themselves.
            </h2>
            <div className="space-y-4 observe observe-delay-2">
              <p className="body-text">
                I'm a Computer Technology student at Universitas Teknologi Digital Indonesia (UTDI),
                passionate about front-end development, UI/UX design, and building
                clean, impactful web experiences.
              </p>
              <p className="body-text">
                With hands-on experience in HTML, CSS, JavaScript, React, and Tailwind,
                I combine technical skill with a strong design sensibility to produce
                interfaces that are both functional and visually compelling.
              </p>
              <p className="body-text">
                When I'm not coding, I'm designing posters, joining competitions,
                or sharing knowledge as a speaker and event committee member.
              </p>
            </div>

            {/* Info chips */}
            <div className="flex flex-col gap-3 mt-8 observe observe-delay-3">
              {INFO.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <Icon size={16} className="text-accent flex-shrink-0" />
                  <span className="font-body text-sm text-ink-600 dark:text-ink-300">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — stats + image area */}
          <div className="flex flex-col gap-8">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 observe observe-delay-2">
              {STATS.map(({ value, label }) => (
                <div
                  key={label}
                  className="card p-6 group hover:border-accent transition-all duration-300 cursor-default"
                >
                  <p className="font-display font-black text-4xl text-ink-900 dark:text-ink-50 group-hover:text-accent transition-colors">
                    {value}
                  </p>
                  <p className="font-body text-sm text-ink-500 dark:text-ink-400 mt-1">{label}</p>
                </div>
              ))}
            </div>

            {/* Decorative card */}
            <div className="observe observe-delay-3 relative">
              <div className="card p-6 border-l-4 border-l-accent">
                <p className="font-mono text-xs text-accent mb-3 tracking-wider">// philosophy</p>
                <p className="font-display text-xl font-bold text-ink-900 dark:text-ink-50 leading-snug">
                  "Good design is obvious. Great design is{' '}
                  <span className="text-accent italic">transparent</span>."
                </p>
                <p className="font-body text-sm text-ink-400 dark:text-ink-500 mt-3">— Joe Sparano</p>
              </div>
              {/* Accent corner */}
              <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}