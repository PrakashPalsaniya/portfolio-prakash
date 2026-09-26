import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data'
import { projectLogos } from '../logos'
import { RepoIcon, LinkIcon, CodeIcon } from './GhIcons'
import ArchDiagram from './ArchDiagram'

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
}

function RepoCard({ p, onOpen }) {
  const Logo = projectLogos[p.id]
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    cardRef.current.style.setProperty('--mouse-x', `${x}px`)
    cardRef.current.style.setProperty('--mouse-y', `${y}px`)
  }

  return (
    <motion.article 
      ref={cardRef}
      variants={itemVariants}
      className="repo-card glow-card" 
      onClick={() => onOpen(p)} role="button" tabIndex={0}
      onMouseMove={handleMouseMove}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpen(p) } }}
      aria-label={`Open details for ${p.name}`}
      whileHover={{ y: -2, borderColor: '#8b949e' }}
      transition={{ duration: 0.15 }}
    >
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
    </motion.article>
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
    <motion.div 
      className="modal-overlay" 
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
    >
      <motion.div 
        className="modal" 
        ref={ref} role="dialog" aria-modal="true" tabIndex={-1} onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      >
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
      </motion.div>
    </motion.div>
  )
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
}

export default function GhPinned() {
  const [active, setActive] = useState(null)
  return (
    <section id="pinned">
      <div className="gh-section-h">
        <h2>Pinned projects</h2>
        <a href="https://github.com/PrakashPalsaniya?tab=repositories" target="_blank" rel="noreferrer" className="link">View all on GitHub</a>
      </div>
      <motion.div 
        className="gh-pinned-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((p) => <RepoCard key={p.id} p={p} onOpen={setActive} />)}
      </motion.div>
      
      <AnimatePresence>
        {active && <Modal p={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  )
}
