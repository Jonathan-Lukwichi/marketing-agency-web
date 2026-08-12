import { useReveal } from '../lib/useReveal'
import { steps } from '../data/content'

export default function Steps() {
  useReveal()
  return (
    <section className="section steps-sec" id="how">
      <div className="container">
        <div className="cs__intro reveal">
          <p className="eyebrow">{steps.eyebrow}</p>
          <h2 className="display">{steps.title}</h2>
        </div>
        <div className="steps">
          {steps.list.map(([t, d], i) => (
            <div className="step reveal" key={t}>
              <span className="n">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
