"use client"
import { SectionHeading, BentoCard, NeoBrutalButton } from "@/components/ui-elements"
import { ArrowRight } from "lucide-react"
import { useMousePosition } from "@/components/mouse-position-provider"
import { useEffect, useRef, useState } from "react"
import { useScroll, useTransform } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function WorkPage() {
  const { setIsHovering } = useMousePosition()
  const [scrollProgress, setScrollProgress] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const fullHeight = document.body.scrollHeight - windowHeight
      const progress = scrollPosition / fullHeight
      setScrollProgress(progress * 100)

      // Add class to elements when they enter viewport
      const reveals = document.querySelectorAll(".reveal-on-scroll")
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight
        const elementTop = element.getBoundingClientRect().top
        if (elementTop < windowHeight - 100) {
          element.classList.add("revealed")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  const projects = [
    {
      title: "Luxury Fashion E-commerce",
      description: "A premium shopping experience for a high-end fashion brand.",
      image: "/placeholder.svg?height=600&width=600&text=Fashion",
      category: "E-commerce",
      link: "/work/luxury-fashion",
    },
    {
      title: "Tech Startup Rebrand",
      description: "Complete brand overhaul for an emerging tech company.",
      image: "/placeholder.svg?height=600&width=600&text=Tech",
      category: "Branding",
      link: "/work/tech-startup",
    },
    {
      title: "Financial App UI/UX",
      description: "Intuitive interface design for a personal finance application.",
      image: "/placeholder.svg?height=600&width=600&text=Finance",
      category: "UI/UX Design",
      link: "/work/finance-app",
    },
    {
      title: "Hospitality Website",
      description: "Immersive web experience for a luxury hotel chain.",
      image: "/placeholder.svg?height=600&width=1200&text=Hospitality",
      category: "Web Development",
      link: "/work/hospitality",
    },
    {
      title: "Wellness Brand Identity",
      description: "Holistic brand identity for a premium wellness company.",
      image: "/placeholder.svg?height=600&width=600&text=Wellness",
      category: "Branding",
      link: "/work/wellness-brand",
    },
    {
      title: "E-learning Platform",
      description: "Comprehensive learning management system with interactive features.",
      image: "/placeholder.svg?height=600&width=600&text=E-learning",
      category: "Web Development",
      link: "/work/e-learning",
    },
    {
      title: "Sustainable Product Packaging",
      description: "Eco-friendly packaging design for a sustainable brand.",
      image: "/placeholder.svg?height=600&width=600&text=Packaging",
      category: "Packaging Design",
      link: "/work/sustainable-packaging",
    },
    {
      title: "Real Estate Mobile App",
      description: "Feature-rich mobile application for property search and management.",
      image: "/placeholder.svg?height=600&width=600&text=Real Estate",
      category: "Mobile App",
      link: "/work/real-estate-app",
    },
    {
      title: "Art Gallery Website",
      description: "Elegant digital showcase for a contemporary art gallery.",
      image: "/placeholder.svg?height=600&width=600&text=Art Gallery",
      category: "Web Development",
      link: "/work/art-gallery",
    },
  ]

  return (
    <>
      <div className="scroll-indicator" style={{ width: `${scrollProgress}%` }}></div>
      <Navbar />    

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 hero-gradient">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-bebas text-5xl md:text-7xl tracking-wide mb-6">Our Work</h1>
            <p className="text-lg md:text-xl text-charcoal/80 mb-8">
              Explore our portfolio of award-winning projects that showcase our expertise and creativity across various
              industries.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-6 py-2 bg-white font-medium border-2 border-black hover:bg-neon-coral hover:text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
              Web Development
            </button>
            <button className="px-6 py-2 bg-white font-medium border-2 border-black hover:bg-neon-coral hover:text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
              Branding
            </button>
            <button className="px-6 py-2 bg-white font-medium border-2 border-black hover:bg-neon-coral hover:text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
              UI/UX Design
            </button>
            <button className="px-6 py-2 bg-white font-medium border-2 border-black hover:bg-neon-coral hover:text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
              Mobile App
            </button>
            <button className="px-6 py-2 bg-white font-medium border-2 border-black hover:bg-neon-coral hover:text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
              E-commerce
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <BentoCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
                aspectRatio="square"
              >
                <span className="inline-block px-3 py-1 bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-sm mb-2">
                  {project.category}
                </span>
              </BentoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-soft-mint border-y-4 border-black">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Our Process"
            subtitle="We follow a structured yet flexible approach to ensure every project is delivered to the highest standards."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {[
              {
                number: "01",
                title: "Discovery",
                description:
                  "We start by understanding your business, goals, and target audience to establish a solid foundation.",
              },
              {
                number: "02",
                title: "Strategy",
                description:
                  "Based on our findings, we develop a comprehensive strategy tailored to your specific needs.",
              },
              {
                number: "03",
                title: "Design & Development",
                description:
                  "Our team brings the strategy to life through creative design and technical implementation.",
              },
              {
                number: "04",
                title: "Launch & Support",
                description:
                  "We ensure a smooth launch and provide ongoing support to help you achieve long-term success.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all"
              >
                <div className="font-bebas text-6xl text-neon-coral mb-4 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">{step.number}</div>
                <h3 className="font-oswald text-2xl mb-3 font-bold">{step.title}</h3>
                <p className="text-charcoal">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-charcoal text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-bebas text-4xl md:text-6xl tracking-wide mb-6">Ready to Start Your Project?</h2>
            <p className="text-white/70 text-lg md:text-xl mb-10">
              Let's create something extraordinary together. Get in touch with our team to discuss your project.
            </p>
            <NeoBrutalButton href="/contact" variant="coral" size="lg">
              Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
            </NeoBrutalButton>
          </div>
        </div>
      </section>
    <Footer/>
    </>
  )
}
