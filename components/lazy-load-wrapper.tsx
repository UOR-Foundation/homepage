"use client"

import { useState, useEffect, useRef, type ReactNode } from "react"

interface LazyLoadWrapperProps {
  children: ReactNode
  height?: string
  threshold?: number
  placeholder?: ReactNode
}

export function LazyLoadWrapper({ children, height = "auto", threshold = 0.1, placeholder }: LazyLoadWrapperProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setHasLoaded(true)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [isVisible])

  return (
    <div
      ref={ref}
      style={{ minHeight: !hasLoaded ? height : undefined }}
      className={`transition-opacity duration-500 ${hasLoaded ? "opacity-100" : "opacity-0"}`}
    >
      {isVisible ? children : placeholder}
    </div>
  )
}
