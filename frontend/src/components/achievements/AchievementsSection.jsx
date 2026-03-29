import React, { useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import { achievements } from '../../data/achievements'

const TiltCard = ({ achievement, index }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mouseX = useSpring(x, { stiffness: 500, damping: 28 })
  const mouseY = useSpring(y, { stiffness: 500, damping: 28 })

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ['7deg', '-7deg'])
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ['-7deg', '7deg'])

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseXFromCenter = e.clientX - rect.left - width / 2
    const mouseYFromCenter = e.clientY - rect.top - height / 2
    x.set(mouseXFromCenter / width)
    y.set(mouseYFromCenter / height)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: 15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group perspective-1000"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          borderColor: `${achievement.color}20`,
        }}
        className="relative glass-card rounded-2xl p-6 overflow-hidden transition-all duration-300 h-full group-hover:border-cyan/40 will-change-transform"
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
      >
        {/* Enhanced animated border */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div 
            className="absolute inset-0 rounded-2xl"
            style={{
              background: `radial-gradient(circle at 50% 0%, ${achievement.color}15 0%, transparent 50%)`,
              filter: 'blur(20px)',
            }}
          />
        </div>

        {/* Animated top border with particles */}
        <div className="absolute top-0 left-0 right-0 h-1 overflow-hidden rounded-t-2xl">
          <motion.div
            className="h-full w-1/3"
            style={{
              background: `linear-gradient(90deg, transparent, ${achievement.color}, transparent)`,
              boxShadow: `0 0 20px ${achievement.color}`,
            }}
            animate={{
              x: ['-150%', '350%'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'linear',
              delay: index * 0.3,
            }}
          />
        </div>

        {/* Content with enhanced depth */}
        <div className="relative z-10" style={{ transform: 'translateZ(30px)' }}>
          {/* Icon with glow and float */}
          <motion.div
            className="text-5xl mb-5 relative inline-block"
            animate={{
              y: [0, -8, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: index * 0.2,
            }}
            whileHover={{
              scale: 1.2,
              rotate: 10,
              transition: { duration: 0.3 },
            }}
          >
            {/* Glow behind icon */}
            <div 
              className="absolute inset-0 blur-xl opacity-50 group-hover:opacity-80 transition-opacity"
              style={{
                background: `radial-gradient(circle at center, ${achievement.color}40 0%, transparent 70%)`,
              }}
            />
            <span className="relative z-10">{achievement.icon}</span>
          </motion.div>

          {/* Type badge with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.3 }}
            className="mb-4"
          >
            <span
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-[10px] font-mono tracking-wider border backdrop-blur-sm"
              style={{
                borderColor: `${achievement.color}40`,
                color: achievement.color,
                backgroundColor: `${achievement.color}08`,
                boxShadow: `0 0 10px ${achievement.color}20`,
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: achievement.color }} />
              {achievement.type.toUpperCase()}
            </span>
          </motion.div>

          {/* Title with gradient */}
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.4 }}
            className="font-orbitron text-base font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan transition-all duration-300 line-clamp-2 min-h-[3rem]"
          >
            {achievement.title}
          </motion.h3>

          {/* Issuer with icon */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.5 }}
            className="font-rajdhani text-sm text-white/50 mb-4 flex items-center gap-2"
          >
            <svg className="w-4 h-4 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            {achievement.issuer}
          </motion.p>

          {/* Footer with date and verify link */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.6 }}
            className="flex items-center justify-between pt-4 border-t border-white/5"
          >
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-mono text-[10px] text-white/40">
                {achievement.date}
              </span>
            </div>
            
            {achievement.link && (
              <motion.a
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="font-mono text-[10px] tracking-wider inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all duration-300 group/link"
                style={{ 
                  color: achievement.color,
                  background: `${achievement.color}08`,
                  border: `1px solid ${achievement.color}20`,
                }}
              >
                VERIFY
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>
            )}
          </motion.div>
        </div>

        {/* Animated particles on hover */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{ 
                backgroundColor: achievement.color,
                boxShadow: `0 0 10px ${achievement.color}`,
              }}
              initial={{ 
                opacity: 0,
                x: Math.random() * 100 + '%',
                y: Math.random() * 100 + '%',
              }}
              whileHover={{
                opacity: [0, 1, 0],
                y: [null, `-=${Math.random() * 50 + 20}`],
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>

        {/* Holographic sheen effect */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background: `linear-gradient(45deg, transparent 30%, ${achievement.color}05 50%, transparent 70%)`,
            backgroundSize: '200% 200%',
          }}
        />
      </motion.div>
    </motion.div>
  )
}

const AchievementsSection = () => {
  return (
    <section id="achievements" className="relative py-24 px-4 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-orange/5 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title="ACHIEVEMENT LOG"
          subtitle="// credentials verified"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
        >
          {achievements.map((achievement, index) => (
            <TiltCard
              key={achievement.id}
              achievement={achievement}
              index={index}
            />
          ))}
        </motion.div>

        {/* System status footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card border border-white/5">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
              <span className="font-mono text-xs text-green-400 tracking-wider">ALL CREDENTIALS VERIFIED</span>
            </div>
            <div className="w-px h-4 bg-white/10" />
            <span className="font-mono text-[10px] text-white/40">
              TOTAL: {achievements.length} ACHIEVEMENTS
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AchievementsSection
