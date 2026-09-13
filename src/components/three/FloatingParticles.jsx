import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function FloatingParticles({ count = 300, radius = 8 }) {
  const mesh = useRef()

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const speeds = new Float32Array(count)

    const c1 = new THREE.Color('#C45C26')
    const c2 = new THREE.Color('#5C3A5C')
    const c3 = new THREE.Color('#D4D4D4')

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * radius * 2
      positions[i3 + 1] = (Math.random() - 0.5) * radius * 2
      positions[i3 + 2] = (Math.random() - 0.5) * radius

      const t = Math.random()
      const color = t < 0.3 ? c1.clone() : t < 0.6 ? c2.clone() : c3.clone()
      colors[i3] = color.r
      colors[i3 + 1] = color.g
      colors[i3 + 2] = color.b

      speeds[i] = Math.random() * 0.3 + 0.1
    }

    return { positions, colors, speeds }
  }, [count, radius])

  useFrame((state) => {
    if (!mesh.current) return
    const time = state.clock.elapsedTime
    const positions = mesh.current.geometry.attributes.position.array

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      positions[i3 + 1] += Math.sin(time * particles.speeds[i] + i) * 0.001
      positions[i3] += Math.cos(time * particles.speeds[i] * 0.5 + i) * 0.0005
    }
    mesh.current.geometry.attributes.position.needsUpdate = true
    mesh.current.rotation.y = time * 0.01
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={1.5}
        vertexColors
        transparent
        opacity={0.35}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}
