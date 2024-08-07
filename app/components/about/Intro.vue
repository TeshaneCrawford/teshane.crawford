<script setup lang="ts"></script>

<template>
  <div>
    <h1 class="font-bold text-6xl mb-6">
      Teshane Crawford
      <!-- <span class="font-medium text-sm flex flex-wrap inline-flex items-center">
        Software Engineer <span class="mx-2">•</span> 🇯🇲 living in 🇺🇸 🗽 New York, USA
      </span> -->
      <span class="font-medium text-sm flex flex-wrap inline-flex items-center">
        Software Engineer <span class="mx-2">•</span> 🇯🇲 living in Portland, JA
      </span>
    </h1>
    <p
      italic
      font-dank
      mt-2
    >
      「 Whatever is worth doing, do it well. 」
    </p>
    <p class="first-letter">
      I am a <code
        text-p-r
        font-dank
        font-semibold
        v-text="`<Software Engineer />`"
      />  &
      <code
        text-sm
        rd-sm
        font-dank
        font-semibold
        b="~ dashed purple/60"
        p-1
        text-p-r
      >Open Source Enthusiast</code> with over 3 years of experience crafting user-centric
      web and mobile applications, I am committed to building accessible digital experiences for all.
      Driven by a lifelong love of learning, I continually seek out new challenges to expand my skillset.
      The vibrant Vue.js, Vite, and Nuxt communities have been instrumental in shaping my development
      journey.
    </p>
    <p>
      I bring a diverse skillset to the table, having built applications with technologies
      like ASP.NET Core, TypeScript, React, React Native, Node.js, Vue.js, and more.
      I'm comfortable working with various databases, including SQL Server, PostgreSQL, and MongoDB.
      For cloud solutions, I have experience with Azure and AWS. Additionally, I'm a fast learner
      and eager to adapt to new technologies specific to your project needs.
      To see my current focus, feel free to explore my <NuxtLink
        to="/tools"
        class="text-p-r-r font-semibold"
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
      >
        contact me
      </NuxtLink>.
    </p>
    <p>
      <a
        class="group"
        text-p-r
        font-semibold
        hover-op-75
        href="mailto:crawfordteshane@gmail.com"
      >
        Hire Me
        <i
          group-hover="ml-1 transition-all duration-300"
          i-ri:arrow-right-up-line
          bg-gradient-to-r
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

.first-letter::first-letter {
  -webkit-initial-letter: 2;
  initial-letter: 2;
  margin: 0 1em 0 0;
  float: left;
  font-size: 2rem;
}
</style>
