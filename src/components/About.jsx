import { Suspense, useRef, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { motion, useInView } from 'framer-motion'
import FloatingIcons from './three/FloatingIcons'

const stats = [
  { value: 'Top 5%', label: "Dean's List" },
  { value: '2028', label: 'Class Of' },
  { value: 'Full-Stack', label: '+ AI Systems' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section about" id="about" ref={ref}>
      {/* 3D Background */}
      <div className="about-3d-bg">
        <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
          <Suspense fallback={null}>
            <FloatingIcons />
          </Suspense>
        </Canvas>
      </div>

      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className="section-title">About Me</h2>

        <p className="about-text">
          B.Tech Computer Science student (Class of 2028, Dean's List – Top 5%) specializing in
          Python, full-stack development, and applied AI systems. Experienced building production
          SaaS, multi-agent AI pipelines, and blockchain-backed verification systems. Strong
          foundation in system design, microservices, and cloud-native practices.
        </p>

        <div className="about-stats">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="stat-item"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15, ease: 'easeOut' }}
            >
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
