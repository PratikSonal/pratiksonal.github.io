import React, { useEffect, useRef } from 'react'
import './Scrollbar.css'

/**
 * CustomScrollbar — a real DOM element that mirrors the native scroll position.
 * Appears on scroll, fades out after 1.2s of inactivity.
 */
export default function CustomScrollbar() {
  const thumbRef = useRef(null)
  const timerRef = useRef(null)

  useEffect(() => {
    const thumb = thumbRef.current
    if (!thumb) return

    const update = () => {
      const scrollTop    = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const ratio        = scrollHeight > 0 ? scrollTop / scrollHeight : 0
      const thumbHeight  = Math.max(40, (window.innerHeight / document.documentElement.scrollHeight) * window.innerHeight)
      const maxTop       = window.innerHeight - thumbHeight

      thumb.style.height  = `${thumbHeight}px`
      thumb.style.top     = `${ratio * maxTop}px`

      // Show
      thumb.classList.add('visible')

      // Hide after 1.2s of no scrolling
      clearTimeout(timerRef.current)
      timerRef.current = setTimeout(() => {
        thumb.classList.remove('visible')
      }, 1200)
    }

    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update, { passive: true })

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      clearTimeout(timerRef.current)
    }
  }, [])

  return (
    <div className="custom-scrollbar">
      <div className="custom-scrollbar__thumb" ref={thumbRef} />
    </div>
  )
}
