import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import FuturisticStructure from './FuturisticStructure'

export default function UltraHero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Futuristic 3D Structure - Behind hero */}
      <FuturisticStructure />
      
      {/* Layer 1: Gradient Mesh Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 20% 80%, rgba(255, 78, 205, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 20%, rgba(58, 134, 255, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 50%, rgba(0, 245, 212, 0.08) 0%, transparent 60%)
            `,
          }}
        />
      </div>

      {/* Layer 2: Floating Color Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(255, 78, 205, 0.4) 0%, transparent 70%)',
            top: '10%',
            left: '5%',
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full blur-[150px]"
          style={{
            background: 'radial-gradient(circle, rgba(58, 134, 255, 0.3) 0%, transparent 70%)',
            bottom: '5%',
            right: '5%',
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute w-64 h-64 rounded-full blur-[100px]"
          style={{
            background: 'radial-gradient(circle, rgba(0, 245, 212, 0.25) 0%, transparent 70%)',
            top: '40%',
            right: '30%',
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Layer 4: Animated Name */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
          animate={{ 
            opacity: isLoaded ? 1 : 0, 
            scale: isLoaded ? 1 : 1.1,
            filter: isLoaded ? 'blur(0px)' : 'blur(10px)',
          }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              letterSpacing: '-1px',
              lineHeight: 1.1,
              background: 'linear-gradient(90deg, #ff4ecd, #3a86ff, #00f5d4)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'gradientShift 6s linear infinite',
            }}
          >
            Yash Kumar Sharma
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-xl sm:text-2xl md:text-3xl mt-6 font-medium"
          style={{
            color: 'rgba(255, 255, 255, 0.7)',
            fontFamily: "'Inter', sans-serif",
          }}
        >
          AI & Full-Stack Engineer
        </motion.p>

        {/* Tagline */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="text-lg sm:text-xl mt-4 max-w-2xl mx-auto"
          style={{
            color: 'rgba(255, 255, 255, 0.5)',
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Engineering Intelligent Systems That Think Beyond Code.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 2.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <motion.a 
            href="#projects"
            className="px-8 py-3.5 rounded-xl font-semibold text-white relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #ff4ecd 0%, #3a86ff 100%)',
              boxShadow: '0 4px 30px rgba(255, 78, 205, 0.3)',
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">View My Work</span>
          </motion.a>
          
          <motion.a 
            href="#contact"
            className="px-8 py-3.5 rounded-xl font-semibold transition-all duration-300"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: 'rgba(255, 255, 255, 0.8)',
            }}
            whileHover={{ scale: 1.02, background: 'rgba(255, 255, 255, 0.1)' }}
            whileTap={{ scale: 0.98 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="flex justify-center mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span style={{ color: 'rgba(255, 255, 255, 0.3)', fontSize: '12px' }}>SCROLL</span>
            <svg className="w-5 h-5" style={{ color: 'rgba(255, 255, 255, 0.3)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
