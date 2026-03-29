import React from 'react'
import { motion } from 'framer-motion'

const badges = [
  { label: 'PyTorch', x: '10%', y: '20%', delay: 0 },
  { label: 'TensorFlow', x: '75%', y: '15%', delay: 0.2 },
  { label: 'Python', x: '85%', y: '60%', delay: 0.4 },
  { label: 'IoT', x: '5%', y: '70%', delay: 0.6 },
  { label: 'NLP', x: '70%', y: '80%', delay: 0.8 },
  { label: 'CV', x: '20%', y: '85%', delay: 1 },
]

const FloatingBadges = () => {
  return (
    <div className="absolute inset-0 z-20 pointer-events-none">
      {badges.map((badge, index) => (
        <motion.div
          key={badge.label}
          className="absolute"
          style={{ left: badge.x, top: badge.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 1, 0.7],
            scale: 1,
            y: [0, -10, 0, -5, 0],
          }}
          transition={{
            delay: 1.5 + badge.delay,
            duration: 4,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          <div className="px-3 py-1 rounded-full glass border border-cyan/20 font-mono text-[10px] text-cyan/60 tracking-wider">
            {badge.label}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingBadges

