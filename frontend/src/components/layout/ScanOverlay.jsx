import React from 'react'
import { motion } from 'framer-motion'

const ScanOverlay = () => {
  return (
    <div className="fixed inset-0 z-[2] pointer-events-none overflow-hidden">
      {/* Horizontal scan line */}
      <motion.div
        className="absolute left-0 right-0 h-[2px]"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(0,245,255,0.15), rgba(0,245,255,0.3), rgba(0,245,255,0.15), transparent)',
        }}
        animate={{
          y: ['-10vh', '110vh'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Corner HUD elements */}
      {/* Top-left */}
      <div className="absolute top-4 left-4">
        <svg width="60" height="60" viewBox="0 0 60 60" className="opacity-30">
          <path
            d="M0 20 L0 0 L20 0"
            fill="none"
            stroke="#00F5FF"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Top-right */}
      <div className="absolute top-4 right-4">
        <svg width="60" height="60" viewBox="0 0 60 60" className="opacity-30">
          <path
            d="M40 0 L60 0 L60 20"
            fill="none"
            stroke="#00F5FF"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Bottom-left */}
      <div className="absolute bottom-4 left-4">
        <svg width="60" height="60" viewBox="0 0 60 60" className="opacity-30">
          <path
            d="M0 40 L0 60 L20 60"
            fill="none"
            stroke="#FF6B00"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Bottom-right */}
      <div className="absolute bottom-4 right-4">
        <svg width="60" height="60" viewBox="0 0 60 60" className="opacity-30">
          <path
            d="M40 60 L60 60 L60 40"
            fill="none"
            stroke="#FF6B00"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Side data indicators */}
      <div className="absolute left-2 top-1/2 -translate-y-1/2 space-y-1 opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="h-px bg-cyan"
            style={{ width: Math.random() * 20 + 5 }}
            animate={{
              opacity: [0.3, 1, 0.3],
              width: [Math.random() * 15 + 5, Math.random() * 25 + 10, Math.random() * 15 + 5],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Right side */}
      <div className="absolute right-2 top-1/2 -translate-y-1/2 space-y-1 opacity-20 flex flex-col items-end">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="h-px bg-orange"
            style={{ width: Math.random() * 20 + 5 }}
            animate={{
              opacity: [0.3, 1, 0.3],
              width: [Math.random() * 15 + 5, Math.random() * 25 + 10, Math.random() * 15 + 5],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* CRT scanline effect */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.3) 1px, rgba(0,0,0,0.3) 2px)',
        }}
      />
    </div>
  )
}

export default ScanOverlay

