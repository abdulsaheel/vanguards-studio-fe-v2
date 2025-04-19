"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { MagneticButton } from "./magnetic-button"

interface NeoBrutalistButtonProps {
  children: React.ReactNode
  className?: string
  color?: "coral" | "blue" | "yellow" | "black" | "white"
  href?: string
  onClick?: () => void
}

export const NeoBrutalistButton = ({
  children,
  className,
  color = "coral",
  href,
  onClick,
}: NeoBrutalistButtonProps) => {
  const colorClasses = {
    coral: "bg-[hsl(var(--neon-coral))] text-white",
    blue: "bg-[hsl(var(--neon-blue))] text-white",
    yellow: "bg-[hsl(var(--neon-yellow))] text-black",
    black: "bg-black text-white",
    white: "bg-white text-black",
  }

  return (
    <MagneticButton
      className={cn(
        "neo-brutalist px-8 py-4 rounded-lg font-oswald uppercase tracking-wider text-lg",
        colorClasses[color],
        className,
      )}
      href={href}
      onClick={onClick}
      strength={15}
    >
      {children}
    </MagneticButton>
  )
}
