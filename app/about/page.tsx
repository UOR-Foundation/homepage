"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import IndustryApplications from "@/components/industry-applications"
import ParticleBackground from "@/components/particle-background"
import EnhancedHeader from "@/components/enhanced-header"
import ScrollReveal from "@/components/scroll-reveal"
import StaggerReveal from "@/components/stagger-reveal"
import GradientBackground from "@/components/gradient-background"
import AnimatedText from "@/components/animated-text"
import { useEffect } from "react"

export default function AboutPage() {
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
              <div className="text-4xl md:text-6xl font-bold mb-2 high-contrast-text">UOR</div>
              <div className="text-4xl md:text-6xl font-bold mb-6 high-contrast-text">Foundation</div>
            </div>
          </ScrollReveal>
          <ScrollReveal width="100%" delay={0.2}>
            <p className="subtitle-text max-w-2xl mx-auto text-white high-contrast-text text-center">
              We're building the infrastructure for an internet where data is sovereign, semantic, and empowering.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow py-16 px-4 sm:px-6 bg-black">
        <div className="max-w-3xl mx-auto">
          {/* Why We Exist Section */}
          <section className="space-content mb-20">
            <ScrollReveal width="100%">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">Why We Exist</h2>
            </ScrollReveal>

            <StaggerReveal>
              <p className="text-lg mb-6 text-white">
                We believe in unlocking human potential.
                <br />
                That means giving people true <strong className="text-white">ownership of their data</strong>, and{" "}
                <strong className="text-white">free access to knowledge</strong>—not gated systems, opaque models, or
                centralized control.
              </p>

              <p className="text-lg mb-6 text-white">
                The internet today was not designed with that in mind. It's fragmented. Disconnected. Full of data
                that's stripped of meaning and impossible to trust at scale.
              </p>

              <p className="text-lg mb-6 text-white">
                UOR Foundation exists to fix that—by building the infrastructure for an internet where data is{" "}
                <strong className="text-white">sovereign, semantic, and empowering</strong>. Where information flows
                freely and meaningfully across people, systems, and borders.
              </p>

              <p className="text-lg mb-6 text-white">
                Because when data has context, people can build. Learn. Create. Dream.
              </p>
            </StaggerReveal>
          </section>

          {/* How We Work Section */}
          <section className="space-content mb-20">
            <ScrollReveal width="100%">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">How We Work</h2>
            </ScrollReveal>

            <StaggerReveal>
              <p className="text-lg mb-6 text-white">
                We build open tools and standards that help people, systems, and institutions make sense of their
                data—no matter where it lives or how it moves.
              </p>

              <p className="text-lg mb-6 text-white">We focus on:</p>
            </StaggerReveal>

            <div className="max-w-xl mx-auto">
              <StaggerReveal>
                <ul className="list-disc pl-6 mb-8 space-y-3 text-lg text-white">
                  <li>
                    Encoding <strong className="text-white">semantic context</strong> in every artifact
                  </li>
                  <li>
                    Enabling <strong className="text-white">federated, traceable</strong> computation across
                    disconnected systems
                  </li>
                  <li>
                    Preventing <strong className="text-white">hallucinations, metadata loss, and system drift</strong>
                  </li>
                  <li>
                    Returning <strong className="text-white">agency</strong> to those who use and depend on data
                  </li>
                </ul>
              </StaggerReveal>
            </div>

            <StaggerReveal>
              <p className="text-lg mb-6 text-white">
                We're not just improving infrastructure—we're empowering imagination.
              </p>
            </StaggerReveal>
          </section>

          {/* What We're Building Section */}
          <section className="space-content mb-20">
            <ScrollReveal width="100%">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">What We're Building</h2>
            </ScrollReveal>

            <StaggerReveal>
              <p className="text-lg mb-6 text-white">
                It started with a practical challenge: how to transmit huge amounts of critical data across disconnected
                systems. That led to a bigger question:
              </p>

              <blockquote className="border-l-4 border-revolut-purple-500 pl-6 py-4 my-10 text-xl italic text-white">
                What if the internet had a shared reference system for meaning?
              </blockquote>

              <p className="text-lg mb-6 text-white">
                That idea became the <strong className="text-white">UOR Framework</strong>: a universal way to encode
                and reference data that preserves what matters most—its{" "}
                <strong className="text-white">semantic meaning</strong>.
              </p>

              <p className="text-lg mb-6 text-white">
                UOR doesn't just unify formats—it unifies modalities: numbers, language, images, signals, models. All in
                a way that systems can <strong className="text-white">understand, trace, and build on</strong>.
              </p>

              <p className="text-lg mb-6 text-white">
                Whether you're training a model, building infrastructure, curing disease, or imagining a new kind of
                knowledge graph—UOR is here to help you solve the hardest problems and realize your biggest dreams.
              </p>

              <p className="text-lg mb-6 text-white">
                The UOR Framework began at Red Hat, as documented in{" "}
                <Link
                  href="https://next.redhat.com/2022/07/13/the-uor-framework/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  this pioneering article
                </Link>{" "}
                which laid the foundation for what would become the UOR Foundation.
              </p>
            </StaggerReveal>
          </section>

          {/* How UOR Is Built Section */}
          <section className="space-content mb-20">
            <ScrollReveal width="100%">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">How UOR Is Built</h2>
            </ScrollReveal>

            <StaggerReveal>
              <p className="text-lg mb-8 text-white">
                UOR Foundation is a hybrid of public benefit corporation and open-source community. We're structured
                like the architecture we're building: open, modular, and built for composability.
              </p>
            </StaggerReveal>

            <ScrollReveal delay={0.3}>
              <div className="bg-black-200 rounded-2xl p-6 sm:p-8 space-y-8 my-10 border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-revolut-blue-500 to-revolut-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-white">Meta Layer</h3>
                    <p className="text-white">Community-driven governance. Public-good licensing and stewardship.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-revolut-purple-500 to-revolut-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-white">Math Layer</h3>
                    <p className="text-white">
                      Prime-based semantic algebra. A new way to model composition and traceability.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-revolut-pink-500 to-revolut-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-white">Internet Protocols</h3>
                    <p className="text-white">
                      Tools and standards for referencing, syncing, and resolving data across domains.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-revolut-blue-500 to-revolut-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                    4
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-white">Neural Framework (PrimeOS)</h3>
                    <p className="text-white">
                      A privacy-safe, explainable compute layer built on UOR semantics—no black boxes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-revolut-purple-500 to-revolut-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                    5
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-white">PrimeApp SDK</h3>
                    <p className="text-white">
                      A developer toolkit for packaging and deploying semantically-aware applications (think{" "}
                      <code className="bg-black-300 px-1.5 py-0.5 rounded text-sm">docker build</code>, but for
                      meaning).
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4} className="text-center">
              <p className="text-lg mb-6 text-white">
                Each layer unlocks the next—allowing anyone to build systems where{" "}
                <strong className="text-white">data retains meaning</strong> and{" "}
                <strong className="text-white">computation becomes trustworthy by design</strong>.
              </p>
            </ScrollReveal>
          </section>

          {/* What We Imagine Section */}
          <section className="space-content mb-20">
            <ScrollReveal width="100%">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">What We Imagine</h2>
            </ScrollReveal>

            <StaggerReveal>
              <p className="text-lg mb-6 text-white">We see a future where:</p>
            </StaggerReveal>

            <div className="max-w-xl mx-auto">
              <StaggerReveal>
                <ul className="list-disc pl-6 mb-8 space-y-3 text-lg text-white">
                  <li>
                    <strong className="text-white">Everyone owns their data</strong>
                  </li>
                  <li>
                    AI models <strong className="text-white">reference knowledge instead of guessing</strong>
                  </li>
                  <li>
                    Systems can <strong className="text-white">work together across silos</strong>
                  </li>
                  <li>
                    Software is built with <strong className="text-white">modularity, transparency, and context</strong>{" "}
                    at its core
                  </li>
                  <li>
                    And anyone, anywhere, can use information to{" "}
                    <strong className="text-white">learn, build, and dream freely</strong>
                  </li>
                </ul>
              </StaggerReveal>
            </div>

            <StaggerReveal>
              <p className="text-lg mb-10 text-white">UOR is here to help make that world possible.</p>
            </StaggerReveal>

            {/* Industry Applications Widget */}
            <ScrollReveal delay={0.5} width="100%">
              <h3 className="text-2xl font-bold mb-8 text-center">Industry Applications</h3>
              <IndustryApplications />
            </ScrollReveal>
          </section>

          {/* What's Already Happening Section */}
          <section className="space-content mb-20">
            <ScrollReveal width="100%">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">
                What's Already Happening
              </h2>
            </ScrollReveal>

            <StaggerReveal>
              <p className="text-lg mb-8 text-white">UOR is already powering breakthroughs in:</p>
            </StaggerReveal>

            <div className="grid sm:grid-cols-2 gap-6 my-10">
              <ScrollReveal delay={0.2}>
                <div className="bg-black-200 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                  <h3 className="font-bold text-lg mb-2 text-white text-center">Healthcare</h3>
                  <p className="text-white">Secure, traceable medical data exchange</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="bg-black-200 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                  <h3 className="font-bold text-lg mb-2 text-white text-center">AI</h3>
                  <p className="text-white">Grounding models in provenance and semantic clarity</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="bg-black-200 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                  <h3 className="font-bold text-lg mb-2 text-white text-center">Edge & Defense</h3>
                  <p className="text-white">Enabling trusted computation in disconnected environments</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.5}>
                <div className="bg-black-200 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                  <h3 className="font-bold text-lg mb-2 text-white text-center">Open Source</h3>
                  <p className="text-white">Helping developers build reusable, interoperable software artifacts</p>
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* Want to Help Build It? Section */}
          <section className="space-content">
            <ScrollReveal width="100%">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">Want to Help Build It?</h2>
            </ScrollReveal>

            <StaggerReveal>
              <p className="text-lg mb-6 text-white">
                If you believe in <strong className="text-white">data ownership</strong>,{" "}
                <strong className="text-white">free access to knowledge</strong>, and an internet that works{" "}
                <strong className="text-white">for people</strong>, not just platforms—we'd love to work with you.
              </p>

              <p className="text-lg mb-6 text-white">We're a movement of:</p>
            </StaggerReveal>

            <div className="max-w-md mx-auto">
              <StaggerReveal>
                <ul className="list-disc pl-6 mb-10 space-y-3 text-lg text-white">
                  <li>Engineers</li>
                  <li>Researchers</li>
                  <li>Policymakers</li>
                  <li>Open-source contributors</li>
                  <li>Builders with bold ideas and deep questions</li>
                </ul>
              </StaggerReveal>
            </div>

            <ScrollReveal delay={0.4}>
              <div className="bg-gradient-to-br from-revolut-blue-500/10 to-revolut-purple-500/10 rounded-2xl p-6 sm:p-8 space-y-6 border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">🔗</div>
                  <Link
                    href="https://discord.gg/ZwuZaNyuve"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-lg"
                  >
                    Join the community
                  </Link>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-2xl">🧠</div>
                  <Link
                    href="https://github.com/UOR-Foundation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-lg"
                  >
                    Explore the code on GitHub
                  </Link>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-2xl">📘</div>
                  <Link href="#" className="text-blue-400 hover:text-blue-300 text-lg">
                    Read the UOR Solution Guide
                  </Link>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-2xl">📄</div>
                  <Link
                    href="https://next.redhat.com/2022/07/13/the-uor-framework/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-lg"
                  >
                    The Red Hat article: <em>The UOR Framework</em> (2022)
                  </Link>
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
              text="Ready to Join Us?"
              className="text-3xl md:text-5xl font-bold mb-6"
              type="words"
              animation="slide-up"
            />
          </ScrollReveal>
          <ScrollReveal width="100%" delay={0.2}>
            <p className="subtitle-text mb-8 max-w-2xl mx-auto text-white">
              Help us build a future where data has meaning, people have agency, and systems work together seamlessly.
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
