import { motion } from 'framer-motion'
import ScannerRing from './ScannerRing'
import { useState } from 'react'

export default function Experience() {
  const [activeExp, setActiveExp] = useState(null)

  const experiences = [
    {
      role: 'AI & Full-Stack Engineer Intern',
      company: 'TechnoHacks EduTech',
      period: 'Jan 2025 - Present (6 mo)',
      description: 'Developing autonomous AI systems and full-stack applications. Leading implementation of multi-agent cyber defense platform with real-time threat detection.',
      achievements: [
        'Led development of AI threat detection system (85% accuracy)',
        'Built production-grade microservices architecture',
        'Implemented RAG-based CVE intelligence pipeline',
        'Optimized real-time data processing (<100ms latency)'
      ],
      technologies: ['Python/FASTAPI', 'React/Next.js', 'TensorFlow', 'PostgreSQL', 'Docker'],
      accent: '#00F5FF',
      metrics: ['85%', '100ms', '10k+', '12x']
    },
    {
      role: 'Web Developer Intern',
      company: 'CodeSoft Technologies',
      period: 'Oct 2024 - Dec 2024 (3 mo)',
      description: 'Built responsive web applications and RESTful APIs. Implemented CI/CD pipelines and collaborated on frontend architecture for enterprise applications.',
      achievements: [
        'Developed 5+ production web applications',
        'Implemented automated testing (95% coverage)',
        'Optimized frontend performance (Core Web Vitals)',
        'Led deployment of CI/CD infrastructure'
      ],
      technologies: ['React/Vite', 'Node.js/Express', 'MongoDB', 'GitHub Actions', 'AWS'],
      accent: '#FF6B00',
      metrics: ['95%', '3s', '5+', '50%']
    },
  ]

  const education = [
    {
      degree: 'B.Tech Computer Science & Engineering',
      institution: 'GITM Lucknow',
      period: '2022 - 2026',
      gpa: '9.1/10',
      focus: 'AI/ML, Cybersecurity, Distributed Systems',
      achievements: ['Top 5% of batch', 'AI/ML Specialization', 'Cybersecurity Projects'],
      accent: '#1E90FF'
    }
  ]

  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-px h-12 bg-gradient-to-b from-cyan-500/50 to-transparent" />
            <ScannerRing size={100} isActive={true} />
            <div className="w-px h-12 bg-gradient-to-b from-orange-500/50 to-transparent" />
          </div>
          <h2 className="font-hud text-section font-black mb-6">
            MISSION LOG
          </h2>
          <p className="text-xl max-w-2xl mx-auto opacity-80">
            Operational timeline and system development history
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative mb-20">
          {/* Central Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-px bg-gradient-to-b from-cyan-500/20 via-orange-500/10 to-blue-500/20" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative group"
                onHoverStart={() => setActiveExp(idx)}
                onHoverEnd={() => setActiveExp(null)}
              >
                {/* Timeline Node */}
                <div className="absolute w-5 h-5 lg:w-6 lg:h-6 rounded-full left-1/2 lg:left-auto transform -translate-x-1/2 lg:translate-x-0 lg:-translate-y-1/2"
                  style={{
                    top: idx === 0 ? 0 : 'auto',
                    bottom: idx === experiences.length - 1 ? 0 : 'auto',
                    background: `radial-gradient(circle, ${exp.accent} 0%, ${exp.accent}88 70%)`,
                    boxShadow: `0 0 25px ${exp.accent}80, inset 0 1px 0 rgba(255,255,255,0.3)`,
                  }}
                >
                  <ScannerRing size={60} isActive={activeExp === idx} className="w-6 h-6 opacity-70" />
                </div>

                {/* Log Panel */}
                <div className={`hud-panel p-8 lg:p-10 rounded-3xl relative overflow-hidden lg:max-w-2xl ${
                  idx % 2 === 0 ? 'lg:ml-auto lg:mr-20' : 'lg:mr-auto lg:ml-20'
                }`}>
                  {/* Header Bar */}
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/5 relative">
                    <div className="flex -space-x-2">
                      <div className="w-3 h-3 rounded-full bg-green-500/60 shadow-lg shadow-green-500/30" />
                      <div className="w-3 h-3 rounded-full bg-orange-500/60 shadow-lg shadow-orange-500/30" />
                      <div className="w-3 h-3 rounded-full bg-red-500/60 shadow-lg shadow-red-500/30" />
                    </div>
                    
                    <div className="ml-auto">
                      <h3 className="font-hud text-xl font-black" style={{ color: exp.accent }}>
                        {exp.role}
                      </h3>
                      <p className="text-sm opacity-70 font-mono">{exp.company} • {exp.period}</p>
                    </div>
                  </div>

                  {/* Mission Log */}
                  <div className="space-y-4 mb-6">
                    <p className="text-white/80 leading-relaxed text-base">{exp.description}</p>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {exp.metrics.map((metric, mIdx) => (
                        <div key={mIdx} className="text-right lg:text-left">
                          <HudStatusBar label="" value={parseInt(metric)} color={exp.accent} />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Achievements Log */}
                  <div>
                    <h4 className="font-mono uppercase text-xs tracking-wider mb-4 opacity-60">ACHIEVEMENTS</h4>
                    <div className="space-y-2">
                      {exp.achievements.map((achieve, aIdx) => (
                        <motion.div
                          key={aIdx}
                          className="flex items-start gap-3 p-3 rounded-xl bg-white/2 border border-white/5 hover:bg-white/5 transition-all"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: aIdx * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" 
                            style={{ 
                              background: exp.accent,
                              boxShadow: `0 0 10px ${exp.accent}60`
                            }} 
                          />
                          <span className="text-sm opacity-90 leading-relaxed">{achieve}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-2">
                    {exp.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/5 border border-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-transparent via-white/3 to-transparent rounded-3xl p-12 border border-white/10 backdrop-blur-xl">
            <div className="flex items-center justify-center gap-6 mb-12">
              <div className="w-px h-20 bg-gradient-to-b from-blue-500/40 to-transparent" />
              <h3 className="font-hud text-3xl font-black text-white">EDUCATION UPGRADE</h3>
              <div className="w-px h-20 bg-gradient-to-b from-transparent to-blue-500/40" />
            </div>

            {education.map((edu, idx) => (
              <div key={idx} className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h4 className="font-hud text-2xl font-black mb-4" style={{ color: edu.accent }}>
                    {edu.degree}
                  </h4>
                  <p className="text-xl opacity-80 mb-6">{edu.institution}</p>
                  <p className="opacity-70 mb-8">{edu.focus}</p>
                  
                  <div className="grid grid-cols-3 gap-4">
                    {edu.achievements.map((achieve, aIdx) => (
                      <div key={aIdx} className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                        <HudStatusBar label={achieve} value={95} color={edu.accent} />
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-6xl font-black opacity-20 mb-4" style={{ color: edu.accent }}>
                    9.1/10
                  </div>
                  <div className="text-sm uppercase tracking-wider opacity-60 font-mono">
                    {edu.period}
                  </div>
                  <div className="w-48 h-48 border-4 border-blue-500/30 rounded-full mx-auto mt-8 relative">
                    <ScannerRing size={160} isActive={true} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

