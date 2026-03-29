import { useRef, useMemo, memo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

// Optimized Particle System (low count for perf)
function JarvisParticles({ count = 150 }) {
  const meshRef = useRef()

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const sizes = new Float32Array(count)

    // JARVIS color palette: cyan, orange, blue
    const colorPalette = [
      new THREE.Color('#00F5FF'), // cyan
      new THREE.Color('#FF6B00'), // orange
      new THREE.Color('#1E90FF'), // blue
    ]

    for (let i = 0; i < count; i++) {
      // Wide spherical distribution for ambient fill
      const radius = 4 + Math.random() * 3
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      positions[i * 3]     = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.5 // flatten Y
      positions[i * 3 + 2] = radius * Math.cos(phi)

      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)]
      colors[i * 3]     = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b

      sizes[i] = Math.random() * 0.025 + 0.008 // small sizes
    }

    return { positions, colors, sizes }
  }, [count])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.03 // slow
    }
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particles.positions.length / 3} array={particles.positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={particles.colors.length / 3} array={particles.colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

// Holographic Rotating Sphere (wireframe glow)
function HolographicSphere() {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <Float speed={0.8} rotationIntensity={0.4} floatIntensity={0.2}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2.5, 1]} />
        <meshBasicMaterial 
          color="#00F5FF" 
          wireframe 
          transparent 
          opacity={0.3} 
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </Float>
  )
}

// Animated Grid Lines (JARVIS scan grid)
function GridLines() {
  const linesRef = useRef()

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.z = state.clock.elapsedTime * 0.05
    }
  })

  const points = []
  for (let i = -5; i <= 5; i += 0.5) {
    points.push(new THREE.Vector3(i, -5, 0), new THREE.Vector3(i, 5, 0))
    points.push(new THREE.Vector3(-5, i, 0), new THREE.Vector3(5, i, 0))
  }

  return (
    <lineSegments ref={linesRef} position={[0, 0, -2]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length}
          array={new Float32Array(points.flatMap(p => [p.x, p.y, p.z]))}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#00F5FF" transparent opacity={0.2} />
    </lineSegments>
  )
}

// Pulsing Data Nodes
function DataNodes({ count = 12 }) {
  const groupRef = useRef()
  const timeRef = useRef(0)

  useFrame((state) => {
    timeRef.current += 0.02
    if (groupRef.current) {
      groupRef.current.children.forEach((node, i) => {
        if (node) {
          const scale = 1 + Math.sin(timeRef.current + i) * 0.3
          node.scale.setScalar(scale)
        }
      })
    }
  })

  return (
    <group ref={groupRef}>
      {Array.from({ length: count }).map((_, i) => {
        const angle = (i / count) * Math.PI * 2
        const radius = 3
        return (
          <mesh key={i} position={[Math.cos(angle) * radius, Math.sin(angle) * radius, 0]}>
            <sphereGeometry args={[0.08, 8, 8]} />
            <meshBasicMaterial color="#FF6B00" transparent opacity={0.6} />
          </mesh>
        )
      })}
    </group>
  )
}

// Main JARVIS Scene
function JarvisScene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 5]} intensity={0.4} color="#00F5FF" />
      <pointLight position={[-10, 5, -5]} intensity={0.3} color="#FF6B00" />
      
      <JarvisParticles />
      <HolographicSphere />
      <GridLines />
      <DataNodes />
    </>
  )
}

const JarvisBackground = memo(function JarvisBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 70 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: false }} // perf
      >
        <JarvisScene />
      </Canvas>
    </div>
  )
})

export default JarvisBackground

