import { useState, useEffect } from 'react'

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setHidden(true)
            onFinish?.()
          }, 400)
          return 100
        }
        return prev + Math.random() * 15 + 5
      })
    }, 120)

    return () => clearInterval(interval)
  }, [onFinish])

  return (
    <div className={`loader-overlay ${hidden ? 'hidden' : ''}`}>
      <div className="loader-logo">DM</div>
      <div style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: '0.85rem',
        color: 'rgba(255,255,255,0.4)',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        marginBottom: '24px',
      }}>
        Loading Experience
      </div>
      <div className="loader-bar">
        <div
          className="loader-bar-fill"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
      <div style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: '0.75rem',
        color: 'rgba(255,255,255,0.2)',
        marginTop: '12px',
      }}>
        {Math.min(Math.round(progress), 100)}%
      </div>
    </div>
  )
}
