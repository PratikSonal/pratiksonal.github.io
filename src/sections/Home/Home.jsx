import React, { useEffect, useRef } from 'react'
import Typewriter from 'typewriter-effect'
import { FiArrowRight } from 'react-icons/fi'
import GeoBackground from '../../components/GeoBackground.jsx'
// import ScrollBadge from '../../components/ScrollBadge.jsx'  // commented out per request
import { PERSONAL, TYPEWRITER_STRINGS } from '../../data.js'
import './Home.css'

export default function Home() {
  const labelRef   = useRef(null)
  const headingRef = useRef(null)
  const subRef     = useRef(null)
  const ctaRef     = useRef(null)

  useEffect(() => {
    const els = [labelRef.current, headingRef.current, subRef.current, ctaRef.current]
    els.forEach((el, i) => {
      if (!el) return
      el.style.opacity = '0'
      el.style.transform = 'translateY(36px)'
      setTimeout(() => {
        el.style.transition =
          'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, 250 + i * 160)
    })
  }, [])

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="home dark-section">
      <GeoBackground />

      <div className="home__content container">
        <div className="home__typewriter-row" ref={labelRef}>
          <span className="home__typewriter-prefix">I am a&nbsp;</span>
          <Typewriter
            options={{
              strings: TYPEWRITER_STRINGS,
              autoStart: true,
              loop: true,
              deleteSpeed: 40,
              delay: 60,
              wrapperClassName: 'tw-wrapper',
              cursorClassName: 'tw-cursor',
            }}
          />
        </div>

        <h1 className="home__heading" ref={headingRef}>
          <span className="home__heading-bold">{PERSONAL.taglineLine1}</span>
          <span className="home__heading-thin">{PERSONAL.taglineLine2}</span>
        </h1>

        <p className="home__subtitle" ref={subRef}>{PERSONAL.subtitle}</p>

        <div className="home__ctas" ref={ctaRef}>
          <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
            View My Work
            <span className="btn__icon"><FiArrowRight /></span>
          </button>
          <button className="btn btn-dark" onClick={() => scrollTo('contact')}>
            Get In Touch
            <span className="btn__icon"><FiArrowRight /></span>
          </button>
        </div>
      </div>

      {/* Scroll badge — commented out per request */}
      {/* <ScrollBadge targetId="about" /> */}
    </section>
  )
}
