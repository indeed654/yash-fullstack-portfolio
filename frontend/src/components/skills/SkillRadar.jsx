import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import GlassCard from '../ui/GlassCard'
import { skillCategories, radarSkills } from '../../data/skills'

const SkillRadar = () => {
  const [activeCategory, setActiveCategory] = useState(0)
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const [animateRadar, setAnimateRadar] = useState(false)

  return (
    <section id="skills" className="relative py-24 px-4 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-cyan/5 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title="SKILL MATRIX"
          subtitle="// capabilities analysis"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
          {/* Radar Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            onViewportEnter={() => setAnimateRadar(true)}
            className="relative aspect-square max-w-[500px] mx-auto w-full group"
          >
            {/* Glow effect behind radar */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan/10 to-blue/10 rounded-full blur-3xl animate-pulse" />
            
            {/* Radar background */}
            <svg viewBox="0 0 500 500" className="w-full h-full relative z-10">
              {/* Gradient definitions */}
              <defs>
                <radialGradient id="radarGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#00F5FF" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#00F5FF" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="polygonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00F5FF" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              {/* Concentric circles with animation */}
              {[200, 160, 120, 80, 40].map((r, i) => (
                <motion.circle
                  key={r}
                  cx="250"
                  cy="250"
                  r={r}
                  fill="none"
                  stroke={`rgba(0,245,255,${0.08 - i * 0.01})`}
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
                />
              ))}

              {/* Axis lines */}
              {radarSkills.map((skill, i) => {
                const angle = (i * 360) / radarSkills.length - 90
                const rad = (angle * Math.PI) / 180
                const x2 = 250 + 200 * Math.cos(rad)
                const y2 = 250 + 200 * Math.sin(rad)
                return (
                  <motion.line
                    key={i}
                    x1="250"
                    y1="250"
                    x2={x2}
                    y2={y2}
                    stroke="rgba(0,245,255,0.06)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.05 }}
                  />
                )
              })}

              {/* Skill polygon with enhanced glow */}
              <motion.polygon
                initial={{ opacity: 0, scale: 0 }}
                animate={animateRadar ? { opacity: 1, scale: 1 } : {}}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
                points={radarSkills
                  .map((skill, i) => {
                    const angle = (i * 360) / radarSkills.length - 90
                    const rad = (angle * Math.PI) / 180
                    const r = (skill.value / 100) * 200
                    const x = 250 + r * Math.cos(rad)
                    const y = 250 + r * Math.sin(rad)
                    return `${x},${y}`
                  })
                  .join(' ')}
                fill="url(#radarGlow)"
                stroke="url(#polygonGradient)"
                strokeWidth="2.5"
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(0,245,255,0.5))',
                }}
                className="transition-all duration-500 group-hover:drop-shadow-[0_0_30px_rgba(0,245,255,0.8)]"
              />

              {/* Animated pulse rings inside polygon */}
              <motion.circle
                cx="250"
                cy="250"
                r="100"
                fill="none"
                stroke="rgba(0,245,255,0.1)"
                strokeWidth="1"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={animateRadar ? { 
                  scale: [0.8, 1.2, 1.5],
                  opacity: [0, 0.3, 0]
                } : {}}
                transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
              />

              {/* Skill nodes with enhanced interactions */}
              {radarSkills.map((skill, i) => {
                const angle = (i * 360) / radarSkills.length - 90
                const rad = (angle * Math.PI) / 180
                const r = (skill.value / 100) * 200
                const x = 250 + r * Math.cos(rad)
                const y = 250 + r * Math.sin(rad)
                const labelX = 250 + 220 * Math.cos(rad)
                const labelY = 250 + 220 * Math.sin(rad)

                return (
                  <g
                    key={skill.name}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    style={{ cursor: 'pointer' }}
                  >
                    {/* Connection line to center */}
                    <motion.line
                      x1="250"
                      y1="250"
                      x2={x}
                      y2={y}
                      stroke={`rgba(0,245,255,${hoveredSkill?.name === skill.name ? 0.3 : 0.1})`}
                      strokeWidth={hoveredSkill?.name === skill.name ? 2 : 1}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Node with pulse effect */}
                    <motion.circle
                      cx={x}
                      cy={y}
                      r={hoveredSkill?.name === skill.name ? 8 : 5}
                      fill="#00F5FF"
                      animate={{
                        r: hoveredSkill?.name === skill.name ? [8, 10, 8] : [5, 6, 5],
                        opacity: hoveredSkill?.name === skill.name ? [1, 0.8, 1] : [0.8, 0.6, 0.8],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      style={{
                        filter: `drop-shadow(0 0 ${hoveredSkill?.name === skill.name ? '15px' : '8px'} #00F5FF)`,
                      }}
                    />

                    {/* Outer ring on hover */}
                    {hoveredSkill?.name === skill.name && (
                      <motion.circle
                        cx={x}
                        cy={y}
                        r="12"
                        fill="none"
                        stroke="#00F5FF"
                        strokeWidth="1"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        style={{
                          filter: 'drop-shadow(0 0 10px rgba(0,245,255,0.5))',
                        }}
                      />
                    )}

                    {/* Label with enhanced visibility */}
                    <motion.text
                      x={labelX}
                      y={labelY}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill={hoveredSkill?.name === skill.name ? '#00F5FF' : 'rgba(255,255,255,0.5)'}
                      fontSize={hoveredSkill?.name === skill.name ? "11" : "9"}
                      fontWeight={hoveredSkill?.name === skill.name ? "bold" : "normal"}
                      fontFamily="Orbitron"
                      className="transition-all duration-300"
                      animate={{
                        fill: hoveredSkill?.name === skill.name ? '#00F5FF' : 'rgba(255,255,255,0.5)',
                      }}
                    >
                      {skill.name}
                    </motion.text>
                  </g>
                )
              })}

              {/* Sweeping radar line with enhanced effect */}
              <motion.line
                x1="250"
                y1="250"
                x2="250"
                y2="50"
                stroke="rgba(0,245,255,0.4)"
                strokeWidth="2"
                style={{ 
                  transformOrigin: '250px 250px',
                  filter: 'drop-shadow(0 0 10px rgba(0,245,255,0.5))',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              />
            </svg>

            {/* Center info with enhanced styling */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20">
              {hoveredSkill ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="glass-card rounded-xl p-4 border border-cyan/40 shadow-[0_0_30px_rgba(0,245,255,0.3)]"
                >
                  <div className="font-orbitron text-xs text-cyan mb-2 tracking-wider">
                    {hoveredSkill.name.toUpperCase()}
                  </div>
                  <div className="font-orbitron text-3xl font-bold text-white mb-1">
                    {hoveredSkill.value}%
                  </div>
                  <div className="w-full h-1 bg-primary-light rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${hoveredSkill.value}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-cyan to-blue"
                      style={{
                        boxShadow: '0 0 10px rgba(0,245,255,0.5)',
                      }}
                    />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-center"
                >
                  <div className="font-mono text-[10px] text-cyan/40 tracking-[0.3em] mb-2">
                    SYSTEM READY
                  </div>
                  <div className="w-2 h-2 bg-cyan rounded-full animate-pulse mx-auto shadow-[0_0_10px_rgba(0,245,255,0.5)]" />
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Skill Categories with enhanced animations */}
          <div className="space-y-6">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: catIndex * 0.15, duration: 0.7 }}
              >
                <GlassCard
                  className="p-6 group hover:scale-[1.02] transition-transform duration-300"
                  glowColor={
                    catIndex === 0
                      ? 'cyan'
                      : catIndex === 1
                      ? 'orange'
                      : 'blue'
                  }
                >
                  {/* Category header with animated icon */}
                  <div className="flex items-center gap-3 mb-5">
                    <motion.span 
                      className="text-2xl"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {category.icon}
                    </motion.span>
                    <h3
                      className="font-orbitron text-sm tracking-wider"
                      style={{ color: category.color }}
                    >
                      {category.category}
                    </h3>
                    <div
                      className="flex-1 h-px relative overflow-hidden"
                      style={{
                        background: `linear-gradient(to right, ${category.color}30, transparent)`,
                      }}
                    >
                      <motion.div
                        className="absolute top-0 left-0 h-full w-20"
                        style={{
                          background: `linear-gradient(to right, transparent, ${category.color}, transparent)`,
                        }}
                        initial={{ x: '-100%' }}
                        whileInView={{ x: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                      />
                    </div>
                  </div>

                  {/* Skills with enhanced progress bars */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: catIndex * 0.15 + skillIndex * 0.1 }}
                        className="group/skill"
                      >
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="font-rajdhani text-sm text-white/70 group-hover/skill:text-white transition-colors">
                            {skill.name}
                          </span>
                          <motion.span
                            className="font-mono text-xs font-bold"
                            style={{ color: category.color }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.15 + skillIndex * 0.1 + 0.3 }}
                          >
                            {skill.level}%
                          </motion.span>
                        </div>
                        <div className="h-2 bg-primary-light rounded-full overflow-hidden border border-white/5 relative group-hover/skill:border-white/10 transition-colors">
                          {/* Background pattern */}
                          <div className="absolute inset-0 opacity-10">
                            <div className="w-full h-full" style={{
                              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)',
                            }} />
                          </div>
                          <motion.div
                            className="h-full rounded-full relative overflow-hidden"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1.2,
                              delay: catIndex * 0.15 + skillIndex * 0.1 + 0.2,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            style={{
                              background: `linear-gradient(90deg, ${category.color}60 0%, ${category.color} 100%)`,
                              boxShadow: `0 0 15px ${category.color}60`,
                            }}
                          >
                            {/* Shine effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                              initial={{ x: '-100%' }}
                              whileInView={{ x: '100%' }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 1,
                                delay: catIndex * 0.15 + skillIndex * 0.1 + 0.5,
                              }}
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillRadar
