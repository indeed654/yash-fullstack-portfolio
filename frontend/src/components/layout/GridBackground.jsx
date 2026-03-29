import React from 'react'

const GridBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-primary-light" />

      {/* Grid lines */}
      <div className="absolute inset-0 grid-bg opacity-100" />

      {/* Hex pattern */}
      <div className="absolute inset-0 hex-bg opacity-50" />

      {/* Radial glow from center */}
      <div className="absolute inset-0 bg-radial-glow" />

      {/* Corner vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 50%, rgba(5,8,22,0.8) 100%)',
        }}
      />

      {/* Animated vertical data lines */}
      <div className="absolute left-[10%] top-0 w-px h-full opacity-10">
        <div className="w-full h-20 bg-gradient-to-b from-transparent via-cyan to-transparent animate-data-stream" />
      </div>
      <div className="absolute left-[30%] top-0 w-px h-full opacity-10">
        <div
          className="w-full h-32 bg-gradient-to-b from-transparent via-orange to-transparent animate-data-stream"
          style={{ animationDelay: '0.7s' }}
        />
      </div>
      <div className="absolute left-[70%] top-0 w-px h-full opacity-10">
        <div
          className="w-full h-24 bg-gradient-to-b from-transparent via-cyan to-transparent animate-data-stream"
          style={{ animationDelay: '1.4s' }}
        />
      </div>
      <div className="absolute left-[90%] top-0 w-px h-full opacity-10">
        <div
          className="w-full h-16 bg-gradient-to-b from-transparent via-blue-electric to-transparent animate-data-stream"
          style={{ animationDelay: '2.1s' }}
        />
      </div>
    </div>
  )
}

export default GridBackground

