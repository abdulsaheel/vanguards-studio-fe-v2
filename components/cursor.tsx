// components/cursor.tsx
"use client"
import { useMousePosition } from "./mouse-position-provider"
import { useEffect, useState, useRef } from "react"

export const Cursor = () => {
  const { mousePosition, isHovering, isClicking } = useMousePosition()
  const [isMounted, setIsMounted] = useState(false)
  
  // Ref for the outer cursor container
  const cursorRef = useRef<HTMLDivElement>(null)
  
  // Animation frame reference
  const animationRef = useRef<number | null>(null)
  
  // Smoothed position state
  const smoothedPosition = useRef({ x: 0, y: 0 })
  
  useEffect(() => {
    setIsMounted(true)
    
    const handleMouseEnter = () => {
      document.documentElement.classList.remove("hide-cursor")
    }
    
    const handleMouseLeave = () => {
      document.documentElement.classList.add("hide-cursor")
    }
    
    // Animation function for smooth movement
    const animateCursor = () => {
      // Calculate smoother positions with lerp (linear interpolation)
      smoothedPosition.current.x += (mousePosition.x - smoothedPosition.current.x) * 0.15
      smoothedPosition.current.y += (mousePosition.y - smoothedPosition.current.y) * 0.15
      
      // Apply to cursor with transform (better performance than top/left)
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${smoothedPosition.current.x}px, ${smoothedPosition.current.y}px)`
      }
      
      // Continue animation loop
      animationRef.current = requestAnimationFrame(animateCursor)
    }
    
    // Start animation
    animationRef.current = requestAnimationFrame(animateCursor)
    
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)
    
    // Native cursor hiding
    document.body.style.cursor = "none"
    
    return () => {
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.body.style.cursor = ""
      
      // Clean up animation
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mousePosition])
  
  if (!isMounted) return null
  
  return (
    <div
      ref={cursorRef}
      className={`cursor ${isHovering ? "cursor-hover" : ""} ${isClicking ? "cursor-click" : ""}`}
    >
      <div className="cursor-dot"></div>
      <div className="cursor-outline"></div>
    </div>
  )
}
