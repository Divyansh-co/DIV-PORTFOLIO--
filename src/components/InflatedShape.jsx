import { motion } from 'framer-motion'

/**
 * InflatedShape — Glossy Balloon / Inflated Toy Style Shape
 * Types: 'heart', 'flower', 'blob', 'torus', 'arrow', 'star', 'capsule'
 * Colors: 'purple', 'pink', 'orange', 'emerald', 'cyan'
 */
export default function InflatedShape({
  type = 'blob',
  color = 'pink',
  className = '',
  size = 64,
  duration = 4.2,
  delay = 0,
}) {
  const colorGradients = {
    purple: {
      from: '#8B5CF6',
      to: '#6D28D9',
      highlight: '#C4B5FD',
      shadow: '#4C1D95',
      glow: 'rgba(139, 92, 246, 0.4)',
    },
    pink: {
      from: '#EC4899',
      to: '#BE185D',
      highlight: '#FBCFE8',
      shadow: '#831843',
      glow: 'rgba(236, 72, 153, 0.4)',
    },
    orange: {
      from: '#F97316',
      to: '#C2410C',
      highlight: '#FED7AA',
      shadow: '#7C2D12',
      glow: 'rgba(249, 115, 22, 0.4)',
    },
    emerald: {
      from: '#10B981',
      to: '#047857',
      highlight: '#A7F3D0',
      shadow: '#064E3B',
      glow: 'rgba(16, 185, 129, 0.4)',
    },
    cyan: {
      from: '#06B6D4',
      to: '#0E7490',
      highlight: '#BAE6FD',
      shadow: '#164E63',
      glow: 'rgba(6, 182, 212, 0.4)',
    },
  }

  const c = colorGradients[color] || colorGradients.pink

  return (
    <motion.div
      animate={{
        y: [0, -14, 0],
        rotate: [0, 4, -3, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: delay,
      }}
      className={`pointer-events-none select-none z-10 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-xl"
        style={{ filter: `drop-shadow(0 12px 24px ${c.glow})` }}
      >
        <defs>
          {/* Main 3D Inflated Radial Gradient */}
          <radialGradient
            id={`grad-${type}-${color}`}
            cx="35%"
            cy="30%"
            r="65%"
            fx="30%"
            fy="25%"
          >
            <stop offset="0%" stopColor={c.highlight} />
            <stop offset="30%" stopColor={c.from} />
            <stop offset="85%" stopColor={c.to} />
            <stop offset="100%" stopColor={c.shadow} />
          </radialGradient>

          {/* Glossy Top Glint */}
          <linearGradient id={`glint-${type}-${color}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Heart */}
        {type === 'heart' && (
          <g>
            <path
              d="M50 82 C20 62 10 44 10 30 C10 18 20 10 32 10 C40 10 46 14 50 20 C54 14 60 10 68 10 C80 10 90 18 90 30 C90 44 80 62 50 82 Z"
              fill={`url(#grad-${type}-${color})`}
            />
            {/* Top Gloss Highlight */}
            <ellipse
              cx="32"
              cy="24"
              rx="12"
              ry="7"
              transform="rotate(-25 32 24)"
              fill={`url(#glint-${type}-${color})`}
              opacity="0.75"
            />
            <ellipse
              cx="68"
              cy="24"
              rx="12"
              ry="7"
              transform="rotate(25 68 24)"
              fill={`url(#glint-${type}-${color})`}
              opacity="0.7"
            />
          </g>
        )}

        {/* 5-Petal Flower */}
        {type === 'flower' && (
          <g>
            {/* 5 rounded petals */}
            <circle cx="50" cy="24" r="18" fill={`url(#grad-${type}-${color})`} />
            <circle cx="75" cy="42" r="18" fill={`url(#grad-${type}-${color})`} />
            <circle cx="65" cy="72" r="18" fill={`url(#grad-${type}-${color})`} />
            <circle cx="35" cy="72" r="18" fill={`url(#grad-${type}-${color})`} />
            <circle cx="25" cy="42" r="18" fill={`url(#grad-${type}-${color})`} />
            {/* Center Core */}
            <circle cx="50" cy="50" r="17" fill="#FDE047" />
            <ellipse cx="46" cy="45" rx="6" ry="3.5" fill="#FFFFFF" opacity="0.8" />
          </g>
        )}

        {/* Inflated Blob */}
        {type === 'blob' && (
          <g>
            <path
              d="M50 12 C72 12 88 28 88 50 C88 72 72 88 50 88 C26 88 12 72 12 50 C12 28 28 12 50 12 Z"
              fill={`url(#grad-${type}-${color})`}
            />
            {/* Curved Gloss shine */}
            <ellipse
              cx="38"
              cy="32"
              rx="16"
              ry="9"
              transform="rotate(-20 38 32)"
              fill={`url(#glint-${type}-${color})`}
              opacity="0.8"
            />
          </g>
        )}

        {/* Inflated Torus / Donut */}
        {type === 'torus' && (
          <g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M50 12 C71 12 88 29 88 50 C88 71 71 88 50 88 C29 88 12 71 12 50 C12 29 29 12 50 12 Z M50 32 C60 32 68 40 68 50 C68 60 60 68 50 68 C40 68 32 60 32 50 C32 40 40 32 50 32 Z"
              fill={`url(#grad-${type}-${color})`}
            />
            <ellipse
              cx="36"
              cy="25"
              rx="14"
              ry="6"
              transform="rotate(-15 36 25)"
              fill={`url(#glint-${type}-${color})`}
              opacity="0.8"
            />
          </g>
        )}

        {/* Inflated 3D Arrow */}
        {type === 'arrow' && (
          <g>
            <path
              d="M20 50 L46 22 C49 19 55 21 55 26 L55 38 L76 38 C81 38 85 42 85 47 L85 53 C85 58 81 62 76 62 L55 62 L55 74 C55 79 49 81 46 78 L20 50 Z"
              fill={`url(#grad-${type}-${color})`}
            />
            <ellipse
              cx="44"
              cy="36"
              rx="14"
              ry="5"
              transform="rotate(-25 44 36)"
              fill={`url(#glint-${type}-${color})`}
              opacity="0.8"
            />
          </g>
        )}

        {/* Inflated Star */}
        {type === 'star' && (
          <g>
            <path
              d="M50 10 L61 36 L88 38 L68 56 L74 84 L50 69 L26 84 L32 56 L12 38 L39 36 Z"
              fill={`url(#grad-${type}-${color})`}
            />
            <ellipse
              cx="44"
              cy="34"
              rx="8"
              ry="4"
              transform="rotate(-15 44 34)"
              fill={`url(#glint-${type}-${color})`}
              opacity="0.8"
            />
          </g>
        )}
      </svg>
    </motion.div>
  )
}
