"use client"

import type React from "react"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export function PrivacyPolicyDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto p-6 md:p-8 rounded-xl border-none">
        <div className="flex items-center justify-between mb-6">
          <DialogTitle className="text-2xl font-semibold tracking-tight">Your Privacy at UOR Foundation</DialogTitle>
        </div>
        <p className="text-muted-foreground mb-8">Last revised: 22 May 2025</p>

        <div className="space-y-8">
          <p>
            The UOR Foundation ("we," "us," or "our") is a nonprofit organisation based in Denver, Colorado, USA. This
            notice explains how we collect, use, share, and protect personal information when you interact with any of
            our online spaces—including uor.foundation (and its sub‑domains), our GitHub repositories, Discord server,
            newsletters, and public events.
          </p>

          <div className="bg-[#5E5CFF]/5 p-6 rounded-lg border border-[#5E5CFF]/10">
            <h3 className="text-xl font-semibold tracking-tight text-[#5E5CFF] mb-4">Scope</h3>
            <div className="space-y-4 text-slate-600">
              <p className="text-base tracking-tight">
                This policy covers any visit, sign‑up, contribution, or communication with the Foundation through our
                websites or community platforms. By using these services you acknowledge the practices described below.
              </p>
            </div>
          </div>

          <div className="bg-[#5E5CFF]/5 p-6 rounded-lg border border-[#5E5CFF]/10">
            <h3 className="text-xl font-semibold tracking-tight text-[#5E5CFF] mb-4">Information We Gather</h3>
            <div className="space-y-4 text-slate-600">
              <p className="text-base tracking-tight">We gather information in three broad categories:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li className="text-base tracking-tight">
                  <strong>Information you give us</strong> – your name, email address, organisation, country, or any
                  other details you volunteer via forms, pull‑requests, event registrations, or direct messages.
                </li>
                <li className="text-base tracking-tight">
                  <strong>Community footprint</strong> – Discord or GitHub usernames, profile avatars, public messages,
                  issues, pull‑request metadata, and other artefacts you create while collaborating.
                </li>
                <li className="text-base tracking-tight">
                  <strong>Technical signals</strong> – IP address, browser type, device identifiers, pages viewed,
                  referring URLs, and similar data collected automatically through cookies or analytics scripts.
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[#5E5CFF]/5 p-6 rounded-lg border border-[#5E5CFF]/10">
            <h3 className="text-xl font-semibold tracking-tight text-[#5E5CFF] mb-4">Why We Use It</h3>
            <div className="space-y-4 text-slate-600">
              <p className="text-base tracking-tight">We use personal data solely to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li className="text-base tracking-tight">
                  deliver newsletters, updates, and event notices you have asked for;
                </li>
                <li className="text-base tracking-tight">operate and secure our community spaces;</li>
                <li className="text-base tracking-tight">recognise and coordinate contributors;</li>
                <li className="text-base tracking-tight">
                  analyse aggregate traffic so we can improve our documentation and outreach; and
                </li>
                <li className="text-base tracking-tight">comply with applicable laws.</li>
              </ul>
              <p className="text-base tracking-tight">We do not sell or rent your personal data.</p>
            </div>
          </div>

          <div className="bg-[#5E5CFF]/5 p-6 rounded-lg border border-[#5E5CFF]/10">
            <h3 className="text-xl font-semibold tracking-tight text-[#5E5CFF] mb-4">Email Preferences</h3>
            <div className="space-y-4 text-slate-600">
              <p className="text-base tracking-tight">
                Every bulk email from us includes an unsubscribe link. You may also email{" "}
                <a href="mailto:privacy@uor.foundation" className="text-[#5E5CFF] hover:underline">
                  privacy@uor.foundation
                </a>{" "}
                at any time to be removed from all mailing lists.
              </p>
            </div>
          </div>

          <div className="bg-[#5E5CFF]/5 p-6 rounded-lg border border-[#5E5CFF]/10">
            <h3 className="text-xl font-semibold tracking-tight text-[#5E5CFF] mb-4">Cookies & Analytics</h3>
            <div className="space-y-4 text-slate-600">
              <p className="text-base tracking-tight">
                We favour lightweight, privacy‑respecting tools such as Vercel Analytics and Plausible. Where we use
                Google Analytics, IP addresses are truncated and retention periods shortened. You are free to disable
                cookies in your browser without losing access to our content.
              </p>
            </div>
          </div>

          <div className="bg-[#5E5CFF]/5 p-6 rounded-lg border border-[#5E5CFF]/10">
            <h3 className="text-xl font-semibold tracking-tight text-[#5E5CFF] mb-4">Sharing Information</h3>
            <div className="space-y-4 text-slate-600">
              <p className="text-base tracking-tight">We share data only with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li className="text-base tracking-tight">
                  Service providers that host our code, site, chat, or mailing infrastructure under contractual
                  confidentiality;
                </li>
                <li className="text-base tracking-tight">Public authorities if legally compelled; and</li>
                <li className="text-base tracking-tight">
                  Trusted volunteers or contractors who sign non‑disclosure agreements and see data strictly on a
                  need‑to‑know basis.
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[#5E5CFF]/5 p-6 rounded-lg border border-[#5E5CFF]/10">
            <h3 className="text-xl font-semibold tracking-tight text-[#5E5CFF] mb-4">Safeguarding Data</h3>
            <div className="space-y-4 text-slate-600">
              <p className="text-base tracking-tight">
                We apply reasonable administrative, technical, and physical safeguards—such as access restrictions,
                HTTPS, and encryption in transit—to protect information. No method is perfect, but we review our
                practices regularly.
              </p>
            </div>
          </div>

          <div className="bg-[#5E5CFF]/5 p-6 rounded-lg border border-[#5E5CFF]/10">
            <h3 className="text-xl font-semibold tracking-tight text-[#5E5CFF] mb-4">Global Transfers</h3>
            <div className="space-y-4 text-slate-600">
              <p className="text-base tracking-tight">
                Because our contributors are worldwide, your data may be processed outside your country. For transfers
                of EU or UK personal data we rely on Standard Contractual Clauses or your explicit consent.
              </p>
            </div>
          </div>

          <div className="bg-[#5E5CFF]/5 p-6 rounded-lg border border-[#5E5CFF]/10">
            <h3 className="text-xl font-semibold tracking-tight text-[#5E5CFF] mb-4">Your Rights</h3>
            <div className="space-y-4 text-slate-600">
              <p className="text-base tracking-tight">Depending on where you live you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li className="text-base tracking-tight">obtain a copy of your personal data;</li>
                <li className="text-base tracking-tight">request correction or deletion;</li>
                <li className="text-base tracking-tight">object to certain processing; or</li>
                <li className="text-base tracking-tight">withdraw consent.</li>
              </ul>
              <p className="text-base tracking-tight">
                Write to{" "}
                <a href="mailto:privacy@uor.foundation" className="text-[#5E5CFF] hover:underline">
                  privacy@uor.foundation
                </a>{" "}
                and we will respond within 30 days.
              </p>
            </div>
          </div>

          <div className="bg-[#5E5CFF]/5 p-6 rounded-lg border border-[#5E5CFF]/10">
            <h3 className="text-xl font-semibold tracking-tight text-[#5E5CFF] mb-4">Data Retention</h3>
            <div className="space-y-4 text-slate-600">
              <p className="text-base tracking-tight">
                We retain personal data only as long as necessary for the purposes above or to meet legal obligations.
                Anonymised aggregate statistics may be kept indefinitely.
              </p>
            </div>
          </div>

          <div className="bg-[#5E5CFF]/5 p-6 rounded-lg border border-[#5E5CFF]/10">
            <h3 className="text-xl font-semibold tracking-tight text-[#5E5CFF] mb-4">Children</h3>
            <div className="space-y-4 text-slate-600">
              <p className="text-base tracking-tight">
                Our services are not directed at children under 13, and we do not knowingly collect data from them. If
                you believe a child has provided personal data, please contact us so we can remove it.
              </p>
            </div>
          </div>

          <div className="bg-[#5E5CFF]/5 p-6 rounded-lg border border-[#5E5CFF]/10">
            <h3 className="text-xl font-semibold tracking-tight text-[#5E5CFF] mb-4">Updates to This Notice</h3>
            <div className="space-y-4 text-slate-600">
              <p className="text-base tracking-tight">
                We may revise this notice from time to time. Significant changes will be announced on our website or via
                email. The Last revised date at the top reflects the current version.
              </p>
            </div>
          </div>

          <div className="bg-[#5E5CFF]/5 p-6 rounded-lg border border-[#5E5CFF]/10">
            <h3 className="text-xl font-semibold tracking-tight text-[#5E5CFF] mb-4">Contact Us</h3>
            <div className="space-y-4 text-slate-600">
              <p className="text-base tracking-tight">
                Questions or concerns? Email{" "}
                <a href="mailto:privacy@uor.foundation" className="text-[#5E5CFF] hover:underline">
                  privacy@uor.foundation
                </a>{" "}
                or write to:
              </p>
              <p className="text-base tracking-tight">
                UOR Foundation
                <br />
                Denver, CO 80202
                <br />
                United States
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
