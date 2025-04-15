"use client"

import { useRef, type ReactNode } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxSectionProps {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right"
  speed?: number
  className?: string
  offset?: number[]
  outputRange?: number[]
}

export default function ParallaxSection({
  children,
  direction = "up",
  speed = 0.5,
  className = "",
  offset = [0, 1],
  outputRange,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Set default output range based on direction and speed
  if (!outputRange) {
    switch (direction) {
      case "up":
        outputRange = [0, -100 * speed]
        break
      case "down":
        outputRange = [0, 100 * speed]
        break
      case "left":
        outputRange = [0, -100 * speed]
        break
      case "right":
        outputRange = [0, 100 * speed]
        break
    }
  }

  // Create transform based on direction
  const transform = useTransform(scrollYProgress, offset, outputRange)

  const motionProps = {
    ref,
    className,
    style: direction === "up" || direction === "down" ? { y: transform } : { x: transform },
  }

  return <motion.div {...motionProps}>{children}</motion.div>
}
