import { useEffect, useState } from 'react'
import { SunIcon, MoonIcon } from './GhIcons'

function getInitial() {
  if (typeof document === 'undefined') return 'dark'
  return document.documentElement.getAttribute('data-theme') || 'dark'
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitial)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#ffffff' : '#0d1117')
    try { localStorage.setItem('theme', theme) } catch { void 0 }
  }, [theme])

  const isLight = theme === 'light'
  return (
    <button
      className="theme-toggle"
      onClick={() => setTheme(isLight ? 'dark' : 'light')}
      aria-label={`Switch to ${isLight ? 'dark' : 'light'} theme`}
      title={`Switch to ${isLight ? 'dark' : 'light'} theme`}
    >
      {isLight ? <MoonIcon /> : <SunIcon />}
    </button>
  )
}
