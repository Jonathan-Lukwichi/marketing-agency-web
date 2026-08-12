import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Module-scoped Lenis handle so any component can drive a cinematic auto-scroll.
let lenisRef = null

// Smoothly scroll to an absolute Y over `duration` seconds — used by "Watch the film".
export function filmScroll(toY, duration = 8) {
  if (lenisRef) {
    lenisRef.scrollTo(toY, {
      duration,
      easing: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
    })
  } else if (typeof window !== 'undefined') {
    window.scrollTo({ top: toY, behavior: 'smooth' })
  }
}

export function useSmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    lenis.on('scroll', ScrollTrigger.update)
    lenisRef = lenis
    const raf = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)
    return () => {
      gsap.ticker.remove(raf)
      lenis.destroy()
      lenisRef = null
    }
  }, [])
}
