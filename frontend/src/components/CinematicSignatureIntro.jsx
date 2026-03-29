import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SignatureSVG from './SignatureSVG'

export default function CinematicSignatureIntro({ onComplete }) {
  const [phase, setPhase] = useState('blackout') // 'blackout', 'terminal', 'signature', 'underline', 'glow', 'fade'
  const [terminalLines, setTerminalLines] = useState([])
  const [currentLine, setCurrentLine] = useState('')
  const [lineIndex, setLineIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) || window.innerWidth < 768
      setIsMobile(mobile)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Skip on mobile
  useEffect(() => {
    if (isMobile) {
      const timeout = setTimeout(() => onComplete(), 500)
      return () => clearTimeout(timeout)
    }
  }, [isMobile, onComplete])

  const terminalTexts = [
    'Initializing AI Systems...',
    'Loading Neural Core...',
    'Establishing Secure Connection...',
    'Access Granted.',
  ]

  // Phase transitions
  useEffect(() => {
    if (isMobile) return

    // Phase 1: Black screen fade in (0-0.5s)
    const phase1 = setTimeout(() => {
      setPhase('terminal')
    }, 500)

    // Phase 2: Terminal typing (0.5-2.5s)
    const phase2 = setTimeout(() => {
      setPhase('signature')
    }, isMobile ? 800 : 2500)

    // Phase 3: Signature reveal (2.5-3.5s)
    const phase3 = setTimeout(() => {
      setPhase('underline')
    }, isMobile ? 1800 : 3500)

    // Phase 4: Underline (3.5-4s)
    const phase4 = setTimeout(() => {
      setPhase('glow')
    }, isMobile ? 2200 : 4000)

    // Phase 5: Glow pulse (4-4.5s)
    const phase5 = setTimeout(() => {
      setPhase('fade')
    }, isMobile ? 2700 : 4500)

    // Phase 6: Fade out (4.5-5s)
    const completeTimeout = setTimeout(() => {
      onComplete()
    }, isMobile ? 3200 : 5000)

    return () => {
      clearTimeout(phase1)
      clearTimeout(phase2)
      clearTimeout(phase3)
      clearTimeout(phase4)
      clearTimeout(phase5)
      clearTimeout(completeTimeout)
    }
  }, [onComplete, isMobile])

  // Typewriter effect
  useEffect(() => {
    if (isMobile || phase !== 'terminal') return

    if (lineIndex < terminalTexts.length) {
      const text = terminalTexts[lineIndex]

      if (currentLine.length < text.length) {
        const timeout = setTimeout(() => {
          setCurrentLine(text.slice(0, currentLine.length + 1))
        }, 30 + Math.random() * 20)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setTerminalLines(prev => [...prev, text])
          setCurrentLine('')
          setLineIndex(prev => prev + 1)
        }, 200)
        return () => clearTimeout(timeout)
      }
    }
  }, [phase, lineIndex, currentLine, terminalTexts, isMobile])

  if (isMobile) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
      >
        {/* Phase 1: Terminal */}
        <AnimatePresence>
          {phase === 'terminal' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="font-mono text-sm sm:text-base"
            >
              {terminalLines.map((line, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-cyan-500/60 mb-2"
                >
                  <span className="text-purple-500/60">$</span> {line}
                </motion.div>
              ))}
              {currentLine && (
                <div className="text-cyan-500/60">
                  <span className="text-purple-500/60">$</span> {currentLine}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="inline-block w-2 h-4 bg-cyan-500/60 ml-1"
                  />
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Phase 2-5: Signature with animations */}
        <AnimatePresence>
          {(phase === 'signature' || phase === 'underline' || phase === 'glow' || phase === 'fade') && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center"
            >
              <SignatureSVG 
                showUnderline={phase === 'underline' || phase === 'glow' || phase === 'fade'}
                pulseGlow={phase === 'glow' || phase === 'fade'}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 255, 255, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 255, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
