<script setup lang="ts">
defineProps<{
  text?: string
}>()
</script>

<template>
  <h1 class="text-4xl sm:text-5xl font-bold tracking-tight text-gray-8 dark:text-gray-1">
    <slot>{{ text }}</slot>
  </h1>
</template>

<style scoped></style>
