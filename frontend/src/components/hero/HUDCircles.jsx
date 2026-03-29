import React from 'react'
import { motion } from 'framer-motion'

const HUDCircles = () => {
  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
      {/* Outermost ring */}
      <motion.div
        className="absolute w-[450px] h-[450px] rounded-full border border-cyan/5"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {/* Tick marks */}
        {[...Array(72)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 left-1/2 w-px origin-bottom"
            style={{
              height: i % 6 === 0 ? '12px' : '6px',
              transform: `rotate(${i * 5}deg)`,
              transformOrigin: `50% 225px`,
              backgroundColor:
                i % 6 === 0
                  ? 'rgba(0,245,255,0.3)'
                  : 'rgba(0,245,255,0.1)',
            }}
          />
        ))}
      </motion.div>

      {/* Second ring */}
      <motion.div
        className="absolute w-[380px] h-[380px] rounded-full border border-cyan/10"
        style={{
          borderStyle: 'dashed',
          borderDasharray: '8 4',
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />

      {/* Third ring */}
      <motion.div
        className="absolute w-[320px] h-[320px] rounded-full border-2 border-orange/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        {/* Cardinal markers */}
        {[0, 90, 180, 270].map((deg) => (
          <div
            key={deg}
            className="absolute w-3 h-3 border border-orange/40 rotate-45"
            style={{
              top: '50%',
              left: '50%',
              transform: `rotate(${deg}deg) translateY(-160px) rotate(-45deg)`,
            }}
          />
        ))}
      </motion.div>

      {/* Inner circle */}
      <motion.div
        className="absolute w-[200px] h-[200px] rounded-full border border-cyan/20"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Center pulse */}
      <motion.div
        className="absolute w-4 h-4 rounded-full bg-cyan/30"
        animate={{
          scale: [1, 3, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </div>
  )
}

export default HUDCircles

