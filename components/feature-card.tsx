"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Card3D from "@/components/card-3d"

interface FeatureCardProps {
  title: string
  description: string
  icon: ReactNode
  link?: string
  linkText?: string
  gradient?: string
  delay?: number
}

export default function FeatureCard({
  title,
  description,
  icon,
  link = "/about",
  linkText = "Learn more",
  gradient = "from-revolut-blue-500/10 to-revolut-purple-500/10",
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
    >
      <Card3D
        className={`bg-gradient-to-br ${gradient} p-5 sm:p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col`}
        intensity={10}
        glareEnabled={true}
        glareMaxOpacity={0.2}
      >
        <div className="bg-white/10 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
          {icon}
        </div>
        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white">{title}</h3>
        <p className="text-white text-sm sm:text-base mb-4 sm:mb-6 flex-grow">{description}</p>
        <Link
          href={link}
          className="inline-flex items-center text-white font-medium group mt-auto text-sm sm:text-base py-1"
          aria-label={`${linkText} about ${title}`}
        >
          {linkText}{" "}
          <motion.div className="ml-2" initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
            <ArrowRight className="h-4 w-4" />
          </motion.div>
        </Link>
      </Card3D>
    </motion.div>
  )
}
