import {
  SiPython,
  SiDjango,
  SiFastapi,
  SiReact,
  SiPostgresql,
  SiDocker,
  SiTypescript,
  SiRedis,
} from 'react-icons/si'

const techItems = [
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Django', icon: SiDjango, color: '#092E20' },
  { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Redis', icon: SiRedis, color: '#DC382D' },
]

export default function TechMarquee() {
  // Duplicate array to achieve seamless infinite scroll
  const marqueeList = [...techItems, ...techItems, ...techItems]

  return (
    <div className="w-full py-7 bg-[#0d0d10] border-y border-white/[0.08] overflow-hidden relative">
      {/* Left/right fade gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0d0d10] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0d0d10] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center gap-12 sm:gap-16">
        {marqueeList.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#15151b] border border-white/[0.07] shrink-0 hover:border-white/25 transition-all group"
          >
            <item.icon
              className="text-2xl transition-transform group-hover:scale-110"
              style={{ color: item.color }}
            />
            <span className="text-sm font-semibold tracking-wider text-[#E4E4E7] uppercase font-mono">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
