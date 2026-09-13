import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Helper to create a smooth 3D Heart geometry
function createHeartGeometry() {
  const shape = new THREE.Shape()
  const x = 0, y = 0
  shape.moveTo(x + 0.25, y + 0.25)
  shape.bezierCurveTo(x + 0.25, y + 0.25, x + 0.2, y, x, y)
  shape.bezierCurveTo(x - 0.3, y, x - 0.3, y + 0.35, x - 0.3, y + 0.35)
  shape.bezierCurveTo(x - 0.3, y + 0.55, x - 0.1, y + 0.77, x + 0.25, y + 0.95)
  shape.bezierCurveTo(x + 0.6, y + 0.77, x + 0.8, y + 0.55, x + 0.8, y + 0.35)
  shape.bezierCurveTo(x + 0.8, y + 0.35, x + 0.8, y, x + 0.5, y)
  shape.bezierCurveTo(x + 0.35, y, x + 0.25, y + 0.25, x + 0.25, y + 0.25)

  const extrudeSettings = {
    depth: 0.25,
    bevelEnabled: true,
    bevelSegments: 6,
    steps: 1,
    bevelSize: 0.08,
    bevelThickness: 0.08,
  }
  const geom = new THREE.ExtrudeGeometry(shape, extrudeSettings)
  geom.center()
  geom.scale(0.8, 0.8, 0.8)
  geom.rotateZ(Math.PI)
  return geom
}

// Helper to create a stylized 5-petal flower geometry
function createFlowerGeometry() {
  const shape = new THREE.Shape()
  const petals = 5
  const outerR = 0.5
  const innerR = 0.25

  for (let i = 0; i <= petals * 2; i++) {
    const angle = (i * Math.PI) / petals
    const r = i % 2 === 0 ? outerR : innerR
    const x = Math.cos(angle) * r
    const y = Math.sin(angle) * r
    if (i === 0) shape.moveTo(x, y)
    else shape.lineTo(x, y)
  }

  const extrudeSettings = {
    depth: 0.18,
    bevelEnabled: true,
    bevelSegments: 5,
    steps: 1,
    bevelSize: 0.06,
    bevelThickness: 0.06,
  }
  const geom = new THREE.ExtrudeGeometry(shape, extrudeSettings)
  geom.center()
  return geom
}

export default function FloatingVideoIcons() {
  const group = useRef()
  const heartGeom = useMemo(() => createHeartGeometry(), [])
  const flowerGeom = useMemo(() => createFlowerGeometry(), [])

  // Floating items placed around the center
  const items = useRef([])

  useFrame((state, delta) => {
    if (!group.current) return
    const t = state.clock.getElapsedTime()

    // Gentle floating and continuous slow rotation
    items.current.forEach((mesh, idx) => {
      if (!mesh) return
      const speed = 0.8 + (idx * 0.15)
      const offset = idx * 1.2

      mesh.position.y += Math.sin(t * speed + offset) * 0.003
      mesh.rotation.x += delta * (0.2 + idx * 0.05)
      mesh.rotation.y += delta * (0.3 + idx * 0.05)
      mesh.rotation.z += delta * 0.15
    })
  })

  return (
    <group ref={group}>
      {/* 1. 3D Heart - Soft Shiny Pink / Magenta */}
      <mesh
        ref={(el) => (items.current[0] = el)}
        geometry={heartGeom}
        position={[-3.8, 1.6, 0.5]}
        scale={1.2}
      >
        <meshStandardMaterial
          color="#E91E63"
          roughness={0.2}
          metalness={0.4}
          emissive="#E91E63"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* 2. 3D Flower - Soft Emerald Green */}
      <mesh
        ref={(el) => (items.current[1] = el)}
        geometry={flowerGeom}
        position={[3.8, 1.8, 0.2]}
        scale={1.15}
      >
        <meshStandardMaterial
          color="#10B981"
          roughness={0.25}
          metalness={0.35}
          emissive="#10B981"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* 3. 3D Rounded Cube - Soft Lavender Purple */}
      <mesh
        ref={(el) => (items.current[2] = el)}
        position={[-4.0, -1.5, 0.2]}
        scale={0.7}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color="#8B5CF6"
          roughness={0.15}
          metalness={0.5}
          emissive="#8B5CF6"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* 4. 3D Torus / Organic Ring - Soft Blue */}
      <mesh
        ref={(el) => (items.current[3] = el)}
        position={[4.0, -1.4, 0.4]}
        scale={0.7}
      >
        <torusGeometry args={[0.65, 0.25, 24, 48]} />
        <meshStandardMaterial
          color="#3B82F6"
          roughness={0.2}
          metalness={0.45}
          emissive="#3B82F6"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* 5. 3D Dodecahedron / Gem - Golden Amber */}
      <mesh
        ref={(el) => (items.current[4] = el)}
        position={[-2.4, 2.8, -0.6]}
        scale={0.5}
      >
        <dodecahedronGeometry args={[0.6, 0]} />
        <meshStandardMaterial
          color="#F59E0B"
          roughness={0.25}
          metalness={0.6}
        />
      </mesh>

      {/* 6. 3D Mini Sphere - Cyan/Teal */}
      <mesh
        ref={(el) => (items.current[5] = el)}
        position={[2.6, -2.6, -0.4]}
        scale={0.45}
      >
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color="#06B6D4"
          roughness={0.15}
          metalness={0.5}
          emissive="#06B6D4"
          emissiveIntensity={0.25}
        />
      </mesh>

      {/* Lighting for the icons */}
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <directionalLight position={[-5, -3, 2]} intensity={0.8} color="#E91E63" />
      <directionalLight position={[5, -3, 2]} intensity={0.8} color="#10B981" />
    </group>
  )
}
