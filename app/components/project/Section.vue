<script setup lang="ts">
const { data: repoGroup } = await useAsyncData('repos', () => $fetch('/api/repos'))
const { data: doc } = await useAsyncData('projects', () => queryContent('/projects/').findOne())
</script>

<template>
  <AppPageHeading
    :title="doc?.title"
    :description="doc?.description"
  >
    <Suspense>
      <ProjectGitHubRepoPanel
        v-for="(repos, key) in repoGroup"
        :key="key"
        :label="key"
        :data="repos"
      />
      <template #fallback>
        <div>Loading repositories...</div>
      </template>
    </Suspense>
  </AppPageHeading>
</template>

<style scoped></style>
