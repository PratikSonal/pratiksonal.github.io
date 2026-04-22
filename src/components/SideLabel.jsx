import React from 'react'
import { useActiveSection } from '../hooks/useActiveSection.js'
import './SideLabel.css'

const DARK_SECTIONS = new Set(['home', 'contact'])

export default function SideLabel() {
  const active = useActiveSection()
  const isDark = DARK_SECTIONS.has(active)

  return (
    <div className={`side-label${isDark ? ' side-label--dark' : ' side-label--light'}`}>
      {active.toUpperCase()}
    </div>
  )
}
