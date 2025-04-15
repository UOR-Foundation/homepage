"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import useIntersectionObserver from "@/hooks/use-intersection-observer"

interface ScrollRevealProps {
  children: ReactNode
  width?: string
  delay?: number
}

export default function ScrollReveal({ children, width = "100%", delay = 0 }: ScrollRevealProps) {
  const [isVisible, ref] = useIntersectionObserver({ threshold: 0.1 })

  return (
    <div ref={ref} style={{ width }} className="overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay }}
      >
        {children}
      </motion.div>
    </div>
  )
}
