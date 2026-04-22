import React, { useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { useReveal } from '../../hooks/useReveal.js'
import { PROJECTS } from '../../data.js'
import './Projects.css'

const FILTERS = ['All', 'Web App', 'Desktop App', 'Tool']

function ProjectCard({ project, index }) {
  const [ref, visible] = useReveal(0.08)

  return (
    <div ref={ref} className={`project-card reveal reveal-delay-${(index % 4) + 1} ${visible ? 'visible' : ''}`}>
      <div className="project-card__top">
        <span className="project-card__category">{project.category}</span>
        <span className="project-card__year">{project.year}</span>
      </div>
      <div className="project-card__visual">
        <span className="project-card__initials">
          {project.title.split(' ').map((w) => w[0]).join('').slice(0, 2)}
        </span>
      </div>
      <div className="project-card__content">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>
        <div className="project-card__tags">
          {project.tags.map((tag) => <span key={tag} className="project-card__tag">{tag}</span>)}
        </div>
      </div>
      <a href={project.link} target="_blank" rel="noreferrer" className="project-card__link">
        <span>View on GitHub</span>
        <span className="project-card__link-icon"><FiArrowUpRight /></span>
      </a>
    </div>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [titleRef, titleVisible] = useReveal(0.15)

  const filtered = activeFilter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="projects light-section">
      <div className="container section-inner">
        <div ref={titleRef} className={`projects__header reveal ${titleVisible ? 'visible' : ''}`}>
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">Recent <span className="accent">Works</span></h2>
          <p className="section-subtitle">A selection of projects I've built — from developer tools to data visualisations.</p>
        </div>
        <div className="projects__filters">
          {FILTERS.map((f) => (
            <button key={f} className={`projects__filter ${activeFilter === f ? 'projects__filter--active' : ''}`} onClick={() => setActiveFilter(f)}>
              {f}
            </button>
          ))}
        </div>
        <div className="projects__grid">
          {filtered.map((project, i) => <ProjectCard key={project.id} project={project} index={i} />)}
        </div>
      </div>
    </section>
  )
}
