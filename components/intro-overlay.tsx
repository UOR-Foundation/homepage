"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Check } from "lucide-react"

interface IntroOverlayProps {
  children: React.ReactNode
  title: string
}

export function IntroOverlay({ children, title }: IntroOverlayProps) {
  const [open, setOpen] = useState(false)

  const handleGetInTouch = () => {
    setOpen(false)
    // Small delay to ensure the current dialog closes first
    setTimeout(() => {
      const contactButton = document.querySelector("[data-contact-trigger]") as HTMLButtonElement
      if (contactButton) contactButton.click()
    }, 100)
  }

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="rounded-lg bg-background p-4 shadow-sm transition-all duration-200 hover:shadow-md cursor-pointer intro-button"
      >
        {children}
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto p-6 md:p-8 rounded-xl border-none">
          <div className="flex items-center justify-between mb-6">
            <DialogTitle className="text-2xl font-semibold tracking-tight">{title}</DialogTitle>
          </div>
          <div className="space-y-8">
            {title === "Introduction to UOR Foundation" && (
              <>
                <div className="bg-[#5E5CFF]/5 p-6 rounded-lg border border-[#5E5CFF]/10">
                  <h3 className="text-xl font-semibold tracking-tight text-[#5E5CFF] mb-4">Our Vision</h3>
                  <div className="space-y-4 text-slate-600">
                    <p className="text-base tracking-tight">
                      The next generation of the Internet, powered by AI, will not be built on static content. It will
                      be built on shared context that both machines and humans can understand.
                    </p>
                    <p className="text-base tracking-tight">
                      Today's AI tools respond without real understanding. They guess, get confused across systems, and
                      often cannot be trusted.
                    </p>
                    <p className="text-base tracking-tight">
                      What is missing is a way to give meaning to data that all systems can agree on. A foundation that
                      makes knowledge clear, dependable, and easy to connect, no matter where it comes from or how it is
                      used.
                    </p>
                  </div>
                </div>
                <div className="bg-[#5E5CFF]/5 p-6 rounded-lg border border-[#5E5CFF]/10">
                  <h3 className="text-xl font-semibold tracking-tight text-[#5E5CFF] mb-4">Our Mission</h3>
                  <div className="space-y-4 text-slate-600">
                    <p className="text-base tracking-tight">
                      We are building the first context-aware operating system that allows AI, applications, and people
                      to work from the same reliable source of truth.
                    </p>
                    <p className="text-base tracking-tight">
                      This system introduces a common language that can describe any kind of data such as text, images,
                      code, or analog signals so everything communicates in the same way.
                    </p>
                    <p className="text-base tracking-tight">
                      It makes context programmable so AI can understand not just the data but the meaning behind it. It
                      ensures information is consistent for everyone and embeds meaning in a way that is reliable and
                      predictable.
                    </p>
                    <p className="text-base tracking-tight">
                      Powered by the Universal Object Reference (UOR) and delivered through PrimeOS, we are creating the
                      core infrastructure for a more intelligent and trustworthy Internet. One where ideas are
                      connected, facts can be verified, and AI operates with clarity and confidence.
                    </p>
                  </div>
                </div>
              </>
            )}

            {title === "Learn about PrimeOS" && (
              <>
                <div className="bg-[#5E5CFF]/5 p-6 rounded-lg border border-[#5E5CFF]/10">
                  <h3 className="text-xl font-semibold tracking-tight text-[#5E5CFF] mb-4">
                    PrimeOS: The Operating System for Trusted AI
                  </h3>
                  <div className="space-y-4 text-slate-600">
                    <p className="text-base tracking-tight">
                      PrimeOS is a purpose-built system that runs AI applications created with the Universal Object
                      Reference (UOR) Framework. It adds context to every step, so the decisions AI makes are not only
                      repeatable but also consistent and easy to verify, no matter where the application runs.
                    </p>
                    <p className="text-base tracking-tight">
                      Traditional systems just execute code. PrimeOS goes further by keeping meaning intact through the
                      entire process. This helps AI stay aligned with its intended purpose, avoid confusion, and deliver
                      dependable results, especially in systems where multiple AI agents interact.
                    </p>
                    <p className="text-base tracking-tight">
                      PrimeOS is the final step in a complete process for building, sharing, and running AI that can be
                      trusted.
                    </p>
                  </div>
                </div>

                <div className="bg-[#5E5CFF]/5 p-6 rounded-lg border border-[#5E5CFF]/10">
                  <h3 className="text-xl font-semibold tracking-tight text-[#5E5CFF] mb-4">
                    A Simple, Transparent Lifecycle
                  </h3>
                  <div className="space-y-4 text-slate-600">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 flex items-start">
                        <span className="flex items-center justify-center h-7 w-7 rounded-full bg-[#5E5CFF] text-white font-semibold text-sm">
                          1
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-700">Build: Prime SDK</h4>
                        <p className="text-base tracking-tight">
                          Developers use the Prime SDK to create AI applications that behave in predictable,
                          context-aware ways. Each app is built with embedded references to meaning, making its logic
                          clear and traceable from the start.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 flex items-start">
                        <span className="flex items-center justify-center h-7 w-7 rounded-full bg-[#5E5CFF] text-white font-semibold text-sm">
                          2
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-700">Ship: Prime AppStore</h4>
                        <p className="text-base tracking-tight">
                          Applications are packaged and published through the Prime AppStore. This keeps them intact and
                          transparent so anyone can understand their purpose and verify how they work.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 flex items-start">
                        <span className="flex items-center justify-center h-7 w-7 rounded-full bg-[#5E5CFF] text-white font-semibold text-sm">
                          3
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-700">Run: PrimeOS</h4>
                        <p className="text-base tracking-tight">
                          Applications run on PrimeOS, where their context is preserved at every step. This ensures
                          consistent and understandable results no matter where or how the application is used.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            {title === "Overview of UOR Framework" && (
              <>
                <div className="bg-[#5E5CFF]/5 p-6 rounded-lg border border-[#5E5CFF]/10">
                  <h3 className="text-xl font-semibold tracking-tight text-[#5E5CFF] mb-4">
                    What is the UOR Framework?
                  </h3>
                  <div className="space-y-4 text-slate-600">
                    <p className="text-base tracking-tight">
                      The Universal Object Reference (UOR) framework gives AI applications a consistent way to describe,
                      organize, and trust information. It keeps meaning clear and steady, no matter where the data comes
                      from or how it is used.
                    </p>
                    <p className="text-base tracking-tight">
                      AI often struggles with confusion or misalignment because different systems represent data in
                      different ways. UOR solves this by giving each piece of data a unique structure-based ID, like a
                      fingerprint, based on how the data is built, not just how it appears.
                    </p>
                    <p className="text-base tracking-tight">
                      This helps AI systems communicate more effectively, agree on meaning, and rely on the information
                      they use.
                    </p>
                    <p className="text-base tracking-tight">
                      Just as Google organized the web by ranking content, UOR organizes meaning itself, making it
                      easier for AI to understand and work with complex information.
                    </p>
                  </div>
                </div>

                <div className="bg-[#5E5CFF]/5 p-6 rounded-lg border border-[#5E5CFF]/10">
                  <h3 className="text-xl font-semibold tracking-tight text-[#5E5CFF] mb-4">Why It Matters</h3>
                  <div className="space-y-4 text-slate-600">
                    <p className="text-base tracking-tight">
                      UOR helps make meaning consistent and shareable across machines, disciplines, and viewpoints. It
                      gives AI, software, and people a common foundation for working with information in a more reliable
                      and useful way.
                    </p>
                    <div className="flex items-start gap-2">
                      <div className="flex-shrink-0 mt-0.5 rounded-full bg-[#5E5CFF]/10 p-1">
                        <Check className="h-4 w-4 text-[#5E5CFF]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-700">One method for all data types</h4>
                        <p className="text-base tracking-tight">
                          UOR can describe numbers, formulas, and even complex data using a single approach.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="flex-shrink-0 mt-0.5 rounded-full bg-[#5E5CFF]/10 p-1">
                        <Check className="h-4 w-4 text-[#5E5CFF]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-700">Consistent across platforms</h4>
                        <p className="text-base tracking-tight">
                          It works independently of file types or programming formats, avoiding common mismatches
                          between tools.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="flex-shrink-0 mt-0.5 rounded-full bg-[#5E5CFF]/10 p-1">
                        <Check className="h-4 w-4 text-[#5E5CFF]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-700">Built for trust</h4>
                        <p className="text-base tracking-tight">
                          Because it is based on the core structure of the data, UOR provides a reliable way to compare
                          and verify information.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="flex-shrink-0 mt-0.5 rounded-full bg-[#5E5CFF]/10 p-1">
                        <Check className="h-4 w-4 text-[#5E5CFF]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-700">Simplifies complexity</h4>
                        <p className="text-base tracking-tight">
                          It breaks down complex ideas into simpler parts, making it easier to analyze, reason, and
                          build with.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#5E5CFF]/5 p-6 rounded-lg border border-[#5E5CFF]/10">
                  <h3 className="text-xl font-semibold tracking-tight text-[#5E5CFF] mb-4">How It Works</h3>
                  <div className="space-y-4 text-slate-600">
                    <p className="text-base tracking-tight">
                      At the core of UOR is a method called prime factorization. It breaks data into its simplest
                      building blocks. Each object is assigned a set of coordinates based on these parts, making it
                      easier to understand how things relate to each other.
                    </p>
                    <p className="text-base tracking-tight">The UOR framework includes:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li className="text-base tracking-tight">A mapping system based on simple, unique coordinates</li>
                      <li className="text-base tracking-tight">
                        A way to measure how simple or complex information is
                      </li>
                      <li className="text-base tracking-tight">Tools to view data from different perspectives</li>
                      <li className="text-base tracking-tight">
                        A visual structure to explore how objects are connected
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            )}
          </div>
          {title === "Introduction to UOR Foundation" ? (
            <div className="pt-8 flex justify-center items-center gap-2">
              <span className="font-bold text-black">We believe this future is within reach.</span>
              <a
                href="#connect"
                className="text-[#5E5CFF] font-medium hover:text-[#4A48FF] transition-colors duration-200"
                onClick={() => setOpen(false)}
              >
                Join us
              </a>
            </div>
          ) : (
            <div className="pt-8 flex justify-center">
              <div className="text-center">
                <p className="font-bold text-slate-800">
                  Interested in learning more?{" "}
                  <button
                    onClick={handleGetInTouch}
                    className="text-[#5E5CFF] font-medium hover:text-[#4A48FF] transition-colors duration-200"
                  >
                    Get in touch
                  </button>
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
