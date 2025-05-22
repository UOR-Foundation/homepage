"use server"

import { Resend } from "resend"

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY)

export interface ContactFormData {
  name: string
  email: string
  organization?: string
  message: string
  getUpdates: boolean
}

export async function submitContactForm(formData: ContactFormData) {
  try {
    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      return {
        success: false,
        message: "Please fill in all required fields",
      }
    }

    // Prepare email content
    const subject = `UOR Foundation Contact Form: ${formData.name}`
    const htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      ${formData.organization ? `<p><strong>Organization:</strong> ${formData.organization}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p>${formData.message.replace(/\n/g, "<br>")}</p>
      <p><strong>Subscribed to updates:</strong> ${formData.getUpdates ? "Yes" : "No"}</p>
    `

    // Use Resend's sandbox domain for testing
    // This will work without domain verification
    const { data, error } = await resend.emails.send({
      from: "UOR Foundation <onboarding@resend.dev>", // Using Resend's sandbox domain
      to: "trinity@uor.foundation",
      subject: subject,
      html: htmlContent,
      reply_to: formData.email,
    })

    if (error) {
      console.error("Error sending email:", error)
      console.error("Error details:", JSON.stringify(error, null, 2))
      return {
        success: false,
        message: "Failed to send your message. Please try again later.",
      }
    }

    console.log("Email sent successfully to contact@uor.foundation")

    return {
      success: true,
      message: "Your message has been sent successfully!",
    }
  } catch (error) {
    console.error("Error in contact form submission:", error)
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    }
  }
}
