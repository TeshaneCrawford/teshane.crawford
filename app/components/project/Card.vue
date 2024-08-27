<script setup lang="ts">
defineProps<{
  name: string
  description: string
  url: string
  image: string
}>()
</script>

<template>
  <NuxtLink
    :to="url"
    target="_blank"
    class="group relative h-65 flex flex-col items-stretch rounded-2xl p-7 duration-300 ease-out sm:p-3"
  >
    <span
      class="absolute inset-0 z-20 block h-full w-full border border-transparent rounded-2xl border-dashed bg-transparent duration-300 ease-out group-hover:border group-hover:border-neutral-300 group-hover:border-dashed group-hover:bg-white group-hover:-translate-x-1 group-hover:-translate-y-1 dark:group-hover:border-neutral-600 dark:group-hover:bg-neutral-950"
    />
    <span
      class="absolute inset-0 z-10 block h-full w-full border border-neutral-300 rounded-2xl border-dashed duration-300 ease-out group-hover:translate-x-1 group-hover:translate-y-1 dark:border-neutral-600"
    />
    <span
      class="relative z-30 block duration-300 ease-out group-hover:-translate-x-1 group-hover:-translate-y-1"
    >
      <span class="block w-full">
        <img
          :src="image"
          class="aspect-[16/9] h-auto w-full rounded-lg"
        >
      </span>
      <span class="mb-1 mt-5 block w-full px-1 sm:mt-3">
        <span
          class="mb-0 flex items-center text-base text-neutral-900 font-semibold tracking-tight dark:text-neutral-100"
        >
          <span>{{ name }}</span>
          <svg
            class="ml-1 h-2.5 w-2.5 translate-y-1 transform stroke-current transition-all duration-200 ease-in-out -translate-x-1 group-hover:translate-x-0 group-hover:translate-y-0 -rotate-45"
            viewBox="0 0 13 15"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          ><g
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
          ><g
            id="svg"
            transform="translate(0.666667, 2.333333)"
            stroke="currentColor"
            stroke-width="2.4"
          ><g><polyline
            class="opacity-0 transition-all duration-200 delay-0 ease-out group-hover:opacity-100"
            points="5.33333333 0 10.8333333 5.5 5.33333333 11"
          /><line
            class="transform opacity-0 transition-all duration-200 ease-out group-hover:ml-0 -translate-x-1 group-hover:translate-x-0 group-hover:opacity-100"
            x1="10.8333333"
            y1="5.5"
            x2="0.833333333"
            y2="5.16666667"
          /></g></g></g></svg>
        </span>
        <span class="text-sm text-neutral-600 dark:text-neutral-400">{{ description }}</span>
      </span>
    </span>
  </NuxtLink>
</template>

<style scoped></style>
