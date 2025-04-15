"use client"

import { Suspense, lazy, useEffect, useState, type ComponentType, type ReactNode } from "react"
import useIntersectionObserver from "@/hooks/use-intersection-observer"

interface LazyLoadProps {
  component: () => Promise<{ default: ComponentType<any> }>
  fallback?: ReactNode
  props?: Record<string, any>
}

export default function LazyLoad({ component, fallback = null, props = {} }: LazyLoadProps) {
  const [isVisible, containerRef] = useIntersectionObserver({ threshold: 0.1 })
  const [Component, setComponent] = useState<ComponentType<any> | null>(null)

  useEffect(() => {
    // Only load the component when it's visible or about to be visible
    if (isVisible) {
      const LazyComponent = lazy(component)
      setComponent(() => LazyComponent)
    }
  }, [isVisible, component])

  return (
    <div ref={containerRef} style={{ minHeight: "10px" }}>
      {Component ? (
        <Suspense fallback={fallback}>
          <Component {...props} />
        </Suspense>
      ) : (
        fallback
      )}
    </div>
  )
}
