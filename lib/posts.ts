import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { easyRenderer, fullRenderer } from './render'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getIndexInfo() {
  const postPath = path.join(process.cwd(), `index.md`)
  const file = fs.readFileSync(postPath)

  const { data: frontmatter, content } = matter(file)
  const _html = easyRenderer.render(content)

  return {
    frontmatter,
    html: _html
  }
}

export function getAllPostsIds() {
  const files = fs.readdirSync(postsDirectory)
  return files.map(file => {
    return {
      params: {
        id: file.replace(/\.md$/, '')
      }
    }
  })
}

export function getPostInfo(id) {
  const postPath = path.join(postsDirectory, `${id}.md`)
  const file = fs.readFileSync(postPath)

  const { data: frontmatter, content, excerpt } = matter(file, { excerpt: true })
  const _html = fullRenderer.render(content)

  return {
    frontmatter,
    excerpt,
    html: _html
  }
}
