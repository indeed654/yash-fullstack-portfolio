import { motion } from 'framer-motion'

// Cinematic section reveal wrapper
export default function SectionReveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ 
        duration: 1, 
        ease: [0.16, 1, 0.3, 1],
        delay 
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Child stagger container for multiple items
export function StaggerContainer({ children, className = '', staggerDelay = 0.1 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.2,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Individual stagger item
export function StaggerItem({ children, className = '' }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Gradient accent bar for headings
export function GradientAccent({ className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div 
        className="h-px w-12"
        style={{
          background: 'linear-gradient(90deg, #ff6ec7, #3a8dff)',
        }}
      />
      <div 
        className="h-1.5 w-1.5 rounded-full"
        style={{ background: '#ff6ec7' }}
      />
      <div 
        className="h-px flex-1"
        style={{
          background: 'linear-gradient(90deg, #3a8dff, transparent)',
        }}
      />
    </div>
  )
}

// Animated counter for achievements
export function AnimatedCounter({ end, duration = 2, suffix = '' }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="tabular-nums"
    >
      {end}{suffix}
    </motion.span>
  )
}
