<script setup lang="ts"></script>

<template>
  <footer class="slide-enter py-2 prose animate-delay-1200!">
    <div class="space-y-4">
      <div
        class="flex flex-col md:flex-row md:items-center"
      >
        <h4 class="font-light">
          Find me on:
        </h4>
        <div class="flex flex-wrap">
          <AppSocialIcons />
        </div>
      </div>
      <!-- <div
        class="flex flex-col md:flex-row gap-2 md:items-center"
      >
        <h4 class="font-light">
          You can email me at:
        </h4>
        <div class="flex">
          <NuxtLink
            target="_blank"
            to="mailto:@crawfordteshane@gmail.com"
            label="crawfordteshane@gmail.com"
          >
            crawfordteshane@gmail.com
          </NuxtLink>
        </div>
      </div> -->
      <div class="">
        <span class="text-sm op50"><NuxtLink
          target="_blank"
          to="https://creativecommons.org/licenses/by-nc-sa/4.0/"
          style="color:inherit"
        >CC BY-NC-SA 4.0</NuxtLink> 2021 - {{ new Date().getFullYear() }} © Teshane Crawford</span>
        <div class="flex-auto" />
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
