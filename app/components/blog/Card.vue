<script setup lang="ts">
import type { Author } from '~~/types/author'

defineProps<{
  path: string
  title: string
  description: string
  publishedAt: string
  authors: Author[]
}>()
</script>

<template>
  <div
    as="article"
    class="group relative cursor-pointer border border-transparent rounded-2xl border-dashed p-7"
  >
    <div class="absolute inset-0 z-20 h-full w-full border border-neutral-300 rounded-2xl border-dashed bg-white duration-300 ease-out dark:border-neutral-600 dark:bg-neutral-950/95 group-hover:-translate-x-1 group-hover:-translate-y-1" />
    <div class="absolute inset-0 z-10 h-full w-full border border-neutral-300 rounded-2xl border-dashed duration-300 ease-out group-hover:translate-x-1 group-hover:translate-y-1 dark:border-neutral-600" />
    <div class="relative z-30 duration-300 ease-out group-hover:-translate-x-1 group-hover:-translate-y-1">
      <h2 class="mb-3 flex items-center font-medium">
        <NuxtLink :to="path">
          {{ title }}
        </NuxtLink>
        <!-- <i
          class="flex group-hover:translate-x-0 flex-shrink-0 translate-y-0.5 -translate-x-1 w-2.5 h-2.5 stroke-current ml-1 transition-all ease-in-out duration-200  transform"
          i-ri-arrow-right-line
        /> -->
        <!-- <svg
          class="group-hover:translate-x-0 flex-shrink-0 translate-y-0.5 -translate-x-1 w-2.5 h-2.5 stroke-current ml-1 transition-all ease-in-out duration-200  transform"
          viewBox="0 0 13 15"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <g
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <g
              id="svg"
              transform="translate(0.666667, 2.333333)"
              stroke="currentColor"
              stroke-width="2.4"
            >
              <g>
                <>
                <polyline
                  class="transition-all duration-200 ease-out opacity-0 delay-0 group-hover:opacity-100"
                  points="5.33333333 0 10.8333333 5.5 5.33333333 11"
                />
                <line
                  class="transition-all duration-200 ease-out transform -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:ml-0"
                  x1="10.8333333"
                  y1="5.5"
                  x2="0.833333333"
                  y2="5.16666667"
                />
              </>
              </g>
            </g>
          </g>
        </svg> -->
      </h2>
      <p class="text-sm text-neutral-600 dark:text-neutral-400">
        <span> {{ description }} </span>
      </p>
      <dl class="mt-2.5 text-xs text-neutral-800 font-medium dark:text-neutral-300">
        <!-- <dt class="sr-only">
          Published at
        </dt> -->
        <dd>
          <time :datetime="toISODateString(publishedAt)">
            {{ toLocaleDateString(publishedAt) }}
          </time>
        </dd>
      </dl>
    </div>
  </div>
</template>

<style scoped></style>
