import { useRef } from 'react'

export default function Hero() {
  const frameRef = useRef(null)
  const glowRef = useRef(null)

  const handleMove = (e) => {
    const r = frameRef.current.getBoundingClientRect()
    glowRef.current.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%')
    glowRef.current.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%')
  }

  const particles = Array.from({ length: 10 }, (_, i) => ({
    left: Math.random() * 100 + '%',
    top: Math.random() * 100 + '%',
    delay: (Math.random() * 5) + 's',
    key: i,
  }))

  return (
    <section id="hero">
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow">Hi, I'm</div>
          <h1 className="hero-title">ANKIT <span className="grad">KUMAR</span></h1>
          <div className="hero-role">Software Developer</div>
          <p className="hero-desc">Building modern web applications, intelligent machine learning solutions and exploring emerging AI technologies with Python.</p>
          <div className="hero-btns">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="/assets/Ankit_Kumar_Resume.pdf" download className="btn btn-ghost">Download Resume</a>
            <a href="#contact" className="btn btn-ghost">Contact Me</a>
          </div>
          <div className="badges">
            {['Python', 'Django', 'SQL', 'Machine Learning', 'GenAI', 'AWS'].map(b => (
              <span className="badge" key={b}>{b}</span>
            ))}
          </div>
        </div>
        <div className="photo-wrap">
          <div className="photo-frame" ref={frameRef} onMouseMove={handleMove}>
            <img src="/assets/profile.jpg" alt="Portrait of Ankit Kumar" />
            <div className="photo-glow" ref={glowRef}></div>
            <div className="sweep"></div>
            <div className="particles">
              {particles.map(p => (
                <span key={p.key} style={{ left: p.left, top: p.top, animationDelay: p.delay }}></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
