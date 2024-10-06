<script setup lang="ts">
definePageMeta({
  path: '/',
  alias: ['/home'],
})

defineOgImageComponent('MainOg')
useHead({
  title: '',
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
    <div class="relative z-20 mx-auto mt-16 max-w-4xl w-full lg:mt-12 md:mt-24 md:px-7 xl:px-0">
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

          <p mt-2 font-dank italic>
            「 Whatever is worth doing, do it well. 」
          </p>

          <p class="mb-6 mt-6 text-base text-neutral-600 dark:text-neutral-400">
            I'm a <code text-p-r-r-r font-semibold font-dank v-text="`<Software Engineer />`" />. <br
              class="hidden lg:block">Building Accessible Web and Mobile Apps.
          </p>

          <div class="">

            <p mb>
              Hey, I'm <strong>Teshane Crawford</strong>, a software engineer & an open source enthusiast.
            </p>
            <p mb>
              I am passionate about building software that solves real-world problems. I am a big admirer of the
              <i i-logos-vitejs mr-1 h-1.1em w-1.1em />
              <a linear-text shape-bottom-right trans class="c-context::#bd34fe" from="#41d1ff" to="#bd34fe"
                href="https://github.com/vitejs/vite" target="_blank">Vite</a>、
              <i i-logos-vue mr-1 h-1.1em w-1.1em />
              <a linkInProse o="#64b687" href="https://github.com/vuejs-translations/docs-zh-cn"
                target="_blank">Vue</a>、
              <i i-logos-nuxt-icon mr-1 />
              <a linkInProse o="#64d98a" href="https://github.com/nuxt/framework" target="_blank">Nuxt</a> community.
              <i i-fluent-emoji-partying-face />
            </p>
            <p mb>
              I have a wide range of interests, coding, watching wildlife documentaries, listening to music, learning
              foreign
              languages, playing games... Recently, I have been working on the backend, using
              <i i-logos-java mr-1 />
              <a linkInProse o="#f46d01" href="" target="_blank">Java</a>
              <span mr-1 />
              and <i i-logos-spring-icon mr-1 />
              <a linkInProse o="#6bd33f" href="" target="_blank">SpringBoot</a>.
            </p>
            <p mb>
              I use quite a number of technologies, but I am most comfortable with
              <i i-logos-react mr-1 h-1.1em w-1.1em />
              <a linkInProse o="#61dafb" href="https://react.dev/" target="_blank"><strong>React.js</strong></a>,
              <span mr-1 />
              <i i-logos-vue mr-1 h-1.1em w-1.1em />
              <a linkInProse o="#64b687" href="https://vuejs.org/" target="_blank"><strong>Vue.js</strong></a>,
              <span mr-1 />
              <!-- <i i-my-logos-angular-icon mr-1 />
      <a trans linear-text shape-bl class="c-context::#c3002f" from="#9717E7" via="#F20755" to="#FF31D9"
        href="https://angular.dev/" target="_blank"><strong> Angular</strong></a>, -->
              <icon name="i-logos-angular-icon" mr-1 />
              <a linear-text shape-bl trans class="c-context::#c3002f" from="#9717E7" via="#F20755" to="#FF31D9"
                href="https://angular.dev/" target="_blank"><strong> Angular</strong></a>,
              <span mr-1 />
              and <i i-logos-dotnet mr-1 />
              <a linkInProse o="#512bd4" href="https://dotnet.microsoft.com/" target="_blank"><strong>.NET</strong></a>.
              If you're interested in
              knowing what other technologies I use, check out my <NuxtLink to="/tools" text-p-r-r trans>
                <strong>Tools</strong>
              </NuxtLink> page.
            </p>
            <p>
              <a class="group" text-p-r trans hover-op-75>
                Hire Me
                <i group-hover="ml-1" i-ri:arrow-right-up-line bg-gradient-to-r trans />
              </a>
            </p>
          </div>
        </div>
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
