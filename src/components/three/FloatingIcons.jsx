import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const shapes = [
  { type: 'icosahedron', args: [0.35, 0], color: '#C45C26', pos: [-3, 1.8, -1.5], speed: 0.15 },
  { type: 'octahedron', args: [0.28, 0], color: '#5C3A5C', pos: [3.2, -0.8, -2], speed: 0.2 },
  { type: 'dodecahedron', args: [0.25, 0], color: '#8A8A8A', pos: [-2.2, -1.8, -0.5], speed: 0.18 },
  { type: 'tetrahedron', args: [0.3, 0], color: '#D4783A', pos: [2.5, 2.2, -1.5], speed: 0.12 },
  { type: 'octahedron', args: [0.2, 0], color: '#4A2C4A', pos: [-3.5, 0.3, -1.2], speed: 0.22 },
  { type: 'icosahedron', args: [0.22, 0], color: '#C45C26', pos: [1, -2.3, -1.5], speed: 0.16 },
  { type: 'dodecahedron', args: [0.18, 0], color: '#5C3A5C', pos: [-1.2, 2.8, -2], speed: 0.14 },
]

function FloatingShape({ type, args, color, position, speed }) {
  const ref = useRef()
  const initialPos = useRef(position)

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime
    ref.current.rotation.x = t * speed * 0.3
    ref.current.rotation.y = t * speed * 0.5
    ref.current.position.y = initialPos.current[1] + Math.sin(t * speed + initialPos.current[0]) * 0.35
    ref.current.position.x = initialPos.current[0] + Math.cos(t * speed * 0.4 + initialPos.current[1]) * 0.2
  })

  const renderGeometry = () => {
    switch (type) {
      case 'icosahedron': return <icosahedronGeometry args={args} />
      case 'octahedron': return <octahedronGeometry args={args} />
      case 'dodecahedron': return <dodecahedronGeometry args={args} />
      case 'tetrahedron': return <tetrahedronGeometry args={args} />
      default: return <icosahedronGeometry args={args} />
    }
  }

  return (
    <mesh ref={ref} position={position}>
      {renderGeometry()}
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.2}
        wireframe
        emissive={color}
        emissiveIntensity={0.15}
        roughness={0.4}
        metalness={0.6}
      />
    </mesh>
  )
}

export default function FloatingIcons() {
  return (
    <group>
      <ambientLight intensity={0.2} />
      <pointLight position={[0, 0, 5]} intensity={0.6} color="#C45C26" />
      <pointLight position={[-3, 3, 3]} intensity={0.3} color="#5C3A5C" />
      {shapes.map((shape, i) => (
        <FloatingShape key={i} {...shape} position={shape.pos} />
      ))}
    </group>
  )
}
