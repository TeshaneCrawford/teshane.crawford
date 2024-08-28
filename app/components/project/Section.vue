<script setup lang="ts">
const { data: repoGroup } = await useLazyFetch('/api/repos')
const { data: doc } = await useLazyAsyncData('projects', () => queryContent('/projects/').findOne())
</script>

<template>
  <AppPageHeading
    :title="doc?.title"
    :description="doc?.description"
  >
    <ProjectGitHubRepoPanel
      v-for="(repos, key) in repoGroup"
      :key="key.toString()"
      :label="key.toString()"
      :data="repos"
    />
  </AppPageHeading>
</template>

<style scoped></style>
