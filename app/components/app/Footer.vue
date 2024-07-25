<script setup lang="ts"></script>

<template>
  <footer class="slide-enter py-2 prose animate-delay-1200!">
    <div
      class="mb"
    >
      <AppSocialIcons />
    </div>
    <div class="mb-2">
      <span class="text-sm op50"><NuxtLink
        target="_blank"
        to="https://creativecommons.org/licenses/by-nc-sa/4.0/"
        style="color:inherit"
      >CC BY-NC-SA 4.0</NuxtLink> 2021 - {{ new Date().getFullYear() }} © Teshane Crawford</span>
      <div class="flex-auto" />
    </div>
  </footer>
</template>

<style scoped></style>
