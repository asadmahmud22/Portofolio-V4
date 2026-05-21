import { useState } from 'react'
import { Send, Mail, MapPin, MessageSquare, Github, Linkedin, Instagram } from 'lucide-react'

const CONTACT_INFO = [
  { icon: Mail, label: 'Email', value: 'asadmakram@email.com', href: 'mailto:asadmakram@email.com' },
  { icon: MapPin, label: 'Location', value: 'Yogyakarta, Indonesia', href: null },
  { icon: MessageSquare, label: 'Open to', value: 'Freelance & Collaboration', href: null },
]

const SOCIALS = [
  { icon: Github, href: 'https://github.com/', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com/', label: 'Instagram' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Replace with your preferred form handler (e.g., Formspree, EmailJS, etc.)
    const mailto = `mailto:asadmakram@email.com?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    window.open(mailto)
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  const inputClass = "w-full border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 px-4 py-3 font-body text-sm text-ink-800 dark:text-ink-100 placeholder:text-ink-400 focus:outline-none focus:border-accent transition-colors"

  return (
    <section id="contact" className="py-24 md:py-32 px-5 md:px-8 bg-ink-900 dark:bg-ink-950 noise-bg">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left info */}
          <div>
            <p className="section-label mb-4 observe">— Get In Touch</p>
            <h2 className="heading-lg text-ink-50 mb-6 observe observe-delay-1">
              Let's build something{' '}
              <em className="not-italic text-accent">great</em> together
            </h2>
            <p className="font-body text-ink-400 leading-relaxed mb-10 observe observe-delay-2">
              I'm currently open to freelance opportunities, collaborations, and internship roles.
              Whether you have a project in mind or just want to say hi — my inbox is always open.
            </p>

            {/* Contact info */}
            <div className="space-y-5 mb-10 observe observe-delay-3">
              {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-ink-700 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-ink-500 mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="font-body text-sm text-ink-200 hover:text-accent transition-colors underline-anim">
                        {value}
                      </a>
                    ) : (
                      <p className="font-body text-sm text-ink-200">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="flex items-center gap-4 observe observe-delay-4">
              <span className="font-mono text-xs text-ink-600">Follow me</span>
              <div className="h-px flex-1 bg-ink-800" />
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 border border-ink-700 flex items-center justify-center text-ink-400 hover:text-accent hover:border-accent transition-all"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="observe observe-delay-2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-xs text-ink-500 block mb-2">Name *</label>
                  <input
                    required
                    type="text"
                    className={inputClass}
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-ink-500 block mb-2">Email *</label>
                  <input
                    required
                    type="email"
                    className={inputClass}
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="font-mono text-xs text-ink-500 block mb-2">Subject</label>
                <input
                  type="text"
                  className={inputClass}
                  placeholder="What's this about?"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                />
              </div>

              <div>
                <label className="font-mono text-xs text-ink-500 block mb-2">Message *</label>
                <textarea
                  required
                  rows={6}
                  className={`${inputClass} resize-none`}
                  placeholder="Tell me about your project or inquiry..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className={`w-full flex items-center justify-center gap-2 py-4 font-body text-sm font-medium tracking-wide transition-all duration-300 ${
                  sent
                    ? 'bg-accent2 text-white'
                    : 'bg-accent text-white hover:bg-accent/90'
                }`}
              >
                {sent ? (
                  '✓ Message sent!'
                ) : (
                  <>
                    Send Message <Send size={15} />
                  </>
                )}
              </button>

              <p className="font-mono text-xs text-ink-600 text-center">
                This will open your mail client. Alternatively, email me directly.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}