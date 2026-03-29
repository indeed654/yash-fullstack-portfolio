import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const diagnosticLines = [
  { text: '> Initializing JARVIS Core System...', delay: 200, color: 'cyan' },
  { text: '> Loading Neural Network Modules...', delay: 400, color: 'cyan' },
  { text: '> AI Engine: PyTorch v2.1 ................. LOADED', delay: 700, color: 'green' },
  { text: '> ML Pipeline: TensorFlow v2.15 ........... LOADED', delay: 900, color: 'green' },
  { text: '> Computer Vision Module ................... ACTIVE', delay: 1100, color: 'green' },
  { text: '> NLP Processing Core ...................... ACTIVE', delay: 1300, color: 'green' },
  { text: '> IoT Sensor Array ......................... CONNECTED', delay: 1500, color: 'green' },
  { text: '> Scanning Developer Profile...', delay: 1800, color: 'orange' },
  { text: '> Subject: YASH KUMAR SHARMA', delay: 2100, color: 'cyan' },
  { text: '> Classification: AI ENGINEER', delay: 2300, color: 'cyan' },
  { text: '> Threat Level: NONE', delay: 2400, color: 'green' },
  { text: '> Intelligence Level: EXCEPTIONAL', delay: 2600, color: 'orange' },
  { text: '> Running Security Diagnostics ............. PASSED', delay: 2900, color: 'green' },
  { text: '> System Integrity Check ................... 100%', delay: 3100, color: 'green' },
  { text: '', delay: 3300, color: 'cyan' },
  { text: '> JARVIS SYSTEM ONLINE', delay: 3500, color: 'cyan-bright' },
  { text: '> Welcome back, Sir.', delay: 3800, color: 'orange' },
]

const BootScreen = ({ onComplete }) => {
  const [visibleLines, setVisibleLines] = useState([])
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState('booting')
  const [scanProgress, setScanProgress] = useState(0)

  const timersRef = useRef([])
  const completedRef = useRef(false)

  // MAIN BOOT SEQUENCE
  useEffect(() => {
    timersRef.current = []

    diagnosticLines.forEach((line, index) => {
      const t = setTimeout(() => {
        setVisibleLines((prev) => [...prev, line])
        setProgress(((index + 1) / diagnosticLines.length) * 100)
      }, line.delay)
      timersRef.current.push(t)
    })

    timersRef.current.push(
      setTimeout(() => setPhase('scanning'), 1800)
    )

    timersRef.current.push(
      setTimeout(() => setPhase('complete'), 3500)
    )

    // SAFE onComplete trigger (only once)
    timersRef.current.push(
      setTimeout(() => {
        if (!completedRef.current) {
          completedRef.current = true
          onComplete && onComplete()
        }
      }, 4500)
    )

    return () => {
      timersRef.current.forEach(clearTimeout)
    }
  }, [onComplete])

  // SCANNING PROGRESS LOOP
  useEffect(() => {
    if (phase !== 'scanning') return

    let interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 30)

    return () => clearInterval(interval)
  }, [phase])

  const getColorClass = (color) => {
    switch (color) {
      case 'cyan':
        return 'text-cyan/80'
      case 'cyan-bright':
        return 'text-cyan neon-text-cyan font-bold'
      case 'green':
        return 'text-green-400'
      case 'orange':
        return 'text-orange neon-text-orange'
      default:
        return 'text-cyan/80'
    }
  }

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-primary flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.1,
        filter: 'brightness(2)',
        transition: { duration: 0.8 },
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Scan lines */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,245,255,0.1) 2px, rgba(0,245,255,0.1) 4px)',
        }}
      />

      <div className="relative w-full max-w-3xl mx-auto px-6">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="font-orbitron text-5xl md:text-6xl font-bold tracking-[0.3em] neon-text-cyan">
            J.A.R.V.I.S
          </h1>
          <p className="font-mono text-xs text-cyan/40 tracking-[0.5em] mt-4">
            JUST A RATHER VERY INTELLIGENT SYSTEM
          </p>
        </motion.div>

        {/* SCANNING */}
        {phase === 'scanning' && (
          <div className="mb-6 text-center">
            <p className="text-orange text-sm mb-2 tracking-wider">
              SCANNING DEVELOPER PROFILE...
            </p>
            <div className="h-1 bg-primary-light rounded-full overflow-hidden border border-cyan/10">
              <div
                className="h-full bg-gradient-to-r from-cyan to-orange"
                style={{ width: `${scanProgress}%` }}
              />
            </div>
          </div>
        )}

        {/* TERMINAL */}
        <div className="glass rounded-lg p-6 font-mono text-sm max-h-[400px] overflow-hidden relative">
          <div className="space-y-1">
            {visibleLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className={getColorClass(line.color)}
              >
                {line.text}
              </motion.div>
            ))}

            {/* Cursor */}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="inline-block w-2 h-4 bg-cyan ml-1"
            />
          </div>
        </div>

        {/* Progress */}
        <div className="mt-6">
          <div className="flex justify-between text-xs text-cyan/60 mb-1">
            <span>SYSTEM INITIALIZATION</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-1 bg-primary-light rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan to-orange"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

      </div>
    </motion.div>
  )
}

export default BootScreen