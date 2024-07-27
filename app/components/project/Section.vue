<script setup lang="ts">
const { data: repoGroup } = await useFetch('/api/repos')

// import type { Repo } from '../../../types/project'

// const { data: doc } = await useAsyncData('projects', () => queryContent('/projects/').findOne())

// onMounted(async () => {
//   const data = await $fetch<Repo[]>('https://api.github.com/users/TeshaneCrawford/repos?sort=updated')
//   const publicRepos = data.filter(repo => !repo.private && !repo.archived)
//   const publicAndNotForkRepos = publicRepos.filter(repo => !repo.fork)

//   const repoGroups: Record<string, Repo[]> = {
//     'Angular': filterRepos(publicAndNotForkRepos, 'angular'),
//     'Vue Ecosystem': filterRepos(publicAndNotForkRepos, 'vue'),
//     'React': filterRepos(publicAndNotForkRepos, 'react'),
//     'C#': filterRepos(publicAndNotForkRepos, 'csharp'),
//     'TypeScript': filterRepos(publicAndNotForkRepos, 'typescript'),
//     'JavaScript': filterRepos(publicAndNotForkRepos, 'javascript'),
//     'Python': filterRepos(publicAndNotForkRepos, 'python'),
//     'Apps': filterRepos(publicAndNotForkRepos, 'apps'),
//     'Mobile': filterRepos(publicRepos, 'mobile'),
//     'UI': filterRepos(publicRepos, 'ui'),
//     'API': filterRepos(publicAndNotForkRepos, 'api'),
//     'Library': filterRepos(publicAndNotForkRepos, 'library'),
//     'Templates': filterRepos(publicAndNotForkRepos, 'template'),
//     'All': publicAndNotForkRepos,
//   }

//   repoGroup.value = repoGroups
// })

// function filterRepos(repos: Repo[], key: string) {
//   return repos.filter(repo => repo.topics && repo.topics.includes(key))
// }

// const repoGroup = ref({} as Record<string, Repo[]>)
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
