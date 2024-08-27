<script setup lang="ts">
const feed = ref('https://dev.to/teshanecrawford')
</script>

<template>
  <section class="mx-auto max-w-4xl px-7 lg:px-0">
    <h2
      class="text-2xl text-neutral-900 font-bold leading-10 tracking-tight dark:text-neutral-100"
    >
      My Writings
    </h2>
    <p class="mb-6 text-base text-neutral-600 dark:text-neutral-400">
      Along with coding I also like to write about life and technology. Here are
      some of my recent posts.
    </p>
    <div class="mx-auto my-7 max-w-4xl w-full xl:px-0">
      <div
        class="flex flex-col items-start justify-start md:flex-row md:space-x-7"
      >
        <div class="w-full md:w-2/3 space-y-7">
          <BlogHomeCard count="3" />

          <div class="w-full flex items-center justify-center py-5">
            <AppButton
              text="View All My Writing"
              link="/blogs"
            />
          </div>
        </div>
        <div class="mt-10 w-full md:mt-0 md:w-1/3">
          <form
            method="get"
            class="border border-neutral-300 rounded-2xl border-dashed p-6 dark:border-neutral-600"
          >
            <div class="relative flex items-center space-x-2">
              <svg
                class="h-6 w-6 flex-none text-neutral-700 dark:text-neutral-200"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
              /></svg>
              <h2
                class="flex text-sm text-neutral-900 font-semibold dark:text-neutral-100"
              >
                Subscribe my blog
              </h2>
            </div>
            <p class="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              Get my blog updates via <NuxtLink
                class="font-bold"
                :to="`https://dev.to/teshanecrawford`"
                target="_blank"
              >DEV</NuxtLink>, or <NuxtLink
                class="font-bold"
                to="/feed.xml"
                target="_blank"
              >RSS</NuxtLink>.
            </p>
            <div class="mt-4 w-full flex flex-col items-center space-y-3">
              <input
                v-model="feed"
                type="url"
                readonly
                placeholder="Email address"
                aria-label="Email address"
                required
                class="h-10 w-full border border-neutral-400 rounded-md border-dashed px-3 text-sm dark:border-neutral-600 dark:bg-neutral-800 dark:text-white focus:outline-black focus:ring-0 dark:placeholder-neutral-400"
              >
              <button
                type="submit"
                class="mt-5 block w-full border border-neutral-900 rounded bg-neutral-900 px-4 py-2 text-center text-xs text-neutral-100 font-semibold duration-300 ease-out dark:bg-neutral-100 hover:bg-white dark:text-neutral-800 hover:text-neutral-900 dark:hover:border-neutral-300 dark:hover:bg-neutral-950 dark:hover:text-neutral-100"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
