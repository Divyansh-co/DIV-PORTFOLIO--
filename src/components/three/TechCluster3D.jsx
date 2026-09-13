import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/**
 * TechCluster3D — Floating Tech & Coding 3D Illustration
 * Features:
 * - Glossy sleek floating workstation laptop
 * - Orbiting inflated 3D code symbols & tech geometry
 * - Slow idle bobbing animation (~3.5-5s loop)
 * - Gentle mouse reactivity
 */
export default function TechCluster3D({ mousePos = { x: 0, y: 0 } }) {
  const mainGroup = useRef()
  const laptopGroup = useRef()
  const badge1 = useRef()
  const badge2 = useRef()
  const badge3 = useRef()
  const sphereNode = useRef()

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime()

    // Smooth idle bobbing loop
    if (mainGroup.current) {
      mainGroup.current.position.y = Math.sin(t * 1.4) * 0.12
      
      // Gentle mouse tracking tilt
      const targetRotY = mousePos.x * 0.35
      const targetRotX = -mousePos.y * 0.25
      mainGroup.current.rotation.y = THREE.MathUtils.lerp(mainGroup.current.rotation.y, targetRotY, delta * 3)
      mainGroup.current.rotation.x = THREE.MathUtils.lerp(mainGroup.current.rotation.x, targetRotX, delta * 3)
    }

    // Individual orbiting/floating elements with independent delays
    if (badge1.current) {
      badge1.current.position.y = 1.35 + Math.sin(t * 1.8 + 0.4) * 0.08
      badge1.current.rotation.y += delta * 0.4
    }
    if (badge2.current) {
      badge2.current.position.y = -0.95 + Math.sin(t * 1.5 + 1.2) * 0.09
      badge2.current.rotation.z += delta * 0.35
    }
    if (badge3.current) {
      badge3.current.position.y = 0.5 + Math.sin(t * 2.0 + 2.0) * 0.07
      badge3.current.rotation.x += delta * 0.45
    }
    if (sphereNode.current) {
      sphereNode.current.position.y = -0.4 + Math.sin(t * 1.6 + 2.8) * 0.08
    }
  })

  return (
    <group ref={mainGroup} position={[0, -0.1, 0]}>
      {/* Lighting for glossy inflated tech aesthetic */}
      <ambientLight intensity={1.0} />
      <directionalLight position={[5, 6, 5]} intensity={1.8} color="#FFFFFF" />
      {/* Purple & Pink Rim Lights */}
      <pointLight position={[-4, 2, 2]} intensity={3.5} color="#8B5CF6" />
      <pointLight position={[4, -2, 2]} intensity={3.0} color="#EC4899" />
      <pointLight position={[0, 4, -2]} intensity={2.5} color="#F97316" />

      {/* --- FLOATING WORKSTATION LAPTOP --- */}
      <group ref={laptopGroup} rotation={[0.2, -0.35, 0.08]} scale={1.15}>
        {/* Base Chassis */}
        <mesh position={[0, -0.05, 0]}>
          <boxGeometry args={[2.5, 0.08, 1.7]} />
          <meshStandardMaterial color="#181820" roughness={0.25} metalness={0.8} />
        </mesh>

        {/* Keyboard Well */}
        <mesh position={[0, -0.005, 0.15]}>
          <boxGeometry args={[2.2, 0.02, 1.1]} />
          <meshStandardMaterial color="#0e0e12" roughness={0.6} />
        </mesh>

        {/* Trackpad */}
        <mesh position={[0, -0.004, 0.95]}>
          <boxGeometry args={[0.7, 0.015, 0.45]} />
          <meshStandardMaterial color="#22222a" roughness={0.3} metalness={0.5} />
        </mesh>

        {/* Screen Lid (Opened at ~110 degrees) */}
        <group position={[0, 0, -0.85]} rotation={[-0.45, 0, 0]}>
          {/* Back Lid */}
          <mesh position={[0, 0.85, 0]}>
            <boxGeometry args={[2.5, 1.7, 0.07]} />
            <meshStandardMaterial color="#181820" roughness={0.25} metalness={0.85} />
          </mesh>

          {/* Screen Display Glass */}
          <mesh position={[0, 0.85, 0.04]}>
            <planeGeometry args={[2.36, 1.56]} />
            <meshStandardMaterial
              color="#09090D"
              roughness={0.15}
              metalness={0.1}
              emissive="#120D1D"
              emissiveIntensity={0.6}
            />
          </mesh>

          {/* Glowing Code / UI Lines on Screen */}
          <mesh position={[-0.3, 1.1, 0.045]}>
            <planeGeometry args={[1.4, 0.08]} />
            <meshBasicMaterial color="#EC4899" />
          </mesh>
          <mesh position={[-0.1, 0.9, 0.045]}>
            <planeGeometry args={[1.8, 0.07]} />
            <meshBasicMaterial color="#8B5CF6" />
          </mesh>
          <mesh position={[-0.2, 0.72, 0.045]}>
            <planeGeometry args={[1.6, 0.07]} />
            <meshBasicMaterial color="#F97316" />
          </mesh>
          <mesh position={[-0.4, 0.54, 0.045]}>
            <planeGeometry args={[1.2, 0.07]} />
            <meshBasicMaterial color="#10B981" />
          </mesh>
        </group>
      </group>

      {/* --- INFLATED 3D TECH ACCESSORIES (Purple, Pink, Orange) --- */}

      {/* 1. Glossy Inflated Torus (Purple) */}
      <mesh ref={badge1} position={[-2.2, 1.35, 0.6]} scale={0.65}>
        <torusGeometry args={[0.65, 0.28, 24, 48]} />
        <meshStandardMaterial
          color="#8B5CF6"
          roughness={0.12}
          metalness={0.35}
          emissive="#8B5CF6"
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* 2. Glossy Inflated Heart / Blob (Hot Pink) */}
      <mesh ref={badge2} position={[2.3, -0.95, 0.8]} scale={0.7}>
        <dodecahedronGeometry args={[0.7, 1]} />
        <meshStandardMaterial
          color="#EC4899"
          roughness={0.15}
          metalness={0.4}
          emissive="#EC4899"
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* 3. Glossy Inflated Capsule (Orange) */}
      <mesh ref={badge3} position={[2.1, 1.2, -0.5]} scale={0.6} rotation={[0.4, 0.5, 0.8]}>
        <cylinderGeometry args={[0.3, 0.3, 0.9, 24]} />
        <meshStandardMaterial
          color="#F97316"
          roughness={0.15}
          metalness={0.35}
          emissive="#F97316"
          emissiveIntensity={0.35}
        />
      </mesh>

      {/* 4. Glossy Inflated Sphere (Cyan / Emerald) */}
      <mesh ref={sphereNode} position={[-1.9, -0.9, -0.4]} scale={0.5}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial
          color="#06B6D4"
          roughness={0.12}
          metalness={0.45}
          emissive="#06B6D4"
          emissiveIntensity={0.35}
        />
      </mesh>
    </group>
  )
}
