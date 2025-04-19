"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface TextScrambleProps {
  text: string
  className?: string
  speed?: number
  scrambleSpeed?: number
  delay?: number
}

export const TextScramble = ({ text, className, speed = 0.3, scrambleSpeed = 20, delay = 0 }: TextScrambleProps) => {
  const [displayText, setDisplayText] = useState("")
  const [isScrambling, setIsScrambling] = useState(false)
  const chars = "!<>-_\\/[]{}—=+*^?#________"
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      setIsScrambling(true)
    }, delay * 1000)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [delay, text])

  useEffect(() => {
    if (!isScrambling) return

    let iteration = 0
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index]
            }
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join(""),
      )

      if (iteration >= text.length) {
        clearInterval(interval)
      }

      iteration += 1 / speed
    }, scrambleSpeed)

    return () => clearInterval(interval)
  }, [isScrambling, text, speed, scrambleSpeed])

  return <span className={cn("text-scramble", className)}>{displayText}</span>
}
