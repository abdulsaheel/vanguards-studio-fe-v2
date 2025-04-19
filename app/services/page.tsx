"use client"

import { SectionHeading, NeoBrutalButton } from "@/components/ui-elements"
import { ArrowRight, CheckCircle, Code, Lightbulb, Sparkles, Users } from "lucide-react"
import { useMousePosition } from "@/components/mouse-position-provider"
import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ServicesPage() {

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

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }
  const services = [
    {
      id: "web-design-development",
      title: "Web Design & Development",
      description: "Creating stunning, responsive websites that captivate and convert.",
      icon: <Code className="h-10 w-10" />,
      image: "/placeholder.svg?height=600&width=600&text=Web Design",
      features: [
        "Custom website design and development",
        "Responsive and mobile-friendly websites",
        "E-commerce solutions",
        "Content management systems",
        "Website maintenance and support",
        "Performance optimization",
      ],
    },
    {
      id: "brand-identity",
      title: "Brand Identity",
      description: "Crafting memorable brand experiences that resonate with your audience.",
      icon: <Sparkles className="h-10 w-10" />,
      image: "/placeholder.svg?height=600&width=600&text=Brand Identity",
      features: [
        "Logo design and visual identity",
        "Brand strategy and positioning",
        "Brand guidelines and style guides",
        "Brand messaging and voice",
        "Brand collateral design",
        "Rebranding and brand refreshes",
      ],
    },
    {
      id: "ux-ui-design",
      title: "UX/UI Design",
      description: "Designing intuitive interfaces that delight users and drive engagement.",
      icon: <Users className="h-10 w-10" />,
      image: "/placeholder.svg?height=600&width=600&text=UX/UI Design",
      features: [
        "User research and persona development",
        "Information architecture",
        "Wireframing and prototyping",
        "Visual design and UI systems",
        "Usability testing",
        "Interaction design",
      ],
    },
    {
      id: "mobile-applications",
      title: "Mobile Applications",
      description: "Building native and cross-platform apps that perform flawlessly.",
      icon: <Lightbulb className="h-10 w-10" />,
      image: "/placeholder.svg?height=600&width=600&text=Mobile Apps",
      features: [
        "iOS and Android app development",
        "Cross-platform app development",
        "App UI/UX design",
        "App strategy and planning",
        "App testing and quality assurance",
        "App maintenance and updates",
      ],
    },
  ]

  return (
    <>

          {/* Scroll Progress Indicator */}
      <div className="scroll-indicator" style={{ width: `${scrollProgress}%` }}></div>

      {/* SVG Filters */}
      <svg className="absolute w-0 h-0">
        <filter id="distortion-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" />
        </filter>
        <filter id="turbulence">
          <feTurbulence type="turbulence" baseFrequency="0.01" numOctaves="3" result="turbulence" />
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="10" />
        </filter>
        <filter id="turbulence-intense">
          <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="5" result="turbulence" />
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="30" />
        </filter>
      </svg>

      {/* Navigation */}
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 hero-gradient">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-bebas text-5xl md:text-7xl tracking-wide mb-6">Our Services</h1>
            <p className="text-lg md:text-xl text-charcoal/80 mb-8">
              We offer a comprehensive range of design and development services to help you achieve your digital goals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="What We Offer"
            subtitle="We specialize in bringing visionary ideas to life with a perfect blend of sophisticated design and exceptional functionality."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <div className="text-neon-coral mb-4">{service.icon}</div>
                <h3 className="font-oswald text-xl mb-3">{service.title}</h3>
                <p className="text-charcoal/70 mb-4">{service.description}</p>
                <a
                  href={`#${service.id}`}
                  className="inline-flex items-center text-neon-coral hover:text-neon-coral/80 font-medium"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {services.map((service, index) => (
        <section
          key={index}
          id={service.id}
          className={`py-20 md:py-32 ${index % 2 === 0 ? "bg-soft-mint" : "bg-pale-coral"}`}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={index % 2 === 1 ? "order-2 lg:order-1" : ""}>
                <SectionHeading title={service.title} subtitle={service.description} />

                <div className="space-y-4 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex gap-3">
                      <CheckCircle className="h-6 w-6 text-neon-coral flex-shrink-0" />
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>

                <NeoBrutalButton href="/contact" variant="coral">
                  Discuss Your Project <ArrowRight className="ml-2 h-5 w-5" />
                </NeoBrutalButton>
              </div>
              <div className={index % 2 === 1 ? "order-1 lg:order-2" : ""}>
<div className="aspect-square relative rounded-xl overflow-hidden border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
  <Image
    src={service.image || "/placeholder.svg"}
    alt={service.title}
    fill
    className="object-cover"
  />
</div>

              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Our Process"
            subtitle="We follow a structured yet flexible approach to ensure every project is delivered to the highest standards."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
                className="bg-white p-8 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <div className="font-bebas text-5xl text-neon-coral mb-4">{step.number}</div>
                <h3 className="font-oswald text-xl mb-3">{step.title}</h3>
                <p className="text-charcoal/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-soft-mint">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our services and process."
            align="center"
          />

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary depending on scope and complexity. A simple website might take 4-6 weeks, while a comprehensive brand identity or complex web application could take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
              },
              {
                question: "What is your pricing structure?",
                answer:
                  "We offer customized pricing based on your specific needs and project requirements. We believe in transparent pricing and will provide a detailed proposal outlining all costs before beginning any work.",
              },
              {
                question: "Do you offer ongoing support after launch?",
                answer:
                  "Yes, we offer various support and maintenance packages to ensure your digital products continue to perform optimally after launch. Our team is always available to address any issues or implement updates as needed.",
              },
              {
                question: "How do you handle revisions during the design process?",
                answer:
                  "Our process includes dedicated revision rounds at key stages. We believe in collaborative design and welcome your feedback to ensure the final product meets your expectations and business goals.",
              },
              {
                question: "Do you work with clients internationally?",
                answer:
                  "We work with clients around the world. Our digital workflow and communication tools allow us to collaborate effectively regardless of location or time zone differences.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="mb-6 bg-white p-6 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <h3 className="font-oswald text-xl mb-3">{faq.question}</h3>
                <p className="text-charcoal/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-charcoal text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-bebas text-4xl md:text-6xl tracking-wide mb-6">
              Ready to Elevate Your Digital Presence?
            </h2>
            <p className="text-white/70 text-lg md:text-xl mb-10">
              Let's create something extraordinary together. Get in touch with our team to discuss your project.
            </p>
            <NeoBrutalButton href="/contact" variant="coral" size="lg">
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </NeoBrutalButton>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}
