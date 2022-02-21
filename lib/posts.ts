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

export function getSortedPostsInfo() {
  const files = fs.readdirSync(postsDirectory)
  const allPostsInfo = files.map(file => {
    const id = file.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, file)
    const content = fs.readFileSync(fullPath, 'utf8')

    const { data: frontmatter, excerpt } = matter(content, { excerpt: true })

    return {
      id,
      date: frontmatter.date,
      ...frontmatter,
      excerpt: easyRenderer.render(excerpt)
    }
  })

  return allPostsInfo.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
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
