import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function SubtleDepthField({ count = 80 }) {
  const points = useRef()

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)

    const colorEmber = new THREE.Color('#E07A3D')
    const colorPurple = new THREE.Color('#3D2A3D')
    const colorPearl = new THREE.Color('#E8E6E3')

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8 - 1

      const rand = Math.random()
      const c = rand > 0.6 ? colorEmber : rand > 0.3 ? colorPearl : colorPurple

      col[i * 3] = c.r
      col[i * 3 + 1] = c.g
      col[i * 3 + 2] = c.b
    }

    return [pos, col]
  }, [count])

  useFrame((state) => {
    if (!points.current) return
    const t = state.clock.getElapsedTime() * 0.04
    points.current.rotation.y = t
    points.current.rotation.x = Math.sin(t * 0.5) * 0.05
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        vertexColors
        transparent
        opacity={0.35}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}
