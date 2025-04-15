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
import { Code, Database, Layers, Terminal, GitBranch, Package } from "lucide-react"

export default function PrimeSDKPage() {
  // Ensure the page loads at the top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    // Handle and prevent wallet connection errors
    const handleError = (event) => {
      if (
        event.message &&
        (event.message.includes("wallet") || event.message.includes("provider") || event.message.includes("account"))
      ) {
        console.warn("Suppressed wallet connection error:", event.message)
        event.preventDefault()
        return true
      }
      return false
    }

    window.addEventListener("error", handleError)

    // Clean up
    return () => {
      window.removeEventListener("error", handleError)
    }
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
              <div className="text-4xl md:text-6xl font-bold mb-2 high-contrast-text">Prime SDK</div>
              <div className="text-4xl md:text-6xl font-bold mb-6 high-contrast-text gradient-text">
                Developer Toolkit
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal width="100%" delay={0.2}>
            <p className="subtitle-text max-w-2xl mx-auto text-white high-contrast-text text-center">
              Build, Deploy & Scale UOR-Native Applications with Mathematical Clarity and Source-Resolved Computation
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
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">Introducing Prime SDK</h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <ParallaxSection direction="right" speed={0.1}>
                <div className="relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-revolut-blue-500 via-revolut-purple-500 to-revolut-pink-500 opacity-20 blur-3xl"></div>
                  <Card3D className="bg-black-200 p-8 rounded-2xl border border-white/10 relative z-10">
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-revolut-blue-500 to-revolut-purple-500 flex items-center justify-center">
                        <Code className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-center text-white">Prime SDK</h3>
                    <p className="text-white text-center mb-4">
                      A complete build–deploy–ship workflow for UOR-native development
                    </p>
                    <div className="flex justify-center mt-4">
                      <Button variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/10">
                        Coming Soon
                      </Button>
                    </div>
                  </Card3D>
                </div>
              </ParallaxSection>

              <ParallaxSection direction="left" speed={0.1}>
                <StaggerReveal>
                  <p className="text-lg mb-6 text-white">
                    Prime SDK is the official development toolkit for building applications using the Universal Object
                    Resolution (UOR) framework. Designed to bring mathematical clarity and source-resolved computation
                    into mainstream development, Prime SDK is the foundation for a new class of deterministic,
                    composable software.
                  </p>
                  <p className="text-lg mb-6 text-white">
                    Like Docker revolutionized containerization, Prime SDK packages logic, protocols, and execution
                    environments into portable, verifiable units — but with one major difference: every output in Prime
                    SDK is mathematically grounded, traceable, and hallucination-free by design.
                  </p>
                </StaggerReveal>
              </ParallaxSection>
            </div>
          </section>

          {/* Why Prime SDK Section */}
          <section className="space-content mb-20">
            <ScrollReveal width="100%">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">Why Prime SDK</h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <ScrollReveal delay={0.1}>
                <Card3D className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <h3 className="text-xl font-bold mb-4 text-white">Eliminate hallucinations</h3>
                  <p className="text-white/80">
                    Every output is tied to a verifiable source and logic circuit, ensuring that your applications
                    produce accurate, trustworthy results.
                  </p>
                </Card3D>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <Card3D className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <h3 className="text-xl font-bold mb-4 text-white">Build with structure</h3>
                  <p className="text-white/80">
                    Define how inputs are interpreted, transformed, and resolved with mathematical precision and
                    semantic clarity.
                  </p>
                </Card3D>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <Card3D className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <h3 className="text-xl font-bold mb-4 text-white">Ship reproducible logic</h3>
                  <p className="text-white/80">
                    Package your applications as UOR containers with full auditability, ensuring consistent behavior
                    across environments.
                  </p>
                </Card3D>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <Card3D className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <h3 className="text-xl font-bold mb-4 text-white">Join the ecosystem</h3>
                  <p className="text-white/80">
                    Tap into a growing library of open, composable UOR-native applications and contribute to the future
                    of semantic computing.
                  </p>
                </Card3D>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.5}>
              <div className="bg-gradient-to-br from-revolut-blue-500/10 to-revolut-purple-500/10 rounded-2xl p-8 border border-white/10 text-center">
                <h3 className="text-2xl font-bold mb-4 text-white">More Than Just an SDK</h3>
                <p className="text-white/80 mb-6 max-w-3xl mx-auto">
                  Prime SDK is more than a development toolkit — it's a complete operating system for meaning. Whether
                  you're building AI, infrastructure, proofs, or protocols, Prime SDK gives you a rigorous,
                  deterministic platform to do it right.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="rounded-full px-6 py-3 text-base font-medium bg-white text-black hover:bg-white/90 revolut-button">
                    Get Started
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full px-6 py-3 text-base font-medium border-white text-white bg-transparent hover:bg-white/10 revolut-button"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* SDK Components Section */}
          <section className="space-content mb-20">
            <ScrollReveal width="100%">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">SDK Components</h2>
              <p className="text-white/80 text-center max-w-3xl mx-auto mb-12">
                A Developer Toolkit for Deterministic Logic
              </p>
            </ScrollReveal>

            <div className="bg-black-200 rounded-2xl p-8 border border-white/10 mb-16">
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="bg-gradient-to-r from-revolut-blue-500 to-revolut-purple-500 text-white rounded-lg p-6 text-center h-full flex flex-col justify-center">
                      <h3 className="font-bold text-white text-xl mb-2">Math Engine</h3>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-white mb-4">
                      Implements the UOR Primal Domain Stack — a 12-layer system for encoding, transforming, and
                      resolving logic. Each input passes through source identification (Canon), logical resolution
                      (Cortex), and structural output (Codex) using deterministic charts and mappings.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-white/80">
                      <li>Deterministic transformation of inputs through the UOR framework</li>
                      <li>Mathematical verification at each step of computation</li>
                      <li>Source-resolved processing that maintains provenance</li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="bg-gradient-to-r from-revolut-purple-500 to-revolut-pink-500 text-white rounded-lg p-6 text-center h-full flex flex-col justify-center">
                      <h3 className="font-bold text-white text-xl mb-2">Protocol Layer</h3>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-white mb-4">
                      Defines interaction, resolution, and embedding rules between UOR objects. Includes core standards
                      for identity, coherence, versioning, and transformation. Think of it as a protocol layer for logic
                      and meaning, not just data.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-white/80">
                      <li>Standardized interfaces for UOR object interaction</li>
                      <li>Coherence verification across distributed systems</li>
                      <li>Semantic versioning that preserves meaning across updates</li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="bg-gradient-to-r from-revolut-pink-500 to-revolut-blue-500 text-white rounded-lg p-6 text-center h-full flex flex-col justify-center">
                      <h3 className="font-bold text-white text-xl mb-2">Client/Server Runtime</h3>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-white mb-4">
                      Run your UOR apps anywhere — locally or across distributed networks. The runtime includes a UOR
                      virtual machine, container manager, and a deterministic execution environment that guarantees
                      every app behaves the same, every time.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-white/80">
                      <li>Consistent execution across different environments</li>
                      <li>Containerized UOR applications with full portability</li>
                      <li>Distributed computation with maintained semantic integrity</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Developer Tools Section */}
          <section className="space-content mb-20">
            <ScrollReveal width="100%">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">Developer Tools</h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <ScrollReveal delay={0.1}>
                <Card3D className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <div className="bg-gradient-to-br from-revolut-blue-500 to-revolut-blue-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Terminal className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Command Line Interface</h3>
                  <p className="text-white/80">
                    Powerful CLI tools for creating, building, testing, and deploying UOR applications. Streamline your
                    development workflow with intuitive commands and automated processes.
                  </p>
                </Card3D>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <Card3D className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <div className="bg-gradient-to-br from-revolut-purple-500 to-revolut-purple-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Code className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">IDE Extensions</h3>
                  <p className="text-white/80">
                    Enhance your development experience with IDE extensions for VS Code, IntelliJ, and more. Get syntax
                    highlighting, code completion, and semantic validation for UOR applications.
                  </p>
                </Card3D>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <Card3D className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <div className="bg-gradient-to-br from-revolut-pink-500 to-revolut-pink-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <GitBranch className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Version Control Integration</h3>
                  <p className="text-white/80">
                    Seamlessly integrate with Git and other version control systems. Track changes to your UOR
                    applications with semantic versioning that preserves meaning across updates.
                  </p>
                </Card3D>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <Card3D className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <div className="bg-gradient-to-br from-revolut-blue-500 to-revolut-pink-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Package className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Package Manager</h3>
                  <p className="text-white/80">
                    Discover, install, and manage UOR packages with a dedicated package manager. Share your own packages
                    with the community and leverage existing components in your applications.
                  </p>
                </Card3D>
              </ScrollReveal>

              <ScrollReveal delay={0.5}>
                <Card3D className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <div className="bg-gradient-to-br from-revolut-purple-500 to-revolut-blue-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Layers className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Testing Framework</h3>
                  <p className="text-white/80">
                    Comprehensive testing tools for validating UOR applications. Ensure semantic integrity, logical
                    coherence, and deterministic behavior with automated tests.
                  </p>
                </Card3D>
              </ScrollReveal>

              <ScrollReveal delay={0.6}>
                <Card3D className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <div className="bg-gradient-to-br from-revolut-pink-500 to-revolut-purple-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Database className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Semantic Data Store</h3>
                  <p className="text-white/80">
                    Store and retrieve data with preserved semantic context. The built-in data store maintains
                    relationships between data points and ensures coherence across your application.
                  </p>
                </Card3D>
              </ScrollReveal>
            </div>
          </section>

          {/* What You Can Build Section */}
          <section className="space-content mb-20">
            <ScrollReveal width="100%">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">What You Can Build</h2>
              <p className="text-white/80 text-center max-w-3xl mx-auto mb-12">
                Using Prime SDK, developers can build applications that rely on deep structure and clarity
              </p>
            </ScrollReveal>

            <div className="bg-black-200 rounded-2xl p-8 border border-white/10 mb-16">
              <div className="grid md:grid-cols-3 gap-6">
                <Card3D className="bg-black-300 p-6 rounded-xl border border-white/5 h-full">
                  <h4 className="font-bold text-white mb-2">Source-resolved AI agents</h4>
                  <p className="text-white/80">
                    Build AI systems that maintain full traceability to their knowledge sources, eliminating
                    hallucinations and ensuring factual accuracy.
                  </p>
                </Card3D>

                <Card3D className="bg-black-300 p-6 rounded-xl border border-white/5 h-full">
                  <h4 className="font-bold text-white mb-2">Trustless, auditable pipelines</h4>
                  <p className="text-white/80">
                    Create computational workflows where every step is verifiable and the entire process maintains
                    coherence from input to output.
                  </p>
                </Card3D>

                <Card3D className="bg-black-300 p-6 rounded-xl border border-white/5 h-full">
                  <h4 className="font-bold text-white mb-2">Scientific reasoning tools</h4>
                  <p className="text-white/80">
                    Develop applications for scientific research that can track proofs, maintain logical consistency,
                    and enable reproducible results.
                  </p>
                </Card3D>

                <Card3D className="bg-black-300 p-6 rounded-xl border border-white/5 h-full">
                  <h4 className="font-bold text-white mb-2">Modular governance systems</h4>
                  <p className="text-white/80">
                    Build on-chain and off-chain governance frameworks with transparent decision logic and verifiable
                    execution.
                  </p>
                </Card3D>

                <Card3D className="bg-black-300 p-6 rounded-xl border border-white/5 h-full">
                  <h4 className="font-bold text-white mb-2">UOR-native developer tools</h4>
                  <p className="text-white/80">
                    Create infrastructure applications that leverage UOR's semantic clarity to enable more powerful
                    development workflows.
                  </p>
                </Card3D>

                <Card3D className="bg-black-300 p-6 rounded-xl border border-white/5 h-full">
                  <h4 className="font-bold text-white mb-2">Semantic data applications</h4>
                  <p className="text-white/80">
                    Build applications that maintain context and meaning throughout the entire data lifecycle, from
                    collection to analysis.
                  </p>
                </Card3D>
              </div>
            </div>
          </section>

          {/* Documentation Section */}
          <section className="space-content mb-20">
            <ScrollReveal width="100%">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">Documentation</h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <StaggerReveal>
                  <h3 className="text-2xl font-bold mb-4 text-white">Comprehensive Resources</h3>
                  <p className="text-lg mb-6 text-white">
                    Prime SDK comes with extensive documentation to help you get started and master the framework. From
                    beginner tutorials to advanced guides, you'll find everything you need to build powerful UOR-native
                    applications.
                  </p>
                  <ul className="list-disc pl-5 space-y-3 text-lg text-white mb-6">
                    <li>
                      <strong className="text-white">Getting Started Guides:</strong> Step-by-step tutorials for
                      beginners
                    </li>
                    <li>
                      <strong className="text-white">API Reference:</strong> Detailed documentation for all SDK
                      components
                    </li>
                    <li>
                      <strong className="text-white">Example Projects:</strong> Real-world applications built with Prime
                      SDK
                    </li>
                    <li>
                      <strong className="text-white">Best Practices:</strong> Guidelines for building robust UOR
                      applications
                    </li>
                  </ul>
                </StaggerReveal>
              </div>

              <ParallaxSection direction="left" speed={0.1}>
                <div className="relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-revolut-purple-500 via-revolut-pink-500 to-revolut-blue-500 opacity-20 blur-3xl"></div>
                  <Card3D className="bg-black-200 p-8 rounded-2xl border border-white/10 relative z-10">
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-revolut-purple-500 to-revolut-pink-500 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"></path>
                          <path d="M8 7h6"></path>
                          <path d="M8 11h8"></path>
                          <path d="M8 15h5"></path>
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-center text-white">Documentation</h3>
                    <p className="text-white text-center mb-4">Comprehensive guides and references for Prime SDK</p>
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

          {/* Why Prime SDK Section */}
          {/* <section className="space-content mb-20">
            <ScrollReveal width="100%">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">Why Prime SDK</h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <ScrollReveal delay={0.1}>
                <Card3D className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <h3 className="text-xl font-bold mb-4 text-white">Eliminate hallucinations</h3>
                  <p className="text-white/80">
                    Every output is tied to a verifiable source and logic circuit, ensuring that your applications
                    produce accurate, trustworthy results.
                  </p>
                </Card3D>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <Card3D className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <h3 className="text-xl font-bold mb-4 text-white">Build with structure</h3>
                  <p className="text-white/80">
                    Define how inputs are interpreted, transformed, and resolved with mathematical precision and
                    semantic clarity.
                  </p>
                </Card3D>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <Card3D className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <h3 className="text-xl font-bold mb-4 text-white">Ship reproducible logic</h3>
                  <p className="text-white/80">
                    Package your applications as UOR containers with full auditability, ensuring consistent behavior
                    across environments.
                  </p>
                </Card3D>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <Card3D className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <h3 className="text-xl font-bold mb-4 text-white">Join the ecosystem</h3>
                  <p className="text-white/80">
                    Tap into a growing library of open, composable UOR-native applications and contribute to the future
                    of semantic computing.
                  </p>
                </Card3D>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.5}>
              <div className="bg-gradient-to-br from-revolut-blue-500/10 to-revolut-purple-500/10 rounded-2xl p-8 border border-white/10 text-center">
                <h3 className="text-2xl font-bold mb-4 text-white">More Than Just an SDK</h3>
                <p className="text-white/80 mb-6 max-w-3xl mx-auto">
                  Prime SDK is more than a development toolkit — it's a complete operating system for meaning. Whether
                  you're building AI, infrastructure, proofs, or protocols, Prime SDK gives you a rigorous,
                  deterministic platform to do it right.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="rounded-full px-6 py-3 text-base font-medium bg-white text-black hover:bg-white/90 revolut-button">
                    Get Started
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full px-6 py-3 text-base font-medium border-white text-white bg-transparent hover:bg-white/10 revolut-button"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </section> */}
        </div>
      </main>

      {/* CTA Section */}
      <section className="space-section px-4 sm:px-6 relative text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-revolut-blue-500 via-revolut-purple-500 to-revolut-pink-500 opacity-80"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <GradientBackground blur={80} />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal width="100%">
            <AnimatedText
              text="Ready to Build with Clarity?"
              className="text-3xl md:text-5xl font-bold mb-6"
              type="words"
              animation="slide-up"
            />
          </ScrollReveal>
          <ScrollReveal width="100%" delay={0.2}>
            <p className="subtitle-text mb-8 max-w-2xl mx-auto text-white">
              Join us in creating a world where software is deterministic, traceable, and built with mathematical
              precision.
            </p>
          </ScrollReveal>
          <ScrollReveal width="100%" delay={0.4}>
            <Button
              className="rounded-full px-6 py-5 sm:px-8 sm:py-6 text-base font-medium bg-white text-black hover:bg-white/90 revolut-button"
              asChild
            >
              <Link href="https://discord.gg/ZwuZaNyuve" target="_blank" rel="noopener noreferrer">
                Join the Community
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

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
