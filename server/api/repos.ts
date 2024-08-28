import { Octokit } from 'octokit'
import type { H3Event } from 'h3'
import type { Repo } from '~~/types/project'

// Initialize Octokit instance
let _octokit: Octokit

export function useOctokit() {
  if (!_octokit) {
    _octokit = new Octokit({
      auth: process.env.NUXT_GITHUB_TOKEN,
    })
  }
  return _octokit
}

// Define the cached function for fetching repository details
export const fetchRepo = defineCachedFunction(async (_event: H3Event, owner: string, repo: string) => {
  const result = await useOctokit().request('GET /repos/{owner}/{repo}', {
    owner,
    repo,
  })
  return {
    stars: result.data.stargazers_count,
    forks: result.data.forks_count,
    html_url: result.data.html_url,
    created_at: result.data.created_at,
    homepage: result.data.homepage,
  }
}, {
  maxAge: 60 * 60,
  name: 'githubRepoInfo',
  getKey: (_event: H3Event, owner: string, repo: string) => `${owner}/${repo}`,
})

export default defineCachedEventHandler(async () => {
  const octokit = useOctokit()
  const { data } = await octokit.request('GET /user/repos', {
    per_page: 100,
    type: 'owner',
    sort: 'updated',
  })

  const publicRepos = data.filter(repo => !repo.private && !repo.archived)
  const publicAndNotForkRepos = publicRepos.filter(repo => !repo.fork)

  const repoGroups: Record<string, Repo[]> = {
    'Angular': filterRepos(publicAndNotForkRepos, 'angular'),
    'Vue Ecosystem': filterRepos(publicAndNotForkRepos, 'vue'),
    'React': filterRepos(publicAndNotForkRepos, 'react'),
    'C#': filterRepos(publicAndNotForkRepos, 'csharp'),
    'TypeScript': filterRepos(publicAndNotForkRepos, 'typescript'),
    'JavaScript': filterRepos(publicAndNotForkRepos, 'javascript'),
    'Python': filterRepos(publicAndNotForkRepos, 'python'),
    'Apps': filterRepos(publicAndNotForkRepos, 'apps'),
    'Mobile': filterRepos(publicRepos, 'mobile'),
    'UI': filterRepos(publicRepos, 'ui'),
    'API': filterRepos(publicAndNotForkRepos, 'api'),
    'Library': filterRepos(publicAndNotForkRepos, 'library'),
    'Templates': filterRepos(publicAndNotForkRepos, 'template'),
    'All': publicAndNotForkRepos,
  }

  return repoGroups
})

function filterRepos(repos: Repo[], key: string) {
  return repos.filter(repo => repo.topics && repo.topics.includes(key))
}

// import { fetchRepo } from '../util/github'

// export default defineEventHandler(async (event) => {
//   const owner = event.context.params?.owner
//   const repo = event.context.params?.repo

//   try {
//     const result = await fetchRepo(event, owner!, repo!)
//     return result
//   }
//   catch (error) {
//     console.error(error)
//     return createError({
//       statusCode: 500,
//       statusMessage: 'Internal Server Error',
//     })
//   }
// })
