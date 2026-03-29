import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Glass Torus Ring Component
function GlassTorus({ position, scale, rotationSpeed }) {
  const meshRef = useRef()
  
  const geometry = useMemo(() => {
    return new THREE.TorusGeometry(1, 0.3, 32, 100)
  }, [])

  const material = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: 0x3a86ff,
      transmission: 0.9,
      opacity: 0.8,
      metalness: 0,
      roughness: 0.1,
      thickness: 0.5,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
      envMapIntensity: 1,
      transparent: true,
      side: THREE.DoubleSide,
    })
  }, [])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotationSpeed.x
      meshRef.current.rotation.y += rotationSpeed.y
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      material={material}
      position={position}
      scale={scale}
    />
  )
}

// Floating Layered Panels
function LayeredPanels() {
  const groupRef = useRef()
  
  const panels = useMemo(() => {
    return Array.from({ length: 5 }, (_, i) => ({
      position: [0, i * 0.15 - 0.3, i * 0.1],
      scale: 1 - i * 0.1,
      rotationY: i * 0.2,
    }))
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {panels.map((panel, i) => (
        <mesh key={i} position={panel.position} scale={panel.scale}>
          <planeGeometry args={[2, 2]} />
          <meshPhysicalMaterial
            color={0xff4ecd}
            transmission={0.6}
            roughness={0.2}
            thickness={0.3}
            transparent
            opacity={0.4 - i * 0.05}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  )
}

// Main 3D Scene
function Scene() {
  return (
    <>
      {/* Lighting Setup */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} color={0xffffff} />
      <pointLight position={[-5, 5, 0]} intensity={0.3} color={0x3a86ff} />
      <pointLight position={[5, -5, 0]} intensity={0.2} color={0xff4ecd} />
      
      {/* Subtle top light beam */}
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.2}
        color={0x00f5d4}
      />

      {/* Glass Torus Ring */}
      <GlassTorus 
        position={[0, 0, -2]} 
        scale={1.5} 
        rotationSpeed={{ x: 0.002, y: 0.003 }}
      />
      
      {/* Second smaller torus */}
      <GlassTorus 
        position={[1.5, 0.5, -3]} 
        scale={0.8} 
        rotationSpeed={{ x: 0.003, y: -0.002 }}
      />

      {/* Layered Panels */}
      <LayeredPanels />
    </>
  )
}

// Main Component with Mobile Detection
export default function FuturisticStructure() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (isMobile) return null

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.15 }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, 2]}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance'
        }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
