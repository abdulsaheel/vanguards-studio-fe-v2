import { NeoBrutalButton } from "@/components/ui-elements"
import { ArrowLeft, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-soft-mint">
      <div className="text-center max-w-3xl mx-auto">
        <div className="relative mb-8">
          <h1 className="font-bebas text-[12rem] md:text-[20rem] leading-none tracking-tighter text-charcoal">404</h1>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-12 bg-neon-coral text-white px-6 py-3 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-oswald text-xl">
            Page Not Found
          </div>
        </div>

        <p className="text-xl md:text-2xl mb-12 text-charcoal/80">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <NeoBrutalButton href="/" variant="coral">
            <Home className="mr-2 h-5 w-5" /> Back to Home
          </NeoBrutalButton>
          <NeoBrutalButton href="/contact" variant="black">
            <ArrowLeft className="mr-2 h-5 w-5" /> Contact Us
          </NeoBrutalButton>
        </div>
      </div>
    </div>
  )
}
