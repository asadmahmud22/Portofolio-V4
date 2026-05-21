import { useState, useEffect } from 'react'
import { Search, X, ExternalLink, Award, BookOpen, Trophy, Users, Mic, Briefcase } from 'lucide-react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import { ACHIEVEMENTS_STATIC, CATEGORY_COLORS } from '../data/portfolio'

const FILTERS = ['all', 'achievement', 'competition', 'bootcamp', 'organization', 'webinar and seminar', 'intern']

const CATEGORY_ICONS = {
  achievement: Award,
  competition: Trophy,
  bootcamp: BookOpen,
  organization: Users,
  'webinar and seminar': Mic,
  intern: Briefcase,
}

export default function Achievements() {
  const [items, setItems] = useState(ACHIEVEMENTS_STATIC)
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [modal, setModal] = useState(null)
  const [dropOpen, setDropOpen] = useState(false)

  useEffect(() => {
    const fetch = async () => {
      try {
        const snap = await getDocs(collection(db, 'achievements'))
        const data = snap.docs.map((d) => ({ id: d.id, ...d.data() }))
        if (data.length > 0) {
          data.sort((a, b) => (b.date > a.date ? 1 : -1))
          setItems(data)
        }
      } catch {
        // fallback to static
      } finally {
        setLoading(false)
      }
    }
    fetch()
  }, [])

  const filtered = items.filter(
    (a) =>
      (filter === 'all' || a.category === filter) &&
      a.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <section id="achievements" className="py-24 md:py-32 px-5 md:px-8 bg-ink-50 dark:bg-ink-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="section-label mb-4 observe">— Achievements</p>
            <h2 className="heading-lg text-ink-900 dark:text-ink-50 observe observe-delay-1">
              Certificates &<br />
              <em className="not-italic text-accent">Recognition</em>
            </h2>
          </div>
          <p className="font-body text-sm text-ink-500 dark:text-ink-400 max-w-xs observe observe-delay-2">
            {items.length}+ certificates earned across competitions, bootcamps, and organizations.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-3 mb-10 observe observe-delay-2">
          {/* Custom Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropOpen((p) => !p)}
              className="flex items-center gap-2 border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 px-4 py-2.5 text-sm font-body text-ink-700 dark:text-ink-200 hover:border-accent transition-colors min-w-[160px] justify-between"
            >
              <span>{filter === 'all' ? 'All Categories' : filter.charAt(0).toUpperCase() + filter.slice(1)}</span>
              <svg className="w-4 h-4 text-ink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropOpen && (
              <div className="absolute top-full left-0 mt-1 w-full bg-white dark:bg-ink-800 border border-ink-200 dark:border-ink-700 z-20 shadow-lg">
                {FILTERS.map((f) => (
                  <button
                    key={f}
                    onClick={() => { setFilter(f); setDropOpen(false) }}
                    className={`block w-full text-left px-4 py-2.5 text-sm font-body transition-colors hover:bg-ink-50 dark:hover:bg-ink-700 ${
                      filter === f ? 'text-accent font-medium' : 'text-ink-600 dark:text-ink-300'
                    }`}
                  >
                    {f === 'all' ? 'All Categories' : f.charAt(0).toUpperCase() + f.slice(1)}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Search */}
          <div className="relative flex-1">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400" />
            <input
              type="text"
              placeholder="Search certificates..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 text-sm font-body text-ink-800 dark:text-ink-100 placeholder:text-ink-400 focus:outline-none focus:border-accent transition-colors"
            />
            {search && (
              <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-400 hover:text-ink">
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-4 border-ink-200 border-t-accent rounded-full animate-spin" />
          </div>
        )}

        {/* Grid */}
        {!loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((ach, i) => {
              const colors = CATEGORY_COLORS[ach.category] || { bg: 'bg-ink-100', text: 'text-ink-600' }
              const Icon = CATEGORY_ICONS[ach.category] || Award

              return (
                <div
                  key={ach.id}
                  onClick={() => ach.img && setModal(ach)}
                  className={`observe observe-delay-${(i % 3) + 1} card p-5 group transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:border-ink-200 dark:hover:border-ink-600 ${ach.img ? 'cursor-pointer' : ''}`}
                >
                  {/* Image */}
                  {ach.img && (
                    <div className="relative overflow-hidden mb-4 h-40 bg-ink-100 dark:bg-ink-700">
                      <img
                        src={ach.img}
                        alt={ach.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => { e.target.style.display = 'none' }}
                      />
                    </div>
                  )}

                  {/* No image placeholder */}
                  {!ach.img && (
                    <div className="h-24 mb-4 bg-ink-100 dark:bg-ink-700 flex items-center justify-center">
                      <Icon size={32} className="text-ink-300 dark:text-ink-500" />
                    </div>
                  )}

                  {/* Category badge */}
                  <span className={`font-mono text-xs px-2 py-1 rounded-sm ${colors.bg} ${colors.text}`}>
                    {ach.category}
                  </span>

                  <h3 className="font-body font-medium text-sm text-ink-900 dark:text-ink-50 mt-3 mb-1 line-clamp-2 leading-snug">
                    {ach.title}
                  </h3>
                  <p className="font-body text-xs text-ink-500 dark:text-ink-400 line-clamp-1">{ach.org}</p>
                  <p className="font-mono text-xs text-ink-400 dark:text-ink-500 mt-2">{ach.date}</p>

                  {ach.link && (
                    <a
                      href={ach.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 mt-3 text-xs font-body text-accent hover:underline"
                    >
                      View Certificate <ExternalLink size={11} />
                    </a>
                  )}
                </div>
              )
            })}
          </div>
        )}

        {!loading && filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="font-body text-ink-400">No results found.</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setModal(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-white dark:bg-ink-900 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModal(null)}
              className="absolute top-3 right-3 z-10 p-2 bg-black/40 text-white hover:bg-black/60 transition rounded-full"
            >
              <X size={18} />
            </button>
            <img src={modal.img} alt={modal.title} className="w-full object-contain max-h-[70vh]" />
            <div className="p-5 border-t border-ink-100 dark:border-ink-800">
              <h3 className="font-display font-bold text-lg text-ink-900 dark:text-ink-50">{modal.title}</h3>
              <p className="font-body text-sm text-ink-500 dark:text-ink-400 mt-1">{modal.org}</p>
              <p className="font-mono text-xs text-ink-400 dark:text-ink-500 mt-1">{modal.date}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}