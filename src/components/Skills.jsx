import { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { motion, useInView } from 'framer-motion'
import DeskScene from './three/DeskScene'
import { FiLayout, FiServer } from 'react-icons/fi'

const skills = [
  {
    id: 'frontend',
    icon: <FiLayout />,
    title: 'FRONTEND',
    subtitle: 'Building Interactive UIs',
    description: 'Crafting responsive, performant user interfaces with modern frameworks, smooth animations, and pixel-perfect designs that delight users.',
    tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion', 'Three.js', 'HTML5/CSS3'],
    iconClass: 'frontend',
  },
  {
    id: 'backend',
    icon: <FiServer />,
    title: 'BACKEND',
    subtitle: 'Scalable Server Architecture',
    description: 'Designing robust APIs, microservices, and data pipelines with emphasis on performance, security, and cloud-native deployment patterns.',
    tags: ['Python', 'FastAPI', 'Django', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
    iconClass: 'backend',
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section skills" id="skills" ref={ref}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        What I Do
      </motion.h2>

      <div className="skills-layout">
        <motion.div
          className="skills-3d"
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
            <Suspense fallback={null}>
              <DeskScene />
            </Suspense>
          </Canvas>
        </motion.div>

        <div className="skills-cards">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.id}
              className="skill-card"
              initial={{ opacity: 0, x: 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
              whileHover={{ x: 8 }}
            >
              <div className="skill-card-header">
                <div className={`skill-card-icon ${skill.iconClass}`}>
                  {skill.icon}
                </div>
              </div>
              <h3>{skill.title}</h3>
              <p><strong style={{ color: 'var(--text-primary)' }}>{skill.subtitle}</strong></p>
              <p>{skill.description}</p>
              <div className="skill-tags">
                {skill.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
