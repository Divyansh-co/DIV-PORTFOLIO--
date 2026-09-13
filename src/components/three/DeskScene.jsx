import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Desk() {
  return (
    <group position={[0, -1.5, 0]}>
      {/* Desktop surface */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3, 0.08, 1.5]} />
        <meshStandardMaterial color="#1a1a2e" roughness={0.3} metalness={0.5} />
      </mesh>
      {/* Legs */}
      {[[-1.3, -0.6, 0.5], [1.3, -0.6, 0.5], [-1.3, -0.6, -0.5], [1.3, -0.6, -0.5]].map((pos, i) => (
        <mesh key={i} position={pos}>
          <cylinderGeometry args={[0.04, 0.04, 1.2, 8]} />
          <meshStandardMaterial color="#2a2a3e" roughness={0.5} metalness={0.7} />
        </mesh>
      ))}
    </group>
  )
}

function Monitor() {
  const glowRef = useRef()

  useFrame((state) => {
    if (glowRef.current) {
      glowRef.current.intensity = 1.5 + Math.sin(state.clock.elapsedTime * 2) * 0.3
    }
  })

  return (
    <group position={[0, -0.6, -0.3]}>
      {/* Screen bezel */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.6, 1, 0.05]} />
        <meshStandardMaterial color="#0a0a1a" roughness={0.3} metalness={0.8} />
      </mesh>
      {/* Screen */}
      <mesh position={[0, 0.02, 0.03]}>
        <planeGeometry args={[1.45, 0.85]} />
        <meshStandardMaterial
          color="#1a0a2e"
          emissive="#ec4899"
          emissiveIntensity={0.3}
        />
      </mesh>
      {/* Code lines on screen */}
      {[0.25, 0.15, 0.05, -0.05, -0.15, -0.25].map((y, i) => (
        <mesh key={i} position={[-0.15 + (i % 3) * 0.1, y, 0.035]}>
          <planeGeometry args={[0.4 + Math.random() * 0.4, 0.04]} />
          <meshBasicMaterial
            color={i % 2 === 0 ? '#00e5ff' : '#a855f7'}
            transparent
            opacity={0.5}
          />
        </mesh>
      ))}
      {/* Monitor stand */}
      <mesh position={[0, -0.6, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.4, 8]} />
        <meshStandardMaterial color="#2a2a3e" metalness={0.8} />
      </mesh>
      <mesh position={[0, -0.8, 0.1]}>
        <cylinderGeometry args={[0.2, 0.25, 0.03, 16]} />
        <meshStandardMaterial color="#2a2a3e" metalness={0.8} />
      </mesh>
      {/* Screen glow */}
      <pointLight ref={glowRef} position={[0, 0, 0.5]} color="#ec4899" intensity={1.5} distance={3} />
    </group>
  )
}

function Keyboard() {
  return (
    <group position={[0, -1.4, 0.3]}>
      <mesh>
        <boxGeometry args={[0.8, 0.03, 0.3]} />
        <meshStandardMaterial color="#1e1e32" roughness={0.4} metalness={0.6} />
      </mesh>
      {/* Key rows */}
      {[-0.08, 0, 0.08].map((z, row) => (
        Array.from({ length: 8 }).map((_, col) => (
          <mesh key={`${row}-${col}`} position={[-0.3 + col * 0.085, 0.02, z]}>
            <boxGeometry args={[0.06, 0.02, 0.06]} />
            <meshStandardMaterial color="#2a2a4e" roughness={0.5} />
          </mesh>
        ))
      ))}
    </group>
  )
}

function SeatedAvatar() {
  const leftArm = useRef()
  const rightArm = useRef()

  useFrame((state) => {
    const t = state.clock.elapsedTime
    // Typing animation
    if (leftArm.current) {
      leftArm.current.rotation.x = -0.8 + Math.sin(t * 5) * 0.08
    }
    if (rightArm.current) {
      rightArm.current.rotation.x = -0.8 + Math.sin(t * 5 + Math.PI) * 0.08
    }
  })

  const skinColor = '#8B6914'

  return (
    <group position={[0, -0.3, 0.5]}>
      {/* Head */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial color={skinColor} roughness={0.7} />
      </mesh>
      {/* Cap */}
      <mesh position={[0, 0.22, 0]} rotation={[-0.15, 0, 0]}>
        <sphereGeometry args={[0.38, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.45]} />
        <meshStandardMaterial color="#e8e8e8" roughness={0.4} />
      </mesh>
      {/* Eyes */}
      <mesh position={[-0.12, 0.04, 0.3]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh position={[0.12, 0.04, 0.3]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh position={[-0.12, 0.04, 0.34]}>
        <sphereGeometry args={[0.025, 8, 8]} />
        <meshStandardMaterial color="#1a1a2e" />
      </mesh>
      <mesh position={[0.12, 0.04, 0.34]}>
        <sphereGeometry args={[0.025, 8, 8]} />
        <meshStandardMaterial color="#1a1a2e" />
      </mesh>
      {/* Body */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.3, 0.25, 0.7, 16]} />
        <meshStandardMaterial color="#1a1a2e" roughness={0.8} />
      </mesh>
      {/* Arms */}
      <group ref={leftArm} position={[-0.35, -0.4, 0]}>
        <mesh rotation={[-0.8, 0, 0.2]}>
          <capsuleGeometry args={[0.07, 0.4, 4, 8]} />
          <meshStandardMaterial color="#1a1a2e" roughness={0.8} />
        </mesh>
      </group>
      <group ref={rightArm} position={[0.35, -0.4, 0]}>
        <mesh rotation={[-0.8, 0, -0.2]}>
          <capsuleGeometry args={[0.07, 0.4, 4, 8]} />
          <meshStandardMaterial color="#1a1a2e" roughness={0.8} />
        </mesh>
      </group>
    </group>
  )
}

export default function DeskScene() {
  const groupRef = useRef()

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1 - 0.3
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={1.3}>
      <ambientLight intensity={0.15} />
      <pointLight position={[2, 3, 2]} intensity={0.5} color="#ffffff" />
      <spotLight
        position={[-2, 3, 1]}
        angle={0.4}
        penumbra={0.8}
        intensity={1}
        color="#00e5ff"
      />
      <Monitor />
      <Desk />
      <Keyboard />
      <SeatedAvatar />
    </group>
  )
}
