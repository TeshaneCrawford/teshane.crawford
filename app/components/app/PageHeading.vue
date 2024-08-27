<script setup lang="ts">
defineProps<{
  title?: string
  description?: string
}>()
</script>

<template>
  <div class="lg:px-16 sm:px-8">
    <div class="mx-auto max-w-screen-xl px-4 lg:px-12 sm:px-8">
      <div class="mx-auto max-w-2xl flex flex-col gap-16 lg:max-w-5xl">
        <div
          v-if="title || description || $slots.title
            || $slots.description"
          class="flex flex-col gap-4"
        >
          <AppPageTitle>
            <slot name="title">
              {{ title }}
            </slot>
          </AppPageTitle>
          <p class="max-w-4xl text-sm text-gray-5 font-dank italic sm:text-base dark:text-gray-4">
            <slot name="description">
              {{ description }}
            </slot>
          </p>
        </div>

        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
