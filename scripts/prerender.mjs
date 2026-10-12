// Runs after `react-scripts build`. GitHub Pages only returns 200 for files that exist, and the
// 404.html redirect makes Google treat /blog pages as missing. So write a real HTML file per page
// (same app, page-specific <title> and description) plus sitemap.xml.
import { readFileSync, writeFileSync, readdirSync, mkdirSync } from 'node:fs'
import { parse } from '../src/blog/frontmatter.js'

const SITE = 'https://pavlona.github.io'
const shell = readFileSync('build/index.html', 'utf8')
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const page = (title, description) => shell
  .replace(/<title>.*?<\/title>/, `<title>${esc(title)}</title>`)
  .replace(/<meta name="description" content=".*?"\s*\/?>/, `<meta name="description" content="${esc(description)}"/>`)

const posts = readdirSync('src/posts')
  .filter((f) => f.endsWith('.md') && !f.startsWith('_'))
  .map((f) => {
    const { meta } = parse(readFileSync(`src/posts/${f}`, 'utf8'))
    return { slug: f.slice(0, -3), title: meta.title || f.slice(0, -3), date: meta.date || '', summary: meta.summary || '' }
  })

// /blog -> build/blog/index.html; /blog/<slug> -> build/blog/<slug>.html (Pages serves it without the .html)
mkdirSync('build/blog', { recursive: true })
writeFileSync('build/blog/index.html', page('Blog · Pavlo Nazarchuk', 'Writing by Pavlo Nazarchuk, software engineer.'))
posts.forEach((p) => writeFileSync(`build/blog/${p.slug}.html`, page(`${p.title} · Pavlo Nazarchuk`, p.summary || p.title)))

const urls = [
  { loc: `${SITE}/` },
  { loc: `${SITE}/blog/` },
  ...posts.map((p) => ({ loc: `${SITE}/blog/${p.slug}`, lastmod: p.date })),
]
writeFileSync('build/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}</url>`).join('\n')}
</urlset>
`)

console.log(`prerender: blog index, ${posts.length} post page(s), sitemap.xml`)
