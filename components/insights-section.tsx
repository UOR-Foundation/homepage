import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface InsightItemProps {
  icon: React.ReactNode
  title: string
  description: string
  url: string
}

export function InsightsSection() {
  return (
    <div className="mt-10">
      <h3 className="text-xl font-bold mb-4">Insights</h3>
      <div className="grid gap-4">
        <InsightItem
          icon={
            <div className="flex items-center justify-center h-5 w-5">
              <Image src="/images/redhat-icon.png" alt="Red Hat" width={20} height={20} className="h-5 w-5" />
            </div>
          }
          title="The UOR Framework"
          description="Genesis Universal Object Reference (UOR) article from the Red Hat Emerging Technologies."
          url="https://next.redhat.com/2022/07/13/the-uor-framework/"
        />
        <InsightItem
          icon={
            <div className="flex items-center justify-center h-5 w-5">
              <Image src="/images/spotify-icon.png" alt="Spotify" width={20} height={20} className="h-5 w-5" />
            </div>
          }
          title="UOR Foundation Podcast"
          description="EP1: Inside PrimeOS - the universal operating system built on primes."
          url="https://open.spotify.com/episode/2Dhh8nl1DhkKV4RVZnPQOB?si=ECnmsaEaR76pKiAsfJYrSA&nd=1&dlsi=2a72e4e7229d4e7e"
        />
        <InsightItem
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

function InsightItem({ icon, title, description, url }: InsightItemProps) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noreferrer"
      className="rounded-lg bg-background p-4 shadow-sm transition-all duration-200 hover:shadow-md flex flex-col"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 mt-1">{icon}</div>
        <div className="flex-1">
          <h4 className="font-medium">{title}</h4>
          <p className="text-sm text-muted-foreground mb-2">{description}</p>
        </div>
      </div>
      <div className="mt-2 ml-9">
        <span className="text-sm text-[#5E5CFF] font-medium flex items-center gap-1 hover:gap-2 transition-all duration-200">
          Learn more
          <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  )
}
