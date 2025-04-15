"use client"

import { useEffect, useRef, useState } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  color: string
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isReducedMotion, setIsReducedMotion] = useState(false)

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setIsReducedMotion(mediaQuery.matches)

    const handleChange = () => setIsReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const dpr = window.devicePixelRatio || 1
    const updateCanvasSize = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
    }

    updateCanvasSize()

    // Throttled resize handler
    let resizeTimeout: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(updateCanvasSize, 200)
    }

    window.addEventListener("resize", handleResize)

    // Particle settings - reduce count for mobile and reduced motion
    // Determine if we're on mobile for performance optimization
    const isMobile = window.innerWidth < 768
    const particleCount = isReducedMotion ? 30 : isMobile ? 30 : 80
    const particles: Particle[] = []

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() * canvas.width) / dpr,
        y: (Math.random() * canvas.height) / dpr,
        size: Math.random() * (isMobile ? 1.5 : 2) + 0.5,
        speedX: (Math.random() - 0.5) * (isMobile ? 0.3 : 0.3),
        speedY: (Math.random() - 0.5) * (isMobile ? 0.3 : 0.3),
        opacity: Math.random() * 0.5 + 0.2,
        color: getRandomColor(),
      })
    }

    function getRandomColor() {
      const colors = [
        "hsl(221, 83%, 53%)", // blue
        "hsl(265, 100%, 66%)", // purple
        "hsl(330, 100%, 71%)", // pink
      ]
      return colors[Math.floor(Math.random() * colors.length)]
    }

    // Animation loop with RAF optimization
    let animationFrameId: number
    let lastTime = 0
    const fps = isReducedMotion ? 30 : 60
    const interval = 1000 / fps

    const animate = (timestamp: number) => {
      const deltaTime = timestamp - lastTime

      if (deltaTime >= interval) {
        lastTime = timestamp - (deltaTime % interval)

        // Clear with a more efficient method
        ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr)

        // Cache viewport dimensions to avoid recalculating in the loop
        const canvasWidth = canvas.width / dpr
        const canvasHeight = canvas.height / dpr

        // Use batch rendering approach for better performance
        ctx.save()

        // Draw connections first (if not reduced motion)
        if (!isReducedMotion) {
          drawOptimizedConnections(particles, ctx, canvasWidth, canvasHeight)
        }

        // Then draw all particles in a single pass
        particles.forEach((particle) => {
          // Update position
          particle.x += particle.speedX
          particle.y += particle.speedY

          // Wrap around edges with simplified boundary checks
          if (particle.x < 0) particle.x = canvasWidth
          else if (particle.x > canvasWidth) particle.x = 0
          if (particle.y < 0) particle.y = canvasHeight
          else if (particle.y > canvasHeight) particle.y = 0

          // Draw particle
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fillStyle = particle.color.replace(")", `, ${particle.opacity})`)
          ctx.fill()
        })

        ctx.restore()
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    // Optimized connection drawing function
    function drawOptimizedConnections(
      particles: Particle[],
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
    ) {
      const maxDistance = isMobile ? 70 : 100
      const maxDistanceSquared = maxDistance * maxDistance // Avoid square root calculation

      // Use spatial partitioning for more efficient neighbor finding
      const gridSize = maxDistance
      const grid: Record<string, Particle[]> = {}

      // Place particles in grid cells
      particles.forEach((particle) => {
        const cellX = Math.floor(particle.x / gridSize)
        const cellY = Math.floor(particle.y / gridSize)
        const cellKey = `${cellX},${cellY}`

        if (!grid[cellKey]) {
          grid[cellKey] = []
        }
        grid[cellKey].push(particle)
      })

      // Check only neighboring cells for connections
      particles.forEach((particle) => {
        const cellX = Math.floor(particle.x / gridSize)
        const cellY = Math.floor(particle.y / gridSize)

        // Check 9 neighboring cells (including current cell)
        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            const neighborCellKey = `${cellX + i},${cellY + j}`
            const neighborParticles = grid[neighborCellKey] || []

            neighborParticles.forEach((neighbor) => {
              // Avoid checking the same pair twice
              if (neighbor === particle) return

              const dx = particle.x - neighbor.x
              const dy = particle.y - neighbor.y
              const distanceSquared = dx * dx + dy * dy

              if (distanceSquared < maxDistanceSquared) {
                const distance = Math.sqrt(distanceSquared)
                const opacity = 1 - distance / maxDistance
                ctx.beginPath()
                ctx.moveTo(particle.x, particle.y)
                ctx.lineTo(neighbor.x, neighbor.y)
                ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.15})`
                ctx.lineWidth = 0.5
                ctx.stroke()
              }
            })
          }
        }
      })
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", handleResize)
      clearTimeout(resizeTimeout)
    }
  }, [isReducedMotion])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" aria-hidden="true" />
}
