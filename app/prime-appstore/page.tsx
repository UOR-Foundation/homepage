"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import ParticleBackground from "@/components/particle-background"
import EnhancedHeader from "@/components/enhanced-header"
import ScrollReveal from "@/components/scroll-reveal"
import GradientBackground from "@/components/gradient-background"
import AnimatedText from "@/components/animated-text"
import Card3D from "@/components/card-3d"
import { useEffect } from "react"
import {
  ArrowRight,
  Search,
  Star,
  Sparkles,
  Zap,
  Shield,
  Users,
  Code,
  Layers,
  Brain,
  FileText,
  BookOpen,
  BarChart3,
  Heart,
} from "lucide-react"

export default function PrimeAppStorePage() {
  // Ensure the page loads at the top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Enhanced Header */}
      <EnhancedHeader />

      {/* Hero Section - Apple-inspired clean design */}
      <section className="relative text-white pt-32 pb-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-revolut-blue-500 via-revolut-purple-500 to-revolut-pink-500 opacity-80"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <GradientBackground blur={80} />
        <ParticleBackground />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* App Store Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-revolut-blue-500 to-revolut-purple-500 flex items-center justify-center">
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

          <ScrollReveal width="100%">
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold mb-2 high-contrast-text">Prime AppStore</div>
            </div>
          </ScrollReveal>

          {/* Apple-inspired tagline */}
          <ScrollReveal width="100%" delay={0.2}>
            <h2 className="text-2xl md:text-4xl font-medium mt-6 mb-8 high-contrast-text">
              The apps you trust.
              <br />
              From a source you can verify.
            </h2>
          </ScrollReveal>

          <ScrollReveal width="100%" delay={0.4}>
            <div className="mt-8 flex justify-center">
              <div className="relative max-w-md w-full">
                <input
                  type="text"
                  placeholder="Search for apps..."
                  className="w-full px-5 py-3 pr-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70 h-5 w-5" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow py-8 px-4 sm:px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          {/* App Store Benefits Section - Apple-inspired clean layout */}
          <section className="mb-20">
            <ScrollReveal width="100%">
              <h2 className="text-3xl font-bold mb-12 text-center">Why Prime AppStore</h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <ScrollReveal delay={0.1}>
                <div className="bg-black-200 p-8 rounded-xl border border-white/10 h-full flex flex-col items-center text-center hover:border-white/30 transition-all duration-300">
                  <div className="bg-gradient-to-br from-revolut-blue-500 to-revolut-purple-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">Source Transparency</h3>
                  <p className="text-white/80">
                    Every app includes its Canon inputs and transformation charts, ensuring complete transparency about
                    where information comes from.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bg-black-200 p-8 rounded-xl border border-white/10 h-full flex flex-col items-center text-center hover:border-white/30 transition-all duration-300">
                  <div className="bg-gradient-to-br from-revolut-purple-500 to-revolut-pink-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">Deterministic Behavior</h3>
                  <p className="text-white/80">
                    All applications are guaranteed to produce the same output from the same input, every time. No more
                    unpredictable behavior.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="bg-black-200 p-8 rounded-xl border border-white/10 h-full flex flex-col items-center text-center hover:border-white/30 transition-all duration-300">
                  <div className="bg-gradient-to-br from-revolut-pink-500 to-revolut-blue-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">One-Click Deployment</h3>
                  <p className="text-white/80">
                    Deploy applications locally or across your network with a single command. All apps are
                    self-contained and portable.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* Featured App - Apple-inspired large feature */}
          <section className="mb-20">
            <ScrollReveal width="100%">
              <h2 className="text-3xl font-bold mb-8">Featured App</h2>
            </ScrollReveal>

            <div className="relative overflow-hidden rounded-2xl mb-16">
              <div className="absolute inset-0 bg-gradient-to-r from-revolut-blue-500/20 to-revolut-purple-500/20"></div>
              <div className="grid md:grid-cols-2 gap-8 p-8 relative z-10">
                <div className="flex flex-col justify-center">
                  <div className="bg-white/10 backdrop-blur-md p-2 rounded-xl inline-flex items-center mb-4 w-fit">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="text-xs font-medium">App of the Week</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-white">TruthTracer AI</h3>
                  <p className="text-white/80 mb-6 text-lg leading-relaxed">
                    The first AI assistant with 100% verifiable sources. Every response is traceable to its origin,
                    eliminating hallucinations and ensuring factual accuracy.
                  </p>
                  <div className="flex items-center gap-4">
                    <Button className="rounded-full px-5 py-2 bg-white text-black hover:bg-white/90 revolut-button">
                      Get App
                    </Button>
                    <Link href="#" className="text-white hover:text-white/80 flex items-center">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-revolut-blue-500 to-revolut-purple-500 rounded-2xl blur-2xl opacity-30"></div>
                    <Card3D className="bg-black-200 p-6 rounded-2xl border border-white/10 relative z-10">
                      <div className="flex justify-center mb-4">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-revolut-blue-500 to-revolut-purple-500 flex items-center justify-center">
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
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                            <path d="M14 8.5a2.5 2.5 0 0 0-5 0v1a2.5 2.5 0 0 0 5 0v-1z"></path>
                            <path d="M8 14c0-2.5 3-2.5 3-5"></path>
                            <path d="M13 14c0-2.5 3-2.5 3-5"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="text-center">
                        <h4 className="font-bold text-white mb-1">TruthTracer AI</h4>
                        <p className="text-white/60 text-sm mb-3">Semantic AI Assistant</p>
                        <div className="flex items-center justify-center gap-1 mb-4">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                          ))}
                          <span className="text-white/60 text-xs ml-1">(128)</span>
                        </div>
                        <Button className="w-full rounded-full px-4 py-2 text-sm bg-white text-black hover:bg-white/90">
                          Get
                        </Button>
                      </div>
                    </Card3D>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Categories - Apple-inspired horizontal scrolling categories */}
          <section className="mb-20">
            <ScrollReveal width="100%">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">Categories</h2>
                <Link href="#" className="text-revolut-blue-400 hover:text-revolut-blue-300 flex items-center">
                  See All <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </ScrollReveal>

            <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
              <ScrollReveal delay={0.1}>
                <div className="flex-shrink-0 w-40 h-40 bg-gradient-to-br from-revolut-blue-500 to-revolut-blue-700 rounded-2xl flex flex-col items-center justify-center p-4 transform hover:scale-105 transition-transform">
                  <Brain className="h-10 w-10 text-white mb-4" />
                  <h3 className="text-lg font-bold text-white text-center">AI & Machine Learning</h3>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="flex-shrink-0 w-40 h-40 bg-gradient-to-br from-revolut-purple-500 to-revolut-purple-700 rounded-2xl flex flex-col items-center justify-center p-4 transform hover:scale-105 transition-transform">
                  <Heart className="h-10 w-10 text-white mb-4" />
                  <h3 className="text-lg font-bold text-white text-center">Healthcare & Research</h3>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="flex-shrink-0 w-40 h-40 bg-gradient-to-br from-revolut-pink-500 to-revolut-pink-700 rounded-2xl flex flex-col items-center justify-center p-4 transform hover:scale-105 transition-transform">
                  <BarChart3 className="h-10 w-10 text-white mb-4" />
                  <h3 className="text-lg font-bold text-white text-center">Finance & Governance</h3>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="flex-shrink-0 w-40 h-40 bg-gradient-to-br from-revolut-blue-500 to-revolut-pink-700 rounded-2xl flex flex-col items-center justify-center p-4 transform hover:scale-105 transition-transform">
                  <BookOpen className="h-10 w-10 text-white mb-4" />
                  <h3 className="text-lg font-bold text-white text-center">Education & Knowledge</h3>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.5}>
                <div className="flex-shrink-0 w-40 h-40 bg-gradient-to-br from-revolut-purple-500 to-revolut-blue-700 rounded-2xl flex flex-col items-center justify-center p-4 transform hover:scale-105 transition-transform">
                  <Layers className="h-10 w-10 text-white mb-4" />
                  <h3 className="text-lg font-bold text-white text-center">Data & Analytics</h3>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.6}>
                <div className="flex-shrink-0 w-40 h-40 bg-gradient-to-br from-revolut-pink-500 to-revolut-purple-700 rounded-2xl flex flex-col items-center justify-center p-4 transform hover:scale-105 transition-transform">
                  <Shield className="h-10 w-10 text-white mb-4" />
                  <h3 className="text-lg font-bold text-white text-center">Security & Privacy</h3>
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* Top Apps Section - Apple-inspired grid layout */}
          <section className="mb-20">
            <ScrollReveal width="100%">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">Top Apps</h2>
                <Link href="#" className="text-revolut-blue-400 hover:text-revolut-blue-300 flex items-center">
                  See All <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <ScrollReveal delay={0.1}>
                <div className="bg-black-200 p-6 rounded-xl border border-white/10 h-full hover:border-white/30 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-revolut-blue-500 to-revolut-purple-500 flex items-center justify-center mr-4">
                      <Brain className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">TruthTracer AI</h3>
                      <p className="text-white/60 text-sm">Semantic AI Assistant</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <span className="text-white/60 text-xs ml-2">(128)</span>
                  </div>
                  <p className="text-white/80 text-sm mb-4">
                    The first AI assistant with 100% verifiable sources. Every response is traceable to its origin.
                  </p>
                  <Button className="w-full rounded-full px-4 py-2 text-sm bg-white text-black hover:bg-white/90">
                    Get
                  </Button>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bg-black-200 p-6 rounded-xl border border-white/10 h-full hover:border-white/30 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-revolut-purple-500 to-revolut-pink-500 flex items-center justify-center mr-4">
                      <FileText className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">DataSovereign</h3>
                      <p className="text-white/60 text-sm">Data Management</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[1, 2, 3, 4].map((star) => (
                        <Star key={star} className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                      ))}
                      <Star className="h-3 w-3 text-yellow-400" />
                    </div>
                    <span className="text-white/60 text-xs ml-2">(86)</span>
                  </div>
                  <p className="text-white/80 text-sm mb-4">
                    Take control of your data with this powerful management tool. Maintain ownership while enabling
                    secure sharing.
                  </p>
                  <Button className="w-full rounded-full px-4 py-2 text-sm bg-white text-black hover:bg-white/90">
                    Get
                  </Button>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="bg-black-200 p-6 rounded-xl border border-white/10 h-full hover:border-white/30 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-revolut-pink-500 to-revolut-blue-500 flex items-center justify-center mr-4">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">TrustChain</h3>
                      <p className="text-white/60 text-sm">Supply Chain Verification</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <span className="text-white/60 text-xs ml-2">(92)</span>
                  </div>
                  <p className="text-white/80 text-sm mb-4">
                    Track products from source to destination with full semantic context and verifiable provenance.
                  </p>
                  <Button className="w-full rounded-full px-4 py-2 text-sm bg-white text-black hover:bg-white/90">
                    Get
                  </Button>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="bg-black-200 p-6 rounded-xl border border-white/10 h-full hover:border-white/30 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-revolut-blue-500 to-revolut-pink-500 flex items-center justify-center mr-4">
                      <BookOpen className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">KnowledgeGraph</h3>
                      <p className="text-white/60 text-sm">Educational Tool</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[1, 2, 3, 4].map((star) => (
                        <Star key={star} className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                      ))}
                      <Star className="h-3 w-3 text-yellow-400 fill-yellow-400 opacity-50" />
                    </div>
                    <span className="text-white/60 text-xs ml-2">(74)</span>
                  </div>
                  <p className="text-white/80 text-sm mb-4">
                    Create personalized learning paths with semantic relationships between concepts for deeper
                    understanding.
                  </p>
                  <Button className="w-full rounded-full px-4 py-2 text-sm bg-white text-black hover:bg-white/90">
                    Get
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            <div className="flex justify-center">
              <Button
                variant="outline"
                className="rounded-full px-6 py-3 text-base font-medium border-white/20 text-white bg-transparent hover:bg-white/10"
              >
                View All Apps
              </Button>
            </div>
          </section>

          {/* Prime SDK Section - Developer focused */}
          <section className="mb-20">
            <ScrollReveal width="100%">
              <h2 className="text-3xl font-bold mb-4 text-center">Prime SDK</h2>
              <p className="text-xl text-white/80 text-center mb-12">
                Build → Ship → Run Deterministic Apps with Embedded UOR
              </p>
            </ScrollReveal>

            <div className="relative overflow-hidden rounded-2xl mb-16">
              <div className="absolute inset-0 bg-gradient-to-r from-revolut-purple-500/20 to-revolut-pink-500/20"></div>
              <div className="p-12 relative z-10">
                <div className="max-w-4xl mx-auto">
                  <ScrollReveal delay={0.1}>
                    <p className="text-white/90 mb-8 text-lg leading-relaxed">
                      Prime SDK is a modern developer toolkit for building deterministic, composable, and
                      source-resolved applications using the Universal Object Resolution (UOR) framework. Inspired by
                      Docker's developer experience, Prime SDK gives you the tools to package structured logic into
                      portable UOR containers — then deploy and run them anywhere with mathematical confidence.
                    </p>
                    <p className="text-white/90 mb-12 text-lg leading-relaxed italic">
                      You don't just write code — you define logic that is verifiable, traceable, and repeatable.
                    </p>
                  </ScrollReveal>

                  <ScrollReveal delay={0.2}>
                    <h3 className="text-2xl font-bold mb-6 text-white">Why Prime SDK is Different</h3>
                    <p className="text-white/90 mb-8 text-lg leading-relaxed">
                      Prime SDK is built for developers who need more than "it works on my machine." It's for teams
                      shipping applications where correctness, reproducibility, and clarity matter.
                    </p>
                    <p className="text-white/90 mb-8 text-lg leading-relaxed">
                      Traditional SDKs give you access to APIs and libraries. Prime SDK gives you access to structure —
                      a way to build logic systems that always resolve the same way, with full provenance.
                    </p>
                    <p className="text-white/90 mb-6 text-lg leading-relaxed">
                      It's powered by three embedded layers of the UOR framework:
                    </p>
                  </ScrollReveal>

                  <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <ScrollReveal delay={0.3}>
                      <div className="bg-black-300 p-6 rounded-xl border border-white/10 h-full">
                        <div className="bg-gradient-to-br from-revolut-blue-500 to-revolut-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                          <Code className="h-6 w-6 text-white" />
                        </div>
                        <h4 className="font-bold text-white text-lg mb-3">UOR Math Package</h4>
                        <p className="text-white/80">
                          A deterministic math engine that transforms inputs into outputs through a 12-layer logic stack
                          — encoding structure, resolving meaning, and enforcing coherence.
                        </p>
                      </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.4}>
                      <div className="bg-black-300 p-6 rounded-xl border border-white/10 h-full">
                        <div className="bg-gradient-to-br from-revolut-purple-500 to-revolut-pink-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                          <Layers className="h-6 w-6 text-white" />
                        </div>
                        <h4 className="font-bold text-white text-lg mb-3">Protocol Layer</h4>
                        <p className="text-white/80">
                          Declarative protocols define how apps interoperate, resolve identity, validate coherence, and
                          version safely. They're logic-native — not just transport wrappers.
                        </p>
                      </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.5}>
                      <div className="bg-black-300 p-6 rounded-xl border border-white/10 h-full">
                        <div className="bg-gradient-to-br from-revolut-pink-500 to-revolut-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
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
                            className="text-white"
                          >
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                            <line x1="8" y1="21" x2="16" y2="21"></line>
                            <line x1="12" y1="17" x2="12" y2="21"></line>
                          </svg>
                        </div>
                        <h4 className="font-bold text-white text-lg mb-3">Client/Server Runtime</h4>
                        <p className="text-white/80">
                          A lightweight virtual machine for running Prime Containers anywhere — local, remote, or
                          distributed — with the same guaranteed result.
                        </p>
                      </div>
                    </ScrollReveal>
                  </div>
                </div>

                {/* Build → Ship → Run Section */}
                <div className="max-w-4xl mx-auto">
                  <ScrollReveal delay={0.6}>
                    <h3 className="text-2xl font-bold mb-8 text-white text-center">Build → Ship → Run</h3>
                  </ScrollReveal>

                  <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <ScrollReveal delay={0.7}>
                      <div className="bg-black-300 p-6 rounded-xl border border-white/10 h-full">
                        <h4 className="font-bold text-white text-xl mb-4 flex items-center">
                          <div className="bg-gradient-to-br from-revolut-blue-500 to-revolut-blue-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <span className="text-white text-sm font-bold">1</span>
                          </div>
                          Build
                        </h4>
                        <p className="text-white/80 mb-4">
                          Author deterministic applications using Prime's math-first logic system:
                        </p>
                        <ul className="text-white/80 space-y-2 mb-4 list-disc pl-5">
                          <li>Define Canon inputs: raw data, rules, or models</li>
                          <li>Compose charts to transform them through the Cortex (logic layer)</li>
                          <li>Output structured, verifiable containers (Prime Containers) using the Codex</li>
                        </ul>
                        <p className="text-white/80 italic">
                          You can build apps that behave like software and reason like proofs.
                        </p>
                      </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.8}>
                      <div className="bg-black-300 p-6 rounded-xl border border-white/10 h-full">
                        <h4 className="font-bold text-white text-xl mb-4 flex items-center">
                          <div className="bg-gradient-to-br from-revolut-purple-500 to-revolut-purple-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <span className="text-white text-sm font-bold">2</span>
                          </div>
                          Ship
                        </h4>
                        <p className="text-white/80 mb-4">Push and distribute your apps with complete traceability:</p>
                        <ul className="text-white/80 space-y-2 mb-4 list-disc pl-5">
                          <li>Publish to the Prime Appstore</li>
                          <li>Share across environments or embed in larger systems</li>
                          <li>Version and verify containers with full coherence and provenance</li>
                        </ul>
                        <p className="text-white/80 italic">Your logic ships with context — not just code.</p>
                      </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.9}>
                      <div className="bg-black-300 p-6 rounded-xl border border-white/10 h-full">
                        <h4 className="font-bold text-white text-xl mb-4 flex items-center">
                          <div className="bg-gradient-to-br from-revolut-pink-500 to-revolut-pink-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <span className="text-white text-sm font-bold">3</span>
                          </div>
                          Run
                        </h4>
                        <p className="text-white/80 mb-4">
                          Execute your application anywhere, knowing it will always behave the same:
                        </p>
                        <ul className="text-white/80 space-y-2 mb-4 list-disc pl-5">
                          <li>Use the Prime Runtime or CLI to run containers in dev, test, or production</li>
                          <li>Spin up multi-node resolution networks for collaborative execution</li>
                          <li>Expose logic via APIs, hooks, or external protocols</li>
                        </ul>
                        <p className="text-white/80 italic">Run the exact logic you built — no divergence, no drift.</p>
                      </div>
                    </ScrollReveal>
                  </div>
                </div>

                {/* Use Cases and What You Get */}
                <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                  <ScrollReveal delay={1.0}>
                    <div>
                      <h3 className="text-2xl font-bold mb-6 text-white">Use Prime SDK When:</h3>
                      <ul className="text-white/80 space-y-4 mb-8 list-disc pl-5">
                        <li>You're building agents that need deterministic memory or behavior</li>
                        <li>You want to ship scientific or financial logic with full auditability</li>
                        <li>You need infrastructure logic that can be verified, shared, and remixed</li>
                        <li>You're tired of pipelines built from opaque, untraceable tools</li>
                        <li>You care about meaning, not just data</li>
                      </ul>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={1.1}>
                    <div>
                      <h3 className="text-2xl font-bold mb-6 text-white">What You Get</h3>
                      <ul className="text-white/80 space-y-4 mb-8 list-disc pl-5">
                        <li>Prime CLI (build, run, push, inspect)</li>
                        <li>Language SDKs (Python, Rust, TypeScript in progress)</li>
                        <li>Lightweight deterministic runtime</li>
                        <li>Full access to UOR's embedded math and protocol layers</li>
                        <li>Integration with the Prime Appstore for discovery and distribution</li>
                      </ul>
                    </div>
                  </ScrollReveal>
                </div>

                {/* Code Example */}
                <div className="max-w-4xl mx-auto mt-8">
                  <ScrollReveal delay={1.2}>
                    <div className="bg-black-300 p-6 rounded-xl border border-white/10">
                      <h4 className="font-bold text-white mb-4">Quick Start Example</h4>
                      <code className="block bg-black-400 p-4 rounded-lg text-left text-sm text-white/80 mb-6 overflow-x-auto">
                        <span className="text-pink-400">import</span>{" "}
                        <span className="text-blue-400">
                          {"{"} Canon, Codex, Cortex {"}"}
                        </span>{" "}
                        <span className="text-pink-400">from</span> <span className="text-green-400">'@prime/sdk'</span>
                        ;
                        <br />
                        <br />
                        <span className="text-pink-400">const</span> <span className="text-blue-400">app</span> ={" "}
                        <span className="text-pink-400">new</span> <span className="text-yellow-400">PrimeApp</span>(
                        {"{"}
                        <br />
                        &nbsp;&nbsp;<span className="text-blue-400">name</span>:{" "}
                        <span className="text-green-400">'MyFirstApp'</span>,
                        <br />
                        &nbsp;&nbsp;<span className="text-blue-400">version</span>:{" "}
                        <span className="text-green-400">'1.0.0'</span>
                        <br />
                        {"}"});
                        <br />
                        <br />
                        <span className="text-pink-400">const</span> <span className="text-blue-400">canon</span> ={" "}
                        <span className="text-pink-400">new</span> <span className="text-yellow-400">Canon</span>({"{"}
                        <br />
                        &nbsp;&nbsp;<span className="text-blue-400">source</span>:{" "}
                        <span className="text-green-400">'data.json'</span>,
                        <br />
                        &nbsp;&nbsp;<span className="text-blue-400">type</span>:{" "}
                        <span className="text-green-400">'reference'</span>
                        <br />
                        {"}"});
                        <br />
                        <br />
                        <span className="text-pink-400">const</span> <span className="text-blue-400">cortex</span> ={" "}
                        <span className="text-pink-400">new</span> <span className="text-yellow-400">Cortex</span>({"{"}
                        <br />
                        &nbsp;&nbsp;<span className="text-blue-400">transform</span>:{" "}
                        <span className="text-green-400">'semantic-resolution'</span>,
                        <br />
                        &nbsp;&nbsp;<span className="text-blue-400">rules</span>: [
                        <span className="text-green-400">'coherence'</span>,{" "}
                        <span className="text-green-400">'traceability'</span>]
                        <br />
                        {"}"});
                        <br />
                        <br />
                        <span className="text-pink-400">await</span> <span className="text-blue-400">app</span>.
                        <span className="text-yellow-400">build</span>({"{"}
                        <br />
                        &nbsp;&nbsp;<span className="text-blue-400">canon</span>,
                        <br />
                        &nbsp;&nbsp;<span className="text-blue-400">cortex</span>,
                        <br />
                        &nbsp;&nbsp;<span className="text-blue-400">output</span>:{" "}
                        <span className="text-green-400">'./my-prime-container'</span>
                        <br />
                        {"}"});
                      </code>
                    </div>
                  </ScrollReveal>
                </div>

                {/* Call to Action */}
                <div className="max-w-4xl mx-auto mt-12 text-center">
                  <ScrollReveal delay={1.3}>
                    <h3 className="text-2xl font-bold mb-6 text-white">Start Building with Clarity</h3>
                    <p className="text-white/90 mb-8 text-lg">
                      You've shipped apps before. But not like this. Prime SDK gives you the structure to build systems
                      that are clear, deterministic, and composable from day one.
                    </p>
                    <p className="text-white/90 mb-8 text-lg font-medium">
                      Build smarter. Ship with confidence. Run with integrity.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                      <Button className="rounded-full px-8 py-4 text-base font-medium bg-white text-black hover:bg-white/90 revolut-button">
                        Get Started
                      </Button>
                      <Button
                        variant="outline"
                        className="rounded-full px-8 py-4 text-base font-medium border-white text-white bg-transparent hover:bg-white/10 revolut-button"
                      >
                        Explore the Docs
                      </Button>
                      <Button
                        variant="outline"
                        className="rounded-full px-8 py-4 text-base font-medium border-white text-white bg-transparent hover:bg-white/10 revolut-button"
                      >
                        Try a Sample Container
                      </Button>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </section>

          {/* User Testimonials Section - Apple-inspired clean layout */}
          <section className="mb-20">
            <ScrollReveal width="100%">
              <h2 className="text-3xl font-bold mb-12 text-center">What Developers Are Saying</h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <ScrollReveal delay={0.1}>
                <div className="bg-black-200 p-8 rounded-xl border border-white/10 h-full hover:border-white/30 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-revolut-blue-500 to-revolut-purple-500 flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Dr. Sarah Chen</h4>
                      <p className="text-white/60 text-xs">Research Scientist</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white/80 italic">
                    "Prime SDK has transformed our research process. Being able to trace every piece of information back
                    to its source has eliminated errors and accelerated our work."
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bg-black-200 p-8 rounded-xl border border-white/10 h-full hover:border-white/30 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-revolut-purple-500 to-revolut-pink-500 flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Michael Rodriguez</h4>
                      <p className="text-white/60 text-xs">CTO, FinTech Innovations</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white/80 italic">
                    "The deterministic nature of the Prime SDK is a game-changer for our financial systems. We can
                    finally guarantee consistent behavior and full auditability."
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="bg-black-200 p-8 rounded-xl border border-white/10 h-full hover:border-white/30 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-revolut-pink-500 to-revolut-blue-500 flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Prof. James Wilson</h4>
                      <p className="text-white/60 text-xs">Educational Technology</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4].map((star) => (
                      <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    ))}
                    <Star className="h-4 w-4 text-yellow-400" />
                  </div>
                  <p className="text-white/80 italic">
                    "Building with Prime SDK has revolutionized how we teach complex subjects. The semantic
                    relationships between concepts help students build deeper understanding."
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* Ready to Explore Section - Apple-inspired clean CTA */}
          <section className="space-content">
            <ScrollReveal delay={0.5}>
              <div className="bg-gradient-to-br from-revolut-blue-500/10 to-revolut-purple-500/10 rounded-2xl p-12 border border-white/10 text-center">
                <h3 className="text-3xl font-bold mb-6 text-white">Ready to Explore?</h3>
                <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
                  Discover a new generation of applications built with mathematical precision, semantic clarity, and
                  full traceability. The Prime AppStore is your gateway to the future of software.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <Button className="rounded-full px-8 py-4 text-base font-medium bg-white text-black hover:bg-white/90 revolut-button">
                    Browse Apps
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full px-8 py-4 text-base font-medium border-white text-white bg-transparent hover:bg-white/10 revolut-button"
                    asChild
                  >
                    <Link href="/prime-sdk">Build Your Own</Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </section>
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
              text="The Future of Software is Here"
              className="text-3xl md:text-5xl font-bold mb-6"
              type="words"
              animation="slide-up"
            />
          </ScrollReveal>
          <ScrollReveal width="100%" delay={0.2}>
            <p className="subtitle-text mb-8 max-w-2xl mx-auto text-white">
              Join us in creating a world where applications are deterministic, traceable, and built with mathematical
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
