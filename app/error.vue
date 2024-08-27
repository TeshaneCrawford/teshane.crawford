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
    <main class="relative z-20 mx-auto mt-16 max-w-4xl w-full px-7 font-dank lg:mt-8 md:mt-24 xl:px-0">
      <h1 class="mb-24 text-8xl font-bold">
        Oh No!
      </h1>
      <h2 class="mb-2 text-5xl font-bold">
        Error {{ error?.statusCode }}
      </h2>
      <p class="mb font-sans">
        An error occurred while rendering the page.
      </p>
      <pre mb-4>{{ error?.message }}</pre>
      <NuxtLink
        to="/"
        class="text-p-r-r font-semibold hover:underline hover:underline-blue hover:underline-offset-4"
      >
        Go back home
      </NuxtLink>
      <AppFooter class="relative mt-24 font-sans -ml" />
    </main>
  </div>
</template>

<style scoped>

</style>
