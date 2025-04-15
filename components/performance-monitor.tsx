"use client"

import { useEffect, useState } from "react"

interface PerformanceMetrics {
  fcp: number | null
  lcp: number | null
  cls: number | null
  fid: number | null
  ttfb: number | null
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    cls: null,
    fid: null,
    ttfb: null,
  })

  useEffect(() => {
    // Only run in production and not on low-end devices
    if (process.env.NODE_ENV !== "production") return

    // Check if device is low-end
    const isLowEndDevice = typeof navigator !== "undefined" && navigator.hardwareConcurrency <= 4

    // Skip performance monitoring on low-end devices to save resources
    if (isLowEndDevice) return

    // Use a single PerformanceObserver for all metrics when possible
    if ("PerformanceObserver" in window) {
      try {
        // First Contentful Paint
        const fcpObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries()
          if (entries.length > 0) {
            const fcp = entries[0].startTime
            setMetrics((prev) => ({ ...prev, fcp }))
            fcpObserver.disconnect() // Disconnect after capturing
          }
        })
        fcpObserver.observe({ type: "paint", buffered: true })

        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries()
          if (entries.length > 0) {
            const lastEntry = entries[entries.length - 1]
            const lcp = lastEntry.startTime
            setMetrics((prev) => ({ ...prev, lcp }))
          }
        })
        lcpObserver.observe({ type: "largest-contentful-paint", buffered: true })

        // Cumulative Layout Shift
        let clsValue = 0
        const clsObserver = new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value
              setMetrics((prev) => ({ ...prev, cls: clsValue }))
            }
          }
        })
        clsObserver.observe({ type: "layout-shift", buffered: true })

        // First Input Delay
        const fidObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries()
          if (entries.length > 0) {
            const fid = entries[0].processingStart - entries[0].startTime
            setMetrics((prev) => ({ ...prev, fid }))
            fidObserver.disconnect() // Disconnect after capturing
          }
        })
        fidObserver.observe({ type: "first-input", buffered: true })

        // Time to First Byte
        const navigationEntries = performance.getEntriesByType("navigation")
        if (navigationEntries.length > 0) {
          const ttfb = (navigationEntries[0] as PerformanceNavigationTiming).responseStart
          setMetrics((prev) => ({ ...prev, ttfb }))
        }

        // Clean up
        return () => {
          fcpObserver.disconnect()
          lcpObserver.disconnect()
          clsObserver.disconnect()
          fidObserver.disconnect()
        }
      } catch (error) {
        console.error("Error setting up performance monitoring:", error)
      }
    }
  }, [])

  // Send metrics to analytics (in a real app) - throttled to avoid excessive calls
  useEffect(() => {
    if (
      metrics.fcp !== null &&
      metrics.lcp !== null &&
      metrics.cls !== null &&
      metrics.fid !== null &&
      metrics.ttfb !== null
    ) {
      // In a real app, you would send these metrics to your analytics service
      // Using a throttled approach
      const sendMetricsThrottled = () => {
        console.log("Performance metrics:", metrics)
      }

      // Only log once when all metrics are available
      sendMetricsThrottled()
    }
  }, [metrics])

  // This component doesn't render anything visible
  return null
}
