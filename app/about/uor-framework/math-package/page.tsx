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

export default function MathPackagePage() {
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
        <div className="absolute inset-0 bg-gradient-to-br from-revolut-blue-500 via-revolut-blue-700 to-revolut-blue-900 opacity-80"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <GradientBackground blur={80} />
        <ParticleBackground />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal width="100%">
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold mb-2 high-contrast-text">UOR Framework</div>
              <div className="text-3xl md:text-5xl font-bold mb-6 high-contrast-text gradient-text">Math Package</div>
            </div>
          </ScrollReveal>
          <ScrollReveal width="100%" delay={0.2}>
            <p className="subtitle-text max-w-2xl mx-auto text-white high-contrast-text text-center">
              The mathematical foundation that enables deterministic computation and cryptographic verification
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
                    <span className="text-white ml-1 md:ml-2">Math Package</span>
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
                  <h2 className="text-3xl font-bold mb-6 gradient-text">The Mathematical Foundation</h2>
                </ScrollReveal>
                <StaggerReveal>
                  <p className="text-lg mb-6 text-white">
                    The UOR Math Package provides the cryptographic and mathematical primitives that enable
                    deterministic computation, verifiable proofs, and semantic reasoning across distributed systems.
                  </p>
                  <p className="text-lg mb-6 text-white">
                    It forms the foundation of the UOR Framework, ensuring that all operations are reproducible,
                    verifiable, and maintain semantic integrity regardless of where they are executed.
                  </p>
                </StaggerReveal>
              </div>

              <ParallaxSection direction="left" speed={0.1}>
                <div className="relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-revolut-blue-500 to-revolut-blue-700 opacity-20 blur-3xl"></div>
                  <Card3D className="bg-black-200 p-8 rounded-2xl border border-white/10 relative z-10">
                    <div className="flex items-center justify-center mb-6">
                      <div className="bg-gradient-to-br from-revolut-blue-500 to-revolut-blue-700 w-20 h-20 rounded-lg flex items-center justify-center">
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
                          <path d="M19 5h-7L8 9l-4 1-1 1 1 1 4 1 4 4h7a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"></path>
                          <path d="M13 5V3"></path>
                          <path d="M13 21v-2"></path>
                          <path d="M5 13H3"></path>
                          <path d="M21 13h-2"></path>
                          <path d="m19 5-7 7"></path>
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-center text-white">Math Package</h3>
                    <p className="text-white text-center mb-4">
                      The cryptographic foundation for deterministic computation
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
                The Math Package consists of several key components that work together to enable deterministic
                computation
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
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="9" y1="3" x2="9" y2="21"></line>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Post-Quantum Cryptography</h3>
                  <p className="text-white/80">
                    Cryptographic primitives that are resistant to attacks from quantum computers, ensuring long-term
                    security for UOR-native applications and data.
                  </p>
                  <ul className="space-y-2 text-white/80 mt-4">
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
                      <span>Lattice-based cryptography</span>
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
                      <span>Hash-based signatures</span>
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
                      <span>Isogeny-based cryptography</span>
                    </li>
                  </ul>
                </Card3D>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
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
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <path d="M12 18v-6"></path>
                      <path d="m9 15 3 3 3-3"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Verifiable Computation</h3>
                  <p className="text-white/80">
                    Mathematical models and algorithms that enable the verification of computational results without
                    re-executing the entire computation.
                  </p>
                  <ul className="space-y-2 text-white/80 mt-4">
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
                      <span>Zero-knowledge proofs</span>
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
                      <span>Succinct non-interactive arguments</span>
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
                      <span>Homomorphic computation</span>
                    </li>
                  </ul>
                </Card3D>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
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
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                      <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Semantic Graph Algorithms</h3>
                  <p className="text-white/80">
                    Algorithms for processing and analyzing semantic graphs, enabling the extraction of meaning and
                    relationships from complex data structures.
                  </p>
                  <ul className="space-y-2 text-white/80 mt-4">
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
                      <span>Graph traversal and search</span>
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
                      <span>Semantic reasoning engines</span>
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
                      <span>Pattern matching and inference</span>
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
                <h3 className="text-2xl font-bold mb-6 text-white">Mathematical Foundations</h3>
                <p className="text-white/80 mb-6">
                  The UOR Math Package is built on a foundation of advanced mathematical concepts that enable
                  deterministic computation and cryptographic verification:
                </p>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 gap-8">
                <ScrollReveal delay={0.1}>
                  <div className="bg-black/40 p-6 rounded-lg border border-white/10">
                    <h4 className="text-xl font-bold mb-4 text-white">Algebraic Structures</h4>
                    <p className="text-white/80 mb-4">
                      The Math Package leverages advanced algebraic structures such as groups, rings, and fields to
                      enable cryptographic operations and verifiable computation.
                    </p>
                    <p className="text-white/80">
                      These structures provide the mathematical foundation for operations like encryption, digital
                      signatures, and zero-knowledge proofs.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <div className="bg-black/40 p-6 rounded-lg border border-white/10">
                    <h4 className="text-xl font-bold mb-4 text-white">Computational Complexity</h4>
                    <p className="text-white/80 mb-4">
                      The security of the Math Package is based on well-studied computational complexity assumptions,
                      ensuring that cryptographic operations are secure against both classical and quantum attacks.
                    </p>
                    <p className="text-white/80">
                      These assumptions include the hardness of lattice problems, discrete logarithms, and other
                      post-quantum secure problems.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            <div className="bg-black-200 p-8 rounded-xl border border-white/10">
              <ScrollReveal>
                <h3 className="text-2xl font-bold mb-6 text-white">Implementation Details</h3>
                <p className="text-white/80 mb-6">
                  The UOR Math Package is implemented with a focus on security, performance, and portability:
                </p>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 gap-8">
                <ScrollReveal delay={0.1}>
                  <div className="bg-black/40 p-6 rounded-lg border border-white/10">
                    <h4 className="text-xl font-bold mb-4 text-white">Language-Agnostic Design</h4>
                    <p className="text-white/80 mb-4">
                      The Math Package is designed to be language-agnostic, with implementations available in multiple
                      programming languages to support a wide range of applications and platforms.
                    </p>
                    <p className="text-white/80">
                      This ensures that UOR-native applications can be built in the language of your choice while still
                      maintaining semantic integrity and verifiability.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <div className="bg-black/40 p-6 rounded-lg border border-white/10">
                    <h4 className="text-xl font-bold mb-4 text-white">Optimized Performance</h4>
                    <p className="text-white/80 mb-4">
                      The Math Package is optimized for performance, with efficient implementations of cryptographic
                      primitives and algorithms that minimize computational overhead.
                    </p>
                    <p className="text-white/80">
                      This ensures that UOR-native applications can run efficiently on a wide range of devices, from
                      high-performance servers to resource-constrained edge devices.
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
                The Math Package enables a wide range of applications across various domains
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <ScrollReveal delay={0.1}>
                <div className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <h3 className="text-xl font-bold mb-4 text-white">Secure Communication</h3>
                  <p className="text-white/80">
                    The Math Package enables secure communication between parties, with post-quantum cryptographic
                    primitives ensuring that communications remain secure even against quantum attacks.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <h3 className="text-xl font-bold mb-4 text-white">Verifiable Computation</h3>
                  <p className="text-white/80">
                    The Math Package enables verifiable computation, allowing parties to verify the correctness of
                    computational results without re-executing the entire computation.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="bg-black-200 p-6 rounded-xl border border-white/10 h-full">
                  <h3 className="text-xl font-bold mb-4 text-white">Semantic Reasoning</h3>
                  <p className="text-white/80">
                    The Math Package enables semantic reasoning over complex data structures, allowing applications to
                    extract meaning and relationships from data.
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
                <Link href="/about/uor-framework">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to UOR Framework
                </Link>
              </Button>

              <div className="flex gap-4">
                <Button
                  className="rounded-full px-6 py-3 text-base font-medium bg-white text-black hover:bg-white/90 revolut-button"
                  asChild
                >
                  <Link href="/about/uor-framework/data-protocols">
                    Explore Data Protocols <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="space-section px-4 sm:px-6 relative text-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-revolut-blue-500 via-revolut-blue-700 to-revolut-blue-900 opacity-80"></div>
            <div className="absolute inset-0 bg-black/50"></div>
            <GradientBackground blur={80} />

            <div className="max-w-4xl mx-auto text-center relative z-10">
              <ScrollReveal width="100%">
                <AnimatedText
                  text="Build with Mathematical Certainty"
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
