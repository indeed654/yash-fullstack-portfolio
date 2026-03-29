import { motion } from 'framer-motion'

export default function SignatureSVG({ showUnderline = false, pulseGlow = false }) {
  // Full name paths for "Yash Kumar Sharma"
  // Each letter stroke animated separately for signing effect
  
  const letterDelays = {
    Y: 0,
    a: 0.15,
    s: 0.25,
    h: 0.35,
    K: 0.5,
    u: 0.65,
    m: 0.75,
    a2: 0.9, // second 'a'
    r: 1.05,
    S: 1.2,
    h2: 1.35, // second 'h'
    a3: 1.5, // third 'a'
    r2: 1.65,
    m2: 1.8,
    a4: 1.95 // fourth 'a'
  }

  const underlineDelay = 2.2

  return (
    <div className="relative flex flex-col items-center">
      <svg
        viewBox="0 0 320 80"
        className="w-72 sm:w-80 lg:w-96 h-auto"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <filter id="signatureGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="signatureGlowPulse" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Y */}
        <motion.path
          d="M25 15 L40 40 L55 15 M40 15 L40 40"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter={pulseGlow ? "url(#signatureGlowPulse)" : "url(#signatureGlow)"}
          initial={{ strokeDasharray: 200, strokeDashoffset: 200 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 0.4, delay: letterDelays.Y, ease: [0.65, 0, 0.35, 1] }}
        />

        {/* a */}
        <motion.path
          d="M65 25 C75 20, 85 25, 85 35 C85 45, 75 45, 70 40 C65 35, 65 30, 70 30 C75 30, 78 32, 78 35 C78 40, 70 42, 65 40"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter={pulseGlow ? "url(#signatureGlowPulse)" : "url(#signatureGlow)"}
          initial={{ strokeDasharray: 150, strokeDashoffset: 150 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 0.4, delay: letterDelays.a, ease: [0.65, 0, 0.35, 1] }}
        />

        {/* s */}
        <motion.path
          d="M95 28 C105 23, 110 30, 105 38 C100 45, 90 42, 88 35 C86 28, 95 25, 100 30"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter={pulseGlow ? "url(#signatureGlowPulse)" : "url(#signatureGlow)"}
          initial={{ strokeDasharray: 120, strokeDashoffset: 120 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 0.4, delay: letterDelays.s, ease: [0.65, 0, 0.35, 1] }}
        />

        {/* h */}
        <motion.path
          d="M115 15 L115 40 C115 48, 125 48, 130 40 C132 35, 130 30, 125 30"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter={pulseGlow ? "url(#signatureGlowPulse)" : "url(#signatureGlow)"}
          initial={{ strokeDasharray: 150, strokeDashoffset: 150 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 0.4, delay: letterDelays.h, ease: [0.65, 0, 0.35, 1] }}
        />

        {/* K */}
        <motion.path
          d="M145 15 L145 45 M145 32 L170 15 L170 45"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter={pulseGlow ? "url(#signatureGlowPulse)" : "url(#signatureGlow)"}
          initial={{ strokeDasharray: 200, strokeDashoffset: 200 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 0.4, delay: letterDelays.K, ease: [0.65, 0, 0.35, 1] }}
        />

        {/* u */}
        <motion.path
          d="M180 15 L180 35 C180 43, 190 43, 195 35 C198 30, 195 28, 190 28"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter={pulseGlow ? "url(#signatureGlowPulse)" : "url(#signatureGlow)"}
          initial={{ strokeDasharray: 120, strokeDashoffset: 120 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 0.4, delay: letterDelays.u, ease: [0.65, 0, 0.35, 1] }}
        />

        {/* m */}
        <motion.path
          d="M205 15 L205 35 C205 43, 215 43, 220 35 C225 30, 222 28, 217 28 C222 28, 225 30, 225 35 L225 15 M230 15 L230 35 C230 43, 240 43, 245 35 C250 30, 247 28, 242 28"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter={pulseGlow ? "url(#signatureGlowPulse)" : "url(#signatureGlow)"}
          initial={{ strokeDasharray: 300, strokeDashoffset: 300 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 0.5, delay: letterDelays.m, ease: [0.65, 0, 0.35, 1] }}
        />

        {/* a (second) */}
        <motion.path
          d="M20 55 C30 50, 40 55, 40 65 C40 75, 30 75, 25 70 C20 65, 20 60, 25 60 C30 60, 33 62, 33 65 C33 70, 25 72, 20 70"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter={pulseGlow ? "url(#signatureGlowPulse)" : "url(#signatureGlow)"}
          initial={{ strokeDasharray: 150, strokeDashoffset: 150 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 0.4, delay: letterDelays.a2, ease: [0.65, 0, 0.35, 1] }}
        />

        {/* r */}
        <motion.path
          d="M50 52 L50 70 M50 58 C55 55, 60 55, 62 60"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter={pulseGlow ? "url(#signatureGlowPulse)" : "url(#signatureGlow)"}
          initial={{ strokeDasharray: 100, strokeDashoffset: 100 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 0.3, delay: letterDelays.r, ease: [0.65, 0, 0.35, 1] }}
        />

        {/* S */}
        <motion.path
          d="M80 60 C90 55, 95 62, 90 70 C85 78, 75 75, 73 68 C71 62, 78 58, 85 62"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter={pulseGlow ? "url(#signatureGlowPulse)" : "url(#signatureGlow)"}
          initial={{ strokeDasharray: 120, strokeDashoffset: 120 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 0.4, delay: letterDelays.S, ease: [0.65, 0, 0.35, 1] }}
        />

        {/* h (second) */}
        <motion.path
          d="M105 50 L105 75 C105 83, 115 83, 120 75 C122 70, 120 65, 115 65"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter={pulseGlow ? "url(#signatureGlowPulse)" : "url(#signatureGlow)"}
          initial={{ strokeDasharray: 150, strokeDashoffset: 150 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 0.4, delay: letterDelays.h2, ease: [0.65, 0, 0.35, 1] }}
        />

        {/* a (third) */}
        <motion.path
          d="M140 60 C150 55, 160 60, 160 70 C160 80, 150 80, 145 75 C140 70, 140 65, 145 65 C150 65, 153 67, 153 70 C153 75, 145 77, 140 75"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter={pulseGlow ? "url(#signatureGlowPulse)" : "url(#signatureGlow)"}
          initial={{ strokeDasharray: 150, strokeDashoffset: 150 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 0.4, delay: letterDelays.a3, ease: [0.65, 0, 0.35, 1] }}
        />

        {/* r (second) */}
        <motion.path
          d="M170 57 L170 75 M170 63 C175 60, 180 60, 182 65"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter={pulseGlow ? "url(#signatureGlowPulse)" : "url(#signatureGlow)"}
          initial={{ strokeDasharray: 100, strokeDashoffset: 100 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 0.3, delay: letterDelays.r2, ease: [0.65, 0, 0.35, 1] }}
        />

        {/* m (second) */}
        <motion.path
          d="M195 55 L195 75 C195 83, 205 83, 210 75 C215 70, 212 68, 207 68 C212 68, 215 70, 215 75 L215 55 M220 55 L220 75 C220 83, 230 83, 235 75 C240 70, 237 68, 232 68"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter={pulseGlow ? "url(#signatureGlowPulse)" : "url(#signatureGlow)"}
          initial={{ strokeDasharray: 300, strokeDashoffset: 300 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 0.5, delay: letterDelays.m2, ease: [0.65, 0, 0.35, 1] }}
        />

        {/* a (fourth) */}
        <motion.path
          d="M245 60 C255 55, 265 60, 265 70 C265 80, 255 80, 250 75 C245 70, 245 65, 250 65 C255 65, 258 67, 258 70 C258 75, 250 77, 245 75"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter={pulseGlow ? "url(#signatureGlowPulse)" : "url(#signatureGlow)"}
          initial={{ strokeDasharray: 150, strokeDashoffset: 150 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 0.4, delay: letterDelays.a4, ease: [0.65, 0, 0.35, 1] }}
        />
      </svg>

      {/* Underline */}
      {showUnderline && (
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ 
            width: '85%', 
            opacity: pulseGlow ? 0.8 : 1,
            boxShadow: pulseGlow 
              ? '0 0 20px #00ffff, 0 0 40px #00ffff, 0 0 60px #00ffff'
              : '0 0 10px #00ffff, 0 0 20px #00ffff'
          }}
          transition={{ duration: 0.6, delay: underlineDelay, ease: [0.65, 0, 0.35, 1] }}
          className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mt-1"
        />
      )}
    </div>
  )
}
