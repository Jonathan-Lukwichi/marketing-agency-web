import { useReveal } from '../lib/useReveal'
import { cases } from '../data/content'

function Group({ group }) {
  return (
    <div className="cs__group reveal">
      <div className="cs__head">
        <h3 className="display cs__q">{group.label}</h3>
        <p className="cs__line">{group.line}</p>
      </div>
      <div className="cs__cards">
        {group.items.map((it) => (
          <figure className="cs__card" key={it.name}>
            <div className="cs__media"><img src={it.img} alt={it.name} /></div>
            <figcaption>
              <span className="cs__name">{it.name}</span>
              <span className="cs__tag">{it.tag}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}

export default function CaseStudies() {
  useReveal()
  return (
    <section className="section cs" id="work">
      <div className="container">
        <div className="cs__intro reveal">
          <p className="eyebrow">{cases.eyebrow}</p>
          <h2 className="display">{cases.title}</h2>
        </div>
        <Group group={cases.product} />
        <Group group={cases.service} />
      </div>
    </section>
  )
}
