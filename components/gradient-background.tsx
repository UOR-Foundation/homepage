"use client"

import { useRef, useEffect, useState } from "react"
import useIntersectionObserver from "@/hooks/use-intersection-observer"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

interface GradientBackgroundProps {
  className?: string
  colors?: string[]
  speed?: number
  blur?: number
}

export default function GradientBackground({
  className = "",
  colors = ["#0066ff", "#8000ff", "#ff0080"],
  speed = 0.002,
  blur = 100,
}: GradientBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isVisible, containerRef] = useIntersectionObserver({ threshold: 0 })
  const [isInitialized, setIsInitialized] = useState(false)
  const blobsRef = useRef<any[]>([])
  const animationRef = useRef<number>()
  const animationFrameId = useRef<number>(0)
  const isReducedMotion = useReducedMotion()

  // Initialize blobs only once
  useEffect(() => {
    if (!isInitialized && isVisible) {
      const canvas = canvasRef.current
      if (!canvas) return

      // Determine if we're on mobile for performance optimization
      const isMobileCheck = typeof window !== "undefined" && window.innerWidth < 768

      // Create gradient blobs
      class GradientBlob {
        x: number
        y: number
        radius: number
        color: string
        vx: number
        vy: number

        constructor(color: string, canvasWidth: number, canvasHeight: number, isMobile = false) {
          this.x = Math.random() * canvasWidth
          this.y = Math.random() * canvasHeight
          this.radius = Math.random() * (isMobile ? 150 : 200) + (isMobile ? 80 : 100)
          this.color = color
          this.vx = (Math.random() - 0.5) * speed * (isMobile ? 50 : 100)
          this.vy = (Math.random() - 0.5) * speed * (isMobile ? 50 : 100)
        }

        update(canvasWidth: number, canvasHeight: number) {
          this.x += this.vx
          this.y += this.vy

          // Bounce off edges
          if (this.x < -this.radius) this.x = canvasWidth + this.radius
          if (this.x > canvasWidth + this.radius) this.x = -this.radius
          if (this.y < -this.radius) this.y = canvasHeight + this.radius
          if (this.y > canvasHeight + this.radius) this.y = -this.radius
        }
      }

      // Create blobs for each color - fewer on mobile
      const isMobileCheckInner = typeof window !== "undefined" && window.innerWidth < 768
      blobsRef.current = colors.map((color) => new GradientBlob(color, canvas.width, canvas.height, isMobileCheckInner))
      setIsInitialized(true)
    }
  }, [colors, speed, isInitialized, isVisible])

  // Handle animation and rendering
  useEffect(() => {
    if (!isVisible || !isInitialized) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
    }

    resizeCanvas()

    // Use ResizeObserver instead of window resize event for better performance
    const resizeObserver = new ResizeObserver(
      debounce(() => {
        resizeCanvas()
      }, 200),
    )

    resizeObserver.observe(canvas)

    // Debounce function
    function debounce(func: Function, wait: number) {
      let timeout: NodeJS.Timeout
      return function (...args: any[]) {
        clearTimeout(timeout)
        timeout = setTimeout(() => func.apply(this, args), wait)
      }
    }

    // Animation loop with throttling and RAF optimization
    let lastFrameTime = 0
    const targetFPS = isReducedMotion ? 20 : 30 // Lower FPS for reduced motion
    const frameInterval = 1000 / targetFPS

    const animate = (timestamp: number) => {
      if (!isVisible) return

      const elapsed = timestamp - lastFrameTime

      if (elapsed > frameInterval) {
        lastFrameTime = timestamp - (elapsed % frameInterval)

        // Clear canvas with slight fade for trail effect
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Update and draw blobs
        blobsRef.current.forEach((blob) => {
          blob.update(canvas.width, canvas.height)
          drawBlob(blob, ctx)
        })

        // Reduce blur on mobile for better performance
        const isMobileCheckAnimate = typeof window !== "undefined" && window.innerWidth < 768
        const actualBlur = isMobileCheckAnimate ? Math.min(blur, 30) : blur

        // Apply blur filter - only when needed and not on low-end devices
        if (actualBlur > 0 && !isMobileCheckAnimate) {
          ctx.filter = `blur(${actualBlur}px)`
          ctx.drawImage(canvas, 0, 0)
          ctx.filter = "none"
        }
      }

      animationFrameId.current = requestAnimationFrame(animate)
    }

    function drawBlob(blob: any, ctx: CanvasRenderingContext2D) {
      ctx.beginPath()
      ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2)
      ctx.fillStyle = blob.color
      ctx.fill()
    }

    animationFrameId.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
      resizeObserver.disconnect()
    }
  }, [colors, speed, blur, isVisible, isInitialized, isReducedMotion])

  return (
    <div ref={containerRef} className={`absolute inset-0 w-full h-full -z-10 ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full" aria-hidden="true" />
    </div>
  )
}
