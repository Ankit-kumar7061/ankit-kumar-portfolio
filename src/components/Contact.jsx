import { contact } from '../data/data.js'
import Reveal from './Reveal.jsx'

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <Reveal className="glass contact-box">
          <h2 className="sec-title" style={{ marginBottom: 10 }}>Let's build something together</h2>
          <p style={{ color: 'var(--dim)' }}>Open to entry-level Software Developer roles — feel free to reach out.</p>
          <div className="contact-links">
            <a href={`mailto:${contact.email}`} className="btn btn-primary">Email Me</a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">LinkedIn</a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">GitHub</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
