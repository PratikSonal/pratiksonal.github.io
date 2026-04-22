import { useEffect, useState } from 'react'

const SECTION_IDS = ['home', 'about', 'experience', 'projects', 'resume', 'contact']

/**
 * useActiveSection — watches all 6 section ids via IntersectionObserver
 * and returns whichever is most in view.
 */
export function useActiveSection() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const observers = []

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { threshold: 0.35 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return active
}
