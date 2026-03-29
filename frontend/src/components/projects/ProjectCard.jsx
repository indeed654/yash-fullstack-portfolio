import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const ProjectCard = ({ project, index, onClick }) => {
  const cardRef = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['12deg', '-12deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-12deg', '12deg'])

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) / rect.width)
    y.set((e.clientY - centerY) / rect.height)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className="cursor-pointer group"
      data-cursor-hover
    >
      <div
        className="relative glass-card rounded-xl overflow-hidden transition-all duration-500 group-hover:shadow-cyan-lg"
        style={{ transform: 'translateZ(0)' }}
      >
        {/* Top accent line */}
        <div
          className="h-1 w-full"
          style={{
            background: `linear-gradient(to right, transparent, ${project.color}, transparent)`,
          }}
        />

        {/* Content */}
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{
                    backgroundColor: project.color,
                    boxShadow: `0 0 8px ${project.color}`,
                  }}
                />
                <span className="font-mono text-[10px] tracking-wider" style={{ color: project.color }}>
                  {project.category}
                </span>
              </div>
              <h3 className="font-orbitron text-lg font-bold text-white group-hover:text-cyan transition-colors duration-300">
                {project.title}
              </h3>
            </div>

            {/* Status */}
            <span className="px-2 py-1 rounded text-[10px] font-mono border border-green-400/20 text-green-400 bg-green-400/5">
              {project.status}
            </span>
          </div>

          {/* Subtitle */}
          <p className="font-rajdhani text-sm text-white/40 mb-4">
            {project.subtitle}
          </p>

          {/* Description preview */}
          <p className="font-rajdhani text-sm text-white/30 mb-6 line-clamp-3">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-[10px] font-mono rounded border"
                style={{
                  borderColor: `${project.color}30`,
                  color: `${project.color}aa`,
                  backgroundColor: `${project.color}08`,
                }}
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span
                className="px-2 py-0.5 text-[10px] font-mono rounded border border-white/10 text-white/30"
              >
                +{project.techStack.length - 4}
              </span>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center gap-2 pt-4 border-t border-white/5">
            <span className="font-mono text-[10px] text-cyan/50 tracking-wider group-hover:text-cyan transition-colors">
              VIEW DETAILS →
            </span>
          </div>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 rounded border border-white/10 hover:border-cyan/30 transition-colors"
            >
              <svg
                className="w-4 h-4 text-white/40 hover:text-cyan transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          )}
        </div>

        {/* Hover glow overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${project.color}08 0%, transparent 70%)`,
          }}
        />

        {/* HUD Corners */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 rounded-tl opacity-0 group-hover:opacity-100 transition-opacity" style={{ borderColor: project.color }} />
        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 rounded-tr opacity-0 group-hover:opacity-100 transition-opacity" style={{ borderColor: project.color }} />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 rounded-bl opacity-0 group-hover:opacity-100 transition-opacity" style={{ borderColor: project.color }} />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 rounded-br opacity-0 group-hover:opacity-100 transition-opacity" style={{ borderColor: project.color }} />
      </div>
    </motion.div>
  )
}

export default ProjectCard

