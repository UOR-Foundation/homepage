"use client"

import { useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import ParticleBackground from "@/components/particle-background"
import GradientBackground from "@/components/gradient-background"
import AnimatedText from "@/components/animated-text"
import ParallaxSection from "@/components/parallax-section"
import GalaxyAnimation from "@/components/galaxy-animation"
// import GalaxyVisualization from "@/components/galaxy-visualization"

export default function EnhancedHero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()

  // Parallax effect using Framer Motion's useTransform
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.9])

  return (
    <section className="relative text-white pt-32 pb-20 px-4 sm:px-6 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[rgb(16,0,43)]"></div>
      <GradientBackground blur={80} speed={0.001} />
      <ParticleBackground />

      {/* Animated geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-revolut-blue-500/20 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-revolut-purple-500/20 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-72 h-72 rounded-full bg-revolut-pink-500/20 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 9,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full" ref={heroRef}>
        <motion.div style={{ y, opacity, scale }} className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-4 sm:mb-6">
              <AnimatedText
                text="TRANSFORM"
                className="hero-text high-contrast-text"
                type="chars"
                animation="slide-up"
                speed={0.03}
              />
              <AnimatedText
                text="THE WAY YOU"
                className="hero-text high-contrast-text"
                type="chars"
                animation="slide-up"
                speed={0.03}
                delay={0.3}
              />
              <AnimatedText
                text="DATA"
                className="hero-text gradient-text"
                type="chars"
                animation="slide-up"
                speed={0.03}
                delay={0.6}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <p className="subtitle-text mb-6 sm:mb-8 max-w-lg text-white high-contrast-text">
                UOR Foundation is building next-generation substrate protocols for an internet where data is sovereign,
                knowledge is open, and intelligence is shared — empowering people, protecting ownership, and unlocking
                human potential across systems and borders.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                className="rounded-full px-6 py-5 sm:px-8 sm:py-6 text-base font-medium bg-white text-black hover:bg-white/90 revolut-button"
                asChild
              >
                <Link href="/about">Learn More</Link>
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
            </motion.div>
          </div>

          <ParallaxSection direction="up" speed={0.2} className="hidden md:flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-revolut-blue-500 via-revolut-purple-500 to-revolut-pink-500 rounded-full blur-3xl opacity-30"></div>
              <motion.div className="relative z-10">
                <GalaxyAnimation className="w-full max-w-[300px] h-[300px]" />
              </motion.div>
            </motion.div>
          </ParallaxSection>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden sm:block"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            <div className="w-8 h-12 rounded-full border-2 border-white/50 flex justify-center">
              <motion.div
                className="w-1.5 h-3 bg-white rounded-full mt-2"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
