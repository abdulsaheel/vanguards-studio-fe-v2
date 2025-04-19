import type React from "react"
import type { Metadata } from "next"
import { Inter, Oswald, Bebas_Neue } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { MousePositionProvider } from "@/components/mouse-position-provider"
import { Cursor } from "@/components/cursor"
import { Noise } from "@/components/noise"
import { Suspense } from "react"

// Font configurations
const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" })
const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
})
const bebas = Bebas_Neue({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas",
  weight: "400",
})

export const metadata: Metadata = {
  title: "VANGUARDS STUDIO | PIONEERING THE FUTURE",
  description: "Redefining digital experiences with revolutionary design and exceptional functionality.",
  keywords: [
    "web development",
    "web design",
    "digital marketing",
    "ux design",
    "ui design",
    "seo",
    "ecommerce",
    "graphic design",
    "branding",
    "animation",
    "video production",
    "mobile app development",
    "cloud computing",
    "cybersecurity",
    "blockchain",
    "artificial intelligence",
    "robotics",
    "gaming",
    "social media marketing",
    "content creation",
    "event management",
    "data analytics",
    "project management",
    "e-learning",
    "virtual reality",
    "augmented reality",
    "mixed reality",
    "wearable technology",
    "healthcare",
    "fintech",
    "retail",
    "education",
    "non-profit",
    "startup",
    "tech consulting",
    "tech training",
    "tech events"
  ]

  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${oswald.variable} ${bebas.variable}`}>
      <body className="antialiased overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <MousePositionProvider>
            <Cursor />
            <Noise />
            <Suspense>
              <div className="flex min-h-screen flex-col">{children}</div>
            </Suspense>
            <Analytics />
          </MousePositionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
