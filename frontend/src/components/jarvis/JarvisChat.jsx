import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const INITIAL_MESSAGES = [
  { 
    id: 1, 
    text: "Initializing JARVIS interface...", 
    sender: 'jarvis', 
    timestamp: new Date(),
    type: 'system'
  },
  { 
    id: 2, 
    text: "Welcome to the system. How can I assist you today?", 
    sender: 'jarvis', 
    timestamp: new Date(),
    type: 'message'
  }
]

const QUICK_ACTIONS = [
  { label: 'View Projects', query: 'Show me your projects' },
  { label: 'Skills Overview', query: 'What are your skills?' },
  { label: 'Contact Info', query: 'How can I reach you?' },
  { label: 'Experience', query: 'Tell me about your experience' },
]

const JarvisChat = () => {
  const [messages, setMessages] = useState(INITIAL_MESSAGES)
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const generateResponse = (query) => {
    const responses = {
      'projects': "I've worked on 10+ innovative projects including Smart Home Automation with AI + IoT, an AI Resume Analyzer using NLP, and a Decentralized IP System on blockchain. Would you like detailed information about any specific project?",
      'skills': "My core competencies include:\n• AI/ML: PyTorch (95%), TensorFlow (90%)\n• Programming: Python (98%), JavaScript (85%)\n• Specializations: Computer Vision (94%), NLP (91%), IoT (89%)\n\nShall I elaborate on any area?",
      'contact': "You can reach me through:\n• Email: yashkumarsharma@example.com\n• LinkedIn: /in/yashkumarsharma\n• GitHub: /yourusername\n\nThe contact form below is also available for direct communication.",
      'experience': "Currently pursuing B.Tech in CSE (IoT) at AKTU with 9.2 CGPA. Led multiple AI/ML club projects and contributed to 20+ open-source repositories with 500+ contributions.",
      'default': "Thank you for your query. I'm processing your request and will provide detailed information shortly. Is there anything specific you'd like to know about my background or work?"
    }

    const lowerQuery = query.toLowerCase()
    if (lowerQuery.includes('project')) return responses.projects
    if (lowerQuery.includes('skill') || lowerQuery.includes('competenc') || lowerQuery.includes('technolog')) return responses.skills
    if (lowerQuery.includes('contact') || lowerQuery.includes('email') || lowerQuery.includes('reach')) return responses.contact
    if (lowerQuery.includes('experience') || lowerQuery.includes('background') || lowerQuery.includes('work')) return responses.experience
    return responses.default
  }

  const handleSendMessage = async (text) => {
    if (!text.trim()) return

    const userMessage = {
      id: messages.length + 1,
      text: text.trim(),
      sender: 'user',
      timestamp: new Date(),
      type: 'message'
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 1500))

    const responseText = generateResponse(text)
    
    // Simulate typing effect for response
    const responseMessage = {
      id: messages.length + 2,
      text: responseText,
      sender: 'jarvis',
      timestamp: new Date(),
      type: 'message'
    }

    setIsTyping(false)
    setMessages(prev => [...prev, responseMessage])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleSendMessage(inputValue)
  }

  const handleQuickAction = (query) => {
    handleSendMessage(query)
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-4 md:px-8 max-w-5xl mx-auto"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 mb-4"
        >
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan/20 to-orange/20 border-2 border-cyan/40 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="w-full h-full absolute inset-0 rounded-full border-t-2 border-cyan"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-primary shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
          </div>
          <div className="text-left">
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan via-white to-orange bg-clip-text text-transparent">
              JARVIS Interface
            </h2>
            <p className="font-mono text-xs text-cyan/60 tracking-wider">
              AI-POWERED COMMUNICATION SYSTEM v3.0
            </p>
          </div>
        </motion.div>
      </div>

      {/* Chat Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="relative"
      >
        {/* Glass Card */}
        <div className="glass-card rounded-2xl overflow-hidden border border-cyan/20 shadow-[0_0_50px_rgba(0,245,255,0.1)]">
          
          {/* Terminal Header */}
          <div className="bg-primary-light/80 backdrop-blur-sm border-b border-cyan/10 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <span className="font-mono text-xs text-cyan/60 ml-3">
                  jarvis_terminal.exe
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="font-mono text-[10px] text-green-400 tracking-wider">ONLINE</span>
                </div>
                <span className="font-mono text-[10px] text-white/30">
                  {new Date().toLocaleTimeString()}
                </span>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="h-[500px] overflow-y-auto p-6 space-y-4 custom-scrollbar">
            <AnimatePresence>
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] ${message.sender === 'user' ? 'order-1' : 'order-2'}`}>
                    {/* Avatar for JARVIS */}
                    {message.sender === 'jarvis' && (
                      <div className="flex items-end gap-3">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan/30 to-blue/30 border border-cyan/40 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(0,245,255,0.3)]"
                        >
                          <svg className="w-4 h-4 text-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </motion.div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-mono text-[10px] text-cyan/60 tracking-wider">JARVIS AI</span>
                            <div className="w-1.5 h-1.5 bg-cyan rounded-full animate-pulse" />
                          </div>
                          <div className="glass rounded-2xl rounded-bl-none p-4 border border-cyan/20 shadow-[0_0_20px_rgba(0,245,255,0.15)]">
                            <p className="font-rajdhani text-white leading-relaxed whitespace-pre-line">
                              {message.text}
                            </p>
                          </div>
                          <span className="font-mono text-[9px] text-white/30 mt-1 block">
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* User message */}
                    {message.sender === 'user' && (
                      <div className="flex items-end gap-3 flex-row-reverse">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="w-8 h-8 rounded-full bg-gradient-to-br from-orange/30 to-red/30 border border-orange/40 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(255,107,0,0.3)]"
                        >
                          <svg className="w-4 h-4 text-orange" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                          </svg>
                        </motion.div>
                        <div>
                          <div className="glass rounded-2xl rounded-br-none p-4 border border-orange/20 bg-orange/5 shadow-[0_0_20px_rgba(255,107,0,0.1)]">
                            <p className="font-rajdhani text-white leading-relaxed">
                              {message.text}
                            </p>
                          </div>
                          <span className="font-mono text-[9px] text-white/30 mt-1 block text-right">
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Typing indicator */}
            <AnimatePresence>
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex justify-start"
                >
                  <div className="flex items-end gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan/30 to-blue/30 border border-cyan/40 flex items-center justify-center shadow-[0_0_15px_rgba(0,245,255,0.3)]">
                      <svg className="w-4 h-4 text-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="glass rounded-2xl rounded-bl-none p-4 border border-cyan/20">
                      <div className="flex gap-1.5">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                          className="w-2 h-2 bg-cyan rounded-full"
                        />
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                          className="w-2 h-2 bg-cyan rounded-full"
                        />
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                          className="w-2 h-2 bg-cyan rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="border-t border-cyan/10 p-4 bg-primary-light/30">
            <div className="flex gap-2 overflow-x-auto pb-2 custom-scrollbar">
              {QUICK_ACTIONS.map((action, index) => (
                <motion.button
                  key={action.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleQuickAction(action.query)}
                  whileHover={{ scale: 1.05, x: 2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-shrink-0 px-4 py-2 rounded-lg glass-card border border-cyan/20 hover:border-cyan/40 transition-all duration-300 group"
                >
                  <span className="font-mono text-xs text-cyan/60 group-hover:text-cyan transition-colors whitespace-nowrap">
                    {action.label}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="border-t border-cyan/20 p-4 bg-primary-light/50">
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Enter command or ask a question..."
                  className="w-full px-5 py-3.5 bg-primary/80 border border-cyan/20 rounded-xl focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50 transition-all duration-300 font-rajdhani text-white placeholder-white/20 pr-12"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${inputValue.trim() ? 'bg-cyan animate-pulse' : 'bg-white/10'}`} />
                </div>
              </div>
              <motion.button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                whileHover={{ scale: inputValue.trim() && !isTyping ? 1.05 : 1 }}
                whileTap={{ scale: inputValue.trim() && !isTyping ? 0.95 : 1 }}
                className={`px-6 py-3.5 rounded-xl font-orbitron text-sm tracking-wider transition-all duration-300 ${
                  inputValue.trim() && !isTyping
                    ? 'bg-gradient-to-r from-cyan to-blue-500 text-white shadow-[0_0_20px_rgba(0,245,255,0.4)] hover:shadow-[0_0_30px_rgba(0,245,255,0.6)]'
                    : 'bg-white/5 text-white/30 cursor-not-allowed border border-white/10'
                }`}
              >
                TRANSMIT
              </motion.button>
            </div>
            
            {/* System info */}
            <div className="mt-3 flex items-center justify-between font-mono text-[9px] text-white/30">
              <div className="flex items-center gap-3">
                <span>ENCRYPTION: QUANTUM-RESISTANT</span>
                <span>|</span>
                <span>LATENCY: 12ms</span>
              </div>
              <span>AI MODEL: JARVIS-v3.0.1</span>
            </div>
          </form>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-2 -left-2 w-20 h-20 border-t-2 border-l-2 border-cyan/20 rounded-tl-3xl pointer-events-none" />
        <div className="absolute -bottom-2 -right-2 w-20 h-20 border-b-2 border-r-2 border-orange/20 rounded-br-3xl pointer-events-none" />
      </motion.div>
    </motion.section>
  )
}

export default JarvisChat
