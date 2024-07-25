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
    <NuxtRouteAnnouncer>
      <template #default="{ message }">
        <p>{{ message }} was loaded.</p>
      </template>
    </NuxtRouteAnnouncer>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </body>
</template>
