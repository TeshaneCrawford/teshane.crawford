<script lang="ts" setup>
const { error, data: doc } = useAsyncData('tools', () => queryContent('/tools/').findOne())

if (error.value) {
  throw createError({
    statusCode: 404,
    message: error.value.message || 'Page not found',
    fatal: true,
  })
}
</script>

<template>
  <AppPageHeading
    :title="doc?.title"
    :description="doc?.description"
  >
    <div
      v-for="tool in doc?.toolsData"
      :key="tool.name"
    >
      <h3 class="text-3xl font-medium">
        {{ tool.title }}
      </h3>
      <div class="flex flex-col gap-14">
        <div class="grid grid-cols-2 mt-5 gap-3 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xl:grid-cols-6">
          <div
            v-for="data in tool.toolData"
            :key="data.name"
            class="relative flex flex-col items-center justify-center gap-3 border border-transparent rounded-md bg-gray-100/15 p-8 shadow transition-all hover:z-10 hover:origin-center hover:border-gray-400 dark:bg-gray-300/15 hover:text-black dark:shadow-md hover:shadow-lg active:!scale-80 dark:hover:border-neutral-600 dark:hover:bg-white/.5 dark:hover:text-white lg:hover:!scale-110"
          >
            <NuxtLink
              :to="data.link"
              :title="data.label"
              class="flex items-center"
            >
              <!-- c-[#4C31A4] To be added to class if dynaic value fails to produce -->
              <icon
                v-if="data.icon"
                class="h-10 w-10"
                :name="data.icon"
                :color="data.color"
              />
            </NuxtLink>
            <p class="select-none text-center text-[12px] font-medium font-mono">
              {{ data.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <p>
      <Icon
        name="i-twemoji-backhand-index-pointing-right-medium-skin-tone"
        class="mr-1"
      /> Last updated on <span> {{ doc?.lastUpdate }} </span>
    </p>
  </AppPageHeading>
</template>

<style scoped></style>
