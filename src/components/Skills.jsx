import { useState } from 'react'
import { skillCategories } from '../data/data.js'
import Reveal from './Reveal.jsx'

export default function Skills() {
  const categories = Object.keys(skillCategories)
  const [active, setActive] = useState(categories[0])

  return (
    <section id="skills">
      <div className="wrap">
        <Reveal><div className="eyebrow">Skills</div></Reveal>
        <Reveal><h2 className="sec-title">Technologies I work with</h2></Reveal>
        <Reveal><p className="sec-sub">Grouped by area — tap a category to explore.</p></Reveal>
        <Reveal>
          <div className="tabs">
            {categories.map(cat => (
              <button
                key={cat}
                className={`tab ${active === cat ? 'active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>
        <div className="chip-grid glass" style={{ padding: 32 }}>
          {skillCategories[active].map((skill, i) => (
            <span className="skill-chip" key={skill} style={{ animationDelay: `${i * 40}ms` }}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
