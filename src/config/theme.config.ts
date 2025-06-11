export const themeConfig = {
  defaultTheme: 'light' as 'light' | 'dark' | 'system',
  storageKey: 'qbitworks-theme',
  
  themes: {
    light: {
      name: 'Light',
      cssClass: 'light',
    },
    dark: {
      name: 'Dark', 
      cssClass: 'dark',
    },
  },

  transitions: {
    duration: 200,
    ease: 'ease-in-out',
  },

  breakpoints: {
    xs: '320px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  container: {
    center: true,
    padding: {
      default: '1rem',
      sm: '2rem',
      lg: '4rem',
      xl: '5rem',
      '2xl': '6rem',
    },
  },

  radius: {
    none: '0px',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },

  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    none: 'none',
  },

  blur: {
    none: '0',
    sm: '4px',
    base: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    '2xl': '40px',
    '3xl': '64px',
  },
}

export type ThemeConfig = typeof themeConfig
export type Theme = keyof typeof themeConfig.themes
export type Breakpoint = keyof typeof themeConfig.breakpoints
export type Radius = keyof typeof themeConfig.radius
export type Shadow = keyof typeof themeConfig.shadows
export type Blur = keyof typeof themeConfig.blur