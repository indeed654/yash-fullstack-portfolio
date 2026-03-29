import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'SYSTEM', href: '#hero', id: 'hero' },
  { name: 'SKILLS', href: '#skills', id: 'skills' },
  { name: 'PROJECTS', href: '#projects', id: 'projects' },
  { name: 'ACHIEVEMENTS', href: '#achievements', id: 'achievements' },
  { name: 'JOURNEY', href: '#timeline', id: 'timeline' },
  { name: 'GITHUB', href: '#github', id: 'github' },
  { name: 'CONNECT', href: '#contact', id: 'contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass border-b border-cyan/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.a
              href="#hero"
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-lg border-2 border-cyan/50 flex items-center justify-center bg-cyan/5 group-hover:border-cyan group-hover:shadow-cyan transition-all duration-300">
                  <span className="font-orbitron text-cyan font-bold text-lg">Y</span>
                </div>
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-cyan rounded-full animate-pulse-glow" />
              </div>
              <div className="hidden sm:block">
                <div className="font-orbitron text-sm text-white tracking-wider">
                  JARVIS
                </div>
                <div className="font-mono text-[10px] text-cyan/60 tracking-widest">
                  v3.0.1
                </div>
              </div>
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className={`relative px-3 py-2 font-orbitron text-xs tracking-wider transition-all duration-300 ${
                    activeSection === link.id
                      ? 'text-cyan'
                      : 'text-white/50 hover:text-white/80'
                  }`}
                >
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 rounded bg-cyan/10 border border-cyan/20"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </motion.a>
              ))}
            </div>

            {/* System Status */}
            <div className="hidden md:flex items-center gap-4">
              <div className="font-mono text-[11px] text-cyan/60 tracking-wider">
                <span className="text-cyan/40">SYS:</span>{' '}
                <span className="text-green-400">ONLINE</span>
              </div>
              <div className="font-mono text-[11px] text-orange/60 tracking-wider">
                {formatTime(time)}
              </div>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 group"
            >
              <motion.span
                animate={{
                  rotate: mobileMenuOpen ? 45 : 0,
                  y: mobileMenuOpen ? 6 : 0,
                }}
                className="w-6 h-0.5 bg-cyan block transition-all"
              />
              <motion.span
                animate={{
                  opacity: mobileMenuOpen ? 0 : 1,
                  x: mobileMenuOpen ? 20 : 0,
                }}
                className="w-6 h-0.5 bg-cyan block transition-all"
              />
              <motion.span
                animate={{
                  rotate: mobileMenuOpen ? -45 : 0,
                  y: mobileMenuOpen ? -6 : 0,
                }}
                className="w-6 h-0.5 bg-cyan block transition-all"
              />
            </button>
          </div>
        </div>

        {/* Bottom line */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyan/20 to-transparent" />
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 z-40 glass border-b border-cyan/10 lg:hidden"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 font-orbitron text-sm tracking-wider rounded transition-all ${
                    activeSection === link.id
                      ? 'text-cyan bg-cyan/10 border-l-2 border-cyan'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="text-cyan/40 mr-2">//</span>
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar

