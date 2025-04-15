"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"

interface AnimatedTextProps {
  text: string
  className?: string
  once?: boolean
  delay?: number
  speed?: number
  type?: "chars" | "words" | "lines"
  animation?: "fade" | "slide-up" | "slide-down" | "slide-left" | "slide-right"
}

export default function AnimatedText({
  text,
  className = "",
  once = true,
  delay = 0,
  speed = 0.05,
  type = "words",
  animation = "slide-up",
}: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once })
  const [splitted, setSplitted] = useState<string[]>([])

  useEffect(() => {
    switch (type) {
      case "chars":
        setSplitted(text.split(""))
        break
      case "words":
        setSplitted(text.split(" "))
        break
      case "lines":
        setSplitted(text.split("\n"))
        break
    }
  }, [text, type])

  // Animation variants
  const getAnimationVariants = () => {
    switch (animation) {
      case "fade":
        return {
          hidden: { opacity: 0 },
          visible: (i: number) => ({
            opacity: 1,
            transition: { delay: i * speed + delay, duration: 0.5 },
          }),
        }
      case "slide-up":
        return {
          hidden: { opacity: 0, y: 20 },
          visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * speed + delay, duration: 0.5, ease: [0.2, 0.65, 0.3, 0.9] },
          }),
        }
      case "slide-down":
        return {
          hidden: { opacity: 0, y: -20 },
          visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * speed + delay, duration: 0.5, ease: [0.2, 0.65, 0.3, 0.9] },
          }),
        }
      case "slide-left":
        return {
          hidden: { opacity: 0, x: 20 },
          visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: { delay: i * speed + delay, duration: 0.5, ease: [0.2, 0.65, 0.3, 0.9] },
          }),
        }
      case "slide-right":
        return {
          hidden: { opacity: 0, x: -20 },
          visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: { delay: i * speed + delay, duration: 0.5, ease: [0.2, 0.65, 0.3, 0.9] },
          }),
        }
    }
  }

  const variants = getAnimationVariants()

  return (
    <div ref={ref} className={`overflow-hidden ${className}`} aria-label={text}>
      {isInView && (
        <motion.div initial="hidden" animate="visible" className="flex flex-wrap">
          {splitted.map((item, i) => (
            <motion.span key={i} custom={i} variants={variants} className={type === "words" ? "mr-1.5" : ""}>
              {item}
              {type === "chars" && i !== splitted.length - 1 && ""}
              {type === "lines" && i !== splitted.length - 1 && <br />}
            </motion.span>
          ))}
        </motion.div>
      )}
    </div>
  )
}
