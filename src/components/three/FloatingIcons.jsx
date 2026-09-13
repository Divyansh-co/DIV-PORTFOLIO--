import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const shapes = [
  { type: 'icosahedron', args: [0.4, 0], color: '#00e5ff', pos: [-3, 2, -1], speed: 0.3 },
  { type: 'octahedron', args: [0.35, 0], color: '#a855f7', pos: [3.5, -1, -2], speed: 0.4 },
  { type: 'torus', args: [0.3, 0.1, 16, 32], color: '#ec4899', pos: [-2.5, -2, 0], speed: 0.5 },
  { type: 'dodecahedron', args: [0.3, 0], color: '#14b8a6', pos: [2, 2.5, -1.5], speed: 0.35 },
  { type: 'tetrahedron', args: [0.35, 0], color: '#3b82f6', pos: [-4, 0.5, -1], speed: 0.45 },
  { type: 'icosahedron', args: [0.25, 0], color: '#f59e0b', pos: [4, 1, -2], speed: 0.25 },
  { type: 'octahedron', args: [0.2, 0], color: '#00e5ff', pos: [1, -2.5, -1], speed: 0.55 },
  { type: 'tetrahedron', args: [0.2, 0], color: '#a855f7', pos: [-1.5, 3, -2], speed: 0.3 },
]

function FloatingShape({ type, args, color, position, speed }) {
  const ref = useRef()
  const initialPos = useRef(position)

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime
    ref.current.rotation.x = t * speed * 0.5
    ref.current.rotation.y = t * speed * 0.7
    ref.current.rotation.z = t * speed * 0.3
    ref.current.position.y = initialPos.current[1] + Math.sin(t * speed + initialPos.current[0]) * 0.5
    ref.current.position.x = initialPos.current[0] + Math.cos(t * speed * 0.5 + initialPos.current[1]) * 0.3
  })

  const renderGeometry = () => {
    switch (type) {
      case 'icosahedron':
        return <icosahedronGeometry args={args} />
      case 'octahedron':
        return <octahedronGeometry args={args} />
      case 'torus':
        return <torusGeometry args={args} />
      case 'dodecahedron':
        return <dodecahedronGeometry args={args} />
      case 'tetrahedron':
        return <tetrahedronGeometry args={args} />
      default:
        return <icosahedronGeometry args={args} />
    }
  }

  return (
    <mesh ref={ref} position={position}>
      {renderGeometry()}
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.35}
        wireframe
        emissive={color}
        emissiveIntensity={0.3}
      />
    </mesh>
  )
}

export default function FloatingIcons() {
  return (
    <group>
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 0, 5]} intensity={1} color="#00e5ff" />
      {shapes.map((shape, i) => (
        <FloatingShape key={i} {...shape} position={shape.pos} />
      ))}
    </group>
  )
}
