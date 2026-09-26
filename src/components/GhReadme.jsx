import { motion } from 'framer-motion'
import { profile, stats } from '../data'
import { BookIcon } from './GhIcons'
import Typewriter from './Typewriter'

const IssueIcon = (p) => (
  <svg viewBox="0 0 16 16" width="16" height="16" {...p}>
    <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
    <path fillRule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path>
  </svg>
)

const shields = [
  { k: 'role', v: 'Backend & AI', c: '#1f6feb' },
  { k: 'focus', v: 'Agentic RAG', c: '#8957e5' },
  { k: 'cgpa', v: '8.4', c: '#238636' },
]

export default function GhReadme() {
  return (
    <motion.section 
      className="gh-readme" id="overview"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="gh-readme-head">
        <BookIcon />
        <b>{profile.username}</b>&nbsp;/&nbsp;README.md
      </div>
      <div className="gh-readme-body">
        <h1 className="text-gradient" style={{ fontSize: '32px', marginBottom: '12px' }}>
          Hi, I'm Prakash <span aria-hidden>👋</span>
        </h1>
        <p className="sub" style={{ fontSize: '18px', color: 'var(--text)' }}>
          <Typewriter words={['I build backend systems.', 'I ship AI-native apps.', 'I love agentic RAG.', 'Backend & AI Engineer.']} />
        </p>

        <div className="badges-row" style={{ marginBottom: '24px' }}>
          {shields.map((s) => (
            <span className="shield" key={s.k}>
              <span className="k">{s.k}</span>
              <span className="v" style={{ background: s.c }}>{s.v}</span>
            </span>
          ))}
        </div>

        <p style={{ fontSize: '15px', lineHeight: '1.6' }}>
          Final-year IT student (<b>8.4 CGPA</b>) at <b>NIT Srinagar</b> who builds <b>backend systems</b> and
          <b> AI-native apps</b>. I have solved <b>500+ DSA problems</b>, and lately I've been working with <code className="gh-code">LLM APIs</code>, <code className="gh-code">RAG pipelines</code>, and
          <code className="gh-code">agentic workflows</code> — alongside the usual backend toolkit: APIs, databases, caching, and message queues.
        </p>

        <hr className="gh-hr" />

        <p style={{ marginBottom: '12px' }}><b>🔭 What I'm working on</b></p>
        
        <div className="issue-card">
          <div className="issue-icon"><IssueIcon /></div>
          <div>
            <div style={{ fontWeight: '600', color: 'var(--link)', marginBottom: '4px' }}>DocuMind — Agentic RAG Platform</div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Building a chat-with-PDF platform using LangGraph, Qdrant, and OpenAI.</div>
          </div>
        </div>
        <div className="issue-card">
          <div className="issue-icon"><IssueIcon /></div>
          <div>
            <div style={{ fontWeight: '600', color: 'var(--link)', marginBottom: '4px' }}>AI Feature Shipping</div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Integrating LLMs into solid, scalable backend architectures.</div>
          </div>
        </div>

        <p style={{ marginTop: '24px', marginBottom: '12px' }}><b>⚡ Quick facts</b></p>
        
        <div className="mock-code-block">
          <div><span style={{ color: '#ff7b72' }}>const</span> <span style={{ color: '#79c0ff' }}>developer</span> <span style={{ color: '#ff7b72' }}>=</span> {'{'}</div>
          {stats.map((s, idx) => (
            <div key={s.label} style={{ paddingLeft: '16px' }}>
              <span className="json-key">"{s.label}"</span>: {typeof s.value === 'string' ? <span className="json-string">"{s.value}"</span> : <span className="json-number">{s.value}</span>}{idx < stats.length - 1 ? ',' : ''}
            </div>
          ))}
          <div>{'}'}</div>
        </div>

        <hr className="gh-hr" style={{ marginTop: '32px' }} />
        <p style={{ marginBottom: 0, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>📫 Reach me at</span>
          <a href={`mailto:${profile.email}`} style={{ fontWeight: '600', padding: '4px 12px', background: 'var(--btn)', border: '1px solid var(--btn-border)', borderRadius: '20px' }}>
            {profile.email}
          </a>
        </p>
      </div>
    </motion.section>
  )
}
