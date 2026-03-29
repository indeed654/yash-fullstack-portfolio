import { useState, useEffect, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Motion timing configuration
const MOTION_CONFIG = {
  nameReveal: {
    duration: 1.2,
    ease: [0.16, 1, 0.3, 1],
  },
  taglineFade: {
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1],
  },
  lightSweep: {
    duration: 0.8,
    ease: 'easeInOut',
  },
  ambientGradient: {
    duration: 25,
    repeat: Infinity,
    ease: 'easeInOut',
  },
}

// Layer 1: Atmospheric Background
const AtmosphericBackground = memo(function AtmosphericBackground() {
  return (
    <div className="absolute inset-0 z-0">
      {/* Base gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 30% 40%, #1e293b 0%, transparent 60%),
            radial-gradient(circle at 70% 60%, #1e40af 0%, transparent 60%),
            linear-gradient(135deg, #020617 0%, #0f172a 100%)
          `,
        }}
      />
      
      {/* Slow moving ambient gradients */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(30, 41, 59, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(30, 64, 175, 0.3) 0%, transparent 50%)
          `,
          backgroundSize: '100% 100%',
        }}
      />
    </div>
  )
})

// Layer 2: Cinematic Light Bloom
const CinematicLightBloom = memo(function CinematicLightBloom({ isVisible }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 0.15,
            scale: [1, 1.1, 1],
          }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1, delay: 0.3 },
            scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none z-1"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)',
          }}
        />
      )}
    </AnimatePresence>
  )
})

// Layer 3: Name with Gradient Text Animation
const NameReveal = memo(function NameReveal({ isVisible, onNameComplete }) {
  const [showLightSweep, setShowLightSweep] = useState(false)

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShowLightSweep(true)
        onNameComplete?.()
      }, 1200)
      return () => clearTimeout(timer)
    }
  }, [isVisible, onNameComplete])

  return (
    <div className="relative z-10">
      <motion.h1
        initial={{ 
          opacity: 0, 
          y: 40, 
          filter: 'blur(8px)',
          scale: 1.05,
        }}
        animate={{ 
          opacity: isVisible ? 1 : 0, 
          y: isVisible ? 0 : 40,
          filter: isVisible ? 'blur(0px)' : 'blur(8px)',
          scale: isVisible ? 1 : 1.05,
        }}
        transition={MOTION_CONFIG.nameReveal}
        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold"
        style={{
          fontFamily: "'Space Grotesk', system-ui, sans-serif",
          fontWeight: 800,
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          background: 'linear-gradient(90deg, #a855f7, #3b82f6, #06b6d4)',
          backgroundSize: '200% auto',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        Yash Kumar Sharma
        
        {/* Light Sweep Effect */}
        <AnimatePresence>
          {showLightSweep && (
            <motion.div
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: '200%', opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={MOTION_CONFIG.lightSweep}
              className="absolute inset-0 pointer-events-none overflow-hidden"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 45%, rgba(255,255,255,0.6) 55%, transparent 100%)',
                maskImage: 'linear-gradient(90deg, transparent 0%, black 40%, black 60%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 40%, black 60%, transparent 100%)',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: '30%',
              }}
            />
          )}
        </AnimatePresence>
      </motion.h1>
    </div>
  )
})

// Layer 4: Identity Line
const IdentityLine = memo(function IdentityLine({ isVisible }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: isVisible ? 0.8 : 0, 
        y: isVisible ? 0 : 20 
      }}
      transition={{ 
        duration: MOTION_CONFIG.taglineFade.duration,
        delay: 0.6,
        ease: MOTION_CONFIG.taglineFade.ease 
      }}
      className="text-center"
    >
      <p 
        className="text-xl sm:text-2xl md:text-3xl text-white font-medium"
        style={{
          fontFamily: "'Inter', system-ui, sans-serif",
        }}
      >
        AI Systems Engineer
      </p>
      <p 
        className="text-lg sm:text-xl text-white/60 mt-2"
        style={{
          fontFamily: "'Inter', system-ui, sans-serif",
        }}
      >
        Building Intelligent Infrastructure
      </p>
    </motion.div>
  )
})

// Scroll Indicator
const ScrollIndicator = memo(function ScrollIndicator({ isVisible }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.8, delay: 1.8 }}
      className="flex justify-center mt-16"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="flex flex-col items-center gap-2"
      >
        <span 
          className="text-white/30 text-xs tracking-[0.3em] uppercase"
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
          }}
        >
          Scroll
        </span>
        <svg 
          className="w-5 h-5 text-white/30" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={1.5} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </motion.div>
    </motion.div>
  )
})

// Main Cinematic Hero Component
export default function CinematicHero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showName, setShowName] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check for mobile to reduce motion
  useEffect(() => {
    const checkMobile = () => {
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) || window.innerWidth < 768
      setIsMobile(mobile)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Animation sequence
  useEffect(() => {
    // Start background at 0s
    const startLoad = setTimeout(() => {
      setIsLoaded(true)
    }, 400)

    // Name reveal at 0.4s
    const showNameTimeout = setTimeout(() => {
      setShowName(true)
    }, 400)

    return () => {
      clearTimeout(startLoad)
      clearTimeout(showNameTimeout)
    }
  }, [])

  // Simplified animation for mobile
  if (isMobile) {
    return (
      <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 30% 40%, #1e293b 0%, transparent 60%),
              radial-gradient(circle at 70% 60%, #1e40af 0%, transparent 60%),
              linear-gradient(135deg, #020617 0%, #0f172a 100%)
            `,
          }}
        />
        
        <div className="max-w-5xl mx-auto text-center relative z-10 px-4">
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold"
            style={{
              fontFamily: "'Space Grotesk', system-ui, sans-serif",
              fontWeight: 800,
              letterSpacing: '-0.02em',
              background: 'linear-gradient(90deg, #a855f7, #3b82f6, #06b6d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Yash Kumar Sharma
          </h1>
          
          <p className="text-xl text-white/80 mt-4 font-medium" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
            AI Systems Engineer
          </p>
          <p className="text-lg text-white/60 mt-1" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
            Building Intelligent Infrastructure
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Layer 1: Atmospheric Background */}
      <AtmosphericBackground />
      
      {/* Layer 2: Cinematic Light Bloom */}
      <CinematicLightBloom isVisible={isLoaded} />
      
      {/* Main Content */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Layer 3: Name Reveal with Gradient */}
        <div className="mb-8">
          <NameReveal 
            isVisible={showName} 
            onNameComplete={() => {}}
          />
        </div>
        
        {/* Layer 4: Identity Line */}
        <IdentityLine isVisible={showName} />
        
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showName ? 1 : 0, y: showName ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <motion.a 
            href="#projects"
            className="px-8 py-3.5 rounded-xl font-semibold text-white relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.9) 0%, rgba(59, 130, 246, 0.9) 100%)',
              boxShadow: '0 4px 20px rgba(168, 85, 247, 0.25)',
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">View My Work</span>
          </motion.a>
          
          <motion.a 
            href="#contact"
            className="px-8 py-3.5 rounded-xl border border-white/20 text-white font-semibold backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
        
        {/* Scroll Indicator */}
        <ScrollIndicator isVisible={showName} />
      </div>
    </section>
  )
}

