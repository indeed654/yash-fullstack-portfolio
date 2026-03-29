import React from 'react'
import { motion } from 'framer-motion'

const SectionHeader = ({ title, subtitle, align = 'center' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      {/* Top line */}
      <div
        className={`flex items-center gap-3 mb-4 ${
          align === 'center' ? 'justify-center' : ''
        }`}
      >
        <div className="h-px w-8 bg-gradient-to-r from-transparent to-cyan/50" />
        <span className="font-mono text-xs text-cyan/50 tracking-[0.5em] uppercase">
          {subtitle}
        </span>
        <div className="h-px w-8 bg-gradient-to-l from-transparent to-cyan/50" />
      </div>

      {/* Title */}
      <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider">
        <span className="text-white">{title.split(' ')[0]} </span>
        <span className="neon-text-cyan">{title.split(' ').slice(1).join(' ')}</span>
      </h2>

      {/* Bottom decoration */}
      <div
        className={`flex items-center gap-2 mt-4 ${
          align === 'center' ? 'justify-center' : ''
        }`}
      >
        <div className="w-2 h-2 border border-orange/50 rotate-45" />
        <div className="h-px w-20 bg-gradient-to-r from-orange/50 to-transparent" />
        <div className="w-1.5 h-1.5 bg-cyan/30 rounded-full" />
        <div className="h-px w-20 bg-gradient-to-l from-orange/50 to-transparent" />
        <div className="w-2 h-2 border border-orange/50 rotate-45" />
      </div>
    </motion.div>
  )
}

export default SectionHeader

