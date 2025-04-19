"use client"

import { cn } from "@/lib/utils"
import { ArrowRight, Star } from "lucide-react"
import Link from "next/link"
import type { ReactNode } from "react"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: "left" | "center" | "right"
  className?: string
}

export function SectionHeading({ title, subtitle, align = "left", className }: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        {
          "text-left": align === "left",
          "text-center": align === "center",
          "text-right": align === "right",
        },
        className,
      )}
    >
      <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl tracking-wide mb-4">{title}</h2>
      {subtitle && <p className="text-lg md:text-xl text-charcoal/70 max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  )
}

interface BentoCardProps {
  title: string
  description?: string
  image?: string
  link?: string
  className?: string
  children?: ReactNode
  aspectRatio?: "square" | "video" | "portrait" | "auto"
  size?: "small" | "medium" | "large"
}

export function BentoCard({
  title,
  description,
  image,
  link,
  className,
  children,
  aspectRatio = "square",
  size = "medium",
}: BentoCardProps) {
  const content = (
    <div
      className={cn(
        "bento-item group bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden transition-all duration-300 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]",
        {
          "aspect-square": aspectRatio === "square",
          "aspect-video": aspectRatio === "video",
          "aspect-[3/4]": aspectRatio === "portrait",
          "h-full": aspectRatio === "auto",
          "col-span-1 row-span-1": size === "small",
          "col-span-1 md:col-span-2 row-span-1": size === "medium",
          "col-span-1 md:col-span-2 row-span-2": size === "large",
        },
        className,
      )}
    >
      {image && (
        <div
          className={cn("w-full h-full bg-cover bg-center border-b-2 border-black", children ? "h-1/2" : "h-full")}
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      <div
        className={cn(
          "p-6",
          image && !children ? "absolute inset-0 bg-black/30 flex flex-col justify-end" : "",
          image && children ? "h-1/2" : !image ? "h-full" : "",
        )}
      >
        <h3 className={cn("text-xl md:text-2xl mb-2 uppercase", image && !children ? "text-white" : "text-black")}>
          {title}
        </h3>
        {description && (
          <p className={cn("mb-4", image && !children ? "text-white/80" : "text-black/70")}>{description}</p>
        )}
        {children}
        {link && (
          <div className="mt-auto pt-4">
            <Link
              href={link}
              className={cn(
                "inline-flex items-center font-bold uppercase",
                image && !children ? "text-white hover:text-neon-coral" : "text-neon-coral hover:text-neon-coral/80",
              )}
            >
            </Link>
          </div>
        )}
      </div>
    </div>
  )

  if (link) {
    return <Link href={link}>{content}</Link>
  }

  return content
}

interface TestimonialProps {
  quote: string
  author: string
  role?: string
  company?: string
  rating?: number
}

export function Testimonial({ quote, author, role, company, rating = 5 }: TestimonialProps) {
  return (
    <div className="bg-white p-8 rounded-xl border border-black/5 shadow-sm">
      {rating > 0 && (
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={cn("h-5 w-5", i < rating ? "text-neon-coral fill-neon-coral" : "text-gray-300")} />
          ))}
        </div>
      )}
      <blockquote className="font-playfair text-lg italic mb-6 text-charcoal">"{quote}"</blockquote>
      <div>
        <div className="font-oswald text-base">{author}</div>
        {(role || company) && (
          <div className="text-sm text-charcoal/70">
            {role}
            {role && company && " · "}
            {company}
          </div>
        )}
      </div>
    </div>
  )
}

interface StatsCardProps {
  value: string
  label: string
  icon?: ReactNode
}

export function StatsCard({ value, label, icon }: StatsCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl border border-black/5 flex items-center">
      {icon && <div className="mr-4 text-neon-coral">{icon}</div>}
      <div>
        <div className="font-bebas text-3xl md:text-4xl">{value}</div>
        <div className="text-charcoal/70">{label}</div>
      </div>
    </div>
  )
}

interface NeoBrutalButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: "coral" | "blue" | "black"
  size?: "sm" | "md" | "lg"
  className?: string
}

export function NeoBrutalButton({
  children,
  href,
  onClick,
  variant = "coral",
  size = "md",
  className,
}: NeoBrutalButtonProps) {
  const buttonClasses = cn(
    "inline-flex items-center justify-center font-oswald font-medium uppercase tracking-wide transition-all duration-300 ease-out rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px]",
    {
      "bg-neon-coral text-white": variant === "coral",
      "bg-neon-blue text-white": variant === "blue",
      "bg-charcoal text-white": variant === "black",
      "text-sm px-4 py-2": size === "sm",
      "text-base px-6 py-3": size === "md",
      "text-lg px-8 py-4": size === "lg",
    },
    className,
  )

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  )
}
