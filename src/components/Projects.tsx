import React, { useState } from 'react'

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
  }
]

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className="w-72 h-96 mx-4 flex-shrink-0 cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div className="perspective-1000 w-full h-full relative">
        <div
          className={`absolute inset-0 transition-transform duration-700 preserve-3d ${flipped ? 'rotate-y-180' : ''}`}
        >
          <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-lg">
            <img src={project.image} alt={project.name} className="w-full h-2/3 object-cover" />
            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold mb-1">{project.name}</h3>
              <p className="text-sm text-gray-500">{project.stack}</p>
            </div>
          </div>
          <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl shadow-lg flex flex-col items-center justify-center bg-gray-100">
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
        </div>
      </div>
    </div>
  )
}

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 overflow-x-auto whitespace-nowrap">
      <div className="flex items-center px-10 space-x-8 snap-x snap-mandatory">
        {projects.map((p) => (
          <div key={p.name} className="snap-center">
            <ProjectCard project={p} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
