import { education } from '../data/data.js'
import Reveal from './Reveal.jsx'

export default function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <Reveal><div className="eyebrow">Education</div></Reveal>
        <Reveal><h2 className="sec-title">Academic background</h2></Reveal>
        <div className="timeline">
          {education.map(e => (
            <Reveal className="tl-item" key={e.degree}>
              <h4>{e.degree}</h4>
              <div className="tl-meta">{e.school} · {e.period}</div>
              <div>CGPA: {e.cgpa}</div>
              <span className="tl-badge">{e.status}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
