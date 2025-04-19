"use client"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface SplitTextProps {
  children: string
  className?: string
  delay?: number
  staggerDelay?: number
  threshold?: number
}

export const SplitText = ({ children, className, delay = 0, staggerDelay = 0.05, threshold = 0.2 }: SplitTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true)
            }, delay * 1000)
            observer.disconnect()
          }
        })
      },
      { threshold },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [delay, threshold])

  const words = children.split(" ")

  return (
    <div ref={containerRef} className={cn("split-text-container", className)}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-[0.25em]">
          <span
            className={cn("split-text", isVisible && "split-text-visible")}
            style={{ transitionDelay: `${delay + wordIndex * staggerDelay}s` }}
          >
            {word}
          </span>
        </span>
      ))}
    </div>
  )
}
