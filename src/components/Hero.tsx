import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

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

  const gold = '#D4AF37'

  // Change background and title color when phrase updates
  useEffect(() => {
    if (!heroRef.current || !titleRef.current) return
    const bgColor = currentPhrase === 0 ? '#ffffff' : gold
    const textColor = currentPhrase === 0 ? '#273E47' : '#ffffff'

    gsap.to(heroRef.current, { backgroundColor: bgColor, duration: 0.5 })
    gsap.to(titleRef.current, { color: textColor, duration: 0.5 })
    gsap.to(titleRef.current, {
      text: phrases[currentPhrase],
      duration: 1,
      ease: 'power2.out'
    })
  }, [currentPhrase])

  useEffect(() => {
    if (!heroRef.current || !titleRef.current) return

    gsap.registerPlugin(ScrollTrigger, TextPlugin)

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
      className="relative bg-white dark:bg-gray-900 overflow-hidden"
      style={{ height: `${phrases.length * 100}vh`, paddingTop: '80px' }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-move opacity-20" />

      <div className="sticky top-0 flex items-center justify-center h-screen w-screen px-4 text-center relative z-10">
        {/* Main title */}
        <h1
          ref={titleRef}
          className="font-techno text-4xl md:text-6xl lg:text-8xl font-bold leading-tight drop-shadow-lg"
          style={{ color: '#273E47' }}
        >
          {phrases[currentPhrase]}
        </h1>


      </div>
    </section>
  )
}
