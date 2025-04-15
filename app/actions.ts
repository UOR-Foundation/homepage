"use server"

import { GoogleGenerativeAI } from "@google/generative-ai"

// Initialize the Google Generative AI with the API key
const genAI = new GoogleGenerativeAI("AIzaSyCSmXY72KFvqyE-kT-6g_QhxVmSf8nzVRY")

export type Message = {
  role: "user" | "assistant"
  content: string
}

export async function generateAIResponse(messages: Message[], useUorLibrary = true) {
  try {
    // Get the model - using gemini-1.5-flash instead of gemini-pro
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

    // Format the conversation history for the API
    const formattedMessages = messages.map((message) => ({
      role: message.role,
      parts: [{ text: message.content }],
    }))

    // Get the last user message
    const lastUserMessage = messages[messages.length - 1].content

    // Add context about UOR library usage
    let userPrompt = lastUserMessage
    if (!useUorLibrary) {
      userPrompt = `[Note: UOR Library is disabled for this query] ${userPrompt}`
    }

    // Generate content directly instead of using chat
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: userPrompt }] }],
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
      },
    })

    const response = result.response
    const text = response.text()

    return {
      role: "assistant" as const,
      content: text,
    }
  } catch (error) {
    console.error("Error generating AI response:", error)
    return {
      role: "assistant" as const,
      content: "I apologize, but I encountered an error. Please try again later.",
    }
  }
}
