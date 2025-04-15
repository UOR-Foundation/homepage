"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface FloatingCardProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  distance?: number
  rotationRange?: [number, number]
  hoverEffect?: boolean
}

export default function FloatingCard({
  children,
  className = "",
  delay = 0,
  duration = 6,
  distance = 10,
  rotationRange = [-2, 2],
  hoverEffect = true,
}: FloatingCardProps) {
  // Animation for floating effect
  const floatAnimation = {
    y: [0, -distance, 0],
    rotate: [rotationRange[0], rotationRange[1], rotationRange[0]],
  }

  // Animation for hover effect
  const hoverAnimation = {
    scale: 1.05,
    y: -10,
    transition: { duration: 0.3 },
  }

  return (
    <motion.div
      className={`${className} ${hoverEffect ? "cursor-pointer" : ""}`}
      animate={floatAnimation}
      transition={{
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "mirror",
        duration,
        delay,
        ease: "easeInOut",
      }}
      whileHover={hoverEffect ? hoverAnimation : {}}
    >
      {children}
    </motion.div>
  )
}
