import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function FloatingParticles({ count = 400, radius = 8, color1 = '#00e5ff', color2 = '#a855f7' }) {
  const mesh = useRef()
  const light = useRef()

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const sizes = new Float32Array(count)
    const speeds = new Float32Array(count)

    const c1 = new THREE.Color(color1)
    const c2 = new THREE.Color(color2)

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * radius * 2
      positions[i3 + 1] = (Math.random() - 0.5) * radius * 2
      positions[i3 + 2] = (Math.random() - 0.5) * radius
      
      const t = Math.random()
      const color = c1.clone().lerp(c2, t)
      colors[i3] = color.r
      colors[i3 + 1] = color.g
      colors[i3 + 2] = color.b
      
      sizes[i] = Math.random() * 3 + 0.5
      speeds[i] = Math.random() * 0.5 + 0.2
    }

    return { positions, colors, sizes, speeds }
  }, [count, radius, color1, color2])

  useFrame((state) => {
    if (!mesh.current) return
    const time = state.clock.elapsedTime
    const positions = mesh.current.geometry.attributes.position.array

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      positions[i3 + 1] += Math.sin(time * particles.speeds[i] + i) * 0.002
      positions[i3] += Math.cos(time * particles.speeds[i] * 0.5 + i) * 0.001
    }
    mesh.current.geometry.attributes.position.needsUpdate = true
    mesh.current.rotation.y = time * 0.02
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
        size={2}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}
