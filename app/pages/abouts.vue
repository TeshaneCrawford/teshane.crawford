<script setup lang="ts">
useHead({
  title: 'About',
  meta: [
    {
      name: 'description',
      content: 'Learn about Teshane Crawford.',
    },
  ],
})
</script>

<template>
  <div class="relative z-20 w-full max-w-4xl mx-auto mt-16 px-7 md:mt-24 lg:mt-2 xl:px-0">
    <AboutIntro />
    <HomeSeparator text="Timeline of my journey" />
    <AboutTimeline />
    <HomeSeparator text="My core skillset" />
    <AboutSkills />
  </div>
</template>

<style scoped></style>
