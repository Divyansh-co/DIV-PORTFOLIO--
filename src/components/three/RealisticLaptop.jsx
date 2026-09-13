import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Procedurally generate a sleek IDE / code editor texture for the laptop screen
function useCodeScreenTexture() {
  return useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 1024
    canvas.height = 640
    const ctx = canvas.getContext('2d')
    if (!ctx) return null

    // Background
    ctx.fillStyle = '#0B090A'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Top window bar
    ctx.fillStyle = '#161311'
    ctx.fillRect(0, 0, canvas.width, 36)

    // Window dots
    const dots = ['#E07A3D', '#3D2A3D', '#6E6A65']
    dots.forEach((color, i) => {
      ctx.beginPath()
      ctx.arc(24 + i * 18, 18, 5, 0, Math.PI * 2)
      ctx.fillStyle = color
      ctx.fill()
    })

    // Active tab
    ctx.fillStyle = '#201A16'
    ctx.roundRect(90, 6, 210, 30, [4, 4, 0, 0])
    ctx.fill()
    ctx.fillStyle = '#E8E6E3'
    ctx.font = '500 13px "JetBrains Mono", monospace'
    ctx.fillText('agent_pipeline.py', 110, 25)

    // Code lines
    ctx.font = '14px "JetBrains Mono", monospace'
    const lines = [
      { text: '# Divyansh Mishra — Applied AI Pipeline', color: '#6E6A65' },
      { text: 'from fastapi import FastAPI, BackgroundTasks', color: '#E07A3D' },
      { text: 'from veritrust.core import DeepfakeDetector, MultiAgentConsensus', color: '#E07A3D' },
      { text: '', color: '' },
      { text: 'app = FastAPI(title="VeriTrust-Kernel", version="2.4.0")', color: '#E8E6E3' },
      { text: 'consensus = MultiAgentConsensus(threshold=0.998)', color: '#D4C5B9' },
      { text: '', color: '' },
      { text: '@app.post("/v1/verify/identity")', color: '#9E80A0' },
      { text: 'async def evaluate_stream(payload: BiometricPayload):', color: '#E8E6E3' },
      { text: '    """Orchestrates neural analysis & on-chain audit trail."""', color: '#6E6A65' },
      { text: '    telemetry = await consensus.evaluate_biometrics(payload)', color: '#D4C5B9' },
      { text: '    if not telemetry.is_authentic:', color: '#E07A3D' },
      { text: '        return {"status": "BLOCKED", "risk_index": telemetry.score}', color: '#E8E6E3' },
      { text: '    ', color: '' },
      { text: '    receipt = await blockchain.commit_hash(telemetry.hash)', color: '#E07A3D' },
      { text: '    return {"status": "VERIFIED", "tx_hash": receipt.digest}', color: '#E8E6E3' },
      { text: '', color: '' },
      { text: '# Latency: 12ms | Accuracy: 99.4% | Class: 2028 Dean\'s List', color: '#E07A3D' },
    ]

    let y = 68
    lines.forEach((line, idx) => {
      // Line numbers
      ctx.fillStyle = '#3A322C'
      ctx.textAlign = 'right'
      ctx.fillText(String(idx + 1), 40, y)

      // Code text
      ctx.textAlign = 'left'
      ctx.fillStyle = line.color || '#E8E6E3'
      ctx.fillText(line.text, 60, y)
      y += 26
    })

    const texture = new THREE.CanvasTexture(canvas)
    texture.minFilter = THREE.LinearFilter
    texture.magFilter = THREE.LinearFilter
    return texture
  }, [])
}

