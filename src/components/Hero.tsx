import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

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
    if (!heroRef.current) return

    // Fade in the first phrase
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: 0.5 }
      )
    }

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

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button 
            className="px-8 py-4 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: '#000' }}
          >
            View Our Work
          </button>
          
          <button 
            className="px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105"
            style={{ 
              border: '2px solid #D8973C',
              color: '#D8973C'
            }}
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  )
}