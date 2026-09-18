import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import FadeIn from './FadeIn'

// Divyansh's Selected Flagship Projects
const projects = [
  {
    number: '01',
    title: 'VeriTrust AI',
    subtitle: 'Multi-Agent Deepfake & Synthetic Identity KYC',
    category: 'AI & Biometrics',
    liveUrl: 'https://github.com/Divyansh-co/DIV-MAJOR-PROJECT',
    images: {
      leftTop:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      leftBottom:
        'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
      rightTall:
        'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80',
    },
  },
  {
    number: '02',
    title: 'TutorConnect',
    subtitle: 'Full-Stack Tutoring Marketplace (SaaS)',
    category: 'Full-Stack SaaS',
    liveUrl: 'https://github.com/Divyansh-co',
    images: {
      leftTop:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
      leftBottom:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      rightTall:
        'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    },
  },
  {
    number: '03',
    title: 'APISentry',
    subtitle: 'Automated API Security Suite',
    category: 'DevSecOps',
    liveUrl: 'https://github.com/Divyansh-co/DIV-API-SENETRY',
    images: {
      leftTop:
        'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
      leftBottom:
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      rightTall:
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    },
  },
  {
    number: '04',
    title: 'SentinelPrompt',
    subtitle: 'LLM Prompt Injection Firewall',
    category: 'LLM Defense',
    liveUrl: 'https://github.com/Divyansh-co',
    images: {
      leftTop:
        'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
      leftBottom:
        'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      rightTall:
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
    },
  },
]

function ProjectCard({ project, index, totalCards }) {
  const cardContainerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: cardContainerRef,
    offset: ['start start', 'end start'],
  })

  // Scale formula: targetScale = 1 - (totalCards - 1 - index) * 0.03
  const targetScale = 1 - (totalCards - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  const topOffsetPx = index * 28

  return (
    <div
      ref={cardContainerRef}
      className="sticky top-24 md:top-32 h-[85vh] flex items-center justify-center"
      style={{
        top: `calc(clamp(5rem, 6vh + 3rem, 8rem) + ${topOffsetPx}px)`,
      }}
    >
      <motion.div
        style={{ scale }}
        className="w-full h-full max-h-[85vh] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.85)] overflow-hidden"
      >
        {/* Top Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-4 sm:pb-5 border-b border-[#D7E2EA]/15 shrink-0">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6">
            {/* Large number matching Services section font stack */}
            <span className="font-mono text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#D7E2EA] tracking-tight">
              {project.number}
            </span>

            {/* Category label */}
            <span className="font-mono text-xs sm:text-sm uppercase tracking-widest px-3 py-1 rounded-full border border-[#D7E2EA]/30 text-[#D7E2EA]/90 bg-[#D7E2EA]/5">
              {project.category}
            </span>

            {/* Project name & subtitle */}
            <div className="flex flex-col">
              <h3 className="font-sans font-bold text-lg sm:text-2xl md:text-3xl text-white tracking-tight">
                {project.title}
              </h3>
              {project.subtitle && (
                <span className="hidden sm:inline-block text-xs font-mono text-[#9CA3AF] tracking-normal">
                  {project.subtitle}
                </span>
              )}
            </div>
          </div>

          {/* Live Project Ghost Button */}
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="group/btn self-start sm:self-auto inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-mono text-xs sm:text-sm font-semibold uppercase tracking-widest transition-all duration-300 hover:bg-[#D7E2EA]/10 hover:shadow-[0_0_20px_rgba(215,226,234,0.25)] shrink-0"
          >
            <span>Live Project</span>
            <FiArrowUpRight className="text-sm transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </motion.a>
        </div>

        {/* Bottom Row: Two-column image grid (Left 40%, Right 60%) */}
        <div className="flex flex-row gap-3 sm:gap-4 md:gap-5 pt-3 sm:pt-4 flex-1 min-h-0 items-stretch">
          {/* Left Column (40% width): 2 stacked images */}
          <div className="w-[40%] flex flex-col gap-3 sm:gap-4 justify-between min-h-0">
            {/* Left top image: clamp(130px, 16vw, 230px) */}
            <div
              className="w-full overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-white/10 bg-[#15151B] shrink-0"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            >
              <img
                src={project.images.leftTop}
                alt={`${project.title} feature`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Left bottom image: clamp(160px, 22vw, 340px) */}
            <div
              className="w-full overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-white/10 bg-[#15151B] flex-1 min-h-0"
              style={{ maxHeight: 'clamp(160px, 22vw, 340px)' }}
            >
              <img
                src={project.images.leftBottom}
                alt={`${project.title} telemetry & system`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column (60% width): 1 tall image */}
          <div className="w-[60%] flex flex-col min-h-0">
            <div className="w-full h-full overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-white/10 bg-[#15151B]">
              <img
                src={project.images.rightTall}
                alt={`${project.title} full architecture`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 pt-20 sm:pt-28 pb-32 sm:pb-48 px-4 sm:px-6 lg:px-12 text-white border-t border-[#D7E2EA]/20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <FadeIn className="mb-14 sm:mb-20 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111115] border border-white/10 text-xs font-mono font-semibold tracking-widest text-[#FF0000] uppercase mb-4">
            <span>Selected Works</span>
          </div>
          <div>
            <h2 className="hero-heading">Project</h2>
          </div>
        </FadeIn>

        {/* Sticky-Stacking Project Cards */}
        <div className="relative flex flex-col gap-14 sm:gap-20 pb-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              totalCards={projects.length}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
