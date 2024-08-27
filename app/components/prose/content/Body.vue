<script setup lang="ts"></script>

<template>
  <div class="max-w-5xl prose prose-zinc dark:prose-invert">
    <slot />
  </div>
</template>

<style scoped>
div> :deep(*> :first-child) {
  margin-top: 0;
}
</style>
