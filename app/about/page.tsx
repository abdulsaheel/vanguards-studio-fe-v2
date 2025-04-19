"use client"

import Image from "next/image"
import Link from "next/link"
import { SectionHeading, NeoBrutalButton } from "@/components/ui-elements"
import { ArrowRight, Award, CheckCircle } from "lucide-react"
import { useMousePosition } from "@/components/mouse-position-provider"
import { useEffect, useRef, useState } from "react"
import { useScroll, useTransform } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function AboutPage() {
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


  return (
    <>
      <div className="scroll-indicator" style={{ width: `${scrollProgress}%` }}></div>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 hero-gradient">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-bebas text-5xl md:text-7xl tracking-wide mb-6">About Vanguards Studio</h1>
            <p className="text-lg md:text-xl text-charcoal/80 mb-8">
              We're a team of visionary designers and developers dedicated to redefining the future of digital
              experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Our Story"
                subtitle="From humble beginnings to industry leaders, our journey has been defined by a relentless pursuit of excellence."
              />
              <p className="text-charcoal/70 mb-6">
                Founded in 2013, Vanguards Studio began as a small team of passionate designers with a shared vision: to
                create digital experiences that transcend the ordinary. What started as a boutique design agency has
                evolved into a full-service digital studio with a global clientele.
              </p>
              <p className="text-charcoal/70 mb-6">
                Our growth has been organic, driven by our commitment to quality and innovation. We've expanded our team
                and capabilities while staying true to our core values: exceptional design, technical excellence, and
                client satisfaction.
              </p>
              <p className="text-charcoal/70 mb-8">
                Today, we're proud to be recognized as industry leaders, pushing the boundaries of what's possible in
                digital design and development. But we're just getting started.
              </p>
              <NeoBrutalButton href="/approach" variant="coral">
                Our Approach <ArrowRight className="ml-2 h-5 w-5" />
              </NeoBrutalButton>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-xl overflow-hidden border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <Image
                  src="/placeholder.svg?height=600&width=600&text=Our Story"
                  alt="Vanguards Studio Team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-neon-blue text-white p-4 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-oswald">
                <Award className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32 bg-soft-mint">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Our Values"
            subtitle="These core principles guide everything we do at Vanguards Studio."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Excellence",
                description:
                  "We pursue excellence in every aspect of our work, from the smallest details to the overall vision.",
              },
              {
                title: "Innovation",
                description:
                  "We constantly push boundaries and explore new possibilities to create groundbreaking digital experiences.",
              },
              {
                title: "Collaboration",
                description: "We believe in the power of collaboration, both within our team and with our clients.",
              },
              {
                title: "Integrity",
                description: "We operate with honesty, transparency, and a commitment to doing what's right.",
              },
              {
                title: "Impact",
                description:
                  "We measure our success by the positive impact our work has on our clients and their audiences.",
              },
              {
                title: "Growth",
                description: "We're dedicated to continuous learning and growth, both as individuals and as a company.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <h3 className="font-oswald text-xl mb-3">{value.title}</h3>
                <p className="text-charcoal/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Meet Our Team"
            subtitle="We're a diverse group of passionate individuals united by our love for exceptional design and innovative technology."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                name: "Alex Morgan",
                role: "Founder & Creative Director",
                image: "/placeholder.svg?height=400&width=400&text=Alex",
              },
              {
                name: "Jamie Chen",
                role: "Lead UX Designer",
                image: "/placeholder.svg?height=400&width=400&text=Jamie",
              },
              {
                name: "Taylor Smith",
                role: "Technical Director",
                image: "/placeholder.svg?height=400&width=400&text=Taylor",
              },
              {
                name: "Jordan Lee",
                role: "Art Director",
                image: "/placeholder.svg?height=400&width=400&text=Jordan",
              },
              {
                name: "Casey Wilson",
                role: "Senior Developer",
                image: "/placeholder.svg?height=400&width=400&text=Casey",
              },
              {
                name: "Riley Brown",
                role: "Project Manager",
                image: "/placeholder.svg?height=400&width=400&text=Riley",
              },
              {
                name: "Quinn Davis",
                role: "UI Designer",
                image: "/placeholder.svg?height=400&width=400&text=Quinn",
              },
              {
                name: "Avery Johnson",
                role: "Marketing Strategist",
                image: "/placeholder.svg?height=400&width=400&text=Avery",
              },
            ].map((member, index) => (
              <div key={index} className="group">
                <div className="aspect-square rounded-xl overflow-hidden border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-4 relative">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-oswald text-xl">{member.name}</h3>
                <p className="text-charcoal/70">{member.role}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/careers"
              className="text-neon-coral hover:text-neon-coral/80 font-medium inline-flex items-center"
            >
              Join Our Team <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-32 bg-pale-coral">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-square rounded-xl overflow-hidden border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative">
                <Image
                  src="/placeholder.svg?height=600&width=600&text=Why Choose Us"
                  alt="Vanguards Studio Workspace"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeading
                title="Why Choose Vanguards Studio"
                subtitle="We bring a unique blend of creativity, technical expertise, and strategic thinking to every project."
              />

              <div className="space-y-6">
                {[
                  {
                    title: "Tailored Solutions",
                    description: "We create custom solutions designed specifically for your unique needs and goals.",
                  },
                  {
                    title: "Collaborative Process",
                    description:
                      "We work closely with you throughout the entire process, ensuring your vision is realized.",
                  },
                  {
                    title: "Technical Excellence",
                    description:
                      "Our team combines cutting-edge technology with exceptional design for optimal results.",
                  },
                  {
                    title: "Proven Results",
                    description:
                      "Our track record speaks for itself, with successful projects across various industries.",
                  },
                ].map((point, index) => (
                  <div key={index} className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-neon-coral flex-shrink-0" />
                    <div>
                      <h3 className="font-oswald text-lg">{point.title}</h3>
                      <p className="text-charcoal/70">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <NeoBrutalButton href="/contact" variant="coral">
                  Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
                </NeoBrutalButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-charcoal text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-bebas text-4xl md:text-6xl tracking-wide mb-6">Ready to Work Together?</h2>
            <p className="text-white/70 text-lg md:text-xl mb-10">
              Let's create something extraordinary. Get in touch with our team to discuss your project.
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
