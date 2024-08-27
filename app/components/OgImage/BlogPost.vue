<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  description: string
  date?: string
}>(), {
  title: 'title',
})
</script>

<template>
  <div class="relative h-full w-full flex items-center justify-center bg-black/60 text-white">
    <img
      src="/dist.png"
      class="absolute object-cover opacity-70"
    >
    <div class="h-full flex items-start justify-start px-10 pt-12">
      <div class="h-full w-full flex flex-col justify-between">
        <p class="text-2xl font-bold opacity-40">
          {{ date }}
        </p>
        <h1 class="text-left text-[80px] font-black">
          {{ title }}
        </h1>
        <p class="text-2xl font-bold opacity-60">
          {{ description }}
        </p>
        <div class="w-full flex items-center justify-center pb-4">
          <img
            src="/logo/TC.png"
            class="size-10"
          >
          <p class="pl-3 font-medium">
            teshanecrawford
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
