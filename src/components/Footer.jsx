import { contact } from '../data/data.js'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="logo" style={{ fontSize: '1.1rem' }}>ANKIT KUMAR</div>
        <p style={{ marginTop: 6 }}>Software Developer</p>
        <div className="footer-icons">
          <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">GH</a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
          <a href={`mailto:${contact.email}`} aria-label="Email">@</a>
        </div>
        <p style={{ marginTop: 18 }}>© 2026 Ankit Kumar</p>
      </div>
    </footer>
  )
}
