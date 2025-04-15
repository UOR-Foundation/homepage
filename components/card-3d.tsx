"use client"

import type React from "react"

import { useState, useRef, type ReactNode } from "react"
import { motion } from "framer-motion"

interface Card3DProps {
  children: ReactNode
  className?: string
  intensity?: number
  perspective?: number
  glareEnabled?: boolean
  glareMaxOpacity?: number
  glareColor?: string
  glarePosition?: "all" | "top" | "right" | "bottom" | "left"
}

export default function Card3D({
  children,
  className = "",
  intensity = 15,
  perspective = 1000,
  glareEnabled = true,
  glareMaxOpacity = 0.3,
  glareColor = "255, 255, 255",
  glarePosition = "all",
}: Card3DProps) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [glareOpacity, setGlareOpacity] = useState(0)
  const [glareX, setGlareX] = useState(50)
  const [glareY, setGlareY] = useState(50)

  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()

    // Calculate mouse position relative to card
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Calculate rotation based on mouse position
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateYValue = ((x - centerX) / centerX) * intensity
    const rotateXValue = ((centerY - y) / centerY) * intensity

    setRotateX(rotateXValue)
    setRotateY(rotateYValue)

    // Calculate glare position and opacity
    if (glareEnabled) {
      const percentX = (x / rect.width) * 100
      const percentY = (y / rect.height) * 100

      setGlareX(percentX)
      setGlareY(percentY)

      // Adjust glare opacity based on position
      let opacity = 0

      switch (glarePosition) {
        case "top":
          opacity = 1 - y / rect.height
          break
        case "right":
          opacity = x / rect.width
          break
        case "bottom":
          opacity = y / rect.height
          break
        case "left":
          opacity = 1 - x / rect.width
          break
        case "all":
        default:
          // Calculate distance from center (0-1)
          const dx = Math.abs(percentX - 50) / 50
          const dy = Math.abs(percentY - 50) / 50
          opacity = Math.sqrt(dx * dx + dy * dy)
          break
      }

      setGlareOpacity(Math.min(opacity * glareMaxOpacity, glareMaxOpacity))
    }
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setGlareOpacity(0)
  }

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        transformStyle: "preserve-3d",
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        // Add explicit background color to ensure consistent rendering across OS
        backgroundColor: "rgb(30, 30, 30)",
        // Add explicit text color to ensure visibility on all platforms
        color: "rgb(255, 255, 255)",
        // Add box-shadow for better depth perception on macOS
        boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.5)",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}

      {glareEnabled && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(${glareColor}, ${glareOpacity}) 0%, rgba(${glareColor}, 0) 70%)`,
            mixBlendMode: "overlay",
          }}
        />
      )}
    </motion.div>
  )
}
