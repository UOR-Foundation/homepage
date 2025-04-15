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
import {
  Server,
  Code,
  Package,
  Zap,
  Shield,
  Layers,
  Network,
  Cpu,
  GitMerge,
  Terminal,
  Database,
  Lock,
} from "lucide-react"

export default function PrimeOSPage() {
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
        <div className="absolute inset-0 bg-gradient-to-br from-revolut-pink-500 via-revolut-purple-500 to-revolut-blue-500 opacity-80"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <GradientBackground blur={80} />
        <ParticleBackground />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal width="100%">
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold mb-2 high-contrast-text">PrimeOS</div>
              <div className="text-4xl md:text-6xl font-bold mb-6 high-contrast-text gradient-text">
                Runtime Environment
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal width="100%" delay={0.2}>
            <p className="subtitle-text max-w-2xl mx-auto text-white high-contrast-text text-center">
              A trust-minimized execution environment for deterministic, source-resolved applications
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
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">What is PrimeOS?</h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <ParallaxSection direction="right" speed={0.1}>
                <div className="relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-revolut-pink-500 via-revolut-blue-500 to-revolut-pink-500 opacity-20 blur-3xl"></div>
                  <Card3D className="bg-black-200 p-8 rounded-2xl border border-white/10 relative z-10">
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-revolut-pink-500 to-revolut-blue-500 flex items-center justify-center">
                        <div className="bg-gradient-to-br from-revolut-pink-500 to-revolut-pink-700 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl">
                          3
                        </div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-center text-white">PrimeOS</h3>
                    <p className="text-white text-center mb-4">The runtime environment for UOR-native applications</p>
                  </Card3D>
                </div>
              </ParallaxSection>

              <div>
                <StaggerReveal>
                  <p className="text-lg mb-6 text-white">
                    PrimeOS is a trust-minimized runtime environment that executes applications built with the UOR
                    Framework. It's the final component in the Build → Ship → Run workflow, providing a consistent,
                    deterministic execution environment for applications created with Prime SDK and distributed through
                    Prime AppStore.
                  </p>
                  <p className="text-lg mb-6 text-white">
                    Unlike traditional runtime environments that focus solely on execution, PrimeOS maintains semantic
                    context throughout the entire computation lifecycle. This ensures that every operation is traceable,
                    verifiable, and produces consistent results regardless of where the application runs.
                  </p>
                </StaggerReveal>
              </div>
            </div>
          </section>

          {/* Build → Ship → Run Workflow Section */}
          <section className="space-content mb-20">
            <ScrollReveal width="100%">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">The Complete Workflow</h2>
              <p className="text-white/80 text-center max-w-3xl mx-auto mb-12">
                How PrimeOS fits into the Build → Ship → Run ecosystem
              </p>
            </ScrollReveal>

            <div className="bg-black-200 rounded-xl p-8 border border-white/10 mb-16">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Build - Prime SDK */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-revolut-blue-500/10 to-transparent rounded-xl"></div>
                  <div className="relative bg-black-300 rounded-xl border border-white/10 p-6 h-full flex flex-col">
                    <div className="bg-gradient-to-br from-revolut-blue-500 to-revolut-blue-700 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl">
                      1
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">BUILD</h3>
                    <h4 className="text-lg font-medium mb-4 text-white/90">Prime SDK</h4>
                    <div className="flex justify-center my-4">
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-revolut-blue-500 to-revolut-purple-500 flex items-center justify-center">
                        <Code className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <p className="text-white/80 text-sm mb-4">
                      Developers use Prime SDK to create UOR-native applications with deterministic behavior and full
                      source traceability.
                    </p>
                    <Link
                      href="/prime-sdk"
                      className="text-revolut-blue-400 hover:text-revolut-blue-300 text-sm mt-auto"
                    >
                      Learn more about Prime SDK →
                    </Link>
                  </div>
                </div>

                {/* Ship - Prime AppStore */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-revolut-purple-500/10 to-transparent rounded-xl"></div>
                  <div className="relative bg-black-300 rounded-xl border border-white/10 p-6 h-full flex flex-col">
                    <div className="bg-gradient-to-br from-revolut-purple-500 to-revolut-purple-700 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl">
                      2
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">SHIP</h3>
                    <h4 className="text-lg font-medium mb-4 text-white/90">Prime AppStore</h4>
                    <div className="flex justify-center my-4">
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-revolut-purple-500 to-revolut-pink-500 flex items-center justify-center">
                        <Package className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <p className="text-white/80 text-sm mb-4">
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
                    <div className="bg-gradient-to-br from-revolut-pink-500 to-revolut-pink-700 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl">
                      3
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">RUN</h3>
                    <h4 className="text-lg font-medium mb-4 text-white/90">PrimeOS</h4>
                    <div className="flex justify-center my-4">
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-revolut-pink-500 to-revolut-blue-500 flex items-center justify-center">
                        <Server className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <p className="text-white/80 text-sm mb-4">
                      PrimeOS executes applications with guaranteed deterministic behavior, maintaining semantic context
                      throughout the computation lifecycle.
                    </p>
                    <span className="text-revolut-pink-400 text-sm mt-auto font-bold">You are here</span>
                  </div>
                </div>
              </div>

              {/* Connecting Arrows Between Cards - Desktop Only */}
              <div className="hidden md:flex justify-between items-center mt-4 px-16">
                <div className="w-1/3 h-0.5 bg-gradient-to-r from-revolut-blue-500/50 to-revolut-purple-500/50"></div>
                <div className="w-1/3 h-0.5 bg-gradient-to-r from-revolut-purple-500/50 to-revolut-pink-500/50"></div>
              </div>
            </div>
          </section>

          {/* Key Features Section */}
          <section className="space-content mb-20">
            <ScrollReveal width="100%">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">Key Features</h2>
              <p className="text-white/80 text-center max-w-3xl mx-auto mb-12">
                What makes PrimeOS different from traditional runtime environments
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <ScrollReveal delay={0.1}>
                <Card3D className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <div className="bg-gradient-to-br from-revolut-pink-500 to-revolut-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Deterministic Execution</h3>
                  <p className="text-white/80">
                    Every application produces the same output from the same input, every time, regardless of where it
                    runs. No more "it works on my machine" problems.
                  </p>
                </Card3D>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <Card3D className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <div className="bg-gradient-to-br from-revolut-pink-500 to-revolut-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Trust-Minimized</h3>
                  <p className="text-white/80">
                    Applications run in a secure environment that minimizes the need for trust. Every operation is
                    verifiable and traceable back to its source.
                  </p>
                </Card3D>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <Card3D className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <div className="bg-gradient-to-br from-revolut-blue-500 to-revolut-pink-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Layers className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Semantic Context</h3>
                  <p className="text-white/80">
                    PrimeOS maintains the semantic context of data throughout the entire computation lifecycle, ensuring
                    that meaning is preserved at every step.
                  </p>
                </Card3D>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <Card3D className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <div className="bg-gradient-to-br from-revolut-purple-500 to-revolut-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Network className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Distributed Execution</h3>
                  <p className="text-white/80">
                    Run applications across distributed networks while maintaining coherence and consistency. Perfect
                    for edge computing and decentralized systems.
                  </p>
                </Card3D>
              </ScrollReveal>

              <ScrollReveal delay={0.5}>
                <Card3D className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <div className="bg-gradient-to-br from-revolut-blue-500 to-revolut-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Cpu className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">UOR Virtual Machine</h3>
                  <p className="text-white/80">
                    A lightweight virtual machine that executes UOR-native applications with mathematical precision and
                    full traceability.
                  </p>
                </Card3D>
              </ScrollReveal>

              <ScrollReveal delay={0.6}>
                <Card3D className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <div className="bg-gradient-to-br from-revolut-purple-500 to-revolut-pink-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <GitMerge className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Composable Runtime</h3>
                  <p className="text-white/80">
                    Applications can seamlessly interact with each other while maintaining their semantic integrity,
                    enabling powerful composition of logic and functionality.
                  </p>
                </Card3D>
              </ScrollReveal>
            </div>
          </section>

          {/* Architecture Section */}
          <section className="space-content mb-20">
            <ScrollReveal width="100%">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">Architecture</h2>
              <p className="text-white/80 text-center max-w-3xl mx-auto mb-12">
                How PrimeOS is structured to run UOR-native applications
              </p>
            </ScrollReveal>

            <div className="bg-black-200 rounded-xl p-8 border border-white/10 mb-16">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <h3 className="text-xl font-bold mb-4 text-white">Core Components</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-gradient-to-br from-revolut-pink-500 to-revolut-blue-500 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Terminal className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">UOR Runtime</h4>
                        <p className="text-white/70 text-sm">
                          Executes UOR-native applications with deterministic behavior
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-gradient-to-br from-revolut-purple-500 to-revolut-pink-500 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Database className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">Semantic Store</h4>
                        <p className="text-white/70 text-sm">Maintains context and relationships between data points</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-gradient-to-br from-revolut-blue-500 to-revolut-purple-500 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Lock className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">Verification Engine</h4>
                        <p className="text-white/70 text-sm">Ensures integrity and coherence of all operations</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="md:col-span-2">
                  <div className="relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-revolut-pink-500/5 via-revolut-purple-500/5 to-revolut-blue-500/5 rounded-xl"></div>
                    <div className="relative p-6 h-full">
                      <h3 className="text-xl font-bold mb-6 text-white">Execution Flow</h3>

                      <div className="space-y-6">
                        <div className="bg-black-300 p-4 rounded-lg border border-white/5">
                          <div className="flex items-center">
                            <div className="bg-gradient-to-br from-revolut-pink-500 to-revolut-pink-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                              <span className="text-white text-sm font-bold">1</span>
                            </div>
                            <div>
                              <h4 className="font-bold text-white">Application Loading</h4>
                              <p className="text-white/70 text-sm">
                                PrimeOS loads the application from Prime AppStore, verifying its integrity and source
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-center">
                          <div className="h-8 w-0.5 bg-gradient-to-b from-revolut-pink-500/70 to-revolut-purple-500/70"></div>
                        </div>

                        <div className="bg-black-300 p-4 rounded-lg border border-white/5">
                          <div className="flex items-center">
                            <div className="bg-gradient-to-br from-revolut-purple-500 to-revolut-purple-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                              <span className="text-white text-sm font-bold">2</span>
                            </div>
                            <div>
                              <h4 className="font-bold text-white">UOR Resolution</h4>
                              <p className="text-white/70 text-sm">
                                The application's Canon, Codex, and Cortex components are resolved and prepared for
                                execution
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-center">
                          <div className="h-8 w-0.5 bg-gradient-to-b from-revolut-purple-500/70 to-revolut-blue-500/70"></div>
                        </div>

                        <div className="bg-black-300 p-4 rounded-lg border border-white/5">
                          <div className="flex items-center">
                            <div className="bg-gradient-to-br from-revolut-blue-500 to-revolut-blue-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                              <span className="text-white text-sm font-bold">3</span>
                            </div>
                            <div>
                              <h4 className="font-bold text-white">Deterministic Execution</h4>
                              <p className="text-white/70 text-sm">
                                The application runs with guaranteed behavior, maintaining semantic context throughout
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-center">
                          <div className="h-8 w-0.5 bg-gradient-to-b from-revolut-blue-500/70 to-revolut-pink-500/70"></div>
                        </div>

                        <div className="bg-black-300 p-4 rounded-lg border border-white/5">
                          <div className="flex items-center">
                            <div className="bg-gradient-to-br from-revolut-pink-500 to-revolut-pink-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                              <span className="text-white text-sm font-bold">4</span>
                            </div>
                            <div>
                              <h4 className="font-bold text-white">Verified Output</h4>
                              <p className="text-white/70 text-sm">
                                Results are produced with full traceability back to source inputs and transformation
                                logic
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="space-content mb-20">
            <ScrollReveal width="100%">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">Use Cases</h2>
              <p className="text-white/80 text-center max-w-3xl mx-auto mb-12">
                How PrimeOS is being used across different domains
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <ScrollReveal delay={0.1}>
                <div className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <h3 className="text-xl font-bold mb-4 text-white">AI & Machine Learning</h3>
                  <p className="text-white/80 mb-4">
                    Run AI models with guaranteed source traceability, eliminating hallucinations and ensuring factual
                    accuracy. Perfect for applications where trust and verification are critical.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-white/80 mb-4">
                    <li>Source-resolved language models</li>
                    <li>Verifiable decision systems</li>
                    <li>Explainable AI with full traceability</li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <h3 className="text-xl font-bold mb-4 text-white">Scientific Computing</h3>
                  <p className="text-white/80 mb-4">
                    Execute scientific models and simulations with reproducible results and clear provenance. Ideal for
                    research that requires verification and peer review.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-white/80 mb-4">
                    <li>Reproducible research environments</li>
                    <li>Traceable computational pipelines</li>
                    <li>Collaborative scientific workflows</li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <h3 className="text-xl font-bold mb-4 text-white">Financial Systems</h3>
                  <p className="text-white/80 mb-4">
                    Run financial models and transactions with guaranteed integrity and auditability. Essential for
                    compliance and risk management.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-white/80 mb-4">
                    <li>Auditable transaction processing</li>
                    <li>Regulatory compliance verification</li>
                    <li>Risk assessment with full traceability</li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <h3 className="text-xl font-bold mb-4 text-white">Edge Computing</h3>
                  <p className="text-white/80 mb-4">
                    Deploy applications to edge devices with guaranteed behavior and minimal resource requirements.
                    Perfect for IoT and distributed systems.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-white/80 mb-4">
                    <li>Lightweight edge deployment</li>
                    <li>Consistent behavior across devices</li>
                    <li>Secure, verifiable edge processing</li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* Getting Started Section */}
          <section className="space-content mb-20">
            <ScrollReveal width="100%">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">Getting Started</h2>
              <p className="text-white/80 text-center max-w-3xl mx-auto mb-12">
                How to start using PrimeOS for your applications
              </p>
            </ScrollReveal>

            <div className="bg-black-200 rounded-xl p-8 border border-white/10 mb-16">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-bold mb-6 text-white">For Users</h3>
                  <ol className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-gradient-to-br from-revolut-pink-500 to-revolut-blue-500 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-white text-sm font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-white">Download PrimeOS</h4>
                        <p className="text-white/70 text-sm">
                          Install the PrimeOS runtime on your local machine or server
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-gradient-to-br from-revolut-purple-500 to-revolut-pink-500 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-white text-sm font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-white">Browse Prime AppStore</h4>
                        <p className="text-white/70 text-sm">
                          Find and download UOR-native applications that meet your needs
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-gradient-to-br from-revolut-blue-500 to-revolut-purple-500 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-white text-sm font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-white">Run Applications</h4>
                        <p className="text-white/70 text-sm">
                          Execute applications with guaranteed deterministic behavior and full traceability
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-6 text-white">For Developers</h3>
                  <ol className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-gradient-to-br from-revolut-pink-500 to-revolut-blue-500 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-white text-sm font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-white">Build with Prime SDK</h4>
                        <p className="text-white/70 text-sm">Create UOR-native applications using the Prime SDK</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-gradient-to-br from-revolut-purple-500 to-revolut-pink-500 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-white text-sm font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-white">Test Locally</h4>
                        <p className="text-white/70 text-sm">
                          Run your applications in the PrimeOS development environment
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-gradient-to-br from-revolut-blue-500 to-revolut-purple-500 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-white text-sm font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-white">Deploy to Prime AppStore</h4>
                        <p className="text-white/70 text-sm">
                          Share your applications with the world through the Prime AppStore
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>

              <div className="mt-12 text-center">
                <Button className="rounded-full px-6 py-3 text-base font-medium bg-gradient-to-r from-revolut-pink-500 to-revolut-blue-500 text-white hover:opacity-90 revolut-button">
                  Coming Soon
                </Button>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="space-section px-4 sm:px-6 relative text-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-revolut-pink-500 via-revolut-purple-500 to-revolut-blue-500 opacity-80"></div>
            <div className="absolute inset-0 bg-black/50"></div>
            <GradientBackground blur={80} />

            <div className="max-w-4xl mx-auto text-center relative z-10">
              <ScrollReveal width="100%">
                <AnimatedText
                  text="Run with Confidence"
                  className="text-3xl md:text-5xl font-bold mb-6"
                  type="words"
                  animation="slide-up"
                />
              </ScrollReveal>
              <ScrollReveal width="100%" delay={0.2}>
                <p className="subtitle-text mb-8 max-w-3xl mx-auto text-white">
                  PrimeOS provides a trust-minimized runtime environment for applications that demand deterministic
                  behavior, semantic clarity, and full traceability. Join us in building a future where software is
                  reliable, verifiable, and trustworthy.
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
