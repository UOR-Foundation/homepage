"use client"

import { useRef, useEffect } from "react"

export function DataWaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const frameIdRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Create particles array first, before any functions that use it
    const particlesArray: Particle[] = []
    const numberOfParticles = 200
    const colors = ["rgba(173, 216, 230, 0.7)", "rgba(135, 206, 235, 0.7)", "rgba(30, 144, 255, 0.7)"]

    class Particle {
      x: number
      y: number
      originalX: number
      originalY: number
      size: number
      color: string
      speed: number
      angle: number
      oscillationRadius: number
      oscillationSpeed: number
      timeOffset: number

      constructor() {
        this.originalX = Math.random() * canvas.width
        this.originalY = Math.random() * canvas.height
        this.x = this.originalX
        this.y = this.originalY
        this.size = Math.random() * 5 + 1
        this.color = colors[Math.floor(Math.random() * colors.length)]

        // Slightly faster movement parameters
        this.speed = Math.random() * 0.08 + 0.04
        this.angle = Math.random() * Math.PI * 2
        this.oscillationRadius = Math.random() * 2 + 1
        this.oscillationSpeed = Math.random() * 0.001 + 0.0005 // Increased speed
        this.timeOffset = Math.random() * 1000
      }

      update(time: number) {
        // Subtle oscillation around original position
        this.x = this.originalX + Math.sin((time + this.timeOffset) * this.oscillationSpeed) * this.oscillationRadius
        this.y = this.originalY + Math.cos((time + this.timeOffset) * this.oscillationSpeed) * this.oscillationRadius
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    function init() {
      particlesArray.length = 0
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle())
      }
    }

    function connect() {
      let opacityValue = 1
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x
          const dy = particlesArray[a].y - particlesArray[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            opacityValue = 1 - distance / 100
            ctx.strokeStyle = `rgba(140, 180, 255, ${opacityValue * 0.5})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
            ctx.stroke()
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw a gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "rgba(25, 25, 112, 0.7)") // Midnight blue
      gradient.addColorStop(0.5, "rgba(72, 61, 139, 0.7)") // Dark slate blue
      gradient.addColorStop(1, "rgba(25, 25, 112, 0.7)") // Midnight blue

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const time = Date.now()

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update(time)
        particlesArray[i].draw()
      }
      connect()

      frameIdRef.current = requestAnimationFrame(animate)
    }

    // Set canvas dimensions
    const updateCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      // Re-initialize particles when dimensions change
      init()
    }

    // Initialize first, then update dimensions
    init()
    updateCanvasDimensions()
    animate()

    window.addEventListener("resize", updateCanvasDimensions)

    return () => {
      window.removeEventListener("resize", updateCanvasDimensions)
      cancelAnimationFrame(frameIdRef.current)
    }
  }, [])

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
      <canvas ref={canvasRef} className="absolute inset-0 opacity-70"></canvas>
      <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/70 to-transparent"></div>
    </div>
  )
}
