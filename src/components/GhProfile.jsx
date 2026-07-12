import { profile } from '../data'
import GhLanguages from './GhLanguages'
import {
  LocationIcon, MailIcon, OrgIcon, LinkedinIcon, DownloadIcon,
} from './GhIcons'

export default function GhProfile() {
  return (
    <aside className="gh-side" id="top">
      <div className="gh-ava">
        <img
          src={profile.avatar}
          alt={profile.fullName}
          onError={(e) => { e.currentTarget.src = `https://github.com/${profile.username}.png?size=460` }}
        />
      </div>

      <div className="gh-side-head">
        <div className="gh-name">{profile.fullName}</div>
        <div className="gh-username">{profile.username}</div>
      </div>

      <p className="gh-headline">{profile.headline}</p>

      <div className="gh-side-actions">
        <a href={profile.resume} download="Prakash-Palsaniya-Resume.pdf" className="btn-gh btn-green block">
          <DownloadIcon /> Download Resume
        </a>
        <a href={`mailto:${profile.email}`} className="btn-gh block">
          <MailIcon /> Get in touch
        </a>
      </div>

      <ul className="gh-meta">
        <li><OrgIcon /> {profile.company}</li>
        <li><LocationIcon /> {profile.location}</li>
        <li><MailIcon /> <a href={`mailto:${profile.email}`}>{profile.email}</a></li>
        <li><LinkedinIcon /> <a href={profile.linkedin} target="_blank" rel="noreferrer">in/prakash-palsaniya</a></li>
      </ul>

      <div className="gh-ach">
        <h2>Highlights</h2>
        <div className="gh-badges">
          <span className="gh-badge" title="Open to work">💼</span>
          <span className="gh-badge" title="500+ DSA solved">🧠</span>
          <span className="gh-badge" title="AI / RAG builder">🤖</span>
          <span className="gh-badge" title="Backend engineer">⚙️</span>
        </div>
      </div>

      <GhLanguages />
    </aside>
  )
}
