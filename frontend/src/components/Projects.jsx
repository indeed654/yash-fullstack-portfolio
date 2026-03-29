import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import ScannerRing from './ScannerRing'
import HudStatusBar from './HudStatusBar'
// HudBracket removed to avoid duplicate declaration

export default function Projects() {
  const projects = [
    {
      title: 'Autonomous Multi-Agent Cyber Defense',
      subtitle: 'AI-Powered Threat Detection System',
      metrics: [
        { label: 'ACCURACY', value: 92 },
        { label: 'LATENCY', value: 85 },
        { label: 'SCALE', value: 100 }
      ],
      description: 'Real-time autonomous defense platform using multi-agent AI coordination. Detects and mitigates cyber threats with 92% accuracy and sub-100ms response times.',
      achievements: [
        '92% threat detection accuracy',
        '<100ms response time',
        '10k+ threats analyzed',
        'Zero false positives in production'
      ],
      technologies: ['Python', 'TensorFlow', 'LangChain', 'FastAPI', 'Kubernetes'],
      accent: '#00F5FF',
      icon: '🛡️'
    },
    {
      title: 'Smart Home Neural Network',
      subtitle: 'Intelligent Energy Management System',
      metrics: [
        { label: 'ENERGY SAVE', value: 37 },
        { label: 'PREDICTION', value: 94 },
        { label: 'DEVICES', value: 28 }
      ],
      description: 'AI-driven home automation achieving 37% energy savings through predictive occupancy detection and intelligent device orchestration.',
      achievements: [
        '37% average energy reduction',
        '94% occupancy prediction accuracy',
        '28+ IoT device orchestration',
        'Real-time predictive control'
      ],
      technologies: ['ESP32', 'TensorFlow Lite', 'MQTT', 'React Native', 'Firebase'],
      accent: '#FF6B00',
      icon: '🏠'
    },
    {
      title: 'Decentralized IP Registry',
      subtitle: 'Blockchain Intellectual Property Platform',
      metrics: [
        { label: 'TRANSACTIONS', value: 247 },
        { label: 'GAS EFFICIENCY', value: 89 },
        { label: 'SECURITY', value: 100 }
      ],
      description: 'Immutable blockchain registry for digital IP with NFT timestamps and smart contract automation. Full E2E encryption and distributed verification.',
      achievements: [
        '247 smart contract transactions',
        '89% gas optimization',
        '100% audit compliance',
        'IPFS distributed storage'
      ],
      technologies: ['Solidity', 'Ethereum', 'IPFS', 'React', 'Hardhat'],
      accent: '#1E90FF',
      icon: '⛓️'
    }
  ]

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="flex items-center justify-center gap-6 mb-12">
            <div className="w-px h-16 bg-gradient-to-b from-orange-500/50 via-cyan-500/30 to-transparent" />
            <h2 className="font-hud text-section font-black leading-tight">
              MISSION CRITICAL PROJECTS
            </h2>
            <div className="w-px h-16 bg-gradient-to-b from-transparent to-cyan-500/50 via-orange-500/30" />
          </div>
          <p className="text-xl max-w-3xl mx-auto opacity-80 font-medium">
            Production-grade systems deployed at scale. Optimized for performance, security, and mission-critical reliability.
          </p>
        </motion.div>

        {/* Holographic Project Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <ProjectPanel key={idx} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectPanel({ project, index }) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef(null)

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative cursor-pointer"
      style={{ perspective: 1500 }}
    >
      {/* Holographic Glow */}
      <motion.div 
        className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at 50%, ${project.accent}40 0%, transparent 50%)`,
          filter: 'blur(40px)',
          zIndex: -1
        }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* Main Holographic Panel */}
      <div 
        className="relative h-full p-10 rounded-3xl overflow-hidden transition-all duration-500 group-hover:p-12 hover:shadow-[0_35px_80px_rgba(0,0,0,0.8)]"
        style={{
          background: 'rgba(255,255,255,0.02)',
          backdropFilter: 'blur(40px)',
          border: `2px solid ${project.accent}20`,
          boxShadow: '0 25px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Corner Scanner Elements */}
        <ScannerRing size={80} isActive={isHovered} className="absolute top-6 left-6 w-20 h-20 opacity-40" />
        <ScannerRing size={60} isActive={isHovered} className="absolute top-6 right-6 w-16 h-16 opacity-30" />
        <ScannerRing size={70} isActive={isHovered} className="absolute bottom-6 left-6 w-18 h-18 opacity-35" />

        {/* Header */}
        <div className="flex items-start justify-between mb-8 relative z-10">
          <motion.div 
            className="text-5xl p-4 rounded-2xl backdrop-blur-sm"
            style={{ 
              background: `linear-gradient(135deg, ${project.accent}, rgba(255,255,255,0.1))`,
              boxShadow: `0 0 40px ${project.accent}60`
            }}
            whileHover={{ rotateY: 180, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            {project.icon}
          </motion.div>
          
          <motion.div 
            className="text-right space-y-1 min-w-[140px]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            {project.metrics.map((metric, mIdx) => (
              <HudStatusBar 
                key={mIdx} 
                label={metric.label} 
                value={metric.value} 
                color={project.accent} 
              />
            ))}
          </motion.div>
        </div>

        {/* Title */}
        <motion.h3 
          className="font-hud text-2xl lg:text-3xl font-black mb-4 leading-tight relative z-10"
          style={{ 
            background: `linear-gradient(135deg, ${project.accent}, white)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: `0 0 30px ${project.accent}40`
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {project.title}
        </motion.h3>

        <motion.p 
          className="text-lg opacity-90 mb-8 leading-relaxed relative z-10 max-w-lg"
          style={{ color: 'rgba(255,255,255,0.95)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {project.description}
        </motion.p>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          {project.achievements.map((achieve, aIdx) => (
            <motion.div
              key={aIdx}
              className="group relative p-4 rounded-xl bg-white/3 border border-white/8 backdrop-blur-sm hover:bg-white/5 hover:border-white/20 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ delay: aIdx * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" 
                  style={{ 
                    background: project.accent,
                    boxShadow: `0 0 12px ${project.accent}80`
                  }} 
                />
                <span className="text-sm leading-relaxed">{achieve}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3 mb-10">
          {project.technologies.map((tech, tIdx) => (
            <motion.span
              key={tIdx}
              className="px-4 py-2 rounded-full text-xs font-mono font-semibold tracking-wide uppercase border hover:scale-105"
              style={{
                background: 'rgba(255,255,255,0.03)',
                borderColor: `${project.accent}40`,
                color: project.accent
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + tIdx * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ boxShadow: `0 0 15px ${project.accent}60` }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Scanner Overlay */}
        <motion.div 
          className="absolute inset-0 opacity-0 group-hover:opacity-20 pointer-events-none"
          animate={{ opacity: isHovered ? 0.2 : 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/80 to-transparent animate-[scanner_3s_linear_infinite]" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-orange-500/80 via-transparent to-blue-500/80 animate-[scanner_3s_linear_infinite_1.5s]" />
        </motion.div>
      </div>
    </motion.div>
  )
}

