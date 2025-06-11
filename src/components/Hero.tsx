import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const [currentPhrase, setCurrentPhrase] = useState(0)

  const phrases = [
    "BUILDING DIGITAL EXCELLENCE",
    "CRAFTING INNOVATIVE SOLUTIONS", 
    "TRANSFORMING IDEAS TO REALITY",
    "CREATING POWERFUL EXPERIENCES",
    "DEVELOPING CUTTING-EDGE TECH"
  ]

  useEffect(() => {
    if (!heroRef.current || !titleRef.current) return

    gsap.registerPlugin(ScrollTrigger)

    // Fade in the first phrase
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5 }
    )

    // Text movement and background change on scroll
    gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    })
      .to(heroRef.current, { backgroundColor: '#273E47', ease: 'none' }, 0)
      .to(titleRef.current, { y: -150, scale: 1.2, ease: 'none' }, 0)

    const handleScroll = () => {
      const section = heroRef.current!
      const start = section.offsetTop
      const end = start + section.offsetHeight - window.innerHeight
      const progress = Math.min(Math.max((window.scrollY - start) / (end - start), 0), 1)
      const index = Math.min(Math.floor(progress * phrases.length), phrases.length - 1)
      setCurrentPhrase(index)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [phrases.length])

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative bg-white dark:bg-gray-900"
      style={{ height: `${phrases.length * 100}vh`, paddingTop: '80px' }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(216, 151, 60, 0.1) 0%, rgba(39, 62, 71, 0.05) 50%, transparent 100%)'
        }}
      />

      <div className="sticky top-0 flex items-center justify-center h-screen container mx-auto px-4 text-center relative z-10">
        {/* Main title */}
        <h1
          ref={titleRef}
          className="font-techno text-4xl md:text-6xl lg:text-8xl font-bold mb-8 leading-tight"
          style={{
            background: 'linear-gradient(135deg, #D8973C 0%, #273E47 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          {phrases[currentPhrase]}
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-12 font-light">
          We craft innovative web solutions that transform ideas into powerful digital experiences
        </p>

      </div>
    </section>
  )
}
