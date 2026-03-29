import { motion } from 'framer-motion'

const ScannerRing = ({ className = '', size = 400, isActive = true }) => {
  return (
    <motion.div
      className={`absolute inset-0 rounded-full border-2 border-cyan-500/30 ${className}`}
      style={{ 
        width: size, 
        height: size,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        boxShadow: '0 0 50px rgba(0, 245, 255, 0.4)'
      }}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={isActive ? { 
        scale: [1, 1.3, 1],
        opacity: [0.6, 0.3, 0.6],
        rotate: '360deg'
      } : { scale: 0, opacity: 0 }}
      transition={{
        scale: { duration: 4, repeat: Infinity, ease: 'linear' },
        opacity: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
        rotate: { duration: 20, repeat: Infinity, ease: 'linear' }
      }}
    />
  )
}

export default ScannerRing

