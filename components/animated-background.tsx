"use client"

import { useEffect, useRef } from "react"

export default function AnimatedBackground() {
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

    // Animation variables
    let animationFrameId: number
    let time = 0

    // Create gradient
    const createGradient = () => {
      const gradient = ctx.createLinearGradient(0, 0, rect.width, rect.height)
      gradient.addColorStop(0, "rgba(6, 102, 235, 0.8)") // Blue
      gradient.addColorStop(0.5, "rgba(140, 82, 255, 0.8)") // Purple
      gradient.addColorStop(1, "rgba(255, 92, 170, 0.8)") // Pink
      return gradient
    }

    // Animation loop
    const animate = () => {
      // Clear canvas with gradient background
      ctx.fillStyle = createGradient()
      ctx.fillRect(0, 0, rect.width, rect.height)

      // Draw multiple signal waves
      drawWaves(ctx, rect.width, rect.height, time)

      // Update time
      time += 0.01

      // Continue animation
      animationFrameId = requestAnimationFrame(animate)
    }

    // Function to draw waves
    const drawWaves = (ctx: CanvasRenderingContext2D, width: number, height: number, time: number) => {
      // Define wave parameters
      const waveConfigs = [
        {
          yPos: height * 0.2,
          amplitude: 20,
          frequency: 0.02,
          speed: 0.5,
          color: "rgba(255, 255, 255, 0.1)",
        },
        {
          yPos: height * 0.4,
          amplitude: 25,
          frequency: 0.015,
          speed: 0.3,
          color: "rgba(255, 255, 255, 0.08)",
        },
        {
          yPos: height * 0.6,
          amplitude: 30,
          frequency: 0.01,
          speed: 0.2,
          color: "rgba(255, 255, 255, 0.06)",
        },
        {
          yPos: height * 0.8,
          amplitude: 35,
          frequency: 0.008,
          speed: 0.15,
          color: "rgba(255, 255, 255, 0.04)",
        },
      ]

      // Draw each wave
      waveConfigs.forEach((config) => {
        drawWave(ctx, width, config.yPos, config.amplitude, config.frequency, time * config.speed, config.color)
      })
    }

    // Function to draw a single wave
    const drawWave = (
      ctx: CanvasRenderingContext2D,
      width: number,
      yPos: number,
      amplitude: number,
      frequency: number,
      phase: number,
      color: string,
    ) => {
      ctx.beginPath()
      ctx.lineWidth = 2
      ctx.strokeStyle = color

      // Draw the wave
      for (let x = 0; x <= width; x++) {
        const y = yPos + amplitude * Math.sin(x * frequency + phase)

        if (x === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }

      ctx.stroke()
    }

    // Start animation
    animate()

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" aria-hidden="true" />
}
