import { useEffect, useRef } from 'react'
import { heroBeats, scrub, brand } from '../data/content'
import { prefersReducedMotion, filmScroll } from '../lib/smoothScroll'

const FRAME_COUNT = scrub.frameCount
const framePath = (i) => `/frames/frame-${String(i + 1).padStart(4, '0')}.${scrub.ext || 'webp'}`
const step = (x, a, b) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t) }

const WINDOWS = heroBeats.map((b, i, arr) => {
  if (b.window) return b.window
  const n = arr.length, a = i / n, z = (i + 1) / n, s = z - a
  return [i === 0 ? -0.1 : a + 0.03 * s, i === 0 ? -0.05 : a + 0.3 * s, i === n - 1 ? 1.0 : z - 0.3 * s, i === n - 1 ? 1.0 : z - 0.03 * s]
})

const quoteMail = `mailto:${brand.email}?subject=${encodeURIComponent('Quote request — LWC Group Marketing')}&body=${encodeURIComponent("Hi, I'd like a quote.\n\nWhat I sell: \nMy business: \n")}`

export default function ScrubHero() {
  const secRef = useRef(null)
  const canvasRef = useRef(null)
  const beatsRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const images = new Array(FRAME_COUNT)
    let loaded = 0, target = 0, current = 0, raf = 0
    const drawCover = (img) => {
      const cw = canvas.width, ch = canvas.height, ir = img.width / img.height
      const h = ch, w = ch * ir, x = (cw - w) / 2
      ctx.fillStyle = '#0c0c0e'; ctx.fillRect(0, 0, cw, ch)
      ctx.drawImage(img, x, 0, w, h)
    }
    const render = (idx) => { const i = Math.max(0, Math.min(FRAME_COUNT - 1, idx)); const img = images[i]; if (img && img.complete) drawCover(img) }
    const resize = () => { const dpr = Math.min(window.devicePixelRatio || 1, 2); canvas.width = Math.floor(window.innerWidth * dpr); canvas.height = Math.floor(window.innerHeight * dpr); render(Math.round(current)) }
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image(); img.src = framePath(i)
      img.onload = () => { loaded++; if (Math.round(current) === i) render(i); if (loaded === 1) render(Math.round(current)) }
      images[i] = img
    }
    const setBeats = (p) => {
      const els = beatsRef.current?.children; if (!els) return
      for (let i = 0; i < els.length; i++) {
        const [a, b, cc, d] = WINDOWS[i]
        const op = Math.min(step(p, a, b), 1 - step(p, cc, d))
        els[i].style.opacity = op.toFixed(3)
        els[i].style.transform = `translateY(${((1 - op) * 24).toFixed(1)}px)`
        els[i].style.pointerEvents = op > 0.4 ? 'auto' : 'none'
      }
    }
    const progress = () => {
      const sec = secRef.current; if (!sec) return 0
      const total = sec.offsetHeight - window.innerHeight
      const scrolled = Math.min(total, Math.max(0, -sec.getBoundingClientRect().top))
      return total > 0 ? scrolled / total : 0
    }
    const setTarget = () => { const p = progress(); target = p * (FRAME_COUNT - 1); setBeats(p) }
    resize(); setTarget(); current = target
    const reduce = prefersReducedMotion()
    if (reduce) { render(Math.round(current)) }
    else { const loop = () => { current += (target - current) * 0.15; render(Math.round(current)); raf = requestAnimationFrame(loop) }; raf = requestAnimationFrame(loop) }
    const onScroll = () => { setTarget(); if (reduce) { current = target; render(Math.round(current)) } }
    const onResize = () => { resize(); setTarget(); if (reduce) { current = target; render(Math.round(current)) } }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onResize) }
  }, [])

  const playFilm = () => { const sec = secRef.current; if (!sec) return; filmScroll(sec.offsetTop + (sec.offsetHeight - window.innerHeight), 27) }

  return (
    <section className="scrub" ref={secRef} id="top" style={{ height: `${scrub.heightVh || 720}vh` }}>
      <div className="scrub__sticky">
        <canvas className="scrub__canvas" ref={canvasRef} />
        <div className="scrub__veil" />
        <div className="scrub__beats" ref={beatsRef}>
          {heroBeats.map((b, i) => (
            <div className="scrub__beat" key={i}>
              <div className="container">
                <p className="eyebrow">{b.tag}</p>
                <h1 className="display scrub__title">{b.title}</h1>
                <p className="scrub__p">{b.p}</p>
                {i === 0 && (
                  <button type="button" className="btn btn--ghost scrub__play" onClick={playFilm}>
                    <span className="scrub__playicon">▶</span> Watch the film
                  </button>
                )}
                {b.cta && (<a className="btn btn--gold" href={quoteMail}>Get a quote</a>)}
              </div>
            </div>
          ))}
        </div>
        <div className="scrub__cue">Scroll</div>
      </div>
    </section>
  )
}
