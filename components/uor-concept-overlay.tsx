"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

type ConceptType = "canon" | "codex" | "cortex" | null

interface ConceptInfo {
  title: string
  icon: string
  color: string
  description: React.ReactNode
  aiAnalogy: string
  howItWorks: string
  advantages: string[]
}

const conceptData: Record<string, ConceptInfo> = {
  canon: {
    title: "Canon",
    icon: "🔷",
    color: "from-revolut-blue-500 to-revolut-blue-700",
    description:
      "The Canon is the foundational knowledge layer of the UOR framework. It contains well-defined concepts, symbolic references, and core principles that serve as the system's trusted source of truth. Each item in the Canon is assigned a unique Handle — a stable reference that the system can interpret, manipulate, and trace.",
    aiAnalogy: "RAG / Knowledge Base",
    howItWorks:
      "When a user or system initiates a query, the Canon supplies the raw symbolic materials (Handles) that seed the reasoning process.",
    advantages: [
      "Provides verifiable, non-hallucinated inputs",
      "Meaning is encoded directly — not just stored for retrieval",
      "Enables symbolic reasoning, abstraction, and precise traceability",
    ],
  },
  codex: {
    title: "Codex",
    icon: "🔷",
    color: "from-revolut-purple-500 to-revolut-purple-700",
    description:
      "The Codex is UOR's memory and output layer. It holds the structured results of reasoning processes, each stored in a Container — a verified object with embedded meaning, metadata, and logical provenance. Think of it as the UOR system's way of remembering what it knows and how it knows it.",
    aiAnalogy: "LLM / Neural Network",
    howItWorks:
      "After a Handle travels through the Cortex, the resulting realization is stored in the Codex. Each Codex entry includes not just the output, but the transformation path and supporting structure behind it.",
    advantages: [
      "Outputs are fully interpretable and logically structured",
      "Every answer includes its provenance and transformation trail",
      "Ideal for auditing, reuse, and long-term memory applications",
    ],
  },
  cortex: {
    title: "Cortex",
    icon: "🔷",
    color: "from-revolut-pink-500 to-revolut-pink-700",
    description:
      "The Cortex is the active processing core of the UOR system — a symbolic engine that maps Canonical inputs (Handles) to Codex outputs (Containers) through a deterministic transformation circuit. It orchestrates logic, relationships, and structure across multiple layers of abstraction, known as the Primal Domain Stack.",
    aiAnalogy: "Output Log / Memory",
    howItWorks:
      "The Cortex processes inputs through three phases — encoding (defining structure), embedding (transforming through logic/geometry), and decoding (resolving to an interpretable outcome). Each step is traceable, reversible, and coherent.",
    advantages: [
      "No black-box inference — every step is inspectable",
      "Symbolic and geometric reasoning beyond pattern matching",
      "Produces consistent, deterministic, and debuggable outcomes",
    ],
  },
}

