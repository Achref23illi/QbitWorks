import React, { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


interface Project {
  name: string
  image: string
  stack: string
  github: string
  live?: string
}

const projects: Project[] = [
  {
    name: 'Project One',
    image: '/src/assets/images/placeholder.svg',
    stack: 'React, TypeScript',
    github: 'https://github.com/example/project-one',
    live: 'https://example.com/project-one'
  },
  {
    name: 'Project Two',
    image: '/src/assets/images/placeholder.svg',
    stack: 'Vue, Tailwind',
    github: 'https://github.com/example/project-two'
  },
  {
    name: 'Project Three',
    image: '/src/assets/images/placeholder.svg',
    stack: 'Node.js, Express',
    github: 'https://github.com/example/project-three',
    live: 'https://example.com/project-three'
  },
  {
    name: 'Project Four',
    image: '/src/assets/images/placeholder.svg',
    stack: 'Next.js, GSAP',
    github: 'https://github.com/example/project-four'
  },
  {
    name: 'Project Five',
    image: '/src/assets/images/placeholder.svg',
    stack: 'Angular, RxJS',
    github: 'https://github.com/example/project-five'
  },
  {
    name: 'Project Six',
    image: '/src/assets/images/placeholder.svg',
    stack: 'Svelte, Vite',
    github: 'https://github.com/example/project-six'
  },
  {
    name: 'Project Seven',
    image: '/src/assets/images/placeholder.svg',
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
    const rotateX = (-(y - rect.height / 2) / (rect.height / 2)) * 10
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 10
    setTilt({ x: rotateX, y: rotateY })
    if (!reflection) return
    setTilt({ x: 0, y: 0 })
          className="absolute inset-0 transition-transform duration-700 preserve-3d"
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y + (flipped ? 180 : 0)}deg)`
          }}
    github: 'https://github.com/example/project-eight'
  },
  {
    name: 'Project Nine',
    image: '/src/assets/images/placeholder.svg',
    stack: 'Go, Fiber',
    github: 'https://github.com/example/project-nine'
  },
  {
    name: 'Project Ten',
    image: '/src/assets/images/placeholder.svg',
    stack: 'Rust, WASM',
    github: 'https://github.com/example/project-ten'
  }
]

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
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
    const rotateX = -(y - rect.height / 2) / (rect.height / 2) * 10
    const rotateY = (x - rect.width / 2) / (rect.width / 2) * 10
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    reflection.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.6), transparent 60%)`
  }

  const reset = () => {
    const card = cardRef.current
    const reflection = reflectionRef.current
    if (!card || !reflection) return
    card.style.transform = 'rotateX(0deg) rotateY(0deg)'
    reflection.style.background = 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.6), transparent 60%)'
  }


  return (
    <div
      className="w-72 h-96 mx-4 flex-shrink-0 cursor-pointer"
      onClick={() => setFlipped(!flipped)}
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      <div className="perspective-1000 w-full h-full relative">
        <div
          ref={cardRef}
          className={`absolute inset-0 transition-transform duration-700 preserve-3d ${flipped ? 'rotate-y-180' : ''}`}
        >
          <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-2xl">

            <img src={project.image} alt={project.name} className="w-full h-2/3 object-cover" />
            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold mb-1">{project.name}</h3>
              <p className="text-sm text-gray-500">{project.stack}</p>
            </div>
          </div>
          <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl shadow-2xl flex flex-col items-center justify-center bg-gray-100">

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
            >
              GitHub
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-brand-primary-500 text-white rounded-lg hover:bg-brand-primary-600"
              >
                Live View
              </a>
            )}
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

export const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track) return

    gsap.registerPlugin(ScrollTrigger)

    const totalWidth = track.scrollWidth - window.innerWidth

    const ctx = gsap.context(() => {
      gsap.fromTo(
        track,
        { x: 0 },
        {
          x: -totalWidth,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: `+=${totalWidth}`,
            pin: true,
            scrub: true,
            anticipatePin: 1,
          },
        }
      )
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="projects" className="relative py-20 h-screen">
      <div ref={trackRef} className="flex w-max items-center px-10 space-x-8">
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />

        ))}
      </div>
    </section>
  )
}

export default Projects
