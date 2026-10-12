import { parse } from './frontmatter'

// Every .md file in src/posts is a post, and its file name is the URL: my-post.md -> /blog/my-post.
// Files starting with _ (the template) are skipped. The build turns each file into a URL we fetch.
const files = require.context('../posts', false, /^\.\/[^_][^/]*\.md$/)
const urls = Object.fromEntries(files.keys().map((k) => {
  const m = files(k)
  return [k.slice(2, -3), m.default || m]
}))

export const loadPost = async (slug) => {
  if (!urls[slug]) return null
  const res = await fetch(urls[slug])
  if (!res.ok) throw new Error(`${slug}: ${res.status}`)
  const { meta, body } = parse(await res.text())
  return { slug, title: meta.title || slug, date: meta.date || '', summary: meta.summary || '', body }
}

// newest first
export const loadAll = async () => {
  const posts = await Promise.all(Object.keys(urls).map(loadPost))
  return posts.sort((a, b) => b.date.localeCompare(a.date))
}
