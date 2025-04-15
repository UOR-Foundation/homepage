"use client"

import { useEffect, useRef } from "react"
import "../components/galaxy-animation.css"

export default function GalaxyAnimation({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const galaxyContainer = containerRef.current

    // Clear any existing content
    galaxyContainer.innerHTML = ""

    // Create the galaxy animation
    for (let i = 0; i < 2; i++) {
      const galaxy = document.createElement("div")
      galaxy.className = "galaxy"

      for (let j = 0; j < 20; j++) {
        const stars = document.createElement("div")
        stars.className = "stars"

        const circle = document.createElement("div")
        circle.className = "circle"

        for (let k = 0; k < 35; k++) {
          const dot = document.createElement("div")
          dot.className = "dot"
          circle.appendChild(dot)
        }

        stars.appendChild(circle)
        galaxy.appendChild(stars)
      }

      galaxyContainer.appendChild(galaxy)
    }
  }, [])

  return (
    <div className={`hero-galaxy-container ${className}`}>
      <div className="galaxy-wrapper">
        <div id="galaxy-container" ref={containerRef}></div>
      </div>
    </div>
  )
}
