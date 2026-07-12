import { languages } from '../data'

export default function GhLanguages() {
  return (
    <div className="gh-langs">
      <h2>Languages</h2>
      <div className="lang-bar">
        {languages.map((l) => (
          <span key={l.name} className="lang-seg" style={{ width: `${l.pct}%`, background: l.color }} title={`${l.name} ${l.pct}%`} />
        ))}
      </div>
      <ul className="lang-legend">
        {languages.map((l) => (
          <li key={l.name}>
            <span className="lang-dot" style={{ background: l.color }} />
            <span className="lang-name">{l.name}</span>
            <span className="lang-pct">{l.pct}%</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
