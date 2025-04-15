"use client"

import { useEffect, useRef, useState } from "react"

export default function AdvancedGeometricAnimation() {
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

    // Draw complex geometric pattern
    const drawGeometricPattern = (
      centerX: number,
      centerY: number,
      radius: number,
      progress: number,
      hueRotation = 0,
    ) => {
      // Calculate hexagon points (outer)
      const points = []
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 6
        const x = centerX + radius * Math.cos(angle)
        const y = centerY + radius * Math.sin(angle)
        points.push({ x, y })
      }

      // Calculate inner hexagon points (at 1/3 distance from center)
      const innerPoints = []
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 6
        const x = centerX + radius * 0.33 * Math.cos(angle)
        const y = centerY + radius * 0.33 * Math.sin(angle)
        innerPoints.push({ x, y })
      }

      // Calculate middle hexagon points (at 2/3 distance from center)
      const midPoints = []
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 6
        const x = centerX + radius * 0.66 * Math.cos(angle)
        const y = centerY + radius * 0.66 * Math.sin(angle)
        midPoints.push({ x, y })
      }

      // Calculate additional points for complexity
      const extraPoints = []
      for (let i = 0; i < 12; i++) {
        const angle = (Math.PI / 6) * i
        const x = centerX + radius * 0.5 * Math.cos(angle)
        const y = centerY + radius * 0.5 * Math.sin(angle)
        extraPoints.push({ x, y })
      }

      // Number of lines to draw based on progress
      const totalLines = 60 // Increased for more complexity
      const linesToDraw = Math.floor(progress * totalLines)

      // Draw internal lines
      let lineIndex = 0

      // Draw outer hexagon
      if (lineIndex < linesToDraw) {
        ctx.beginPath()
        ctx.moveTo(points[0].x, points[0].y)
        for (let i = 1; i < 6; i++) {
          ctx.lineTo(points[i].x, points[i].y)
        }
        ctx.closePath()
        const hexHue = hueRotation % 360
        ctx.strokeStyle = `hsl(${hexHue}, 100%, 60%)`
        ctx.lineWidth = 2
        ctx.stroke()
        lineIndex++

        // Add glow effect to outer hexagon
        ctx.beginPath()
        ctx.moveTo(points[0].x, points[0].y)
        for (let i = 1; i < 6; i++) {
          ctx.lineTo(points[i].x, points[i].y)
        }
        ctx.closePath()
        ctx.strokeStyle = `hsla(${hexHue}, 100%, 70%, 0.5)`
        ctx.lineWidth = 4
        ctx.stroke()
      }

      // Draw lines from vertices to center
      if (lineIndex < linesToDraw) {
        for (let i = 0; i < 6 && lineIndex < linesToDraw; i++, lineIndex++) {
          ctx.beginPath()
          ctx.moveTo(points[i].x, points[i].y)
          ctx.lineTo(centerX, centerY)
          const lineHue = (hueRotation + i * 60) % 360
          ctx.strokeStyle = `hsl(${lineHue}, 100%, 60%)`
          ctx.lineWidth = 1.5
          ctx.stroke()
        }
      }

      // Draw inner hexagon
      if (lineIndex < linesToDraw) {
        ctx.beginPath()
        ctx.moveTo(innerPoints[0].x, innerPoints[0].y)
        for (let i = 1; i < 6; i++) {
          ctx.lineTo(innerPoints[i].x, innerPoints[i].y)
        }
        ctx.closePath()
        const innerHexHue = (hueRotation + 120) % 360
        ctx.strokeStyle = `hsl(${innerHexHue}, 100%, 60%)`
        ctx.lineWidth = 1.5
        ctx.stroke()
        lineIndex++
      }

      // Draw middle hexagon
      if (lineIndex < linesToDraw) {
        ctx.beginPath()
        ctx.moveTo(midPoints[0].x, midPoints[0].y)
        for (let i = 1; i < 6; i++) {
          ctx.lineTo(midPoints[i].x, midPoints[i].y)
        }
        ctx.closePath()
        const midHexHue = (hueRotation + 180) % 360
        ctx.strokeStyle = `hsl(${midHexHue}, 100%, 60%)`
        ctx.lineWidth = 1.5
        ctx.stroke()
        lineIndex++
      }

      // Draw lines connecting opposite vertices
      if (lineIndex < linesToDraw) {
        for (let i = 0; i < 3 && lineIndex < linesToDraw; i++, lineIndex++) {
          ctx.beginPath()
          ctx.moveTo(points[i].x, points[i].y)
          ctx.lineTo(points[i + 3].x, points[i + 3].y)
          const lineHue = (hueRotation + 210 + i * 40) % 360
          ctx.strokeStyle = `hsl(${lineHue}, 100%, 60%)`
          ctx.lineWidth = 1.5
          ctx.stroke()
        }
      }

      // Draw lines from inner points to outer points (skipping one)
      if (lineIndex < linesToDraw) {
        for (let i = 0; i < 6 && lineIndex < linesToDraw; i++, lineIndex++) {
          const nextI = (i + 2) % 6
          ctx.beginPath()
          ctx.moveTo(innerPoints[i].x, innerPoints[i].y)
          ctx.lineTo(points[nextI].x, points[nextI].y)
          const lineHue = (hueRotation + 240 + i * 30) % 360
          ctx.strokeStyle = `hsl(${lineHue}, 100%, 60%)`
          ctx.lineWidth = 1.5
          ctx.stroke()
        }
      }

      // Draw lines from middle points to outer points (skipping two)
      if (lineIndex < linesToDraw) {
        for (let i = 0; i < 6 && lineIndex < linesToDraw; i++, lineIndex++) {
          const nextI = (i + 3) % 6
          ctx.beginPath()
          ctx.moveTo(midPoints[i].x, midPoints[i].y)
          ctx.lineTo(points[nextI].x, points[nextI].y)
          const lineHue = (hueRotation + 270 + i * 30) % 360
          ctx.strokeStyle = `hsl(${lineHue}, 100%, 60%)`
          ctx.lineWidth = 1.5
          ctx.stroke()
        }
      }

      // Draw star pattern connecting extra points
      if (lineIndex < linesToDraw) {
        for (let i = 0; i < 12 && lineIndex < linesToDraw; i++, lineIndex++) {
          const nextI = (i + 5) % 12
          ctx.beginPath()
          ctx.moveTo(extraPoints[i].x, extraPoints[i].y)
          ctx.lineTo(extraPoints[nextI].x, extraPoints[nextI].y)
          const lineHue = (hueRotation + 300 + i * 15) % 360
          ctx.strokeStyle = `hsl(${lineHue}, 100%, 60%)`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      }

      // Draw additional triangles for complexity
      if (lineIndex < linesToDraw) {
        for (let i = 0; i < 6 && lineIndex < linesToDraw; i++, lineIndex++) {
          const nextInner = (i + 1) % 6
          ctx.beginPath()
          ctx.moveTo(innerPoints[i].x, innerPoints[i].y)
          ctx.lineTo(midPoints[i].x, midPoints[i].y)
          ctx.lineTo(midPoints[nextInner].x, midPoints[nextInner].y)
          ctx.closePath()
          const triangleHue = (hueRotation + 330 + i * 20) % 360
          ctx.strokeStyle = `hsl(${triangleHue}, 100%, 60%)`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      }

      // Draw connecting lines between all three hexagons
      if (lineIndex < linesToDraw) {
        for (let i = 0; i < 6 && lineIndex < linesToDraw; i++, lineIndex++) {
          ctx.beginPath()
          ctx.moveTo(innerPoints[i].x, innerPoints[i].y)
          ctx.lineTo(midPoints[i].x, midPoints[i].y)
          ctx.lineTo(points[i].x, points[i].y)
          const lineHue = (hueRotation + 30 + i * 25) % 360
          ctx.strokeStyle = `hsl(${lineHue}, 100%, 60%)`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      }

      // Add small circles at intersection points for detail
      if (lineIndex < linesToDraw && progress > 0.9) {
        // At vertices of inner hexagon
        for (let i = 0; i < 6; i++) {
          drawCircle(innerPoints[i].x, innerPoints[i].y, 2, `hsl(${(hueRotation + i * 60) % 360}, 100%, 70%)`)
        }

        // At center
        drawCircle(centerX, centerY, 3, `hsl(${hueRotation % 360}, 100%, 70%)`)

        // At vertices of outer hexagon
        for (let i = 0; i < 6; i++) {
          drawCircle(points[i].x, points[i].y, 2, `hsl(${(hueRotation + 180 + i * 60) % 360}, 100%, 70%)`)
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
        // Stage 5: Transform into geometric pattern
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

        // Fade in geometric pattern
        const patternProgress = Math.max(0, (progress - 0.5) * 2)
        if (patternProgress > 0) {
          drawGeometricPattern(centerX, centerY, radius, patternProgress, 0)
        }

        if (progress >= 1) {
          setAnimationStage(5)
          startTime = 0
        }
      } else if (animationStage === 5) {
        // Stage 6: Color spectrum animation
        const hueRotation = (timestamp / 50) % 360
        drawGeometricPattern(centerX, centerY, maxRadius * 0.8, 1, hueRotation)

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
