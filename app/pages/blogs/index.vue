<script setup lang="ts">
const route = useRoute()

const { data: page, error } = await useAsyncData(route.path, () => queryContent(route.path).findOne())

if (error.value) {
  throw createError({
    statusCode: error.value.statusCode,
    message: error.value.message,
    fatal: true,
  })
}

useHead({
  title: page.value?.title,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: page.value?.description,
    },
  ],
})

const {
  fetchBlogArticles,
  // updateQuery,
  // reset,
  articles,
  // q,
  // categories,
  // categoriesOptions,
  // authors,
  // authorsOptions,
  // order,
  // orderBy,
  // orderByOptions,
} = useBlog()

await fetchBlogArticles()
</script>

<template>
  <BlogMain v-if="page">
    <AppPageHeading
      :title="page.title"
      :description="page.description"
    >
      <section>
        <h2 class="sr-only">
          List of blog posts
        </h2>

        <AppListGrid class="mt-8">
          <AppListGridItem
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
          </AppListGridItem>
          <AppListGridEmpty v-if="articles && articles.length === 0">
            No articles found
          </AppListGridEmpty>
        </AppListGrid>
      </section>
    </AppPageHeading>
  </BlogMain>
</template>

<style scoped></style>
