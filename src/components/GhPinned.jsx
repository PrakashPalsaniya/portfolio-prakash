import { useEffect, useRef, useState } from 'react'
import { projects } from '../data'
import { projectLogos } from '../logos'
import { RepoIcon, LinkIcon, CodeIcon } from './GhIcons'
import ArchDiagram from './ArchDiagram'

function RepoCard({ p, onOpen }) {
  const Logo = projectLogos[p.id]
  return (
    <article className="repo-card" onClick={() => onOpen(p)} role="button" tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpen(p) } }}
      aria-label={`Open details for ${p.name}`}>
      <div className="repo-top">
        {Logo ? <span className="repo-logo"><Logo /></span> : <RepoIcon />}
        <span className="repo-name">{p.name}</span>
        <span className="repo-vis">Public</span>
      </div>
      <div className="repo-cat">{p.category} · {p.year}</div>
      <p className="repo-desc">{p.tagline}</p>
      <div className="repo-topics">
        {p.stack.slice(0, 4).map((s) => (
          <span className="repo-topic" key={s}>{s.toLowerCase().replace(/[.\s]/g, '')}</span>
        ))}
      </div>
      <div className="repo-metrics">
        {p.metrics.map((m) => (
          <div className="rm" key={m.v}>
            <span className="rmk">{m.k}</span>
            <span className="rmv">{m.v}</span>
          </div>
        ))}
      </div>
      <div className="repo-links" onClick={(e) => e.stopPropagation()}>
        {p.links.demo && (
          <a href={p.links.demo} target="_blank" rel="noreferrer" className="demo">
            <LinkIcon /> Live Demo
          </a>
        )}
        <a href={p.links.code} target="_blank" rel="noreferrer">
          <CodeIcon /> Source Code
        </a>
      </div>
      <div className="repo-meta">
        <span><span className="lang-dot" style={{ background: p.langColor }} /> {p.lang}</span>
      </div>
    </article>
  )
}

function Modal({ p, onClose }) {
  const ref = useRef(null)
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    ref.current?.focus()
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" ref={ref} role="dialog" aria-modal="true" tabIndex={-1} onClick={(e) => e.stopPropagation()}>
        <div className="modal-hero">
          <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
          <span className="mh-cat">{p.category} · {p.year}</span>
          <h3>{p.name}</h3>
          <p className="mh-tag">{p.tagline}</p>
        </div>
        <div className="modal-body">
          <p className="desc">{p.description}</p>
          <div className="modal-stack">
            {p.stack.map((s) => <span className="chip" key={s}>{s}</span>)}
          </div>
          {p.architecture && (
            <>
              <div className="modal-h">Architecture</div>
              <ArchDiagram arch={p.architecture} accent={p.accent} />
            </>
          )}
          <div className="modal-h">What I built</div>
          <ul className="hl-list">
            {p.highlights.map((h) => (
              <li key={h}><span className="tick">▹</span><span>{h}</span></li>
            ))}
          </ul>
          <div className="modal-actions">
            {p.links.demo && (
              <a href={p.links.demo} target="_blank" rel="noreferrer" className="btn-gh btn-green">
                <LinkIcon /> Live Demo
              </a>
            )}
            <a href={p.links.code} target="_blank" rel="noreferrer" className="btn-gh">
              <CodeIcon /> Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function GhPinned() {
  const [active, setActive] = useState(null)
  return (
    <section id="pinned">
      <div className="gh-section-h">
        <h2>Pinned projects</h2>
        <a href="https://github.com/PrakashPalsaniya?tab=repositories" target="_blank" rel="noreferrer" className="link">View all on GitHub</a>
      </div>
      <div className="gh-pinned-grid">
        {projects.map((p) => <RepoCard key={p.id} p={p} onOpen={setActive} />)}
      </div>
      {active && <Modal p={active} onClose={() => setActive(null)} />}
    </section>
  )
}
