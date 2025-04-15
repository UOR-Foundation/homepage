"use client"

import { useState, useEffect } from "react"

export default function LiveClock() {
  const [dateTime, setDateTime] = useState<Date>(new Date())

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      setDateTime(new Date())
    }, 1000)

    // Clean up interval on unmount
    return () => clearInterval(timer)
  }, [])

  // Format date: e.g., "Apr 5, 2025"
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(dateTime)

  // Format time: e.g., "12:30:45 PM"
  const formattedTime = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  }).format(dateTime)

  return (
    <div className="text-white/70 text-xs sm:text-sm flex items-center">
      <span className="hidden sm:inline">System Time:</span>
      <span className="ml-1 font-mono">{formattedTime}</span>
    </div>
  )
}
