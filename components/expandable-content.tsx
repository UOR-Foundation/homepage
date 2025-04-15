"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface ExpandableContentProps {
  summary: React.ReactNode
  children: React.ReactNode
}

export default function ExpandableContent({ summary, children }: ExpandableContentProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="flex-grow flex flex-col">
      <div className="mb-2">{summary}</div>

      {isExpanded && <div className="transition-all duration-300 animate-fadeIn mb-2">{children}</div>}

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center text-sm text-white/80 hover:text-white transition-colors mt-auto group bg-black-300/50 py-1 px-2 rounded-md self-start"
      >
        {isExpanded ? (
          <>
            Read less <ChevronUp className="ml-1 h-4 w-4 group-hover:translate-y-[-2px] transition-transform" />
          </>
        ) : (
          <>
            Read more <ChevronDown className="ml-1 h-4 w-4 group-hover:translate-y-[2px] transition-transform" />
          </>
        )}
      </button>
    </div>
  )
}