export default function RealisticLaptop({ mousePos = { x: 0, y: 0 } }) {
  const group = useRef()
  const screenTexture = useCodeScreenTexture()

  useFrame((state, delta) => {
    if (!group.current) return

    // Gentle continuous floating
    const t = state.clock.getElapsedTime()
    const floatY = Math.sin(t * 1.2) * 0.08
    const floatRotX = Math.cos(t * 0.9) * 0.03

    // Smooth subtle mouse tilt parallax
    const targetRotY = (mousePos.x * 0.35) - 0.25
    const targetRotX = 0.15 + (mousePos.y * 0.2) + floatRotX

    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, targetRotY, 3.5, delta)
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, targetRotX, 3.5, delta)
    group.current.position.y = THREE.MathUtils.damp(group.current.position.y, floatY - 0.2, 3.5, delta)
  })

  return (
    <group ref={group} position={[0, -0.2, 0]} scale={1.15}>
      {/* LAPTOP BASE CHASSIS */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3.2, 0.08, 2.2]} />
        <meshStandardMaterial
          color="#151210"
          roughness={0.25}
          metalness={0.88}
        />
      </mesh>

      {/* Base bevel / front lip */}
      <mesh position={[0, 0.045, 1.05]}>
        <boxGeometry args={[0.6, 0.02, 0.04]} />
        <meshStandardMaterial color="#2B241F" roughness={0.3} metalness={0.8} />
      </mesh>

      {/* Trackpad */}
      <mesh position={[0, 0.045, 0.55]}>
        <boxGeometry args={[1.1, 0.005, 0.75]} />
        <meshStandardMaterial color="#1B1714" roughness={0.4} metalness={0.6} />
      </mesh>

      {/* Keyboard Bed */}
      <mesh position={[0, 0.045, -0.3]}>
        <boxGeometry args={[2.75, 0.006, 1.15]} />
        <meshStandardMaterial color="#0E0C0A" roughness={0.8} />
      </mesh>

      {/* Keyboard Subtle Key Rows */}
      {[-0.65, -0.45, -0.25, -0.05, 0.15].map((z, rowIdx) => (
        <mesh key={rowIdx} position={[0, 0.052, z]}>
          <boxGeometry args={[2.65, 0.01, 0.14]} />
          <meshStandardMaterial
            color="#1D1814"
            roughness={0.5}
            metalness={0.3}
          />
        </mesh>
      ))}

      {/* HINGE */}
      <mesh position={[0, 0.05, -1.08]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.04, 0.04, 2.8, 16]} />
        <meshStandardMaterial color="#241E19" roughness={0.3} metalness={0.9} />
      </mesh>

      {/* LAPTOP LID & SCREEN (Angled ~105 degrees) */}
      <group position={[0, 0.06, -1.08]} rotation={[-1.35, 0, 0]}>
        {/* Lid Back Shell */}
        <mesh position={[0, 1.05, -0.03]}>
          <boxGeometry args={[3.2, 2.15, 0.05]} />
          <meshStandardMaterial
            color="#14110F"
            roughness={0.25}
            metalness={0.85}
          />
        </mesh>

        {/* Screen Bezel */}
        <mesh position={[0, 1.05, 0]}>
          <boxGeometry args={[3.12, 2.07, 0.02]} />
          <meshStandardMaterial color="#0A0807" roughness={0.6} />
        </mesh>

        {/* Display Screen */}
        <mesh position={[0, 1.05, 0.015]}>
          <planeGeometry args={[2.98, 1.9]} />
          {screenTexture ? (
            <meshBasicMaterial map={screenTexture} toneMapped={false} />
          ) : (
            <meshStandardMaterial color="#0B090A" roughness={0.1} />
          )}
        </mesh>

        {/* Subtle ember screen glow casting into scene */}
        <pointLight
          position={[0, 1.0, 0.6]}
          color="#E07A3D"
          intensity={1.2}
          distance={3.5}
          decay={2}
        />
      </group>

      {/* Soft warm ember under-glow */}
      <pointLight
        position={[0, -0.3, 0]}
        color="#E07A3D"
        intensity={0.8}
        distance={2.5}
        decay={2}
      />
    </group>
  )
}
