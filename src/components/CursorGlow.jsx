import { useState, useEffect, useRef } from 'react'

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const trailPos = useRef({ x: -100, y: -100 })
  const trailRef = useRef(null)
  const animFrame = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
    }

    const animateTrail = () => {
      trailPos.current.x += (pos.x - trailPos.current.x) * 0.12
      trailPos.current.y += (pos.y - trailPos.current.y) * 0.12
      if (trailRef.current) {
        trailRef.current.style.left = `${trailPos.current.x}px`
        trailRef.current.style.top = `${trailPos.current.y}px`
      }
      animFrame.current = requestAnimationFrame(animateTrail)
    }

    window.addEventListener('mousemove', handleMouseMove)
    animFrame.current = requestAnimationFrame(animateTrail)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animFrame.current)
    }
  }, [pos.x, pos.y])

  if ('ontouchstart' in window) return null

  return (
    <>
      <div className="cursor-glow" style={{ left: `${pos.x}px`, top: `${pos.y}px` }} />
      <div ref={trailRef} className="cursor-trail" />
    </>
  )
}
