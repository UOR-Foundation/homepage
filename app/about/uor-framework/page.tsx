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
import Card3D from "@/components/card-3D"
import ParallaxSection from "@/components/parallax-section"
import { useEffect } from "react"
import { ArrowRight, Code, Package, Server, BookOpen, Database, Layers } from "lucide-react"

export default function UORFrameworkPage() {
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
              <div className="text-4xl md:text-6xl font-bold mb-2 high-contrast-text">The</div>
              <div className="text-4xl md:text-6xl font-bold mb-6 high-contrast-text gradient-text">UOR Framework</div>
            </div>
          </ScrollReveal>
          <ScrollReveal width="100%" delay={0.2}>
            <p className="subtitle-text max-w-2xl mx-auto text-white high-contrast-text text-center">
              A universal reference system for digital meaning and semantic computing
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow py-16 px-4 sm:px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          {/* Introduction Section */}
          <section className="space-content mb-20">
            <ScrollReveal width="100%">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">What is UOR?</h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <StaggerReveal>
                  <p className="text-lg mb-6 text-white">
                    UOR (Universal Object Reference) is a framework that creates a shared coordinate system for digital
                    artifacts, enabling semantic clarity and traceability across systems.
                  </p>
                  <p className="text-lg mb-6 text-white">
                    It extends the object-oriented programming paradigm to the entire universe, treating every
                    entity—whether digital or physical—as an object with properties, relationships, and behaviors.
                  </p>
                  <p className="text-lg mb-6 text-white">
                    UOR was first introduced in a{" "}
                    <Link
                      href="https://next.redhat.com/2022/07/13/the-uor-framework/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 underline"
                    >
                      pioneering article
                    </Link>{" "}
                    from Red Hat's Emerging Technologies blog, which laid the foundation for what would become the{" "}
                    <Link href="/about/uor-foundation" className="text-blue-400 hover:text-blue-300">
                      UOR Foundation
                    </Link>
                    .
                  </p>
                </StaggerReveal>
              </div>

              <ParallaxSection direction="left" speed={0.1}>
                <div className="relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-revolut-blue-500 via-revolut-purple-500 to-revolut-pink-500 opacity-20 blur-3xl"></div>
                  <Card3D className="bg-black-200 p-8 rounded-2xl border border-white/10 relative z-10">
                    <div className="flex items-center justify-center mb-6">
                      <Image
                        src="/uor-geometric-white.svg"
                        alt="UOR Framework"
                        width={200}
                        height={200}
                        className="w-full max-w-[250px] h-auto"
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-center text-white">Universal Object Reference</h3>
                    <p className="text-white text-center mb-4">The semantic foundation for all PrimeOS applications</p>
                  </Card3D>
                </div>
              </ParallaxSection>
            </div>
          </section>

          {/* Core Components Section */}
          <section className="space-content mb-20">
            <ScrollReveal width="100%">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">Core Components</h2>
              <p className="text-white/80 text-center max-w-3xl mx-auto mb-12">
                UOR treats every application as a structured logic circuit with three essential components that have
                direct parallels in modern AI/ML systems
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <ScrollReveal delay={0.1}>
                <Card3D className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <div className="bg-gradient-to-br from-revolut-blue-500 to-revolut-blue-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Canon</h3>
                  <p className="text-white/80">
                    The source — similar to RAG inputs or trusted documents in AI systems, but with a crucial
                    difference: Canon is not just a database but an ontological core of the system.
                  </p>
                  <p className="text-white/80 mt-2">
                    Unlike RAG systems that retrieve facts from external databases that the LLM doesn't deeply
                    understand, UOR's Canon is a native part of the system: an encoded, evolving library of concepts,
                    rules, and relationships that shape the reasoning process itself.
                  </p>
                </Card3D>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <Card3D className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <div className="bg-gradient-to-br from-revolut-purple-500 to-revolut-purple-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Layers className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Cortex</h3>
                  <p className="text-white/80">
                    The logic engine — analogous to LLMs like GPT-4 or Claude, but operates on structured reality
                    circuits rather than statistical correlations.
                  </p>
                  <p className="text-white/80 mt-2">
                    While AI systems mostly detect patterns in huge datasets, UOR's Cortex runs structured, recursive
                    circuits through layered meaning stacks (the Primal Domain Stack), embedding logic and geometry at
                    each level for deterministic, reproducible results.
                  </p>
                </Card3D>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <Card3D className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <div className="bg-gradient-to-br from-revolut-pink-500 to-revolut-pink-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Database className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Codex</h3>
                  <p className="text-white/80">
                    The output — similar to a structured output log in AI systems, but using Containers rather than
                    vectors or tokens.
                  </p>
                  <p className="text-white/80 mt-2">
                    Unlike AI outputs that are often represented as floating-point vectors (embeddings), UOR's Codex
                    uses structured Containers that are symbolic, interpretable, and verifiable by design, with complete
                    lineage information for tracing exactly how each conclusion was reached.
                  </p>
                </Card3D>
              </ScrollReveal>
            </div>
          </section>

          <section className="space-content mb-20">
            <ScrollReveal delay={0.4}>
              <div className="bg-gradient-to-br from-revolut-blue-500/10 to-revolut-purple-500/10 rounded-2xl p-8 border border-white/10 text-center">
                <h3 className="text-2xl font-bold mb-4 text-white">The 12-Layer Model</h3>
                <p className="text-white/80 mb-6 max-w-3xl mx-auto">
                  All UOR-powered applications follow a 12-layer model that ensures every step of computation is
                  well-defined, auditable, and deterministic. This layered approach enables semantic clarity and
                  traceability across systems.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    className="rounded-full px-6 py-3 text-base font-medium bg-white text-black hover:bg-white/90 revolut-button"
                    asChild
                  >
                    <Link
                      href="https://next.redhat.com/2022/07/13/the-uor-framework/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read the Original Paper
                    </Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </section>

          <section className="space-content mb-20">
            <ScrollReveal width="100%">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">
                UOR vs. Traditional AI/ML Frameworks
              </h2>
              <p className="text-white/80 text-center max-w-3xl mx-auto mb-12">
                UOR represents a fundamental paradigm shift from current AI approaches, focusing on meaning and
                structure rather than statistical patterns
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <ScrollReveal delay={0.1}>
                <div className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <h3 className="text-xl font-bold mb-4 text-white">Meaning-First, Not Model-First</h3>
                  <p className="text-white/80 mb-4">
                    Traditional AI starts with statistical models (like neural networks) and adds knowledge as a plugin
                    (e.g., RAG). UOR inverts this approach.
                  </p>
                  <p className="text-white/80">
                    UOR starts with structured meaning (the Canon), where knowledge is defined up front — the logic
                    engine operates on known, stable units rather than probabilistic approximations of meaning.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <h3 className="text-xl font-bold mb-4 text-white">Handles and Containers vs. Tokens and Vectors</h3>
                  <p className="text-white/80 mb-4">
                    AI/ML frameworks represent meaning with floating-point vectors (embeddings), often opaque and hard
                    to audit.
                  </p>
                  <p className="text-white/80">
                    UOR uses Handles (stable references) and Containers (structured outputs), which are symbolic,
                    interpretable, and verifiable by design, making every step of computation transparent.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <h3 className="text-xl font-bold mb-4 text-white">
                    Structured Reality Circuit vs. Statistical Correlation
                  </h3>
                  <p className="text-white/80 mb-4">
                    AI systems mostly detect patterns and correlations in huge datasets, leading to impressive but
                    sometimes unpredictable results.
                  </p>
                  <p className="text-white/80">
                    UOR systems run structured, recursive circuits through layered meaning stacks (the Primal Domain
                    Stack), embedding logic and geometry at each level for consistent, explainable outcomes.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <h3 className="text-xl font-bold mb-4 text-white">Coherence and Stability over Probability</h3>
                  <p className="text-white/80 mb-4">
                    ML models rely on probabilities and often produce inconsistent outputs across runs, making them
                    unsuitable for applications requiring absolute reliability.
                  </p>
                  <p className="text-white/80">
                    UOR circuits emphasize coherence norms and deterministic mappings, aiming for stable, reproducible
                    answers that can be verified and trusted in critical applications.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.5}>
                <div className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <h3 className="text-xl font-bold mb-4 text-white">End-to-End Semantic Traceability</h3>
                  <p className="text-white/80 mb-4">
                    In LLMs, tracing why the model said something is fuzzy and approximate, often requiring post-hoc
                    explanations that may not reflect the actual computation.
                  </p>
                  <p className="text-white/80">
                    In UOR, each step in the circuit — from input Handle to final Codex Container — is traceable and
                    grounded in a logic stack, enabling complete auditability of the reasoning process.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.6}>
                <div className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <h3 className="text-xl font-bold mb-4 text-white">Symbolic-Structural Fusion</h3>
                  <p className="text-white/80 mb-4">
                    Most ML models are black boxes: they learn weights but don't expose logic, making them difficult to
                    debug or improve systematically.
                  </p>
                  <p className="text-white/80">
                    UOR integrates symbolic reasoning (like a logic engine) with structured transformation layers,
                    enabling both computation and explanation in a unified framework that combines the best of
                    rule-based and learning-based approaches.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* UOR Framework Foundation Section */}
          <section className="space-content mb-20">
            <ScrollReveal width="100%">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">
                UOR Framework Foundation
              </h2>
              <p className="text-white/80 text-center max-w-3xl mx-auto mb-12">
                Our framework is built on three key technical pillars that form the foundation for all our products
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <ScrollReveal delay={0.1}>
                <Card3D className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <div className="bg-gradient-to-br from-revolut-blue-500 to-revolut-blue-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="M19 5h-7L8 9l-4 1-1 1 1 1 4 1 4 4h7a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"></path>
                      <path d="M13 5V3"></path>
                      <path d="M13 21v-2"></path>
                      <path d="M5 13H3"></path>
                      <path d="M21 13h-2"></path>
                      <path d="m19 5-7 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Math Package</h3>
                  <p className="text-white/80 mb-4">
                    A comprehensive mathematical foundation that enables deterministic computation, cryptographic
                    verification, and semantic reasoning across distributed systems.
                  </p>
                  <ul className="space-y-2 text-white/80 mb-4">
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-revolut-blue-500/20 flex items-center justify-center mr-2 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-revolut-blue-400"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Post-quantum cryptographic primitives</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-revolut-blue-500/20 flex items-center justify-center mr-2 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-revolut-blue-400"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Verifiable computation models</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-revolut-blue-500/20 flex items-center justify-center mr-2 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-revolut-blue-400"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Semantic graph algorithms</span>
                    </li>
                  </ul>
                  <Link
                    href="/about/uor-framework/math-package"
                    className="text-revolut-blue-400 hover:text-revolut-blue-300 flex items-center"
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Card3D>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <Card3D className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <div className="bg-gradient-to-br from-revolut-purple-500 to-revolut-purple-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="M12 22v-5"></path>
                      <path d="M9 8V2"></path>
                      <path d="M15 8V2"></path>
                      <path d="M12 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
                      <path d="M12 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
                      <path d="M12 20a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Data Protocols</h3>
                  <p className="text-white/80 mb-4">
                    Standardized data exchange formats and protocols that ensure semantic integrity, interoperability,
                    and sovereignty across all UOR-native applications.
                  </p>
                  <ul className="space-y-2 text-white/80 mb-4">
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-revolut-purple-500/20 flex items-center justify-center mr-2 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-revolut-purple-400"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Universal Object Reference format</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-revolut-purple-500/20 flex items-center justify-center mr-2 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-revolut-purple-400"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Semantic graph exchange protocols</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-revolut-purple-500/20 flex items-center justify-center mr-2 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-revolut-purple-400"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Data sovereignty mechanisms</span>
                    </li>
                  </ul>
                  <Link
                    href="/about/uor-framework/data-protocols"
                    className="text-revolut-purple-400 hover:text-revolut-purple-300 flex items-center"
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Card3D>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <Card3D className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <div className="bg-gradient-to-br from-revolut-pink-500 to-revolut-pink-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                      <line x1="6" y1="6" x2="6.01" y2="6"></line>
                      <line x1="6" y1="18" x2="6.01" y2="18"></line>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Client/Server</h3>
                  <p className="text-white/80 mb-4">
                    A distributed architecture that enables secure, verifiable communication between clients and servers
                    while maintaining data sovereignty and semantic integrity.
                  </p>
                  <ul className="space-y-2 text-white/80 mb-4">
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-revolut-pink-500/20 flex items-center justify-center mr-2 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-revolut-pink-400"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Trust-minimized communication</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-revolut-pink-500/20 flex items-center justify-center mr-2 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-revolut-pink-400"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Deterministic execution environment</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-revolut-pink-500/20 flex items-center justify-center mr-2 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-revolut-pink-400"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Peer-to-peer verification mechanisms</span>
                    </li>
                  </ul>
                  <Link
                    href="/about/uor-framework/client-server"
                    className="text-revolut-pink-400 hover:text-revolut-pink-300 flex items-center"
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Card3D>
              </ScrollReveal>
            </div>

            {/* Foundation to Products Diagram */}
            <ScrollReveal delay={0.4}>
              <div className="bg-gradient-to-br from-revolut-blue-500/10 to-revolut-purple-500/10 rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6 text-white text-center">From Foundation to Products</h3>

                <div className="relative">
                  {/* Foundation Layer */}
                  <div className="flex justify-center mb-12">
                    <div className="bg-black/40 border border-white/10 rounded-xl p-4 w-full max-w-4xl">
                      <h4 className="text-lg font-bold mb-3 text-white text-center">Foundation Layer</h4>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-revolut-blue-500/20 p-3 rounded-lg text-center">
                          <div className="flex justify-center mb-2">
                            <div className="w-8 h-8 rounded-full bg-revolut-blue-500/30 flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-white"
                              >
                                <path d="M19 5h-7L8 9l-4 1-1 1 1 1 4 1 4 4h7a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"></path>
                                <path d="M13 5V3"></path>
                                <path d="M13 21v-2"></path>
                                <path d="M5 13H3"></path>
                                <path d="M21 13h-2"></path>
                                <path d="m19 5-7 7"></path>
                              </svg>
                            </div>
                          </div>
                          <span className="text-sm font-medium text-white">Math Package</span>
                        </div>
                        <div className="bg-revolut-purple-500/20 p-3 rounded-lg text-center">
                          <div className="flex justify-center mb-2">
                            <div className="w-8 h-8 rounded-full bg-revolut-purple-500/30 flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-white"
                              >
                                <path d="M12 22v-5"></path>
                                <path d="M9 8V2"></path>
                                <path d="M15 8V2"></path>
                                <path d="M12 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
                                <path d="M12 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
                                <path d="M12 20a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
                              </svg>
                            </div>
                          </div>
                          <span className="text-sm font-medium text-white">Data Protocols</span>
                        </div>
                        <div className="bg-revolut-pink-500/20 p-3 rounded-lg text-center">
                          <div className="flex justify-center mb-2">
                            <div className="w-8 h-8 rounded-full bg-revolut-pink-500/30 flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-white"
                              >
                                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                                <line x1="6" y1="6" x2="6.01" y2="6"></line>
                                <line x1="6" y1="18" x2="6.01" y2="18"></line>
                              </svg>
                            </div>
                          </div>
                          <span className="text-sm font-medium text-white">Client/Server</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Connecting Lines */}
                  <div className="absolute top-[calc(100%-12px)] left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-white/20"></div>

                  {/* Products Layer */}
                  <div className="relative z-10">
                    <div className="bg-black/40 border border-white/10 rounded-xl p-4 w-full max-w-4xl mx-auto">
                      <h4 className="text-lg font-bold mb-3 text-white text-center">Product Layer</h4>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-revolut-blue-500/20 p-3 rounded-lg text-center">
                          <div className="flex justify-center mb-2">
                            <div className="w-8 h-8 rounded-full bg-revolut-blue-500/30 flex items-center justify-center">
                              <Code className="h-4 w-4 text-white" />
                            </div>
                          </div>
                          <span className="text-sm font-medium text-white">Prime SDK</span>
                          <p className="text-xs text-white/80 mt-1">BUILD</p>
                        </div>
                        <div className="bg-revolut-purple-500/20 p-3 rounded-lg text-center">
                          <div className="flex justify-center mb-2">
                            <div className="w-8 h-8 rounded-full bg-revolut-purple-500/30 flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
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
                          <span className="text-sm font-medium text-white">Prime AppStore</span>
                          <p className="text-xs text-white/80 mt-1">SHIP</p>
                        </div>
                        <div className="bg-revolut-pink-500/20 p-3 rounded-lg text-center">
                          <div className="flex justify-center mb-2">
                            <div className="w-8 h-8 rounded-full bg-revolut-pink-500/30 flex items-center justify-center">
                              <Server className="h-4 w-4 text-white" />
                            </div>
                          </div>
                          <span className="text-sm font-medium text-white">PrimeOS</span>
                          <p className="text-xs text-white/80 mt-1">RUN</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* Key Benefits Section */}
          <section className="space-content mb-20">
            <ScrollReveal width="100%">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">Key Benefits</h2>
              <p className="text-white/80 text-center max-w-3xl mx-auto mb-12">
                How UOR transforms the way we work with data and computation
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <ScrollReveal delay={0.1}>
                <div className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <h3 className="text-xl font-bold mb-4 text-white">Semantic Context</h3>
                  <p className="text-white/80 mb-4">
                    UOR preserves the meaning and context of data as it moves between systems, addressing the semantic
                    drift problem common in AI pipelines where information loses fidelity across processing stages.
                  </p>
                  <p className="text-white/80">
                    Unlike AI systems where meaning is approximated through statistical patterns, UOR's approach ensures
                    that semantic intent is preserved throughout the entire computation process, making it particularly
                    valuable for applications requiring high precision.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <h3 className="text-xl font-bold mb-4 text-white">Distributed Coherence</h3>
                  <p className="text-white/80 mb-4">
                    By providing a universal reference system, UOR enables disparate AI systems to maintain a coherent
                    understanding of shared objects, even in decentralized environments where traditional knowledge
                    graphs struggle.
                  </p>
                  <p className="text-white/80">
                    This makes it possible to build truly distributed AI applications that maintain semantic integrity
                    across nodes without requiring centralized coordination.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <h3 className="text-xl font-bold mb-4 text-white">Data Sovereignty</h3>
                  <p className="text-white/80 mb-4">
                    UOR supports true data ownership by allowing individuals and organizations to maintain control over
                    their data while still enabling secure, verifiable AI computation and inference.
                  </p>
                  <p className="text-white/80">
                    This shifts the paradigm from centralized AI training on pooled data to a model where computation
                    moves to the data, preserving privacy while enabling collaborative intelligence.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <h3 className="text-xl font-bold mb-4 text-white">Deterministic Computation</h3>
                  <p className="text-white/80 mb-4">
                    Unlike the stochastic nature of neural networks, UOR ensures that computations are deterministic and
                    reproducible, with every step traceable back to its inputs and transformation logic.
                  </p>
                  <p className="text-white/80">
                    This coherence-first approach addresses a fundamental limitation of current AI systems, enabling the
                    kind of reliability and verification that is essential for high-stakes applications in healthcare,
                    finance, and critical infrastructure.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* Applications Section */}
          <section className="space-content mb-20">
            <ScrollReveal width="100%">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">Applications</h2>
              <p className="text-white/80 text-center max-w-3xl mx-auto mb-12">
                The UOR Framework powers a range of products developed by the{" "}
                <Link href="/about/uor-foundation" className="text-blue-400 hover:text-blue-300">
                  UOR Foundation
                </Link>
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <ScrollReveal delay={0.1}>
                <Card3D className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <div className="bg-gradient-to-br from-revolut-blue-500 to-revolut-blue-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Code className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Prime SDK</h3>
                  <p className="text-white/80 mb-4">
                    A developer toolkit for building UOR-native applications with deterministic behavior and full source
                    traceability.
                  </p>
                  <Link
                    href="/prime-sdk"
                    className="text-revolut-blue-400 hover:text-revolut-blue-300 flex items-center"
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Card3D>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <Card3D className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <div className="bg-gradient-to-br from-revolut-purple-500 to-revolut-purple-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Package className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Prime AppStore</h3>
                  <p className="text-white/80 mb-4">
                    A distribution platform for UOR-native applications, ensuring semantic integrity and source
                    transparency.
                  </p>
                  <Link
                    href="/prime-appstore"
                    className="text-revolut-purple-400 hover:text-revolut-purple-300 flex items-center"
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Card3D>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <Card3D className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <div className="bg-gradient-to-br from-revolut-pink-500 to-revolut-pink-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Server className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">PrimeOS</h3>
                  <p className="text-white/80 mb-4">
                    A trust-minimized runtime environment for executing UOR-native applications with guaranteed
                    deterministic behavior.
                  </p>
                  <Link
                    href="/prime-os"
                    className="text-revolut-pink-400 hover:text-revolut-pink-300 flex items-center"
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Card3D>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.4}>
              <div className="text-center">
                <Button
                  className="rounded-full px-6 py-3 text-base font-medium bg-white text-black hover:bg-white/90 revolut-button"
                  asChild
                >
                  <Link href="/product">View All Products</Link>
                </Button>
              </div>
            </ScrollReveal>
          </section>

          {/* Call to Action Section */}
          <section className="space-section px-4 sm:px-6 relative text-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-revolut-blue-500 via-revolut-purple-500 to-revolut-pink-500 opacity-80"></div>
            <div className="absolute inset-0 bg-black/50"></div>
            <GradientBackground blur={80} />

            <div className="max-w-4xl mx-auto text-center relative z-10">
              <ScrollReveal width="100%">
                <AnimatedText
                  text="Build with Semantic Clarity"
                  className="text-3xl md:text-5xl font-bold mb-6"
                  type="words"
                  animation="slide-up"
                />
              </ScrollReveal>
              <ScrollReveal width="100%" delay={0.2}>
                <p className="subtitle-text mb-8 max-w-3xl mx-auto text-white">
                  Join us in creating a world where data has meaning, people have ownership, and systems work together
                  seamlessly.
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
                <Link href="/about/uor-foundation" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about/uor-framework" className="hover:text-white transition-colors">
                  UOR Framework
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
