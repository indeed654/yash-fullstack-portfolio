import { motion } from 'framer-motion'
import ScannerRing from './ScannerRing'
import HudStatusBar from './HudStatusBar'
import { useState, useEffect } from 'react'

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(null)

  const skillCategories = [
    {
      name: 'Languages',
      icon: '🌐',
      level: 95,
      skills: ['Python', 'JavaScript/TypeScript', 'Java', 'Go', 'SQL/NoSQL'],
      color: '#00F5FF'
    },
    {
      name: 'Frontend',
      icon: '⚛️',
      level: 92,
      skills: ['React/Next.js', 'TailwindCSS', 'Framer Motion', 'React Three Fiber', 'Vite'],
      color: '#1E90FF'
    },
    {
      name: 'Backend',
      icon: '🔥',
      level: 88,
      skills: ['Node.js/Express', 'Spring Boot', 'FastAPI', 'GraphQL', 'Microservices'],
      color: '#FF6B00'
    },
    {
      name: 'AI/ML',
      icon: '🧠',
      level: 94,
      skills: ['TensorFlow/PyTorch', 'LangChain/RAG', 'Computer Vision', 'LLM Fine-tuning', 'MLOps'],
      color: '#00F5FF'
    },
    {
      name: 'Cybersecurity',
      icon: '🛡️',
      level: 90,
      skills: ['IDS/IPS Systems', 'Penetration Testing', 'CVE Analysis', 'Zero Trust', 'SIEM'],
      color: '#FF6B00'
    },
    {
      name: 'Cloud',
      icon: '☁️',
      level: 87,
      skills: ['AWS/GCP/Azure', 'Kubernetes/Docker', 'Terraform', 'Serverless', 'CI/CD'],
      color: '#1E90FF'
    },
    {
      name: 'DevOps',
      icon: '⚙️',
      level: 89,
      skills: ['GitOps', 'Monitoring (Prometheus)', 'Infrastructure as Code', 'Security Scanning'],
      color: '#00F5FF'
    },
    {
      name: 'Emerging',
      icon: '🚀',
      level: 85,
      skills: ['Web3/Solidity', 'IoT (ESP32)', 'Edge Computing', 'Quantum Ready'],
      color: '#FF6B00'
    }
  ]

  const competencies = [
    'Autonomous Systems', 'Multi-Agent AI', 'Real-time Processing', 'Distributed Systems', 
    'Secure Architecture', 'Performance Engineering', 'Scalable Infrastructure'
  ]

  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - HUD Style */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-24 bg-gradient-to-r from-cyan-500/50 via-transparent to-orange-500/50" />
            <ScannerRing size={80} isActive={true} />
            <div className="h-px w-24 bg-gradient-to-l from-orange-500/50 via-transparent to-cyan-500/50" />
          </div>
          <h2 className="font-hud text-section font-black mb-6 leading-tight">
            SYSTEM CAPABILITIES
          </h2>
          <p className="text-xl max-w-2xl mx-auto opacity-80 font-medium">
            Core competencies optimized for AI systems engineering and autonomous infrastructure
          </p>
        </motion.div>

        {/* HUD Skill Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onHoverStart={() => setActiveCategory(idx)}
              onHoverEnd={() => setActiveCategory(null)}
              className="group relative overflow-hidden cursor-pointer"
            >
              {/* HUD Panel */}
              <div className="hud-panel p-8 h-full rounded-3xl relative border-2 border-transparent hover:border-cyan-500/40 transition-all duration-500">
                {/* Corner Scanner Rings */}
                <ScannerRing size={120} isActive={activeCategory === idx} className="top-4 left-4 w-24 h-24 opacity-30" />
                <ScannerRing size={100} isActive={activeCategory === idx} className="bottom-6 right-6 w-20 h-20 opacity-40" />

                {/* Module Header */}
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10 relative">
                  <motion.div 
                    className="text-3xl p-3 rounded-2xl"
                    style={{ 
                      background: `linear-gradient(135deg, ${category.color}, #1E90FF)`,
                      boxShadow: `0 0 25px ${category.color}40`
                    }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    {category.icon}
                  </motion.div>
                  <div>
                    <h3 className="font-hud text-2xl font-black text-white mb-1">
                      {category.name}
                    </h3>
                    <HudStatusBar label="PROFICIENCY" value={category.level} color={category.color} />
                  </div>
                </div>

                {/* Skill List */}
                <div className="space-y-3">
                  {category.skills.map((skill, sIdx) => (
                    <motion.div
                      key={sIdx}
                      className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: sIdx * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 rounded-full" style={{ 
                        background: category.color,
                        boxShadow: `0 0 8px ${category.color}80`
                      }} />
                      <span className="font-mono text-sm opacity-90 whitespace-nowrap">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Glow Overlay on Hover */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-orange-500/10 opacity-0 group-hover:opacity-100"
                  animate={{ opacity: activeCategory === idx ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Competencies - HUD Badges */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-4 mb-12">
            <div className="h-px w-32 bg-gradient-to-r from-cyan-500 to-orange-500 opacity-50" />
            <span className="font-hud text-lg uppercase tracking-wider opacity-70">CORE MODULES</span>
            <div className="h-px w-32 bg-gradient-to-l from-orange-500 to-cyan-500 opacity-50" />
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {competencies.map((competency, idx) => (
              <motion.div
                key={competency}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: idx * 0.03 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.08, 
                  y: -4,
                  boxShadow: '0 15px 35px rgba(0,245,255,0.3)'
                }}
                className="hud-panel px-6 py-4 rounded-2xl font-mono text-sm uppercase tracking-wider relative overflow-hidden"
              >
                <div className="scanner-line" />
                {competency}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

