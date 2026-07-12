import GhHeader from './components/GhHeader'
import GhTabs from './components/GhTabs'
import GhProfile from './components/GhProfile'
import GhReadme from './components/GhReadme'
import GhPinned from './components/GhPinned'
import GhActivity from './components/GhActivity'
import GhSkills from './components/GhSkills'
import GhContact from './components/GhContact'
import GhFooter from './components/GhFooter'
import ErrorBoundary from './components/ErrorBoundary'

export default function App() {
  return (
    <ErrorBoundary>
      <GhHeader />
      <GhTabs />
      <div className="gh-body">
        <GhProfile />
        <main className="gh-main">
          <GhReadme />
          <GhPinned />
          <GhActivity />
          <GhSkills />
          <GhContact />
        </main>
      </div>
      <GhFooter />
    </ErrorBoundary>
  )
}
