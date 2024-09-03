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
  <div class="relative z-20 mx-auto mt-16 max-w-4xl w-full lg:mt-2 md:mt-24 md:px-7 xl:px-0">
    <AboutIntro />
    <HomeSeparator text="Timeline of my journey" />
    <AboutTimeline />
    <HomeSeparator text="My core skillset" />
    <AboutSkills />
  </div>
</template>

<style scoped></style>
