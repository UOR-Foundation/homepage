"use client"
import { Card } from "@/components/ui/card"
import ScrollReveal from "@/components/scroll-reveal"

export default function TeamSection() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Our <span className="gradient-text">Team</span>
          </h2>

          <p className="text-lg text-center max-w-3xl mx-auto mb-12">
            The UOR Foundation team brings together exceptional expertise across cryptography, AI research, cloud
            infrastructure, and decentralized finance. Our diverse backgrounds span military technology, enterprise
            leadership, academic research, and entrepreneurship.
          </p>

          {/* Core Expertise Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Post-Quantum Cryptography */}
            <Card className="bg-black-200 p-6 rounded-xl border border-white/10 hover:border-revolut-blue-500/50 transition-all">
              <div className="bg-gradient-to-br from-revolut-blue-500 to-revolut-blue-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Post-Quantum Cryptography</h3>
              <p className="text-white/80">
                Pioneering research in quantum-resistant algorithms, secure protocols, and next-generation cryptographic
                frameworks for data sovereignty.
              </p>
            </Card>

            {/* AI & Consciousness Research */}
            <Card className="bg-black-200 p-6 rounded-xl border border-white/10 hover:border-revolut-purple-500/50 transition-all">
              <div className="bg-gradient-to-br from-revolut-purple-500 to-revolut-purple-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">AI & Consciousness Research</h3>
              <p className="text-white/80">
                Exploring the frontiers of machine intelligence, ethical AI development, and the intersection of
                consciousness and computation.
              </p>
            </Card>

            {/* Cloud-Native Architecture */}
            <Card className="bg-black-200 p-6 rounded-xl border border-white/10 hover:border-revolut-pink-500/50 transition-all">
              <div className="bg-gradient-to-br from-revolut-pink-500 to-revolut-pink-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Cloud-Native Architecture</h3>
              <p className="text-white/80">
                Designing scalable, secure infrastructure with expertise in Kubernetes, multi-cloud environments, and
                DevSecOps automation.
              </p>
            </Card>

            {/* Institutional DeFi & Finance */}
            <Card className="bg-black-200 p-6 rounded-xl border border-white/10 hover:border-revolut-blue-500/50 transition-all">
              <div className="bg-gradient-to-br from-revolut-blue-500 to-revolut-blue-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Institutional DeFi & Finance</h3>
              <p className="text-white/80">
                Leading innovation in tokenized finance, capital formation, and the evolution of decentralized financial
                infrastructure.
              </p>
            </Card>
          </div>

          {/* Background & Experience */}
          <div className="bg-black-200 p-8 rounded-xl border border-white/10">
            <h3 className="text-2xl font-bold mb-6 text-center">Background & Experience</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-revolut-blue-500 to-revolut-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-white">Military & Defense Technology</h4>
                  <p className="text-white/80">
                    Experience in Naval Special Warfare, tactical communications, and air-gapped secure systems
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-revolut-purple-500 to-revolut-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-white">Enterprise Leadership</h4>
                  <p className="text-white/80">
                    Leadership roles at Red Hat, Siemens AG, Microsoft, and other major technology companies
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-revolut-pink-500 to-revolut-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-white">Advanced Academic Research</h4>
                  <p className="text-white/80">
                    PhDs and advanced degrees in Engineering Mathematics, Computer Science, and related fields
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-revolut-blue-500 to-revolut-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-white">Government Advisory</h4>
                  <p className="text-white/80">
                    Advising UK Parliament, US DoD, and other government bodies on AI policy and technology
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-revolut-purple-500 to-revolut-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-white">Open Source Contributions</h4>
                  <p className="text-white/80">
                    Major contributions to CNCF/Kubernetes, OpenShift, and other critical open-source projects
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-revolut-pink-500 to-revolut-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-white">Entrepreneurial Experience</h4>
                  <p className="text-white/80">
                    Founded and scaled multiple ventures in AI, blockchain, and enterprise technology
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Team Vision */}
          <div className="mt-16 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Our Collective Vision</h3>
            <p className="text-lg">
              Together, we're building the infrastructure for a semantic internet where data has meaning, people have
              control, and systems work together seamlessly. Our diverse expertise enables us to tackle the complex
              challenges of creating a more open, trustworthy digital future.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
