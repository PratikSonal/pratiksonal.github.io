import React from 'react'
import { FiArrowDown } from 'react-icons/fi'

export default function ScrollBadge({ targetId }) {
  const handleClick = () =>
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="scroll-badge" onClick={handleClick} role="button" aria-label="Scroll to next section">
      <div className="scroll-badge__ring">
        <svg viewBox="0 0 100 100">
          <defs>
            <path id="sbPath" d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0" />
          </defs>
          <text fontSize="9" fill="rgba(255,255,255,0.38)" letterSpacing="2.6">
            <textPath href="#sbPath">SCROLL DOWN · SCROLL DOWN · </textPath>
          </text>
        </svg>
      </div>
      <div className="scroll-badge__arrow">
        <FiArrowDown />
      </div>
    </div>
  )
}
