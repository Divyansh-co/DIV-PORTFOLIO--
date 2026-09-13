import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function AvatarHead({ mousePos }) {
  const headGroup = useRef()
  const leftPupil = useRef()
  const rightPupil = useRef()
  const leftEyeLid = useRef()
  const rightEyeLid = useRef()
  const blinkTimer = useRef(0)

  useFrame((state, delta) => {
    if (!headGroup.current) return

    // Head follows mouse
    const targetRotY = mousePos.current.x * 0.3
    const targetRotX = -mousePos.current.y * 0.2
    headGroup.current.rotation.y = THREE.MathUtils.lerp(headGroup.current.rotation.y, targetRotY, 0.05)
    headGroup.current.rotation.x = THREE.MathUtils.lerp(headGroup.current.rotation.x, targetRotX, 0.05)

    // Pupils track mouse
    if (leftPupil.current && rightPupil.current) {
      const px = mousePos.current.x * 0.06
      const py = mousePos.current.y * 0.04
      leftPupil.current.position.x = -0.22 + px
      leftPupil.current.position.y = 0.08 + py
      rightPupil.current.position.x = 0.22 + px
      rightPupil.current.position.y = 0.08 + py
    }

    // Blinking
    blinkTimer.current += delta
    if (blinkTimer.current > 3.5 + Math.random() * 2) {
      blinkTimer.current = 0
    }
    const blinkPhase = blinkTimer.current
    let eyeScale = 1
    if (blinkPhase < 0.15) {
      eyeScale = 1 - Math.sin((blinkPhase / 0.15) * Math.PI)
    }

    if (leftEyeLid.current) leftEyeLid.current.scale.y = eyeScale
    if (rightEyeLid.current) rightEyeLid.current.scale.y = eyeScale
  })

  const skinColor = '#8B6914'
  const skinColorDark = '#6B4F10'

  return (
    <group ref={headGroup}>
      {/* Head - rounded box shape */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.65, 32, 32]} />
        <meshStandardMaterial color={skinColor} roughness={0.7} />
      </mesh>

      {/* Jaw/chin area */}
      <mesh position={[0, -0.25, 0.15]}>
        <sphereGeometry args={[0.45, 16, 16]} />
        <meshStandardMaterial color={skinColor} roughness={0.7} />
      </mesh>

      {/* Hair - back */}
      <mesh position={[0, 0.2, -0.15]}>
        <sphereGeometry args={[0.68, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.6]} />
        <meshStandardMaterial color="#1a1a2e" roughness={0.9} />
      </mesh>

      {/* Hair - front/bangs */}
      <mesh position={[0, 0.45, 0.35]} rotation={[0.5, 0, 0]}>
        <boxGeometry args={[0.85, 0.15, 0.4]} />
        <meshStandardMaterial color="#1a1a2e" roughness={0.9} />
      </mesh>

      {/* Cap - main dome */}
      <mesh position={[0, 0.42, 0]} rotation={[-0.15, 0, 0]}>
        <sphereGeometry args={[0.7, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.45]} />
        <meshStandardMaterial color="#e8e8e8" roughness={0.4} metalness={0.1} />
      </mesh>

      {/* Cap - brim */}
      <mesh position={[0, 0.35, 0.45]} rotation={[-0.3, 0, 0]}>
        <cylinderGeometry args={[0.55, 0.6, 0.06, 32, 1, false, -Math.PI * 0.5, Math.PI]} />
        <meshStandardMaterial color="#e8e8e8" roughness={0.4} metalness={0.1} />
      </mesh>

      {/* Cap underside (purple) */}
      <mesh position={[0, 0.32, 0.45]} rotation={[-0.3, 0, 0]}>
        <cylinderGeometry args={[0.53, 0.58, 0.03, 32, 1, false, -Math.PI * 0.5, Math.PI]} />
        <meshStandardMaterial color="#7c3aed" roughness={0.5} />
      </mesh>

      {/* Left eye white */}
      <group ref={leftEyeLid}>
        <mesh position={[-0.22, 0.08, 0.55]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="white" roughness={0.3} />
        </mesh>
      </group>

      {/* Right eye white */}
      <group ref={rightEyeLid}>
        <mesh position={[0.22, 0.08, 0.55]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="white" roughness={0.3} />
        </mesh>
      </group>

      {/* Left pupil */}
      <mesh ref={leftPupil} position={[-0.22, 0.08, 0.65]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial color="#1a1a2e" roughness={0.5} />
      </mesh>

      {/* Right pupil */}
      <mesh ref={rightPupil} position={[0.22, 0.08, 0.65]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial color="#1a1a2e" roughness={0.5} />
      </mesh>

      {/* Nose */}
      <mesh position={[0, -0.05, 0.6]}>
        <sphereGeometry args={[0.06, 8, 8]} />
        <meshStandardMaterial color={skinColorDark} roughness={0.7} />
      </mesh>

      {/* Mouth - slight smile */}
      <mesh position={[0, -0.2, 0.55]} rotation={[0, 0, 0]}>
        <torusGeometry args={[0.1, 0.02, 8, 16, Math.PI]} />
        <meshStandardMaterial color="#8B4513" roughness={0.8} />
      </mesh>

      {/* Ears */}
      <mesh position={[-0.6, 0, 0.1]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshStandardMaterial color={skinColor} roughness={0.7} />
      </mesh>
      <mesh position={[0.6, 0, 0.1]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshStandardMaterial color={skinColor} roughness={0.7} />
      </mesh>
    </group>
  )
}

function AvatarBody() {
  const bodyRef = useRef()

  useFrame((state) => {
    if (!bodyRef.current) return
    // Subtle breathing animation
    const t = state.clock.elapsedTime
    bodyRef.current.scale.x = 1 + Math.sin(t * 1.5) * 0.01
    bodyRef.current.scale.z = 1 + Math.sin(t * 1.5) * 0.01
  })

  return (
    <group ref={bodyRef}>
      {/* Torso - dark t-shirt */}
      <mesh position={[0, -1.2, 0]}>
        <cylinderGeometry args={[0.55, 0.45, 1.2, 16]} />
        <meshStandardMaterial color="#1a1a2e" roughness={0.8} />
      </mesh>

      {/* Shoulders - wider top */}
      <mesh position={[0, -0.7, 0]}>
        <sphereGeometry args={[0.6, 16, 16]} />
        <meshStandardMaterial color="#1a1a2e" roughness={0.8} />
      </mesh>

      {/* Left arm */}
      <group position={[-0.7, -0.9, 0]}>
        <mesh rotation={[0, 0, 0.15]}>
          <capsuleGeometry args={[0.12, 0.6, 8, 16]} />
          <meshStandardMaterial color="#1a1a2e" roughness={0.8} />
        </mesh>
        {/* Hand */}
        <mesh position={[-0.08, -0.45, 0]}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshStandardMaterial color="#8B6914" roughness={0.7} />
        </mesh>
      </group>

      {/* Right arm */}
      <group position={[0.7, -0.9, 0]}>
        <mesh rotation={[0, 0, -0.15]}>
          <capsuleGeometry args={[0.12, 0.6, 8, 16]} />
          <meshStandardMaterial color="#1a1a2e" roughness={0.8} />
        </mesh>
        {/* Hand */}
        <mesh position={[0.08, -0.45, 0]}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshStandardMaterial color="#8B6914" roughness={0.7} />
        </mesh>
      </group>

      {/* Neck */}
      <mesh position={[0, -0.45, 0]}>
        <cylinderGeometry args={[0.15, 0.18, 0.2, 16]} />
        <meshStandardMaterial color="#8B6914" roughness={0.7} />
      </mesh>
    </group>
  )
}

export default function Avatar({ mousePos }) {
  const groupRef = useRef()

  useFrame((state) => {
    if (!groupRef.current) return
    // Idle sway
    const t = state.clock.elapsedTime
    groupRef.current.position.y = Math.sin(t * 0.8) * 0.05
    groupRef.current.rotation.z = Math.sin(t * 0.5) * 0.02
  })

  return (
    <group ref={groupRef} position={[0, 0.3, 0]}>
      {/* Rim lighting */}
      <spotLight
        position={[-3, 2, -1]}
        angle={0.5}
        penumbra={0.8}
        intensity={2}
        color="#00e5ff"
      />
      <spotLight
        position={[3, 2, -1]}
        angle={0.5}
        penumbra={0.8}
        intensity={1.5}
        color="#a855f7"
      />
      <spotLight
        position={[0, -2, 3]}
        angle={0.6}
        penumbra={1}
        intensity={1}
        color="#ec4899"
      />

      <AvatarHead mousePos={mousePos} />
      <AvatarBody />
    </group>
  )
}
