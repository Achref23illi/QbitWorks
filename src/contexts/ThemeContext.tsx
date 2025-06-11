import React, { createContext, useContext, useEffect, useState } from 'react'
import { themeConfig, Theme } from '@/config/theme.config'

type ThemeContextType = {
  theme: Theme | 'system'
  setTheme: (theme: Theme | 'system') => void
  resolvedTheme: Theme
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme | 'system'
  storageKey?: string
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = themeConfig.defaultTheme,
  storageKey = themeConfig.storageKey,
}) => {
  const [theme, setThemeState] = useState<Theme | 'system'>(defaultTheme)
  const [resolvedTheme, setResolvedTheme] = useState<Theme>('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem(storageKey) as Theme | 'system' | null
    if (savedTheme) {
      setThemeState(savedTheme)
    }
  }, [storageKey])

  useEffect(() => {
    const root = window.document.documentElement

    const applyTheme = (theme: Theme) => {
      root.classList.remove('light', 'dark')
      root.classList.add(theme)
      setResolvedTheme(theme)
    }

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const handleChange = () => {
        applyTheme(mediaQuery.matches ? 'dark' : 'light')
      }
      
      handleChange()
      mediaQuery.addEventListener('change', handleChange)
      
      return () => mediaQuery.removeEventListener('change', handleChange)
    } else {
      applyTheme(theme)
    }
  }, [theme])

  const setTheme = (newTheme: Theme | 'system') => {
    setThemeState(newTheme)
    localStorage.setItem(storageKey, newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}