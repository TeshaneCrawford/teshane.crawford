<script setup lang="ts">
const { error } = await useLazyAsyncData('blogs', () => queryContent('/blogs/').findOne())

if (error.value) {
  throw createError({
    statusCode: 404,
    message: error.value.message || 'Page not found',
    fatal: true,
  })
}

const {
  fetchBlogArticles,
  articles,
} = useBlog()

await fetchBlogArticles()

defineProps<{
  blogtitle?: string
}>()
</script>

<template>
  <div
    v-for="item in articles"
    :key="item._path"
  >
    <BlogCard
      :path="item._path!"
      :title="item.title"
      :description="item.description"
      :published-at="item.publishedAt"
      :authors="item.authors"
    />
  </div>
</template>

<style scoped></style>
