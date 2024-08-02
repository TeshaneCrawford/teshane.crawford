<script setup lang="ts">
const { data: repoGroup } = await useFetch('/api/repos')
const { data: doc } = await useAsyncData('projects', () => queryContent('/projects/').findOne())
</script>

<template>
  <AppPageHeading
    :title="doc?.title"
    :description="doc?.description"
  >
    <ProjectGitHubRepoPanel
      v-for="(repos, key) in repoGroup"
      :key="(key as string).toString()"
      :label="(key as string).toString()"
      :data="repos"
    />
  </AppPageHeading>
</template>

<style scoped></style>
