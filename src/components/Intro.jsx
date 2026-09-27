import { useEffect, useState } from 'react'

export default function Intro({ onDone }) {
  const [step, setStep] = useState(0)
  const [hidden, setHidden] = useState(false)
  const [showEnter, setShowEnter] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 1300)
    const t2 = setTimeout(() => setStep(2), 2700)
    const t3 = setTimeout(() => setShowEnter(true), 3200)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  const finish = () => {
    setHidden(true)
    setTimeout(onDone, 700)
  }

  return (
    <>
      <div id="intro" className={hidden ? 'hidden' : ''}>
        <div className={`intro-screen ${step === 0 ? 'active' : ''}`}><p>WELCOME TO MY PORTFOLIO</p></div>
        <div className={`intro-screen ${step === 1 ? 'active' : ''}`}><h1>ANKIT KUMAR</h1></div>
        <div className={`intro-screen ${step === 2 ? 'active' : ''}`}>
          <p style={{ marginBottom: 26 }}>SOFTWARE DEVELOPER</p>
          <div className={`intro-enter ${showEnter ? 'show' : ''}`}>
            <button className="btn btn-primary" onClick={finish}>Enter Portfolio</button>
          </div>
        </div>
      </div>
      {!hidden && <button id="skip-intro" onClick={finish}>Skip Intro</button>}
    </>
  )
}
