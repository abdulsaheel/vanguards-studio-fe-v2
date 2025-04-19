"use client"

import type React from "react"

import { cn } from "@/lib/utils"

interface MarqueeProps {
  children: React.ReactNode
  className?: string
  direction?: "left" | "right"
  speed?: number
  pauseOnHover?: boolean
}

export const Marquee = ({ children, className, direction = "left", speed = 20, pauseOnHover = true }: MarqueeProps) => {
  const contentStyle = {
    animationDuration: `${speed}s`,
    animationDirection: direction === "left" ? "normal" : "reverse",
  }

  return (
    <div
      className={cn(
        "marquee-container overflow-hidden whitespace-nowrap",
        pauseOnHover && "hover:[&_.marquee-content]:pause",
        className,
      )}
    >
      <div className="marquee-content inline-block" style={contentStyle}>
        {children}
      </div>
      <div className="marquee-content inline-block" style={contentStyle}>
        {children}
      </div>
    </div>
  )
}
