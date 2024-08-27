<script lang="ts" setup>
defineProps<{
  title: string
  date?: string
  categories?: string[]
  authors?: {
    name: string
    picture: string
    twitter: string
  }[]
}>()
</script>

<template>
  <header
    class="relative"
    :class="{ 'pt-10': date }"
  >
    <div class="flex flex-col gap-1">
      <h1 class="text-2xl text-gray-950 font-bold tracking-wide md:text-3xl dark:text-gray-50">
        {{ title }}
      </h1>
    </div>

    <template v-if="date || categories">
      <div class="absolute left-0 top-0 text-sm text-gray-500 font-light dark:text-gray-400">
        <dl class="flex gap-1">
          <template v-if="date">
            <dt class="sr-only">
              Published at
            </dt>
            <dd>
              <time :datetime="toISODateString(date)">
                {{ toLocaleDateString(date) }}
              </time>
            </dd>
          </template>
          <template v-if="date && categories">
            <span>-</span>
          </template>
          <template v-if="categories">
            <dt class="sr-only">
              Categories
            </dt>
            <dd class="capitalize">
              <ul class="categories flex gap-1">
                <li
                  v-for="(category, index) in categories"
                  :key="category"
                  class="flex"
                >
                  <NuxtLink :to="`/blogs/categories/${category}`">
                    {{ category }}
                  </NuxtLink>
                  <span v-if="index !== categories.length - 1">,</span>
                </li>
              </ul>
            </dd>
          </template>
        </dl>
      </div>
    </template>
    <template v-if="authors">
      <dl>
        <dt class="sr-only">
          Authors
        </dt>
        <dd>
          <ul class="mt-6 flex flex-wrap gap-4 md:gap-8">
            <li
              v-for="author in authors"
              :key="author.name"
            >
              <address class="flex items-center gap-2 not-italic">
                <img
                  :src="author.picture"
                  :alt="`Profile picture of ${author.name}`"
                  width="36"
                  height="36"
                  class="h-9 w-9 rounded-full"
                >
                <div class="text-sm">
                  <div class="text-gray-950 font-light leading-none dark:text-gray-50">
                    {{ author.name }}
                  </div>
                  <div class="mt-1">
                    <NuxtLink
                      rel="author noopener"
                      :to="`https://x.com/${author.twitter}`"
                      target="_blank"
                      class="text-gray-500 leading-none transition ease-in dark:text-gray-400 hover:text-gray-950 hover:dark:text-gray-50"
                    >
                      @{{ author.twitter }}
                    </NuxtLink>
                  </div>
                </div>
              </address>
            </li>
          </ul>
        </dd>
      </dl>
    </template>
  </header>
</template>

<style scoped></style>
