import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useMousePosition } from '../../hooks/useMousePosition'

const Cursor = () => {
  const { x, y } = useMousePosition()
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const handleHoverStart = () => setIsHovering(true)
    const handleHoverEnd = () => setIsHovering(false)
    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const interactiveElements = document.querySelectorAll('a, button, [data-cursor-hover]')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleHoverStart)
      el.addEventListener('mouseleave', handleHoverEnd)
    })

    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverStart)
        el.removeEventListener('mouseleave', handleHoverEnd)
      })
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  // Re-register on DOM changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const interactiveElements = document.querySelectorAll('a, button, [data-cursor-hover]')
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => setIsHovering(true))
        el.addEventListener('mouseleave', () => setIsHovering(false))
      })
    })

    observer.observe(document.body, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: x - (isHovering ? 24 : 16),
          y: y - (isHovering ? 24 : 16),
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      >
        <div
          className={`w-full h-full rounded-full border-2 transition-colors duration-200 ${
            isClicking
              ? 'border-orange scale-90'
              : isHovering
              ? 'border-cyan shadow-cyan'
              : 'border-cyan/50'
          }`}
          style={{
            boxShadow: isHovering ? '0 0 20px rgba(0,245,255,0.4)' : 'none',
          }}
        />
        {/* Crosshair lines */}
        {isHovering && (
          <>
            <div className="absolute top-1/2 left-0 w-full h-px bg-cyan/30" />
            <div className="absolute top-0 left-1/2 w-px h-full bg-cyan/30" />
          </>
        )}
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: x - 3,
          y: y - 3,
          scale: isClicking ? 0.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 1000, damping: 28 }}
      >
        <div className="w-1.5 h-1.5 bg-cyan rounded-full shadow-[0_0_10px_#00F5FF]" />
      </motion.div>
    </>
  )
}

export default Cursor

