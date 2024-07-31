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
    title: 'Node.js',
    icon: 'i-logos-nodejs',
  },
  {
    title: 'Azure',
    icon: 'i-logos-azure-icon',
  },
  {
    title: 'PostgreSQL',
    icon: 'i-logos-postgresql',
  },
  {
    title: 'CSS',
    icon: 'i-logos-css-3',
  },
  {
    title: 'Git',
    icon: 'i-logos-git',
  },
]
</script>

<template>
  <section>
    <div class="flex flex-wrap gap-4">
      <div
        v-for="skill in skills"
        :key="skill.icon"
        class="border border-rounded p-1 bg-white/5"
      >
        <span class="flex gap-2 justify-center">
          <icon
            :name="skill.icon"
            class="w-6 h-6"
          />
          <p class="font-medium font-mono">{{ skill.title }}</p>
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
