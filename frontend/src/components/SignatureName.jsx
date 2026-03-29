import { motion } from 'framer-motion'

export default function SignatureName() {
  // Elegant handwritten-style SVG paths for "Yash Kumar Sharma"
  // Using thin strokes with subtle glow
  
  return (
    <div className="relative flex flex-col items-center justify-center">
      <svg
        viewBox="0 0 400 120"
        className="w-72 sm:w-96 lg:w-[500px] h-auto"
        style={{ overflow: 'visible' }}
      >
        <defs>
          {/* Subtle cyan glow filter */}
          <filter id="signatureGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="1" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* Yash */}
        <motion.path
          d="M30 35 C45 25, 55 20, 75 25 C95 30, 100 45, 90 60 C80 75, 55 70, 50 55 C45 40, 55 30, 70 40"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#signatureGlow)"
          initial={{ strokeDasharray: 300, strokeDashoffset: 300 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
        
        {/* a */}
        <motion.path
          d="M95 45 C110 35, 125 40, 120 55 C115 70, 95 65, 90 55 C85 45, 95 40, 105 45"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#signatureGlow)"
          initial={{ strokeDasharray: 200, strokeDashoffset: 200 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 0.6, delay: 1.0, ease: 'easeInOut' }}
        />
        
        {/* s */}
        <motion.path
          d="M125 45 C140 40, 145 50, 135 60 C125 70, 115 65, 120 55"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#signatureGlow)"
          initial={{ strokeDasharray: 150, strokeDashoffset: 150 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 0.5, delay: 1.4, ease: 'easeInOut' }}
        />
        
        {/* h */}
        <motion.path
          d="M145 30 L145 65 M145 50 C145 40, 160 35, 165 50 C170 65, 160 60, 155 50"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#signatureGlow)"
          initial={{ strokeDasharray: 250, strokeDashoffset: 250 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 0.8, delay: 1.6, ease: 'easeInOut' }}
        />
        
        {/* Space */}
        
        {/* K */}
        <motion.path
          d="M190 30 L190 65 M190 48 L215 30 L215 65"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#signatureGlow)"
          initial={{ strokeDasharray: 300, strokeDashoffset: 300 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 0.8, delay: 1.8, ease: 'easeInOut' }}
        />
        
        {/* u */}
        <motion.path
          d="M230 35 C230 50, 240 60, 250 60 C260 60, 265 50, 265 35"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#signatureGlow)"
          initial={{ strokeDasharray: 200, strokeDashoffset: 200 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 0.6, delay: 2.2, ease: 'easeInOut' }}
        />
        
        {/* m */}
        <motion.path
          d="M280 40 L280 60 M280 50 C280 38, 295 35, 300 50 C305 65, 295 60, 290 50 M300 50 C300 38, 315 35, 320 50 C325 65, 315 60, 310 50"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#signatureGlow)"
          initial={{ strokeDasharray: 400, strokeDashoffset: 400 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 1.0, delay: 2.5, ease: 'easeInOut' }}
        />
        
        {/* a */}
        <motion.path
          d="M335 45 C350 35, 365 40, 360 55 C355 70, 335 65, 330 55 C325 45, 335 40, 345 45"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#signatureGlow)"
          initial={{ strokeDasharray: 200, strokeDashoffset: 200 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 0.6, delay: 3.0, ease: 'easeInOut' }}
        />
        
        {/* r */}
        <motion.path
          d="M365 40 L365 60 M365 50 C365 42, 375 38, 380 45"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#signatureGlow)"
          initial={{ strokeDasharray: 150, strokeDashoffset: 150 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 0.4, delay: 3.4, ease: 'easeInOut' }}
        />
        
        {/* Space */}
        
        {/* S */}
        <motion.path
          d="M30 85 C50 75, 60 85, 50 100 C40 115, 20 105, 30 95"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#signatureGlow)"
          initial={{ strokeDasharray: 200, strokeDashoffset: 200 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 0.8, delay: 3.6, ease: 'easeInOut' }}
        />
        
        {/* h */}
        <motion.path
          d="M55 70 L55 105 M55 90 C55 80, 70 75, 75 90 C80 105, 70 100, 65 90"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#signatureGlow)"
          initial={{ strokeDasharray: 250, strokeDashoffset: 250 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 0.8, delay: 4.0, ease: 'easeInOut' }}
        />
        
        {/* a */}
        <motion.path
          d="M90 85 C105 75, 120 80, 115 95 C110 110, 90 105, 85 95 C80 85, 90 80, 100 85"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#signatureGlow)"
          initial={{ strokeDasharray: 200, strokeDashoffset: 200 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 0.6, delay: 4.4, ease: 'easeInOut' }}
        />
        
        {/* r */}
        <motion.path
          d="M120 80 L120 100 M120 90 C120 82, 130 78, 135 85"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#signatureGlow)"
          initial={{ strokeDasharray: 150, strokeDashoffset: 150 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 0.4, delay: 4.8, ease: 'easeInOut' }}
        />
        
        {/* m */}
        <motion.path
          d="M145 80 L145 100 M145 90 C145 78, 160 75, 165 90 C170 105, 160 100, 155 90 M165 90 C165 78, 180 75, 185 90 C190 105, 180 100, 175 90"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#signatureGlow)"
          initial={{ strokeDasharray: 400, strokeDashoffset: 400 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 1.0, delay: 5.0, ease: 'easeInOut' }}
        />
        
        {/* a */}
        <motion.path
          d="M200 85 C215 75, 230 80, 225 95 C220 110, 200 105, 195 95 C190 85, 200 80, 210 85"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#signatureGlow)"
          initial={{ strokeDasharray: 200, strokeDashoffset: 200 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 0.6, delay: 5.5, ease: 'easeInOut' }}
        />
      </svg>
      
      {/* Underline - animates after name */}
      <motion.div
        className="absolute bottom-2 left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: '70%', opacity: 1 }}
        transition={{ duration: 0.8, delay: 5.8, ease: 'easeOut' }}
      />
      
      {/* Subtle glow pulse after animation completes */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.3, 0] }}
        transition={{ duration: 1.5, delay: 6.5, repeat: 0 }}
        style={{
          filter: 'blur(20px)',
          background: 'radial-gradient(circle, rgba(0,255,255,0.15) 0%, transparent 70%)',
        }}
      />
    </div>
  )
}
