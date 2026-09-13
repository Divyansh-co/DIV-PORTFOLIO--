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
          }, 500)
          return 100
        }
        return prev + Math.random() * 12 + 4
      })
    }, 140)
    return () => clearInterval(interval)
  }, [onFinish])

  return (
    <div className={`loader-overlay ${hidden ? 'hidden' : ''}`}>
      <div className="loader-logo">D<span>.</span>M</div>
      <div style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: '0.72rem',
        color: 'rgba(245, 245, 244, 0.25)',
        letterSpacing: '0.25em',
        textTransform: 'uppercase',
        marginBottom: '28px',
        fontWeight: 300,
      }}>
        Loading
      </div>
      <div className="loader-bar">
        <div className="loader-bar-fill" style={{ width: `${Math.min(progress, 100)}%` }} />
      </div>
    </div>
  )
}
