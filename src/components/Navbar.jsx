import { useEffect, useState } from 'react'

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <div className="wrap nav-inner">
          <a href="#hero" className="logo">AK</a>
          <ul className="nav-links">
            {links.map(l => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}
          </ul>
          <div className="nav-right">
            <a href="/assets/Ankit_Kumar_Resume.pdf" download className="btn btn-ghost" style={{ padding: '9px 18px', fontSize: '.85rem' }}>Download Resume</a>
            <button className={`hamburger ${open ? 'open' : ''}`} aria-label="Menu" onClick={() => setOpen(o => !o)}>
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </nav>
      <div id="mobile-menu" className={open ? 'open' : ''}>
        {links.map(l => <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>)}
      </div>
    </>
  )
}
