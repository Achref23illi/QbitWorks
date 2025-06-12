import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { assetsConfig } from '@/config/assets.config'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Tech Stack', href: '#techstack' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  const navRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLImageElement>(null)
  const menuItemsRef = useRef<(HTMLLIElement | null)[]>([])
  const toggleRef = useRef<HTMLButtonElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Animation d'entrée subtile
    gsap.fromTo(navRef.current, 
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
    )

    // Logo avec animation élégante
    gsap.fromTo(logoRef.current,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power2.out", delay: 0.2 }
    )

    // Menu items avec stagger subtil
    gsap.fromTo(menuItemsRef.current.filter(Boolean),
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out", delay: 0.4 }
    )
  }, [])

  const handleLogoHover = (isHovering: boolean) => {
    gsap.to(logoRef.current, {
      scale: isHovering ? 1.03 : 1,
      duration: 0.3,
      ease: "power2.out"
    })
  }

  const handleMenuItemHover = (element: HTMLElement, isHovering: boolean) => {
    gsap.to(element, {
      y: isHovering ? -2 : 0,
      duration: 0.2,
      ease: "power2.out"
    })

    const underline = element.querySelector('.nav-underline')
    gsap.to(underline, {
      scaleX: isHovering ? 1 : 0,
      duration: 0.25,
      ease: "power2.out"
    })
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    
    gsap.to(toggleRef.current, {
      rotation: isDarkMode ? 0 : 180,
      duration: 0.4,
      ease: "power2.out"
    })
  }

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen)
    
    if (!isOpen) {
      gsap.fromTo(mobileMenuRef.current,
        { height: 0, opacity: 0 },
        { height: 'auto', opacity: 1, duration: 0.3, ease: "power2.out" }
      )
    } else {
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.25,
        ease: "power2.in"
      })
    }
  }

  return (
    <nav 
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isDarkMode 
          ? 'bg-slate-950/90 border-slate-800/50' 
          : 'bg-white/90 border-slate-200/50'
      } ${scrolled ? 'backdrop-blur-xl shadow-2xl shadow-slate-900/10' : 'backdrop-blur-sm'} border-b`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center">
            <a 
              href="#home" 
              className="flex items-center group"
              onMouseEnter={() => handleLogoHover(true)}
              onMouseLeave={() => handleLogoHover(false)}
            >
              <div className="relative">
                <img
                  ref={logoRef}
                  src={isDarkMode ? assetsConfig.logo.dark : assetsConfig.logo.main}
                  alt={assetsConfig.logo.alt}
                  className="h-10 w-auto"
                  width={assetsConfig.logo.dimensions.width}
                  height={assetsConfig.logo.dimensions.height}
                />
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            <ul className="flex items-center space-x-10">
              {navItems.map((item, index) => (
                <li
                  key={item.label}
                  ref={el => { menuItemsRef.current[index] = el }}
                  className="relative"
                  onMouseEnter={(e) => handleMenuItemHover(e.currentTarget, true)}
                  onMouseLeave={(e) => handleMenuItemHover(e.currentTarget, false)}
                >
                  <a
                    href={item.href}
                    className={`font-medium text-sm uppercase tracking-wider transition-all duration-300 relative ${
                      isDarkMode 
                        ? 'text-slate-300 hover:text-white' 
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {item.label}
                    <div 
                      className="nav-underline absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-amber-600 to-orange-600 transform scale-x-0 origin-left"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex items-center space-x-6">
            <button
              ref={toggleRef}
              onClick={toggleTheme}
              className={`p-2.5 rounded-xl transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-slate-800 text-amber-400 hover:bg-slate-700 border border-slate-700' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {isDarkMode ? (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
            
            <div className={`w-px h-6 ${isDarkMode ? 'bg-slate-700' : 'bg-slate-300'}`} />
            
            <button className={`px-8 py-3 text-sm font-medium tracking-wide rounded-xl transition-all duration-300 ${
              isDarkMode
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/30'
                : 'bg-gradient-to-r from-slate-900 to-slate-800 text-white hover:from-slate-800 hover:to-slate-700 shadow-lg shadow-slate-900/25 hover:shadow-xl hover:shadow-slate-900/30'
            } hover:-translate-y-0.5`}>
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${
              isDarkMode 
                ? 'hover:bg-slate-800 text-slate-300 border border-slate-700' 
                : 'hover:bg-slate-100 text-slate-600 border border-slate-200'
            }`}
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <span className={`block h-0.5 w-full transition-all duration-300 ${
                isDarkMode ? 'bg-slate-300' : 'bg-slate-600'
              } ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block h-0.5 w-full transition-all duration-300 ${
                isDarkMode ? 'bg-slate-300' : 'bg-slate-600'
              } ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-full transition-all duration-300 ${
                isDarkMode ? 'bg-slate-300' : 'bg-slate-600'
              } ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden overflow-hidden ${
            isDarkMode 
              ? 'border-slate-700 bg-slate-950/95' 
              : 'border-slate-200 bg-white/95'
          } ${isOpen ? 'border-t backdrop-blur-xl' : ''}`}
          style={{ height: isOpen ? 'auto' : 0 }}
        >
          <div className="py-6 px-2">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 px-4 text-sm font-medium tracking-wide rounded-lg transition-all duration-300 ${
                      isDarkMode 
                        ? 'text-slate-300 hover:text-white hover:bg-slate-800' 
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className={`mt-6 pt-6 border-t ${isDarkMode ? 'border-slate-700' : 'border-slate-200'} flex items-center justify-between gap-4`}>
              <button
                onClick={toggleTheme}
                className={`p-2.5 rounded-xl transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-slate-800 text-amber-400 hover:bg-slate-700 border border-slate-700' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {isDarkMode ? '☀️' : '🌙'}
              </button>
                                          <button className={`flex-1 px-6 py-3 text-sm font-medium tracking-wide rounded-xl transition-all duration-300 ${
                                            isDarkMode
                                              ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600'
                                              : 'bg-gradient-to-r from-slate-900 to-slate-800 text-white hover:from-slate-800 hover:to-slate-700'
                                          }`}>
                                            Get Started
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </nav>
                              )
                            }