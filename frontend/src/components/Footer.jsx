import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/yourusername', icon: '󰊢', color: '#00F5FF' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile', icon: '󰒱', color: '#1E90FF' },
    { name: 'Telegram', href: 'https://t.me/yourusername', icon: '󰐧', color: '#FF6B00' },
  ]

  const quickLinks = [
    { name: 'ABOUT', id: 'about' },
    { name: 'SKILLS', id: 'skills' },
    { name: 'EXPERIENCE', id: 'experience' },
    { name: 'PROJECTS', id: 'projects' },
    { name: 'CONTACT', id: 'contact' },
  ]

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative" style={{
      background: 'linear-gradient(180deg, rgba(5,8,22,0.98) 0%, rgba(0,0,0,1) 100%)',
      borderTop: '1px solid rgba(0,245,255,0.2)',
      boxShadow: '0 -20px 60px rgba(0,0,0,0.8)'
    }}>
      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        {/* HUD Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Brand & Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="font-hud text-3xl font-black leading-tight bg-gradient-to-r from-cyan-400 via-white to-orange-400 bg-clip-text text-transparent">
              YASH KUMAR SHARMA
            </div>
            <div className="font-mono text-lg leading-relaxed opacity-80 max-w-md">
              AI Systems Engineer. Building autonomous infrastructure that operates at machine speed.
            </div>
            <div className="flex gap-4">
              {socialLinks.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, rotate: 360 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl backdrop-blur-sm"
                  style={{
                    background: `rgba(255,255,255,0.05)`,
                    border: `1px solid ${link.color}30`,
                    color: link.color,
                    boxShadow: `0 8px 25px ${link.color}20`
                  }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Navigation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="font-hud text-xl font-black uppercase tracking-tight mb-6">
              NAVIGATION CORE
            </h4>
            <div className="space-y-3">
              {quickLinks.map((link, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left p-3 font-mono uppercase text-sm tracking-wider transition-all group hover:translate-x-3"
                  style={{ color: 'rgba(255,255,255,0.8)' }}
                  whileHover={{ color: '#00F5FF' }}
                >
                  <span className="inline-flex items-center gap-3 group-hover:gap-4 transition-all">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-orange-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Systems Status */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="font-hud text-xl font-black uppercase tracking-tight mb-6">
              SYSTEM STATUS
            </h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/3 border border-white/10">
                <span className="font-mono opacity-80">API Response</span>
                <span className="font-mono text-cyan-400">23ms</span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/3 border border-white/10">
                <span className="font-mono opacity-80">Uptime</span>
                <span className="font-mono text-green-400">99.98%</span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/3 border border-white/10">
                <span className="font-mono opacity-80">Active Nodes</span>
                <span className="font-mono text-orange-400">247</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom HUD Bar */}
        <motion.div 
          className="pt-12 border-t flex flex-col lg:flex-row justify-between items-center gap-8"
          style={{ borderColor: 'rgba(255,255,255,0.08)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="font-mono text-sm opacity-50 text-center lg:text-left">
            © {currentYear} YASH KUMAR SHARMA • SYSTEMS ONLINE
          </div>
          
          <div className="font-mono text-xs uppercase tracking-wider opacity-40 flex flex-wrap gap-6 justify-center lg:justify-end">
            <span>REACT 18</span>
            <span>TAILWIND CSS</span>
            <span>REACT THREE FIBER</span>
            <span>FRAMER MOTION</span>
          </div>
        </motion.div>
      </div>

      {/* Floating JARVIS Elements */}
      <div className="absolute bottom-20 left-20 opacity-20">
        <ScannerRing size={300} isActive={true} />
      </div>
    </footer>
  )
}

