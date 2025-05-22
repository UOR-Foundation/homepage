"use client"

import { useState, useEffect } from "react"

export function useDeviceDetection() {
  const [isMobile, setIsMobile] = useState(false)
  const [isLowPowerDevice, setIsLowPowerDevice] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
    }

    // Detect low-power devices based on various factors
    const detectLowPowerDevice = () => {
      // Check for hardware concurrency (CPU cores)
      const lowConcurrency = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4

      // Check for device memory (if available)
      const lowMemory = (navigator as any).deviceMemory && (navigator as any).deviceMemory <= 4

      // Check for mobile device
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

      // Check for battery status if available
      if ("getBattery" in navigator) {
        ;(navigator as any).getBattery().then((battery: any) => {
          const isBatteryLow = battery.level < 0.2 && !battery.charging
          setIsLowPowerDevice(isMobileDevice && (lowConcurrency || lowMemory || isBatteryLow))
        })
      } else {
        // If battery API not available, use other factors
        setIsLowPowerDevice(isMobileDevice && (lowConcurrency || lowMemory))
      }
    }

    checkMobile()
    detectLowPowerDevice()
    setIsLoaded(true)

    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return { isMobile, isLowPowerDevice, isLoaded }
}
