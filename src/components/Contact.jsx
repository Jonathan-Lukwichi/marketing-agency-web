import { useReveal } from '../lib/useReveal'
import { contact, brand } from '../data/content'

const mailLink = `mailto:${brand.email}?subject=${encodeURIComponent('Quote & demo request — LWC Group Marketing')}&body=${encodeURIComponent("Hi,\n\nI'd like a quote and a demo.\n\nWhat I sell: \nMy business name: \nCity: \n")}`

export default function Contact() {
  useReveal()
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact__card reveal">
          <p className="eyebrow" style={{ justifyContent: 'center' }}>{contact.eyebrow}</p>
          <h2 className="display">{contact.title}</h2>
          <p className="lede">{contact.sub}</p>

          <ul className="contact__lines">
            {contact.lines.map((l) => <li key={l}>{l}</li>)}
          </ul>

          <a className="btn btn--gold contact__btn" href={mailLink}>✉ {contact.cta}</a>
          <p className="contact__email"><a href={mailLink}>{brand.email}</a></p>
        </div>
      </div>
    </section>
  )
}
