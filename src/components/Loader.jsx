import { useState, useEffect } from 'react'

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0)
  const [hidden, setHidden] = useState(false)
  const [removed, setRemoved] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setHidden(true)
            onFinish?.()
            setTimeout(() => setRemoved(true), 600)
          }, 350)
          return 100
        }
        return prev + Math.random() * 22 + 10
      })
    }, 70)
    return () => clearInterval(interval)
  }, [onFinish])

  if (removed) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#08080A] transition-opacity duration-500 ${
        hidden ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex items-center gap-1 text-2xl font-bold tracking-tight text-white font-display mb-3">
        <span>DM</span>
        <span className="text-[#E07A3D]">.</span>
      </div>

      <div className="text-[11px] font-mono text-[#6E6A65] tracking-widest uppercase mb-6">
        Initializing Workspace
      </div>

      <div className="w-48 h-0.5 bg-[#181512] rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#E07A3D] to-[#EB894C] transition-all duration-150 ease-out"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
    </div>
  )
}
