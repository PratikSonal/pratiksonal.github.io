import { useEffect, useRef } from 'react'
import './CustomScrollbar.css'

/**
 * CustomScrollbar — a div-based scrollbar overlay.
 * Appears on scroll, fades out 1.2s after stopping.
 * The thumb is always blue (accent colour).
 */
export default function CustomScrollbar() {
  const thumbRef = useRef(null)
  const hideTimer = useRef(null)

  useEffect(() => {
    const thumb = thumbRef.current
    if (!thumb) return

    const update = () => {
      const scrolled   = window.scrollY
      const maxScroll  = document.documentElement.scrollHeight - window.innerHeight
      const viewH      = window.innerHeight

      // Thumb height = proportion of viewport to total page, min 40px
      const thumbH = Math.max(40, (viewH / (maxScroll + viewH)) * viewH)
      // Thumb top = how far scrolled as fraction of scrollable track
      const thumbTop = maxScroll > 0 ? (scrolled / maxScroll) * (viewH - thumbH) : 0

      thumb.style.height = `${thumbH}px`
      thumb.style.transform = `translateY(${thumbTop}px)`

      // Show
      thumb.style.opacity = '1'

      // Auto-hide after 1.2s idle
      clearTimeout(hideTimer.current)
      hideTimer.current = setTimeout(() => {
        thumb.style.opacity = '0'
      }, 1200)
    }

    // Initial size calculation
    update()

    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update, { passive: true })

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      clearTimeout(hideTimer.current)
    }
  }, [])

  return (
    <div className="cscroll__track" aria-hidden="true">
      <div className="cscroll__thumb" ref={thumbRef} />
    </div>
  )
}
