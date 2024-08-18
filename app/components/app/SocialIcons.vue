<script setup lang="ts"></script>

<template>
  <div class="">
    <NuxtLink
      target="_blank"
      to="https://twitter.com/_D_Shybrid"
      title="Twitter"
      class="group"
    >
      <div
        i-ri-twitter-x-line
        hover-text-gray-600
        dark:hover-text-gray-3
        alt="Twitter logo"
      />
    </NuxtLink>
    <NuxtLink
      target="_blank"
      to="https://github.com/TeshanCrawford"
      title="GitHub"
      class="group"
    >
      <div
        i-uil-github-alt
        hover-text-gray-600
        dark:hover-text-gray-3
        alt="GitHub logo"
      />
    </NuxtLink>
    <NuxtLink
      target="_blank"
      to="https://www.linkedin.com/in/teshanecrawford/"
      title="Linkedin"
      class="group"
    >
      <div
        i-uil-linkedin
        hover-text-gray-600
        dark:hover-text-gray-3
        alt="Linkedin logo"
      />
    </NuxtLink>
    <NuxtLink
      target="_blank"
      to="https://discord.gg/4Q3avDs"
      title="Discord"
      class="group"
    >
      <div
        i-uil-discord
        hover-text-gray-600
        dark:hover-text-gray-3
        alt="Discord logo"
      />
    </NuxtLink>
    <NuxtLink
      target="_blank"
      to="https://www.instagram.com/teshanecrawford/"
      title="Instagram"
      class="group"
    >
      <div
        i-uil-instagram-alt
        hover-text-gray-600
        dark:hover-text-gray-3
        alt="Instagram logo"
      />
    </NuxtLink>
    <NuxtLink
      target="_blank"
      to="https://www.threads.net/@teshanecrawford"
      title="Threads"
      class="group"
    >
      <div
        i-ri-threads-line
        hover-text-gray-600
        dark:hover-text-gray-3
        alt="Threads logo"
      />
    </NuxtLink>
  </div>
</template>

<style scoped>
a {
  @apply hover: text-gray-400 dark:hover:text-gray-300 p-2;
}
</style>
