import { aiNodes } from '../data/data.js'
import Reveal from './Reveal.jsx'

export default function AISection() {
  return (
    <section id="ai">
      <div className="wrap">
        <Reveal><div className="eyebrow">AI &amp; GenAI</div></Reveal>
        <Reveal><h2 className="sec-title">Exploring AI &amp; Generative AI</h2></Reveal>
        <div className="ai-grid">
          <Reveal>
            <p style={{ color: 'var(--dim)', maxWidth: 480 }}>
              Beyond my core projects, I actively explore the wider generative AI landscape — from prompt design to agentic systems — as ongoing areas of learning.
            </p>
            <div className="ai-chip-list">
              {['GenAI', 'Agentic AI', 'LangChain', 'LangGraph', 'Prompt Engineering', 'LLM Applications', 'Computer Vision'].map(c => (
                <span className="chip" key={c}>{c}</span>
              ))}
            </div>
          </Reveal>
          <Reveal className="network glass">
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
              <defs>
                <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
              {aiNodes.filter(n => !n.core).map(n => (
                <line key={n.label} x1="50%" y1="50%" x2={`${n.x}%`} y2={`${n.y}%`} />
              ))}
            </svg>
            {aiNodes.map(n => (
              <div
                key={n.label}
                className={`node ${n.core ? 'core' : 'outer'}`}
                style={{ left: `${n.x}%`, top: `${n.y}%` }}
              >
                {n.label}
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
