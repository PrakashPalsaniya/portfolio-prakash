import { profile } from '../data'
import { MailIcon, LinkedinIcon, CodeIcon, DownloadIcon, LocationIcon } from './GhIcons'

const methods = [
  { Icon: MailIcon, label: 'Email', value: profile.email, href: `mailto:${profile.email}`, accent: '#238636' },
  { Icon: LinkedinIcon, label: 'LinkedIn', value: 'in/prakash-palsaniya', href: profile.linkedin, accent: '#0a66c2', ext: true },
  { Icon: CodeIcon, label: 'GitHub', value: profile.username, href: profile.github, accent: '#8957e5', ext: true },
  { Icon: DownloadIcon, label: 'Resume', value: 'Download PDF', href: profile.resume, accent: '#db6d28', download: true },
]

export default function GhContact() {
  return (
    <section className="gh-readme" id="contact">
      <div className="gh-readme-head">
        <MailIcon />
        <b>get-in-touch</b>&nbsp;/&nbsp;contact.md
      </div>
      <div className="gh-readme-body">
        <h1 style={{ fontSize: 22 }}>📫 Let's build something</h1>
        <p style={{ marginBottom: 6 }}>
          I'm currently looking for <b>SDE and backend internship roles</b>. The fastest way to
          reach me is email — I usually reply within a day.
        </p>
        <p className="sub" style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 20 }}>
          <LocationIcon /> {profile.location} · Open to remote
        </p>

        <div className="contact-grid">
          {methods.map(({ Icon, label, value, href, accent, ext, download }) => (
            <a
              key={label}
              href={href}
              className="contact-card"
              {...(ext ? { target: '_blank', rel: 'noreferrer' } : {})}
              {...(download ? { download: 'Prakash-Palsaniya-Resume.pdf' } : {})}
            >
              <span className="contact-ic" style={{ background: `${accent}22`, color: accent }}>
                <Icon />
              </span>
              <span className="contact-txt">
                <span className="contact-label">{label}</span>
                <span className="contact-value">{value}</span>
              </span>
              <span className="contact-arrow">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
