import { useState } from 'react'
import Intro from './components/Intro.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import AISection from './components/AISection.jsx'
import Education from './components/Education.jsx'
import Certifications from './components/Certifications.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [introDone, setIntroDone] = useState(false)

  return (
    <>
      {!introDone && <Intro onDone={() => setIntroDone(true)} />}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <AISection />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </>
  )
}
