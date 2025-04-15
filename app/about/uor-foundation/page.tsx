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
import { ArrowRight, Users, Lightbulb, Globe, Code, Server, Workflow, Target, Layers, Compass } from "lucide-react"

export default function UORFoundationPage() {
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
              <div className="text-4xl md:text-6xl font-bold mb-2 high-contrast-text">About</div>
              <div className="text-4xl md:text-6xl font-bold mb-6 high-contrast-text gradient-text">UOR Foundation</div>
            </div>
          </ScrollReveal>
          <ScrollReveal width="100%" delay={0.2}>
            <p className="subtitle-text max-w-2xl mx-auto text-white high-contrast-text text-center">
              Building the infrastructure for an internet where data is sovereign, semantic, and empowering
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow py-16 px-4 sm:px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          {/* Our Story Section */}
          <section className="space-content mb-20">
            <ScrollReveal width="100%">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">Our Story</h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <StaggerReveal>
                  <p className="text-lg mb-6 text-white">
                    UOR Foundation began with a simple but profound question: What if the internet had a shared
                    reference system for meaning?
                  </p>
                  <p className="text-lg mb-6 text-white">
                    Founded by a team of researchers, engineers, and visionaries, UOR Foundation emerged from work at
                    Red Hat, as documented in the pioneering article{" "}
                    <Link
                      href="https://next.redhat.com/2022/07/13/the-uor-framework/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 underline"
                    >
                      The UOR Framework
                    </Link>
                    .
                  </p>
                  <p className="text-lg mb-6 text-white">
                    We recognized that the internet was built for content, not context. Without a shared semantic
                    reference system, data becomes fragmented, hard to trust, and difficult to interoperate. This limits
                    innovation, fuels misinformation, and centralizes control.
                  </p>
                  <p className="text-lg mb-6 text-white">
                    Our mission became clear: build the infrastructure for an internet where data is sovereign,
                    semantic, and empowering—where information flows freely and meaningfully across people, systems, and
                    borders.
                  </p>
                </StaggerReveal>
              </div>

              <ParallaxSection direction="left" speed={0.1}>
                <div className="relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-revolut-blue-500 via-revolut-purple-500 to-revolut-pink-500 opacity-20 blur-3xl"></div>
                  <Card3D className="bg-black-200 p-8 rounded-2xl border border-white/10 relative z-10">
                    <div className="flex items-center justify-center mb-6">
                      <Image
                        src="/uor_god.svg"
                        alt="UOR Foundation Logo"
                        width={120}
                        height={120}
                        className="w-full max-w-[120px] h-auto"
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-center text-white">UOR Foundation</h3>
                    <p className="text-white text-center mb-4">
                      A public benefit organization dedicated to building the semantic layer of the internet
                    </p>
                  </Card3D>
                </div>
              </ParallaxSection>
            </div>
          </section>

          {/* What We Do Section */}
          <section className="space-content mb-20">
            <ScrollReveal width="100%">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">What We Do</h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <ScrollReveal delay={0.1}>
                <Card3D className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <div className="bg-gradient-to-br from-revolut-blue-500 to-revolut-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Lightbulb className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Research & Development</h3>
                  <p className="text-white/80">
                    We conduct foundational research in semantic computing, developing the{" "}
                    <Link href="/about/uor-framework" className="text-blue-400 hover:text-blue-300">
                      UOR Framework
                    </Link>{" "}
                    as a universal reference system for digital meaning.
                  </p>
                </Card3D>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <Card3D className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <div className="bg-gradient-to-br from-revolut-purple-500 to-revolut-pink-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Code className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Product Development</h3>
                  <p className="text-white/80">
                    We build practical applications of the UOR Framework, including{" "}
                    <Link href="/prime-sdk" className="text-blue-400 hover:text-blue-300">
                      Prime SDK
                    </Link>
                    ,{" "}
                    <Link href="/prime-appstore" className="text-blue-400 hover:text-blue-300">
                      Prime AppStore
                    </Link>
                    , and{" "}
                    <Link href="/prime-os" className="text-blue-400 hover:text-blue-300">
                      PrimeOS
                    </Link>
                    .
                  </p>
                </Card3D>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <Card3D className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <div className="bg-gradient-to-br from-revolut-pink-500 to-revolut-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Globe className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Community Building</h3>
                  <p className="text-white/80">
                    We foster an open ecosystem of developers, researchers, and organizations working together to build
                    a more semantic, sovereign internet.
                  </p>
                </Card3D>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.4}>
              <div className="bg-gradient-to-br from-revolut-blue-500/10 to-revolut-purple-500/10 rounded-2xl p-8 border border-white/10 text-center">
                <h3 className="text-2xl font-bold mb-4 text-white">Our Approach</h3>
                <p className="text-white/80 mb-6 max-w-3xl mx-auto">
                  UOR Foundation is structured like the architecture we're building: open, modular, and built for
                  composability. We operate at the intersection of research, engineering, and community, with a
                  commitment to open standards and public benefit.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    className="rounded-full px-6 py-3 text-base font-medium bg-white text-black hover:bg-white/90 revolut-button"
                    asChild
                  >
                    <Link href="/product">Explore Our Products</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full px-6 py-3 text-base font-medium border-white text-white bg-transparent hover:bg-white/10 revolut-button"
                    asChild
                  >
                    <Link href="/about/uor-framework">Learn About UOR Framework</Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* Unity of Effort Framework Section */}
          <section className="space-content mb-20">
            <ScrollReveal width="100%">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">
                Unity of Effort Framework
              </h2>
              <p className="text-white/80 text-center max-w-3xl mx-auto mb-12">
                Our organizational framework for defining and achieving our mission through coordinated, collaborative
                action
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <StaggerReveal>
                  <p className="text-lg mb-6 text-white">
                    The Unity of Effort Framework guides how we organize, plan, and execute our mission to build the
                    semantic layer of the internet. It ensures that all our initiatives are aligned, coordinated, and
                    working toward our shared vision.
                  </p>
                  <p className="text-lg mb-6 text-white">
                    This framework is built on four core principles that drive our work:
                  </p>
                  <ul className="list-disc pl-5 space-y-3 text-lg text-white mb-6">
                    <li>
                      <span className="font-medium">Common understanding of the situation</span> — We ensure all team
                      members and partners share a clear view of the challenges and opportunities in building a semantic
                      internet
                    </li>
                    <li>
                      <span className="font-medium">Common vision and objectives</span> — We align around shared goals
                      that guide our research, development, and community efforts
                    </li>
                    <li>
                      <span className="font-medium">Coordination of efforts</span> — We synchronize our work across
                      technical domains and organizational boundaries
                    </li>
                    <li>
                      <span className="font-medium">Common measures of progress</span> — We track our advancement with
                      shared metrics and adapt our approach as needed
                    </li>
                  </ul>
                </StaggerReveal>
              </div>

              <ParallaxSection direction="right" speed={0.1}>
                <div className="relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-revolut-blue-500 via-revolut-purple-500 to-revolut-blue-500 opacity-20 blur-3xl"></div>
                  <Card3D className="bg-black-200 p-8 rounded-2xl border border-white/10 relative z-10">
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-revolut-blue-500 to-revolut-purple-500 flex items-center justify-center">
                        <Workflow className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-center text-white">Framework Benefits</h3>
                    <ul className="space-y-3 text-white">
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-revolut-blue-500/20 flex items-center justify-center mr-2 mt-0.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
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
                        <span>Improved coordination across technical domains</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-revolut-blue-500/20 flex items-center justify-center mr-2 mt-0.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
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
                        <span>Enhanced visibility of efforts and activities</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-revolut-blue-500/20 flex items-center justify-center mr-2 mt-0.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
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
                        <span>Consistent planning and execution process</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-revolut-blue-500/20 flex items-center justify-center mr-2 mt-0.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
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
                        <span>Identification of resource gaps and opportunities</span>
                      </li>
                    </ul>
                  </Card3D>
                </div>
              </ParallaxSection>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-16">
              <ScrollReveal delay={0.1}>
                <Card3D className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <div className="bg-gradient-to-br from-revolut-blue-500 to-revolut-blue-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Stage 1: Initiation</h3>
                  <p className="text-white/80 mb-4">
                    We begin by identifying our mission scope, key stakeholders, and the strategic guidance that shapes
                    our work. This establishes the foundation for all subsequent planning and execution.
                  </p>
                </Card3D>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <Card3D className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <div className="bg-gradient-to-br from-revolut-purple-500 to-revolut-purple-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Compass className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Stage 2: Common View</h3>
                  <p className="text-white/80 mb-4">
                    We develop a shared understanding of our objectives, operating environment, and categories of
                    effort. This creates alignment on what we're trying to achieve and how we'll get there.
                  </p>
                </Card3D>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <Card3D className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <div className="bg-gradient-to-br from-revolut-pink-500 to-revolut-pink-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Layers className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Stage 3: Common Understanding</h3>
                  <p className="text-white/80 mb-4">
                    We map our capabilities and responsibilities across key intersections of objectives and
                    environments, identifying where we lead and where we contribute to the broader mission.
                  </p>
                </Card3D>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <Card3D className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <div className="bg-gradient-to-br from-revolut-blue-500 to-revolut-pink-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Workflow className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Stage 4: Coordination of Effort</h3>
                  <p className="text-white/80 mb-4">
                    We conduct deep dives into key areas, sharing detailed information on capabilities, capacities, and
                    activities to ensure coordinated execution and identify opportunities for collaboration.
                  </p>
                </Card3D>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.5}>
              <div className="bg-gradient-to-br from-revolut-blue-500/10 to-revolut-purple-500/10 rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-4 text-white text-center">Framework in Action</h3>
                <p className="text-white/80 mb-6 max-w-3xl mx-auto text-center">
                  The Unity of Effort Framework guides our work across all aspects of building the semantic layer of the
                  internet:
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-black/30 p-5 rounded-xl border border-white/10">
                    <h4 className="text-lg font-bold mb-3 text-white">Research Coordination</h4>
                    <p className="text-white/80">
                      We align our research initiatives across post-quantum cryptography, semantic computing, and AI
                      consciousness to ensure complementary progress toward our shared vision.
                    </p>
                  </div>
                  <div className="bg-black/30 p-5 rounded-xl border border-white/10">
                    <h4 className="text-lg font-bold mb-3 text-white">Product Development</h4>
                    <p className="text-white/80">
                      Our Prime SDK, AppStore, and OS development teams coordinate through the framework to ensure
                      interoperability and consistent implementation of UOR principles.
                    </p>
                  </div>
                  <div className="bg-black/30 p-5 rounded-xl border border-white/10">
                    <h4 className="text-lg font-bold mb-3 text-white">Community Engagement</h4>
                    <p className="text-white/80">
                      We synchronize our developer outreach, educational initiatives, and partnership programs to build
                      a cohesive ecosystem around the UOR Framework.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* Our Team Section */}
          <section className="space-content mb-20">
            <ScrollReveal width="100%">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">Our Team</h2>
              <p className="text-white/80 text-center max-w-3xl mx-auto mb-12">
                UOR Foundation brings together world-class experts from diverse fields, united by a shared vision of
                building the semantic layer of the internet
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <ParallaxSection direction="right" speed={0.1}>
                <div className="relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-revolut-blue-500 via-revolut-purple-500 to-revolut-blue-500 opacity-20 blur-3xl"></div>
                  <Card3D className="bg-black-200 p-8 rounded-2xl border border-white/10 relative z-10">
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-revolut-blue-500 to-revolut-purple-500 flex items-center justify-center">
                        <Users className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-center text-white">Join Our Team</h3>
                    <p className="text-white text-center mb-4">
                      We're looking for passionate individuals to help build the semantic layer of the internet
                    </p>
                    <div className="flex justify-center mt-4">
                      <Button
                        variant="outline"
                        className="rounded-full border-white/20 text-white hover:bg-white/10"
                        asChild
                      >
                        <Link href="https://discord.gg/ZwuZaNyuve" target="_blank" rel="noopener noreferrer">
                          Join Our Discord
                        </Link>
                      </Button>
                    </div>
                  </Card3D>
                </div>
              </ParallaxSection>

              <div>
                <StaggerReveal>
                  <h3 className="text-xl font-bold mb-4 text-white">Core Expertise</h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/5 p-3 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 rounded-full bg-revolut-blue-500/20 flex items-center justify-center mr-2">
                          <Code className="h-4 w-4 text-revolut-blue-400" />
                        </div>
                        <span className="font-medium text-white">Post-Quantum Cryptography</span>
                      </div>
                      <p className="text-sm text-white/80">
                        Pioneering next-generation cryptographic frameworks and secure protocols
                      </p>
                    </div>

                    <div className="bg-white/5 p-3 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 rounded-full bg-revolut-purple-500/20 flex items-center justify-center mr-2">
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
                            className="text-revolut-purple-400"
                          >
                            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                            <path d="M9 18h6"></path>
                            <path d="M10 22h4"></path>
                          </svg>
                        </div>
                        <span className="font-medium text-white">AI & Consciousness Research</span>
                      </div>
                      <p className="text-sm text-white/80">
                        Exploring the frontiers of machine intelligence, ethics, and conscious AI systems
                      </p>
                    </div>

                    <div className="bg-white/5 p-3 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 rounded-full bg-revolut-pink-500/20 flex items-center justify-center mr-2">
                          <Server className="h-4 w-4 text-revolut-pink-400" />
                        </div>
                        <span className="font-medium text-white">Cloud-Native Architecture</span>
                      </div>
                      <p className="text-sm text-white/80">
                        Building scalable, secure infrastructure with Kubernetes and multi-cloud expertise
                      </p>
                    </div>

                    <div className="bg-white/5 p-3 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 rounded-full bg-revolut-blue-500/20 flex items-center justify-center mr-2">
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
                            className="text-revolut-blue-400"
                          >
                            <rect x="2" y="6" width="20" height="12" rx="2"></rect>
                            <path d="M12 12h.01"></path>
                            <path d="M17 12h.01"></path>
                            <path d="M7 12h.01"></path>
                          </svg>
                        </div>
                        <span className="font-medium text-white">Institutional DeFi & Finance</span>
                      </div>
                      <p className="text-sm text-white/80">
                        Bridging traditional finance with decentralized Web3 infrastructure and tokenization
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-white">Background & Experience</h3>
                  <ul className="space-y-3 text-white mb-6">
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-revolut-blue-500/20 flex items-center justify-center mr-2 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
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
                      <span>
                        Military and defense technology expertise, including secure communications and tactical systems
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-revolut-blue-500/20 flex items-center justify-center mr-2 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
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
                      <span>Leadership roles at Red Hat, Microsoft, NASA, Siemens, and other technology pioneers</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-revolut-blue-500/20 flex items-center justify-center mr-2 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
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
                      <span>Advanced degrees in engineering, mathematics, economics, and computer science</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-revolut-blue-500/20 flex items-center justify-center mr-2 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
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
                      <span>Government advisory roles in AI policy, cybersecurity, and digital transformation</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-revolut-blue-500/20 flex items-center justify-center mr-2 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
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
                      <span>Founders and leaders of successful technology ventures and investment funds</span>
                    </li>
                  </ul>

                  <p className="text-lg mb-4 text-white">
                    Our team combines deep technical expertise with strategic vision, bringing together specialists in
                    cryptography, AI, cloud infrastructure, and decentralized finance to build the semantic layer of the
                    internet.
                  </p>
                </StaggerReveal>
              </div>
            </div>
          </section>

          {/* Our Products Section */}
          <section className="space-content mb-20">
            <ScrollReveal width="100%">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">Our Products</h2>
              <p className="text-white/80 text-center max-w-3xl mx-auto mb-12">
                Practical applications of the{" "}
                <Link href="/about/uor-framework" className="text-blue-400 hover:text-blue-300">
                  UOR Framework
                </Link>{" "}
                for building, shipping, and running semantic applications
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
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
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
                  text="Join Us in Building the Future"
                  className="text-3xl md:text-5xl font-bold mb-6"
                  type="words"
                  animation="slide-up"
                />
              </ScrollReveal>
              <ScrollReveal width="100%" delay={0.2}>
                <p className="subtitle-text mb-8 max-w-3xl mx-auto text-white">
                  Help us create an internet where data has meaning, people have ownership, and systems work together
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
