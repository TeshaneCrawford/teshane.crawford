import { appendHeader } from 'h3'
import { generateBlogFeed } from '../util/rss'

export default defineEventHandler(async (event) => {
  const feed = await generateBlogFeed(event)
  appendHeader(event, 'Content-Type', 'application/atom')
  return feed.atom1()
})
