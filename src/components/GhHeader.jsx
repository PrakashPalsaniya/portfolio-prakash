import { profile } from '../data'
import ThemeToggle from './ThemeToggle'

export default function GhHeader() {
  return (
    <header className="gh-header">
      <div className="gh-header-inner">
        <div className="gh-crumb">
          <a href="#top" className="gh-crumb-ava" aria-label="Top">
            <img
              src={profile.avatar}
              alt=""
              onError={(e) => { e.currentTarget.src = `https://github.com/${profile.username}.png` }}
            />
          </a>
          <a href="#top" className="gh-crumb-user">{profile.username}</a>
        </div>
        <div className="gh-header-right">
          <ThemeToggle />
          <a href={profile.resume} download="Prakash-Palsaniya-Resume.pdf" className="btn-gh btn-sm">
            Resume
          </a>
        </div>
      </div>
    </header>
  )
}
