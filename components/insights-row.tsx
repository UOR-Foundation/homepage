import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function InsightsRow() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold">Insights</h3>
        <Link href="#" className="text-sm text-[#5E5CFF] hover:text-[#4A48FF] flex items-center gap-1">
          View all
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <InsightCard
          icon={
            <div className="flex items-center justify-center h-5 w-5">
              <Image src="/images/redhat-icon.png" alt="Red Hat" width={20} height={20} className="h-5 w-5" />
            </div>
          }
          title="The UOR Framework"
          description="Genesis Universal Object Reference (UOR) article from the Red Hat Emerging Technologies."
          url="https://next.redhat.com/2022/07/13/the-uor-framework/"
        />
        <InsightCard
          icon={
            <div className="flex items-center justify-center h-5 w-5">
              <Image src="/images/spotify-icon.png" alt="Spotify" width={20} height={20} className="h-5 w-5" />
            </div>
          }
          title="UOR Foundation Podcast"
          description="EP1: Inside PrimeOS - the universal operating system built on primes."
          url="https://open.spotify.com/episode/2Dhh8nl1DhkKV4RVZnPQOB?si=ECnmsaEaR76pKiAsfJYrSA&nd=1&dlsi=2a72e4e7229d4e7e"
        />
        <InsightCard
          icon={
            <div className="flex items-center justify-center h-5 w-5">
              <Image src="/images/github-icon.png" alt="GitHub" width={20} height={20} className="h-5 w-5" />
            </div>
          }
          title="UOR Foundation Models"
          description="A comprehensive introduction to the Universal Object Reference (UOR) framework."
          url="https://deepwiki.com/UOR-Foundation/models"
        />
      </div>
    </div>
  )
}

function InsightCard({
  icon,
  title,
  description,
  url,
}: {
  icon: React.ReactNode
  title: string
  description: string
  url: string
}) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col h-full rounded-lg border border-border/60 bg-background p-5 shadow-sm transition-all duration-200 hover:border-[#5E5CFF]/30 hover:shadow-md"
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 rounded-full bg-[#5E5CFF]/10 p-2.5">{icon}</div>
        <div className="flex-1">
          <h4 className="font-medium group-hover:text-[#5E5CFF] transition-colors duration-200">{title}</h4>
          <p className="mt-1 text-sm text-muted-foreground min-h-[48px]">{description}</p>
        </div>
      </div>
      <div className="mt-4 flex items-center">
        <span className="text-sm text-[#5E5CFF] font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
          Learn more
          <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  )
}
