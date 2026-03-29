import { useState } from 'react'
import { motion } from 'framer-motion'
import ScannerRing from './ScannerRing'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('idle')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus('processing')
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="section-padding relative min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="flex items-center justify-center gap-8 mb-12">
            <div className="w-px h-20 bg-gradient-to-b from-cyan-500/40 to-transparent" />
            <ScannerRing size={160} isActive={true} />
            <div className="w-px h-20 bg-gradient-to-b from-orange-500/40 to-transparent" />
          </div>
          <h2 className="font-hud text-[3.5rem] lg:text-section font-black mb-6 leading-tight">
            COMMUNICATION PROTOCOL
          </h2>
          <p className="text-2xl opacity-80 max-w-2xl mx-auto">
            Direct interface. Mission briefings accepted 24/7.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="max-w-2xl mx-auto" style={{
            background: 'rgba(5,8,22,0.95)',
            backdropFilter: 'blur(50px)',
            border: '2px solid rgba(0,245,255,0.3)',
            borderRadius: '24px',
            boxShadow: '0 50px 120px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1)',
            padding: '3rem'
          }}>
            <div className="flex gap-3 mb-12 justify-center">
              <div className="w-4 h-4 rounded-full bg-green-500/80 shadow-lg shadow-green-500/40 animate-pulse" />
              <div className="w-4 h-4 rounded-full bg-orange-500/80 shadow-lg shadow-orange-500/40" style={{ animation: 'hudPulse 2s ease-in-out infinite 0.3s' }} />
              <div className="w-4 h-4 rounded-full bg-red-500/80 shadow-lg shadow-red-500/40" style={{ animation: 'hudPulse 2s ease-in-out infinite 0.6s' }} />
            </div>

            <div className="space-y-8">
              <motion.div 
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <label className="font-mono text-sm uppercase tracking-wider mb-3 block opacity-70">
                  COMMANDER IDENTIFICATION
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-5 rounded-2xl font-mono text-lg tracking-wide transition-all duration-300 focus:outline-none"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      color: '#ffffff',
                      boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.3)'
                    }}
                    placeholder="Enter name..."
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-cyan-400 opacity-60">
                    ▶
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label className="font-mono text-sm uppercase tracking-wider mb-3 block opacity-70">
                  TRANSMISSION CHANNEL
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-5 rounded-2xl font-mono text-lg tracking-wide transition-all duration-300 focus:outline-none"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      color: '#ffffff',
                      boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.3)'
                    }}
                    placeholder="secure-channel@mission.gov"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-orange-400 opacity-60">
                    📡
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label className="font-mono text-sm uppercase tracking-wider mb-3 block opacity-70">
                  MISSION BRIEFING
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-5 rounded-2xl font-mono text-lg tracking-wide transition-all duration-300 resize-vertical focus:outline-none"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      color: '#ffffff',
                      boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.3)',
                      minHeight: '160px'
                    }}
                    placeholder="Primary objectives... Secondary priorities... Expected outcomes..."
                  />
                  <div className="absolute bottom-4 right-4 text-blue-400 opacity-60 text-sm font-mono">
                    {formData.message.length}/500
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-6 rounded-3xl font-hud font-black text-xl uppercase tracking-widest relative overflow-hidden mt-12 group"
              style={{
                background: 'linear-gradient(135deg, rgba(0,245,255,0.15) 0%, rgba(255,107,0,0.1) 50%, rgba(30,144,255,0.1) 100%)',
                border: '2px solid rgba(0,245,255,0.4)',
                color: '#00F5FF',
                boxShadow: '0 20px 60px rgba(0,245,255,0.25)'
              }}
            >
              <span className="relative z-10 font-mono">
                {isSubmitting ? (
                  <>
                    <div className="inline-flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
                      TRANSMITTING...
                    </div>
                  </>
                ) : status === 'success' ? (
                  'TRANSMISSION COMPLETE ✓'
                ) : status === 'error' ? (
                  'TRANSMISSION FAILED ⚠️'
                ) : (
                  'INITIATE TRANSMISSION'
                )}
              </span>

              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-orange-500 to-blue-500 opacity-0 group-hover:opacity-20 blur-xl"
                whileHover={{ opacity: 0.3 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            {status !== 'idle' && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                className={`text-center py-4 px-8 rounded-2xl font-mono uppercase tracking-wider text-sm mt-8 ${
                  status === 'success' ? 'bg-green-500/20 border-green-500/40 text-green-300' :
                  status === 'error' ? 'bg-red-500/20 border-red-500/40 text-red-300' :
                  'bg-blue-500/20 border-blue-500/40 text-blue-300'
                }`}
                style={{
                  border: '1px solid',
                  backdropFilter: 'blur(20px)'
                }}
              >
                {status === 'success' && 'Mission briefing received. Response vector calculated.'}
                {status === 'error' && 'Transmission error. Check parameters and retry.'}
                {status === 'processing' && 'Establishing secure channel...'}
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center pt-16 border-t border-white/10 mt-16"
            >
              <div className="max-w-md mx-auto space-y-6">
                <div className="font-hud text-lg uppercase tracking-wider opacity-60 mb-4">
                  DIRECT CHANNELS
                </div>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <motion.a
                    href="mailto:yash1047sharma@gmail.com"
                    className="group block p-6 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all"
                    style={{
                      background: 'rgba(255,255,255,0.02)',
                      backdropFilter: 'blur(20px)'
                    }}
                    whileHover={{ scale: 1.05, y: -4 }}
                  >
                    <div className="text-2xl mb-2 opacity-80">✉</div>
                    <div className="font-mono text-sm opacity-70">Email</div>
                    <div className="text-xs opacity-50 mt-1 font-mono">yash@systems.ai</div>
                  </motion.a>
                  <motion.a
                    href="#"
                    className="group block p-6 rounded-2xl border border-white/10 hover:border-orange-500/40 transition-all"
                    style={{
                      background: 'rgba(255,255,255,0.02)',
                      backdropFilter: 'blur(20px)'
                    }}
                    whileHover={{ scale: 1.05, y: -4 }}
                  >
                    <div className="text-2xl mb-2 opacity-80">💬</div>
                    <div className="font-mono text-sm opacity-70">Telegram</div>
                    <div className="text-xs opacity-50 mt-1 font-mono">@yashsystems</div>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

