<script setup lang="ts"></script>

<template>
  <div>
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
    <p class="letter">
      I am a <code

        text-p-r
        font-semibold
        font-dank
        v-text="`<Software Engineer />`"
      />  &
      <code

        b="~ dashed purple/60"

        rd-sm
        text-p-r
        p-1
        text-sm
        font-semibold
        font-dank
      >Open Source Enthusiast</code> with over 3 years of experience crafting user-centric
      web and mobile applications, I am committed to building accessible digital experiences for all.
      Driven by a lifelong love of learning, I continually seek out new challenges to expand my skillset.
      The vibrant
      <!-- <i
        i-logos-vue
        mr-1
        h-1.1em
        w-1.1em
      /> -->
      <strong>
        <a
          linkInProse
          o="#64b687"
          href="https://github.com/vuejs-translations/docs-zh-cn"
          target="_blank"
        >Vue</a>
      </strong>,
      <!-- <i
        i-logos-vitejs
        mr-1
        h-1.1em
        w-1.1em
      /> -->
      <strong>      <a
        linear-text
        shape-bottom-right
        trans
        class="c-context::#bd34fe"
        from="#41d1ff"
        to="#bd34fe"
        href="https://github.com/vitejs/vite"
        target="_blank"
      >Vite</a></strong>, and
      <!-- <i
        i-logos-nuxt-icon
        mr-1
        ml-2
      /> -->
      <strong>
        <a
          linkInProse
          o="#64d98a"
          href="https://github.com/nuxt/framework"
          target="_blank"
        >Nuxt</a>
      </strong> communities have been instrumental in shaping my development
      journey.
    </p>
    <p>
      I bring a diverse skillset to the table, having built applications with technologies
      like <a
        linkInProse
        o="#512bd4"
        href="https://dotnet.microsoft.com/"
        target="_blank"
      ><strong>ASP.NET Core</strong></a>, <strong>TypeScript</strong>, <a
        linkInProse
        o="#61dafb"
        href="https://react.dev/"
        target="_blank"
      ><strong>React.js</strong></a>, <strong>React Native</strong>, <strong>Node.js</strong>,
      <strong>
        <a
          linkInProse
          o="#64b687"
          href="https://github.com/vuejs-translations/docs-zh-cn"
          target="_blank"
        >Vue</a>
      </strong>, and more.
      I'm comfortable working with various databases, including <strong>SQL Server</strong>,
      <strong>PostgreSQL</strong>, and <strong>MongoDB</strong>.
      For cloud solutions, I have experience with <strong>Azure</strong> and <strong>AWS</strong>.
      Additionally, I'm a fast learner
      and eager to adapt to new technologies specific to your project needs.
      To see my current focus, feel free to explore my <NuxtLink
        to="/tools"
        class="text-p-r-r font-semibold"
        hover:linkInProse
        o="#61dafb"
      >
        Tools
      </NuxtLink> page.
    </p>
    <p>
      I hold a Bachelor of Science in Computing with a major in Software Engineering
      from the University of Technology, Jamaica. I am currently enhancing my skill set
      by pursuing an Azure Fundamentals certification.
    </p>
    <p>
      Beyond software development, I have diverse interests. I enjoy immersing myself with
      knowledge through reading, engaging in hands-on problem-solving by repairing electronics,
      and staying at the forefront of technological advancements. Currently, I'm delving into the
      exciting worlds of machine learning and artificial intelligence, while also solidifying
      my Java programming skills.
    </p>
    <p>
      I thrive on collaboration and am eager to contribute my skills to innovative projects.
      Let's build something great together. Feel free to <NuxtLink
        to="/chat"
        class="text-p-r font-semibold"
        hover:linkInProse
        o="#61dafb"
      >
        contact me
      </NuxtLink>.
    </p>
    <p
      hover:linkInProse
      o="#61dafb"
    >
      <a
        class="group"

        text-p-r
        font-semibold
        trans
        hover-op-75
        href="mailto:crawfordteshane@gmail.com"
      >
        Hire Me
        <i
          group-hover="ml-1"
          i-ri:arrow-right-up-line
          bg-gradient-to-r
          trans
        />
      </a>
    </p>
  </div>
</template>

<style scoped>
p {
  /* line-height: 15px; */
  margin: 15px 0;
}

.letter::first-letter {
  -webkit-initial-letter: 2;
  initial-letter: 2;
  margin: 0 1em 0 0;
  float: left;
  font-size: 2rem;
}
</style>
