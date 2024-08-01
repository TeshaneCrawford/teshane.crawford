<script setup lang="ts">
import type { BlogPost } from '~~/types/blog'

const route = useRoute()

const { data: page, error } = await useAsyncData(route.path, () => queryContent<BlogPost>(route.path).findOne())
const allArticles = await queryContent('blog').sort({ date: -1 }).only(['title', '_path', 'date']).find()

const articleIndex = allArticles.findIndex(a => a._path === route.path)
const previousArticle = articleIndex > 0 ? allArticles[articleIndex - 1] : null
const nextArticle = articleIndex < allArticles.length - 1 ? allArticles[articleIndex + 1] : null

if (error.value) {
  throw createError({
    statusCode: 404,
    message: 'Page not found',
    fatal: true,
  })
}

useHead({
  templateParams: {
    subtitle: 'Blog',
  },
  titleTemplate: '%s %separator %subtitle %separator %siteName',
  title: page.value?.title,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: page.value?.description,
    },
  ],
})
</script>

<template>
  <BlogMain v-if="page">
    <Prose :toc="page.body?.toc">
      <template #header>
        <ProseHeaderArticle
          v-if="page.title"
          :title="page.title"
          :date="page.publishedAt"
          :categories="page.categories"
          :authors="page.authors"
        />
      </template>

      <ContentRenderer :value="page" />

      <template #nav>
        <!-- <UDivider /> -->
        <hr>
        <ProseNavigationCommunity :filename="page._file" />
      </template>
    </Prose>
    <nav class="grid grid-cols-2 gap-x-12 mt-8">
      <NuxtLink
        v-if="previousArticle"
        :to="`${previousArticle._path}`"
        class="text-black/60 dark:text-white/70 hover:underline"
      >
        ← {{ previousArticle.title }}
      </NuxtLink>
      <NuxtLink
        v-if="nextArticle"
        :to="`${nextArticle._path}`"
        class="text-black/60 dark:text-white/70 hover:underline"
      >
        {{ nextArticle.title }} →
      </NuxtLink>
    </nav>
  </BlogMain>
</template>

<style scoped></style>
