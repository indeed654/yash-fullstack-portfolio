import { motion } from 'framer-motion'
import ScannerRing from './ScannerRing'

export default function Certifications() {
  const certifications = [
    {
      name: 'Advanced AI & Machine Learning',
      issuer: 'AWS Certified Machine Learning',
      date: 'Q4 2024',
      credentialId: 'AWS-ML-Specialty-v2',
      description: 'Cloud-based ML pipelines, model optimization, and production deployment',
      accent: '#00F5FF',
      icon: '🤖'
    },
    {
      name: 'Full-Stack Web Development Professional',
      issuer: 'Meta Frontend Developer Professional Certificate',
      date: 'Q3 2024',
      credentialId: 'META-FSWD-PRO-24',
      description: 'React, Node.js, databases, deployment, and scalable architecture',
      accent: '#FF6B00',
      icon: '⚛️'
    },
    {
      name: 'Google Cloud Professional Cloud Architect',
      issuer: 'Google Cloud Certified',
      date: 'Q3 2024',
      credentialId: 'GCP-PCA-2024',
      description: 'Cloud infrastructure, Kubernetes, serverless, and security architecture',
      accent: '#1E90FF',
      icon: '☁️'
    },
    {
      name: 'Cisco Certified CyberOps Associate',
      issuer: 'Cisco Networking Academy',
      date: 'Q2 2024',
      credentialId: 'CISCO-CYBEROPS-ASSOC',
      description: 'SIEM, IDS/IPS, threat hunting, and security operations center',
      accent: '#00F5FF',
      icon: '🛡️'
    },
    {
      name: 'IBM Data Science Professional Certificate',
      issuer: 'IBM Cognitive Class',
      date: 'Q2 2024',
      credentialId: 'IBM-DSP-PROFESSIONAL',
      description: 'Statistical analysis, ML workflows, deep learning, and MLOps',
      accent: '#FF6B00',
      icon: '📊'
    },
    {
      name: 'Certified Blockchain Developer',
      issuer: 'ConsenSys Academy - Ethereum Developer Bootcamp',
      date: 'Q1 2024',
      credentialId: 'CONSENSYS-ETH-DEV-BC24',
      description: 'Solidity, Web3, IPFS, smart contract security and auditing',
      accent: '#1E90FF',
      icon: '⛓️'
    },
  ]

  return (
    <section id="certifications" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="flex items-center justify-center gap-6 mb-12">
            <div className="h-px w-40 bg-gradient-to-r from-cyan-500/40 via-orange-500/20 to-blue-500/40" />
            <h2 className="font-hud text-section font-black">
              VERIFICATION CREDENTIALS
            </h2>
            <div className="h-px w-40 bg-gradient-to-l from-blue-500/40 via-orange-500/20 to-cyan-500/40" />
          </div>
          <p className="text-xl max-w-2xl mx-auto opacity-80">
            Industry-validated competencies. Continuous learning systems active.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group relative"
            >
              {/* Holographic Glow */}
              <motion.div 
                className="absolute inset-0 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity"
                style={{
                  background: `radial-gradient(circle, ${cert.accent}60 0%, transparent 70%)`
                }}
              />

              {/* Credential Panel */}
              <div className="hud-panel p-10 rounded-3xl h-full relative overflow-hidden border-2 border-transparent group-hover:border-[${cert.accent}]/40 transition-all duration-500">
                {/* Verification Badge */}
                <div className="absolute top-6 right-6 opacity-90">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center backdrop-blur-sm" style={{
                    background: `linear-gradient(135deg, ${cert.accent}20, rgba(255,255,255,0.05))`,
                    border: `2px solid ${cert.accent}40`,
                    boxShadow: `0 0 20px ${cert.accent}40`
                  }}>
                    <ScannerRing size={40} isActive={true} className="opacity-80" />
                  </div>
                </div>

                {/* Icon */}
                <motion.div 
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 p-5"
                  style={{
                    background: `linear-gradient(135deg, ${cert.accent}25, rgba(255,255,255,0.08))`,
                    border: `2px solid ${cert.accent}30`,
                    boxShadow: `0 0 30px ${cert.accent}50`
                  }}
                  whileHover={{ scale: 1.1, rotate: 180 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="text-3xl">{cert.icon}</span>
                </motion.div>

                {/* Title */}
                <h3 className="font-hud text-2xl font-black text-center mb-4 leading-tight">
                  {cert.name}
                </h3>

                {/* Issuer */}
                <div className="flex items-center justify-center gap-2 mb-6 opacity-80">
                  <div className="w-2 h-2 rounded-full" style={{ background: cert.accent }} />
                  <span className="font-mono text-sm uppercase tracking-wider">{cert.issuer}</span>
                  <div className="w-2 h-2 rounded-full" style={{ background: cert.accent }} />
                </div>

                {/* Description */}
                <p className="text-center mb-8 px-4 leading-relaxed opacity-85 text-base">
                  {cert.description}
                </p>

                {/* Credential ID */}
                <div className="bg-gradient-to-r from-black/50 to-transparent p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <div className="font-mono text-xs uppercase tracking-widest opacity-60 mb-2 text-center">
                    VERIFICATION ID
                  </div>
                  <div className="font-mono text-sm bg-black/30 p-3 rounded-xl border border-white/5 truncate" 
                    style={{ 
                      color: 'rgba(255,255,255,0.9)',
                      letterSpacing: '0.05em'
                    }}
                  >
                    {cert.credentialId}
                  </div>
                </div>

                {/* Status Bar */}
                <div className="mt-8">
                  <HudStatusBar label="VALIDITY" value={100} color={cert.accent} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Verification Footer */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-24 pt-16 border-t border-white/10"
        >
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="font-hud text-xl uppercase tracking-wider opacity-60 font-mono">
              CREDENTIAL VERIFICATION SYSTEMS ACTIVE
            </div>
            <div className="text-4xl opacity-20 mb-8">✓</div>
            <p className="text-lg opacity-80 max-w-lg mx-auto">
              All certifications blockchain-verified with immutable timestamps. Continuous learning protocols active.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

