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
      class="relative z-20 mx-auto mt-16 max-w-4xl w-full lg:mt-12 md:mt-24 md:px-7 xl:px-0"
    >
      <div class="flex flex-col items-center md:flex-row">
        <div class="relative w-full">
          <!-- <h1
            class="mb-5 text-3xl text-gray-8 font-bold leading-tight lg:text-6xl md:text-4xl sm:text-4xl dark:text-white"
          >
            Teshane Crawford.
          </h1> -->
          <h1 class="mb-6 text-4xl font-bold md:text-6xl">
            Teshane Crawford
            <!-- <span class="font-medium text-sm flex flex-wrap inline-flex items-center">
        Software Engineer <span class="mx-2">•</span> 🇯🇲 living in 🇺🇸 🗽 New York, USA
      </span> -->
            <span class="flex inline-flex flex-wrap items-center text-sm font-medium">
              Software Engineer <span class="mx-2">•</span> 🇯🇲 living in Portland, JA
            </span>
          </h1>

          <p

            mt-2
            font-dank
            italic
          >
            「 Whatever is worth doing, do it well. 」
          </p>

          <p class="mb-6 mt-6 text-base text-neutral-600 dark:text-neutral-400">
            I'm a <code

              text-p-r-r-r
              text-xl
              font-semibold
              font-dank
              v-text="`<Software Engineer />`"
            />. <br
              class="hidden lg:block"
            >Building Accessible Web and Mobile Apps.
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
          <p class="mt text-base text-neutral-600 dark:text-neutral-400">
            Let's collaborate on innovative projects! Contact me to discuss your needs.
          </p>
          <div class="mt-2 list-none">
            <NuxtLink
              to="mailto:crawfordteshane@gmail.com"
              class="flex items-center"
            >
              <span
                class="social-home-button"
              >
                <icon
                  name="uil-message"
                  class="w-4 flex-inline"
                />
              </span>
              <span

                ml-4
                underline
                underline-offset-6
                decoration-wavy
                op-90
              >crawfordteshane@gmail.com</span>
            </NuxtLink>
          </div>
          <AppButton
            text="Get in contact - Hire me"
            link="/chat"
          />
          <NuxtLink
            class="ml-4 border border-rounded bg-white/60 p-1.5 dark:bg-white/10 hover:bg-gray-50 dark:hover:bg-white/5"
            target="_blank"
            to="https://www.linkedin.com/in/teshanecrawford/"
            title="Linkedin"
          >
            <icon
              name="uil-linkedin-alt"
              class="w-6"
            /> <span
              text-sm
              font-semibold
            >LinkendIn</span>
          </NuxtLink>
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

<style scoped>
  .social-home-button {
    @apply mr-[6px] h-[36px] flex justify-center items-center bg-[#E8E8E8]/10 w-[36px] border rounded-full dark:bg-[#232425] hover:bg-gray-50 dark:hover:bg-white/5;
  }
</style>
