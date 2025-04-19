"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface MousePosition {
  x: number
  y: number
}

interface MousePositionContextType {
  mousePosition: MousePosition
  isHovering: boolean
  isClicking: boolean
  setIsHovering: (isHovering: boolean) => void
}

const MousePositionContext = createContext<MousePositionContextType>({
  mousePosition: { x: 0, y: 0 },
  isHovering: false,
  isClicking: false,
  setIsHovering: () => {},
})

export const useMousePosition = () => useContext(MousePositionContext)

export const MousePositionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseDown = () => {
      setIsClicking(true)
    }

    const handleMouseUp = () => {
      setIsClicking(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [])

  return (
    <MousePositionContext.Provider value={{ mousePosition, isHovering, isClicking, setIsHovering }}>
      {children}
    </MousePositionContext.Provider>
  )
}
