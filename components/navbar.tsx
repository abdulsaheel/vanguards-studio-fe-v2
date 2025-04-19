"use client"

import Link from "next/link"
import { useMousePosition } from "@/components/mouse-position-provider"

const navItems = ["WORK", "SERVICES", "ABOUT", "CONTACT"]

export function Navbar() {
  const { setIsHovering } = useMousePosition()

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference py-6 px-8">
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className="font-bebas text-white text-3xl tracking-wider"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          VANGUARDS
        </Link>
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="menu-item text-white font-oswald tracking-wider"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <button
            className="text-white"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            aria-label="Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}