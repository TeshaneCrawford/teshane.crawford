<script setup lang="ts">
const skills = [
  {
    title: 'C#',
    icon: 'i-simple-icons-csharp',
  },
  {
    title: '.NET',
    icon: 'i-logos-dotnet',
  },
  {
    title: 'JavaScript',
    icon: 'i-logos-javascript',
  },
  {
    title: 'TypeScript',
    icon: 'i-logos-typescript-icon',
  },
  {
    title: 'Vue.js',
    icon: 'i-logos-vue',
  },
  {
    title: 'Nuxt',
    icon: 'i-logos-nuxt-icon',
  },
  {
    title: 'React',
    icon: 'i-logos-react',
  },
  {
    title: 'Angular',
    icon: 'i-logos-angular-icon',
  },
  {
    title: 'Node.js',
    icon: 'i-logos-nodejs-icon',
  },
  {
    title: 'Azure',
    icon: 'i-logos-azure-icon',
  },
  {
    title: 'Microsoft SQL Server',
    icon: 'i-devicon:microsoftsqlserver',
  },
  {
    title: 'PostgreSQL',
    icon: 'i-logos-postgresql',
  },
  {
    title: 'CSS',
    icon: 'i-devicon:css3',
  },
  {
    title: 'Git',
    icon: 'i-logos-git-icon',
  },
  {
    title: 'Docker',
    icon: 'i-logos-docker-icon',
  },
]
</script>

<template>
  <section class="flex flex-col gap-y-2">
    <div class="inline-flex flex-wrap gap-2">
      <div
        v-for="skill in skills"
        :key="skill.icon"
        class="inline-flex items-center gap-x-1.5 border border-gray-2 rounded-lg bg-gray-100/95 px-3 py-1.5 text-xs text-gray-800 dark:border-gray-8 dark:bg-neutral-500/20 hover:bg-gray-200/80 dark:text-neutral-400 dark:hover:bg-neutral-500/30"
      >
        <span class="flex justify-center gap-2">
          <icon
            :name="skill.icon"
            class="h-4 w-4"
          />
          <p class="font-medium font-dank">{{ skill.title }}</p>
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
