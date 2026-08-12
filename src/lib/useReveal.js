import { useEffect } from 'react'
import { prefersReducedMotion } from './smoothScroll'

// Fade-up reveal for any element with class "reveal" → adds "is-in".
export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal:not(.is-in)'))
    if (prefersReducedMotion()) {
      els.forEach((el) => el.classList.add('is-in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
