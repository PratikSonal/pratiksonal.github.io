import React from 'react'
import { FiDownload, FiArrowUpRight } from 'react-icons/fi'
import { useReveal } from '../../hooks/useReveal.js'
import { PERSONAL } from '../../data.js'
import './Resume.css'

const HIGHLIGHTS = [
  { label: 'Education',  value: 'B.Tech Computer Science', sub: 'ITER, Bhubaneswar · 2021–2025' },
  { label: 'Focus Areas', value: 'Frontend & Full Stack',  sub: 'React, Node.js, UI/UX' },
  { label: 'Experience', value: '2+ Years',                sub: 'Internships & Freelance' },
  { label: 'Projects',   value: '10+ Delivered',           sub: 'Web, Mobile & Desktop' },
]

export default function Resume() {
  const [leftRef, leftVisible]   = useReveal(0.12)
  const [rightRef, rightVisible] = useReveal(0.12)

  return (
    <section id="resume" className="resume soft-section">
      <div className="container section-inner">
        <div className="resume__grid">

          <div ref={leftRef} className={`resume__left reveal ${leftVisible ? 'visible' : ''}`}>
            <span className="section-tag">Resume</span>
            <h2 className="section-title">My <span className="accent">Credentials</span></h2>
            <div className="divider" />
            <p className="resume__desc">
              A snapshot of my academic background, technical focus, and professional output. Download the full PDF for complete details.
            </p>
            <div className="resume__stats">
              {HIGHLIGHTS.map((item) => (
                <div key={item.label} className="resume__stat">
                  <span className="resume__stat-label">{item.label}</span>
                  <strong className="resume__stat-value">{item.value}</strong>
                  <span className="resume__stat-sub">{item.sub}</span>
                </div>
              ))}
            </div>
            <div className="resume__ctas">
              <a href={PERSONAL.resumeUrl} download className="btn btn-outline">
                Download CV <span className="btn__icon"><FiDownload /></span>
              </a>
              <a href={PERSONAL.resumeUrl} target="_blank" rel="noreferrer" className="btn btn-outline">
                View PDF <span className="btn__icon"><FiArrowUpRight /></span>
              </a>
            </div>
          </div>

          <div ref={rightRef} className={`resume__right reveal reveal-delay-2 ${rightVisible ? 'visible' : ''}`}>
            <div className="resume__preview">
              <div className="resume__preview-header">
                <div className="resume__preview-dots"><span /><span /><span /></div>
                <span className="resume__preview-name">Resume.pdf</span>
              </div>
              <div className="resume__preview-body">
                <div className="resume__mock">
                  <div className="resume__mock-sidebar">
                    <div className="resume__mock-avatar" />
                    <div className="resume__mock-line short accent-line" />
                    <div className="resume__mock-line medium" />
                    <div className="resume__mock-spacer" />
                    <div className="resume__mock-line short" />
                    <div className="resume__mock-line long" />
                    <div className="resume__mock-line long" />
                    <div className="resume__mock-line medium" />
                    <div className="resume__mock-spacer" />
                    <div className="resume__mock-line short" />
                    <div className="resume__mock-line long" />
                    <div className="resume__mock-line medium" />
                  </div>
                  <div className="resume__mock-main">
                    <div className="resume__mock-line long dark" />
                    <div className="resume__mock-line medium dark" />
                    <div className="resume__mock-spacer" />
                    <div className="resume__mock-line short accent-line" />
                    <div className="resume__mock-line long" />
                    <div className="resume__mock-line long" />
                    <div className="resume__mock-line medium" />
                    <div className="resume__mock-spacer" />
                    <div className="resume__mock-line short accent-line" />
                    <div className="resume__mock-line long" />
                    <div className="resume__mock-line long" />
                    <div className="resume__mock-line short" />
                    <div className="resume__mock-spacer" />
                    <div className="resume__mock-line short accent-line" />
                    <div className="resume__mock-line long" />
                    <div className="resume__mock-line medium" />
                  </div>
                </div>
                <a href={PERSONAL.resumeUrl} download className="resume__download-cta">
                  <FiDownload /><span>Download Full PDF</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
