"use client"

import { useEffect, useRef } from "react"

export default function FallbackGalaxy({ className = "" }: { className?: string }) {
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

    // Create stars
    const stars: Star[] = []
    const starCount = 200

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.05 + 0.01,
        brightness: Math.random() * 0.5 + 0.5,
        color: getRandomColor(),
      })
    }

    function getRandomColor() {
      const colors = [
        "rgba(255, 255, 255, 0.8)",
        "rgba(173, 216, 230, 0.8)",
        "rgba(135, 206, 250, 0.8)",
        "rgba(240, 248, 255, 0.8)",
        "rgba(176, 224, 230, 0.8)",
      ]
      return colors[Math.floor(Math.random() * colors.length)]
    }

    // Animation loop
    let animationFrameId: number

    const animate = () => {
      ctx.clearRect(0, 0, rect.width, rect.height)

      // Draw and update stars
      stars.forEach((star) => {
        // Draw star
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = star.color
        ctx.globalAlpha = star.brightness
        ctx.fill()

        // Update position
        star.x += star.speed

        // Reset position if star goes off screen
        if (star.x > rect.width) {
          star.x = 0
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className={`w-full h-full ${className}`} />
}

interface Star {
  x: number
  y: number
  size: number
  speed: number
  brightness: number
  color: string
}
