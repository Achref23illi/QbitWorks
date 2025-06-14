import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import { MouseParticles } from './MouseParticles'

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  const phrases = [
    'BUILDING DIGITAL EXCELLENCE',
    'CRAFTING INNOVATIVE SOLUTIONS',
    'TRANSFORMING IDEAS TO REALITY',
    'CREATING POWERFUL EXPERIENCES',
    'DEVELOPING CUTTING-EDGE TECH'
  ]

  // Main brand colors
  const colors = ['#FFFFFF', '#D8973C', '#273E47']

  // Initialize scroll-triggered text animation
  useEffect(() => {
    if (!heroRef.current || !titleRef.current) return


    gsap.registerPlugin(ScrollTrigger, TextPlugin)

    const updateColors = (index: number) => {
      const bgColor = colors[index % colors.length]
      const textColor =
        bgColor === '#D8973C'
          ? '#FFFFFF'
          : bgColor === '#FFFFFF'
            ? '#D8973C'
            : '#FFFFFF'

      gsap.to(heroRef.current, { backgroundColor: bgColor, duration: 0.5 })
      gsap.to(titleRef.current, { color: textColor, duration: 0.5 })
    }


    updateColors(0)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: `+=${phrases.length * 100}%`,
        scrub: true,
        pin: true,
        snap: 1 / (phrases.length - 1)
      }
    })

    phrases.forEach((phrase, i) => {
      tl.to(titleRef.current, {
        text: phrase,
        duration: 1,
        ease: 'power2.out',
        onStart: () => updateColors(i)
      })
    })

    return () => {
      tl.scrollTrigger?.kill()
    }
  }, [])


  return (
    <section
      ref={heroRef}
      id="home"
      className="relative bg-white dark:bg-gray-900 overflow-hidden"
      style={{ height: '100vh', paddingTop: '80px' }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-move opacity-20" />
      <MouseParticles containerRef={heroRef} />


      <div className="flex items-center justify-center h-screen w-screen px-4 text-center relative z-10">

        {/* Main title */}
        <h1
          ref={titleRef}
          className="font-techno text-4xl md:text-6xl lg:text-8xl font-bold leading-tight drop-shadow-lg"
          style={{ color: '#D8973C' }}
        >
          {phrases[0]}
        </h1>


      </div>
    </section>
  )
}
