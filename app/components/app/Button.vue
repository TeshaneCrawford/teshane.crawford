<script setup lang="ts">
defineProps<{
  link: string
  text: string
}>()
</script>

<template>
  <NuxtLink
    :to="link"
    :aria-label="text"
    class="mt-5 w-auto inline-flex border border-neutral-900 rounded-lg bg-neutral-900 px-4 py-2 text-xs text-neutral-100 font-semibold duration-300 ease-out hover:border-neutral-700 dark:bg-white hover:bg-white dark:text-neutral-900 hover:text-neutral-900 dark:hover:border-neutral-300 dark:hover:bg-black dark:hover:text-white"
  >
    {{ text }}
  </NuxtLink>
</template>

<style scoped></style>
