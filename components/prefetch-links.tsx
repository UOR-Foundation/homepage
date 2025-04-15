"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

interface PrefetchLinksProps {
  paths: string[]
}

export default function PrefetchLinks({ paths }: PrefetchLinksProps) {
  const router = useRouter()

  useEffect(() => {
    // Prefetch pages after the main content has loaded
    const prefetchPages = () => {
      paths.forEach((path) => {
        router.prefetch(path)
      })
    }

    // Use requestIdleCallback if available, otherwise setTimeout
    if ("requestIdleCallback" in window) {
      ;(window as any).requestIdleCallback(prefetchPages)
    } else {
      setTimeout(prefetchPages, 2000)
    }
  }, [paths, router])

  return null
}
