import React from 'react'
import { motion } from 'framer-motion'
import { useTypewriter } from '../../hooks/useTypewriter'
import HUDCircles from './HUDCircles'
import AIBrain3D from './AIBrain3D'
import FloatingBadges from './FloatingBadges'

const HeroSection = () => {
  const typewriterText = useTypewriter(
    [
      'AI Engineer',
      'Machine Learning Developer',
      'Deep Learning Researcher',
      'IoT Architect',
      'Computer Vision Specialist',
    ],
    { typeSpeed: 80, deleteSpeed: 40, delayBetween: 2500 }
  )

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-cyan/5 via-transparent to-transparent blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-8"
        >
          {/* System identifier */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-3"
          >
            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-cyan to-transparent" />
            <span className="font-mono text-xs text-cyan/60 tracking-[0.3em] uppercase">
              System Profile Loaded
            </span>
          </motion.div>

          {/* Name */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="font-rajdhani text-lg text-cyan/70 mb-2"
            >
              Hello, I am
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="font-orbitron text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            >
              <span className="text-white">YASH KUMAR</span>
              <br />
              <span className="neon-text-cyan">SHARMA</span>
            </motion.h1>
          </div>

          {/* Role with typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center gap-3"
          >
            <div className="w-3 h-3 border-2 border-orange rounded-sm rotate-45 animate-pulse" />
            <div className="font-orbitron text-xl sm:text-2xl text-orange/90 tracking-wider">
              {typewriterText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="inline-block w-0.5 h-6 bg-orange ml-1 align-middle"
              />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="font-rajdhani text-lg text-white/50 leading-relaxed max-w-lg"
          >
            Specializing in building intelligent systems that bridge the gap between
            artificial intelligence and real-world applications. Currently crafting the
            future at <span className="text-cyan/80">AKTU</span> — B.Tech CSE (IoT), 3rd Year.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="grid grid-cols-3 gap-4"
          >
            {[
              { label: 'PROJECTS', value: '10+', color: 'cyan' },
              { label: 'SKILLS', value: '14+', color: 'orange' },
              { label: 'CERTIFICATIONS', value: '5+', color: 'blue-electric' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="glass-card rounded-lg p-4 text-center hud-corners group hover:border-cyan/40 transition-all duration-300"
              >
                <div
                  className={`font-orbitron text-2xl font-bold ${
                    stat.color === 'cyan'
                      ? 'text-cyan'
                      : stat.color === 'orange'
                      ? 'text-orange'
                      : 'text-blue-electric'
                  }`}
                >
                  {stat.value}
                </div>
                <div className="font-mono text-[10px] text-white/40 tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group relative px-8 py-3 font-orbitron text-sm tracking-wider overflow-hidden rounded"
            >
              <div className="absolute inset-0 bg-cyan/10 border border-cyan/30 rounded transition-all duration-300 group-hover:bg-cyan/20 group-hover:border-cyan/60 group-hover:shadow-cyan" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan/0 via-cyan/5 to-cyan/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="relative text-cyan">VIEW PROJECTS</span>
            </a>

            <a
              href="#contact"
              className="group relative px-8 py-3 font-orbitron text-sm tracking-wider overflow-hidden rounded"
            >
              <div className="absolute inset-0 bg-orange/10 border border-orange/30 rounded transition-all duration-300 group-hover:bg-orange/20 group-hover:border-orange/60 group-hover:shadow-orange" />
              <div className="absolute inset-0 bg-gradient-to-r from-orange/0 via-orange/5 to-orange/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="relative text-orange">CONNECT</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right side - 3D Brain + HUD */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative h-[500px] lg:h-[600px] hidden md:block"
        >
          {/* HUD Circles */}
          <HUDCircles />

          {/* 3D Brain */}
          <AIBrain3D />

          {/* Floating Badges */}
          <FloatingBadges />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] text-cyan/40 tracking-widest">SCROLL DOWN</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-cyan/30 flex justify-center pt-1"
        >
          <div className="w-1 h-2 bg-cyan/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection

