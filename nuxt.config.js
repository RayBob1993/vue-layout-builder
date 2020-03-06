import { config } from 'dotenv'

config()

const isDev = process.env.NODE_ENV === 'development'

export default {
  mode: 'spa',
  dev: isDev,
  server: {
    port: process.env.APP_PORT,
  },
  head: {
    title: 'vue-layout-builder',
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
  },
  buildModules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
  ],
  modules: [
    '@bazzite/nuxt-optimized-images',
  ],
  plugins: [
    '@/plugins/components',
    '@/plugins/element-ui',
    '@/plugins/elements',
    '@/plugins/vuedraggable',
  ],
  css: [
    {
      src: '@/assets/styles/bootstrap/index.scss',
      lang: 'scss',
    },
    {
      src: '@/assets/styles/element-ui/index.scss',
      lang: 'scss',
    },
    {
      src: '@/assets/styles/index.scss',
      lang: 'scss',
    },
  ],
  styleResources: {
    scss: [
      '@/assets/styles/variables.scss',
    ],
  },
  optimizedImages: {
    handleImages: [
      'jpeg',
      'png',
      'gif',
    ],
    optimizeImagesInDev: false,
    mozjpeg: {
      quality: 80,
      progressive: true,
      sample: [
        '2x2',
      ],
    },
    pngquant: {
      quality: '75-100',
    },
    optipng: {
      optimizationLevel: 3,
    },
    gifsicle: {
      interlaced: true,
      optimizationLevel: 3,
    },
  },
}
