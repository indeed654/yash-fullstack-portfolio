import { motion } from 'framer-motion'

const HudStatusBar = ({ label, value, color = '#00F5FF' }) => {
  return (
    <motion.div 
      className="flex items-center gap-3 text-sm"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="w-24 font-mono text-xs uppercase opacity-70" style={{ color: 'rgba(255,255,255,0.5)' }}>
        {label}
      </div>
      <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
        <motion.div 
          className="h-full rounded-full"
          style={{ 
            background: `linear-gradient(90deg, ${color}, #FF6B00)`,
            boxShadow: `0 0 10px ${color}`
          }}
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      </div>
      <span className="font-mono text-xs opacity-80" style={{ color }}>{value}%</span>
    </motion.div>
  )
}

export default HudStatusBar

