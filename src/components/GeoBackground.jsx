import React, { useEffect, useRef } from 'react'

export default function GeoBackground({ color = 'rgba(255,255,255,0.055)' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()

    const shapes = Array.from({ length: 7 }, (_, i) => ({
      cx:      (i % 3) * (canvas.width / 2.2) + canvas.width * 0.1,
      cy:      Math.random() * canvas.height,
      r:       130 + Math.random() * 200,
      sides:   5 + Math.floor(Math.random() * 4),
      rot:     Math.random() * Math.PI * 2,
      driftAmp: 10 + Math.random() * 16,
      driftSpd: 0.00018 + Math.random() * 0.00022,
      rotSpd:  0.00008 + Math.random() * 0.00012,
      phase:   Math.random() * Math.PI * 2,
    }))

    let raf, t = 0

    const drawPoly = (cx, cy, r, sides, rot) => {
      ctx.beginPath()
      for (let i = 0; i <= sides; i++) {
        const a = (i / sides) * Math.PI * 2 + rot
        i === 0
          ? ctx.moveTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r)
          : ctx.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r)
      }
      ctx.closePath()
      ctx.strokeStyle = color
      ctx.lineWidth = 1
      ctx.stroke()
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      t++
      shapes.forEach((s) => {
        const drift = Math.sin(t * s.driftSpd + s.phase) * s.driftAmp
        drawPoly(s.cx + drift, s.cy, s.r, s.sides, s.rot + t * s.rotSpd)
      })
      raf = requestAnimationFrame(render)
    }
    render()

    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [color])

  return (
    <canvas
      ref={canvasRef}
      style={{ position:'absolute', inset:0, width:'100%', height:'100%', pointerEvents:'none', zIndex:0 }}
    />
  )
}
