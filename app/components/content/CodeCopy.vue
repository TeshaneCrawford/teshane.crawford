<script lang="ts" setup>
defineProps<{
  code: string
}>()

const { copy, copied, isSupported } = useClipboard()
</script>

<template>
  <ClientOnly>
    <button
      v-if="isSupported"
      class="group/copy absolute bottom-2 right-2 h-8 w-8 flex items-center justify-center rounded-sm bg-white/90 p-1 opacity-0 backdrop-blur transition dark:bg-gray-800/90 group-hover:opacity-100"
      @click="copy(code)"
    >
      <span
        v-if="copied"
        class="sr-only"
      >Copy to clipboard</span>
      <Transition
        appear
        mode="out-in"
        enter-active-class="duration-150 ease-in"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="duration-150 ease-out"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="copied"
          class="i-uil-check transition ease-in group-hover/copy:text-gray-400 dark:group-hover/copy:text-gray-300"
        />
        <div
          v-else
          class="i-uil-clipboard transition ease-in group-hover/copy:text-gray-400 dark:group-hover/copy:text-gray-300"
        />
      </Transition>
    </button>
  </ClientOnly>
</template>

<style scoped></style>
