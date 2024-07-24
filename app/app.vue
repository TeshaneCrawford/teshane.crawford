import { NuxtLoadingIndicator } from '../.nuxt/components';
<script setup lang="ts">
useHead({
  title: 'Teshane Crawford - Software Engineer',
  meta: [
    {
      name: 'description',
      content: 'Teshane Crawford is a software engineer based in New York City.'
    }
  ]
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
    <NuxtPage />
  </div>
</template>
