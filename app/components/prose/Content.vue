<script setup lang="ts"></script>

<template>
  <div class="max-w-none prose prose-zinc dark:prose-invert">
    <slot />
  </div>
</template>

<style scoped>
.prose :deep(:first-child) {
  margin-top: 0;
}
.prose :deep(:last-child) {
  margin-bottom: 0;
}
</style>
