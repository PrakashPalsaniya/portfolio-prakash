import { profile } from '../data'
import ThemeToggle from './ThemeToggle'
import { SearchIcon } from './GhIcons'

export default function GhHeader() {
  const openCommandPalette = () => {
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }));
  };

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
        
        <div style={{ marginLeft: '16px', display: 'flex', alignItems: 'center' }}>
          <button 
            onClick={openCommandPalette}
            className="gh-search-btn"
            style={{
              display: 'flex', alignItems: 'center', gap: '8px', 
              background: 'var(--canvas)', border: '1px solid var(--border)', 
              borderRadius: '6px', padding: '4px 8px', color: 'var(--text-muted)',
              fontSize: '14px', cursor: 'pointer', transition: 'border-color 0.2s',
              width: '240px', justifyContent: 'space-between'
            }}
            onMouseOver={(e) => e.currentTarget.style.borderColor = '#8b949e'}
            onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <SearchIcon />
              <span>Type <kbd style={{ fontFamily: 'var(--font-mono)', padding: '0 4px', border: '1px solid var(--border-muted)', borderRadius: '4px', fontSize: '11px', background: 'var(--canvas-subtle)', color: 'var(--text)' }}>/</kbd> to search</span>
            </div>
            <div style={{ display: 'flex', gap: '4px' }}>
              <kbd style={{ fontFamily: 'var(--font-mono)', padding: '1px 5px', border: '1px solid var(--border-muted)', borderRadius: '4px', fontSize: '11px', background: 'var(--canvas-subtle)' }}>Ctrl</kbd>
              <kbd style={{ fontFamily: 'var(--font-mono)', padding: '1px 5px', border: '1px solid var(--border-muted)', borderRadius: '4px', fontSize: '11px', background: 'var(--canvas-subtle)' }}>K</kbd>
            </div>
          </button>
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
