import React, { useEffect, useRef } from 'react'
import './dither.css'

// Sparse ordered (Bayer) dither down the whole page: densest at the side edges, fading toward the
// content, with a slow wave so it never looks uniform (see DESIGN.md)
const CELL = 4
const MAX = 0.3 // above ~0.3 the dots join into a checkerboard, which shimmers
const BAYER = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5].map((v) => (v + 0.5) / 16)

const Dither = () => {
  const canvas = useRef()

  useEffect(() => {
    const app = canvas.current.parentNode
    const draw = () => {
      const c = canvas.current
      const w = Math.ceil(c.clientWidth / CELL)
      const h = Math.ceil(app.offsetHeight / CELL)
      if (c.width === w && c.height === h) return
      c.width = w
      c.height = h
      const ctx = c.getContext('2d')
      const img = ctx.createImageData(w, h)
      for (let y = 0; y < h; y++) {
        const wave = Math.sin(y * 0.011 + Math.sin(y * 0.003) * 2)
        for (let x = 0; x < w; x++) {
          const edge = Math.abs(x / w - 0.5) * 2
          const t = edge ** 2.2 * (0.6 + 0.4 * wave * Math.sin(x * 0.02 + y * 0.004)) * MAX
          if (t > BAYER[(y % 4) * 4 + (x % 4)]) {
            const i = (y * w + x) * 4
            img.data[i] = img.data[i + 1] = img.data[i + 2] = 255
            img.data[i + 3] = 16
          }
        }
      }
      ctx.putImageData(img, 0, 0)
    }
    draw()
    // page height changes as fonts and images load
    const ro = new ResizeObserver(draw)
    ro.observe(app)
    return () => ro.disconnect()
  }, [])

  return <canvas ref={canvas} className='dither' aria-hidden='true' />
}

export default Dither
