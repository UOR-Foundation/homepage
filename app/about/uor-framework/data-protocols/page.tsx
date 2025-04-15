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
import { ArrowRight, ArrowLeft } from "lucide-react"

export default function DataProtocolsPage() {
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
        <div className="absolute inset-0 bg-gradient-to-br from-revolut-purple-500 via-revolut-purple-700 to-revolut-purple-900 opacity-80"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <GradientBackground blur={80} />
        <ParticleBackground />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal width="100%">
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold mb-2 high-contrast-text">UOR Framework</div>
              <div className="text-3xl md:text-5xl font-bold mb-6 high-contrast-text gradient-text">Data Protocols</div>
            </div>
          </ScrollReveal>
          <ScrollReveal width="100%" delay={0.2}>
            <p className="subtitle-text max-w-2xl mx-auto text-white high-contrast-text text-center">
              Standardized data exchange formats that ensure semantic integrity and interoperability
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow py-16 px-4 sm:px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link href="/" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg
                      className="w-3 h-3 text-gray-400 mx-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <Link href="/about/uor-framework" className="text-gray-400 hover:text-white ml-1 md:ml-2">
                      UOR Framework
                    </Link>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg
                      className="w-3 h-3 text-gray-400 mx-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <span className="text-white ml-1 md:ml-2">Data Protocols</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>

          {/* Introduction Section */}
          <section className="space-content mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <ScrollReveal>
                  <h2 className="text-3xl font-bold mb-6 gradient-text">Data Exchange Standards</h2>
                </ScrollReveal>
                <StaggerReveal>
                  <p className="text-lg mb-6 text-white">
                    UOR Data Protocols provide standardized formats and mechanisms for exchanging data between systems
                    while preserving semantic integrity and ensuring data sovereignty.
                  </p>
                  <p className="text-lg mb-6 text-white">
                    These protocols enable seamless interoperability between UOR-native applications and traditional
                    systems, creating a bridge between the semantic web and existing infrastructure.
                  </p>
                </StaggerReveal>
              </div>

              <ParallaxSection direction="left" speed={0.1}>
                <div className="relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-revolut-purple-500 to-revolut-purple-700 opacity-20 blur-3xl"></div>
                  <Card3D className="bg-black-200 p-8 rounded-2xl border border-white/10 relative z-10">
                    <div className="flex items-center justify-center mb-6">
                      <div className="bg-gradient-to-br from-revolut-purple-500 to-revolut-purple-700 w-20 h-20 rounded-lg flex items-center justify-center">
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
                          <path d="M12 22v-5"></path>
                          <path d="M9 8V2"></path>
                          <path d="M15 8V2"></path>
                          <path d="M12 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
                          <path d="M12 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
                          <path d="M12 20a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-center text-white">Data Protocols</h3>
                    <p className="text-white text-center mb-4">Standardized formats for semantic data exchange</p>
                  </Card3D>
                </div>
              </ParallaxSection>
            </div>
          </section>

          {/* Key Components Section */}
          <section className="space-content mb-20">
            <ScrollReveal width="100%">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">Key Components</h2>
              <p className="text-white/80 text-center max-w-3xl mx-auto mb-12">
                The Data Protocols consist of several key components that work together to enable semantic data exchange
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <ScrollReveal delay={0.1}>
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
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="3.29 7 12 12 20.71 7"></polyline>
                      <line x1="12" y1="22" x2="12" y2="12"></line>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Universal Object Reference Format</h3>
                  <p className="text-white/80">
                    A standardized format for representing objects and their relationships, enabling semantic clarity
                    and interoperability across systems.
                  </p>
                  <ul className="space-y-2 text-white/80 mt-4">
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
                      <span>Unique object identifiers</span>
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
                      <span>Property and relationship definitions</span>
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
                      <span>Semantic type system</span>
                    </li>
                  </ul>
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
                      <circle cx="18" cy="18" r="3"></circle>
                      <circle cx="6" cy="6" r="3"></circle>
                      <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
                      <line x1="6" y1="9" x2="6" y2="21"></line>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Semantic Graph Exchange</h3>
                  <p className="text-white/80">
                    Protocols for exchanging semantic graphs between systems, enabling the preservation of context and
                    relationships during data transfer.
                  </p>
                  <ul className="space-y-2 text-white/80 mt-4">
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
                      <span>Graph serialization formats</span>
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
                      <span>Incremental graph updates</span>
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
                      <span>Conflict resolution mechanisms</span>
                    </li>
                  </ul>
                </Card3D>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
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
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Data Sovereignty Mechanisms</h3>
                  <p className="text-white/80">
                    Mechanisms for ensuring data sovereignty, enabling individuals and organizations to maintain control
                    over their data while still enabling secure, verifiable sharing.
                  </p>
                  <ul className="space-y-2 text-white/80 mt-4">
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
                      <span>Access control policies</span>
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
                      <span>Data provenance tracking</span>
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
                      <span>Consent management</span>
                    </li>
                  </ul>
                </Card3D>
              </ScrollReveal>
            </div>
          </section>

          {/* Technical Details Section */}
          <section className="space-content mb-20">
            <ScrollReveal width="100%">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">Technical Details</h2>
            </ScrollReveal>

            <div className="bg-black-200 p-8 rounded-xl border border-white/10 mb-12">
              <ScrollReveal>
                <h3 className="text-2xl font-bold mb-6 text-white">Protocol Specifications</h3>
                <p className="text-white/80 mb-6">
                  The UOR Data Protocols are defined by a set of specifications that ensure interoperability and
                  semantic integrity across systems:
                </p>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 gap-8">
                <ScrollReveal delay={0.1}>
                  <div className="bg-black/40 p-6 rounded-lg border border-white/10">
                    <h4 className="text-xl font-bold mb-4 text-white">UOR Object Format</h4>
                    <p className="text-white/80 mb-4">
                      The UOR Object Format defines how objects are represented in the UOR ecosystem, including their
                      properties, relationships, and behaviors.
                    </p>
                    <p className="text-white/80">
                      This format ensures that objects maintain their semantic integrity as they move between systems,
                      enabling seamless interoperability.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <div className="bg-black/40 p-6 rounded-lg border border-white/10">
                    <h4 className="text-xl font-bold mb-4 text-white">Graph Exchange Protocol</h4>
                    <p className="text-white/80 mb-4">
                      The Graph Exchange Protocol defines how semantic graphs are exchanged between systems, including
                      serialization formats, incremental updates, and conflict resolution.
                    </p>
                    <p className="text-white/80">
                      This protocol ensures that semantic relationships are preserved during data transfer, enabling
                      systems to maintain a coherent understanding of shared objects.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            <div className="bg-black-200 p-8 rounded-xl border border-white/10">
              <ScrollReveal>
                <h3 className="text-2xl font-bold mb-6 text-white">Implementation Details</h3>
                <p className="text-white/80 mb-6">
                  The UOR Data Protocols are implemented with a focus on interoperability, performance, and security:
                </p>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 gap-8">
                <ScrollReveal delay={0.1}>
                  <div className="bg-black/40 p-6 rounded-lg border border-white/10">
                    <h4 className="text-xl font-bold mb-4 text-white">Protocol Bindings</h4>
                    <p className="text-white/80 mb-4">
                      The Data Protocols include bindings for various transport protocols, including HTTP, WebSockets,
                      and peer-to-peer protocols, enabling integration with a wide range of systems.
                    </p>
                    <p className="text-white/80">
                      These bindings ensure that UOR-native applications can communicate with existing systems and
                      infrastructure, creating a bridge between the semantic web and traditional systems.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <div className="bg-black/40 p-6 rounded-lg border border-white/10">
                    <h4 className="text-xl font-bold mb-4 text-white">Security Considerations</h4>
                    <p className="text-white/80 mb-4">
                      The Data Protocols include security considerations such as authentication, authorization, and
                      encryption, ensuring that data is protected during transit and at rest.
                    </p>
                    <p className="text-white/80">
                      These security measures are designed to work with the UOR Math Package's cryptographic primitives,
                      providing end-to-end security for UOR-native applications.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>

          {/* Applications Section */}
          <section className="space-content mb-20">
            <ScrollReveal width="100%">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">Applications</h2>
              <p className="text-white/80 text-center max-w-3xl mx-auto mb-12">
                The Data Protocols enable a wide range of applications across various domains
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <ScrollReveal delay={0.1}>
                <div className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <h3 className="text-xl font-bold mb-4 text-white">Data Sharing</h3>
                  <p className="text-white/80">
                    The Data Protocols enable secure, verifiable data sharing between individuals, organizations, and
                    systems, with full control over who can access what data and for what purpose.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <h3 className="text-xl font-bold mb-4 text-white">System Integration</h3>
                  <p className="text-white/80">
                    The Data Protocols enable seamless integration between UOR-native applications and traditional
                    systems, creating a bridge between the semantic web and existing infrastructure.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <h3 className="text-xl font-bold mb-4 text-white">Data Sovereignty</h3>
                  <p className="text-white/80">
                    The Data Protocols enable true data sovereignty, allowing individuals and organizations to maintain
                    control over their data while still enabling secure, verifiable sharing and computation.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* Navigation Section */}
          <section className="space-content mb-20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <Button
                variant="outline"
                className="rounded-full px-6 py-3 text-base font-medium border-white text-white bg-transparent hover:bg-white/10 revolut-button"
                asChild
              >
                <Link href="/about/uor-framework/math-package">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Math Package
                </Link>
              </Button>

              <Button
                variant="outline"
                className="rounded-full px-6 py-3 text-base font-medium border-white text-white bg-transparent hover:bg-white/10 revolut-button"
                asChild
              >
                <Link href="/about/uor-framework">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to UOR Framework
                </Link>
              </Button>

              <Button
                className="rounded-full px-6 py-3 text-base font-medium bg-white text-black hover:bg-white/90 revolut-button"
                asChild
              >
                <Link href="/about/uor-framework/client-server">
                  Explore Client/Server <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="space-section px-4 sm:px-6 relative text-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-revolut-purple-500 via-revolut-purple-700 to-revolut-purple-900 opacity-80"></div>
            <div className="absolute inset-0 bg-black/50"></div>
            <GradientBackground blur={80} />

            <div className="max-w-4xl mx-auto text-center relative z-10">
              <ScrollReveal width="100%">
                <AnimatedText
                  text="Build with Semantic Integrity"
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
                    <Link href="https://github.com/UOR-Foundation" target="_blank" rel="noopener noreferrer">
                      Explore GitHub
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full px-6 py-5 sm:px-8 sm:py-6 text-base font-medium border-white text-white bg-transparent hover:bg-white/10 revolut-button"
                    asChild
                  >
                    <Link href="https://discord.gg/ZwuZaNyuve" target="_blank" rel="noopener noreferrer">
                      Join the Community
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
