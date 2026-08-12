import { useEffect, useState } from 'react'
import { brand } from '../data/content'

const mailLink = `mailto:${brand.email}?subject=${encodeURIComponent('Quote & demo request — LWC Group Marketing')}`

export default function Nav() {
  const [solid, setSolid] = useState(false)
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <nav className={`nav ${solid ? 'nav--solid' : ''}`}>
      <a className="nav__brand" href="#top" aria-label={brand.name}>
        <span className="nav__mono">{brand.monogram}</span>
        <span className="nav__word">{brand.name}</span>
      </a>
      <a className="btn btn--gold nav__cta" href={mailLink}>✉ Get a quote</a>
    </nav>
  )
}
