"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { X } from "lucide-react"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  activeSection: string | null
}

export function MobileMenu({ isOpen, onClose, activeSection }: MobileMenuProps) {
  // Handle body scroll locking
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-background/95 backdrop-blur-sm md:hidden" data-mobile-menu>
      <div className="flex items-center justify-between border-b border-border/40 px-6 py-4">
        <Link href="/" className="flex items-center space-x-2" onClick={onClose}>
          <Image
            src="/images/uor-logo.png"
            alt="UOR Foundation Logo"
            width={32}
            height={32}
            style={{ height: "32px", width: "auto" }}
          />
        </Link>
        <button
          className="rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
          onClick={onClose}
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      <nav className="flex flex-1 flex-col overflow-y-auto p-6">
        <div className="flex flex-col space-y-4">
          <a
            href="#learn"
            className={`text-lg font-bold ${activeSection === "learn" ? "text-[#5E5CFF]" : "text-foreground/80"}`}
            onClick={onClose}
          >
            Learn
          </a>
          <a
            href="#build"
            className={`text-lg font-bold ${activeSection === "build" ? "text-[#5E5CFF]" : "text-foreground/80"}`}
            onClick={onClose}
          >
            Build
          </a>
          <a
            href="#connect"
            className={`text-lg font-bold ${activeSection === "connect" ? "text-[#5E5CFF]" : "text-foreground/80"}`}
            onClick={onClose}
          >
            Connect
          </a>
        </div>

        <div className="mt-8 space-y-4">
          <h3 className="font-medium text-sm uppercase text-muted-foreground">RESOURCES</h3>
          <div className="flex flex-col space-y-3">
            <button
              onClick={() => {
                const introButtons = document.querySelectorAll(".intro-button")
                if (introButtons && introButtons[0]) {
                  ;(introButtons[0] as HTMLElement).click()
                  onClose()
                }
              }}
              className="text-left text-foreground/80 hover:text-foreground"
            >
              UOR Foundation
            </button>
            <button
              onClick={() => {
                const introButtons = document.querySelectorAll(".intro-button")
                if (introButtons && introButtons[1]) {
                  ;(introButtons[1] as HTMLElement).click()
                  onClose()
                }
              }}
              className="text-left text-foreground/80 hover:text-foreground"
            >
              UOR Framework
            </button>
            <button
              onClick={() => {
                const introButtons = document.querySelectorAll(".intro-button")
                if (introButtons && introButtons[2]) {
                  ;(introButtons[2] as HTMLElement).click()
                  onClose()
                }
              }}
              className="text-left text-foreground/80 hover:text-foreground"
            >
              PrimeOS
            </button>
          </div>
        </div>

        <div className="mt-auto pt-8 flex justify-center space-x-4">
          <Link
            href="https://www.linkedin.com/company/uor-foundation"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full bg-muted/50"
            onClick={onClose}
          >
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
              className="h-5 w-5 text-foreground/60"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="https://github.com/UOR-Foundation"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full bg-muted/50"
            onClick={onClose}
          >
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
              className="h-5 w-5 text-foreground/60"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://discord.gg/ZwuZaNyuve"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full bg-muted/50"
            onClick={onClose}
          >
            <Image src="/images/discord2.png" alt="Discord" width={20} height={20} className="opacity-60" />
            <span className="sr-only">Discord</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}
