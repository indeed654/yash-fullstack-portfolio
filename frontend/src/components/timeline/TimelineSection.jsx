import React from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import { timelineEvents } from '../../data/timeline'

const TimelineSection = () => {
  return (
    <section id="timeline" className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          title="JOURNEY LOG"
          subtitle="// temporal analysis"
        />

        <div className="relative">
          {/* Central line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px">
            <div className="h-full bg-gradient-to-b from-cyan/30 via-orange/20 to-cyan/30" />
            {/* Animated pulse */}
            <motion.div
              className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-cyan via-transparent to-transparent"
              animate={{ y: ['0%', '400%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          {/* Timeline events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0
                    ? 'md:flex-row'
                    : 'md:flex-row-reverse'
                } flex-row pl-12 md:pl-0`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="glass-card rounded-xl p-6 group hover:border-cyan/30 transition-all duration-500 inline-block">
                    {/* Year */}
                    <span
                      className="font-orbitron text-xs tracking-wider"
                      style={{ color: event.color }}
                    >
                      {event.year}
                    </span>

                    {/* Title */}
                    <h3 className="font-orbitron text-lg font-bold text-white mt-2 mb-3 group-hover:text-cyan transition-colors">
                      {event.title}
                    </h3>

                    {/* Description */}
                    <p className="font-rajdhani text-sm text-white/40 leading-relaxed mb-4">
                      {event.description}
                    </p>

                    {/* Tags */}
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      {event.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[10px] font-mono rounded border"
                          style={{
                            borderColor: `${event.color}20`,
                            color: `${event.color}80`,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center node */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 z-10">
                  <motion.div
                    whileInView={{
                      scale: [0, 1.2, 1],
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="relative"
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-lg border-2"
                      style={{
                        borderColor: event.color,
                        backgroundColor: `${event.color}15`,
                        boxShadow: `0 0 20px ${event.color}30`,
                      }}
                    >
                      {event.icon}
                    </div>
                    {/* Pulse ring */}
                    <div
                      className="absolute inset-[-4px] rounded-full animate-pulse-glow"
                      style={{
                        border: `1px solid ${event.color}20`,
                      }}
                    />
                  </motion.div>
                </div>

                {/* Spacer for other side */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TimelineSection

