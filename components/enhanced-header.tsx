"use client"

import { useState, useEffect, useCallback, memo } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import Image from "next/image"

// Memoized dropdown components
const AboutDropdown = memo(
  ({
    isOpen,
    setIsOpen,
    isMobile,
    closeMobileMenu,
  }: {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
    isMobile: boolean
    closeMobileMenu: () => void
  }) => {
    const [frameworkMenuOpen, setFrameworkMenuOpen] = useState(false)

    return (
      <div className={isMobile ? "" : "relative group"}>
        <button
          className={
            isMobile
              ? "text-white py-2 border-b border-gray-800 flex items-center justify-between w-full"
              : "text-white hover:text-white transition-colors text-base font-medium flex items-center"
          }
          onClick={() => setIsOpen(!isOpen)}
        >
          About{" "}
          <ChevronDown
            className={`h-4 w-4 ml-1 ${isMobile && isOpen ? "rotate-180" : ""} ${!isMobile ? "" : "transition-transform"}`}
          />
        </button>

        {(!isMobile || isOpen) && (
          <div
            className={
              isMobile
                ? "pl-4 mt-2 space-y-2"
                : "absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-black-200 border border-white/10 overflow-hidden transform opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 origin-top-left z-20"
            }
          >
            <div className={isMobile ? "" : "py-1"}>
              <Link
                href="/about/uor-foundation"
                className={
                  isMobile
                    ? "text-white/80 py-3 block text-base"
                    : "block px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors"
                }
                onClick={isMobile ? closeMobileMenu : undefined}
              >
                UOR Foundation
              </Link>

              {/* UOR Framework */}
              <div className={isMobile ? "" : "relative group/framework"}>
                <div
                  className={
                    isMobile
                      ? "text-white/80 py-2 block flex items-center justify-between cursor-pointer"
                      : "block px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors flex items-center justify-between cursor-pointer"
                  }
                  onClick={isMobile ? () => setFrameworkMenuOpen(!frameworkMenuOpen) : undefined}
                  onMouseEnter={!isMobile ? () => setFrameworkMenuOpen(true) : undefined}
                >
                  <Link href="/about/uor-framework" className="flex-1" onClick={isMobile ? closeMobileMenu : undefined}>
                    UOR Framework
                  </Link>
                  <ChevronDown
                    className={`h-4 w-4 ml-1 ${frameworkMenuOpen ? "rotate-180" : ""} transition-transform`}
                  />
                </div>

                {/* Framework nested links - toggle on mobile, hover on desktop */}
                {(isMobile && frameworkMenuOpen) ||
                  (!isMobile && (
                    <div
                      className={
                        isMobile
                          ? "pl-4 mt-2 space-y-1"
                          : "absolute left-full top-0 w-48 rounded-md shadow-lg bg-black-200 border border-white/10 overflow-hidden opacity-0 group-hover/framework:opacity-100 scale-95 group-hover/framework:scale-100 transition-all duration-200 origin-top-left z-30 py-2"
                      }
                      onMouseLeave={!isMobile ? () => setFrameworkMenuOpen(false) : undefined}
                    >
                      <Link
                        href="https://v0.dev/chat/fork-of-uor-foundation-website-buh62zw5paw"
                        className={
                          isMobile
                            ? "text-white/70 py-1.5 block text-sm flex items-center"
                            : "block px-4 py-1.5 text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors flex items-center"
                        }
                        onClick={isMobile ? closeMobileMenu : undefined}
                      >
                        <ChevronRight className="h-3 w-3 mr-1 opacity-70" />
                        <span>Math</span>
                      </Link>
                      <Link
                        href="https://v0.dev/chat/fork-of-uor-foundation-website-buh62zw5paw"
                        className={
                          isMobile
                            ? "text-white/70 py-1.5 block text-sm flex items-center"
                            : "block px-4 py-1.5 text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors flex items-center"
                        }
                        onClick={isMobile ? closeMobileMenu : undefined}
                      >
                        <ChevronRight className="h-3 w-3 mr-1 opacity-70" />
                        <span>Protocol</span>
                      </Link>
                      <Link
                        href="https://v0.dev/chat/fork-of-uor-foundation-website-buh62zw5paw"
                        className={
                          isMobile
                            ? "text-white/70 py-1.5 block text-sm flex items-center"
                            : "block px-4 py-1.5 text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors flex items-center"
                        }
                        onClick={isMobile ? closeMobileMenu : undefined}
                      >
                        <ChevronRight className="h-3 w-3 mr-1 opacity-70" />
                        <span>Client/Server</span>
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    )
  },
)

const ProductDropdown = memo(
  ({
    isOpen,
    setIsOpen,
    isMobile,
    closeMobileMenu,
  }: {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
    isMobile: boolean
    closeMobileMenu: () => void
  }) => {
    return (
      <div className={isMobile ? "" : "relative group"}>
        <button
          className={
            isMobile
              ? "text-white py-2 border-b border-gray-800 flex items-center justify-between w-full"
              : "text-white hover:text-white transition-colors text-base font-medium flex items-center"
          }
          onClick={() => setIsOpen(!isOpen)}
        >
          Product{" "}
          <ChevronDown
            className={`h-4 w-4 ml-1 ${isMobile && isOpen ? "rotate-180" : ""} ${!isMobile ? "" : "transition-transform"}`}
          />
        </button>

        {(!isMobile || isOpen) && (
          <div
            className={
              isMobile
                ? "pl-4 mt-2 space-y-2"
                : "absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-black-200 border border-white/10 overflow-hidden transform opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 origin-top-left z-20"
            }
          >
            <div className={isMobile ? "" : "py-1"}>
              <Link
                href="/product"
                className={
                  isMobile
                    ? "text-white/80 py-3 block text-base"
                    : "block px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors"
                }
                onClick={isMobile ? closeMobileMenu : undefined}
              >
                Overview
              </Link>
              <Link
                href="/prime-sdk"
                className={
                  isMobile
                    ? "text-white/80 py-3 block text-base"
                    : "block px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors"
                }
                onClick={isMobile ? closeMobileMenu : undefined}
              >
                Prime SDK <span className="text-revolut-blue-500">(Build)</span>
              </Link>
              <Link
                href="/prime-appstore"
                className={
                  isMobile
                    ? "text-white/80 py-3 block text-base"
                    : "block px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors"
                }
                onClick={isMobile ? closeMobileMenu : undefined}
              >
                Prime AppStore <span className="text-revolut-purple-500">(Ship)</span>
              </Link>
              <Link
                href="/prime-os"
                className={
                  isMobile
                    ? "text-white/80 py-3 block text-base"
                    : "block px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors"
                }
                onClick={isMobile ? closeMobileMenu : undefined}
              >
                PrimeOS <span className="text-revolut-pink-500">(Run)</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    )
  },
)

// Set display names for debugging
AboutDropdown.displayName = "AboutDropdown"
ProductDropdown.displayName = "ProductDropdown"

export default function EnhancedHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productMenuOpen, setProductMenuOpen] = useState(false)
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false)

  // Memoize the scroll handler for performance
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-2 bg-black/90 backdrop-blur-md" : "py-4 bg-transparent"
      }`}
    >
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6">
        <Link href="/" className="flex items-center space-x-2 z-10">
          <div className="w-8 h-8 rounded-md overflow-hidden">
            <Image src="/uor_god.svg" alt="UOR Foundation Logo" width={32} height={32} className="w-full h-full" />
          </div>
          <span className="font-medium text-lg text-white">UOR Foundation</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            <AboutDropdown
              isOpen={aboutMenuOpen}
              setIsOpen={setAboutMenuOpen}
              isMobile={false}
              closeMobileMenu={() => {}}
            />
            <ProductDropdown
              isOpen={productMenuOpen}
              setIsOpen={setProductMenuOpen}
              isMobile={false}
              closeMobileMenu={() => {}}
            />
            <Link href="/insights" className="text-white hover:text-white transition-colors text-base font-medium">
              Insights
            </Link>
          </div>
          <div className="flex items-center space-x-3">
            <Button className="rounded-full px-5 py-2 text-sm font-medium bg-white text-black hover:bg-white/90 revolut-button">
              Join us
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-10 p-2 bg-black/30 backdrop-blur-sm rounded-full"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white" />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 h-screen bg-black/95 backdrop-blur-md flex flex-col pt-16 px-6 overflow-y-auto"
            >
              <div className="flex flex-col space-y-4 text-base">
                <AboutDropdown
                  isOpen={aboutMenuOpen}
                  setIsOpen={setAboutMenuOpen}
                  isMobile={true}
                  closeMobileMenu={() => setMobileMenuOpen(false)}
                />
                <ProductDropdown
                  isOpen={productMenuOpen}
                  setIsOpen={setProductMenuOpen}
                  isMobile={true}
                  closeMobileMenu={() => setMobileMenuOpen(false)}
                />
                <Link
                  href="/insights"
                  className="text-white py-2 border-b border-gray-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Insights
                </Link>
              </div>
              <div className="mt-8 flex space-x-4 items-center">
                <Button
                  className="w-full rounded-full py-6 text-base font-medium bg-white text-black hover:bg-white/90 revolut-button"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Join us
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
