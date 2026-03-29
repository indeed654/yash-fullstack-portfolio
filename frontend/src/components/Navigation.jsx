import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// HUD Corner Bracket
const HudBracket = ({ position }) => (
  <svg className={`text-cyan-500/40 ${position}`} width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 4 L4 20 M4 4 L20 4" />
  </svg>
)

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('about')

  const navItems = [
    { name: 'ABOUT', id: 'about' },
    { name: 'SKILLS', id: 'skills' },
    { name: 'EXPERIENCE', id: 'experience' },
    { name: 'PROJECTS', id: 'projects' },
    { name: 'CERTIFICATIONS', id: 'certifications' },
    { name: 'CONTACT', id: 'contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id))
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.getBoundingClientRect().top <= 100) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{
      background: 'rgba(5, 8, 22, 0.9)',
      backdropFilter: 'blur(30px)',
      WebkitBackdropFilter: 'blur(30px)',
      borderBottom: '1px solid rgba(0,245,255,0.2)',
      boxShadow: '0 4px 30px rgba(0,0,0,0.5)'
    }}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between relative">
        {/* HUD Corner Brackets */}
        <HudBracket position="absolute left-4 top-4" />
        <HudBracket position="absolute right-4 top-4" />

        {/* Logo */}
        <motion.a
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-black text-xl cursor-pointer relative group"
          style={{
            fontFamily: "'Space Grotesk', monospace",
            background: 'linear-gradient(135deg, #00F5FF 0%, #FF6B00 50%, #1E90FF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 20px rgba(0,245,255,0.5)',
          }}
          whileHover={{ scale: 1.05, y: -2 }}
        >
          YKS
          <motion.div 
            className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 via-orange-500 to-blue-500 opacity-0 group-hover:opacity-100"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.a>

        {/* Desktop Navigation - HUD Controls */}
        <div className="hidden md:flex items-center space-x-0.5 relative">
          {navItems.map((item, idx) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => scrollToSection(item.id)}
              className="relative px-5 py-3 font-mono text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105"
              style={{
                color: activeSection === item.id ? '#00F5FF' : 'rgba(255,255,255,0.6)',
                textShadow: activeSection === item.id ? '0 0 10px rgba(0,245,255,0.8)' : 'none',
              }}
            >
              {item.name}
              
              {/* Neon Scanner Underline */}
              {activeSection === item.id && (
                <motion.div
                  layoutId="scannerLine"
                  className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5"
                  style={{
                    background: 'linear-gradient(90deg, #00F5FF, #FF6B00, #1E90FF)',
                    filter: 'drop-shadow(0 0 8px rgba(0,245,255,0.6))',
                  }}
                  initial={{ scaleX: 0.5, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.4, type: 'spring' }}
                />
              )}

              {/* Hover Glow */}
              <motion.div 
                className="absolute inset-0 rounded-md opacity-0 hover:opacity-100"
                style={{ boxShadow: '0 0 20px rgba(0,245,255,0.3)' }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg backdrop-blur-sm border border-white/20 hover:border-cyan-500/50 transition-all relative"
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.95 }}
          style={{ color: 'rgba(255,255,255,0.8)' }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </motion.button>
      </div>

      {/* Mobile Menu - HUD Panel */}
      <motion.div
        initial={false}
        animate={{ 
          height: isOpen ? 300 : 0, 
          opacity: isOpen ? 1 : 0 
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden md:hidden bg-[rgba(5,8,22,0.95)] backdrop-blur-xl border-t border-cyan-500/20"
      >
        <div className="px-6 py-6 space-y-2">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="w-full text-left px-4 py-4 font-mono text-sm uppercase tracking-wider rounded-xl transition-all hover:bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:text-cyan-400"
              whileHover={{ x: 8 }}
              style={{
                textShadow: activeSection === item.id ? '0 0 10px rgba(0,245,255,0.6)' : 'none',
                color: activeSection === item.id ? '#00F5FF' : 'rgba(255,255,255,0.8)',
              }}
            >
              {item.name}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </nav>
  )
}

