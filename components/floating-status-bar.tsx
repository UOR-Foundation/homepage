"use client"

import LiveClock from "@/components/live-clock"
import KernelStatus from "@/components/kernel-status"
import Link from "next/link"

export default function FloatingStatusBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-t border-white/10 py-1.5 sm:py-2 px-3 sm:px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-3 sm:grid-cols-3 items-center text-xs">
        <div className="flex justify-start">
          <LiveClock />
        </div>
        <div className="flex justify-center items-center">
          <KernelStatus />
        </div>
        <div className="flex justify-end">
          <Link
            href="https://en.wikipedia.org/wiki/Tesla_Experimental_Station"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/50 hover:text-white/80 transition-colors truncate"
          >
            38.8590° N, 104.8214° W
          </Link>
        </div>
      </div>
    </div>
  )
}
