<script setup lang="ts">
const { data: repoGroup } = await useFetch('/api/repos')
</script>

<template>
  <ProjectGitHubRepoPanel
    v-for="(repos, key) in repoGroup"
    :key="(key as string).toString()"
    :label="(key as string).toString()"
    :data="repos"
  />
</template>

<style scoped></style>
