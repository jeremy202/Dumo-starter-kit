// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  app: {
    head: {
      title: 'dumo starter kit',
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
  css: [
    '~/assets/css/style.css',
    '~/assets/css/main.css',
    // '~/assets/css/inputs.css',
  ],
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL || '',
    },
  },
  devtools: {
    enabled: true,
  },
})
