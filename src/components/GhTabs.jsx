import { BookIcon, RepoIcon, DotFill, MailIcon } from './GhIcons'

const tabs = [
  { id: 'overview', label: 'Overview', Icon: BookIcon, active: true },
  { id: 'pinned', label: 'Projects', Icon: RepoIcon, count: 4 },
  { id: 'stack', label: 'Tech Stack', Icon: DotFill },
  { id: 'contact', label: 'Contact', Icon: MailIcon },
]

export default function GhTabs() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  return (
    <div className="gh-tabs-wrap">
      <nav className="gh-tabs" aria-label="Profile">
        {tabs.map(({ id, label, Icon, count, active }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`gh-tab ${active ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); go(id) }}
          >
            <Icon />
            {label}
            {count != null && <span className="count">{count}</span>}
          </a>
        ))}
      </nav>
    </div>
  )
}
