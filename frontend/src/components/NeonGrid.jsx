import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function GridFloor() {
  const meshRef = useRef()
  const materialRef = useRef()
  
  // Create grid geometry
  const gridSize = 100
  const gridDivisions = 50
  
  // Animate the grid
  useFrame((state) => {
    if (meshRef.current) {
      // Subtle forward movement
      meshRef.current.position.z = (state.clock.elapsedTime * 0.5) % 2
    }
  })

  return (
    <group position={[0, -3, 5]}>
      {/* Main grid */}
      <gridHelper
        ref={meshRef}
        args={[gridSize, gridDivisions, '#00ffff', '#00ffff']}
      />
      
      {/* Secondary glow effect */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
        <planeGeometry args={[gridSize, gridSize]} />
        <meshBasicMaterial
          color="#00ffff"
          transparent
          opacity={0.02}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  )
}

function FloatingParticles() {
  const particlesRef = useRef()
  
  const particleCount = 100
  
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 50
      pos[i * 3 + 1] = Math.random() * 10 - 2
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30
    }
    return pos
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#00ffff"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  )
}

export default function NeonGrid() {
  // Check if mobile to disable heavy effects
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  
  if (isMobile) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{
          position: [0, 2, 8],
          fov: 60,
          near: 0.1,
          far: 100,
        }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        {/* Ambient light */}
        <ambientLight intensity={0.2} />
        
        {/* Grid floor */}
        <GridFloor />
        
        {/* Floating particles */}
        <FloatingParticles />
      </Canvas>
    </div>
  )
}
