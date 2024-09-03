<script setup lang="ts">
defineOgImageComponent('MainOg')
useHead({
  title: 'Teshane Crawford - Software Engineer',
  meta: [
    {
      name: 'description',
      content: 'Teshane Crawford is a software engineer based in New York City. I help companies build better applications.',
    },
  ],
})
</script>

<template>
  <div>
    <div
      class="relative z-20 mx-auto mt-16 max-w-4xl w-full px-7 lg:mt-32 md:mt-24 xl:px-0"
    >
      <div class="flex flex-col items-center md:flex-row">
        <div class="relative w-full">
          <h1
            class="mb-5 text-3xl text-gray-8 font-bold leading-tight lg:text-6xl md:text-4xl sm:text-4xl dark:text-white"
          >
            Teshane Crawford.
          </h1>
          <p class="mb-6 text-base text-neutral-600 dark:text-neutral-400">
            I'm a software engineer. <br
              class="hidden lg:block"
            >I focus on Web & Mobile development.
          </p>
          <p class="mb-2 text-neutral-800 font-semibold dark:text-neutral-200">
            I can help you out with:
          </p>
          <ul
            class="list-disc list-inside py-2 text-sm text-neutral-500 space-y-[3px] dark:text-neutral-400"
          >
            <li>Vue.js Development</li>
            <li>React.js Development</li>
            <li>Node.js Development</li>
            <li>.NET Development</li>
            <li>and more...</li>
          </ul>
          <AppButton
            text="Get in contact - Hire me"
            link="/chat"
          />
        </div>
        <!-- <div
          class="relative justify-end hidden w-full mt-10 md:flex md:pl-10 md:w-1/2 md:mt-0 md:translate-y-4 xl:translate-y-0"
        >
          <div class="relative z-50 w-full">
            <div
              class="absolute bottom-0 z-40 w-16 h-16 -translate-x-6 -translate-y-1/2 lg:top-auto top-0 lg:-translate-y-[330px] rounded-full"
            >
              <span
                class="relative z-20 flex items-center justify-center w-full h-full text-2xl border-8 border-white rounded-full dark:border-neutral-950 bg-neutral-100 dark:bg-neutral-900"
              >
                <span
                  class="flex items-center justify-center w-full h-full bg-white border border-dashed rounded-full dark:bg-neutral-950 border-neutral-300 dark:border-neutral-700"
                >👋</span>
              </span>
            </div>
            <div class="relative z-30 px-10">
              <img
                src="/images/photo.png"
                loading="eager"
                decoding="auto"
                class="relative z-30 w-full aspect-[790/1189] md:max-w-md mx-auto dark:-translate-y-0.5"
              >
            </div>
            <div
              class="absolute bottom-0 right-0 z-20 w-full h-full lg:h-[420px] translate-x-0 -translate-y-px border border-dashed rounded-2xl bg-gradient-to-r dark:from-neutral-950/20 dark:via-black dark:to-neutral-950/20 from-white via-neutral-50 to-white border-neutral-300 dark:border-neutral-700"
            />
          </div>
        </div> -->
      </div>
    </div>
    <HomeSeparator text="Some of My Projects" />
    <HomeProjects />
    <HomeSeparator text="Some of My Writings" />
    <HomeBlogs />
  </div>
</template>

<style scoped></style>
