import { motion } from 'framer-motion'
import ScannerRing from './ScannerRing'
import HudStatusBar from './HudStatusBar'
import { useState } from 'react'

export default function About() {
  const [activeTab, setActiveTab] = useState('profile')

  const stats = [
    { value: '18+', label: 'Deployed Systems', color: '#00F5FF' },
    { value: '2.5+', label: 'Years Experience', color: '#FF6B00' },
    { value: '10+', label: 'AI Models', color: '#1E90FF' },
    { value: '50k+', label: 'Lines of Code', color: '#00F5FF' },
  ]

  const profileInfo = [
    { label: 'Role', value: 'AI Systems Engineer' },
    { label: 'Specialties', value: 'Autonomous Systems, Cybersecurity, Full-Stack' },
    { label: 'Location', value: 'India • UTC+5:30' },
    { label: 'Availability', value: 'Full-time Open Source' },
  ]

  const focusAreas = [
    {
      title: 'Autonomous AI Agents',
      desc: 'Multi-agent systems with LangChain orchestration and real-time decision making',
      icon: '🤖',
      color: '#00F5FF'
    },
    {
      title: 'Cyber Threat Intelligence',
      desc: 'IDS/IPS platforms with RAG-enhanced CVE analysis and automated mitigation',
      icon: '🛡️',
      color: '#FF6B00'
    },
    {
      title: 'Distributed Infrastructure',
      desc: 'Kubernetes-native microservices with observability and zero-downtime deployments',
      icon: '☁️',
      color: '#1E90FF'
    },
    {
      title: 'Edge Computing Systems',
      desc: 'ESP32 IoT networks with TensorFlow Lite ML and blockchain verification',
      icon: '⚡',
      color: '#00F5FF'
    },
  ]

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        {/* HUD Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-6 mb-8">
            <ScannerRing size={120} isActive={true} />
            <div className="h-px w-32 bg-gradient-to-r from-cyan-500/50 to-orange-500/50" />
            <ScannerRing size={80} isActive={true} className="opacity-70" />
          </div>
          <h2 className="font-hud text-section font-black mb-6">
            SYSTEM PROFILE
          </h2>
          <p className="text-xl max-w-2xl mx-auto opacity-80">
            AI Systems Engineer • Autonomous Infrastructure Specialist
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left Column - Holographic Avatar & Stats */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-12"
          >
            {/* Holographic Avatar */}
            <div className="relative group">
              <div className="w-64 h-64 lg:w-80 lg:h-80 mx-auto rounded-3xl relative overflow-hidden" style={{
                background: 'radial-gradient(circle at 30% 30%, rgba(0,245,255,0.15) 0%, rgba(255,107,0,0.1) 50%, rgba(30,144,255,0.08) 100%)',
                border: '2px solid rgba(0,245,255,0.3)',
                boxShadow: '0 0 60px rgba(0,245,255,0.3), inset 0 0 40px rgba(255,255,255,0.05)'
              }}>
                {/* Scanning Rings */}
                <ScannerRing size={300} isActive={true} className="opacity-40" />
                <ScannerRing size={200} isActive={true} className="opacity-60" />
                
                {/* Avatar Core */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-orange-500/10 to-blue-500/20 animate-pulse" />
                <div className="absolute inset-16 rounded-2xl bg-gradient-to-r from-cyan-500/30 to-orange-500/30 shadow-2xl shadow-cyan-500/25" />
                
                {/* Status Indicators */}
                <div className="absolute top-8 left-8 w-4 h-4 bg-green-500 rounded-full shadow-lg shadow-green-500/50 animate-ping" />
                <div className="absolute bottom-8 right-8 w-3 h-3 bg-orange-400 rounded-full shadow-lg shadow-orange-400/50" style={{ animation: 'hudPulse 2s ease-in-out infinite' }} />
              </div>
              
              <div className="text-center mt-6">
                <h3 className="font-hud text-3xl font-black mb-2 bg-gradient-to-r from-cyan-400 via-white to-orange-400 bg-clip-text text-transparent">
                  YASH KUMAR SHARMA
                </h3>
                <div className="font-mono uppercase text-xs tracking-wider opacity-70">
                  SYSTEMS ONLINE
                </div>
              </div>
            </div>

            {/* Core Stats HUD */}
            <div className="space-y-4 pt-8 border-t border-white/10">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center p-6 rounded-2xl"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: `1px solid ${stat.color}20`,
                    boxShadow: `0 0 25px ${stat.color}20`
                  }}
                >
                  <div className="text-3xl font-black mb-1" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase font-mono tracking-wider opacity-70">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Profile & Focus Areas */}
          <div className="lg:col-span-2 space-y-12">
            {/* Profile Info HUD */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8"
            >
              {profileInfo.map((info, idx) => (
                <div key={idx} className="hud-panel p-8 rounded-2xl">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border flex items-center justify-center" style={{ borderColor: 'rgba(0,245,255,0.3)' }}>
                      <span className="font-mono text-xs uppercase opacity-80">D</span>
                    </div>
                    <div className="font-mono text-sm opacity-70 uppercase tracking-wider">
                      {info.label}
                    </div>
                  </div>
                  <div className="text-2xl font-black font-hud">
                    {info.value}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Mission Statement */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center py-12 px-8 rounded-3xl" 
              style={{
                background: 'linear-gradient(135deg, rgba(0,245,255,0.03), rgba(255,107,0,0.02), rgba(30,144,255,0.02))',
                border: '1px solid rgba(0,245,255,0.2)',
                boxShadow: '0 30px 80px rgba(0,0,0,0.6)'
              }}
            >
              <ScannerRing size={200} isActive={true} className="mx-auto mb-8 opacity-30 w-48 h-48" />
              <div className="max-w-2xl mx-auto">
                <h3 className="font-hud text-3xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
                  MISSION CRITICAL
                </h3>
                <p className="text-xl leading-relaxed opacity-90 mb-8">
                  Engineering autonomous systems that operate at machine speed. Building infrastructure 
                  that thinks. Creating technology that defends itself. Systems engineered for the intelligent age.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="font-mono text-sm uppercase tracking-wider opacity-70 px-4 py-2 border rounded-xl" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
                    Autonomous First
                  </div>
                  <div className="font-mono text-sm uppercase tracking-wider opacity-70 px-4 py-2 border rounded-xl" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
                    Zero Trust
                  </div>
                  <div className="font-mono text-sm uppercase tracking-wider opacity-70 px-4 py-2 border rounded-xl" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
                    Mission Ready
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Engineering Focus HUD Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {focusAreas.map((area, idx) => (
                <motion.div
                  key={idx}
                  className="hud-panel p-10 rounded-3xl relative group hover:border-cyan-500/40 transition-all duration-500"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.02, y: -8 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  {/* Focus Icon */}
                  <div className="text-5xl mb-6 p-6 rounded-2xl mx-auto w-24 h-24 flex items-center justify-center" 
                    style={{
                      background: `linear-gradient(135deg, ${area.color}20, rgba(255,255,255,0.05))`,
                      border: `2px solid ${area.color}30`,
                      boxShadow: `0 0 30px ${area.color}40`
                    }}
                  >
                    {area.icon}
                  </div>

                  <h4 className="font-hud text-2xl font-black mb-4 text-white text-center">
                    {area.title}
                  </h4>
                  <p className="text-center leading-relaxed opacity-90 mb-8">
                    {area.desc}
                  </p>

                  <HudStatusBar 
                    label="EXPERTISE" 
                    value={92 + Math.floor(Math.random() * 6)} 
                    color={area.color} 
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

