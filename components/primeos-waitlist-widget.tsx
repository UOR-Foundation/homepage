"use client"

import { useEffect, useRef } from "react"
import { useDeviceDetection } from "@/hooks/use-device-detection"

export function PrimeOSWaitlistWidget() {
  const containerRef = useRef<HTMLDivElement>(null)
  const initialized = useRef(false)
  const { isMobile } = useDeviceDetection()

  useEffect(() => {
    // Only run this once
    if (initialized.current) return
    initialized.current = true

    // Create the container div
    if (containerRef.current) {
      containerRef.current.innerHTML = ""

      if (isMobile) {
        // Mobile implementation - use the direct code provided by the user
        // Add style to hide the credit text and style the widget for mobile
        const style = document.createElement("style")
        style.textContent = `
  /* Hide "Waitlist hosted by getwaitlist.com" */
  #getWaitlistContainer .getwaitlist_credit,
  #getWaitlistContainer .getwaitlist_attribution,
  #getWaitlistContainer [data-testid="credit"] {
    display: none !important;
  }
  
  /* Mobile styling */
  #getWaitlistContainer {
    margin: 0 auto !important;
    max-width: 100% !important;
    width: 100% !important;
  }

  /* Style the form for mobile */
  #getWaitlistContainer form,
  #getWaitlistContainer .getwaitlist_widget_form {
    display: flex !important;
    flex-direction: column !important;
    gap: 0 !important;
    margin: 0 auto !important;
    justify-content: center !important;
  }

  /* Style the input field */
  #getWaitlistContainer input[type="email"] {
    width: 100% !important;
    border: 1px solid rgba(0, 0, 0, 0.1) !important;
    border-radius: 0.5rem !important;
    padding: 0.75rem 1rem !important;
    font-size: 1rem !important;
    outline: none !important;
    box-shadow: none !important;
    background-color: white !important;
    color: #333 !important;
    margin-bottom: 0.5rem !important;
  }

  /* Style the button */
  #getWaitlistContainer button {
    width: 100% !important;
    background-color: #6366F1 !important;
    color: white !important;
    border: none !important;
    padding: 0.75rem 1rem !important;
    font-size: 1rem !important;
    font-weight: 500 !important;
    cursor: pointer !important;
    border-radius: 0.5rem !important;
    white-space: nowrap !important;
  }

  /* Remove default widget title */
  #getWaitlistContainer h3,
  #getWaitlistContainer .getwaitlist_widget_title {
    display: none !important;
  }

  /* Custom placeholder text */
  #getWaitlistContainer input[type="email"]::placeholder {
    color: #6b7280 !important;
  }

  /* Success message styling */
  #getWaitlistContainer .getwaitlist_success_message,
  #getWaitlistContainer .getwaitlist_success_container {
    text-align: center !important;
    padding: 1rem !important;
    color: #333 !important;
    background-color: white !important;
    border-radius: 0.5rem !important;
    border: 1px solid rgba(0, 0, 0, 0.1) !important;
  }
`
        document.head.appendChild(style)

        // Create the container div with WIDGET_1 type for mobile
        const container = document.createElement("div")
        container.id = "getWaitlistContainer"
        container.setAttribute("data-waitlist_id", "28596")
        container.setAttribute("data-widget_type", "WIDGET_1")

        // Set custom placeholder text
        container.setAttribute("data-placeholder_text", "Enter your email")

        // Set custom button text
        container.setAttribute("data-button_text", "Join PrimeOS waitlist")

        containerRef.current.appendChild(container)

        // Create and append the stylesheet
        const link = document.createElement("link")
        link.rel = "stylesheet"
        link.type = "text/css"
        link.href = "https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"
        document.head.appendChild(link)

        // Create and append the script
        const script = document.createElement("script")
        script.src = "https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"
        script.async = true
        script.onload = () => {
          // Initialize the widget if needed
          if (window.getWaitlist && typeof window.getWaitlist.init === "function") {
            window.getWaitlist.init()
          }
        }
        document.body.appendChild(script)
      } else {
        // Desktop implementation - keep the existing code
        // Add the style element with customizations to match the design
        const style = document.createElement("style")
        style.textContent = `
  /* Hide "Waitlist hosted by getwaitlist.com" */
  #getWaitlistContainer .getwaitlist_credit,
  #getWaitlistContainer .getwaitlist_attribution,
  #getWaitlistContainer [data-testid="credit"] {
    display: none !important;
  }
  
  /* Custom styling to match the design */
  #getWaitlistContainer {
    margin: 0 auto !important;
    max-width: 100% !important;
    width: 100% !important;
  }

  /* Style the form to match the design */
  #getWaitlistContainer form,
  #getWaitlistContainer .getwaitlist_widget_form {
    display: flex !important;
    flex-direction: row !important;
    gap: 0 !important;
    margin: 0 auto !important;
    justify-content: center !important;
    border: 1px solid rgba(0, 0, 0, 0.1) !important;
    border-radius: 0.5rem !important;
    overflow: hidden !important;
    background-color: white !important;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05) !important;
  }

  /* Style the input field */
  #getWaitlistContainer input[type="email"] {
    flex: 1 1 auto !important;
    border: none !important;
    padding: 0.75rem 1rem !important;
    font-size: 1rem !important;
    outline: none !important;
    box-shadow: none !important;
    background-color: transparent !important;
    border-radius: 0 !important;
    color: #333 !important;
    min-width: 0 !important; /* Prevents input from overflowing */
  }

  /* Style the button */
  #getWaitlistContainer button {
    background-color: #6366F1 !important;
    color: white !important;
    border: none !important;
    padding: 0.75rem 1.5rem !important;
    font-size: 1rem !important;
    font-weight: 500 !important;
    cursor: pointer !important;
    transition: background-color 0.2s ease !important;
    border-radius: 0 !important;
    white-space: nowrap !important;
    min-width: 180px !important; /* Ensure button has enough width */
  }

  #getWaitlistContainer button:hover {
    background-color: #5253d4 !important;
  }

  /* Remove default widget title */
  #getWaitlistContainer h3,
  #getWaitlistContainer .getwaitlist_widget_title {
    display: none !important;
  }

  /* Custom placeholder text */
  #getWaitlistContainer input[type="email"]::placeholder {
    color: #6b7280 !important;
  }

  /* Success message styling */
  #getWaitlistContainer .getwaitlist_success_message,
  #getWaitlistContainer .getwaitlist_success_container {
    text-align: center !important;
    padding: 1rem !important;
    color: #333 !important;
    background-color: white !important;
    border-radius: 0.5rem !important;
    border: 1px solid rgba(0, 0, 0, 0.1) !important;
  }
`
        document.head.appendChild(style)

        // Create the container div with appropriate widget type
        const container = document.createElement("div")
        container.id = "getWaitlistContainer"
        container.setAttribute("data-waitlist_id", "28596")
        container.setAttribute("data-widget_type", "WIDGET_3")

        // Set custom placeholder text
        container.setAttribute("data-placeholder_text", "Enter your email")

        // Set custom button text
        container.setAttribute("data-button_text", "Join PrimeOS waitlist")

        containerRef.current.appendChild(container)

        // Create and append the stylesheet
        const link = document.createElement("link")
        link.rel = "stylesheet"
        link.type = "text/css"
        link.href = "https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"
        document.head.appendChild(link)

        // Create and append the script
        const script = document.createElement("script")
        script.src = "https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"
        script.async = true
        script.onload = () => {
          // Initialize the widget if needed
          if (window.getWaitlist && typeof window.getWaitlist.init === "function") {
            window.getWaitlist.init()
          }
        }
        document.body.appendChild(script)
      }

      // Handle resize events
      const handleResize = () => {
        // Re-initialize the widget if needed
        if (window.getWaitlist && typeof window.getWaitlist.init === "function") {
          window.getWaitlist.init()
        }
      }

      window.addEventListener("resize", handleResize)

      // Return cleanup for resize handler
      return () => {
        window.removeEventListener("resize", handleResize)

        // Remove the script and style elements
        const scriptElement = document.querySelector(
          'script[src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"]',
        )
        if (scriptElement) {
          scriptElement.remove()
        }

        // Remove the style element we added
        const styleElements = document.querySelectorAll("style")
        styleElements.forEach((el) => {
          if (el.textContent?.includes("#getWaitlistContainer")) {
            el.remove()
          }
        })

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
          console.log("Disabling Sender wallet provider in PrimeOS waitlist widget")
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
  }, [isMobile])

  return (
    <div className="flex justify-center w-full">
      <div ref={containerRef} className={`w-full ${isMobile ? "max-w-full" : "max-w-2xl"} mx-auto`}></div>
    </div>
  )
}
