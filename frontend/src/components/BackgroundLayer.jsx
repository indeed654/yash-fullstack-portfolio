import { useEffect, useRef, useState, memo } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Layer 1: Deep Gradient Base
const DeepGradient = memo(function DeepGradient() {
  return (
    <div 
      className="absolute inset-0 z-0"
      style={{
        background: `
          radial-gradient(ellipse at 30% 20%, rgba(30, 41, 59, 0.4) 0%, transparent 50%),
          radial-gradient(ellipse at 70% 80%, rgba(15, 23, 42, 0.5) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 50%, rgba(30, 64, 175, 0.15) 0%, transparent 60%),
          linear-gradient(180deg, #020617 0%, #0f172a 50%, #0c0f1a 100%)
        `,
      }}
    />
  )
})

// Layer 2: Blurred Gradient Blobs
const GradientBlobs = memo(function GradientBlobs() {
  return (
    <div className="absolute inset-0 z-1 overflow-hidden">
      {/* Purple blob */}
      <motion.div 
        className="absolute w-[600px] h-[600px] rounded-full blur-[150px]"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
          top: '10%',
          left: '5%',
        }}
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Blue blob */}
      <motion.div 
        className="absolute w-[700px] h-[700px] rounded-full blur-[180px]"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)',
          bottom: '5%',
          right: '10%',
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Cyan accent blob */}
      <motion.div 
        className="absolute w-[400px] h-[400px] rounded-full blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)',
          top: '50%',
          left: '60%',
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
})

// Layer 3: Subtle Particle Field
const ParticleField = memo(function ParticleField() {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    let width = window.innerWidth
    let height = window.innerHeight
    
    canvas.width = width
    canvas.height = height
    
    // Sparse particle count for performance
    const particleCount = 30
    const particles = []
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.3,
        speedX: (Math.random() - 0.5) * 0.08,
        speedY: (Math.random() - 0.5) * 0.06,
        opacity: Math.random() * 0.04 + 0.02,
        color: Math.random() > 0.5 ? '168, 85, 247' : '59, 130, 246',
      })
    }
    
    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      
      particles.forEach(particle => {
        particle.x += particle.speedX
        particle.y += particle.speedY
        
        if (particle.x < 0) particle.x = width
        if (particle.x > width) particle.x = 0
        if (particle.y < 0) particle.y = height
        if (particle.y > height) particle.y = 0
        
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${particle.color}, ${particle.opacity})`
        ctx.fill()
      })
      
      // Draw subtle connections
      ctx.globalAlpha = 0.03
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = '#a855f7'
            ctx.lineWidth = 0.3
            ctx.stroke()
          }
        })
      })
      ctx.globalAlpha = 1
      
      animationRef.current = requestAnimationFrame(draw)
    }
    
    draw()
    
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
  }, [])
  
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-2 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  )
})

// Main BackgroundLayer Component
export default function BackgroundLayer() {
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef(null)
  
  // Parallax scroll effect
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 1000], [0, -30])
  const y2 = useTransform(scrollY, [0, 1000], [0, -15])
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  // Simplified on mobile for performance
  if (isMobile) {
    return (
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(ellipse at 30% 30%, rgba(30, 41, 59, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 70%, rgba(15, 23, 42, 0.4) 0%, transparent 50%),
            linear-gradient(180deg, #020617 0%, #0f172a 100%)
          `,
        }}
      />
    )
  }
  
  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* Layer 1: Deep Gradient */}
      <DeepGradient />
      
      {/* Layer 2: Blurred Gradient Blobs with parallax */}
      <motion.div style={{ y: y1 }}>
        <GradientBlobs />
      </motion.div>
      
      {/* Layer 3: Subtle Particle Field */}
      <motion.div style={{ y: y2, opacity: 0.8 }}>
        <ParticleField />
      </motion.div>
    </div>
  )
}

