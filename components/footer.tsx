"use client"

import Link from "next/link"
import { useMousePosition } from "@/components/mouse-position-provider"

const navigationItems = ["Home", "Work", "Services", "About", "Contact"]
const serviceItems = [
  "Web Design & Development",
  "Brand Identity",
  "UX/UI Design",
  "Mobile Applications",
  "E-commerce Solutions",
]
const socialLinks = ["twitter", "instagram", "linkedin", "dribbble"]

export function Footer() {
  const { setIsHovering } = useMousePosition()

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  return (
    <footer className="py-16 bg-charcoal text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link
              href="/"
              className="font-bebas text-4xl tracking-wider mb-6 inline-block"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              VANGUARDS
            </Link>
            <p className="text-white/70 mb-6">
              Pioneering the future of digital design with sophisticated aesthetics and exceptional functionality.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social}
                  href={`https://${social}.com`}
                  className="text-white/70 hover:text-[hsl(var(--neon-coral))] transition-colors"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  aria-label={social}
                >
                  <div className="w-8 h-8 flex items-center justify-center border border-white/30 rounded-full">
                    <span className="sr-only">{social}</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-oswald text-lg uppercase mb-6">Navigation</h4>
            <ul className="space-y-4">
              {navigationItems.map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-white/70 hover:text-[hsl(var(--neon-coral))] transition-colors"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-oswald text-lg uppercase mb-6">Services</h4>
            <ul className="space-y-4">
              {serviceItems.map((item) => (
                <li key={item}>
                  <Link
                    href={`/services#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-white/70 hover:text-[hsl(var(--neon-coral))] transition-colors"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-oswald text-lg uppercase mb-6">Contact</h4>
            <address className="not-italic text-white/70 mb-6">
              123 Design Avenue
              <br />
              San Francisco, CA 94103
              <br />
              United States
            </address>
            <p className="mb-2">
              <Link
                href="mailto:hello@vanguardsstudio.com"
                className="text-white/70 hover:text-[hsl(var(--neon-coral))] transition-colors"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                hello@vanguardsstudio.com
              </Link>
            </p>
            <p>
              <Link
                href="tel:+1234567890"
                className="text-white/70 hover:text-[hsl(var(--neon-coral))] transition-colors"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                +1 (234) 567-890
              </Link>
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Vanguards Studio. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-white/50">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-white transition-colors"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}