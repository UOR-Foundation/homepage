"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export function WaitlistDialog({ children }: { children: React.ReactNode }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  // Reset the widget container when dialog closes
  useEffect(() => {
    if (!isDialogOpen) {
      const container = document.getElementById("getWaitlistContainer")
      if (container) {
        // Clear the container to allow the widget to reinitialize properly next time
        container.innerHTML = ""
      }
    }
  }, [isDialogOpen])

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-6">
        {/* GetWaitlist Widget */}
        <div id="getWaitlistContainer" data-waitlist_id="28596" data-widget_type="WIDGET_2"></div>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"
        />
        <script src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"></script>
      </DialogContent>
    </Dialog>
  )
}
