import { useRef, useMemo, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'

const techItems = [
  { name: 'Python', color: '#3776ab' },
  { name: 'JavaScript', color: '#f7df1e' },
  { name: 'TypeScript', color: '#3178c6' },
  { name: 'React', color: '#61dafb' },
  { name: 'Node.js', color: '#339933' },
  { name: 'FastAPI', color: '#009688' },
  { name: 'Django', color: '#092e20' },
  { name: 'PostgreSQL', color: '#336791' },
  { name: 'MongoDB', color: '#47a248' },
  { name: 'Redis', color: '#dc382d' },
  { name: 'Docker', color: '#2496ed' },
  { name: 'Solidity', color: '#363636' },
  { name: 'TensorFlow', color: '#ff6f00' },
  { name: 'OpenCV', color: '#5c3ee8' },
  { name: 'Git', color: '#f05032' },
  { name: 'AWS', color: '#ff9900' },
  { name: 'Tailwind', color: '#06b6d4' },
  { name: 'Vite', color: '#646cff' },
]

function TechBubble({ tech, index, mousePos, total }) {
  const ref = useRef()
  const [hovered, setHovered] = useState(false)
  const velocity = useRef(new THREE.Vector3(
    (Math.random() - 0.5) * 0.02,
    (Math.random() - 0.5) * 0.02,
    (Math.random() - 0.5) * 0.01
  ))

  const initialPos = useMemo(() => {
    const phi = Math.acos(-1 + (2 * index) / total)
    const theta = Math.sqrt(total * Math.PI) * phi
    const r = 3
    return new THREE.Vector3(
      r * Math.cos(theta) * Math.sin(phi),
      r * Math.sin(theta) * Math.sin(phi),
      r * Math.cos(phi) * 0.5
    )
  }, [index, total])

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime
    const pos = ref.current.position

    // Float towards initial position
    const target = initialPos.clone()
    target.x += Math.sin(t * 0.5 + index) * 0.5
    target.y += Math.cos(t * 0.3 + index * 0.7) * 0.5

    // Spring towards target
    const diff = target.clone().sub(pos)
    velocity.current.add(diff.multiplyScalar(0.005))

    // Mouse repulsion
    if (mousePos.current) {
      const mouseVec = new THREE.Vector3(mousePos.current.x * 4, mousePos.current.y * 3, 0)
      const toMouse = pos.clone().sub(mouseVec)
      const dist = toMouse.length()
      if (dist < 2) {
        const force = toMouse.normalize().multiplyScalar(0.05 / (dist + 0.5))
        velocity.current.add(force)
      }
    }

    // Damping
    velocity.current.multiplyScalar(0.95)

    // Apply
    pos.add(velocity.current)

    // Slow rotation
    ref.current.rotation.x = t * 0.2 + index
    ref.current.rotation.y = t * 0.3 + index * 0.5
  })

  const size = 0.4 + Math.random() * 0.15

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
          opacity={hovered ? 0.6 : 0.25}
          roughness={0.1}
          metalness={0.3}
          emissive={tech.color}
          emissiveIntensity={hovered ? 0.5 : 0.15}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
      <Html center distanceFactor={6} style={{ pointerEvents: 'none' }}>
        <div style={{
          color: 'white',
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: hovered ? '14px' : '11px',
          fontWeight: 600,
          textAlign: 'center',
          whiteSpace: 'nowrap',
          textShadow: `0 0 10px ${tech.color}, 0 0 20px ${tech.color}`,
          transition: 'font-size 0.3s ease',
          userSelect: 'none',
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
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#00e5ff" />
      <pointLight position={[-5, -5, 5]} intensity={0.6} color="#a855f7" />
      <pointLight position={[0, 0, 5]} intensity={0.4} color="#ffffff" />
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
