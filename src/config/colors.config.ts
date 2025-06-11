export const colorsConfig = {
  brand: {
    primary: {
      50: '#fef9f3',
      100: '#fdf2e7',
      200: '#f9dfc3',
      300: '#f5cb9f',
      400: '#eda456',
      500: '#D8973C',  // Main orange color
      600: '#c28736',
      700: '#a2712e',
      800: '#825a25',
      900: '#6a491e',
      950: '#3d2a11',
    },
    secondary: {
      50: '#f3f6f7',
      100: '#e7edef',
      200: '#c3d2d7',
      300: '#9fb7bf',
      400: '#57828f',
      500: '#273E47',  // Main dark blue color
      600: '#233840',
      700: '#1d2f35',
      800: '#18252b',
      900: '#141e23',
      950: '#0b1114',
    },
    accent: {
      50: '#fefce8',
      100: '#fef9c3',
      200: '#fef08a',
      300: '#fde047',
      400: '#facc15',
      500: '#eab308',
      600: '#ca8a04',
      700: '#a16207',
      800: '#854d0e',
      900: '#713f12',
      950: '#422006',
    },
  },

  semantic: {
    success: {
      light: '#10b981',
      DEFAULT: '#059669',
      dark: '#047857',
    },
    error: {
      light: '#f87171',
      DEFAULT: '#dc2626',
      dark: '#991b1b',
    },
    warning: {
      light: '#fbbf24',
      DEFAULT: '#f59e0b',
      dark: '#d97706',
    },
    info: {
      light: '#60a5fa',
      DEFAULT: '#3b82f6',
      dark: '#1d4ed8',
    },
  },

  neutral: {
    white: '#ffffff',
    black: '#000000',
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
      950: '#030712',
    },
  },

  gradients: {
    primary: 'linear-gradient(135deg, #D8973C 0%, #c28736 100%)',
    secondary: 'linear-gradient(135deg, #273E47 0%, #1d2f35 100%)',
    accent: 'linear-gradient(135deg, #D8973C 0%, #273E47 100%)',
    brand: 'linear-gradient(135deg, #D8973C 0%, #273E47 100%)',
    sunset: 'linear-gradient(135deg, #D8973C 0%, #a2712e 100%)',
    ocean: 'linear-gradient(135deg, #273E47 0%, #18252b 100%)',
    warm: 'linear-gradient(135deg, #fef9f3 0%, #D8973C 100%)',
    dark: 'linear-gradient(135deg, #273E47 0%, #141e23 100%)',
  },

  alpha: {
    black: {
      5: 'rgba(0, 0, 0, 0.05)',
      10: 'rgba(0, 0, 0, 0.1)',
      20: 'rgba(0, 0, 0, 0.2)',
      30: 'rgba(0, 0, 0, 0.3)',
      40: 'rgba(0, 0, 0, 0.4)',
      50: 'rgba(0, 0, 0, 0.5)',
      60: 'rgba(0, 0, 0, 0.6)',
      70: 'rgba(0, 0, 0, 0.7)',
      80: 'rgba(0, 0, 0, 0.8)',
      90: 'rgba(0, 0, 0, 0.9)',
    },
    white: {
      5: 'rgba(255, 255, 255, 0.05)',
      10: 'rgba(255, 255, 255, 0.1)',
      20: 'rgba(255, 255, 255, 0.2)',
      30: 'rgba(255, 255, 255, 0.3)',
      40: 'rgba(255, 255, 255, 0.4)',
      50: 'rgba(255, 255, 255, 0.5)',
      60: 'rgba(255, 255, 255, 0.6)',
      70: 'rgba(255, 255, 255, 0.7)',
      80: 'rgba(255, 255, 255, 0.8)',
      90: 'rgba(255, 255, 255, 0.9)',
    },
  },

  special: {
    backdrop: {
      light: 'rgba(0, 0, 0, 0.5)',
      dark: 'rgba(0, 0, 0, 0.8)',
    },
    overlay: {
      light: 'rgba(255, 255, 255, 0.9)',
      dark: 'rgba(0, 0, 0, 0.9)',
    },
    skeleton: {
      light: '#e5e7eb',
      dark: '#374151',
    },
    hover: {
      light: 'rgba(0, 0, 0, 0.05)',
      dark: 'rgba(255, 255, 255, 0.05)',
    },
    selected: {
      light: 'rgba(59, 130, 246, 0.1)',
      dark: 'rgba(59, 130, 246, 0.2)',
    },
  },
}

export type ColorsConfig = typeof colorsConfig
export type BrandColor = keyof typeof colorsConfig.brand
export type SemanticColor = keyof typeof colorsConfig.semantic
export type GradientColor = keyof typeof colorsConfig.gradients