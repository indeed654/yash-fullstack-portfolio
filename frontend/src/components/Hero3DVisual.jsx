import { useRef, useMemo, memo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

// Neural Network Particle Cluster
function ParticleCluster({ count = 200 }) {
  const meshRef = useRef()
  
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const sizes = new Float32Array(count)
    
    const colorPalette = [
      new THREE.Color('#a855f7'), // Purple
      new THREE.Color('#3b82f6'), // Blue
      new THREE.Color('#06b6d4'), // Cyan
    ]
    
    for (let i = 0; i < count; i++) {
      // Create a spherical distribution
      const radius = 2 + Math.random() * 1.5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)
      
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)]
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
      
      sizes[i] = Math.random() * 0.03 + 0.01
    }
    
    return { positions, colors, sizes }
  }, [count])
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.05
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
  })
  
  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particles.colors.length / 3}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

// Glass Torus Ring
function GlassTorus({ radius = 1.8, tube = 0.02 }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })
  
  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[radius, tube, 16, 100]} />
      <meshPhysicalMaterial
        color="#a855f7"
        transparent
        opacity={0.15}
        roughness={0.1}
        metalness={0.1}
        transmission={0.9}
        thickness={0.5}
        envMapIntensity={1}
        clearcoat={1}
        clearcoatRoughness={0.1}
      />
    </mesh>
  )
}

// Abstract Futuristic Mesh
function AbstractMesh() {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.08
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.05
    }
  })
  
  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.5, 1]} />
      <meshPhysicalMaterial
        color="#3b82f6"
        wireframe
        transparent
        opacity={0.2}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  )
}

// Main 3D Scene
function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#a855f7" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#06b6d4" />
      
      <Float
        speed={1.5}
        rotationIntensity={0.2}
        floatIntensity={0.3}
      >
        <ParticleCluster count={150} />
      </Float>
      
      <Float
        speed={1}
        rotationIntensity={0.3}
        floatIntensity={0.2}
      >
        <GlassTorus radius={2} tube={0.015} />
      </Float>
      
      <Float
        speed={0.8}
        rotationIntensity={0.1}
        floatIntensity={0.4}
      >
        <AbstractMesh />
      </Float>
    </>
  )
}

// Main Hero3DVisual Component with Canvas
const Hero3DVisual = memo(function Hero3DVisual({ isVisible = true }) {
  return (
    <div 
      className="absolute inset-0 pointer-events-none z-0"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
      >
        <Scene />
      </Canvas>
    </div>
  )
})

export default Hero3DVisual

