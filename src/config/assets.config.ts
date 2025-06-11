export const assetsConfig = {
  basePath: '/src/assets',
  
  paths: {
    images: {
      root: '/src/assets/images',
      logos: '/src/assets/images/logos',
      backgrounds: '/src/assets/images/backgrounds',
      illustrations: '/src/assets/images/illustrations',
      avatars: '/src/assets/images/avatars',
      products: '/src/assets/images/products',
    },
    icons: {
      root: '/src/assets/icons',
      ui: '/src/assets/icons/ui',
      social: '/src/assets/icons/social',
      brands: '/src/assets/icons/brands',
    },
    videos: {
      root: '/src/assets/videos',
      backgrounds: '/src/assets/videos/backgrounds',
      tutorials: '/src/assets/videos/tutorials',
    },
    fonts: {
      root: '/src/assets/fonts',
      woff: '/src/assets/fonts/woff',
      woff2: '/src/assets/fonts/woff2',
    },
  },

  formats: {
    images: ['jpg', 'jpeg', 'png', 'gif', 'svg', 'webp', 'avif'],
    videos: ['mp4', 'webm', 'ogg', 'mov'],
    icons: ['svg', 'png'],
    fonts: ['woff', 'woff2', 'ttf', 'otf'],
  },

  sizes: {
    thumbnail: {
      width: 150,
      height: 150,
      quality: 80,
    },
    small: {
      width: 480,
      height: 480,
      quality: 85,
    },
    medium: {
      width: 768,
      height: 768,
      quality: 85,
    },
    large: {
      width: 1024,
      height: 1024,
      quality: 90,
    },
    xlarge: {
      width: 1920,
      height: 1920,
      quality: 90,
    },
    '2k': {
      width: 2560,
      height: 1440,
      quality: 95,
    },
    '4k': {
      width: 3840,
      height: 2160,
      quality: 95,
    },
  },

  optimization: {
    lazyLoad: true,
    preload: ['logo', 'hero-background'],
    compression: {
      enabled: true,
      quality: {
        jpg: 85,
        png: 90,
        webp: 85,
        avif: 80,
      },
    },
    responsive: {
      enabled: true,
      breakpoints: [320, 640, 768, 1024, 1280, 1536],
      formats: ['webp', 'avif', 'original'],
    },
  },

  placeholders: {
    blur: {
      enabled: true,
      quality: 10,
      size: 40,
    },
    skeleton: {
      enabled: true,
      backgroundColor: '#e5e7eb',
      shimmer: true,
    },
    default: {
      image: '/src/assets/images/placeholder.svg',
      avatar: '/src/assets/images/avatar-placeholder.svg',
      video: '/src/assets/images/video-placeholder.svg',
    },
  },

  logo: {
    main: '/src/assets/images/qbitworks.svg',
    dark: '/src/assets/images/qbitworks2.svg',
    alt: 'QBitWorks - Digital Solutions Agency',
    dimensions: {
      width: 180,
      height: 40,
    },
  },

  cdn: {
    enabled: false,
    baseUrl: '',
    providers: {
      cloudinary: {
        cloudName: '',
        apiKey: '',
      },
      imagekit: {
        urlEndpoint: '',
        publicKey: '',
      },
    },
  },

  icons: {
    sprite: {
      enabled: true,
      path: '/src/assets/icons/sprite.svg',
    },
    defaultSize: 24,
    sizes: {
      xs: 16,
      sm: 20,
      md: 24,
      lg: 32,
      xl: 40,
      '2xl': 48,
    },
  },

  metadata: {
    copyright: 'QBitWorks',
    author: 'QBitWorks Team',
    defaultAlt: 'QBitWorks - Digital Solutions',
  },
}

export type AssetsConfig = typeof assetsConfig
export type ImageSize = keyof typeof assetsConfig.sizes
export type IconSize = keyof typeof assetsConfig.icons.sizes
export type AssetFormat = 
  | typeof assetsConfig.formats.images[number]
  | typeof assetsConfig.formats.videos[number]
  | typeof assetsConfig.formats.icons[number]
  | typeof assetsConfig.formats.fonts[number]