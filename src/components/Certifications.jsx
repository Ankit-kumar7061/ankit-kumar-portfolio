import { certifications } from '../data/data.js'
import Reveal from './Reveal.jsx'

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="wrap">
        <Reveal><div className="eyebrow">Certifications</div></Reveal>
        <Reveal><h2 className="sec-title">Courses &amp; certifications</h2></Reveal>
        <div className="cert-grid">
          {certifications.map(c => (
            <Reveal className="cert-card glass" key={c.name}>
              <div className="cert-icon">🎓</div>
              <div><h4>{c.name}</h4><p>{c.org}</p></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
