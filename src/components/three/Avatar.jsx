import { useRef } from 'react'
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

    // Gentle head follows mouse
    const targetRotY = mousePos.current.x * 0.2
    const targetRotX = -mousePos.current.y * 0.12
    headGroup.current.rotation.y = THREE.MathUtils.lerp(headGroup.current.rotation.y, targetRotY, 0.03)
    headGroup.current.rotation.x = THREE.MathUtils.lerp(headGroup.current.rotation.x, targetRotX, 0.03)

    // Pupils track
    if (leftPupil.current && rightPupil.current) {
      const px = mousePos.current.x * 0.05
      const py = mousePos.current.y * 0.03
      leftPupil.current.position.x = -0.22 + px
      leftPupil.current.position.y = 0.08 + py
      rightPupil.current.position.x = 0.22 + px
      rightPupil.current.position.y = 0.08 + py
    }

    // Natural blink
    blinkTimer.current += delta
    if (blinkTimer.current > 4 + Math.random() * 3) {
      blinkTimer.current = 0
    }
    let eyeScale = 1
    if (blinkTimer.current < 0.12) {
      eyeScale = 1 - Math.sin((blinkTimer.current / 0.12) * Math.PI)
    }
    if (leftEyeLid.current) leftEyeLid.current.scale.y = eyeScale
    if (rightEyeLid.current) rightEyeLid.current.scale.y = eyeScale
  })

  const skinColor = '#6B4E2A'
  const skinColorDark = '#5A3F20'
  const hairColor = '#0F0F12'

  return (
    <group ref={headGroup}>
      {/* Head */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.62, 64, 64]} />
        <meshStandardMaterial color={skinColor} roughness={0.65} metalness={0.05} />
      </mesh>

      {/* Jaw */}
      <mesh position={[0, -0.22, 0.12]}>
        <sphereGeometry args={[0.42, 32, 32]} />
        <meshStandardMaterial color={skinColor} roughness={0.65} />
      </mesh>

      {/* Hair – back volume */}
      <mesh position={[0, 0.18, -0.12]}>
        <sphereGeometry args={[0.66, 64, 32, 0, Math.PI * 2, 0, Math.PI * 0.55]} />
        <meshStandardMaterial color={hairColor} roughness={0.95} />
      </mesh>

      {/* Hair – side left */}
      <mesh position={[-0.42, 0.12, 0.05]}>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshStandardMaterial color={hairColor} roughness={0.95} />
      </mesh>

      {/* Hair – side right */}
      <mesh position={[0.42, 0.12, 0.05]}>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshStandardMaterial color={hairColor} roughness={0.95} />
      </mesh>

      {/* Hair – top sweep */}
      <mesh position={[0, 0.5, 0.1]} rotation={[0.3, 0, 0]}>
        <sphereGeometry args={[0.42, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.35]} />
        <meshStandardMaterial color={hairColor} roughness={0.95} />
      </mesh>

      {/* Left eye white */}
      <group ref={leftEyeLid}>
        <mesh position={[-0.22, 0.08, 0.52]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#F0EDE8" roughness={0.3} />
        </mesh>
      </group>

      {/* Right eye white */}
      <group ref={rightEyeLid}>
        <mesh position={[0.22, 0.08, 0.52]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#F0EDE8" roughness={0.3} />
        </mesh>
      </group>

      {/* Pupils */}
      <mesh ref={leftPupil} position={[-0.22, 0.08, 0.6]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="#1A1410" roughness={0.5} />
      </mesh>
      <mesh ref={rightPupil} position={[0.22, 0.08, 0.6]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="#1A1410" roughness={0.5} />
      </mesh>

      {/* Glasses – subtle thin frames */}
      <mesh position={[-0.22, 0.08, 0.56]} rotation={[0, 0, 0]}>
        <torusGeometry args={[0.13, 0.012, 8, 24]} />
        <meshStandardMaterial color="#2A2A2A" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0.22, 0.08, 0.56]}>
        <torusGeometry args={[0.13, 0.012, 8, 24]} />
        <meshStandardMaterial color="#2A2A2A" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Bridge */}
      <mesh position={[0, 0.1, 0.58]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.008, 0.008, 0.1, 8]} />
        <meshStandardMaterial color="#2A2A2A" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Nose */}
      <mesh position={[0, -0.04, 0.58]}>
        <sphereGeometry args={[0.05, 12, 12]} />
        <meshStandardMaterial color={skinColorDark} roughness={0.7} />
      </mesh>

      {/* Subtle mouth line */}
      <mesh position={[0, -0.18, 0.52]} rotation={[0.1, 0, 0]}>
        <torusGeometry args={[0.07, 0.012, 8, 16, Math.PI * 0.6]} />
        <meshStandardMaterial color={skinColorDark} roughness={0.8} />
      </mesh>

      {/* Ears */}
      <mesh position={[-0.56, 0, 0.08]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshStandardMaterial color={skinColor} roughness={0.7} />
      </mesh>
      <mesh position={[0.56, 0, 0.08]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshStandardMaterial color={skinColor} roughness={0.7} />
      </mesh>

      {/* Eyebrows */}
      <mesh position={[-0.22, 0.22, 0.52]} rotation={[0, 0, 0.1]}>
        <boxGeometry args={[0.18, 0.025, 0.04]} />
        <meshStandardMaterial color={hairColor} roughness={0.9} />
      </mesh>
      <mesh position={[0.22, 0.22, 0.52]} rotation={[0, 0, -0.1]}>
        <boxGeometry args={[0.18, 0.025, 0.04]} />
        <meshStandardMaterial color={hairColor} roughness={0.9} />
      </mesh>
    </group>
  )
}

