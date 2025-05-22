"use client"

import { useState, useEffect } from "react"

export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // Close menu when clicking outside
  useEffect(() => {
    if (!isOpen) return

    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest("[data-mobile-menu]") && !target.closest("[data-mobile-trigger]")) {
        setIsOpen(false)
      }
    }

    // Close menu when pressing escape
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false)
      }
    }

    // Close menu when resizing to desktop
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    document.addEventListener("click", handleOutsideClick)
    document.addEventListener("keydown", handleEscape)
    window.addEventListener("resize", handleResize)

    // Prevent scrolling when menu is open
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("click", handleOutsideClick)
      document.removeEventListener("keydown", handleEscape)
      window.removeEventListener("resize", handleResize)
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return { isOpen, toggleMenu }
}
