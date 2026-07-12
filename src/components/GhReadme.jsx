import { profile, stats } from '../data'
import { BookIcon } from './GhIcons'
import Typewriter from './Typewriter'

const shields = [
  { k: 'role', v: 'Backend & AI', c: '#1f6feb' },
  { k: 'focus', v: 'Agentic RAG', c: '#8957e5' },
  { k: 'cgpa', v: '8.4', c: '#238636' },
]

export default function GhReadme() {
  return (
    <section className="gh-readme" id="overview">
      <div className="gh-readme-head">
        <BookIcon />
        <b>{profile.username}</b>&nbsp;/&nbsp;README.md
      </div>
      <div className="gh-readme-body">
        <h1>Hi, I'm Prakash <span aria-hidden>👋</span></h1>
        <p className="sub">
          <Typewriter words={['I build backend systems.', 'I ship AI-native apps.', 'I love agentic RAG.', 'Backend & AI Engineer.']} />
        </p>

        <div className="badges-row">
          {shields.map((s) => (
            <span className="shield" key={s.k}>
              <span className="k">{s.k}</span>
              <span className="v" style={{ background: s.c }}>{s.v}</span>
            </span>
          ))}
        </div>

        <p>
          Final-year IT student at <b>NIT Srinagar</b> who builds <b>backend systems</b> and
          <b> AI-native apps</b>. Lately I've been working with <b>LLM APIs, RAG pipelines and
          agentic workflows</b> — and the usual backend toolkit: APIs, databases, caching and queues.
        </p>

        <hr className="gh-hr" />

        <p><b>🔭 What I'm working on</b></p>
        <ul className="gh-list">
          <li><span className="e">▹</span> DocuMind — an agentic RAG chat-with-PDF platform (LangGraph + Qdrant)</li>
          <li><span className="e">▹</span> Shipping AI features on top of solid, scalable backends</li>
        </ul>

        <p style={{ marginTop: 14 }}><b>⚡ Quick facts</b></p>
        <ul className="gh-list">
          {stats.map((s) => (
            <li key={s.label}><span className="e">▹</span> <b>{s.value}</b>&nbsp;— {s.label}</li>
          ))}
        </ul>

        <hr className="gh-hr" />
        <p style={{ marginBottom: 0, color: 'var(--text-muted)' }}>
          📫 Reach me at <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
      </div>
    </section>
  )
}
