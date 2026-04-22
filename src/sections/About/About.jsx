import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { useReveal } from '../../hooks/useReveal.js'
import { ABOUT, PERSONAL } from '../../data.js'
import './About.css'

export default function About() {
  const [leftRef, leftVisible]   = useReveal(0.12)
  const [rightRef, rightVisible] = useReveal(0.12)

  return (
    <section id="about" className="about light-section">
      <div className="container section-inner">
        <div className="about__grid">

          <div ref={leftRef} className={`about__left reveal ${leftVisible ? 'visible' : ''}`}>
            <span className="section-tag">About Me</span>
            <h2 className="section-title">
              Where Design<br />
              Meets <span className="accent">Engineering</span>
            </h2>
            <div className="divider" />
            <p className="about__intro">{ABOUT.intro}</p>
            {ABOUT.bio.map((p, i) => (
              <p key={i} className="about__bio">{p}</p>
            ))}
            <button
              className="btn btn-outline"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Connect
              <span className="btn__icon"><FiArrowRight /></span>
            </button>
          </div>

          <div ref={rightRef} className={`about__right reveal reveal-delay-2 ${rightVisible ? 'visible' : ''}`}>
            <div className="about__card">
              <div className="about__card-avatar">
                {PERSONAL.name.split(' ').map((w) => w[0]).join('')}
              </div>
              <div className="about__card-info">
                <strong>{PERSONAL.name}</strong>
                <span>{PERSONAL.title}</span>
                <span className="about__location">📍 {PERSONAL.location}</span>
              </div>
            </div>

            <div className="about__skills-wrap">
              <h4 className="about__skills-title">Core Skills</h4>
              <ul className="about__skills">
                {ABOUT.skills.map((skill) => (
                  <li key={skill} className="about__skill-tag">{skill}</li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
