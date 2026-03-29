import { useRef } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

export default function GlassCard({ children, className = '' }) {
  const cardRef = useRef(null)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const rotateX = useTransform(y, [-100, 100], [15, -15])
  const rotateY = useTransform(x, [-100, 100], [-15, 15])
  
  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set(e.clientX - centerX)
    y.set(e.clientY - centerY)
  }
  
  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={`relative ${className}`}
    >
      {/* Glass card base */}
      <div 
        className="relative rounded-2xl overflow-hidden"
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        }}
      >
        {/* Gradient border glow effect */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 110, 199, 0.2) 0%, rgba(58, 141, 255, 0.2) 50%, rgba(0, 242, 254, 0.2) 100%)',
            padding: '1px',
            WebkitBackgroundClip: 'padding-box',
            backgroundClip: 'padding-box',
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 p-6">
          {children}
        </div>

        {/* Animated highlight on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)',
            }}
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

// Animated gradient border component
export function GradientBorder({ children, className = '' }) {
  return (
    <div className={`relative group ${className}`}>
      <div 
        className="absolute inset-0 rounded-2xl opacity-50"
        style={{
          background: 'linear-gradient(135deg, #ff6ec7, #3a8dff, #00f2fe, #a18cd1, #ff6ec7)',
          backgroundSize: '400% 400%',
          animation: 'gradient-shift 8s ease infinite',
          filter: 'blur(8px)',
        }}
      />
      <div 
        className="relative rounded-2xl overflow-hidden"
        style={{
          background: 'rgba(15, 32, 39, 0.9)',
          backdropFilter: 'blur(20px)',
        }}
      >
        {children}
      </div>
    </div>
  )
}
