import fetchRepositories from '../util/github'
import type { Repo } from '~~/types/project'

export default defineCachedEventHandler(async (event) => {
  const [owner, name] = process.env.NUXT_GITHUB_REPOSITORY!.split('/')

  const repo = await fetchRepositories(event, owner!, name!)

  const publicRepos = repo.filter(repo => !repo.private && !repo.archived)
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
}, {
  maxAge: 60 * 10,
  // swr: true,
  group: 'api',
  name: 'getRepos',
  getKey: () => 'repos',
})

function filterRepos(repos: Repo[], key: string) {
  return repos.filter(repo => repo.topics && repo.topics.includes(key))
}
