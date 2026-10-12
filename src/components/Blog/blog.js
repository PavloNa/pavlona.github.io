import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { marked } from 'marked'
import './blog.css'
import { loadAll, loadPost } from '../../blog/posts'
import { formatDate } from '../../blog/frontmatter'

// { status: 'loading' | 'ready' | 'error', data }
const useLoad = (load, deps) => {
  const [state, setState] = useState({ status: 'loading' })
  useEffect(() => {
    let live = true
    setState({ status: 'loading' })
    load().then(
      (data) => live && setState({ status: 'ready', data }),
      (err) => { console.log(err); if (live) setState({ status: 'error' }) },
    )
    return () => { live = false }
  }, deps) // eslint-disable-line react-hooks/exhaustive-deps
  return state
}

export const BlogList = () => {
  const { status, data } = useLoad(loadAll, [])
  useEffect(() => { document.title = 'Blog · Pavlo Nazarchuk' }, [])

  return (
    <section className='blog'>
      <header className='sectionHead'>
        <h1 className='sectionTitle'>Blog</h1>
        <p className='comment'>writing</p>
      </header>
      {status === 'loading' && <p className='blogState' role='status'>Loading posts…</p>}
      {status === 'error' && <p className='blogState' role='alert'>Could not load the posts. Refresh the page to try again.</p>}
      {status === 'ready' && data.length === 0 && <p className='blogState'>No posts yet.</p>}
      {status === 'ready' && data.length > 0 && (
        <ul className='postList'>
          {data.map((p) => (
            <li key={p.slug}>
              <Link to={`/blog/${p.slug}`} className='postLink'>
                {p.date && <time className='comment' dateTime={p.date}>{formatDate(p.date)}</time>}
                <h2>{p.title}</h2>
                {p.summary && <p>{p.summary}</p>}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export const BlogPost = () => {
  const { slug } = useParams()
  const { status, data } = useLoad(() => loadPost(slug), [slug])
  const missing = status === 'ready' && !data

  useEffect(() => {
    if (status === 'ready') document.title = `${data ? data.title : 'Post not found'} · Pavlo Nazarchuk`
  }, [status, data])

  return (
    <section className='blog'>
      <Link to='/blog' className='backLink'>← All posts</Link>
      {status === 'loading' && <p className='blogState' role='status'>Loading post…</p>}
      {status === 'error' && <p className='blogState' role='alert'>Could not load this post. Refresh the page to try again.</p>}
      {missing && (
        <header className='sectionHead'>
          <h1 className='sectionTitle'>Post not found</h1>
          <p className='comment'>nothing lives at /blog/{slug}</p>
        </header>
      )}
      {status === 'ready' && data && (
        <article className='post'>
          <header className='postHead'>
            {data.date && <time className='comment' dateTime={data.date}>{formatDate(data.date)}</time>}
            <h1 className='postTitle'>{data.title}</h1>
          </header>
          {/* posts are written by the site owner, so their HTML is trusted */}
          <div className='prose' dangerouslySetInnerHTML={{ __html: marked.parse(data.body) }} />
        </article>
      )}
    </section>
  )
}
