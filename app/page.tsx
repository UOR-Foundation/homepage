"use client"

import type React from "react"

import { useEffect, useState, useCallback, type FormEvent, Suspense, lazy, useRef } from "react"
import Link from "next/link"
import { Github, Linkedin, ArrowRight, ArrowLeft, Menu, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Image from "next/image"
import { ContactDialog } from "@/components/contact-dialog"
import { OptimizedDataWave } from "@/components/optimized-data-wave"
import { IntroOverlay } from "@/components/intro-overlay"
import { InsightsRow } from "@/components/insights-row"
import { MobileMenu } from "@/components/mobile-menu"
import { useMobileMenu } from "@/hooks/use-mobile-menu"
import { useDeviceDetection } from "@/hooks/use-device-detection"
import { LazyLoadWrapper } from "@/components/lazy-load-wrapper"
import { WaitlistWidget } from "@/components/waitlist-widget"
import { PrivacyPolicyDialog } from "@/components/privacy-policy-dialog"
import { submitContactForm, type ContactFormData } from "@/actions/contact-form"
import { PrimeOSWaitlistWidget } from "@/components/primeos-waitlist-widget"

// Lazy load non-critical components
const InsightsSection = lazy(() =>
  import("@/components/insights-section").then((mod) => ({ default: mod.InsightsSection })),
)

export default function Home() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  })
  const [getUpdates, setGetUpdates] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { isOpen, toggleMenu } = useMobileMenu()
  const { isMobile } = useDeviceDetection()
  const heroSectionRef = useRef<HTMLElement>(null)

  // Handle contact form submission
  const handleContactSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData: ContactFormData = {
        ...contactForm,
        getUpdates,
      }

      console.log("Submitting form data:", formData)
      const result = await submitContactForm(formData)
      console.log("Form submission result:", result)

      if (result.success) {
        setIsSubmitted(true)
      } else {
        // Create an error message element
        const errorContainer = document.createElement("div")
        errorContainer.className = "mt-4 p-3 bg-red-50 text-red-600 rounded-md text-sm"
        errorContainer.textContent = result.message || "Failed to send message. Please try again."

        // Find the form and append the error message
        const form = e.target as HTMLFormElement
        // Remove any existing error messages
        const existingError = form.querySelector(".bg-red-50")
        if (existingError) {
          form.removeChild(existingError)
        }
        form.appendChild(errorContainer)

        // Remove the error message after 5 seconds
        setTimeout(() => {
          if (form.contains(errorContainer)) {
            form.removeChild(errorContainer)
          }
        }, 5000)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("An unexpected error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Handle contact form input changes
  const handleContactChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setContactForm((prev) => ({ ...prev, [name]: value }))
  }, [])

  // Reset contact form
  const resetContactForm = useCallback(() => {
    setContactForm({
      name: "",
      email: "",
      organization: "",
      message: "",
    })
    setGetUpdates(true)
    setIsSubmitted(false)
  }, [])

  // Add smooth scrolling behavior and track active section
  useEffect(() => {
    // Function to handle smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest("a")

      if (!anchor) return

      // Check if this is an anchor link
      const href = anchor.getAttribute("href")
      if (!href || !href.startsWith("#")) return

      e.preventDefault()

      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)

      if (!targetElement) return

      // Get the sticky header height to offset the scroll position
      const header = document.querySelector("header")
      const headerHeight = header ? header.offsetHeight : 0

      // Calculate the target position with offset
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight

      // Smooth scroll to the target
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })

      // Update active section
      setActiveSection(targetId)
    }

    // Function to check which section is currently in view
    const handleScroll = () => {
      const sections = ["learn", "build", "connect"]
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (const section of sections) {
        const element = document.getElementById(section)
        if (!element) continue

        const offsetTop = element.offsetTop
        const offsetHeight = element.offsetHeight

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section)
          break
        } else if (scrollPosition < document.getElementById("learn")?.offsetTop || 0) {
          setActiveSection(null) // At the top, before any sections
        }
      }
    }

    // Throttle scroll event for better performance
    let scrollTimeout: number
    const throttledScroll = () => {
      if (!scrollTimeout) {
        scrollTimeout = window.setTimeout(() => {
          handleScroll()
          scrollTimeout = 0
        }, 100)
      }
    }

    // Add event listeners
    document.addEventListener("click", handleAnchorClick)
    window.addEventListener("scroll", throttledScroll)

    // Initial check for active section
    handleScroll()

    // Clean up event listeners
    return () => {
      document.removeEventListener("click", handleAnchorClick)
      window.removeEventListener("scroll", throttledScroll)
      window.clearTimeout(scrollTimeout)
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-200">
        <div className="container flex h-16 md:h-20 items-center justify-between py-4 md:py-6">
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/uor-logo.png"
                alt="UOR Foundation Logo"
                width={36}
                height={36}
                style={{ height: "36px", width: "auto" }}
                priority
              />
            </Link>
            <button
              className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground md:hidden"
              aria-label="Open mobile menu"
              onClick={toggleMenu}
              data-mobile-trigger
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
          <nav className="hidden absolute left-1/2 transform -translate-x-1/2 md:flex">
            <div className="flex items-center space-x-1">
              <a
                href="#learn"
                className={`relative px-4 py-2 text-base font-bold transition-all duration-200 hover:text-[#5E5CFF] ${
                  activeSection === "learn" ? "text-[#5E5CFF]" : "text-foreground/80"
                }`}
              >
                Learn
                {activeSection === "learn" && (
                  <span className="absolute -bottom-[22px] left-1/2 h-[3px] w-12 -translate-x-1/2 rounded-full bg-[#5E5CFF]"></span>
                )}
              </a>
              <a
                href="#build"
                className={`relative px-4 py-2 text-base font-bold transition-all duration-200 hover:text-[#5E5CFF] ${
                  activeSection === "build" ? "text-[#5E5CFF]" : "text-foreground/80"
                }`}
              >
                Build
                {activeSection === "build" && (
                  <span className="absolute -bottom-[22px] left-1/2 h-[3px] w-12 -translate-x-1/2 rounded-full bg-[#5E5CFF]"></span>
                )}
              </a>
              <a
                href="#connect"
                className={`relative px-4 py-2 text-base font-bold transition-all duration-200 hover:text-[#5E5CFF] ${
                  activeSection === "connect" ? "text-[#5E5CFF]" : "text-foreground/80"
                }`}
              >
                Connect
                {activeSection === "connect" && (
                  <span className="absolute -bottom-[22px] left-1/2 h-[3px] w-12 -translate-x-1/2 rounded-full bg-[#5E5CFF]"></span>
                )}
              </a>
            </div>
          </nav>
          <div className="flex items-center gap-2">
            <div className="hidden md:flex">
              <Link
                href="https://www.linkedin.com/company/uor-foundation"
                target="_blank"
                rel="noreferrer"
                className="px-1"
              >
                <Linkedin className="h-5 w-5 text-foreground/60 transition-colors hover:text-foreground/80" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://github.com/UOR-Foundation" target="_blank" rel="noreferrer" className="px-1">
                <Github className="h-5 w-5 text-foreground/60 transition-colors hover:text-foreground/80" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://discord.gg/ZwuZaNyuve" target="_blank" rel="noreferrer" className="px-1">
                <Image
                  src="/images/discord2.png"
                  alt="Discord"
                  width={20}
                  height={20}
                  className="opacity-60 hover:opacity-80 transition-opacity duration-200"
                />
                <span className="sr-only">Discord</span>
              </Link>
            </div>
            <ContactDialog>
              <Button
                data-contact-trigger="true"
                className="rounded-md bg-slate-900 text-white hover:bg-slate-800"
                size={isMobile ? "sm" : "default"}
              >
                {isMobile ? "Contact" : "Get in touch"}
              </Button>
            </ContactDialog>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isOpen} onClose={toggleMenu} activeSection={activeSection} />

      <main className="flex-1">
        <section ref={heroSectionRef} className="relative" id="hero-section">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <OptimizedDataWave />
          </div>
          <div className="container relative z-20 py-12 pb-24 md:py-24 md:pb-28 lg:py-32">
            <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
              <h1 className="text-2xl sm:text-3xl font-bold leading-tight tracking-tighter text-black md:text-4xl lg:text-5xl lg:leading-[1.1]">
                AI's trillion-dollar potential is limited by <span className="sm:hidden">data</span>
                <span className="hidden sm:inline">
                  <br />
                  data
                </span>{" "}
                that is fragmented, lacks context, and <span className="sm:hidden">can't</span>
                <span className="hidden sm:inline">
                  <br />
                  can't
                </span>{" "}
                be trusted
              </h1>
              <div className="space-y-3 max-w-[750px] px-4 sm:px-0">
                <p className="text-base sm:text-lg text-black/80 md:text-xl">
                  We're solving this with the <strong>Universal Object Reference (UOR)</strong>, a shared language
                  framework for all kinds of of data. It helps AI consistently make sense of{" "}
                  <br className="hidden md:inline" />
                  and trust the information it processes.
                </p>
                <p className="text-base sm:text-lg text-black/80 md:text-xl">
                  Delivered through <strong>PrimeOS</strong>, powering the next generation of{" "}
                  <br className="hidden md:inline" />
                  AI applications that are context-aware and verifiable.
                </p>
              </div>
              <div className="mt-0 md:mt-8 w-full max-w-[600px] px-4 sm:px-0">
                <WaitlistWidget />
              </div>
            </div>
          </div>
        </section>

        <section className="container pt-2 sm:pt-6 md:pt-12 pb-6 md:py-12 lg:py-16">
          <div className="mx-auto max-w-[800px] text-center px-4 sm:px-0">
            <div className="inline-block">
              <Image
                src="/images/uor-logo.png"
                alt="UOR Foundation Logo"
                width={64}
                height={64}
                style={{ height: "64px", width: "auto" }}
                priority
              />
            </div>
            <p className="mt-4 md:mt-8 text-base md:text-lg text-muted-foreground">
              The <strong>UOR Foundation</strong> is a{" "}
              <Link
                href="https://www.sos.state.co.us/biz/BusinessEntityDetail.do?quitButtonDestination=BusinessEntityCriteriaExt&fileId=20251193974&masterFileId="
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-foreground"
              >
                non-profit corporation
              </Link>{" "}
              based in Denver, Colorado, focused on advancing open research and building a global community of leaders
              in data science, AI and technology.
            </p>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              We're dedicated to creating open-source tools and standards that make data more reliable, transparent, and
              easy to work with. This work lays the foundation for
              <br />a trusted and interconnected <strong>internet of AI applications</strong>.
            </p>
            <p className="mt-6 text-base md:text-lg text-[#5E5CFF] font-medium text-center">
              Google indexed the web's content. We index its meaning.
            </p>
          </div>
        </section>

        <section id="learn" className="container py-10 md:py-12 lg:py-16 scroll-mt-20">
          <div className="grid gap-8 md:gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter lg:text-4xl">Learn</h2>
              <p className="mt-4 text-muted-foreground">
                Discover how we're creating a trusted foundation for the future of AI. Learn about our mission, the
                Universal Object Reference (UOR), and PrimeOS. These tools help AI understand, align with human goals,
                and make decisions you and your team can trust.
              </p>
              <span className="mt-4 inline-block text-[#5E5CFF] font-medium">
                Browse resources <ArrowRight className="inline-block h-3.5 w-3.5 ml-1" />
              </span>
            </div>
            <div className="rounded-xl bg-muted/50 p-4 md:p-6">
              <div className="grid gap-4">
                <IntroOverlay title="Introduction to UOR Foundation">
                  <h3 className="font-medium">
                    Introduction to <strong>UOR Foundation</strong>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Discover our mission to create a new foundation for the Internet of AI, where systems understand,
                    connect, and reason from trusted context.
                  </p>
                  <span className="mt-2 inline-flex items-center text-xs font-medium text-[#5E5CFF]">Learn more →</span>
                </IntroOverlay>
                <IntroOverlay title="Overview of UOR Framework">
                  <h3 className="font-medium">
                    Overview of <strong>UOR Framework</strong>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Learn how UOR gives AI a consistent way to describe data, helping systems communicate effectively
                    and work with information they can trust.
                  </p>
                  <span className="mt-2 inline-flex items-center text-xs font-medium text-[#5E5CFF]">Learn more →</span>
                </IntroOverlay>
                <IntroOverlay title="Learn about PrimeOS">
                  <h3 className="font-medium">
                    Learn about <strong>PrimeOS</strong>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Explore how PrimeOS creates a trusted environment for AI applications, ensuring they remain aligned
                    with their purpose and deliver consistent results.
                  </p>
                  <span className="mt-2 inline-flex items-center text-xs font-medium text-[#5E5CFF]">Learn more →</span>
                </IntroOverlay>
              </div>
            </div>
          </div>

          <div className="relative mt-12 md:mt-16 -mx-[calc(50vw-50%)] py-12 md:py-16 bg-gradient-to-r from-[#5E5CFF]/5 via-[#7A78FF]/10 to-[#5E5CFF]/5 border-y border-[#5E5CFF]/10">
            <div className="container">
              <LazyLoadWrapper height="400px">
                <Suspense
                  fallback={<div className="h-[400px] flex items-center justify-center">Loading insights...</div>}
                >
                  <InsightsRow />
                </Suspense>
              </LazyLoadWrapper>
            </div>
          </div>
        </section>

        <section id="build" className="container py-10 md:py-12 lg:py-16 scroll-mt-20">
          <div className="grid gap-8 md:gap-10 md:grid-cols-2">
            <div className="order-2 md:order-1 rounded-xl bg-muted/50 p-4 md:p-6">
              <div className="grid gap-4">
                <div className="rounded-lg bg-background p-4 shadow-sm">
                  <h3 className="font-medium">
                    Foundation <strong>Opportunities</strong>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Explore ways to contribute to the <strong>UOR Foundation</strong>'s mission and projects.
                  </p>
                  <span className="mt-2 inline-flex items-center text-xs font-medium text-[#5E5CFF]">
                    Coming soon →
                  </span>
                </div>
                <div className="rounded-lg bg-background p-4 shadow-sm">
                  <h3 className="font-medium">
                    UOR Framework <strong>Docs</strong>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Access comprehensive documentation for the <strong>Universal Object Reference framework</strong>.
                  </p>
                  <span className="mt-2 inline-flex items-center text-xs font-medium text-[#5E5CFF]">
                    Coming soon →
                  </span>
                </div>
                <div className="rounded-lg bg-background p-4 shadow-sm">
                  <h3 className="font-medium">
                    PrimeOS <strong>SDK</strong>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Get ready for the upcoming <strong>PrimeOS</strong> Software Development Kit for developers.
                  </p>
                  <span className="mt-2 inline-flex items-center text-xs font-medium text-[#5E5CFF]">
                    Coming soon →
                  </span>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter lg:text-4xl">Build</h2>
              <p className="mt-4 text-muted-foreground">
                Join our community of builders creating the next generation of open research tools and platforms.
                Contribute to existing projects or start your own with our support.
              </p>
              <span className="mt-4 inline-block text-[#5E5CFF] font-medium">
                <ArrowLeft className="inline-block h-3.5 w-3.5 mr-1" /> Build with us
              </span>
            </div>
          </div>

          {/* Why build on PrimeOS section */}
          <div className="mt-16 md:mt-24">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter lg:text-4xl">Why build on PrimeOS?</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                PrimeOS provides a unique foundation for AI applications that require context-awareness, verifiable
                trust, and semantic interoperability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-[#5E5CFF]/10 hover:shadow-md transition-all duration-300 hover:border-[#5E5CFF]/30">
                <div className="h-12 w-12 rounded-full bg-[#5E5CFF]/10 flex items-center justify-center mb-4">
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
                    className="text-[#5E5CFF]"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Verifiable Trust</h3>
                <p className="text-muted-foreground">
                  Build applications where every step is verifiable and traceable, ensuring consistent and reliable
                  results across different environments.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-4 w-4 text-[#5E5CFF]" />
                    </div>
                    <p className="text-sm text-slate-600">Cryptographic verification</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-4 w-4 text-[#5E5CFF]" />
                    </div>
                    <p className="text-sm text-slate-600">Deterministic execution</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-[#5E5CFF]/10 hover:shadow-md transition-all duration-300 hover:border-[#5E5CFF]/30">
                <div className="h-12 w-12 rounded-full bg-[#5E5CFF]/10 flex items-center justify-center mb-4">
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
                    className="text-[#5E5CFF]"
                  >
                    <circle cx="18" cy="18" r="3" />
                    <circle cx="6" cy="6" r="3" />
                    <path d="M13 6h3a2 2 0 0 1 2 2v7" />
                    <path d="M11 18H8a2 2 0 0 1-2-2V9" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Semantic Context</h3>
                <p className="text-muted-foreground">
                  Leverage built-in semantic understanding that preserves meaning across different systems, reducing
                  ambiguity and misalignment.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-4 w-4 text-[#5E5CFF]" />
                    </div>
                    <p className="text-sm text-slate-600">Universal semantic addressing</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-4 w-4 text-[#5E5CFF]" />
                    </div>
                    <p className="text-sm text-slate-600">Cross-domain interoperability</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-[#5E5CFF]/10 hover:shadow-md transition-all duration-300 hover:border-[#5E5CFF]/30">
                <div className="h-12 w-12 rounded-full bg-[#5E5CFF]/10 flex items-center justify-center mb-4">
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
                    className="text-[#5E5CFF]"
                  >
                    <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34" />
                    <path d="M14 3v4a2 2 0 0 0 2 2h4" />
                    <path d="M5 3v4a2 2 0 0 0 2 2h4" />
                    <path d="M16 19h6" />
                    <path d="M19 16v6" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Composable Systems</h3>
                <p className="text-muted-foreground">
                  Create modular applications that can be easily combined with other systems while maintaining semantic
                  integrity and trust.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-4 w-4 text-[#5E5CFF]" />
                    </div>
                    <p className="text-sm text-slate-600">Modular architecture</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-4 w-4 text-[#5E5CFF]" />
                    </div>
                    <p className="text-sm text-slate-600">Seamless integration</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="mx-auto max-w-3xl">
                <PrimeOSWaitlistWidget />
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Be among the first to build on PrimeOS when the SDK is released.
              </p>
            </div>
          </div>
        </section>

        <section id="connect" className="relative scroll-mt-20">
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-[#5E5CFF]/10 border-y border-[#5E5CFF]/10"></div>
          <div className="container py-10 md:py-12 lg:py-16">
            <div className="grid gap-8 md:gap-10 md:grid-cols-2">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tighter lg:text-4xl">Connect</h2>
                <p className="mt-4 text-muted-foreground">
                  Become part of our global community of researchers, developers, and innovators. Network with
                  like-minded individuals and organizations committed to open research.
                </p>
                <span className="mt-6 inline-block text-[#5E5CFF] font-medium">
                  Get involved <ArrowRight className="inline-block h-3.5 w-3.5 ml-1" />
                </span>
              </div>
              <div className="rounded-xl bg-white/80 backdrop-blur-sm p-4 md:p-6">
                <div className="mb-4">
                  <h3 className="text-xl md:text-2xl font-bold">
                    Unlock your full data potential with
                    <br />
                    context-aware and verifiable trust
                  </h3>
                  <p className="text-muted-foreground mt-1">Fill out the form below and we'll get back to you.</p>
                </div>
                {!isSubmitted ? (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={contactForm.name}
                        onChange={handleContactChange}
                        placeholder="Your name"
                        required
                        autoComplete="name"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={contactForm.email}
                        onChange={handleContactChange}
                        placeholder="your.email@example.com"
                        required
                        autoComplete="email"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="organization">Organization</Label>
                      <Input
                        id="organization"
                        name="organization"
                        value={contactForm.organization}
                        onChange={handleContactChange}
                        placeholder="Your organization (optional)"
                        autoComplete="organization"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={contactForm.message}
                        onChange={handleContactChange}
                        placeholder="How would you like to get involved?"
                        className="min-h-[100px]"
                        required
                      />
                    </div>
                    <div className="flex items-start space-x-2 pt-2">
                      <Checkbox
                        id="get-updates"
                        checked={getUpdates}
                        onCheckedChange={(checked) => setGetUpdates(checked as boolean)}
                      />
                      <div className="grid gap-1.5 leading-none">
                        <Label
                          htmlFor="get-updates"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Get email updates
                        </Label>
                        <p className="text-xs text-muted-foreground">
                          Sign up for Community & Project Updates, Educational Resources, and Event Invitations from the
                          <strong> UOR Foundation</strong>.
                        </p>
                      </div>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-slate-900 text-white hover:bg-slate-800"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">
                      Joining subscribes you to the <strong>UOR Foundation</strong> Newsletter and confirms you agree
                      with our{" "}
                      <PrivacyPolicyDialog>
                        <button className="text-[#5E5CFF] hover:underline">privacy policy</button>
                      </PrivacyPolicyDialog>
                      .
                    </p>
                  </form>
                ) : (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <div className="mb-4 rounded-full bg-green-100 p-3">
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
                        className="h-8 w-8 text-green-600"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <h3 className="mb-2 text-xl font-bold">Thank you for reaching out!</h3>
                    <p className="mb-6 text-muted-foreground">
                      We've received your message and will get back to you shortly.
                    </p>
                    <Button onClick={resetContactForm} variant="outline">
                      Send another message
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-background">
        <div className="container flex flex-col gap-6 py-6 md:flex-row md:gap-8 md:py-8 lg:py-12">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/uor-logo.png"
                alt="UOR Foundation Logo"
                width={32}
                height={32}
                style={{ height: "32px", width: "auto" }}
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              Building open standards for trusted and
              <br />
              interconnected internet of AI applications.
            </p>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-6 sm:grid-cols-3 md:gap-8">
            <div className="flex flex-col gap-2">
              <h3 className="font-medium">Learn</h3>
              <nav className="flex flex-col gap-2">
                <button
                  onClick={() => {
                    const introButtons = document.querySelectorAll(".intro-button")
                    if (introButtons && introButtons[0]) (introButtons[0] as HTMLElement).click()
                  }}
                  className="text-left text-sm text-muted-foreground hover:text-foreground"
                >
                  UOR Foundation
                </button>
                <button
                  onClick={() => {
                    const introButtons = document.querySelectorAll(".intro-button")
                    if (introButtons && introButtons[2]) (introButtons[2] as HTMLElement).click()
                  }}
                  className="text-left text-sm text-muted-foreground hover:text-foreground"
                >
                  UOR Framework
                </button>
                <button
                  onClick={() => {
                    const introButtons = document.querySelectorAll(".intro-button")
                    if (introButtons && introButtons[1]) (introButtons[1] as HTMLElement).click()
                  }}
                  className="text-left text-sm text-muted-foreground hover:text-foreground"
                >
                  PrimeOS
                </button>
              </nav>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-medium">Build</h3>
              <nav className="flex flex-col gap-2">
                <a href="#build" className="text-sm text-muted-foreground hover:text-foreground">
                  Foundation Opportunities
                </a>
                <a href="#build" className="text-sm text-muted-foreground hover:text-foreground">
                  UOR Framework Docs
                </a>
                <a href="#build" className="text-sm text-muted-foreground hover:text-foreground">
                  PrimeOS SDK
                </a>
              </nav>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-medium">Connect</h3>
              <nav className="flex flex-col gap-2">
                <Link
                  href="https://discord.gg/ZwuZaNyuve"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Community
                </Link>
                <button
                  onClick={() => {
                    const contactButton = document.querySelector("[data-contact-trigger]") as HTMLButtonElement
                    if (contactButton) contactButton.click()
                  }}
                  className="text-left text-sm text-muted-foreground hover:text-foreground"
                >
                  Contact
                </button>
              </nav>
            </div>
          </div>
        </div>
        <div className="container border-t py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <p className="text-center text-sm text-muted-foreground md:text-left">
                © 2025 The <strong>UOR Foundation</strong>. All rights reserved.
              </p>
              <PrivacyPolicyDialog>
                <button className="text-sm text-muted-foreground hover:text-foreground underline">
                  Privacy Policy
                </button>
              </PrivacyPolicyDialog>
            </div>
            <div className="flex gap-4">
              <Link href="https://www.linkedin.com/company/uor-foundation" target="_blank" rel="noreferrer">
                <Linkedin className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://github.com/UOR-Foundation" target="_blank" rel="noreferrer">
                <Github className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://discord.gg/ZwuZaNyuve" target="_blank" rel="noreferrer">
                <Image
                  src="/images/discord2.png"
                  alt="Discord"
                  width={20}
                  height={20}
                  className="opacity-60 hover:opacity-80 transition-opacity duration-200"
                />
                <span className="sr-only">Discord</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
