<script setup lang="ts">
// const title = ref('A blog about technologies I use in web development and programming.')
// const description = ref('I write about the technologies I use in web development and programming. I also write about my experiences as a software engineer.')
// defineOgImageComponent(
//   'BlogPost',
//   {
//     title: title,
//     description: description,
//   },
// )

useHead({
  bodyAttrs: {
    class: 'font-sans antialiased text-gray-6 dark:text-gray-2',
  },
  title: 'Teshane Crawford - Software Engineer',
  meta: [
    {
      name: 'description',
      content: 'Teshane Crawford is a software engineer based in New York City.',
    },
  ],
})
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
    </main>
    <AppFooter class="relative ml-7" />
  </div>
</template>
