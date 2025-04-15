"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import ParticleBackground from "@/components/particle-background"
import GradientBackground from "@/components/gradient-background"
import EnhancedHeader from "@/components/enhanced-header"
import ScrollReveal from "@/components/scroll-reveal"
import ParallaxSection from "@/components/parallax-section"
import Card3D from "@/components/card-3d"
import { useEffect, useState } from "react"
import LazyLoad from "@/components/lazy-load"
import PrefetchLinks from "@/components/prefetch-links"
import Image from "next/image"
import GalaxyAnimation from "@/components/galaxy-animation"
import { ChevronUp, ChevronDown, X } from "lucide-react"

export default function Home() {
  // State for tracking expanded cards
  const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({
    why: false,
    how: false,
    what: false,
  })

  // State for popup overlay
  const [popupContent, setPopupContent] = useState<{
    title: string
    content: React.ReactNode | null
    isOpen: boolean
  }>({
    title: "",
    content: null,
    isOpen: false,
  })

  // This effect runs on mount to ensure we start at the top
  useEffect(() => {
    // Add a check for reduced motion preference to disable heavy animations
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const prefersReducedMotion = mediaQuery.matches

    // Apply performance optimizations based on device capability
    const isLowEndDevice = window.navigator.hardwareConcurrency <= 4

    // Apply optimizations for low-end devices or reduced motion preference
    if (isLowEndDevice || prefersReducedMotion) {
      // Find and disable heavy animations
      const heavyAnimations = document.querySelectorAll(".heartbeat-glow, .data-glow-animation")
      heavyAnimations.forEach((el) => {
        el.classList.add("reduce-motion-mobile")
      })

      // Simplify background effects
      const backgrounds = document.querySelectorAll(".gpu-accelerated")
      backgrounds.forEach((el) => {
        el.classList.add("reduce-motion-mobile")
      })
    }

    // Force scroll to top with multiple methods for cross-browser compatibility
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0

    // Clear any hash in the URL that might cause jumping
    if (window.location.hash) {
      // Use history API to clear the hash without causing a jump
      window.history.replaceState(null, document.title, window.location.pathname + window.location.search)
    }

    // Add a small delay to ensure browser has time to process
    const timer = setTimeout(() => {
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  // Enhanced wallet error prevention
  useEffect(() => {
    // Block all wallet-related message events
    const blockWalletMessages = (event: any) => {
      if (
        event.data &&
        ((typeof event.data === "object" &&
          (event.data.method === "sender_getProviderState" || event.data.type === "sender-wallet-providerResult")) ||
          (typeof event.data === "string" &&
            (event.data.includes("sender_getProviderState") || event.data.includes("sender-wallet-providerResult"))))
      ) {
        console.log(
          "Blocked wallet message event:",
          typeof event.data === "object" ? event.data.method || event.data.type : "string message",
        )
        event.stopImmediatePropagation()
        event.preventDefault()
        return false
      }
    }

    // Add capture phase listener to intercept before other listeners
    window.addEventListener("message", blockWalletMessages, true)

    // Clean up
    return () => {
      window.removeEventListener("message", blockWalletMessages, true)
    }
  }, [])

  // Function to toggle card expansion
  const toggleCardExpansion = (card: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [card]: !prev[card],
    }))
  }

  // Function to open popup
  const openPopup = (title: string, content: React.ReactNode) => {
    setPopupContent({
      title,
      content,
      isOpen: true,
    })
    // Prevent body scrolling when popup is open
    document.body.style.overflow = "hidden"
  }

  // Function to close popup
  const closePopup = () => {
    setPopupContent((prev) => ({
      ...prev,
      isOpen: false,
    }))
    // Restore body scrolling
    document.body.style.overflow = "auto"
  }

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Enhanced Header */}
      <EnhancedHeader />

      {/* Rest of the component remains unchanged */}
      {/* 1. Hero Section with highlighted "Data" */}
      <section className="relative text-white pt-24 pb-12 px-4 sm:px-6 overflow-hidden min-h-[80vh] flex items-center">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[rgb(16,0,43)]"></div>
        <GradientBackground blur={80} speed={0.001} className="gpu-accelerated" />
        <ParticleBackground className="gpu-accelerated" />

        <div className="max-w-6xl mx-auto relative z-10 w-full">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="mb-6">
                <h1 className="hero-text-smaller high-contrast-text mb-4 tracking-tight">
                  TRANSFORM THE WAY YOU
                  <div className="relative inline-block mt-1">
                    <span className="data-glow-text">DATA</span>
                    {/* Center-aligned glow effect behind DATA */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full data-glow-animation heartbeat-glow"></div>
                  </div>
                </h1>

                {/* Mobile-only galaxy animation MOVED BETWEEN title and paragraph */}
                <div className="flex md:hidden justify-center my-6">
                  <div
                    className="relative hero-image-container gpu-accelerated"
                    style={{ maxWidth: "180px", maxHeight: "180px" }}
                  >
                    <div className="hero-image-glow heartbeat-glow"></div>
                    <div className="relative z-10">
                      <GalaxyAnimation className="w-full h-[180px]" />
                    </div>
                  </div>
                </div>

                <p className="subtitle-text mb-6 text-white/90 high-contrast-text text-base leading-relaxed">
                  UOR Foundation is building the internet's new foundation — where data is sovereign, knowledge is open,
                  and intelligence flows freely to empower people and unlock human potential.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  className="rounded-full px-5 py-3 text-base font-medium bg-white text-black hover:bg-white/90 revolut-button w-full sm:w-auto"
                  asChild
                >
                  <Link href="/product">Learn More</Link>
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full px-5 py-3 text-base font-medium border-white text-white bg-transparent hover:bg-white/10 revolut-button w-full sm:w-auto mt-2 sm:mt-0"
                  asChild
                >
                  <Link href="https://github.com/UOR-Foundation" target="_blank" rel="noopener noreferrer">
                    Explore GitHub
                  </Link>
                </Button>
              </div>
            </div>

            <div className="hidden md:flex justify-center">
              <div className="relative hero-image-container gpu-accelerated">
                {/* Single glow effect behind the hero image */}
                <div className="hero-image-glow heartbeat-glow"></div>
                <div className="relative z-10">
                  {/* Use next/dynamic to load GalaxyAnimation only when needed */}
                  <GalaxyAnimation className="w-full max-w-[250px] h-[250px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Improved Why, How, What Section */}
      <section className="space-section px-4 sm:px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal width="100%">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
              Our <span className="gradient-text">Mission</span>
            </h2>
            <p className="text-white text-center max-w-2xl mx-auto mb-16 text-lg">
              We're building a better internet where data has meaning, people have control, and systems work together
              seamlessly.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {/* Why */}
            <ScrollReveal delay={0.1}>
              <Card3D
                className={`bg-black-200 p-6 rounded-2xl border border-white/10 ${expandedCards.why ? "h-auto" : "h-auto md:h-[360px]"} flex flex-col mission-card transition-all duration-300`}
                intensity={5}
              >
                <div className="bg-gradient-to-br from-revolut-blue-500 to-revolut-blue-700 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-white text-xl font-bold">Why</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Unlock Your Data Sovereignty</h3>

                {/* Expandable content */}
                <div className="flex-grow flex flex-col">
                  <p className="text-white/90 mb-2">
                    The internet was built for content, not context. Without a shared semantic reference system, data
                    becomes fragmented, hard to trust, and difficult to interoperate.
                  </p>

                  {expandedCards.why && (
                    <div className="transition-all duration-300 animate-fadeIn mb-2">
                      <p className="text-white/90">
                        This limits innovation, fuels misinformation, and centralizes control. We believe that by making
                        data semantic, traceable, and interoperable, we can unlock human potential—restoring data
                        sovereignty, enabling free access to information, and building a more open, trustworthy digital
                        future.
                      </p>
                    </div>
                  )}

                  <button
                    onClick={() => toggleCardExpansion("why")}
                    className="flex items-center text-sm text-white/80 hover:text-white transition-colors mt-auto group bg-black-300/50 py-1 px-2 rounded-md self-start"
                  >
                    {expandedCards.why ? (
                      <>
                        Read less{" "}
                        <ChevronUp className="ml-1 h-4 w-4 group-hover:translate-y-[-2px] transition-transform" />
                      </>
                    ) : (
                      <>
                        Read more{" "}
                        <ChevronDown className="ml-1 h-4 w-4 group-hover:translate-y-[2px] transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </Card3D>
            </ScrollReveal>

            {/* How */}
            <ScrollReveal delay={0.2}>
              <Card3D
                className={`bg-black-200 p-6 rounded-2xl border border-white/10 ${expandedCards.how ? "h-auto" : "h-auto md:h-[360px]"} flex flex-col mission-card transition-all duration-300`}
                intensity={5}
              >
                <div className="bg-gradient-to-br from-revolut-purple-500 to-revolut-purple-700 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-white text-xl font-bold">How</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Build Semantic Infrastructure</h3>

                {/* Expandable content */}
                <div className="flex-grow flex flex-col">
                  <p className="text-white/90 mb-2">
                    The UOR Foundation develops open standards and tools that embed semantic meaning directly into data.
                    Our approach enables federated, verifiable computation across disconnected systems.
                  </p>

                  {expandedCards.how && (
                    <div className="transition-all duration-300 animate-fadeIn mb-2">
                      <p className="text-white/90">
                        Our approach enables federated, verifiable computation across disconnected systems—without
                        relying on brittle ontologies or opaque AI. By preserving context throughout the data lifecycle,
                        we prevent drift, decay, and loss of integrity.
                      </p>
                    </div>
                  )}

                  <button
                    onClick={() => toggleCardExpansion("how")}
                    className="flex items-center text-sm text-white/80 hover:text-white transition-colors mt-auto group bg-black-300/50 py-1 px-2 rounded-md self-start"
                  >
                    {expandedCards.how ? (
                      <>
                        Read less{" "}
                        <ChevronUp className="ml-1 h-4 w-4 group-hover:translate-y-[-2px] transition-transform" />
                      </>
                    ) : (
                      <>
                        Read more{" "}
                        <ChevronDown className="ml-1 h-4 w-4 group-hover:translate-y-[2px] transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </Card3D>
            </ScrollReveal>

            {/* What */}
            <ScrollReveal delay={0.3}>
              <Card3D
                className={`bg-black-200 p-6 rounded-2xl border border-white/10 ${expandedCards.what ? "h-auto" : "h-auto md:h-[360px]"} flex flex-col mission-card transition-all duration-300`}
                intensity={5}
              >
                <div className="bg-gradient-to-br from-revolut-pink-500 to-revolut-pink-700 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-white text-xl font-bold">What</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Deploy Context-Aware Applications</h3>

                {/* Expandable content */}
                <div className="flex-grow flex flex-col">
                  <p className="text-white/90 mb-2">
                    Our core innovation is UOR (Universal Object Reference)—an open-source framework that creates a
                    shared coordinate system for digital artifacts.
                  </p>

                  {expandedCards.what && (
                    <div className="transition-all duration-300 animate-fadeIn mb-2">
                      <p className="text-white/90">
                        We're building the semantic layer of the internet through tools like PrimeOS, a trust-minimized
                        runtime for context-aware AI, and the PrimeApp SDK. From healthcare to education, UOR powers a
                        new generation of systems that are explainable, composable, and trustworthy.
                      </p>
                    </div>
                  )}

                  <button
                    onClick={() => toggleCardExpansion("what")}
                    className="flex items-center text-sm text-white/80 hover:text-white transition-colors mt-auto group bg-black-300/50 py-1 px-2 rounded-md self-start"
                  >
                    {expandedCards.what ? (
                      <>
                        Read less{" "}
                        <ChevronUp className="ml-1 h-4 w-4 group-hover:translate-y-[-2px] transition-transform" />
                      </>
                    ) : (
                      <>
                        Read more{" "}
                        <ChevronDown className="ml-1 h-4 w-4 group-hover:translate-y-[2px] transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </Card3D>
            </ScrollReveal>
          </div>

          {/* Vision Section with full-width white background - UPDATED FOR MOBILE */}
          <div className="mt-20 w-full">
            <div className="vision-band py-16 w-screen relative left-[50%] right-[50%] mx-[-50vw] bg-white">
              <ScrollReveal width="100%">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                  <h3 className="text-2xl font-bold mb-4 text-center text-black">Our Vision</h3>

                  {/* New enclosed geometric image with centered pulsating glow - REDUCED SIZE FOR MOBILE */}
                  <div className="flex justify-center mb-6 relative">
                    {/* Centered pulsating glow effect - with loving heartbeat animation */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-revolut-blue-500 via-revolut-purple-500 to-revolut-pink-500 heartbeat-glow z-0 opacity-50 blur-xl"></div>

                    {/* Image on top of the pulsating effect - REDUCED SIZE FOR MOBILE */}
                    <div className="relative z-10">
                      <Image
                        src="/trans.png"
                        alt="UOR Geometric Vision Diagram"
                        width={160}
                        height={104}
                        className="opacity-90 w-[120px] md:w-[160px]"
                        loading="eager"
                        priority
                        quality={90}
                        sizes="(max-width: 768px) 120px, 160px"
                      />
                    </div>
                  </div>

                  <div className="max-w-3xl mx-auto">
                    <p className="text-lg leading-relaxed text-center text-black">
                      We believe in a future where you own your data, AI speaks truth, not guesses, and systems work
                      together without barriers. A future where software is open, transparent, and built to empower you.
                      Join us to restore trust, unlock human potential, and build a digital world that puts people
                      first.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Our Product Section */}
      <section className="space-section px-4 sm:px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal width="100%">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
              Our <span className="gradient-text">Product</span>
            </h2>
            <p className="text-white/80 text-center max-w-3xl mx-auto mb-12">
              A complete stack for building, shipping, and running deterministic applications with semantic
              traceability, all built on the UOR Framework foundation
            </p>
          </ScrollReveal>

          {/* Build → Ship → Run Workflow Graphic */}
          <div className="bg-black-200 rounded-xl p-8 border border-white/10 mb-16">
            {/* UOR Framework Foundation - MOVED TO TOP */}
            <div className="mb-8">
              <div className="relative w-full mx-auto">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-xl bg-gradient-to-r from-revolut-blue-500/30 via-revolut-purple-500/30 to-revolut-pink-500/30 blur-xl"></div>
                <div className="relative bg-black-300 rounded-xl border border-white/20 p-6">
                  <div className="flex flex-col items-center">
                    {/* Logo at the top */}
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-br from-revolut-blue-500 to-revolut-purple-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        0
                      </div>
                      <h3 className="text-xl font-bold text-white ml-3">UOR Framework</h3>
                    </div>

                    {/* Description text - centered */}
                    <p className="text-white/80 text-sm mb-5 text-center max-w-3xl">
                      The UOR framework is a next-generation substrate protocol for the internet, designed for
                      transporting, computing and storing data using first-principles and axiomatic structures.
                    </p>

                    {/* Three components - centered */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
                      {/* Canon */}
                      <div className="bg-revolut-blue-500/30 px-3 py-2 rounded text-xs">
                        <div className="text-center mb-1 text-white font-bold text-xl">A</div>
                        <span className="font-bold text-base text-revolut-blue-400 block text-center">Canon</span>
                        <span className="text-xs text-white/80 block text-center">(Knowledge Graph)</span>
                        <p className="mt-1 text-white/80 text-center">
                          Semantic reference system for transporting data.
                        </p>
                        <div className="text-center">
                          <button
                            onClick={() =>
                              openPopup(
                                "Canon (Knowledge Graph)",
                                <div className="space-y-4">
                                  <p>
                                    The Canon is the semantic reference system of the UOR framework — a structured,
                                    symbolic layer that enables the transportation of meaning across systems. It
                                    contains first-principles definitions, stable Handles, and well-formed concepts that
                                    serve as the substrate for all reasoning. As the system's source of semantic truth,
                                    the Canon ensures that every piece of data is uniquely identifiable and logically
                                    grounded.
                                  </p>
                                  <p>
                                    <strong>AI/ML analogy:</strong> Like an ontology powering symbolic reasoning or the
                                    curated document base in RAG — but internally structured, logically coherent, and
                                    meaning-native.
                                  </p>
                                  <p>
                                    <strong>How it works:</strong> When a query or computation is initiated, the Canon
                                    provides the symbolic seeds (Handles) — precise references that drive resolution and
                                    computation downstream.
                                  </p>
                                  <p>
                                    <strong>Key advantages:</strong>
                                  </p>
                                  <ul className="list-disc pl-5 space-y-1">
                                    <li>Enables symbolic data transport and meaning-level interoperability</li>
                                    <li>Provides non-hallucinated, traceable inputs</li>
                                    <li>Encodes logic-ready concepts for downstream reasoning</li>
                                  </ul>
                                </div>,
                              )
                            }
                            className="text-revolut-blue-400 hover:text-revolut-blue-300 text-xs mt-1"
                          >
                            Learn more
                          </button>
                        </div>
                      </div>

                      {/* Cortex */}
                      <div className="bg-revolut-purple-500/30 px-3 py-2 rounded text-xs">
                        <div className="text-center mb-1 text-white font-bold text-xl">B</div>
                        <span className="font-bold text-base text-revolut-purple-400 block text-center">Cortex</span>
                        <span className="text-xs text-white/80 block text-center">(Neural Network)</span>
                        <p className="mt-1 text-white/80 text-center">Meaning-first processing and data computing.</p>
                        <div className="text-center">
                          <button
                            onClick={() =>
                              openPopup(
                                "Cortex (Neural Network)",
                                <div className="space-y-4">
                                  <p>
                                    The Cortex is the meaning-first computation engine of the UOR framework — a
                                    symbolic, multi-layer resolver that transforms Canonical inputs into Codex
                                    realizations. Operating across the Primal Domain Stack, it encodes structure, embeds
                                    logic, and resolves meaning in a deterministic and inspectable circuit.
                                  </p>
                                  <p>
                                    <strong>AI/ML analogy:</strong> Like the inference phase of a neural model — but
                                    fully symbolic, reversible, and geometry-aware.
                                  </p>
                                  <p>
                                    <strong>How it works:</strong> The Cortex transforms Handles through three phases:
                                    encoding (structure assignment), embedding (logic + geometry), and decoding
                                    (realization). Each phase preserves interpretability and causal traceability.
                                  </p>
                                  <p>
                                    <strong>Key advantages:</strong>
                                  </p>
                                  <ul className="list-disc pl-5 space-y-1">
                                    <li>Transparent, deterministic computation — no black boxes</li>
                                    <li>Supports symbolic, logical, and geometric reasoning</li>
                                    <li>Produces consistent and debuggable outputs</li>
                                  </ul>
                                </div>,
                              )
                            }
                            className="text-revolut-purple-400 hover:text-revolut-purple-300 text-xs mt-1"
                          >
                            Learn more
                          </button>
                        </div>
                      </div>

                      {/* Codex */}
                      <div className="bg-revolut-pink-500/30 px-3 py-2 rounded text-xs">
                        <div className="text-center mb-1 text-white font-bold text-xl">C</div>
                        <span className="font-bold text-base text-revolut-pink-400 block text-center">Codex</span>
                        <span className="text-xs text-white/80 block text-center">(Memory)</span>
                        <p className="mt-1 text-white/80 text-center">
                          Deterministic structured data storage and decoding.
                        </p>
                        <div className="text-center">
                          <button
                            onClick={() =>
                              openPopup(
                                "Codex (Memory)",
                                <div className="space-y-4">
                                  <p>
                                    The Codex is UOR's deterministic memory layer — a structured container system where
                                    outputs of reasoning are stored, resolved, and decoded. Each Codex entry is a
                                    Container: a finalized object with embedded meaning, metadata, and provenance that
                                    reflects how it was derived.
                                  </p>
                                  <p>
                                    <strong>AI/ML analogy:</strong> Like a model output with an audit log and embedded
                                    semantics — but natively structured and internally verifiable.
                                  </p>
                                  <p>
                                    <strong>How it works:</strong> As data flows through the Cortex, its final
                                    realization is encoded in a Container and stored in the Codex. This includes not
                                    just the result, but the full transformation path from the Canon.
                                  </p>
                                  <p>
                                    <strong>Key advantages:</strong>
                                  </p>
                                  <ul className="list-disc pl-5 space-y-1">
                                    <li>Stores meaning-rich, interpretable data structures</li>
                                    <li>Every output includes logical context and transformation history</li>
                                    <li>Ideal for auditability, reuse, and stable memory across systems</li>
                                  </ul>
                                </div>,
                              )
                            }
                            className="text-revolut-pink-400 hover:text-revolut-pink-300 text-xs mt-1"
                          >
                            Learn more
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Connecting Arrow from UOR Framework to Products - Desktop Only */}
            <div className="hidden md:flex justify-center items-center my-4">
              <div className="h-12 w-0.5 bg-gradient-to-b from-revolut-blue-500/50 to-revolut-purple-500/50"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Build - Prime SDK */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-revolut-blue-500/10 to-transparent rounded-xl"></div>
                <div className="relative bg-black-300 rounded-xl border border-white/10 p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center">
                      <div className="bg-gradient-to-br from-revolut-blue-500 to-revolut-blue-700 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        1
                      </div>
                      <div className="ml-3">
                        <h3 className="text-xl font-bold text-white">Prime SDK</h3>
                        <span className="text-base text-white/80">(Build)</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-revolut-blue-500 to-revolut-purple-500 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-white"
                      >
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                      </svg>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm mt-4 mb-4">
                    Developers use Prime SDK to create UOR-native applications with deterministic behavior and full
                    source traceability.
                  </p>
                  <Link href="/prime-sdk" className="text-revolut-blue-400 hover:text-revolut-blue-300 text-sm mt-auto">
                    Learn more about Prime SDK →
                  </Link>
                </div>
              </div>

              {/* Ship - Prime AppStore */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-revolut-purple-500/10 to-transparent rounded-xl"></div>
                <div className="relative bg-black-300 rounded-xl border border-white/10 p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center">
                      <div className="bg-gradient-to-br from-revolut-purple-500 to-revolut-purple-700 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        2
                      </div>
                      <div className="ml-3">
                        <h3 className="text-xl font-bold text-white">Prime AppStore</h3>
                        <span className="text-base text-white/80">(Ship)</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-revolut-purple-500 to-revolut-pink-500 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-white"
                      >
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      </svg>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm mt-4 mb-4">
                    Applications are packaged and distributed through Prime AppStore, maintaining their semantic
                    integrity and source transparency.
                  </p>
                  <Link
                    href="/prime-appstore"
                    className="text-revolut-purple-400 hover:text-revolut-purple-300 text-sm mt-auto"
                  >
                    Learn more about Prime AppStore →
                  </Link>
                </div>
              </div>

              {/* Run - PrimeOS */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-revolut-pink-500/10 to-transparent rounded-xl"></div>
                <div className="relative bg-black-300 rounded-xl border border-white/10 p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center">
                      <div className="bg-gradient-to-br from-revolut-pink-500 to-revolut-pink-700 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        3
                      </div>
                      <div className="ml-3">
                        <h3 className="text-xl font-bold text-white">PrimeOS</h3>
                        <span className="text-base text-white/80">(Run)</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-revolut-pink-500 to-revolut-blue-500 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-white"
                      >
                        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                        <line x1="6" y1="6" x2="6.01" y2="6"></line>
                        <line x1="6" y1="18" x2="6.01" y2="18"></line>
                      </svg>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm mt-4 mb-4">
                    PrimeOS executes applications with guaranteed deterministic behavior, maintaining semantic context
                    throughout the computation lifecycle.
                  </p>
                  <Link href="/prime-os" className="text-revolut-pink-400 hover:text-revolut-pink-300 text-sm mt-auto">
                    Learn more about PrimeOS →
                  </Link>
                </div>
              </div>
            </div>

            {/* Connecting Arrows Between Cards - Desktop Only */}
            <div className="hidden md:flex justify-between items-center mt-4 px-16">
              <div className="w-1/3 h-0.5 bg-gradient-to-r from-revolut-blue-500/50 to-revolut-purple-500/50"></div>
              <div className="w-1/3 h-0.5 bg-gradient-to-r from-revolut-purple-500/50 to-revolut-pink-500/50"></div>
            </div>
          </div>

          {/* Add a link to the Product Overview page */}
          <div className="text-center mt-8">
            <Button variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/10" asChild>
              <Link href="/product">Explore our full product ecosystem</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 3. Industry Applications Section */}
      <section className="space-section px-4 sm:px-6 bg-black-100 relative overflow-hidden cv-auto">
        <div className="absolute inset-0 bg-gradient-to-br from-revolut-blue-500/5 via-revolut-purple-500/5 to-revolut-pink-500/5"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal width="100%">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                How UOR <span className="gradient-text">Transforms Industries</span>
              </h2>
              <p className="text-white max-w-2xl mx-auto">
                UOR's semantic architecture provides powerful solutions to complex problems across diverse industries.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <LazyLoad
              component={() => import("@/components/industry-applications")}
              fallback={<div className="h-96 w-full bg-black-200 animate-pulse rounded-xl"></div>}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* 5. Call to Action Section */}
      <section className="space-section px-4 sm:px-6 relative text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-bg-animated opacity-90"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <GradientBackground blur={100} />

        <ParallaxSection direction="up" speed={0.2} className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal width="100%">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to <span className="gradient-text">Build Your Future?</span> Today.
            </h2>
          </ScrollReveal>
          <ScrollReveal width="100%" delay={0.2}>
            <p className="subtitle-text mb-8 max-w-2xl mx-auto text-white">
              Join us in creating an internet where data has context, people have ownership, and systems work together
              seamlessly.
            </p>
          </ScrollReveal>
          <ScrollReveal width="100%" delay={0.4}>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Button
                className="rounded-full px-6 py-4 text-base font-medium bg-white text-black hover:bg-white/90 revolut-button w-full sm:w-auto"
                asChild
              >
                <Link href="https://discord.gg/ZwuZaNyuve" target="_blank" rel="noopener noreferrer">
                  Join the Community
                </Link>
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-6 py-4 text-base font-medium border-white text-white bg-transparent hover:bg-white/10 revolut-button w-full sm:w-auto mt-2 sm:mt-0"
                asChild
              >
                <Link href="https://github.com/UOR-Foundation" target="_blank" rel="noopener noreferrer">
                  Explore GitHub
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </ParallaxSection>
      </section>

      {/* 6. Footer */}
      <footer className="w-full py-10 sm:py-16 px-4 sm:px-6 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-md overflow-hidden">
                <Image
                  src="/uor_god.svg"
                  alt="UOR Foundation Logo"
                  width={32}
                  height={32}
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
              <span className="font-medium text-lg">UOR Foundation</span>
            </div>
            <p className="text-white text-sm">
              Building the infrastructure for an internet where data is sovereign, semantic, and empowering.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-3 text-white">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/product" className="hover:text-white transition-colors">
                  Product
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-white transition-colors">
                  Insights
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Community</h3>
            <ul className="space-y-3 text-white">
              <li>
                <Link
                  href="https://github.com/UOR-Foundation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://discord.gg/ZwuZaNyuve"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Discord
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Twitter
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Legal</h3>
            <ul className="space-y-3 text-white">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 text-center text-sm text-white">
          <p>© 2025 UOR Foundation. All rights reserved.</p>
        </div>
      </footer>
      <PrefetchLinks paths={["/about", "/product", "/insights", "/prime-sdk", "/prime-appstore", "/prime-os"]} />

      {/* Popup Overlay */}
      {popupContent.isOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-black-300 border border-white/20 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <h3 className="text-xl font-bold">{popupContent.title}</h3>
              <button onClick={closePopup} className="p-1 rounded-full hover:bg-white/10 transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6 text-white/90">{popupContent.content}</div>
          </div>
        </div>
      )}
    </div>
  )
}
