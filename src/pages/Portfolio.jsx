import React from 'react'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Achievements from '../components/Achievements'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { useScrollObserver } from '../hooks/useScrollObserver'

export default function Portfolio() {
  useScrollObserver()

  return (
    <div className="bg-white dark:bg-ink-900 min-h-screen text-ink-900 dark:text-ink-50 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}