import { ArrowUpRight } from 'lucide-react'
import { PROJECTS } from '../data/portfolio'

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <div>
            <p className="section-label mb-4 observe">— Selected Work</p>
            <h2 className="heading-lg text-ink-900 dark:text-ink-50 observe observe-delay-1">
              Projects that<br />
              <em className="not-italic text-accent">define</em> me
            </h2>
          </div>
          <p className="font-body text-sm text-ink-500 dark:text-ink-400 max-w-xs observe observe-delay-2">
            A selection of personal and academic projects reflecting my growth as a developer.
          </p>
        </div>

        {/* Featured project — large */}
        <div className="observe observe-delay-1 mb-6">
          <ProjectCard project={PROJECTS[0]} featured />
        </div>

        {/* Grid — rest */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS.slice(1).map((p, i) => (
            <div key={p.id} className={`observe observe-delay-${i + 2}`}>
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, featured = false }) {
  const { title, desc, tags, year, link, color } = project

  return (
    <div
      className={`card group relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
        featured ? 'p-8 md:p-12' : 'p-6'
      }`}
    >
      {/* Top color stripe */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: color }} />

      <div className={`flex ${featured ? 'flex-col md:flex-row md:items-end' : 'flex-col'} gap-6 justify-between`}>
        <div className="flex-1">
          {/* Year + number */}
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-ink-400 dark:text-ink-500">{year}</span>
            <div className="h-px flex-1 bg-ink-100 dark:bg-ink-700" />
          </div>

          <h3
            className={`font-display font-bold text-ink-900 dark:text-ink-50 group-hover:text-accent transition-colors mb-3 ${
              featured ? 'text-2xl md:text-4xl' : 'text-xl'
            }`}
          >
            {title}
          </h3>
          <p className="body-text text-sm md:text-base line-clamp-3">{desc}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs px-3 py-1 border border-ink-200 dark:border-ink-700 text-ink-500 dark:text-ink-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex-shrink-0">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm font-medium text-ink-900 dark:text-ink-50 hover:text-accent transition-colors group/link"
            >
              View Project
              <ArrowUpRight
                size={16}
                className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
              />
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 font-mono text-xs text-ink-300 dark:text-ink-600">
              Private / WIP
            </span>
          )}
        </div>
      </div>
    </div>
  )
}