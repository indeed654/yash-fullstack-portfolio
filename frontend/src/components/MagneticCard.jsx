import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function MagneticCard({ children, className = '' }) {
  const cardRef = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    
    const x = (mouseX - centerX) / centerX
    const y = (mouseY - centerY) / centerY
    
    setPosition({ x, y })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setPosition({ x: 0, y: 0 })
  }

  // Calculate rotation based on mouse position
  const rotateX = position.y * -8 // Max 8 degrees
  const rotateY = position.x * 8 // Max 8 degrees

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        scale: isHovered ? 1.03 : 1,
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        boxShadow: isHovered 
          ? '0 0 25px rgba(0,255,255,0.15), 0 25px 50px rgba(0,0,0,0.3)' 
          : '0 0 0px rgba(0,255,255,0)',
      }}
      transition={{
        scale: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
        rotateX: { duration: 0.2, ease: 'easeOut' },
        rotateY: { duration: 0.2, ease: 'easeOut' },
        boxShadow: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
      }}
      style={{ perspective: '1000px' }}
      className={`${className} transform-gpu`}
    >
      {children}
    </motion.div>
  )
}
