import React, { useState, useEffect } from 'react'
import { PERSONAL } from '../data.js'
import './Navbar.css'

const LINKS = [
  { label: 'Home',       id: 'home' },
  { label: 'About',      id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects',   id: 'projects' },
  { label: 'Resume',     id: 'resume' },
  { label: 'Contact',    id: 'contact' },
]

export default function Navbar() {
  const [open,     setOpen]     = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const scrollTo = (id) => {
    setOpen(false)
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 420)
  }

  return (
    <>
      <header className={[
        'nav-bar',
        scrolled ? 'nav-bar--scrolled' : '',
        open     ? 'nav-bar--open'     : '',
      ].filter(Boolean).join(' ')}>
        <div className="nav-bar__inner">
          <button className="nav-bar__logo" onClick={() => scrollTo('home')} aria-label="Go to top">
            <span>PS</span>
          </button>

          {/* Hamburger — commented out per request */}
          {/* <button
            className={`nav-bar__burger${open ? ' nav-bar__burger--x' : ''}`}
            onClick={() => setOpen(v => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span /><span />
          </button> */}
        </div>
      </header>

      {/* Full-screen overlay — commented out with hamburger */}
      {/* <div className={`nav-overlay${open ? ' nav-overlay--open' : ''}`} aria-hidden={!open}>
        <nav className="nav-overlay__nav">
          {LINKS.map((link, i) => (
            <button
              key={link.id}
              className="nav-overlay__item"
              style={{ transitionDelay: open ? `${i * 0.065}s` : '0s' }}
              onClick={() => scrollTo(link.id)}
            >
              <span className="nav-overlay__num">0{i + 1}</span>
              <span className="nav-overlay__label">{link.label}</span>
            </button>
          ))}
        </nav>
        <div className="nav-overlay__foot">
          <a href={`mailto:${PERSONAL.email}`}>{PERSONAL.email}</a>
          <span>{PERSONAL.location}</span>
        </div>
      </div> */}
    </>
  )
}
