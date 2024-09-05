<script setup lang="ts">
const { data: doc } = await useAsyncData('projects', () => queryContent('/projects/').findOne())
</script>

<template>
  <section class="mx-auto max-w-4xl lg:px-0 md:px-7">
    <h2
      class="text-2xl text-neutral-900 font-bold leading-10 tracking-tight dark:text-neutral-100"
    >
      My Projects
    </h2>
    <p class="mb-6 text-base text-neutral-600 dark:text-neutral-400">
      Here are some of my recent projects. I'm always working on something new, so
      check back often!
    </p>
    <div class="grid mt-7 w-full items-stretch gap-7 md:grid-cols-3 sm:grid-cols-2">
      <div
        v-for="project in doc?.projectsData"
        :key="project.name"
      >
        <ProjectCard
          :name="project.name"
          :description="project.description"
          :image="project.image"
          :url="project.url"
        />
      </div>
    </div>

    <div class="w-full flex items-center justify-center py-5">
      <AppButton
        text="View All My Projects"
        link="/projects"
      />
    </div>
  </section>
</template>

<style scoped></style>
