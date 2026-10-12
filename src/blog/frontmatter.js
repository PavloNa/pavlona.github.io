// Splits a post into its `key: value` header (between --- lines) and the Markdown body
export const parse = (raw) => {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!m) return { meta: {}, body: raw }
  const meta = {}
  m[1].split(/\r?\n/).forEach((line) => {
    const i = line.indexOf(':')
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^(["'])(.*)\1$/, '$2')
  })
  return { meta, body: m[2] }
}

// "2026-10-12" -> "12 Oct 2026"; UTC so the day never shifts with the reader's timezone
export const formatDate = (iso) => {
  const d = new Date(`${iso}T00:00:00Z`)
  return isNaN(d) ? '' : d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' })
}
