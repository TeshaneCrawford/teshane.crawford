<script lang="ts" setup>
import type { NuxtError } from '#app'

defineProps({
  error: Object as () => NuxtError,
})

useSeoMeta({
  title: 'Error',
  description: 'An error occurred while rendering the page.',
  ogTitle: 'Error',
  ogDescription: 'An error occurred while rendering the page.',
  twitterTitle: 'Error',
  twitterDescription: 'An error occurred while rendering the page.',
  twitterCard: 'summary_large_image',
  ogImage: '/logo/TV.png',
  twitterImage: '/logo/TV.png',
})

useHead({
  bodyAttrs: {
    class: 'font-sans antialiased text-gray-6 dark:text-gray-2',
  },
})
</script>

<template>
  <div>
    <AppNavbar />
    <main class="font-dank relative z-20 w-full max-w-4xl mx-auto mt-16 px-7 md:mt-24 lg:mt-8 xl:px-0">
      <h1 class="font-bold text-8xl mb-24">
        Oh No!
      </h1>
      <h2 class="font-bold text-5xl mb-2">
        Error {{ error?.statusCode }}
      </h2>
      <p class="mb font-sans">
        An error occurred while rendering the page.
      </p>
      <pre mb-4>{{ error?.message }}</pre>
      <NuxtLink
        to="/"
        class="text-p-r-r font-semibold hover:underline hover:underline-offset-4 hover:underline-blue"
      >
        Go back home
      </NuxtLink>
      <AppFooter class="relative -ml mt-24 font-sans" />
    </main>
  </div>
</template>

<style scoped>

</style>
