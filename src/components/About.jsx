import Reveal from './Reveal.jsx'

const focusAreas = ['Python', 'Backend Development', 'Django', 'SQL', 'Machine Learning', 'GenAI', 'Problem Solving', 'DSA']

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <Reveal><div className="eyebrow">About Me</div></Reveal>
        <Reveal><h2 className="sec-title">A fresher with a builder's mindset</h2></Reveal>
        <div className="about-grid">
          <Reveal className="about-text">
            <p>I recently completed my Master of Computer Applications (MCA) at Pimpri Chinchwad University, Pune, with a CGPA of 8.94. Before that, I completed my Bachelor of Computer Applications (BCA) at Aisect University with a CGPA of 8.14.</p>
            <p>I'm a software developer at the start of my career, drawn to Python and backend development with Django, working with SQL-driven data, and solving problems with data structures and algorithms. Alongside that, I've been building hands-on machine learning and GenAI projects — from a movie recommender to an AI captioning tool — to understand how these systems actually work end to end.</p>
            <div className="chip-row">
              {focusAreas.map(f => <span className="chip" key={f}>{f}</span>)}
            </div>
          </Reveal>
          <Reveal>
            <div className="glass stat-card"><div className="num">8.94</div><div className="lbl">CGPA — MCA, Pimpri Chinchwad University</div></div>
            <div className="glass stat-card"><div className="num">8.14</div><div className="lbl">CGPA — BCA, Aisect University</div></div>
            <div className="glass stat-card"><div className="num">3</div><div className="lbl">End-to-end projects across web &amp; ML/GenAI</div></div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
