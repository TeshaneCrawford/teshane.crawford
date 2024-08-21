import type { H3Event } from 'h3'
import { Octokit } from 'octokit'
import type { Repo } from '~~/types/project'

const fetchRepositories = defineCachedFunction(async (event: H3Event, owner: string, name: string) => {
  const octokit = new Octokit()
  const { data } = await octokit.request('GET /repos/{owner}/{name}', {
    owner,
    name,
    per_page: 100,
    type: 'owner',
    sort: 'updated',
  })
  return data as Repo[]
}, {
  maxAge: 60 * 10,
  //  swr: true,
  group: 'functions',
  name: 'getRepoDetails',
  getKey: (_event: H3Event, owner: string, repo: string) => `${owner}/${repo}`,
},
)

export default fetchRepositories
