<script setup lang="ts">
import type { Repo } from '~~/types/project'

defineProps<{
  repo: Repo
}>()
</script>

<template>
  <article
    b="~ black op-10"
    dark-b="white op-10"
    rounded-lg
    p-4
    text-xs
    shadow-sm
    trans
    hover="bg-gray bg-op-3"
    dark-hover="bg-white bg-op-3"
  >
    <a
      :href="repo.homepage || repo.html_url"
      target="_blank"
      flex="~ col gap-3"
      h-full
      decoration-none
    >
      <h5
        m0
        flex
        gap-1
        text-sm
      >
        <i i-ri:git-repository-line />
        <span class="font-medium">{{ repo.name }}</span>
        <span
          inline-block
          fw-normal
          important-rounded-full
          :class="repo.is_template ? 'dark-badge-xs-yellow badge-xs-blue' : 'dark-badge-xs-teal badge-xs-red'"
        >
          {{ repo.private ? 'Private' : 'Public' }}
          {{ repo.is_template ? 'Template' : '' }}
        </span>
      </h5>
      <p
        m0
        flex-1
      >
        {{ repo.description }}
      </p>
      <p
        m0
        flex
        gap-4
      >
        <span
          v-if="repo.language"
          flex
          gap-1
        >
          <div
            h-3
            w-3
            rounded-full
            :style="{ backgroundColor: repo.language ? getLanguageColor(repo.language) : '' }"
          />
          {{ repo.language }}
        </span>
        <a
          v-if="repo.stargazers_count"
          target="_blank"
          decoration-none
          :href="`https://github.com/${repo.full_name}/stargazers`"
        >
          <span
            v-if="repo.stargazers_count"
            flex
            gap-1
          >
            <i i-ri:star-line />
            {{ repo.stargazers_count }}
          </span>
        </a>
        <a
          v-if="repo.forks_count"
          target="_blank"
          :href="`https://github.com/${repo.full_name}/network/members`"
          flex
          gap-1
          decoration-none
        >
          <i i-carbon:direction-fork />
          {{ repo.forks_count }}
        </a>
      </p>
    </a>
  </article>
</template>

<style scoped></style>
