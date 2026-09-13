import { useState, useEffect } from 'react'

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (isTouch) return

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      if (!visible) setVisible(true)
    }

    const handleMouseLeave = () => setVisible(false)

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [visible])

  if (!visible) return null

  return (
    <div
      className="fixed pointer-events-none z-30 transition-opacity duration-300"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        transform: 'translate(-50%, -50%)',
        width: '450px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(233, 30, 99, 0.065) 0%, rgba(139, 92, 246, 0.03) 40%, transparent 70%)',
        borderRadius: '50%',
      }}
    />
  )
}
