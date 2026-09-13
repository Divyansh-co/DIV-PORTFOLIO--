import { Suspense, useRef, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { motion, useInView } from 'framer-motion'
import TechSpheres from './three/TechSpheres'

export default function TechStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const mousePos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouse = (e) => {
      mousePos.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      }
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  return (
    <section className="section techstack" id="techstack" ref={ref}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        My Techstack
      </motion.h2>

      <motion.div
        className="techstack-canvas"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
          <Suspense fallback={null}>
            <TechSpheres mousePos={mousePos} />
          </Suspense>
        </Canvas>
      </motion.div>
    </section>
  )
}
