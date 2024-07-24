// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  typescript: {
    typeCheck: true,
    strict: true
  },
  modules: ["@nuxt/eslint", "@unocss/nuxt"],

  // https://unocss.com/docs/nuxt
  css: [
    // '@/assets/css/main.css',
    '@unocss/reset/tailwind.css',
  ],

  // https://eslint.nuxt.com
  eslint: {
    config: {
      stylistic: {
        quotes: 'single'
      },
      // standalone: false,
    }
  }
})