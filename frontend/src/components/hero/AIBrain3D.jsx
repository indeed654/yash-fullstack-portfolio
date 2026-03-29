import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, Sphere, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function NeuralCore() {
  const meshRef = useRef()
  const wireframeRef = useRef()

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.rotation.y = time * 0.15
      meshRef.current.rotation.x = Math.sin(time * 0.1) * 0.1
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.y = -time * 0.1
      wireframeRef.current.rotation.z = time * 0.05
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group>
        {/* Core sphere */}
        <Sphere ref={meshRef} args={[1.5, 64, 64]}>
          <MeshDistortMaterial
            color="#00F5FF"
            emissive="#00F5FF"
            emissiveIntensity={0.15}
            roughness={0.1}
            metalness={0.8}
            distort={0.3}
            speed={2}
            transparent
            opacity={0.3}
          />
        </Sphere>

        {/* Wireframe shell */}
        <Sphere ref={wireframeRef} args={[1.8, 32, 32]}>
          <meshBasicMaterial
            color="#00F5FF"
            wireframe
            transparent
            opacity={0.08}
          />
        </Sphere>

        {/* Inner glow */}
        <Sphere args={[0.8, 32, 32]}>
          <meshBasicMaterial
            color="#FF6B00"
            transparent
            opacity={0.2}
          />
        </Sphere>

        {/* Orbiting rings */}
        <OrbitingRing radius={2.2} color="#00F5FF" speed={1} tilt={Math.PI / 3} />
        <OrbitingRing radius={2.5} color="#FF6B00" speed={-0.7} tilt={Math.PI / 5} />
        <OrbitingRing radius={2.8} color="#1E3A8A" speed={0.5} tilt={Math.PI / 2.5} />

        {/* Data nodes */}
        <DataNodes count={40} radius={2} />
      </group>
    </Float>
  )
}

function OrbitingRing({ radius, color, speed, tilt }) {
  const ringRef = useRef()

  const ringGeometry = useMemo(() => {
    const curve = new THREE.EllipseCurve(0, 0, radius, radius, 0, 2 * Math.PI, false, 0)
    const points = curve.getPoints(100)
    return new THREE.BufferGeometry().setFromPoints(
      points.map((p) => new THREE.Vector3(p.x, 0, p.y))
    )
  }, [radius])

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.y = state.clock.getElapsedTime() * speed
    }
  })

  return (
    <group ref={ringRef} rotation={[tilt, 0, 0]}>
      <line geometry={ringGeometry}>
        <lineBasicMaterial color={color} transparent opacity={0.2} />
      </line>
      {/* Node on ring */}
      <mesh position={[radius, 0, 0]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </group>
  )
}

function DataNodes({ count, radius }) {
  const nodesRef = useRef()

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      const r = radius + (Math.random() - 0.5) * 0.5

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)
    }
    return pos
  }, [count, radius])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (nodesRef.current) {
      nodesRef.current.rotation.y = time * 0.05
    }
  })

  return (
    <points ref={nodesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#00F5FF"
        size={0.04}
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

const AIBrain3D = () => {
  return (
    <div className="absolute inset-0 z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 5, 5]} intensity={0.5} color="#00F5FF" />
        <pointLight position={[-5, -5, -5]} intensity={0.3} color="#FF6B00" />

        <NeuralCore />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  )
}

export default AIBrain3D

