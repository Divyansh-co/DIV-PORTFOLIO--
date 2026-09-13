import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function AbstractSculpture() {
  const outerGroup = useRef()
  const innerMesh = useRef()

  useFrame((state, delta) => {
    if (outerGroup.current) {
      outerGroup.current.rotation.y += delta * 0.15
      outerGroup.current.rotation.x += delta * 0.08
    }
    if (innerMesh.current) {
      innerMesh.current.rotation.y -= delta * 0.22
      innerMesh.current.rotation.z += delta * 0.1
    }
  })

  return (
    <group ref={outerGroup} position={[0, 0, 0]} scale={1.2}>
      {/* Outer subtle geometric cage */}
      <mesh>
        <icosahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial
          color="#241E1B"
          metalness={0.9}
          roughness={0.2}
          wireframe
        />
      </mesh>

      {/* Outer corner nodes with ember tone */}
      {[-1, 1].map((x) =>
        [-1, 1].map((y) => (
          <mesh key={`${x}-${y}`} position={[x * 0.9, y * 0.9, 0]}>
            <sphereGeometry args={[0.04, 16, 16]} />
            <meshStandardMaterial
              color="#E07A3D"
              emissive="#E07A3D"
              emissiveIntensity={0.6}
            />
          </mesh>
        ))
      )}

      {/* Inner Core: Matte Dodecahedron with Ember/Purple reflections */}
      <mesh ref={innerMesh}>
        <dodecahedronGeometry args={[0.8, 0]} />
        <meshStandardMaterial
          color="#161210"
          metalness={0.7}
          roughness={0.35}
        />
      </mesh>

      {/* Ambient core warm light */}
      <pointLight color="#E07A3D" intensity={1.5} distance={2.5} />
    </group>
  )
}
