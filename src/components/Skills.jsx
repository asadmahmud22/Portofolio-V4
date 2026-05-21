import { SKILLS } from '../data/portfolio'

const SKILL_ICONS = {
  'HTML5': '🌐', 'CSS3': '🎨', 'JavaScript': '⚡', 'React.js': '⚛️',
  'Tailwind CSS': '🌊', 'Bootstrap': '🅱️', 'Java': '☕', 'Node.js': '🟢',
  'Firebase': '🔥', 'MySQL': '🗄️', 'SQL': '📊', 'Figma': '🎭',
  'UI/UX Design': '✏️', 'Wireframing': '📐', 'Looker Studio': '📈',
  'Git': '🔀', 'VS Code': '💻', 'CCNA Fundamentals': '🔌',
  'IoT': '📡', 'Cloud (AWS)': '☁️',
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-5 md:px-8 bg-ink-900 dark:bg-ink-950 noise-bg">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <div>
            <p className="section-label mb-4 observe text-accent">— Skills & Tools</p>
            <h2 className="heading-lg text-ink-50 observe observe-delay-1">
              What I work<br />
              <em className="not-italic text-accent">with</em>
            </h2>
          </div>
          <p className="font-body text-sm text-ink-400 max-w-xs md:text-right observe observe-delay-2">
            A curated set of tools and technologies I use to build modern web experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((group, gi) => (
            <div
              key={group.category}
              className={`observe observe-delay-${gi + 1} border border-ink-700 hover:border-accent transition-all duration-500 p-6 group`}
            >
              <p className="font-mono text-xs text-accent tracking-widest mb-5">
                {String(gi + 1).padStart(2, '0')}. {group.category.toUpperCase()}
              </p>
              <ul className="space-y-3">
                {group.items.map((skill) => (
                  <li key={skill} className="flex items-center gap-3">
                    <span className="text-base leading-none">{SKILL_ICONS[skill] || '•'}</span>
                    <span className="font-body text-sm text-ink-300 group-hover:text-ink-100 transition-colors">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Scrolling ticker */}
        <div className="mt-16 overflow-hidden border-t border-ink-800 pt-8">
          <div className="flex gap-8 animate-[marquee_20s_linear_infinite] whitespace-nowrap w-max">
            {[...Array(3)].map((_, i) =>
              SKILLS.flatMap(g => g.items).map((skill) => (
                <span key={`${i}-${skill}`} className="font-mono text-xs text-ink-600 uppercase tracking-widest">
                  {skill} <span className="text-accent mx-4">·</span>
                </span>
              ))
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  )
}