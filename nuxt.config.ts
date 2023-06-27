import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Integritee',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex',
        },
      ],
    },
  },
  routeRules: {
    '/': { ssr: true },
    '/products': { static: true },
    '/usecases': { ssr: true },
    '/technology': { static: true },
    '/developers': { static: true },
    '/teer-token': { static: true },
    '/contacts': { static: true },
    '/about': { static: true },
    '/blog': { ssr: true },
    // '/old-page2': { redirect: { to: '/new-page', statusCode: 302 } },
  },
  imports: {
    autoImport: false,
  },
  css: ['@/assets/scss/main.scss'],
  modules: ['nuxt-svgo', '@pinia/nuxt'],
  plugins: [{ src: '~/plugins/lockScroll', mode: 'client' }],
  svgo: {
    defaultImport: 'component',
    global: false,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_variables.scss" as *;',
        },
      },
    },
  },
})
