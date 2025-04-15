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
import { ArrowLeft } from "lucide-react"

export default function ClientServerPage() {
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
        <div className="absolute inset-0 bg-gradient-to-br from-revolut-pink-500 via-revolut-pink-700 to-revolut-pink-900 opacity-80"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <GradientBackground blur={80} />
        <ParticleBackground />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal width="100%">
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold mb-2 high-contrast-text">UOR Framework</div>
              <div className="text-3xl md:text-5xl font-bold mb-6 high-contrast-text gradient-text">Client/Server</div>
            </div>
          </ScrollReveal>
          <ScrollReveal width="100%" delay={0.2}>
            <p className="subtitle-text max-w-2xl mx-auto text-white high-contrast-text text-center">
              A distributed architecture that enables secure, verifiable communication while maintaining data
              sovereignty
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
                    <span className="text-white ml-1 md:ml-2">Client/Server</span>
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
                  <h2 className="text-3xl font-bold mb-6 gradient-text">Distributed Architecture</h2>
                </ScrollReveal>
                <StaggerReveal>
                  <p className="text-lg mb-6 text-white">
                    The UOR Client/Server architecture provides a distributed framework for secure, verifiable
                    communication between clients and servers while maintaining data sovereignty and semantic integrity.
                  </p>
                  <p className="text-lg mb-6 text-white">
                    This architecture enables UOR-native applications to operate in a trust-minimized environment, where
                    all parties can verify the correctness of computations and the integrity of data.
                  </p>
                </StaggerReveal>
              </div>

              <ParallaxSection direction="left" speed={0.1}>
                <div className="relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-revolut-pink-500 to-revolut-pink-700 opacity-20 blur-3xl"></div>
                  <Card3D className="bg-black-200 p-8 rounded-2xl border border-white/10 relative z-10">
                    <div className="flex items-center justify-center mb-6">
                      <div className="bg-gradient-to-br from-revolut-pink-500 to-revolut-pink-700 w-20 h-20 rounded-lg flex items-center justify-center">
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
                          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                          <line x1="6" y1="6" x2="6.01" y2="6"></line>
                          <line x1="6" y1="18" x2="6.01" y2="18"></line>
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-center text-white">Client/Server</h3>
                    <p className="text-white text-center mb-4">
                      Distributed architecture for trust-minimized computing
                    </p>
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
                The Client/Server architecture consists of several key components that work together to enable
                trust-minimized computing
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <ScrollReveal delay={0.1}>
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
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Trust-Minimized Communication</h3>
                  <p className="text-white/80">
                    Protocols and mechanisms for secure, verifiable communication between clients and servers,
                    minimizing the need for trust between parties.
                  </p>
                  <ul className="space-y-2 text-white/80 mt-4">
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
                      <span>Secure authentication mechanisms</span>
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
                      <span>Verifiable request/response patterns</span>
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
                      <span>End-to-end encryption</span>
                    </li>
                  </ul>
                </Card3D>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
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
                      <path d="M21 2H3v16h5v4l4-4h5l4-4V2zM12 10v4M8 10v4M16 10v4"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Deterministic Execution</h3>
                  <p className="text-white/80">
                    An execution environment that ensures deterministic behavior, enabling verifiable computation and
                    reproducible results across different systems.
                  </p>
                  <ul className="space-y-2 text-white/80 mt-4">
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
                      <span>Sandboxed execution environment</span>
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
                      <span>Reproducible computation</span>
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
                      <span>Verifiable execution proofs</span>
                    </li>
                  </ul>
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
                      <path d="M17 6.1H3"></path>
                      <path d="M21 12.1H3"></path>
                      <path d="M15.1 18H3"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Peer-to-Peer Verification</h3>
                  <p className="text-white/80">
                    Mechanisms for peer-to-peer verification of computation and data, enabling a decentralized trust
                    model where no single entity has complete control.
                  </p>
                  <ul className="space-y-2 text-white/80 mt-4">
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
                      <span>Distributed consensus mechanisms</span>
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
                      <span>Multi-party computation</span>
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
                      <span>Decentralized verification networks</span>
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
                <h3 className="text-2xl font-bold mb-6 text-white">Architecture Overview</h3>
                <p className="text-white/80 mb-6">
                  The UOR Client/Server architecture is designed to enable trust-minimized computing across distributed
                  systems:
                </p>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 gap-8">
                <ScrollReveal delay={0.1}>
                  <div className="bg-black/40 p-6 rounded-lg border border-white/10">
                    <h4 className="text-xl font-bold mb-4 text-white">Client-Side Components</h4>
                    <p className="text-white/80 mb-4">
                      The client-side components of the UOR Client/Server architecture include the UOR runtime, which
                      provides a secure, deterministic execution environment for UOR-native applications.
                    </p>
                    <p className="text-white/80">
                      These components ensure that client-side computations are verifiable and reproducible, enabling
                      trust-minimized interactions with servers and other clients.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <div className="bg-black/40 p-6 rounded-lg border border-white/10">
                    <h4 className="text-xl font-bold mb-4 text-white">Server-Side Components</h4>
                    <p className="text-white/80 mb-4">
                      The server-side components of the UOR Client/Server architecture include the UOR server runtime,
                      which provides a secure, deterministic execution environment for server-side computations. which
                      provides a secure, deterministic execution environment for server-side computations.
                    </p>
                    <p className="text-white/80">
                      These components ensure that server-side computations are verifiable and reproducible, enabling
                      clients to verify the correctness of server responses without having to trust the server.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            <div className="bg-black-200 p-8 rounded-xl border border-white/10">
              <ScrollReveal>
                <h3 className="text-2xl font-bold mb-6 text-white">Implementation Details</h3>
                <p className="text-white/80 mb-6">
                  The UOR Client/Server architecture is implemented with a focus on security, performance, and
                  interoperability:
                </p>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 gap-8">
                <ScrollReveal delay={0.1}>
                  <div className="bg-black/40 p-6 rounded-lg border border-white/10">
                    <h4 className="text-xl font-bold mb-4 text-white">Communication Protocols</h4>
                    <p className="text-white/80 mb-4">
                      The Client/Server architecture includes secure communication protocols that ensure the integrity
                      and confidentiality of data during transit, with support for various transport mechanisms.
                    </p>
                    <p className="text-white/80">
                      These protocols are designed to work with the UOR Data Protocols, enabling seamless integration
                      with existing systems while maintaining semantic integrity.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <div className="bg-black/40 p-6 rounded-lg border border-white/10">
                    <h4 className="text-xl font-bold mb-4 text-white">Runtime Environment</h4>
                    <p className="text-white/80 mb-4">
                      The Client/Server architecture includes a deterministic runtime environment that ensures
                      consistent behavior across different systems, enabling verifiable computation and reproducible
                      results.
                    </p>
                    <p className="text-white/80">
                      This environment is designed to work with the UOR Math Package, providing a secure foundation for
                      cryptographic operations and verifiable computation.
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
                The Client/Server architecture enables a wide range of applications across various domains
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <ScrollReveal delay={0.1}>
                <div className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <h3 className="text-xl font-bold mb-4 text-white">Distributed Applications</h3>
                  <p className="text-white/80">
                    The Client/Server architecture enables the development of distributed applications that maintain
                    semantic integrity and verifiability across nodes, even in decentralized environments.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <h3 className="text-xl font-bold mb-4 text-white">Trust-Minimized Systems</h3>
                  <p className="text-white/80">
                    The Client/Server architecture enables the development of trust-minimized systems where parties can
                    interact and compute without having to fully trust each other.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <h3 className="text-xl font-bold mb-4 text-white">Verifiable Computation</h3>
                  <p className="text-white/80">
                    The Client/Server architecture enables verifiable computation, where clients can verify the
                    correctness of server-side computations without having to re-execute them.
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
                <Link href="/about/uor-framework/data-protocols">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Data Protocols
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
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="space-section px-4 sm:px-6 relative text-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-revolut-pink-500 via-revolut-pink-700 to-revolut-pink-900 opacity-80"></div>
            <div className="absolute inset-0 bg-black/50"></div>
            <GradientBackground blur={80} />

            <div className="max-w-4xl mx-auto text-center relative z-10">
              <ScrollReveal width="100%">
                <AnimatedText
                  text="Build with Trust-Minimized Computing"
                  className="text-3xl md:text-5xl font-bold mb-6"
                  type="words"
                  animation="slide-up"
                />
              </ScrollReveal>
              <ScrollReveal width="100%" delay={0.2}>
                <p className="subtitle-text mb-8 max-w-3xl mx-auto text-white">
                  Join us in creating a world where computation is verifiable, secure, and semantically meaningful.
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
