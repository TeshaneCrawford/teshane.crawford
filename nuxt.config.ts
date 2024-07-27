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
    '@unocss/reset/tailwind.css',
  ],

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
  },
})
