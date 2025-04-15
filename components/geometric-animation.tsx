"use client"

import { useEffect, useRef, useState } from "react"

export default function GeometricAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [animationStage, setAnimationStage] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

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

    // Animation parameters
    const maxRadius = Math.min(centerX, centerY) * 0.8
    const animationDuration = 800 // ms per stage

    // Clear canvas
    const clear = () => {
      ctx.clearRect(0, 0, rect.width, rect.height)
    }

    // Draw a circle
    const drawCircle = (x: number, y: number, radius: number, color: string) => {
      ctx.beginPath()
      ctx.arc(x, y, radius, 0, Math.PI * 2)
      ctx.fillStyle = color
      ctx.fill()
    }

    // Draw a circle outline
    const drawCircleOutline = (x: number, y: number, radius: number, color: string, lineWidth = 2) => {
      ctx.beginPath()
      ctx.arc(x, y, radius, 0, Math.PI * 2)
      ctx.strokeStyle = color
      ctx.lineWidth = lineWidth
      ctx.stroke()
    }

    // Calculate positions for flower of life
    const calculateFlowerOfLifePositions = (centerX: number, centerY: number, radius: number) => {
      const positions = [{ x: centerX, y: centerY }] // Center circle

      // Add 6 circles around the center
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i
        const x = centerX + radius * Math.cos(angle)
        const y = centerY + radius * Math.sin(angle)
        positions.push({ x, y })
      }

      return positions
    }

    // Draw hexagon with internal lines
    const drawHexagon = (centerX: number, centerY: number, radius: number, progress: number, hueRotation = 0) => {
      const points = []

      // Calculate hexagon points
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 6
        const x = centerX + radius * Math.cos(angle)
        const y = centerY + radius * Math.sin(angle)
        points.push({ x, y })
      }

      // Draw outer hexagon
      ctx.beginPath()
      ctx.moveTo(points[0].x, points[0].y)
      for (let i = 1; i < 6; i++) {
        ctx.lineTo(points[i].x, points[i].y)
      }
      ctx.closePath()
      ctx.strokeStyle = `hsl(${hueRotation}, 100%, 50%)`
      ctx.lineWidth = 2
      ctx.stroke()

      // Draw internal lines with progress
      if (progress > 0) {
        const centerPoint = { x: centerX, y: centerY }
        const numLines = Math.floor(progress * 12) // 12 internal lines total (6 to center, 6 across)

        for (let i = 0; i < numLines; i++) {
          const fromIndex = i % 6
          let toIndex

          if (i < 6) {
            // First 6 lines go from vertices to center
            ctx.beginPath()
            ctx.moveTo(points[fromIndex].x, points[fromIndex].y)
            ctx.lineTo(centerPoint.x, centerPoint.y)
          } else {
            // Next 6 lines go from one vertex to another, skipping one vertex
            toIndex = (fromIndex + 2) % 6
            ctx.beginPath()
            ctx.moveTo(points[fromIndex].x, points[fromIndex].y)
            ctx.lineTo(points[toIndex].x, points[toIndex].y)
          }

          const lineHue = (hueRotation + i * 30) % 360
          ctx.strokeStyle = `hsl(${lineHue}, 100%, 50%)`
          ctx.lineWidth = 2
          ctx.stroke()
        }
      }
    }

    // Animation stages
    let startTime = 0
    let animationFrameId: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / animationDuration, 1)

      clear()

      if (animationStage === 0) {
        // Stage 1: Show a point
        const pointRadius = 2
        drawCircle(centerX, centerY, pointRadius, "rgba(255, 255, 255, 0.8)")

        if (progress >= 1) {
          setAnimationStage(1)
          startTime = 0
        }
      } else if (animationStage === 1) {
        // Stage 2: Grow into a circle
        const currentRadius = maxRadius * 0.3 * progress
        drawCircle(centerX, centerY, 2, "rgba(255, 255, 255, 0.8)")
        drawCircleOutline(centerX, centerY, currentRadius, "rgba(255, 255, 255, 0.6)")

        if (progress >= 1) {
          setAnimationStage(2)
          startTime = 0
        }
      } else if (animationStage === 2) {
        // Stage 3: Multiply into 2 circles
        const radius = maxRadius * 0.3
        const distance = radius * progress

        drawCircleOutline(centerX - distance / 2, centerY, radius, "rgba(255, 255, 255, 0.6)")
        drawCircleOutline(centerX + distance / 2, centerY, radius, "rgba(255, 255, 255, 0.6)")

        if (progress >= 1) {
          setAnimationStage(3)
          startTime = 0
        }
      } else if (animationStage === 3) {
        // Stage 4: Create flower of life with 7 circles
        const radius = maxRadius * 0.3
        const positions = calculateFlowerOfLifePositions(centerX, centerY, radius)

        // Draw circles based on progress
        const circlesToDraw = Math.ceil(progress * 7)
        for (let i = 0; i < circlesToDraw; i++) {
          const pos = positions[i]
          drawCircleOutline(pos.x, pos.y, radius, "rgba(255, 255, 255, 0.6)")
        }

        if (progress >= 1) {
          setAnimationStage(4)
          startTime = 0
        }
      } else if (animationStage === 4) {
        // Stage 5: Transform into hexagon with internal lines
        const radius = maxRadius * 0.8

        // Fade out circles
        const fadeOutProgress = Math.min(progress * 2, 1)
        if (fadeOutProgress < 1) {
          const positions = calculateFlowerOfLifePositions(centerX, centerY, maxRadius * 0.3)
          const opacity = 0.6 * (1 - fadeOutProgress)

          for (let i = 0; i < 7; i++) {
            const pos = positions[i]
            drawCircleOutline(pos.x, pos.y, maxRadius * 0.3, `rgba(255, 255, 255, ${opacity})`)
          }
        }

        // Fade in hexagon
        const hexagonProgress = Math.max(0, (progress - 0.5) * 2)
        if (hexagonProgress > 0) {
          drawHexagon(centerX, centerY, radius, hexagonProgress, 0)
        }

        if (progress >= 1) {
          setAnimationStage(5)
          startTime = 0
        }
      } else if (animationStage === 5) {
        // Stage 6: Color spectrum animation
        const hueRotation = (timestamp / 50) % 360
        drawHexagon(centerX, centerY, maxRadius * 0.8, 1, hueRotation)

        if (!isComplete && progress >= 1) {
          setIsComplete(true)
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [animationStage, isComplete])

  return (
    <div className="w-full h-full flex items-center justify-center">
      <canvas ref={canvasRef} className="w-full h-full" style={{ maxWidth: "400px", maxHeight: "400px" }} />
    </div>
  )
}
