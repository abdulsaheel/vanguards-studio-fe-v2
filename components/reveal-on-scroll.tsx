"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface RevealOnScrollProps {
  children: React.ReactNode
  className?: string
  threshold?: number
  delay?: number
}

export const RevealOnScroll = ({ children, className, threshold = 0.2, delay = 0 }: RevealOnScrollProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isRevealed, setIsRevealed] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsRevealed(true)
            }, delay * 1000)
            observer.disconnect()
          }
        })
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [threshold, delay])

  return (
    <div ref={ref} className={cn("reveal-on-scroll", isRevealed && "revealed", className)}>
      {children}
    </div>
  )
}
