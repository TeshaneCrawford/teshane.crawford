// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  typescript: {
    typeCheck: true,
    strict: true,
    shim: true,
  },
  modules: [
    '@nuxt/eslint',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@nuxt/icon',
  ],

  // https://unocss.com/docs/nuxt
  css: [
    '@/assets/css/main.css',
    '@/assets/css/font.css',
    '@unocss/reset/tailwind.css',
  ],

  app: {
    head: {
      title: 'Teshane Crawford',
      meta: [{ charset: 'utf-8' }],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap',
        },
      ],
    },
  },

  // https://eslint.nuxt.com
  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
      },
      // standalone: false,
    },
  },

  // https://color-mode.nuxtjs.org
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '',
  },

  experimental: {
    componentIslands: true,
    payloadExtraction: true,
    viewTransition: true,
  },
})
