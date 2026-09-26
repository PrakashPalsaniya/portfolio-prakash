import { timeline, profile } from '../data'
import { RepoIcon, StarIcon, DotFill } from './GhIcons'
import { motion } from 'framer-motion'

const icons = [RepoIcon, StarIcon, DotFill]

export default function GhActivity() {
  return (
    <motion.section 
      className="gh-activity" id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
    >
      <h2>Activity</h2>
      <div>
        <div className="act-item">
          <span className="act-icon"><RepoIcon /></span>
          <div className="act-body">
            <div><b>{profile.education.degree}</b> — {profile.education.school}</div>
            <div className="when">{profile.education.detail}</div>
          </div>
        </div>
        {timeline.map((t, i) => {
          const Icon = icons[i % icons.length]
          return (
            <div className="act-item" key={t.when}>
              <span className="act-icon"><Icon /></span>
              <div className="act-body">
                <div><b>{t.title}</b> — {t.text}</div>
                <div className="when">{t.when}</div>
              </div>
            </div>
          )
        })}
      </div>
    </motion.section>
  )
}
