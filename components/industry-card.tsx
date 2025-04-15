"use client"

import type React from "react"

import { type ReactNode, memo } from "react"
import { motion } from "framer-motion"

interface IndustryCardProps {
  icon: ReactNode
  name: string
  isActive: boolean
  onClick: () => void
}

// Memoize the component to prevent unnecessary re-renders
const IndustryCard = memo(function IndustryCard({
  icon,
  name,
  isActive,
  onClick,
}: {
  icon: React.ReactNode
  name: string
  isActive: boolean
  onClick: () => void
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className={`cursor-pointer rounded-lg p-3 sm:p-4 flex flex-col items-center justify-center text-center h-full min-h-[90px] border ${
        isActive
          ? "bg-gradient-to-br from-revolut-blue-500/20 to-revolut-purple-500/20 border-white/20"
          : "bg-black-200 border-white/5 hover:border-white/10"
      }`}
      onClick={onClick}
    >
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
          isActive ? "bg-gradient-to-br from-revolut-blue-500 to-revolut-purple-500" : "bg-black-300"
        }`}
      >
        {icon}
      </div>
      <span className="text-xs leading-tight">{name}</span>
    </motion.div>
  )
})

export default IndustryCard
