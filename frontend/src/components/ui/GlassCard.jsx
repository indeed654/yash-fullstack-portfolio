import React from 'react'
import { motion } from 'framer-motion'

const GlassCard = ({
  children,
  className = '',
  hover = true,
  glowColor = 'cyan',
  animate = true,
  delay = 0,
  ...props
}) => {
  const glowStyles = {
    cyan: {
      borderHover: 'hover:border-cyan/40',
      shadow: 'hover:shadow-cyan',
      gradient: 'from-cyan/5',
    },
    orange: {
      borderHover: 'hover:border-orange/40',
      shadow: 'hover:shadow-orange',
      gradient: 'from-orange/5',
    },
    blue: {
      borderHover: 'hover:border-blue-electric/40',
      shadow: 'hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]',
      gradient: 'from-blue-electric/5',
    },
  }

  const glow = glowStyles[glowColor] || glowStyles.cyan

  const Wrapper = animate ? motion.div : 'div'
  const animateProps = animate
    ? {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-100px' },
        transition: { duration: 0.6, delay },
      }
    : {}

  return (
    <Wrapper
      className={`
        glass-card rounded-xl transition-all duration-500
        ${hover ? `${glow.borderHover} ${glow.shadow}` : ''}
        ${className}
      `}
      {...animateProps}
      {...props}
    >
      {children}
    </Wrapper>
  )
}

export default GlassCard

