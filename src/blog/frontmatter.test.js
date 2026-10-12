import { parse, formatDate } from './frontmatter'

test('reads the header and keeps the body', () => {
  const { meta, body } = parse('---\ntitle: "Hello: world"\ndate: 2026-10-12\n---\n# Hi\n')
  expect(meta).toEqual({ title: 'Hello: world', date: '2026-10-12' })
  expect(body).toBe('# Hi\n')
})

test('handles Windows line endings', () => {
  expect(parse('---\r\ntitle: A\r\n---\r\nbody').meta.title).toBe('A')
})

test('a file without a header is all body', () => {
  expect(parse('just text')).toEqual({ meta: {}, body: 'just text' })
})

test('formats dates and ignores bad ones', () => {
  expect(formatDate('2026-10-12')).toBe('12 Oct 2026')
  expect(formatDate('')).toBe('')
})
