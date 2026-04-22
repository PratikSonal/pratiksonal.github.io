import React, { useEffect, useState } from 'react'

export default function Preloader({ onDone }) {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => {
      setHidden(true)
      setTimeout(onDone, 700)
    }, 1600)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <div className={`preloader${hidden ? ' hidden' : ''}`}>
      <span className="preloader__text">Pratik Sonal</span>
    </div>
  )
}
