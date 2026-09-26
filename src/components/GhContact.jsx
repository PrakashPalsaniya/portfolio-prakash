import { useState } from 'react'
import { profile } from '../data'
import { MailIcon, LinkedinIcon, CodeIcon, DownloadIcon, LocationIcon } from './GhIcons'
import { motion } from 'framer-motion'

const methods = [
  { id: 'email', Icon: MailIcon, label: 'Email', value: profile.email, href: `mailto:${profile.email}`, accent: '#238636', copyable: true },
  { id: 'linkedin', Icon: LinkedinIcon, label: 'LinkedIn', value: 'in/prakash-palsaniya', href: profile.linkedin, accent: '#0a66c2', ext: true },
  { id: 'github', Icon: CodeIcon, label: 'GitHub', value: profile.username, href: profile.github, accent: '#8957e5', ext: true },
  { id: 'resume', Icon: DownloadIcon, label: 'Resume', value: 'Download PDF', href: profile.resume, accent: '#db6d28', download: true },
]

function ContactCard({ item }) {
  const [copied, setCopied] = useState(false);
  const { Icon, label, value, href, accent, ext, download, copyable } = item;

  const handleClick = (e) => {
    if (copyable) {
      e.preventDefault();
      navigator.clipboard.writeText(value).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="contact-card"
      {...(ext ? { target: '_blank', rel: 'noreferrer' } : {})}
      {...(download ? { download: 'Prakash-Palsaniya-Resume.pdf' } : {})}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <span className="contact-ic" style={{ background: `${accent}22`, color: accent }}>
        <Icon />
      </span>
      <span className="contact-txt">
        <span className="contact-label">{label}</span>
        <span className="contact-value" style={{ color: copied ? '#3fb950' : 'var(--text)', transition: 'color 0.2s' }}>
          {copied ? 'Copied to clipboard!' : value}
        </span>
      </span>
      <span className="contact-arrow">{copied ? '✓' : (copyable ? '📋' : '↗')}</span>
    </a>
  );
}

export default function GhContact() {
  return (
    <motion.section 
      className="gh-readme" id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
    >
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
          {methods.map((item) => (
            <ContactCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </motion.section>
  )
}
