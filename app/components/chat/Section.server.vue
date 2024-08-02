<script setup lang="ts">
const { data: doc } = await useLazyAsyncData('chat', () => queryContent('/chat/').findOne())
</script>

<template>
  <AppPageHeading
    :title="doc?.title"
    :description="doc?.description"
  >
    <h2 class="text-4xl font-medium">
      {{ doc && doc.heading }}
    </h2>
    <div class="space-y-5">
      <NuxtLink
        v-for="link in doc?.links"
        :key="link.name"
        :to="link.url"
        target="_blank"
        external
        class="flex items-end gap-4 dark:hover:text-gray-300"
      >
        <span class="">
          {{ link.name }}
        </span>

        <div
          class="flex-1 border-b border-gray-300 border-dashed transition-colors hover:border-gray-700"
        />

        <div class="border border-rounded p-2  bg-white/60 dark:bg-white/10 hover:bg-gray-50 dark:hover:bg-white/5">
          <icon
            class="h-6 w-6 flex"
            :name="link.icon"
          />
        </div>
      </NuxtLink>
    </div>
  </AppPageHeading>
</template>

<style scoped></style>
