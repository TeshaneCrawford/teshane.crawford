<script setup lang="ts">
const route = useRoute()
const { data: doc } = await useAsyncData(route.path, () => queryContent(route.path).findOne())
</script>

<template>
  <AppPageHeading
    :title="doc?.title"
    :description="doc?.description"
  >
    <ProjectSection />
  </AppPageHeading>
</template>

<style scoped></style>
