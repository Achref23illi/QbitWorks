import React, { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  radius: number
  alpha: number
  velocityX: number
  velocityY: number
}

interface Props {
  containerRef: React.RefObject<HTMLElement>
}

export const MouseParticles: React.FC<Props> = ({ containerRef }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles = useRef<Particle[]>([])
  const frame = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = container.clientWidth
      canvas.height = container.clientHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const spawn = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      for (let i = 0; i < 5; i++) {
        particles.current.push({
          x,
          y,
          radius: Math.random() * 3 + 2,
          alpha: 1,
          velocityX: (Math.random() - 0.5) * 2,
          velocityY: (Math.random() - 0.5) * 2
        })
      }
    }
    container.addEventListener('mousemove', spawn)

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.current.forEach((p, i) => {
        p.x += p.velocityX
        p.y += p.velocityY
        p.alpha -= 0.02
        p.radius *= 0.98
        if (p.alpha <= 0 || p.radius <= 0) {
          particles.current.splice(i, 1)
          return
        }
        ctx.fillStyle = `rgba(216, 151, 60, ${p.alpha})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()
      })
      frame.current = requestAnimationFrame(render)
    }
    frame.current = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('resize', resize)
      container.removeEventListener('mousemove', spawn)
      if (frame.current) cancelAnimationFrame(frame.current)
    }
  }, [containerRef])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
    />
  )
}

export default MouseParticles
