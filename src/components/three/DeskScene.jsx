import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

function Desk() {
  return (
    <group position={[0, -1.5, 0]}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3, 0.07, 1.4]} />
        <meshStandardMaterial color="#1A1418" roughness={0.3} metalness={0.6} />
      </mesh>
      {[[-1.3, -0.6, 0.5], [1.3, -0.6, 0.5], [-1.3, -0.6, -0.5], [1.3, -0.6, -0.5]].map((pos, i) => (
        <mesh key={i} position={pos}>
          <cylinderGeometry args={[0.035, 0.035, 1.1, 8]} />
          <meshStandardMaterial color="#2A2428" roughness={0.4} metalness={0.7} />
        </mesh>
      ))}
    </group>
  )
}

function Monitor() {
  const glowRef = useRef()

  useFrame((state) => {
    if (glowRef.current) {
      glowRef.current.intensity = 1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.2
    }
  })

  return (
    <group position={[0, -0.6, -0.3]}>
      <mesh>
        <boxGeometry args={[1.5, 0.95, 0.04]} />
        <meshStandardMaterial color="#0A0A0B" roughness={0.2} metalness={0.9} />
      </mesh>
      <mesh position={[0, 0.02, 0.025]}>
        <planeGeometry args={[1.38, 0.82]} />
        <meshStandardMaterial color="#16120F" emissive="#C45C26" emissiveIntensity={0.15} />
      </mesh>
      {[0.24, 0.14, 0.04, -0.06, -0.16, -0.26].map((y, i) => (
        <mesh key={i} position={[-0.12 + (i % 3) * 0.08, y, 0.03]}>
          <planeGeometry args={[0.35 + Math.random() * 0.35, 0.035]} />
          <meshBasicMaterial
            color={i % 2 === 0 ? '#C45C26' : '#5C3A5C'}
            transparent opacity={0.35}
          />
        </mesh>
      ))}
      <mesh position={[0, -0.58, 0]}>
        <cylinderGeometry args={[0.035, 0.035, 0.35, 8]} />
        <meshStandardMaterial color="#2A2428" metalness={0.8} />
      </mesh>
      <mesh position={[0, -0.76, 0.08]}>
        <cylinderGeometry args={[0.18, 0.22, 0.025, 16]} />
        <meshStandardMaterial color="#2A2428" metalness={0.8} />
      </mesh>
      <pointLight ref={glowRef} position={[0, 0, 0.5]} color="#C45C26" intensity={1} distance={2.5} />
    </group>
  )
}

function Keyboard() {
  return (
    <group position={[0, -1.4, 0.3]}>
      <mesh>
        <boxGeometry args={[0.75, 0.025, 0.28]} />
        <meshStandardMaterial color="#1A1418" roughness={0.3} metalness={0.7} />
      </mesh>
      {[-0.07, 0, 0.07].map((z, row) => (
        Array.from({ length: 8 }).map((_, col) => (
          <mesh key={`${row}-${col}`} position={[-0.28 + col * 0.08, 0.018, z]}>
            <boxGeometry args={[0.055, 0.016, 0.055]} />
            <meshStandardMaterial color="#2A2428" roughness={0.5} />
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
    if (leftArm.current) leftArm.current.rotation.x = -0.8 + Math.sin(t * 4) * 0.06
    if (rightArm.current) rightArm.current.rotation.x = -0.8 + Math.sin(t * 4 + Math.PI) * 0.06
  })

  const skinColor = '#6B4E2A'

  return (
    <group position={[0, -0.3, 0.5]}>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.32, 32, 32]} />
        <meshStandardMaterial color={skinColor} roughness={0.65} />
      </mesh>
      {/* Hair */}
      <mesh position={[0, 0.2, -0.05]}>
        <sphereGeometry args={[0.34, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
        <meshStandardMaterial color="#0F0F12" roughness={0.95} />
      </mesh>
      {/* Eyes */}
      <mesh position={[-0.1, 0.04, 0.28]}>
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshStandardMaterial color="#F0EDE8" />
      </mesh>
      <mesh position={[0.1, 0.04, 0.28]}>
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshStandardMaterial color="#F0EDE8" />
      </mesh>
      <mesh position={[-0.1, 0.04, 0.31]}>
        <sphereGeometry args={[0.02, 8, 8]} />
        <meshStandardMaterial color="#1A1410" />
      </mesh>
      <mesh position={[0.1, 0.04, 0.31]}>
        <sphereGeometry args={[0.02, 8, 8]} />
        <meshStandardMaterial color="#1A1410" />
      </mesh>
      {/* Body */}
      <mesh position={[0, -0.48, 0]}>
        <cylinderGeometry args={[0.28, 0.22, 0.65, 16]} />
        <meshStandardMaterial color="#1A1418" roughness={0.85} />
      </mesh>
      {/* Arms */}
      <group ref={leftArm} position={[-0.32, -0.38, 0]}>
        <mesh rotation={[-0.8, 0, 0.15]}>
          <capsuleGeometry args={[0.06, 0.35, 4, 8]} />
          <meshStandardMaterial color="#1A1418" roughness={0.85} />
        </mesh>
      </group>
      <group ref={rightArm} position={[0.32, -0.38, 0]}>
        <mesh rotation={[-0.8, 0, -0.15]}>
          <capsuleGeometry args={[0.06, 0.35, 4, 8]} />
          <meshStandardMaterial color="#1A1418" roughness={0.85} />
        </mesh>
      </group>
    </group>
  )
}

export default function DeskScene() {
  const groupRef = useRef()

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.08 - 0.25
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={1.3}>
      <ambientLight intensity={0.12} />
      <pointLight position={[2, 3, 2]} intensity={0.4} color="#F5F5F4" />
      <spotLight position={[-2, 3, 1]} angle={0.4} penumbra={0.9} intensity={0.8} color="#5C3A5C" />
      <Monitor />
      <Desk />
      <Keyboard />
      <SeatedAvatar />
    </group>
  )
}
