"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { useMousePosition } from "./mouse-position-provider"
import { cn } from "@/lib/utils"

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  strength?: number
  onClick?: () => void
  href?: string
}

export const MagneticButton = ({ children, className, strength = 30, onClick, href }: MagneticButtonProps) => {
  const buttonRef = useRef<HTMLDivElement>(null)
  const { mousePosition, setIsHovering } = useMousePosition()
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!buttonRef.current || !isHovered) return

    const button = buttonRef.current
    const rect = button.getBoundingClientRect()
    const buttonCenterX = rect.left + rect.width / 2
    const buttonCenterY = rect.top + rect.height / 2

    const distanceX = mousePosition.x - buttonCenterX
    const distanceY = mousePosition.y - buttonCenterY

    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
    const maxDistance = Math.max(rect.width, rect.height) / 2

    if (distance < maxDistance + 50) {
      const x = (distanceX / maxDistance) * strength
      const y = (distanceY / maxDistance) * strength
      setPosition({ x, y })
    } else {
      setPosition({ x: 0, y: 0 })
    }
  }, [mousePosition, isHovered, strength])

  const handleMouseEnter = () => {
    setIsHovered(true)
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setPosition({ x: 0, y: 0 })
    setIsHovering(false)
  }

  const buttonStyle = {
    transform: isHovered ? `translate(${position.x / 2}px, ${position.y / 2}px)` : "translate(0, 0)",
  }

  const contentStyle = {
    transform: isHovered ? `translate(${position.x}px, ${position.y}px)` : "translate(0, 0)",
  }

  const ButtonComponent = (
    <div
      ref={buttonRef}
      className={cn("magnetic-button", className)}
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <div className="magnetic-button-content" style={contentStyle}>
        {children}
      </div>
    </div>
  )

  if (href) {
    return (
      <a href={href} className="inline-block">
        {ButtonComponent}
      </a>
    )
  }

  return ButtonComponent
}
