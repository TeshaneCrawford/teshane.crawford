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
        v-text="`<Software Engineer />`"
      />  &
      <code
        text-sm
        rd-sm
        font-dank
        b="~ dashed purple/60"
        p-1
        text-p-r
      >Open Source Enthusiast</code> with over 3 years of experience in web and mobile
      development. I have a passion for building applications that are
      user-friendly and accessible to everyone. I am always looking for new
      ways to learn and to improve my skills. The Vue.js, Vite, and Nuxt communities
      have been a great source of inspiration for me.
    </p>
    <p>
      I have used a variety of technologies to build applications, including
      ASP.NET Core, TypeScript, React, React Native, Node.js, Vue.js, and more.
      I have experience working with databases such as SQL Server, PostgreSQL, and
      MongoDB. I have also worked with cloud services such as Azure and AWS.
      If your project requires a specific technology, I am always willing to learn
      and adapt to new technologies. Also if you're interested in knowing what
      technologies I am currently using, check out my <NuxtLink
        to="/tools"
        class="text-p-r-r font-medium"
      >
        Tools
      </NuxtLink> page.
    </p>
    <p>
      I am a graduate of the University of Technology, Jamaica, where I received a
      Bachelor of Science in Computing with a major in Software Engineering. I
      am currently pursuing a certification in Azure Fundamentals.
    </p>
    <p>
      I have a wide range of interests outside of software development. I enjoy
      reading books, repairing electronics, and learning new technologies.
      Recently, I have been learning about machine learning and artificial
      intelligence as well as relearning Java.
    </p>
    <p>
      I am always looking for new opportunities to work on exciting projects and
      collaborate with other developers. If you have a project that you would like
      me to work on, feel free to <NuxtLink
        to="/chat"
        class="text-p-r font-medium"
      >
        contact me
      </NuxtLink>.
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
