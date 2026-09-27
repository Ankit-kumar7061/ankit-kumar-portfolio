import { useEffect } from 'react'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!project) return null
  const m = project.modal

  return (
    <div id="modal-overlay" className="open" onClick={(e) => { if (e.target.id === 'modal-overlay') onClose() }}>
      <div className="modal glass">
        <button className="modal-close" aria-label="Close" onClick={onClose}>✕</button>
        <h3>{project.title}</h3>
        <div className="modal-sec"><h4>Overview</h4><p>{m.overview}</p></div>
        <div className="modal-sec"><h4>Problem</h4><p>{m.problem}</p></div>
        <div className="modal-sec"><h4>Solution</h4><p>{m.solution}</p></div>
        <div className="modal-sec"><h4>Technology</h4><p>{m.tech}</p></div>
        <div className="modal-sec">
          <h4>Key Features</h4>
          <ul>{m.features.map(f => <li key={f}>{f}</li>)}</ul>
        </div>
        <div className="modal-sec"><h4>My Contribution</h4><p>{m.contribution}</p></div>
        <div className="modal-sec"><h4>Outcome</h4><p>{m.outcome}</p></div>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View on GitHub</a>
      </div>
    </div>
  )
}
