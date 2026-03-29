import { useState, useEffect, memo } from 'react'
import { motion } from 'framer-motion'
import ScannerRing from './ScannerRing'
import HudStatusBar from './HudStatusBar'

// JARVIS Scroll Indicator - HUD Style
const ScrollIndicator = memo(function ScrollIndicator({ isVisible }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="flex flex-col items-center gap-2 mt-20"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative"
      >
        <div className="h-px w-20 bg-gradient-to-r from-cyan-500/50 to-orange-500/50" />
        <span 
          className="absolute -top-2 left-1/2 -translate-x-1/2 text-xs tracking-wider uppercase font-mono"
          style={{ color: 'rgba(0,245,255,0.6)' }}
        >
          SCROLL
        </span>
      </motion.div>
      <div className="w-px h-8 bg-gradient-to-b from-cyan-500/30 to-transparent" />
    </motion.div>
  )
})

// JARVIS Holographic Button
const HolographicButton = memo(({ children, href, color = '#00F5FF', ...props }) => (
  <motion.a
    href={href}
    className="relative px-8 py-4 font-semibold font-mono uppercase tracking-wider text-sm overflow-hidden group"
    style={{
      background: 'rgba(255,255,255,0.05)',
      border: `1px solid ${color}/30`,
      backdropFilter: 'blur(20px)',
    }}
    whileHover={{ 
      scale: 1.05,
      boxShadow: `0 0 30px ${color}/50, inset 0 0 30px ${color}/20`
    }}
    whileTap={{ scale: 0.98 }}
    {...props}
  >
    <span className="relative z-10">{children}</span>
    <motion.div 
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
      initial={{ x: '-100%' }}
      whileHover={{ x: '100%' }}
      transition={{ duration: 0.6 }}
    />
  </motion.a>
))

// Updated Hero Content - JARVIS HUD Interface
const HeroContent = memo(function HeroContent({ isVisible }) {
  return (
    <div className="max-w-6xl mx-auto text-center relative z-20 px-4 pointer-events-auto">
      {/* Large Scanner Ring Behind Name */}
      <div className="relative mb-8">
        <ScannerRing size={500} isActive={isVisible} />
        <ScannerRing size={400} isActive={isVisible} className="animate-pulse" />
        
        {/* Holographic Name */}
        <motion.h1
          initial={{ 
            opacity: 0, 
            y: 40,
            filter: 'blur(12px)',
            scale: 0.9,
          }}
          animate={{ 
            opacity: isVisible ? 1 : 0, 
            y: 0,
            filter: 'blur(0px)',
            scale: 1,
          }}
          transition={{ 
            duration: 1.5, 
            ease: [0.22, 1, 0.36, 1],
            delay: 0.5
          }}
          className="relative z-10 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-6 pt-8"
          style={{
            fontFamily: "'Space Grotesk', monospace",
            letterSpacing: '-0.02em',
            lineHeight: 1,
            background: 'linear-gradient(135deg, #00F5FF 0%, #FF6B00 50%, #1E90FF 100%)',
            backgroundSize: '300% 300%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 0 40px rgba(0,245,255,0.5)',
          }}
        >
          Yash Kumar Sharma
        </motion.h1>
      </div>

      {/* Subtitle - System Status */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="text-2xl md:text-3xl font-medium mb-8 tracking-tight"
        style={{
          background: 'linear-gradient(90deg, #00F5FF, #1E90FF)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 20px rgba(0,245,255,0.3)',
        }}
      >
        AI Systems Engineer
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="text-xl md:text-2xl max-w-2xl mx-auto mb-12 opacity-80"
        style={{ color: 'rgba(255,255,255,0.8)' }}
      >
        Systems Initialized. JARVIS Interface Active.
      </motion.div>

      {/* HUD Status Bars */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: isVisible ? 1 : 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="max-w-md mx-auto mb-12 space-y-3"
      >
        <HudStatusBar label="SYSTEM STATUS" value={100} color="#00F5FF" />
        <HudStatusBar label="AI MODULES" value={98} color="#FF6B00" />
        <HudStatusBar label="NETWORK SYNC" value={100} color="#1E90FF" />
      </motion.div>

      {/* Holographic Control Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isVisible ? 1 : 0, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="flex flex-col lg:flex-row gap-6 justify-center items-center"
      >
        <HolographicButton href="#projects">
          VIEW PROJECTS
        </HolographicButton>
        <HolographicButton href="#contact" color="#FF6B00">
          INITIALIZE CONTACT
        </HolographicButton>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <ScrollIndicator isVisible={isVisible} />
    </div>
  )
})

// Main JARVIS Hero Component
export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 px-4 lg:px-8 relative">
      <HeroContent isVisible={isLoaded} />
    </section>
  )
}

