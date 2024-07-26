<script setup lang="ts">
useHead({
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
  <body class="font-sans antialiased text-gray-6 dark:text-gray-2">
    <div>
      <NuxtRouteAnnouncer>
        <template #default="{ message }">
          <p>{{ message }} was loaded.</p>
        </template>
      </NuxtRouteAnnouncer>
      <NuxtLoadingIndicator />
      <!-- <AppBgNoise /> -->
      <AppNavbar />
      <main class="of-x-hidden px-7 py-10 min-h-dvh">
        <NuxtPage />
      </main>
      <AppFooter class="relative ml-7" />
    </div>
  </body>
</template>
