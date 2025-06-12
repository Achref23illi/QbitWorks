import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaAws
} from 'react-icons/fa'
import {
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiTailwindcss,
  SiNextdotjs,
  SiGraphql,
  SiMongodb,
  SiPostgresql
} from 'react-icons/si'
import type { IconType } from 'react-icons'

interface Tech {
  name: string
  icon: IconType
  color: string
}

const techs: Tech[] = [
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Node.js', icon: FaNodeJs, color: '#3C873A' },
  { name: 'Express', icon: SiExpress, color: '#000000' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#38B2AC' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'GraphQL', icon: SiGraphql, color: '#E535AB' },
  { name: 'MongoDB', icon: SiMongodb, color: '#4DB33D' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
  { name: 'Docker', icon: FaDocker, color: '#2496ED' },
  { name: 'AWS', icon: FaAws, color: '#FF9900' },
  { name: 'Git', icon: FaGitAlt, color: '#F05032' },
]

const StackCard: React.FC<{ tech: Tech }> = ({ tech }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [flipped, setFlipped] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const reflectionRef = useRef<HTMLDivElement>(null)

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    const reflection = reflectionRef.current
    if (!card || !reflection) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const rotateX = (-(y - rect.height / 2) / (rect.height / 2)) * 10
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 10
    setTilt({ x: rotateX, y: rotateY })
    reflection.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.6), transparent 60%)`
  }

  const reset = () => {
    const reflection = reflectionRef.current
    if (!reflection) return
    setTilt({ x: 0, y: 0 })
    reflection.style.background = 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.6), transparent 60%)'
  }

  return (
    <div
      className="w-32 h-40 sm:w-36 sm:h-44 md:w-44 md:h-56 lg:w-48 lg:h-60 cursor-pointer"
      onClick={() => setFlipped(!flipped)}
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      <div className="perspective-1000 w-full h-full relative">
        <div
          ref={cardRef}
          className="absolute inset-0 transition-transform duration-700 preserve-3d"
          style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y + (flipped ? 180 : 0)}deg)` }}
        >
          <div className="absolute inset-0 backface-hidden rounded-xl shadow-xl flex flex-col items-center justify-center bg-white">
            {React.createElement(tech.icon, { className: 'text-5xl mb-2', style: { color: tech.color } })}
            <p className="text-sm font-semibold text-center px-1">{tech.name}</p>
          </div>
          <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl flex items-center justify-center bg-gray-100">
            <p className="text-xs text-gray-700 px-2 text-center">Proficient with {tech.name}</p>
          </div>
          <div
            ref={reflectionRef}
            className="absolute inset-0 rounded-xl pointer-events-none card-reflection"
            style={{ background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.6), transparent 60%)' }}
          />
        </div>
      </div>
    </div>
  )
}

export const TechStack: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!sectionRef.current) return
    gsap.registerPlugin(ScrollTrigger)

    gsap.from(cardRefs.current.filter(Boolean), {
      opacity: 0,
      y: 40,
      stagger: 0.1,
      ease: 'power2.out',
      duration: 0.6,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
    })
  }, [])

  return (
    <section ref={sectionRef} id="techstack" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-techno font-bold text-center mb-12">Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
          {techs.map((tech, i) => (
            <div key={tech.name} ref={el => { cardRefs.current[i] = el }}>
              <StackCard tech={tech} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
