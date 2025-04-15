"use client"

import { useEffect, useRef } from "react"

export default function GeometricPattern() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions with device pixel ratio for sharp rendering
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    // Center coordinates
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Size of the hexagon
    const size = Math.min(centerX, centerY) * 0.9

    // Clear canvas
    ctx.clearRect(0, 0, rect.width, rect.height)

    // Set line style
    ctx.strokeStyle = "white"
    ctx.lineWidth = 2

    // Draw outer hexagon
    drawHexagon(ctx, centerX, centerY, size)

    // Draw inner hexagon
    drawHexagon(ctx, centerX, centerY, size * 0.6)

    // Draw vertical line
    ctx.beginPath()
    ctx.moveTo(centerX, centerY - size)
    ctx.lineTo(centerX, centerY + size)
    ctx.stroke()

    // Draw horizontal line
    ctx.beginPath()
    ctx.moveTo(centerX - size, centerY)
    ctx.lineTo(centerX + size, centerY)
    ctx.stroke()

    // Draw diagonal lines
    const angles = [30, 90, 150, 210, 270, 330]
    for (let i = 0; i < angles.length; i++) {
      const angle1 = (angles[i] * Math.PI) / 180
      const angle2 = (angles[(i + 3) % 6] * Math.PI) / 180

      ctx.beginPath()
      ctx.moveTo(centerX + size * Math.cos(angle1), centerY + size * Math.sin(angle1))
      ctx.lineTo(centerX + size * Math.cos(angle2), centerY + size * Math.sin(angle2))
      ctx.stroke()
    }

    // Draw star pattern
    for (let i = 0; i < angles.length; i++) {
      const angle = (angles[i] * Math.PI) / 180

      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.lineTo(centerX + size * Math.cos(angle), centerY + size * Math.sin(angle))
      ctx.stroke()
    }
  }, [])

  // Helper function to draw a hexagon
  function drawHexagon(ctx: CanvasRenderingContext2D, centerX: number, centerY: number, size: number) {
    ctx.beginPath()
    for (let i = 0; i < 6; i++) {
      const angle = (i * 60 * Math.PI) / 180
      const x = centerX + size * Math.cos(angle)
      const y = centerY + size * Math.sin(angle)

      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    }
    ctx.closePath()
    ctx.stroke()
  }

  return <canvas ref={canvasRef} className="w-full h-full" style={{ maxWidth: "350px", maxHeight: "350px" }} />
}
