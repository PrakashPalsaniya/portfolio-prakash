import { profile } from '../data'

export default function GhFooter() {
  return (
    <footer className="gh-footer">
      <div className="gh-footer-inner">
        <span className="gh-mark" aria-hidden>P</span>
        <span>© {new Date().getFullYear()} {profile.fullName}</span>
        <div className="gh-footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href="#top">Back to top</a>
        </div>
      </div>
    </footer>
  )
}
