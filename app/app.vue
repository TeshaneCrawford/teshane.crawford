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
  <head>
    <link
      rel="preconnect"
      href="https://fonts.googleapis.com"
    >
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
    >
    <link
      href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
      rel="stylesheet"
    >

    <link
      rel="preconnect"
      href="https://fonts.googleapis.com"
    >
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
    >
    <link
      href="https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap"
      rel="stylesheet"
    >
  </head>
  <body class="font-sans antialiased text-gray-6 dark:text-gray-2">
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
  </body>
</template>
