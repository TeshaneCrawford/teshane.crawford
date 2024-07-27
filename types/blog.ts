import type { ParsedContent } from '@nuxt/content'
import type { Author } from './author'

export interface BlogPost extends ParsedContent {
  title: string
  description: string
  cover: {
    src: string
    alt: string
  }
  authors: Author[]
  categories: string[]
  publishedAt: string
  modifiedAt: string
}

export type BlogPostCard = Pick<BlogPost, '_path' | 'cover' | 'title' | 'description' | 'publishedAt' | 'authors' | 'categories'>
