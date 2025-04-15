"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import ParticleBackground from "@/components/particle-background"
import EnhancedHeader from "@/components/enhanced-header"
import ScrollReveal from "@/components/scroll-reveal"
import GradientBackground from "@/components/gradient-background"
import { useEffect } from "react"
import { ArrowUpRight, Calendar, User, BookOpen, FileText, ExternalLink, Layers, Code, Brain } from "lucide-react"

// Define types for our resource links
type ResourceLink = {
  id: number
  title: string
  url: string
  platform: "ChatGPT" | "Claude" | "Other"
  category: "Guide" | "Canvas" | "Artifact" | "Share" | "Article"
  description: string
  icon: React.ReactNode
}

export default function InsightsPage() {
  // Ensure the page loads at the top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Resource links data
  const resourceLinks: ResourceLink[] = [
    {
      id: 1,
      title: "Prime Framework Guide",
      url: "https://chatgpt.com/g/g-67abc8d515d48191933ccb10df257338-prime-framework-guide",
      platform: "ChatGPT",
      category: "Guide",
      description: "A comprehensive guide to understanding the Prime Framework and its core concepts.",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      id: 2,
      title: "UOR Framework Fundamentals",
      url: "https://claude.site/artifacts/fe2aae26-4a00-477a-80b4-d51a887e2bf3",
      platform: "Claude",
      category: "Artifact",
      description: "Detailed explanation of the fundamental principles behind the UOR Framework.",
      icon: <Layers className="h-5 w-5" />,
    },
    {
      id: 3,
      title: "Semantic Computing Architecture",
      url: "https://claude.site/artifacts/72b688d6-a8eb-458f-9665-bbc47662dafb",
      platform: "Claude",
      category: "Artifact",
      description: "Deep dive into the semantic computing architecture that powers UOR.",
      icon: <Brain className="h-5 w-5" />,
    },
    {
      id: 4,
      title: "Data Sovereignty Implementation",
      url: "https://claude.site/artifacts/56aebd1c-d5af-43f9-9877-548c848c26f8",
      platform: "Claude",
      category: "Artifact",
      description: "Technical implementation details for achieving data sovereignty with UOR.",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      id: 5,
      title: "UOR Visual Representation",
      url: "https://chatgpt.com/canvas/shared/67c1ddf625988191939a13f3cd625250",
      platform: "ChatGPT",
      category: "Canvas",
      description: "Visual representation of the UOR Framework and its components.",
      icon: <Layers className="h-5 w-5" />,
    },
    {
      id: 6,
      title: "Prime Framework Implementation",
      url: "https://chatgpt.com/share/67c24533-d814-8005-abf6-dcc204f66648",
      platform: "ChatGPT",
      category: "Share",
      description: "Implementation strategies for the Prime Framework in various contexts.",
      icon: <Code className="h-5 w-5" />,
    },
    {
      id: 7,
      title: "Semantic Data Structures",
      url: "https://chatgpt.com/canvas/shared/67c3764abe1c8191ae9666174fd0a70b",
      platform: "ChatGPT",
      category: "Canvas",
      description: "Exploration of semantic data structures used in the UOR Framework.",
      icon: <Layers className="h-5 w-5" />,
    },
    {
      id: 8,
      title: "Computational Semantics",
      url: "https://chatgpt.com/canvas/shared/67c38517fe288191bf570af078227d7f",
      platform: "ChatGPT",
      category: "Canvas",
      description: "Analysis of computational semantics principles in the UOR ecosystem.",
      icon: <Brain className="h-5 w-5" />,
    },
    {
      id: 9,
      title: "Distributed Systems Architecture",
      url: "https://claude.site/artifacts/e3eb8055-6080-46e1-bf63-fc4410d693f9",
      platform: "Claude",
      category: "Artifact",
      description: "Architecture overview for distributed systems using UOR principles.",
      icon: <Layers className="h-5 w-5" />,
    },
    {
      id: 10,
      title: "Semantic Interoperability",
      url: "https://claude.site/artifacts/61e4b66c-33a7-4874-b1bd-536d4b9a3b96",
      platform: "Claude",
      category: "Artifact",
      description: "Strategies for achieving semantic interoperability across systems.",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      id: 11,
      title: "Data Lineage Tracking",
      url: "https://claude.site/artifacts/d6343cc8-3243-47f9-b329-9b849e03af84",
      platform: "Claude",
      category: "Artifact",
      description: "Methods for tracking data lineage in semantic computing environments.",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      id: 12,
      title: "Contextual Computing",
      url: "https://claude.site/artifacts/30e2b18b-e102-40f4-9f59-363198320517",
      platform: "Claude",
      category: "Artifact",
      description: "Exploration of contextual computing principles in the UOR Framework.",
      icon: <Brain className="h-5 w-5" />,
    },
    {
      id: 13,
      title: "Semantic Web Integration",
      url: "https://claude.site/artifacts/5a57bf14-8070-4b15-b8b7-a9c6f7980538",
      platform: "Claude",
      category: "Artifact",
      description: "Integration strategies for UOR with semantic web technologies.",
      icon: <Layers className="h-5 w-5" />,
    },
    {
      id: 14,
      title: "Prime Framework Applications",
      url: "https://chatgpt.com/share/67ba0f4e-3040-8005-8c9a-8be436d4322d",
      platform: "ChatGPT",
      category: "Share",
      description: "Real-world applications of the Prime Framework across industries.",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      id: 15,
      title: "Semantic Computing Fundamentals",
      url: "https://claude.ai/share/ee40667c-8220-4664-934b-8b69b4a64bb5",
      platform: "Claude",
      category: "Share",
      description: "Fundamental principles of semantic computing in the UOR context.",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      id: 16,
      title: "UOR Implementation Patterns",
      url: "https://chatgpt.com/canvas/shared/67bf45316a4481918577b0a8de0b9a42",
      platform: "ChatGPT",
      category: "Canvas",
      description: "Common implementation patterns for UOR-based systems.",
      icon: <Code className="h-5 w-5" />,
    },
    {
      id: 17,
      title: "Semantic Data Modeling",
      url: "https://chatgpt.com/canvas/shared/67bffd559d94819182cf4c31da2e2d89",
      platform: "ChatGPT",
      category: "Canvas",
      description: "Approaches to semantic data modeling with the UOR Framework.",
      icon: <Layers className="h-5 w-5" />,
    },
    {
      id: 18,
      title: "Contextual AI Systems",
      url: "https://chatgpt.com/canvas/shared/67c0e6b55b148191aa0e769e59c72487",
      platform: "ChatGPT",
      category: "Canvas",
      description: "Building contextual AI systems using UOR principles and technologies.",
      icon: <Brain className="h-5 w-5" />,
    },
  ]

  // Group resources by category
  const groupedResources = resourceLinks.reduce(
    (acc, resource) => {
      if (!acc[resource.category]) {
        acc[resource.category] = []
      }
      acc[resource.category].push(resource)
      return acc
    },
    {} as Record<string, ResourceLink[]>,
  )

  // Platform badge color mapping
  const platformColors = {
    ChatGPT: "bg-emerald-500",
    Claude: "bg-purple-500",
    Other: "bg-blue-500",
  }

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
              <div className="text-4xl md:text-6xl font-bold mb-6 high-contrast-text">Insights</div>
            </div>
          </ScrollReveal>
          <ScrollReveal width="100%" delay={0.2}>
            <p className="subtitle-text max-w-2xl mx-auto text-white high-contrast-text text-center">
              Explore articles, research, and thought leadership on the UOR Framework and semantic computing
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow py-16 px-4 sm:px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          {/* Featured Articles Section */}
          <section className="space-content mb-20">
            <ScrollReveal width="100%">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text text-center">Featured Articles</h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Article 1: The UOR Framework (Red Hat) */}
              <ScrollReveal delay={0.1}>
                {/* Replaced Card3D with a regular div to remove tilt animation */}
                <div className="bg-black-200 rounded-2xl border border-white/10 h-full overflow-hidden flex flex-col transition-all duration-300 hover:border-white/20 hover:shadow-lg">
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-revolut-blue-500/30 to-revolut-purple-500/30"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src="/uor-geometric-white.svg"
                        alt="UOR Framework"
                        width={120}
                        height={120}
                        className="opacity-50"
                      />
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center text-xs text-white/60 mb-3 gap-4">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>July 13, 2022</span>
                      </div>
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        <span>Alex Flom, Andrew Block</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">The UOR Framework</h3>
                    <p className="text-white/80 mb-4 flex-grow">
                      This pioneering article from Red Hat's Emerging Technologies blog introduces the Universal Object
                      Reference (UOR) framework as a radically different approach to serverless and decentralized
                      systems. The authors explore how treating everything in the universe as an object can transform
                      our approach to computing.
                    </p>
                    <div className="mt-auto">
                      <a
                        href="https://next.redhat.com/2022/07/13/the-uor-framework/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10 px-4 py-2 transition-colors"
                      >
                        Read Article <ArrowUpRight className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Article 2: UOR Explained */}
              <ScrollReveal delay={0.2}>
                {/* Replaced Card3D with a regular div to remove tilt animation */}
                <div className="bg-black-200 rounded-2xl border border-white/10 h-full overflow-hidden flex flex-col transition-all duration-300 hover:border-white/20 hover:shadow-lg">
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-revolut-purple-500/30 to-revolut-pink-500/30"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src="/uor-geometric-white.svg"
                        alt="UOR Explained"
                        width={120}
                        height={120}
                        className="opacity-50"
                      />
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center text-xs text-white/60 mb-3">
                      <User className="h-3 w-3 mr-1" />
                      <span>Alex Flom</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">UOR Explained</h3>
                    <p className="text-white/80 mb-4 flex-grow">
                      This comprehensive guide breaks down the Universal Object Reference framework into digestible
                      components. It explores the core concepts of Canon, Codex, and Cortex, and explains how UOR can be
                      applied to solve complex problems in distributed systems, data sovereignty, and semantic
                      computing.
                    </p>
                    <div className="mt-auto">
                      <a
                        href="https://afflom.github.io/UOR-Explained/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10 px-4 py-2 transition-colors"
                      >
                        Read Article <ArrowUpRight className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Article 3: Universal Object Reference */}
              <ScrollReveal delay={0.3}>
                {/* Replaced Card3D with a regular div to remove tilt animation */}
                <div className="bg-black-200 rounded-2xl border border-white/10 h-full overflow-hidden flex flex-col transition-all duration-300 hover:border-white/20 hover:shadow-lg">
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-revolut-pink-500/30 to-revolut-blue-500/30"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src="/uor-geometric-white.svg"
                        alt="Universal Object Reference"
                        width={120}
                        height={120}
                        className="opacity-50"
                      />
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center text-xs text-white/60 mb-3">
                      <User className="h-3 w-3 mr-1" />
                      <span>usrbinkat</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">Universal Object Reference</h3>
                    <p className="text-white/80 mb-4 flex-grow">
                      This technical deep dive explores the practical applications of the UOR framework in modern
                      computing environments. The article discusses how UOR addresses fundamental challenges in
                      distributed systems, data interoperability, and semantic context preservation across disparate
                      platforms and technologies.
                    </p>
                    <div className="mt-auto">
                      <a
                        href="https://blog.usrbinkat.io/en/blog/universal-object-reference/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10 px-4 py-2 transition-colors"
                      >
                        Read Article <ArrowUpRight className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* UOR Resources Section */}
          <section className="space-content mb-20">
            <ScrollReveal width="100%">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">UOR Resources</h2>
              <p className="text-white/80 text-center max-w-2xl mx-auto mb-12">
                Explore our collection of guides, artifacts, and shared resources to deepen your understanding of the
                UOR Framework and its applications.
              </p>
            </ScrollReveal>

            {/* Guides Section */}
            {groupedResources["Guide"] && (
              <div className="mb-16">
                <h3 className="text-2xl font-bold mb-6 text-white">Guides</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {groupedResources["Guide"].map((resource) => (
                    <ScrollReveal key={resource.id} delay={0.1 * (resource.id % 5)}>
                      <div className="bg-black-200 rounded-xl border border-white/10 p-6 h-full flex flex-col transition-all duration-300 hover:border-white/20 hover:shadow-lg">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <div className="bg-gradient-to-br from-revolut-blue-500 to-revolut-purple-500 p-2 rounded-lg mr-3">
                              {resource.icon}
                            </div>
                            <h4 className="font-bold text-white">{resource.title}</h4>
                          </div>
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${platformColors[resource.platform]} text-white`}
                          >
                            {resource.platform}
                          </span>
                        </div>
                        <p className="text-white/70 mb-4 flex-grow">{resource.description}</p>
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-revolut-blue-400 hover:text-revolut-blue-300 mt-auto"
                        >
                          View Guide <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            )}

            {/* Artifacts Section */}
            {groupedResources["Artifact"] && (
              <div className="mb-16">
                <h3 className="text-2xl font-bold mb-6 text-white">Artifacts</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {groupedResources["Artifact"].map((resource) => (
                    <ScrollReveal key={resource.id} delay={0.1 * (resource.id % 5)}>
                      <div className="bg-black-200 rounded-xl border border-white/10 p-6 h-full flex flex-col transition-all duration-300 hover:border-white/20 hover:shadow-lg">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <div className="bg-gradient-to-br from-revolut-purple-500 to-revolut-pink-500 p-2 rounded-lg mr-3">
                              {resource.icon}
                            </div>
                            <h4 className="font-bold text-white">{resource.title}</h4>
                          </div>
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${platformColors[resource.platform]} text-white`}
                          >
                            {resource.platform}
                          </span>
                        </div>
                        <p className="text-white/70 mb-4 flex-grow">{resource.description}</p>
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-revolut-blue-400 hover:text-revolut-blue-300 mt-auto"
                        >
                          View Artifact <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            )}

            {/* Canvas Section */}
            {groupedResources["Canvas"] && (
              <div className="mb-16">
                <h3 className="text-2xl font-bold mb-6 text-white">Visual Resources</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {groupedResources["Canvas"].map((resource) => (
                    <ScrollReveal key={resource.id} delay={0.1 * (resource.id % 5)}>
                      <div className="bg-black-200 rounded-xl border border-white/10 p-6 h-full flex flex-col transition-all duration-300 hover:border-white/20 hover:shadow-lg">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <div className="bg-gradient-to-br from-revolut-pink-500 to-revolut-blue-500 p-2 rounded-lg mr-3">
                              {resource.icon}
                            </div>
                            <h4 className="font-bold text-white">{resource.title}</h4>
                          </div>
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${platformColors[resource.platform]} text-white`}
                          >
                            {resource.platform}
                          </span>
                        </div>
                        <p className="text-white/70 mb-4 flex-grow">{resource.description}</p>
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-revolut-blue-400 hover:text-revolut-blue-300 mt-auto"
                        >
                          View Canvas <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            )}

            {/* Shared Resources Section */}
            {groupedResources["Share"] && (
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">Shared Resources</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {groupedResources["Share"].map((resource) => (
                    <ScrollReveal key={resource.id} delay={0.1 * (resource.id % 5)}>
                      <div className="bg-black-200 rounded-xl border border-white/10 p-6 h-full flex flex-col transition-all duration-300 hover:border-white/20 hover:shadow-lg">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <div className="bg-gradient-to-br from-revolut-blue-500 to-revolut-purple-500 p-2 rounded-lg mr-3">
                              {resource.icon}
                            </div>
                            <h4 className="font-bold text-white">{resource.title}</h4>
                          </div>
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${platformColors[resource.platform]} text-white`}
                          >
                            {resource.platform}
                          </span>
                        </div>
                        <p className="text-white/70 mb-4 flex-grow">{resource.description}</p>
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-revolut-blue-400 hover:text-revolut-blue-300 mt-auto"
                        >
                          View Resource <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* Key Concepts Section */}
          <section className="space-content mb-20">
            <ScrollReveal width="100%">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">Key Concepts</h2>
            </ScrollReveal>

            <div className="bg-black-200 rounded-2xl p-8 border border-white/10 mb-16">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Everything as an Object</h3>
                    <p className="text-white/80">
                      The UOR framework extends the object-oriented programming paradigm to the entire universe,
                      treating every entity—whether digital or physical—as an object with properties, relationships, and
                      behaviors.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Semantic Context</h3>
                    <p className="text-white/80">
                      UOR preserves the meaning and context of data as it moves between systems, ensuring that
                      information remains coherent and interpretable regardless of where or how it's processed.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Distributed Coherence</h3>
                    <p className="text-white/80">
                      By providing a universal reference system, UOR enables disparate systems to maintain a coherent
                      understanding of shared objects, even in decentralized and disconnected environments.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Data Sovereignty</h3>
                    <p className="text-white/80">
                      UOR supports true data ownership by allowing individuals and organizations to maintain control
                      over their data while still enabling secure, verifiable sharing and computation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="space-content">
            <ScrollReveal width="100%">
              <div className="bg-gradient-to-br from-revolut-blue-500/10 to-revolut-purple-500/10 rounded-2xl p-8 border border-white/10 text-center">
                <h3 className="text-2xl font-bold mb-4 text-white">Want to Learn More?</h3>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  Join our community to access more resources, participate in discussions, and contribute to the
                  development of the UOR Framework.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="https://discord.gg/ZwuZaNyuve"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full px-6 py-2 text-base font-medium bg-white text-black hover:bg-white/90 revolut-button inline-flex items-center justify-center"
                  >
                    Join Our Discord
                  </a>
                  <a
                    href="https://github.com/UOR-Foundation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full px-6 py-2 text-base font-medium border border-white text-white bg-transparent hover:bg-white/10 revolut-button inline-flex items-center justify-center"
                  >
                    Explore GitHub
                  </a>
                </div>
              </div>
            </ScrollReveal>
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
