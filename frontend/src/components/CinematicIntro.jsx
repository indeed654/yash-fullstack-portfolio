import { useState, useEffect, useRef, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Particle Canvas for Phase 2
function ParticleGathering({ isActive }) {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const particlesRef = useRef([])
  
  useEffect(() => {
    if (!isActive) return
    
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    let width = window.innerWidth
    let height = window.innerHeight
    
    canvas.width = width
    canvas.height = height
    
    // Initialize particles
    const particleCount = 60
    const centerX = width / 2
    const centerY = height / 2
    
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2,
      color: Math.random() > 0.5 ? '#a855f7' : '#3b82f6',
    }))
    
    let progress = 0
    
    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      
      progress = Math.min(progress + 0.003, 1)
      
      particlesRef.current.forEach((particle, i) => {
        // Move toward center
        const targetX = centerX + (Math.random() - 0.5) * 100
        const targetY = centerY + (Math.random() - 0.5) * 50
        
        const easeProgress = 1 - Math.pow(1 - progress, 3)
        
        particle.x += (targetX - particle.x) * 0.02 * easeProgress
        particle.y += (targetY - particle.y) * 0.02 * easeProgress
        
        // Add some wobble
        particle.x += Math.sin(Date.now() * 0.001 + i) * 0.2
        particle.y += Math.cos(Date.now() * 0.001 + i) * 0.2
        
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * (1 - progress * 0.5), 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.globalAlpha = particle.opacity * (1 - progress * 0.3)
        ctx.fill()
      })
      
      // Draw connections
      ctx.globalAlpha = 0.1
      particlesRef.current.forEach((p1, i) => {
        particlesRef.current.slice(i + 1).forEach(p2 => {
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y)
          if (dist < 100) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = '#a855f7'
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })
      
      ctx.globalAlpha = 1
      
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate)
      }
    }
    
    animate()
    
    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }
    
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isActive])
  
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: isActive ? 1 : 0 }}
    />
  )
}

// Phase 1: Dark screen with gradient and light bloom
function PhaseOne({ isActive }) {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #020617 0%, #0f172a 50%, #1e1b4b 100%)',
          }}
        >
          {/* Ambient light bloom */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
            }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px]"
            style={{
              background: 'radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, transparent 70%)',
            }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
            }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px]"
            style={{
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Phase 2: Particles gathering
function PhaseTwo({ isActive, onComplete }) {
  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        onComplete?.()
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [isActive, onComplete])
  
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <ParticleGathering isActive={isActive} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Phase 3: Name reveal
function PhaseThree({ isActive }) {
  const [showSweep, setShowSweep] = useState(false)
  
  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        setShowSweep(true)
      }, 1200)
      return () => clearTimeout(timer)
    }
  }, [isActive])
  
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <motion.h1
            initial={{ 
              opacity: 0, 
              y: 30,
              filter: 'blur(10px)',
              scale: 1.1,
            }}
            animate={{ 
              opacity: 1, 
              y: 0,
              filter: 'blur(0px)',
              scale: 1,
            }}
            transition={{ 
              duration: 1.2, 
              ease: [0.16, 1, 0.3, 1] 
            }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold relative z-10"
            style={{
              fontFamily: "'Space Grotesk', system-ui, sans-serif",
              fontWeight: 800,
              letterSpacing: '-0.03em',
              background: 'linear-gradient(90deg, #a855f7, #3b82f6, #06b6d4)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Yash Kumar Sharma
            
            {/* Light sweep */}
            <AnimatePresence>
              {showSweep && (
                <motion.div
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{ x: '200%', opacity: 0.7 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 45%, rgba(255,255,255,0.6) 55%, transparent 100%)',
                    maskImage: 'linear-gradient(90deg, transparent 0%, black 40%, black 60%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 40%, black 60%, transparent 100%)',
                    width: '25%',
                  }}
                />
              )}
            </AnimatePresence>
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Phase 4: Hero content fade in
function PhaseFour({ isActive, onComplete }) {
  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        onComplete?.()
      }, 800)
      return () => clearTimeout(timer)
    }
  }, [isActive, onComplete])
  
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex flex-col items-center justify-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-white/80 font-medium"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            AI & Full-Stack Engineer
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-white/60 mt-2 max-w-xl text-center"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            Engineering Intelligent Systems That Think Beyond Code.
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Main CinematicIntro Component
export default function CinematicIntro({ onComplete }) {
  const [phase, setPhase] = useState(1)
  const [isMobile, setIsMobile] = useState(false)
  const [isDone, setIsDone] = useState(false)
  
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
  
  useEffect(() => {
    if (isMobile) {
      const timeout = setTimeout(() => onComplete?.(), 500)
      return () => clearTimeout(timeout)
    }
    
    // Phase timing
    // Phase 1: Dark screen with bloom (0-1s)
    const phase1 = setTimeout(() => setPhase(2), 1000)
    
    // Phase 2: Particles gather (1-2.5s)
    // Phase 3: Name appears (2.5-3.7s) - handled by phase 2 completion
    // Phase 4: Hero content (3.7-4.5s)
    // Complete: 4.5s
    
    const completeTimeout = setTimeout(() => {
      setIsDone(true)
      onComplete?.()
    }, 4500)
    
    return () => {
      clearTimeout(phase1)
      clearTimeout(completeTimeout)
    }
  }, [onComplete, isMobile])
  
  if (isMobile || isDone) return null
  
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[999] overflow-hidden"
        style={{ background: '#020617' }}
      >
        {/* Phase 1: Dark screen with gradient */}
        <PhaseOne isActive={phase >= 1} />
        
        {/* Phase 2: Particles gathering */}
        <PhaseTwo 
          isActive={phase >= 2} 
          onComplete={() => setPhase(3)}
        />
        
        {/* Phase 3: Name reveal */}
        <PhaseThree isActive={phase >= 3} />
        
        {/* Phase 4: Hero content */}
        <PhaseFour 
          isActive={phase >= 3} 
          onComplete={() => {}}
        />
      </motion.div>
    </AnimatePresence>
  )
}

