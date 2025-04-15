"use client"

import type React from "react"

import { useState, useRef, useEffect, useCallback } from "react"
import { Switch } from "@/components/ui/switch"
import { type Message, generateAIResponse } from "@/app/actions"
import Link from "next/link"

// Add this debounce utility function at the top of the file
function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null

  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [uorLibraryEnabled, setUorLibraryEnabled] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  // Add this state at the top of the component
  const [isTyping, setIsTyping] = useState(false)
  const [userInput, setUserInput] = useState("")

  // Add this function inside the component
  const debouncedHandleInputChange = useCallback(
    debounce((value: string) => {
      setUserInput(value)
    }, 100),
    [],
  )

  // Scroll to bottom of messages, but only within the container
  useEffect(() => {
    if (messagesEndRef.current && messagesContainerRef.current) {
      // Use scrollIntoView with block: "end" to prevent page jumping
      messagesEndRef.current.scrollIntoView({ behavior: "smooth", block: "end" })
    }
  }, [messages])

  // Focus input on load
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  // Memoize the submit handler for better performance
  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      if (!userInput.trim()) return

      // Add user message
      const userMessage = { role: "user" as const, content: userInput }
      setMessages((prev) => [...prev, userMessage])
      setUserInput("")
      setInput("")
      setIsTyping(true)

      try {
        // Pass the UOR library state to the server action
        const aiResponse = await generateAIResponse([...messages, userMessage], uorLibraryEnabled)
        setMessages((prev) => [...prev, aiResponse])
      } catch (error) {
        console.error("Error generating response:", error)
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant" as const,
            content: "I apologize, but I encountered an error. Please try again.",
          },
        ])
      } finally {
        setIsTyping(false)
        // Focus input after response
        if (inputRef.current) {
          inputRef.current.focus()
        }
      }
    },
    [userInput, messages, uorLibraryEnabled],
  )

  // Handle keyboard shortcuts
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      // Submit on Ctrl+Enter or Cmd+Enter
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        handleSubmit(e as unknown as React.FormEvent)
      }

      // Prevent default behavior for Enter key to avoid form submission
      if (e.key === "Enter" && !e.shiftKey && !e.ctrlKey && !e.metaKey) {
        e.preventDefault()
        handleSubmit(e as unknown as React.FormEvent)
      }
    },
    [handleSubmit],
  )

  return (
    <div className="flex flex-col h-full p-4">
      {/* Chat messages - fixed height container with internal scrolling */}
      <div
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 bg-black-200"
        style={{
          height: "350px",
          maxHeight: "350px",
          overflowY: "auto",
          overscrollBehavior: "contain", // Prevents scroll chaining
        }}
      >
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full text-white/50">
            <p>Ask UOR Foundation anything...</p>
          </div>
        ) : (
          messages.map((message, index) => (
            <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[85%] p-3 rounded-xl text-sm ${
                  message.role === "user"
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-tr-none"
                    : "bg-black-300 text-white/90 rounded-tl-none"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))
        )}
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[85%] p-3 rounded-xl bg-black-300 text-white/90 rounded-tl-none">
              <div className="flex space-x-2">
                <div
                  className="w-2 h-2 rounded-full bg-white/50 animate-bounce"
                  style={{ animationDelay: "0ms" }}
                ></div>
                <div
                  className="w-2 h-2 rounded-full bg-white/50 animate-bounce"
                  style={{ animationDelay: "150ms" }}
                ></div>
                <div
                  className="w-2 h-2 rounded-full bg-white/50 animate-bounce"
                  style={{ animationDelay: "300ms" }}
                ></div>
              </div>
            </div>
          </div>
        )}
        {isTyping && (
          <div className="flex justify-start">
            <div className="max-w-[85%] p-3 rounded-xl bg-black-300 text-white/90 rounded-tl-none">
              <div className="flex space-x-2">
                <div
                  className="w-2 h-2 rounded-full bg-white/50 animate-bounce"
                  style={{ animationDelay: "0ms" }}
                ></div>
                <div
                  className="w-2 h-2 rounded-full bg-white/50 animate-bounce"
                  style={{ animationDelay: "150ms" }}
                ></div>
                <div
                  className="w-2 h-2 rounded-full bg-white/50 animate-bounce"
                  style={{ animationDelay: "300ms" }}
                ></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input area - fixed position at bottom of container */}
      <div className="mt-auto p-2 sm:p-4">
        <div className="relative">
          <input
            type="text"
            className="w-full px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white"
            placeholder="Ask anything about UOR Framework..."
            value={input}
            onChange={(e) => {
              setInput(e.target.value)
              debouncedHandleInputChange(e.target.value)
            }}
            onKeyDown={handleKeyDown}
            ref={inputRef}
          />
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white"
            onClick={(e) => handleSubmit(e as unknown as React.FormEvent)}
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
      </div>

      {/* Toggle for UOR Library with Github link - moved below the input */}
      <div className="px-4 py-3 border-t border-white/10 flex items-center justify-end space-x-3 bg-black-200">
        <span className="text-xs text-white/60">
          UOR{" "}
          <Link
            href="https://github.com/UOR-Foundation"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300"
          >
            Github
          </Link>{" "}
          Library:
        </span>
        <Switch checked={uorLibraryEnabled} onCheckedChange={setUorLibraryEnabled} aria-label="Toggle UOR Library" />
      </div>
    </div>
  )
}
