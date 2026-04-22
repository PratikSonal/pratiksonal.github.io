import React from 'react'
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiMapPin } from 'react-icons/fi'
import GeoBackground from '../../components/GeoBackground.jsx'
import { useReveal } from '../../hooks/useReveal.js'
import { PERSONAL } from '../../data.js'
import './Contact.css'

const SOCIAL = [
  { icon: <FiGithub />,   href: PERSONAL.github,            label: 'GitHub'   },
  { icon: <FiLinkedin />, href: PERSONAL.linkedin,          label: 'LinkedIn' },
  { icon: <FiTwitter />,  href: PERSONAL.twitter,           label: 'Twitter'  },
  { icon: <FiMail />,     href: `mailto:${PERSONAL.email}`, label: 'Email'    },
]

export default function Contact() {
  const [leftRef, leftVisible] = useReveal(0.12)

  return (
    <section id="contact" className="contact dark-section">
      <GeoBackground color="rgba(255,255,255,0.04)" />

      <div className="container section-inner">
        <div className="contact__grid">

          {/* Left */}
          <div ref={leftRef} className={`contact__left reveal ${leftVisible ? 'visible' : ''}`}>
            <span className="section-tag">Contact</span>
            <h2 className="section-title">
              Let's Build<br />Something{' '}
              <span style={{ color: 'var(--color-accent)' }}>Together</span>
            </h2>
            <div className="divider" style={{ background: 'rgba(255,255,255,0.15)' }} />
            <p className="contact__desc">
              Whether you have a project in mind, a role to fill, or just want to
              say hello — my inbox is always open.
            </p>

            <div className="contact__info">
              <a href={`mailto:${PERSONAL.email}`} className="contact__info-item">
                <span className="contact__info-icon"><FiMail /></span>
                {PERSONAL.email}
              </a>
              <div className="contact__info-item">
                <span className="contact__info-icon"><FiMapPin /></span>
                {PERSONAL.location}
              </div>
            </div>

            <div className="contact__social">
              {SOCIAL.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="contact__social-link"
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right — intentionally empty, balanced by the geo background */}
          <div className="contact__right" />

        </div>

        <div className="contact__footer">
          <p>© {new Date().getFullYear()} {PERSONAL.name}</p>
        </div>
      </div>
    </section>
  )
}
