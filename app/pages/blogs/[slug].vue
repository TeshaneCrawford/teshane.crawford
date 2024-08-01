<script setup lang="ts">
import type { BlogPost } from '~~/types/blog'

const route = useRoute()

const { data: page, error } = await useAsyncData(route.path, () => queryContent<BlogPost>(route.path).findOne())

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
  </BlogMain>
</template>

<style scoped></style>