export function UORConceptOverlay() {
  const [activeConcept, setActiveConcept] = useState<ConceptType>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const overlayRef = useRef<HTMLDivElement>(null)

  // Close overlay when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target as Node)) {
        setActiveConcept(null)
      }
    }

    if (activeConcept) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [activeConcept])

  // Handle escape key
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveConcept(null)
      }
    }

    if (activeConcept) {
      document.addEventListener("keydown", handleEscKey)
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey)
    }
  }, [activeConcept])

  // Enhance all mentions of Canon, Codex, and Cortex on the page
  useEffect(() => {
    const enhanceConceptMentions = () => {
      const concepts = ["Canon", "Codex", "Cortex"]

      // Find all text nodes in the document
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null)

      const nodesToProcess: { node: Text; concept: string }[] = []

      // Collect nodes that contain our concepts
      let node
      while ((node = walker.nextNode() as Text)) {
        // Skip nodes in our overlay
        if (overlayRef.current?.contains(node)) continue

        // Skip script and style tags
        const parent = node.parentElement
        if (
          parent?.tagName === "SCRIPT" ||
          parent?.tagName === "STYLE" ||
          parent?.classList.contains("uor-concept-enhanced") ||
          parent?.tagName === "BUTTON" ||
          parent?.closest(".uor-concept-overlay")
        )
          continue

        for (const concept of concepts) {
          if (node.textContent?.includes(concept)) {
            nodesToProcess.push({ node, concept })
            break // Only process each node once
          }
        }
      }

      // Process collected nodes
      for (const { node, concept } of nodesToProcess) {
        const conceptLower = concept.toLowerCase() as ConceptType
        const parent = node.parentElement
        if (!parent) continue

        // Skip if already processed
        if (parent.classList.contains("uor-concept-enhanced")) continue

        const text = node.textContent || ""
        const parts = text.split(new RegExp(`(${concept})`, "g"))

        if (parts.length > 1) {
          // Create a wrapper span
          const wrapper = document.createElement("span")
          wrapper.classList.add("uor-concept-enhanced")

          // Replace the text node with our enhanced version
          parts.forEach((part) => {
            if (part === concept) {
              const conceptSpan = document.createElement("span")
              conceptSpan.textContent = part
              conceptSpan.classList.add("uor-concept-text", "font-semibold", "text-revolut-blue-400", "inline")
              conceptSpan.dataset.concept = conceptLower
              wrapper.appendChild(conceptSpan)
            } else {
              wrapper.appendChild(document.createTextNode(part))
            }
          })

          parent.replaceChild(wrapper, node)
        }
      }
    }

    // Run once on mount
    setTimeout(enhanceConceptMentions, 500)

    // Set up a mutation observer to handle dynamically added content
    const observer = new MutationObserver((mutations) => {
      let shouldEnhance = false

      for (const mutation of mutations) {
        if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
          shouldEnhance = true
          break
        }
      }

      if (shouldEnhance) {
        setTimeout(enhanceConceptMentions, 100)
      }
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  if (!activeConcept) return null

  const concept = conceptData[activeConcept]

  // Calculate optimal position
  const calculatePosition = () => {
    if (!overlayRef.current) return {}

    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight
    const scrollTop = window.scrollY || document.documentElement.scrollTop

    // Get overlay dimensions
    const overlayWidth = overlayRef.current.offsetWidth
    const overlayHeight = overlayRef.current.offsetHeight

    // Initial position (below the clicked element)
    let top = position.y + 10
    let left = position.x - overlayWidth / 2

    // Adjust if too far right
    if (left + overlayWidth > viewportWidth - 20) {
      left = viewportWidth - overlayWidth - 20
    }

    // Adjust if too far left
    if (left < 20) {
      left = 20
    }

    // If overlay would go below viewport, position it above the clicked element
    if (top + overlayHeight > scrollTop + viewportHeight - 20) {
      top = position.y - overlayHeight - 20
    }

    // On mobile, center it
    if (viewportWidth < 640) {
      left = (viewportWidth - overlayWidth) / 2
    }

    return {
      top: `${top}px`,
      left: `${left}px`,
    }
  }

  return (
    <div
      ref={overlayRef}
      className="uor-concept-overlay fixed z-50 w-full max-w-md animate-in fade-in slide-in-from-top-5 duration-300 sm:w-auto"
      style={calculatePosition()}
    >
      <div className={`bg-black-200 border border-white/20 rounded-xl shadow-2xl overflow-hidden`}>
        <div className={`bg-gradient-to-r ${concept.color} p-4 flex justify-between items-center`}>
          <div className="flex items-center">
            <span className="text-2xl mr-2">{concept.icon}</span>
            <h3 className="text-xl font-bold text-white">{concept.title}</h3>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setActiveConcept(null)}
            className="h-8 w-8 rounded-full bg-black/20 hover:bg-black/40 text-white"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </div>

        <div className="p-5">
          <p className="text-white/90 mb-4">{concept.description}</p>

          <div className="mb-4">
            <h4 className="text-sm font-semibold text-white/70 mb-1">AI/ML ANALOGY</h4>
            <p className="text-white/90">{concept.aiAnalogy}</p>
          </div>

          <div className="mb-4">
            <h4 className="text-sm font-semibold text-white/70 mb-1">HOW IT WORKS</h4>
            <p className="text-white/90">{concept.howItWorks}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white/70 mb-1">KEY ADVANTAGES</h4>
            <ul className="text-white/90 space-y-1">
              {concept.advantages.map((advantage, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-xs mr-2 mt-1">•</span>
                  <span>{advantage}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
