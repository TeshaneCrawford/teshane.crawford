<script setup lang="ts">
import type { BuiltinLanguage } from 'shiki'

const props = defineProps({
  code: {
    type: String,
    default: '',
  },
  language: {
    type: String as PropType<BuiltinLanguage>,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  inGroup: {
    type: Boolean,
    default: false,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
})

const iconMap = new Map(Object.entries(useConfig().value.main.codeIcon))
const icon = iconMap.get(props.filename?.toLowerCase()) || iconMap.get(props.language)
</script>

<template>
  <div
    class="mt-2 bg-gray-50 dark:bg-gray-900 rounded-md border border-gray-300/40 dark:border-gray-700/40"
  >
    <div
      v-if="!inGroup && filename"
      class="overflow-hidden group relative pt-1 font-mono"
    >
      <Icon
        v-if="icon"
        :name="icon"
        class="absolute top-3 left-3"
      />
      <span class="absolute top-2 left-10">
        {{ filename }}
      </span>
      <span class="ml-auto mr-1">
        <CodeCopy :code="code" />
      </span>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* :deep(pre code .line) {
  display: block;
  min-height: 1rem;
} */

:deep(pre) {
  @apply bg-white dark:bg-gray-800;
  @media (prefers-color-scheme: dark) {
    @apply bg-gray-900;
  }
  @apply rounded-t-none;
}
</style>
