import { useState } from 'react'
import { projects } from '../data/data.js'
import ProjectCard from './ProjectCard.jsx'
import ProjectModal from './ProjectModal.jsx'
import Reveal from './Reveal.jsx'

export default function Projects() {
  const [openIdx, setOpenIdx] = useState(null)

  return (
    <section id="projects">
      <div className="wrap">
        <Reveal><div className="eyebrow">Projects</div></Reveal>
        <Reveal><h2 className="sec-title">Things I've built</h2></Reveal>
        <Reveal><p className="sec-sub">Three end-to-end projects spanning machine learning, full-stack web development and generative AI.</p></Reveal>
        <div className="proj-grid">
          {projects.map((p, i) => (
            <Reveal key={p.title}>
              <ProjectCard project={p} onOpenCase={() => setOpenIdx(i)} />
            </Reveal>
          ))}
        </div>
      </div>
      {openIdx !== null && (
        <ProjectModal project={projects[openIdx]} onClose={() => setOpenIdx(null)} />
      )}
    </section>
  )
}