function AvatarBody() {
  const bodyRef = useRef()

  useFrame((state) => {
    if (!bodyRef.current) return
    const t = state.clock.elapsedTime
    // Subtle breathing only
    bodyRef.current.scale.x = 1 + Math.sin(t * 1.2) * 0.006
    bodyRef.current.scale.z = 1 + Math.sin(t * 1.2) * 0.006
  })

  const skinColor = '#6B4E2A'
  const shirtColor = '#1A1418' // Dark turtleneck

  return (
    <group ref={bodyRef}>
      {/* Neck */}
      <mesh position={[0, -0.42, 0]}>
        <cylinderGeometry args={[0.14, 0.16, 0.2, 16]} />
        <meshStandardMaterial color={skinColor} roughness={0.65} />
      </mesh>

      {/* Turtleneck collar */}
      <mesh position={[0, -0.38, 0]}>
        <cylinderGeometry args={[0.17, 0.17, 0.14, 16]} />
        <meshStandardMaterial color={shirtColor} roughness={0.85} />
      </mesh>

      {/* Torso */}
      <mesh position={[0, -1.1, 0]}>
        <cylinderGeometry args={[0.52, 0.42, 1.2, 20]} />
        <meshStandardMaterial color={shirtColor} roughness={0.85} />
      </mesh>

      {/* Shoulders */}
      <mesh position={[0, -0.6, 0]}>
        <sphereGeometry args={[0.55, 20, 20]} />
        <meshStandardMaterial color={shirtColor} roughness={0.85} />
      </mesh>

      {/* Left arm */}
      <group position={[-0.65, -0.85, 0]}>
        <mesh rotation={[0, 0, 0.12]}>
          <capsuleGeometry args={[0.1, 0.55, 8, 16]} />
          <meshStandardMaterial color={shirtColor} roughness={0.85} />
        </mesh>
        <mesh position={[-0.06, -0.42, 0]}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshStandardMaterial color={skinColor} roughness={0.65} />
        </mesh>
      </group>

      {/* Right arm */}
      <group position={[0.65, -0.85, 0]}>
        <mesh rotation={[0, 0, -0.12]}>
          <capsuleGeometry args={[0.1, 0.55, 8, 16]} />
          <meshStandardMaterial color={shirtColor} roughness={0.85} />
        </mesh>
        <mesh position={[0.06, -0.42, 0]}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshStandardMaterial color={skinColor} roughness={0.65} />
        </mesh>
      </group>
    </group>
  )
}

export default function Avatar({ mousePos }) {
  const groupRef = useRef()

  useFrame((state) => {
    if (!groupRef.current) return
    const t = state.clock.elapsedTime
    // Very subtle idle sway
    groupRef.current.position.y = Math.sin(t * 0.6) * 0.03 + 0.3
    groupRef.current.rotation.z = Math.sin(t * 0.4) * 0.008
  })

  return (
    <group ref={groupRef} position={[0, 0.3, 0]}>
      {/* Refined rim lighting – warm tones */}
      <spotLight
        position={[-3, 2, -1]}
        angle={0.5}
        penumbra={0.9}
        intensity={1.5}
        color="#5C3A5C"
      />
      <spotLight
        position={[3, 2, -1]}
        angle={0.5}
        penumbra={0.9}
        intensity={1.2}
        color="#C45C26"
      />
      <spotLight
        position={[0, -1.5, 3]}
        angle={0.6}
        penumbra={1}
        intensity={0.8}
        color="#F5F5F4"
      />

      <AvatarHead mousePos={mousePos} />
      <AvatarBody />
    </group>
  )
}
