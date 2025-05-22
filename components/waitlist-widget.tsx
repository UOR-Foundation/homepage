"use client"

import { useEffect, useRef } from "react"
import Head from "next/head"

export function WaitlistWidget() {
  const containerRef = useRef<HTMLDivElement>(null)
  const initialized = useRef(false)

  useEffect(() => {
    // Only run this once
    if (initialized.current) return
    initialized.current = true

    // Create the container div
    if (containerRef.current) {
      containerRef.current.innerHTML = ""

      // Add the style element with mobile optimizations
      const style = document.createElement("style")
      style.textContent = `
  /* ---------- 1.  MOBILE-FIRST LAYOUT FIX ---------- */
  #getWaitlistContainer form,
  #getWaitlistContainer .getwaitlist_widget_form {
    /* most widget versions use one of these two selectors */
    display: flex;
    flex-direction: column;   /* <‒‒ stack input + button */
    gap: 0.25rem;             /* reduced breathing room for mobile */
    margin-top: 0 !important;
  }

  #getWaitlistContainer {
    margin-top: 0 !important;
  }

  #getWaitlistContainer input[type="email"],
  #getWaitlistContainer button {
    width: 100% !important;   /* full-width, same line-break */
    max-width: 100%;
    box-sizing: border-box;
    margin: 0;                /* kill any built-in left margin */
  }

  /* ---------- 2.  DESKTOP (OPTIONAL) ---------- */
  @media (min-width: 769px) {
    #getWaitlistContainer form,
    #getWaitlistContainer .getwaitlist_widget_form {
      flex-direction: row;    /* restore side-by-side at ≥ 769 px */
      gap: 0.5rem;
    }

    #getWaitlistContainer input[type="email"] {
      flex: 1 1 auto;         /* grow to fill */
    }

    #getWaitlistContainer button {
      width: auto !important; /* shrink back to natural width */
    }
  }

  /* ---------- 3.  HIDE "Waitlist hosted by getwaitlist.com" ---------- */
  #getWaitlistContainer .getwaitlist_credit,
  #getWaitlistContainer .getwaitlist_attribution,
  #getWaitlistContainer [data-testid="credit"] {
    display: none !important;
  }
  
  /* Additional styling for the button */
  #getWaitlistContainer button {
    background-color: #5E5CFF !important;
    border-radius: 4px !important;
  }

  /* Remove extra spacing */
  #getWaitlistContainer h3,
  #getWaitlistContainer .getwaitlist_widget_title {
    margin-top: 0 !important;
    margin-bottom: 0.5rem !important;
  }

  /* Ensure the widget container expands properly */
  .waitlist-container {
    width: 100%;
    max-width: 100%;
    transition: height 0.3s ease;
  }

  /* Make sure the success state is properly styled */
  #getWaitlistContainer .getwaitlist_success_container,
  #getWaitlistContainer .getwaitlist_success_message {
    width: 100% !important;
    max-width: 100% !important;
    box-sizing: border-box !important;
  }
`
      document.head.appendChild(style)

      // Detect if mobile
      const isMobile = window.innerWidth < 768

      // Create the container div with appropriate widget type
      const container = document.createElement("div")
      container.id = "getWaitlistContainer"
      container.setAttribute("data-waitlist_id", "28596")
      container.setAttribute("data-widget_type", isMobile ? "WIDGET_1" : "WIDGET_3")
      containerRef.current.appendChild(container)

      // Create and append the stylesheet
      const link = document.createElement("link")
      link.rel = "stylesheet"
      link.type = "text/css"
      link.href = "https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"
      document.head.appendChild(link)

      // Add event dispatching when the widget state changes
      const notifyHeightChange = () => {
        const event = new CustomEvent("waitlistHeightChanged")
        window.dispatchEvent(event)
      }

      // Create and append the script
      const script = document.createElement("script")
      script.src = "https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"
      script.async = true
      script.onload = () => {
        // Initialize the widget if needed
        if (window.getWaitlist && typeof window.getWaitlist.init === "function") {
          window.getWaitlist.init()
        }

        // Add mutation observer to detect changes in the widget
        const observer = new MutationObserver((mutations) => {
          // Trigger a custom event that the OptimizedDataWave component can listen for
          notifyHeightChange()

          // Check specifically for success state
          const container = document.getElementById("getWaitlistContainer")
          if (container) {
            const successElement =
              container.querySelector(".getwaitlist_success_container") ||
              container.querySelector(".getwaitlist_success_message") ||
              container.querySelector(".getwaitlist_widget_position")

            if (successElement) {
              // Extra notification for success state with multiple delays to ensure all animations complete
              setTimeout(notifyHeightChange, 500)
              setTimeout(notifyHeightChange, 1000)
              setTimeout(notifyHeightChange, 2000)
              setTimeout(notifyHeightChange, 3000)
              setTimeout(notifyHeightChange, 4000)
            }
          }
        })

        const container = document.getElementById("getWaitlistContainer")
        if (container) {
          observer.observe(container, {
            childList: true,
            subtree: true,
            attributes: true,
            characterData: true,
          })
        }

        // Also monitor button clicks to detect form submission
        const monitorButtonClicks = () => {
          const buttons = container.querySelectorAll("button")
          buttons.forEach((button) => {
            button.addEventListener("click", () => {
              // Schedule multiple checks after button click
              setTimeout(notifyHeightChange, 500)
              setTimeout(notifyHeightChange, 1500)
              setTimeout(notifyHeightChange, 2500)
              setTimeout(notifyHeightChange, 3500)
            })
          })
        }

        // Initial check and periodic rechecks for buttons
        monitorButtonClicks()
        setInterval(monitorButtonClicks, 2000)
      }
      document.body.appendChild(script)

      // Handle resize events to update widget type
      const handleResize = () => {
        const currentIsMobile = window.innerWidth < 768
        const currentWidgetType = container.getAttribute("data-widget_type")
        const newWidgetType = currentIsMobile ? "WIDGET_1" : "WIDGET_3"

        // Only update if the widget type needs to change
        if (currentWidgetType !== newWidgetType) {
          container.setAttribute("data-widget_type", newWidgetType)

          // Re-initialize the widget
          if (window.getWaitlist && typeof window.getWaitlist.init === "function") {
            window.getWaitlist.init()
          }
        }

        // Trigger height change event
        notifyHeightChange()
      }

      window.addEventListener("resize", handleResize)

      // Return cleanup for resize handler
      return () => {
        window.removeEventListener("resize", handleResize)

        const script = document.querySelector(
          'script[src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"]',
        )
        if (script) {
          script.remove()
        }

        // Remove the style element we added
        const styleElement = document.querySelector('style:contains("MOBILE-FIRST LAYOUT FIX")')
        if (styleElement) {
          styleElement.remove()
        }

        // Clean up any potential wallet-related event listeners
        const walletEvents = ["connect", "disconnect", "accountsChanged", "chainChanged", "message"]
        walletEvents.forEach((event) => {
          if (window.ethereum) {
            window.ethereum.removeAllListeners?.(event)
          }
          if (window.sender) {
            window.sender.removeAllListeners?.(event)
          }
        })

        // Specifically handle Sender wallet provider
        if (window.sender) {
          console.log("Disabling Sender wallet provider in waitlist widget")
          // Replace with mock implementation
          window.sender = {
            getProviderState: () => Promise.reject(new Error("Sender wallet disabled")),
            request: () => Promise.reject(new Error("Sender wallet disabled")),
            on: () => {},
            removeAllListeners: () => {},
            isConnected: () => false,
            connect: () => Promise.reject(new Error("Sender wallet disabled")),
          }
        }
      }
    }

    // Cleanup function
    return () => {
      const script = document.querySelector(
        'script[src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"]',
      )
      if (script) {
        script.remove()
      }

      // Remove the style element we added
      const styleElement = document.querySelector('style:contains("MOBILE-FIRST LAYOUT FIX")')
      if (styleElement) {
        styleElement.remove()
      }
    }
  }, [])

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"
        />
      </Head>
      <div ref={containerRef} className="waitlist-container w-full max-w-full"></div>
    </>
  )
}
