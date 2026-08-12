import { brand, credit } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__brand">
              <span className="nav__mono">{brand.monogram}</span>
              <span className="nav__word">{brand.name}</span>
            </div>
            <p className="footer__tag">{brand.tagline}</p>
          </div>
          <nav className="footer__links" aria-label="Footer">
            <a href="#work">Our work</a>
            <a href="#how">How it works</a>
            <a href="#contact">Get a quote</a>
            <a href={brand.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href={`mailto:${brand.email}`}>{brand.email}</a>
          </nav>
        </div>
        <div className="footer__credit">
          <span className="footer__crown">♛</span>
          <span><b>{credit.by}</b> — {credit.tagline}</span>
        </div>
        <div className="footer__legal">
          <span>© {2026} {brand.name}.</span>
          <span>{brand.tagline}</span>
        </div>
      </div>
    </footer>
  )
}
