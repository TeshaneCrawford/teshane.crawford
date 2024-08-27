<script setup lang="ts">
defineProps<{
  text?: string
}>()
</script>

<template>
  <h1 class="text-4xl text-gray-8 font-bold tracking-tight sm:text-5xl dark:text-gray-1">
    <slot>{{ text }}</slot>
  </h1>
</template>

<style scoped></style>
