"use client"

import { useRef, useEffect, useState, memo } from "react"
import { useDeviceDetection } from "@/hooks/use-device-detection"

const OptimizedDataWave = memo(function OptimizedDataWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const frameIdRef = useRef<number>(0)
  const { isMobile, isLowPowerDevice } = useDeviceDetection()
  const [isVisible, setIsVisible] = useState(false)
  const [expandedHeight, setExpandedHeight] = useState("200vh")

  // Monitor waitlist widget height changes
  useEffect(() => {
    const checkWaitlistHeight = () => {
      const waitlistContainer = document.getElementById("getWaitlistContainer")
      if (waitlistContainer) {
        const heroSection = document.querySelector("section:first-of-type")
        if (heroSection) {
          const heroHeight = heroSection.getBoundingClientRect().height
          const waitlistHeight = waitlistContainer.getBoundingClientRect().height

          // Check if the widget is in expanded state (after submission)
          const isExpanded =
            waitlistContainer.querySelector(".getwaitlist_success_container") !== null ||
            waitlistContainer.querySelector(".getwaitlist_success_message") !== null ||
            waitlistContainer.querySelectorAll(".getwaitlist_widget_position").length > 0

          // Set a much larger minimum height for expanded state on mobile
          const minHeight = isExpanded
            ? isMobile
              ? window.innerHeight * 2.5
              : window.innerHeight * 2
            : window.innerHeight * 1.2

          const totalRequiredHeight = heroHeight + waitlistHeight + 300 // Add extra padding

          // Use the larger of the calculated values
          if (totalRequiredHeight > minHeight) {
            setExpandedHeight(`${totalRequiredHeight}px`)
          } else {
            setExpandedHeight(`${minHeight}px`)
          }
        }
      }
    }

    // Check initially and set up observers
    checkWaitlistHeight()

    // Set up mutation observer to detect changes in the waitlist container
    const waitlistContainer = document.getElementById("getWaitlistContainer")
    if (waitlistContainer) {
      const observer = new MutationObserver(checkWaitlistHeight)
      observer.observe(waitlistContainer, {
        childList: true,
        subtree: true,
        attributes: true,
        characterData: true,
      })

      // Also check periodically
      const interval = setInterval(checkWaitlistHeight, 1000)

      // Listen for custom event from waitlist widget
      window.addEventListener("waitlistHeightChanged", checkWaitlistHeight)

      return () => {
        observer.disconnect()
        clearInterval(interval)
        window.removeEventListener("waitlistHeightChanged", checkWaitlistHeight)
      }
    }
  }, [isMobile])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          } else {
            setIsVisible(false)
          }
        })
      },
      { threshold: 0.1 },
    )

    const currentRef = canvasRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !isVisible) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Create particles array first, before any functions that use it
    const particlesArray: Particle[] = []
    // Reduce particle count on mobile/low-power devices
    const numberOfParticles = isLowPowerDevice ? 80 : isMobile ? 150 : 300
    const colors = ["rgba(173, 216, 230, 0.7)", "rgba(135, 206, 235, 0.7)", "rgba(30, 144, 255, 0.7)"]

    // Update the Particle class to include properties for new connections
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
      connections: number[] // Add this property to track connections
      newConnectionTime: number // Add this property to track when new connections form

      constructor() {
        this.originalX = Math.random() * canvas.width
        this.originalY = Math.random() * canvas.height
        this.x = this.originalX
        this.y = this.originalY
        this.size = Math.random() * (isMobile ? 3 : 5) + 1
        this.color = colors[Math.floor(Math.random() * colors.length)]

        // Adjust speed for different devices - increase speed slightly
        this.speed = Math.random() * 0.1 + 0.05 // Increased from 0.08 + 0.04
        this.angle = Math.random() * Math.PI * 2
        this.oscillationRadius = Math.random() * 2.5 + 1.2 // Increased from 2 + 1
        this.oscillationSpeed = Math.random() * 0.0015 + 0.0008 // Increased from 0.001 + 0.0005
        this.timeOffset = Math.random() * 1000
        this.connections = [] // Initialize empty connections array
        this.newConnectionTime = 0 // Initialize with no new connections
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

    // Replace the connect function with this enhanced version
    function connect(currentTime: number) {
      // Increase connection distance for more visible connections
      const connectionDistance = isLowPowerDevice ? 70 : isMobile ? 100 : 120

      // Every few seconds, create new connections
      if (currentTime % 3000 < 20) {
        // Create new connections roughly every 3 seconds
        // Clear some old connections to make room for new ones
        particlesArray.forEach((particle) => {
          if (Math.random() > 0.7) {
            // 30% chance to clear connections for each particle
            particle.connections = []
          }
        })

        // Create new random connections
        for (let i = 0; i < (isLowPowerDevice ? 5 : 15); i++) {
          const particleA = Math.floor(Math.random() * particlesArray.length)
          const particleB = Math.floor(Math.random() * particlesArray.length)

          if (particleA !== particleB) {
            // Add connection if it doesn't already exist
            if (!particlesArray[particleA].connections.includes(particleB)) {
              particlesArray[particleA].connections.push(particleB)
              particlesArray[particleA].newConnectionTime = currentTime
            }
          }
        }
      }

      // Draw standard proximity-based connections
      let opacityValue = 1
      for (let a = 0; a < particlesArray.length; a++) {
        // Optimize by only checking a subset of particles on low-power devices
        const step = isLowPowerDevice ? 2 : 1
        for (let b = a; b < particlesArray.length; b += step) {
          const dx = particlesArray[a].x - particlesArray[b].x
          const dy = particlesArray[a].y - particlesArray[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            opacityValue = 1 - distance / connectionDistance
            ctx.strokeStyle = `rgba(140, 180, 255, ${opacityValue * 0.5})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
            ctx.stroke()
          }
        }

        // Draw explicit connections with animation effect
        particlesArray[a].connections.forEach((b) => {
          // Calculate connection age (how long it's been since it was created)
          const connectionAge = currentTime - particlesArray[a].newConnectionTime
          const isNewConnection = connectionAge < 2000 // Consider connections "new" for 2 seconds

          // Draw the connection line
          ctx.beginPath()
          ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
          ctx.lineTo(particlesArray[b].x, particlesArray[b].y)

          if (isNewConnection) {
            // Animate new connections with a pulse effect
            const pulseIntensity = Math.sin(connectionAge * 0.01) * 0.5 + 0.5
            ctx.strokeStyle = `rgba(94, 92, 255, ${0.7 * pulseIntensity})`
            ctx.lineWidth = 1.5

            // Draw glow effect for new connections
            ctx.shadowColor = "rgba(94, 92, 255, 0.5)"
            ctx.shadowBlur = 5 * pulseIntensity
          } else {
            // Regular connection style
            ctx.strokeStyle = "rgba(140, 180, 255, 0.4)"
            ctx.lineWidth = 1
            ctx.shadowBlur = 0
          }

          ctx.stroke()

          // Reset shadow for other drawings
          ctx.shadowBlur = 0
        })
      }
    }

    // Throttle frame rate for performance
    let lastTime = 0
    const interval = 1000 / 60 // Aim for 60fps

    // Update the animate function to pass the current time to connect()
    function animate(timestamp: number) {
      if (!isVisible) {
        cancelAnimationFrame(frameIdRef.current)
        return
      }

      // Throttle frame rate for performance
      if (timestamp - lastTime < interval) {
        frameIdRef.current = requestAnimationFrame(animate)
        return
      }

      lastTime = timestamp

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

      // Skip connections on low-power devices to improve performance
      if (!isLowPowerDevice) {
        connect(time)
      }

      frameIdRef.current = requestAnimationFrame(animate)
    }

    // Set canvas dimensions
    const updateCanvasDimensions = () => {
      const dpr = isLowPowerDevice ? 1 : window.devicePixelRatio || 1
      const displayWidth = window.innerWidth
      const displayHeight = window.innerHeight

      canvas.width = displayWidth * dpr
      canvas.height = displayHeight * dpr

      canvas.style.width = `${displayWidth}px`
      canvas.style.height = `${displayHeight}px`

      ctx.scale(dpr, dpr)

      // Re-initialize particles when dimensions change
      init()
    }

    // Initialize first, then update dimensions
    init()
    updateCanvasDimensions()
    frameIdRef.current = requestAnimationFrame(animate)

    window.addEventListener("resize", updateCanvasDimensions)

    return () => {
      window.removeEventListener("resize", updateCanvasDimensions)
      cancelAnimationFrame(frameIdRef.current)
    }
  }, [isMobile, isLowPowerDevice, isVisible])

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" style={{ minHeight: expandedHeight }}>
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" style={{ minHeight: expandedHeight }}></div>
      <canvas ref={canvasRef} className="absolute inset-0 opacity-70" style={{ minHeight: expandedHeight }}></canvas>
      <div
        className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/70 to-transparent"
        style={{ minHeight: expandedHeight }}
      ></div>
    </div>
  )
})

export { OptimizedDataWave }
