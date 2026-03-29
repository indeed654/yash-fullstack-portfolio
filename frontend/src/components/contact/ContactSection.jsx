import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import GlassCard from '../ui/GlassCard'
import { personalInfo } from '../../data/personal'

const contactLinks = [
  {
    name: 'LinkedIn',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-1.852-1.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    href: personalInfo.linkedin,
    color: '#0077B5',
    label: 'Connect on LinkedIn',
  },
  {
    name: 'GitHub',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    href: personalInfo.github,
    color: '#f0f6fc',
    label: 'View GitHub Profile',
  },
  {
    name: 'Email',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    href: `mailto:${personalInfo.email}`,
    color: '#00F5FF',
    label: 'Send Email',
  },
  {
    name: 'Resume',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    href: personalInfo.resume,
    color: '#FF6B00',
    label: 'Download Resume',
  },
]

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSending, setIsSending] = useState(false)
  const [sendSuccess, setSendSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSending(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSending(false)
    setSendSuccess(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSendSuccess(false), 3000)
  }

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="relative py-24 px-4 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-cyan/5 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          title="CONNECT JARVIS"
          subtitle="// establish communication"
        />
        
        <div className="grid lg:grid-cols-2 gap-8 mt-16">
          {/* Left Column - Contact Links */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <GlassCard className="p-8 h-full">
              <h3 className="font-orbitron text-xl text-cyan mb-6 flex items-center gap-3">
                <span className="w-2 h-2 bg-cyan rounded-full animate-pulse" />
                Communication Channels
              </h3>
              
              <div className="space-y-4">
                {contactLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.02,
                      x: 8,
                      transition: { duration: 0.2 }
                    }}
                    className="group flex items-center gap-4 p-4 rounded-lg glass-card border border-white/5 hover:border-cyan/30 transition-all duration-300"
                    style={{
                      background: `linear-gradient(135deg, rgba(5,8,22,0.9) 0%, ${link.color}05 100%)`,
                    }}
                  >
                    {/* Icon container */}
                    <div 
                      className="relative w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-lg"
                      style={{
                        background: `${link.color}10`,
                        color: link.color,
                        boxShadow: `0 0 20px ${link.color}20`,
                      }}
                    >
                      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: `radial-gradient(circle at center, ${link.color}30 0%, transparent 70%)`,
                        }}
                      />
                      <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                        {link.icon}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h4 className="font-rajdhani text-lg text-white font-semibold group-hover:text-cyan transition-colors">
                        {link.name}
                      </h4>
                      <p className="font-mono text-xs text-white/40 group-hover:text-white/60 transition-colors">
                        {link.label}
                      </p>
                    </div>
                    
                    {/* Arrow indicator */}
                    <motion.div
                      className="text-cyan/60 group-hover:text-cyan transition-colors"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </motion.a>
                ))}
              </div>
              
              {/* System status */}
              <div className="mt-8 pt-6 border-t border-cyan/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
                    <span className="font-mono text-xs text-green-400 tracking-wider">SYSTEM ONLINE</span>
                  </div>
                  <span className="font-mono text-[10px] text-white/30">
                    RESPONSE TIME: &lt;24H
                  </span>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <GlassCard className="p-8 h-full">
              <h3 className="font-orbitron text-xl text-orange mb-6 flex items-center gap-3">
                <span className="w-2 h-2 bg-orange rounded-full animate-pulse" />
                Transmit Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block font-mono text-xs text-cyan/60 mb-2 tracking-wider">
                    IDENTIFIER
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-primary-light/50 border border-cyan/20 rounded-lg focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50 transition-all duration-300 font-rajdhani text-white placeholder-white/20"
                      placeholder="Enter your name"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-cyan/20 rounded-full group-focus-within:animate-pulse" />
                  </div>
                </motion.div>

                {/* Email field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block font-mono text-xs text-cyan/60 mb-2 tracking-wider">
                    COMMUNICATION FREQUENCY
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-primary-light/50 border border-cyan/20 rounded-lg focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50 transition-all duration-300 font-rajdhani text-white placeholder-white/20"
                      placeholder="your@email.com"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-cyan/20 rounded-full group-focus-within:animate-pulse" />
                  </div>
                </motion.div>

                {/* Message field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block font-mono text-xs text-cyan/60 mb-2 tracking-wider">
                    TRANSMISSION DATA
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-primary-light/50 border border-cyan/20 rounded-lg focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50 transition-all duration-300 font-rajdhani text-white placeholder-white/20 resize-none"
                      placeholder="Enter your message..."
                    />
                    <div className="absolute right-3 top-3 w-2 h-2 bg-cyan/20 rounded-full group-focus-within:animate-pulse" />
                  </div>
                </motion.div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={isSending || sendSuccess}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: isSending || sendSuccess ? 1 : 1.02 }}
                  whileTap={{ scale: isSending || sendSuccess ? 1 : 0.98 }}
                  className={`relative w-full py-4 rounded-lg overflow-hidden font-orbitron text-sm tracking-wider transition-all duration-500 ${
                    sendSuccess
                      ? 'bg-green-500/20 border border-green-400/50 text-green-400'
                      : isSending
                      ? 'bg-cyan/10 border border-cyan/30 text-cyan/60 cursor-wait'
                      : 'bg-gradient-to-r from-cyan/20 via-cyan/10 to-cyan/20 border border-cyan/30 text-cyan hover:border-cyan/60 hover:shadow-[0_0_30px_rgba(0,245,255,0.3)]'
                  }`}
                >
                  {!sendSuccess && !isSending && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan/5 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700" />
                  )}
                  
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {sendSuccess ? (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        TRANSMISSION COMPLETE
                      </>
                    ) : isSending ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-cyan/30 border-t-cyan rounded-full"
                        />
                        TRANSMITTING...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        INITIATE TRANSMISSION
                      </>
                    )}
                  </span>
                </motion.button>
              </form>
              
              {/* System info */}
              <div className="mt-6 pt-4 border-t border-white/5">
                <div className="flex items-center justify-between font-mono text-[10px] text-white/30">
                  <span>ENCRYPTION: AES-256</span>
                  <span>STATUS: SECURE</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
