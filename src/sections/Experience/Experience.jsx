import React, { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { useReveal } from '../../hooks/useReveal.js'
import { EXPERIENCE } from '../../data.js'
import './Experience.css'

function ExperienceCard({ item, index }) {
  const [ref, visible] = useReveal(0.1)
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      ref={ref}
      className={`exp-card reveal reveal-delay-${(index % 3) + 1} ${visible ? 'visible' : ''}`}
    >
      {/* Body — dot is rendered inside the card as a pseudo element via CSS */}
      <div className="exp-card__body">
        <div className="exp-card__meta">
          <span className="exp-card__period">{item.period}</span>
          <span className="exp-card__dot-sep">·</span>
          <span className="exp-card__location">{item.location}</span>
        </div>
        <h3 className="exp-card__role">{item.role}</h3>
        <p className="exp-card__company">{item.company}</p>
        <p className="exp-card__desc">{item.description}</p>

        <div className={`exp-card__highlights ${expanded ? 'exp-card__highlights--open' : ''}`}>
          <ul>
            {item.highlights.map((h, i) => (
              <li key={i}><span className="exp-card__bullet" />{h}</li>
            ))}
          </ul>
        </div>

        <div className="exp-card__footer">
          <div className="exp-card__tags">
            {item.tags.map((tag) => (
              <span key={tag} className="exp-card__tag">{tag}</span>
            ))}
          </div>
          <button
            className="exp-card__toggle"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
          >
            {expanded ? 'Less' : 'Details'}
            <FiChevronDown
              style={{
                transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)',
              }}
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  const [titleRef, titleVisible] = useReveal(0.15)

  return (
    <section id="experience" className="experience soft-section">
      <div className="container section-inner">
        <div
          ref={titleRef}
          className={`experience__header reveal ${titleVisible ? 'visible' : ''}`}
        >
          <span className="section-tag">Career</span>
          <h2 className="section-title">
            Experience &amp;<br />
            <span className="accent">Highlights</span>
          </h2>
          <p className="section-subtitle">
            A timeline of roles, projects, and the impact I've delivered along the way.
          </p>
        </div>

        <div className="exp-timeline">
          {EXPERIENCE.map((item, i) => (
            <ExperienceCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
