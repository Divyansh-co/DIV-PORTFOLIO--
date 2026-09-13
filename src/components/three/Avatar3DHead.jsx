import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/**
 * Procedural 3D Cartoon Avatar Head — Ruchit P. Style
 * Features:
 * - Young male developer with rich dark skin tone & modern black hair
 * - Stylish modern glasses (dark rims, nose bridge, side temples, glossy lenses)
 * - Modern metallic hoop earrings
 * - Expressive cartoon eyes with pupil gaze tracking & periodic eyelid blinks
 * - Pure black lighting with intense red rim highlights (#FF0000)
 * - Smooth idle floating/breathing & slight mouse-follow rotation
 */
export default function Avatar3DHead({ mousePos = { x: 0, y: 0 } }) {
  const avatarGroup = useRef()
  const headGroup = useRef()
  const leftPupil = useRef()
  const rightPupil = useRef()
  const leftEyelid = useRef()
  const rightEyelid = useRef()

  // Materials
  const materials = useMemo(() => {
    return {
      skin: new THREE.MeshStandardMaterial({
        color: '#633A22', // Rich warm dark skin tone
        roughness: 0.5,
        metalness: 0.05,
      }),
      skinShadow: new THREE.MeshStandardMaterial({
        color: '#4B2A16',
        roughness: 0.55,
      }),
      hair: new THREE.MeshStandardMaterial({
        color: '#111114', // Deep black modern hair
        roughness: 0.3,
        metalness: 0.15,
      }),
      hairHighlight: new THREE.MeshStandardMaterial({
        color: '#222228',
        roughness: 0.25,
      }),
      eyeWhite: new THREE.MeshStandardMaterial({
        color: '#F9FAFB',
        roughness: 0.1,
      }),
      iris: new THREE.MeshStandardMaterial({
        color: '#18100B', // Dark pupil
        roughness: 0.1,
      }),
      pupilHighlight: new THREE.MeshBasicMaterial({
        color: '#FFFFFF',
      }),
      eyebrow: new THREE.MeshStandardMaterial({
        color: '#0F0F12',
        roughness: 0.6,
      }),
      lips: new THREE.MeshStandardMaterial({
        color: '#4E2718',
        roughness: 0.45,
      }),
      glassesFrame: new THREE.MeshStandardMaterial({
        color: '#1A1A1E', // Modern black/dark metallic glasses frames
        roughness: 0.2,
        metalness: 0.7,
      }),
      glassesLens: new THREE.MeshPhysicalMaterial({
        color: '#FFFFFF',
        transparent: true,
        opacity: 0.25,
        roughness: 0.05,
        transmission: 0.85,
        reflectivity: 0.9,
      }),
      earring: new THREE.MeshStandardMaterial({
        color: '#E5E7EB', // Silver chrome metallic hoop
        roughness: 0.1,
        metalness: 0.95,
      }),
      hoodie: new THREE.MeshStandardMaterial({
        color: '#0A0A0E', // Deep black hoodie
        roughness: 0.8,
      }),
      hoodieAccent: new THREE.MeshStandardMaterial({
        color: '#FF0000', // Strong red accent
        roughness: 0.3,
        emissive: '#FF0000',
        emissiveIntensity: 0.4,
      }),
    }
  }, [])

  // Geometries
  const geometries = useMemo(() => {
    return {
      head: new THREE.SphereGeometry(1.05, 32, 32),
      jaw: new THREE.CylinderGeometry(0.72, 0.58, 0.7, 32),
      chin: new THREE.SphereGeometry(0.42, 24, 24),
      neck: new THREE.CylinderGeometry(0.42, 0.46, 0.8, 32),
      hoodieCollar: new THREE.TorusGeometry(0.75, 0.24, 16, 36),
      hoodieShoulders: new THREE.CylinderGeometry(1.15, 1.5, 0.9, 32),
      eye: new THREE.SphereGeometry(0.24, 24, 24),
      pupil: new THREE.SphereGeometry(0.13, 20, 20),
      pupilGlint: new THREE.SphereGeometry(0.04, 12, 12),
      eyelid: new THREE.SphereGeometry(0.255, 24, 16, 0, Math.PI * 2, 0, Math.PI * 0.5),
      ear: new THREE.SphereGeometry(0.28, 24, 24),
      earring: new THREE.TorusGeometry(0.1, 0.024, 16, 32),
      noseBridge: new THREE.CylinderGeometry(0.06, 0.11, 0.32, 16),
      noseTip: new THREE.SphereGeometry(0.12, 20, 20),
      nostril: new THREE.SphereGeometry(0.065, 16, 16),
      eyebrow: new THREE.BoxGeometry(0.36, 0.065, 0.09),
      // Glasses geometries
      glassesRim: new THREE.TorusGeometry(0.3, 0.032, 16, 36),
      glassesBridge: new THREE.CylinderGeometry(0.028, 0.028, 0.24, 16),
      glassesTemple: new THREE.CylinderGeometry(0.025, 0.025, 0.95, 16),
      lens: new THREE.CylinderGeometry(0.28, 0.28, 0.015, 32),
    }
  }, [])

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime()

    // Smooth head movement following mouse (subtle & elegant)
    if (headGroup.current) {
      const targetRotY = mousePos.x * 0.45 // Yaw
      const targetRotX = -mousePos.y * 0.28 // Pitch
      const targetRotZ = -mousePos.x * 0.06 // Roll

      headGroup.current.rotation.y = THREE.MathUtils.lerp(headGroup.current.rotation.y, targetRotY, delta * 3.5)
      headGroup.current.rotation.x = THREE.MathUtils.lerp(headGroup.current.rotation.x, targetRotX, delta * 3.5)
      headGroup.current.rotation.z = THREE.MathUtils.lerp(headGroup.current.rotation.z, targetRotZ, delta * 3.5)
    }

    // Smooth idle breathing / floating animation
    if (avatarGroup.current) {
      avatarGroup.current.position.y = Math.sin(t * 1.6) * 0.07 - 0.12
    }

    // Pupils gaze tracking mouse
    const eyeLookX = THREE.MathUtils.clamp(mousePos.x * 0.04, -0.04, 0.04)
    const eyeLookY = THREE.MathUtils.clamp(mousePos.y * 0.035, -0.035, 0.035)

    if (leftPupil.current) {
      leftPupil.current.position.x = -0.34 + eyeLookX
      leftPupil.current.position.y = 0.12 + eyeLookY
    }
    if (rightPupil.current) {
      rightPupil.current.position.x = 0.34 + eyeLookX
      rightPupil.current.position.y = 0.12 + eyeLookY
    }

    // Natural eyelid blink cycle every ~3.8 seconds
    const blinkCycle = (t % 3.8)
    let blinkScaleY = 0.05
    if (blinkCycle > 3.65 && blinkCycle < 3.8) {
      const blinkProgress = Math.sin(((blinkCycle - 3.65) / 0.15) * Math.PI)
      blinkScaleY = 0.05 + blinkProgress * 0.95
    }

    if (leftEyelid.current) leftEyelid.current.scale.y = blinkScaleY
    if (rightEyelid.current) rightEyelid.current.scale.y = blinkScaleY
  })

  return (
    <group ref={avatarGroup} position={[0, -0.15, 0]}>
      {/* Lighting: Pure black contrast with signature strong red rim lights */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 5, 4]} intensity={1.8} color="#FFFFFF" />
      <pointLight position={[-2, 2, 2.5]} intensity={1.5} color="#FFD1BA" />
      {/* Intense Strong Red Rim Light (#FF0000) from behind-left */}
      <pointLight position={[-3.6, 2.2, -1.5]} intensity={5.5} color="#FF0000" />
      {/* Secondary Soft Red Rim Light from behind-right */}
      <pointLight position={[3.6, -1.2, -1.5]} intensity={3.5} color="#E60000" />

      {/* --- BODY / HOODIE BASE --- */}
      <group position={[0, -1.35, 0]}>
        <mesh
          geometry={geometries.neck}
          material={materials.skinShadow}
          position={[0, 0.65, -0.05]}
        />
        <mesh
          geometry={geometries.hoodieCollar}
          material={materials.hoodie}
          position={[0, 0.38, -0.02]}
          rotation={[Math.PI / 2.2, 0, 0]}
        />
        <mesh
          geometry={geometries.hoodieShoulders}
          material={materials.hoodie}
          position={[0, -0.25, -0.05]}
        />
        {/* Red Drawstring Left */}
        <mesh position={[-0.22, 0.08, 0.32]} rotation={[0, 0, 0.1]}>
          <cylinderGeometry args={[0.025, 0.025, 0.45, 12]} />
          <primitive object={materials.hoodieAccent} />
        </mesh>
        {/* Red Drawstring Right */}
        <mesh position={[0.22, 0.08, 0.32]} rotation={[0, 0, -0.1]}>
          <cylinderGeometry args={[0.025, 0.025, 0.45, 12]} />
          <primitive object={materials.hoodieAccent} />
        </mesh>
      </group>

      {/* --- HEAD GROUP --- */}
      <group ref={headGroup} position={[0, 0.2, 0]}>
        {/* Cranium */}
        <mesh
          geometry={geometries.head}
          material={materials.skin}
          position={[0, 0.2, 0]}
          scale={[0.96, 1.05, 0.98]}
        />
        {/* Jaw & Chin */}
        <mesh
          geometry={geometries.jaw}
          material={materials.skin}
          position={[0, -0.32, 0.08]}
          scale={[1.05, 1, 1]}
        />
        <mesh
          geometry={geometries.chin}
          material={materials.skin}
          position={[0, -0.68, 0.35]}
          scale={[1.2, 0.9, 1.1]}
        />

        {/* Cheeks */}
        <mesh position={[-0.55, -0.22, 0.42]} scale={[0.42, 0.38, 0.35]} material={materials.skin}>
          <sphereGeometry args={[1, 20, 20]} />
        </mesh>
        <mesh position={[0.55, -0.22, 0.42]} scale={[0.42, 0.38, 0.35]} material={materials.skin}>
          <sphereGeometry args={[1, 20, 20]} />
        </mesh>

        {/* --- EYES --- */}
        <mesh
          geometry={geometries.eye}
          material={materials.eyeWhite}
          position={[-0.34, 0.12, 0.88]}
          scale={[1.05, 1, 0.8]}
        />
        <group ref={leftPupil} position={[-0.34, 0.12, 0.88]}>
          <mesh geometry={geometries.pupil} material={materials.iris} position={[0, 0, 0.2]} />
          <mesh geometry={geometries.pupilGlint} material={materials.pupilHighlight} position={[0.04, 0.04, 0.3]} />
        </group>
        <mesh
          ref={leftEyelid}
          geometry={geometries.eyelid}
          material={materials.skin}
          position={[-0.34, 0.14, 0.88]}
          scale={[1.08, 0.05, 0.85]}
          rotation={[0.15, 0, 0]}
        />

        <mesh
          geometry={geometries.eye}
          material={materials.eyeWhite}
          position={[0.34, 0.12, 0.88]}
          scale={[1.05, 1, 0.8]}
        />
        <group ref={rightPupil} position={[0.34, 0.12, 0.88]}>
          <mesh geometry={geometries.pupil} material={materials.iris} position={[0, 0, 0.2]} />
          <mesh geometry={geometries.pupilGlint} material={materials.pupilHighlight} position={[0.04, 0.04, 0.3]} />
        </group>
        <mesh
          ref={rightEyelid}
          geometry={geometries.eyelid}
          material={materials.skin}
          position={[0.34, 0.14, 0.88]}
          scale={[1.08, 0.05, 0.85]}
          rotation={[0.15, 0, 0]}
        />

        {/* --- EYEBROWS --- */}
        <mesh
          geometry={geometries.eyebrow}
          material={materials.eyebrow}
          position={[-0.34, 0.44, 0.94]}
          rotation={[0.08, 0.1, 0.08]}
        />
        <mesh
          geometry={geometries.eyebrow}
          material={materials.eyebrow}
          position={[0.34, 0.44, 0.94]}
          rotation={[0.08, -0.1, -0.08]}
        />

        {/* --- NOSE --- */}
        <mesh
          geometry={geometries.noseBridge}
          material={materials.skin}
          position={[0, 0.04, 0.96]}
          rotation={[-0.35, 0, 0]}
        />
        <mesh geometry={geometries.noseTip} material={materials.skin} position={[0, -0.1, 1.05]} />
        <mesh geometry={geometries.nostril} material={materials.skinShadow} position={[-0.09, -0.13, 1.0]} />
        <mesh geometry={geometries.nostril} material={materials.skinShadow} position={[0.09, -0.13, 1.0]} />

        {/* --- MOUTH (Slight friendly smile) --- */}
        <mesh position={[0, -0.38, 0.92]} rotation={[0.12, 0, 0]}>
          <cylinderGeometry args={[0.035, 0.04, 0.32, 16]} />
          <primitive object={materials.lips} />
        </mesh>
        <mesh position={[0, -0.44, 0.91]} scale={[1.2, 0.8, 1]}>
          <sphereGeometry args={[0.09, 16, 16]} />
          <primitive object={materials.lips} />
        </mesh>

        {/* --- STYLISH MODERN GLASSES (Ruchit P. signature) --- */}
        <group position={[0, 0.12, 0.98]}>
          {/* Left Rim Frame */}
          <mesh
            geometry={geometries.glassesRim}
            material={materials.glassesFrame}
            position={[-0.34, 0, 0]}
          />
          {/* Left Lens Glass */}
          <mesh
            geometry={geometries.lens}
            material={materials.glassesLens}
            position={[-0.34, 0, 0]}
            rotation={[Math.PI / 2, 0, 0]}
          />

          {/* Right Rim Frame */}
          <mesh
            geometry={geometries.glassesRim}
            material={materials.glassesFrame}
            position={[0.34, 0, 0]}
          />
          {/* Right Lens Glass */}
          <mesh
            geometry={geometries.lens}
            material={materials.glassesLens}
            position={[0.34, 0, 0]}
            rotation={[Math.PI / 2, 0, 0]}
          />

          {/* Center Nose Bridge */}
          <mesh
            geometry={geometries.glassesBridge}
            material={materials.glassesFrame}
            position={[0, 0.05, 0.02]}
            rotation={[0, 0, Math.PI / 2]}
          />

          {/* Left Temple Arm (towards ear) */}
          <mesh
            geometry={geometries.glassesTemple}
            material={materials.glassesFrame}
            position={[-0.66, 0.02, -0.45]}
            rotation={[Math.PI / 2, 0, -0.22]}
          />
          {/* Right Temple Arm (towards ear) */}
          <mesh
            geometry={geometries.glassesTemple}
            material={materials.glassesFrame}
            position={[0.66, 0.02, -0.45]}
            rotation={[Math.PI / 2, 0, 0.22]}
          />
        </group>

        {/* --- EARS & MODERN METALLIC HOOP EARRINGS --- */}
        {/* Left Ear */}
        <mesh
          geometry={geometries.ear}
          material={materials.skin}
          position={[-1.02, 0.02, 0.05]}
          rotation={[0.15, -0.25, 0.1]}
          scale={[0.4, 0.85, 0.65]}
        />
        {/* Left Ear Modern Metallic Hoop Earring */}
        <mesh
          geometry={geometries.earring}
          material={materials.earring}
          position={[-1.08, -0.18, 0.05]}
          rotation={[0, Math.PI / 2, 0]}
        />

        {/* Right Ear */}
        <mesh
          geometry={geometries.ear}
          material={materials.skin}
          position={[1.02, 0.02, 0.05]}
          rotation={[0.15, 0.25, -0.1]}
          scale={[0.4, 0.85, 0.65]}
        />
        {/* Right Ear Modern Metallic Hoop Earring */}
        <mesh
          geometry={geometries.earring}
          material={materials.earring}
          position={[1.08, -0.18, 0.05]}
          rotation={[0, Math.PI / 2, 0]}
        />

        {/* --- STYLIZED MODERN HAIR --- */}
        <group position={[0, 0.35, -0.05]}>
          <mesh material={materials.hair} position={[0, 0.6, 0.05]} scale={[1.04, 0.72, 1.12]}>
            <sphereGeometry args={[1.02, 28, 28]} />
          </mesh>
          <mesh material={materials.hair} position={[0, 0.76, 0.5]} rotation={[-0.25, 0, 0]} scale={[0.92, 0.46, 0.75]}>
            <sphereGeometry args={[0.8, 24, 24]} />
          </mesh>
          <mesh material={materials.hairHighlight} position={[-0.45, 0.78, 0.32]} scale={[0.45, 0.35, 0.45]}>
            <dodecahedronGeometry args={[0.7, 1]} />
          </mesh>
          <mesh material={materials.hairHighlight} position={[0.1, 0.88, 0.28]} scale={[0.45, 0.32, 0.45]}>
            <dodecahedronGeometry args={[0.7, 1]} />
          </mesh>
          <mesh material={materials.hair} position={[0.48, 0.72, 0.28]} scale={[0.42, 0.32, 0.42]}>
            <dodecahedronGeometry args={[0.7, 1]} />
          </mesh>
          {/* Temples and Back */}
          <mesh material={materials.hair} position={[-0.88, 0.25, 0.22]} scale={[0.3, 0.6, 0.6]}>
            <sphereGeometry args={[0.65, 16, 16]} />
          </mesh>
          <mesh material={materials.hair} position={[0.88, 0.25, 0.22]} scale={[0.3, 0.6, 0.6]}>
            <sphereGeometry args={[0.65, 16, 16]} />
          </mesh>
          <mesh material={materials.hair} position={[0, 0.15, -0.65]} scale={[0.98, 0.95, 0.85]}>
            <sphereGeometry args={[0.95, 24, 24]} />
          </mesh>
        </group>
      </group>
    </group>
  )
}
