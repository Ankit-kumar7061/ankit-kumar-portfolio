export default function ProjectCard({ project, onOpenCase }) {
  const p = project
  return (
    <div className="proj-card glass">
      <div className="proj-media">
        {p.url && (
          <div className="browser-bar">
            <span className="dot" style={{ background: '#f87171' }}></span>
            <span className="dot" style={{ background: '#fbbf24' }}></span>
            <span className="dot" style={{ background: '#34d399' }}></span>
            <span style={{ marginLeft: 8 }}>{p.url}</span>
          </div>
        )}
        <img src={p.img} alt={`${p.title} interface preview`} loading="lazy" />
      </div>
      <div className="proj-body">
        <h3>{p.title}</h3>
        <p>{p.desc}{p.reference ? ' (visual shown is a representative reference design.)' : ''}</p>
        <div className="tag-row">
          {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
        </div>
        <div className="proj-actions">
          <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">GitHub</a>
          <button className="btn btn-primary" onClick={onOpenCase}>View Case Study</button>
        </div>
      </div>
    </div>
  )
}
