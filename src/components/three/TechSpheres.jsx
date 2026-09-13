import { useRef, useMemo, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'

const techItems = [
  { name: 'Python', color: '#C45C26' },
  { name: 'JavaScript', color: '#D4783A' },
  { name: 'TypeScript', color: '#5C3A5C' },
  { name: 'React', color: '#8A6040' },
  { name: 'Node.js', color: '#6B5030' },
  { name: 'FastAPI', color: '#C45C26' },
  { name: 'Django', color: '#4A2C4A' },
  { name: 'PostgreSQL', color: '#5C3A5C' },
  { name: 'MongoDB', color: '#7A5A30' },
  { name: 'Redis', color: '#C45C26' },
  { name: 'Docker', color: '#4A2C4A' },
  { name: 'Solidity', color: '#5C3A5C' },
  { name: 'TensorFlow', color: '#D4783A' },
  { name: 'OpenCV', color: '#6B4A30' },
  { name: 'Git', color: '#C45C26' },
  { name: 'AWS', color: '#D4783A' },
  { name: 'Tailwind', color: '#5C3A5C' },
  { name: 'Vite', color: '#8A6040' },
]

function TechBubble({ tech, index, mousePos, total }) {
  const ref = useRef()
  const [hovered, setHovered] = useState(false)
  const velocity = useRef(new THREE.Vector3(
    (Math.random() - 0.5) * 0.01,
    (Math.random() - 0.5) * 0.01,
    (Math.random() - 0.5) * 0.005
  ))

  const initialPos = useMemo(() => {
    const phi = Math.acos(-1 + (2 * index) / total)
    const theta = Math.sqrt(total * Math.PI) * phi
    const r = 3
    return new THREE.Vector3(
      r * Math.cos(theta) * Math.sin(phi),
      r * Math.sin(theta) * Math.sin(phi),
      r * Math.cos(phi) * 0.4
    )
  }, [index, total])

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime
    const pos = ref.current.position

    const target = initialPos.clone()
    target.x += Math.sin(t * 0.3 + index) * 0.4
    target.y += Math.cos(t * 0.2 + index * 0.7) * 0.4

    const diff = target.clone().sub(pos)
    velocity.current.add(diff.multiplyScalar(0.004))

    if (mousePos.current) {
      const mouseVec = new THREE.Vector3(mousePos.current.x * 4, mousePos.current.y * 3, 0)
      const toMouse = pos.clone().sub(mouseVec)
      const dist = toMouse.length()
      if (dist < 1.8) {
        velocity.current.add(toMouse.normalize().multiplyScalar(0.03 / (dist + 0.5)))
      }
    }

    velocity.current.multiplyScalar(0.96)
    pos.add(velocity.current)

    ref.current.rotation.x = t * 0.15 + index
    ref.current.rotation.y = t * 0.2 + index * 0.5
  })

  const size = 0.38 + Math.random() * 0.12

  return (
    <group ref={ref} position={initialPos.toArray()}>
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[size, 32, 32]} />
        <meshPhysicalMaterial
          color={tech.color}
          transparent
          opacity={hovered ? 0.45 : 0.15}
          roughness={0.15}
          metalness={0.4}
          emissive={tech.color}
          emissiveIntensity={hovered ? 0.3 : 0.08}
          clearcoat={0.8}
          clearcoatRoughness={0.2}
        />
      </mesh>
      <Html center distanceFactor={6} style={{ pointerEvents: 'none' }}>
        <div style={{
          color: '#F5F5F4',
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: hovered ? '13px' : '10px',
          fontWeight: 500,
          textAlign: 'center',
          whiteSpace: 'nowrap',
          textShadow: `0 0 8px ${tech.color}`,
          transition: 'font-size 0.3s ease',
          userSelect: 'none',
          opacity: hovered ? 1 : 0.7,
        }}>
          {tech.name}
        </div>
      </Html>
    </group>
  )
}

export default function TechSpheres({ mousePos }) {
  return (
    <group>
      <ambientLight intensity={0.15} />
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#C45C26" />
      <pointLight position={[-5, -5, 5]} intensity={0.35} color="#5C3A5C" />
      <pointLight position={[0, 0, 5]} intensity={0.25} color="#F5F5F4" />
      {techItems.map((tech, i) => (
        <TechBubble
          key={tech.name}
          tech={tech}
          index={i}
          mousePos={mousePos}
          total={techItems.length}
        />
      ))}
    </group>
  )
}
