"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import ParticleBackground from "@/components/particle-background"
import EnhancedHeader from "@/components/enhanced-header"
import ScrollReveal from "@/components/scroll-reveal"
import StaggerReveal from "@/components/stagger-reveal"
import GradientBackground from "@/components/gradient-background"
import AnimatedText from "@/components/animated-text"
import Card3D from "@/components/card-3d"
import ParallaxSection from "@/components/parallax-section"
import { useEffect } from "react"
import { Code } from "lucide-react"

// Add a reusable section separator component
const SectionSeparator = () => (
  <div className="w-full max-w-md mx-auto py-8">
    <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
  </div>
)

export default function ProductPage() {
  // Ensure the page loads at the top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Enhanced Header */}
      <EnhancedHeader />

      {/* Hero Section */}
      <section className="relative text-white pt-32 pb-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-revolut-blue-500 via-revolut-purple-500 to-revolut-pink-500 opacity-80"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <GradientBackground blur={80} />
        <ParticleBackground />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal width="100%">
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold mb-2 high-contrast-text">Our</div>
              <div className="text-4xl md:text-6xl font-bold mb-6 high-contrast-text gradient-text">Product</div>
            </div>
          </ScrollReveal>
          <ScrollReveal width="100%" delay={0.2}>
            <p className="subtitle-text max-w-2xl mx-auto text-white high-contrast-text text-center">
              Building the semantic layer of the internet with PrimeOS and the UOR Framework
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow py-16 px-4 sm:px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          {/* SIMPLIFIED Product Ecosystem Overview Section */}
          <section className="space-content mb-20">
            <ScrollReveal width="100%">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">Product Ecosystem</h2>
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
                        </div>

                        {/* Cortex */}
                        <div className="bg-revolut-purple-500/30 px-3 py-2 rounded text-xs">
                          <div className="text-center mb-1 text-white font-bold text-xl">B</div>
                          <span className="font-bold text-base text-revolut-purple-400 block text-center">Cortex</span>
                          <span className="text-xs text-white/80 block text-center">(Neural Network)</span>
                          <p className="mt-1 text-white/80 text-center">Meaning-first processing and data computing.</p>
                        </div>

                        {/* Codex */}
                        <div className="bg-revolut-pink-500/30 px-3 py-2 rounded text-xs">
                          <div className="text-center mb-1 text-white font-bold text-xl">C</div>
                          <span className="font-bold text-base text-revolut-pink-400 block text-center">Codex</span>
                          <span className="text-xs text-white/80 block text-center">(Memory)</span>
                          <p className="mt-1 text-white/80 text-center">
                            Deterministic structured data storage and decoding.
                          </p>
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
          </section>

          <SectionSeparator />

          {/* UOR Framework Section */}
          <section className="space-content mb-20">
            <ScrollReveal width="100%">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">UOR Framework</h2>
              <p className="text-white/80 text-center max-w-3xl mx-auto mb-12">The Foundation of Semantic Computing</p>
            </ScrollReveal>

            <div className="mb-12">
              <p className="text-lg mb-8 text-white text-center max-w-3xl mx-auto">
                UOR treats every application as a structured logic circuit with three essential components that work
                together to create deterministic, traceable, and meaning-rich applications.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-12">
                {/* Canon Component */}
                <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black-200 transition-all duration-300 hover:border-revolut-blue-500/50 group h-full">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-revolut-blue-500/10 to-transparent opacity-50"></div>
                  <div className="p-6 relative z-10 h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-br from-revolut-blue-500 to-revolut-blue-700 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                        <span className="text-white font-bold text-2xl">A</span>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-xl font-bold text-revolut-blue-400">Canon</h3>
                        <span className="text-sm text-white/70">(Knowledge Graph)</span>
                      </div>
                    </div>

                    <p className="text-white text-sm mb-4">
                      The Canon is the semantic reference system of the UOR framework — a structured, symbolic layer
                      that enables the transportation of meaning across systems.
                    </p>

                    <div className="bg-black/30 rounded-lg p-3 mb-4 border border-white/5 mt-auto">
                      <h4 className="text-white font-medium mb-1 text-sm">AI/ML analogy:</h4>
                      <p className="text-white/80 text-xs">
                        Like an ontology powering symbolic reasoning or the curated document base in RAG — but
                        internally structured, logically coherent, and meaning-native.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-medium mb-1 text-sm">Key advantages:</h4>
                      <ul className="list-disc pl-4 space-y-1 text-white/80 text-xs">
                        <li>Enables symbolic data transport and meaning-level interoperability</li>
                        <li>Provides non-hallucinated, traceable inputs</li>
                        <li>Encodes logic-ready concepts for downstream reasoning</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Cortex Component */}
                <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black-200 transition-all duration-300 hover:border-revolut-purple-500/50 group h-full">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-revolut-purple-500/10 to-transparent opacity-50"></div>
                  <div className="p-6 relative z-10 h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-br from-revolut-purple-500 to-revolut-purple-700 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                        <span className="text-white font-bold text-2xl">B</span>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-xl font-bold text-revolut-purple-400">Cortex</h3>
                        <span className="text-sm text-white/70">(Neural Network)</span>
                      </div>
                    </div>

                    <p className="text-white text-sm mb-4">
                      The Cortex is the meaning-first computation engine of the UOR framework — a symbolic, multi-layer
                      resolver that transforms Canonical inputs into Codex realizations.
                    </p>

                    <div className="bg-black/30 rounded-lg p-3 mb-4 border border-white/5 mt-auto">
                      <h4 className="text-white font-medium mb-1 text-sm">AI/ML analogy:</h4>
                      <p className="text-white/80 text-xs">
                        Like the inference phase of a neural model — but fully symbolic, reversible, and geometry-aware.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-medium mb-1 text-sm">Key advantages:</h4>
                      <ul className="list-disc pl-4 space-y-1 text-white/80 text-xs">
                        <li>Transparent, deterministic computation — no black boxes</li>
                        <li>Supports symbolic, logical, and geometric reasoning</li>
                        <li>Produces consistent and debuggable outputs</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Codex Component */}
                <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black-200 transition-all duration-300 hover:border-revolut-pink-500/50 group h-full">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-revolut-pink-500/10 to-transparent opacity-50"></div>
                  <div className="p-6 relative z-10 h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-br from-revolut-pink-500 to-revolut-pink-700 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                        <span className="text-white font-bold text-2xl">C</span>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-xl font-bold text-revolut-pink-400">Codex</h3>
                        <span className="text-sm text-white/70">(Memory)</span>
                      </div>
                    </div>

                    <p className="text-white text-sm mb-4">
                      The Codex is UOR's deterministic memory layer — a structured container system where outputs of
                      reasoning are stored, resolved, and decoded with embedded meaning and provenance.
                    </p>

                    <div className="bg-black/30 rounded-lg p-3 mb-4 border border-white/5 mt-auto">
                      <h4 className="text-white font-medium mb-1 text-sm">AI/ML analogy:</h4>
                      <p className="text-white/80 text-xs">
                        Like a model output with an audit log and embedded semantics — but natively structured and
                        internally verifiable.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-medium mb-1 text-sm">Key advantages:</h4>
                      <ul className="list-disc pl-4 space-y-1 text-white/80 text-xs">
                        <li>Stores meaning-rich, interpretable data structures</li>
                        <li>Every output includes logical context and transformation history</li>
                        <li>Ideal for auditability, reuse, and stable memory across systems</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <p className="text-lg text-white max-w-3xl mx-auto">
                  All UOR-powered apps follow a 12-layer model that ensures every step is well-defined, auditable, and
                  deterministic.
                </p>
              </div>
            </div>
          </section>

          <SectionSeparator />

          {/* Prime SDK Section */}
          <section className="space-content mb-20">
            <ScrollReveal width="100%">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">Prime SDK</h2>
              <p className="text-white/80 text-center max-w-3xl mx-auto mb-12">
                <span className="text-revolut-blue-500 font-bold">BUILD</span> - Developer Toolkit for Semantic
                Applications
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <ParallaxSection direction="right" speed={0.1}>
                <div className="relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-revolut-blue-500 via-revolut-purple-500 to-revolut-blue-500 opacity-20 blur-3xl"></div>
                  <Card3D className="bg-black-200 p-8 rounded-2xl border border-white/10 relative z-10">
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-revolut-blue-500 to-revolut-purple-500 flex items-center justify-center">
                        <Code className="h-12 w-12 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-center text-white">Prime SDK</h3>
                    <p className="text-white text-center mb-4">Complete toolkit for building UOR-native applications</p>
                    <div className="flex justify-center mt-4">
                      <Button variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/10">
                        Coming Soon
                      </Button>
                    </div>
                  </Card3D>
                </div>
              </ParallaxSection>

              <div>
                <StaggerReveal>
                  <p className="text-lg mb-4 text-white">
                    Prime SDK is a developer toolkit for creating logic-first applications that:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-lg text-white mb-6">
                    <li>Define Canon inputs (data, prompts, proofs, models)</li>
                    <li>Transform inputs using charts and logic circuits</li>
                    <li>Package everything into portable, self-contained Prime Containers</li>
                  </ul>
                  <p className="text-lg mb-4 text-white">
                    Build applications that always behave the same way — with no hallucinations, no ambiguity.
                  </p>
                </StaggerReveal>
              </div>
            </div>
          </section>

          <SectionSeparator />

          {/* Prime AppStore Section */}
          <section className="space-content mb-20">
            <ScrollReveal width="100%">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">Prime AppStore</h2>
              <p className="text-white/80 text-center max-w-3xl mx-auto mb-12">
                <span className="text-revolut-purple-500 font-bold">SHIP</span> - Discover, Deploy & Share UOR
                Applications
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <StaggerReveal>
                  <p className="text-lg mb-4 text-white">
                    The Prime AppStore is where UOR-native applications are shared and discovered. Every application is:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-lg text-white mb-6">
                    <li>
                      <strong>Deterministic:</strong> Same inputs produce the same outputs
                    </li>
                    <li>
                      <strong>Traceable:</strong> See exactly what went into the app and how it works
                    </li>
                    <li>
                      <strong>Composable:</strong> Apps can reference, embed, or extend one another
                    </li>
                    <li>
                      <strong>Verifiable:</strong> Every transformation and logic rule is inspectable
                    </li>
                  </ul>
                </StaggerReveal>
              </div>

              <ParallaxSection direction="left" speed={0.1}>
                <div className="relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-revolut-purple-500 via-revolut-pink-500 to-revolut-purple-500 opacity-20 blur-3xl"></div>
                  <Card3D className="bg-black-200 p-8 rounded-2xl border border-white/10 relative z-10">
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-revolut-purple-500 to-revolut-pink-500 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="48"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                          <line x1="8" y1="21" x2="16" y2="21"></line>
                          <line x1="12" y1="17" x2="12" y2="21"></line>
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-center text-white">Prime AppStore</h3>
                    <p className="text-white text-center mb-4">The distribution hub for UOR-native software</p>
                    <div className="flex justify-center mt-4">
                      <Button variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/10">
                        Coming Soon
                      </Button>
                    </div>
                  </Card3D>
                </div>
              </ParallaxSection>
            </div>
          </section>

          <SectionSeparator />

          {/* PrimeOS Section */}
          <section className="space-content mb-20">
            <ScrollReveal width="100%">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">PrimeOS</h2>
              <p className="text-white/80 text-center max-w-3xl mx-auto mb-12">
                <span className="text-revolut-pink-500 font-bold">RUN</span> - Trust-Minimized Runtime for Semantic
                Applications
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <ParallaxSection direction="right" speed={0.1}>
                <div className="relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-revolut-pink-500 via-revolut-blue-500 to-revolut-pink-500 opacity-20 blur-3xl"></div>
                  <Card3D className="bg-black-200 p-8 rounded-2xl border border-white/10 relative z-10">
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-revolut-pink-500 to-revolut-blue-500 flex items-center justify-center">
                        <Image
                          src="/uor-foundation-logo-enclosed.svg"
                          alt="PrimeOS Logo"
                          width="48"
                          height="48"
                          className="w-12 h-12"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-center text-white">PrimeOS</h3>
                    <p className="text-white text-center mb-4">
                      A trust-minimized runtime for context-aware applications
                    </p>
                    <div className="flex justify-center mt-4">
                      <Button variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/10">
                        Coming Soon
                      </Button>
                    </div>
                  </Card3D>
                </div>
              </ParallaxSection>

              <div>
                <StaggerReveal>
                  <p className="text-lg mb-4 text-white">
                    PrimeOS is the runtime environment that executes UOR-native applications with:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-lg text-white mb-6">
                    <li>A lightweight client/server runtime</li>
                    <li>A deterministic logic engine for Prime Containers</li>
                    <li>Support for local, remote, or distributed execution</li>
                    <li>APIs and CLI tools for integration with broader systems</li>
                  </ul>
                  <p className="text-lg text-white">
                    No matter where your app runs, PrimeOS guarantees consistent logic, results, and structure.
                  </p>
                </StaggerReveal>
              </div>
            </div>
          </section>

          <SectionSeparator />

          {/* Call to Action Section */}
          <section className="space-section px-4 sm:px-6 relative text-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-revolut-blue-500 via-revolut-purple-500 to-revolut-pink-500 opacity-80"></div>
            <div className="absolute inset-0 bg-black/50"></div>
            <GradientBackground blur={80} />

            <div className="max-w-4xl mx-auto text-center relative z-10">
              <ScrollReveal width="100%">
                <AnimatedText
                  text="A Unified Stack for Structured Intelligence"
                  className="text-3xl md:text-5xl font-bold mb-6"
                  type="words"
                  animation="slide-up"
                />
              </ScrollReveal>
              <ScrollReveal width="100%" delay={0.2}>
                <p className="subtitle-text mb-8 max-w-3xl mx-auto text-white">
                  Prime SDK, Prime AppStore, and PrimeOS form an integrated ecosystem powered by UOR — giving you a
                  clean, powerful way to build, ship, and run applications that are logic-first, source-resolved, and
                  composable from day one.
                </p>
              </ScrollReveal>
              <ScrollReveal width="100%" delay={0.4}>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    className="rounded-full px-6 py-5 sm:px-8 sm:py-6 text-base font-medium bg-white text-black hover:bg-white/90 revolut-button"
                    asChild
                  >
                    <Link href="https://discord.gg/ZwuZaNyuve" target="_blank" rel="noopener noreferrer">
                      Join the Community
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full px-6 py-5 sm:px-8 sm:py-6 text-base font-medium border-white text-white bg-transparent hover:bg-white/10 revolut-button"
                    asChild
                  >
                    <Link href="https://github.com/UOR-Foundation" target="_blank" rel="noopener noreferrer">
                      Explore GitHub
                    </Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 sm:py-16 px-4 sm:px-6 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-md overflow-hidden">
                <Image src="/uor_god.svg" alt="UOR Foundation Logo" width={32} height={32} className="w-full h-full" />
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
    </div>
  )
}
