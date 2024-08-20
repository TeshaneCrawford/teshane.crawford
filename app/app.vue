<script setup lang="ts">
const title = ref('Teshane Crawford - Software Engineer')
const description = ref('Teshane Crawford is a software engineer based in New York City. I help companies build better applications.')
defineOgImageComponent(
  'MainOg',
)

const faviconHref = ref('/logo/TV.png') // Valor predeterminado

onMounted(() => {
  const updateFavicon = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      faviconHref.value = '/logo/TC.png'
    }
    else {
      faviconHref.value = '/logo/TV.png'
    }
  }

  updateFavicon()
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateFavicon)
})

useHead({
  bodyAttrs: {
    class: 'font-sans antialiased text-gray-6 dark:text-gray-2',
  },
  htmlAttrs: {
    lang: 'en',
  },
  titleTemplate: c => c ? `${c} - Teshane Crawford` : 'Teshane Crawford - Software Engineer',
  // title: 'Teshane Crawford - Software Engineer',
  meta: [
    {
      name: 'description',
      content: 'Teshane Crawford is a software engineer based in New York City.',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: faviconHref,
    },
  ],
})

useSeoMeta({
  title: title,
  description: description,
  ogTitle: title,
  ogDescription: description,
  twitterTitle: title,
  twitterDescription: description,
  twitterCard: 'summary_large_image',
  ogImage: '[og:image]',
  twitterImage: '[twitter:image]',
})

// eslint-disable-next-line import/first -- simple patch to fix the issue for now
import { Toaster } from 'vue-sonner'
</script>

<template>
  <div>
    <NuxtRouteAnnouncer>
      <template #default="{ message }">
        <p>{{ message }} was loaded.</p>
      </template>
    </NuxtRouteAnnouncer>
    <NuxtLoadingIndicator />
    <AppBgNoise />
    <AppNavbar />
    <main class="of-x-hidden px-7 py-10 min-h-dvh">
      <NuxtPage />
      <Toaster rich-colors />
    </main>
    <AppFooter class="relative ml-7" />
  </div>
</template>
