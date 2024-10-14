<script setup lang="ts">
const { data: repoGroup } = useFetch('/api/repos')
const { data: doc } = useAsyncData('projects', () => queryContent('/projects/').findOne())
</script>

<template>
  <AppPageHeading
    :title="doc?.title"
    :description="doc?.description"
  >
    <ProjectGitHubRepoPanel
      v-for="(repos, key) in repoGroup"
      :key="key"
      :label="key"
      :data="repos"
    />
  </AppPageHeading>
</template>

<style scoped></style>
