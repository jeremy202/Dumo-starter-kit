// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  app: {
    head: {
      title: 'dumo',
      link: [
        { rel: 'stylesheet', href: 'https://use.typekit.net/nno1nqe.css' },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.png',
        },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },
  css: ['@/assets/css/style.css', '@/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-snackbar',
  ],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  snackbar: {
    top: true,
    right: true,
    duration: 3000,
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL || '',
    },
  },
  imports: {
    dirs: ['store'], // auto import from store directory
  },
  devtools: {
    enabled: true,
  },
})
