export const fontsConfig = {
  families: {
    sans: {
      name: 'Inter',
      fallback: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
      weights: {
        thin: 100,
        extralight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      url: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap',
    },
    serif: {
      name: 'Playfair Display',
      fallback: 'Georgia, Cambria, "Times New Roman", Times, serif',
      weights: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      url: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap',
    },
    mono: {
      name: 'JetBrains Mono',
      fallback: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      weights: {
        thin: 100,
        extralight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
      url: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;200;300;400;500;600;700;800&display=swap',
    },
    display: {
      name: 'Bebas Neue',
      fallback: '"Arial Black", "Arial Bold", Gadget, sans-serif',
      weights: {
        regular: 400,
      },
      url: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap',
    },
    techno: {
      name: 'Techno',
      fallback: '"Orbitron", "Exo 2", "Rajdhani", monospace',
      weights: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      path: '/src/assets/fonts/Techno',
    },
  },

  sizes: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem',   // 60px
    '7xl': '4.5rem',    // 72px
    '8xl': '6rem',      // 96px
    '9xl': '8rem',      // 128px
  },

  lineHeights: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },

  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },

  textStyles: {
    h1: {
      fontSize: '3rem',
      lineHeight: '1.25',
      fontWeight: 700,
      letterSpacing: '-0.025em',
    },
    h2: {
      fontSize: '2.25rem',
      lineHeight: '1.375',
      fontWeight: 600,
      letterSpacing: '-0.025em',
    },
    h3: {
      fontSize: '1.875rem',
      lineHeight: '1.375',
      fontWeight: 600,
      letterSpacing: '0em',
    },
    h4: {
      fontSize: '1.5rem',
      lineHeight: '1.5',
      fontWeight: 600,
      letterSpacing: '0em',
    },
    h5: {
      fontSize: '1.25rem',
      lineHeight: '1.5',
      fontWeight: 600,
      letterSpacing: '0em',
    },
    h6: {
      fontSize: '1.125rem',
      lineHeight: '1.5',
      fontWeight: 600,
      letterSpacing: '0em',
    },
    body: {
      fontSize: '1rem',
      lineHeight: '1.625',
      fontWeight: 400,
      letterSpacing: '0em',
    },
    bodySmall: {
      fontSize: '0.875rem',
      lineHeight: '1.625',
      fontWeight: 400,
      letterSpacing: '0em',
    },
    caption: {
      fontSize: '0.75rem',
      lineHeight: '1.5',
      fontWeight: 400,
      letterSpacing: '0.025em',
    },
    button: {
      fontSize: '0.875rem',
      lineHeight: '1.25',
      fontWeight: 500,
      letterSpacing: '0.05em',
      textTransform: 'uppercase' as const,
    },
    overline: {
      fontSize: '0.75rem',
      lineHeight: '1.5',
      fontWeight: 600,
      letterSpacing: '0.1em',
      textTransform: 'uppercase' as const,
    },
  },

  responsive: {
    scale: {
      mobile: 0.9,
      tablet: 0.95,
      desktop: 1,
    },
    breakpoints: {
      mobile: 640,
      tablet: 768,
      desktop: 1024,
    },
  },
}

export type FontsConfig = typeof fontsConfig
export type FontFamily = keyof typeof fontsConfig.families
export type FontSize = keyof typeof fontsConfig.sizes
export type FontWeight = keyof typeof fontsConfig.families.sans.weights
export type LineHeight = keyof typeof fontsConfig.lineHeights
export type LetterSpacing = keyof typeof fontsConfig.letterSpacing
export type TextStyle = keyof typeof fontsConfig.textStyles