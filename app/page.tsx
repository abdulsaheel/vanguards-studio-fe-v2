"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ArrowDown, Star, Sparkles, Zap, Layers, Code, Palette } from "lucide-react"
import { SplitText } from "@/components/split-text"
import { ParallaxSection } from "@/components/parallax-section"
import { TextScramble } from "@/components/text-scramble"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { Marquee } from "@/components/marquee"
import { NeoBrutalistButton } from "@/components/neo-brutalist-button"
import { useMousePosition } from "@/components/mouse-position-provider"
import { Footer } from "@/components/footer"

export default function Home() {
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
            {["WORK", "SERVICES", "ABOUT", "CONTACT"].map((item) => (
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

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-white"
      >
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-50"
            poster="https://i.ibb.co/3yvzVq4M/brutalist-style-minimalistic-poster-background-neo-brutalism-print-with-simple-figures-and-abstract.jpg"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-city-11748-large.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center">
            <div className="overflow-hidden mb-4">
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              >
                <h1 className="font-bebas text-7xl md:text-9xl tracking-tight leading-none mb-4">
                  <span className="block">PIONEERING</span>
                  <span className="block text-gradient-animated">THE FUTURE</span>
                  <span className="block">OF DESIGN</span>
                </h1>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-white/80">
                We don't just create websites—we redefine digital experiences with a perfect blend of sophisticated
                design and exceptional functionality.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <NeoBrutalistButton href="/work" color="coral">
                Explore Our Work
              </NeoBrutalistButton>
              <NeoBrutalistButton href="/contact" color="white">
                Start a Project
              </NeoBrutalistButton>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 w-full flex justify-center text-white scroll-to-explore"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2 opacity-80">Scroll to explore</span>
            <ArrowDown className="h-6 w-6" />
          </div>
        </motion.div>
      </section>

      {/* Marquee Section */}
      <section className="py-6 bg-[hsl(var(--neon-coral))] text-white overflow-hidden">
        <Marquee speed={15}>
          <div className="flex items-center space-x-8 px-4">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <Star className="h-6 w-6 fill-white" />
                  <span className="font-bebas text-3xl tracking-wider whitespace-nowrap">
                    DESIGN • DEVELOPMENT • BRANDING • STRATEGY • UX/UI
                  </span>
                </div>
              ))}
          </div>
        </Marquee>
      </section>

      {/* About Section */}
      <section className="py-32 bg-soft-mint relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <RevealOnScroll>
                <div className="mb-6">
                  <span className="inline-block px-4 py-1 bg-[hsl(var(--neon-coral))] text-white font-oswald rounded-full mb-4">
                    ABOUT US
                  </span>
                  <h2 className="font-bebas text-5xl md:text-7xl tracking-tight leading-none mb-6">
                    <SplitText>VISIONARY DESIGN</SplitText>
                    <SplitText delay={0.1}>EXCEPTIONAL RESULTS</SplitText>
                  </h2>
                  <p className="text-lg md:text-xl text-charcoal/80 mb-8">
                    At Vanguards Studio, we push the boundaries of what's possible, ensuring that every pixel, every
                    interaction, and every line of code speaks to the highest standards of innovation and quality.
                  </p>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={0.2}>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="neo-brutalist bg-white p-6 rounded-lg">
                    <Sparkles className="h-8 w-8 text-[hsl(var(--neon-coral))] mb-4" />
                    <h3 className="font-oswald text-xl mb-2">CREATIVE EXCELLENCE</h3>
                    <p className="text-charcoal/70">Pushing boundaries with innovative design solutions</p>
                  </div>
                  <div className="neo-brutalist bg-white p-6 rounded-lg">
                    <Zap className="h-8 w-8 text-[hsl(var(--neon-coral))] mb-4" />
                    <h3 className="font-oswald text-xl mb-2">TECHNICAL MASTERY</h3>
                    <p className="text-charcoal/70">Flawless execution with cutting-edge technology</p>
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={0.3}>
                <NeoBrutalistButton href="/about" color="black">
                  Learn More About Us
                </NeoBrutalistButton>
              </RevealOnScroll>
            </div>

            <div className="relative">
              <RevealOnScroll className="clip-path-reveal">
                <div className="relative aspect-square neo-brutalist overflow-hidden">
                  <Image
                    src="https://i.ibb.co/0VmWb2mG/70ccc16a-4181-41fc-afa1-c28e7437fca5.png"
                    alt="Vanguards Studio Team"
                    fill
                    className="object-cover image-distortion"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="font-bebas text-white text-4xl">OUR VISION</span>
                  </div>
                </div>
              </RevealOnScroll>
              <div className="absolute -bottom-8 -right-8 neo-brutalist bg-[hsl(var(--neon-blue))] text-white p-6 rounded-lg z-10">
                <div className="font-bebas text-5xl">10+</div>
                <div className="font-oswald">YEARS OF EXCELLENCE</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[hsl(var(--neon-coral))] opacity-10 blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 w-[400px] h-[400px] rounded-full bg-[hsl(var(--neon-blue))] opacity-10 blur-[100px]"></div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-white relative overflow-hidden diagonal-sections">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <RevealOnScroll>
              <span className="inline-block px-4 py-1 bg-black text-white font-oswald rounded-full mb-4">
                OUR SERVICES
              </span>
              <h2 className="font-bebas text-5xl md:text-7xl tracking-tight leading-none mb-6">
                <TextScramble text="WHAT WE DO BEST" />
              </h2>
              <p className="text-lg md:text-xl text-charcoal/80 max-w-3xl mx-auto">
                We specialize in bringing visionary ideas to life with a perfect blend of sophisticated design and
                exceptional functionality.
              </p>
            </RevealOnScroll>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Palette className="h-10 w-10" />,
                title: "WEB DESIGN & DEVELOPMENT",
                description: "Creating stunning, responsive websites that captivate and convert.",
                color: "neon-coral",
              },
              {
                icon: <Layers className="h-10 w-10" />,
                title: "BRAND IDENTITY",
                description: "Crafting memorable brand experiences that resonate with your audience.",
                color: "neon-blue",
              },
              {
                icon: <Code className="h-10 w-10" />,
                title: "UX/UI DESIGN",
                description: "Designing intuitive interfaces that delight users and drive engagement.",
                color: "neon-yellow",
              },
              {
                icon: <Sparkles className="h-10 w-10" />,
                title: "MOBILE APPLICATIONS",
                description: "Building native and cross-platform apps that perform flawlessly.",
                color: "neon-coral",
              },
              {
                icon: <Zap className="h-10 w-10" />,
                title: "E-COMMERCE SOLUTIONS",
                description: "Developing seamless shopping experiences that boost conversions.",
                color: "neon-blue",
              },
              {
                icon: <Star className="h-10 w-10" />,
                title: "DIGITAL STRATEGY",
                description: "Creating comprehensive roadmaps for digital success and growth.",
                color: "neon-yellow",
              },
            ].map((service, index) => (
              <RevealOnScroll key={index} delay={0.1 * index} className="grid-item">
                <div className="neo-brutalist bg-white p-8 rounded-lg h-full hover-3d">
                  <div className="hover-3d-content">
                    <div className="hover-3d-layer">
                      <div className={`text-[hsl(var(--${service.color}))] mb-6`}>{service.icon}</div>
                      <h3 className="font-oswald text-xl mb-4">{service.title}</h3>
                      <p className="text-charcoal/70 mb-6">{service.description}</p>
                      <Link
                        href={`/services#${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                        className="inline-flex items-center text-[hsl(var(--neon-coral))] font-medium"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                  <div className="hover-3d-shadow"></div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="mb-16">
            <RevealOnScroll>
              <span className="inline-block px-4 py-1 bg-[hsl(var(--neon-coral))] text-white font-oswald rounded-full mb-4 neo-brutalist-shadow">
                FEATURED WORK
              </span>
              <h2 className="font-bebas text-5xl md:text-7xl tracking-tight leading-none mb-6 neo-brutalist-text">
                <SplitText>SHOWCASING OUR</SplitText>
                <SplitText delay={0.1}>CREATIVE EXCELLENCE</SplitText>
              </h2>
            </RevealOnScroll>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[360px] gap-4 mb-12">
            <RevealOnScroll className="col-span-2 row-span-2 clip-path-reveal" delay={0.1}>
              <div className="group h-full neo-brutalist overflow-hidden relative rounded-3xl transform transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-neo-brutal">
                <Image
                  src="/placeholder.svg?height=720&width=720&text=Luxury+Fashion"
                  alt="Luxury Fashion E-commerce"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 bg-[hsl(var(--neon-coral))] text-white font-oswald rounded-full text-sm mb-3 neo-brutalist-shadow">
                    E-COMMERCE
                  </span>
                  <h3 className="font-bebas text-3xl mb-2 neo-brutalist-text">LUXURY FASHION E-COMMERCE</h3>
                  <p className="text-white/80 mb-4">
                    A premium shopping experience for a high-end fashion brand that increased conversions by 45%.
                  </p>
                  <Link
                    href="/work/luxury-fashion"
                    className="inline-flex items-center text-[hsl(var(--neon-coral))] font-medium hover:translate-x-1 transition-transform"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll className="col-span-2 clip-path-reveal" delay={0.2}>
              <div className="group h-full neo-brutalist overflow-hidden relative rounded-3xl transform transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-neo-brutal">
                <Image
                  src="/placeholder.svg?height=360&width=720&text=Tech+Startup"
                  alt="Tech Startup Rebrand"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 bg-[hsl(var(--neon-blue))] text-white font-oswald rounded-full text-sm mb-3 neo-brutalist-shadow">
                    BRANDING
                  </span>
                  <h3 className="font-bebas text-3xl mb-2 neo-brutalist-text">TECH STARTUP REBRAND</h3>
                  <p className="text-white/80 mb-4">
                    Complete brand overhaul that helped a growing tech startup establish market presence.
                  </p>
                  <Link
                    href="/work/tech-startup"
                    className="inline-flex items-center text-[hsl(var(--neon-blue))] font-medium hover:translate-x-1 transition-transform"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll className="clip-path-reveal" delay={0.3}>
              <div className="group h-full neo-brutalist overflow-hidden relative rounded-3xl transform transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-neo-brutal">
                <Image
                  src="/placeholder.svg?height=360&width=360&text=Financial+App"
                  alt="Financial App UI/UX"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 bg-[hsl(var(--neon-yellow))] text-black font-oswald rounded-full text-sm mb-3 neo-brutalist-shadow">
                    UI/UX DESIGN
                  </span>
                  <h3 className="font-bebas text-2xl mb-2 neo-brutalist-text">FINANCIAL APP UI/UX</h3>
                  <Link
                    href="/work/finance-app"
                    className="inline-flex items-center text-[hsl(var(--neon-yellow))] font-medium hover:translate-x-1 transition-transform"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll className="clip-path-reveal" delay={0.4}>
              <div className="group h-full neo-brutalist overflow-hidden relative rounded-3xl transform transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-neo-brutal">
                <Image
                  src="/placeholder.svg?height=360&width=360&text=Hospitality"
                  alt="Hospitality Website"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 bg-[hsl(var(--neon-blue))] text-white font-oswald rounded-full text-sm mb-3 neo-brutalist-shadow">
                    WEB DEVELOPMENT
                  </span>
                  <h3 className="font-bebas text-2xl mb-2 neo-brutalist-text">HOSPITALITY WEBSITE</h3>
                  <Link
                    href="/work/hospitality"
                    className="inline-flex items-center text-[hsl(var(--neon-blue))] font-medium hover:translate-x-1 transition-transform"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          <div className="text-center">
            <RevealOnScroll delay={0.5}>
              <NeoBrutalistButton href="/work" color="coral" className="transform hover:translate-x-1 hover:translate-y-1 hover:shadow-neo-brutal transition-transform">
                <div className="flex items-center">
                  View All Projects <ArrowRight className="ml-2 h-5 w-5" />
                </div>
              </NeoBrutalistButton>
            </RevealOnScroll>
          </div>
        </div>

        <ParallaxSection className="absolute inset-0 z-0" speed={0.2}>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] rounded-full bg-[hsl(var(--neon-coral))] opacity-20 blur-[100px]"></div>
            <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-[hsl(var(--neon-blue))] opacity-20 blur-[100px]"></div>
          </div>
        </ParallaxSection>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-soft-mint relative overflow-hidden diagonal-sections-alt">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <RevealOnScroll>
              <span className="inline-block px-4 py-1 bg-black text-white font-oswald rounded-full mb-4">
                OUR PROCESS
              </span>
              <h2 className="font-bebas text-5xl md:text-7xl tracking-tight leading-none mb-6">
                <SplitText>HOW WE BRING</SplitText>
                <SplitText delay={0.1}>IDEAS TO LIFE</SplitText>
              </h2>
              <p className="text-lg md:text-xl text-charcoal/80 max-w-3xl mx-auto">
                We follow a structured yet flexible approach to ensure every project is delivered to the highest
                standards.
              </p>
            </RevealOnScroll>
          </div>

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

        <div className="absolute top-1/3 right-0 transform translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[hsl(var(--neon-yellow))] opacity-10 blur-[100px]"></div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <RevealOnScroll>
              <span className="inline-block px-4 py-1 bg-black text-white font-oswald rounded-full mb-4">
                TESTIMONIALS
              </span>
              <h2 className="font-bebas text-5xl md:text-7xl tracking-tight leading-none mb-6">
                <TextScramble text="WHAT OUR CLIENTS SAY" />
              </h2>
              <p className="text-lg md:text-xl text-charcoal/80 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our clients have to say about working with us.
              </p>
            </RevealOnScroll>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Vanguards Studio transformed our digital presence completely. Their attention to detail and innovative approach exceeded our expectations.",
                author: "Sarah Johnson",
                role: "Marketing Director",
                company: "Luxury Brand Co.",
              },
              {
                quote:
                  "Working with Vanguards was a game-changer for our startup. They delivered a website that perfectly captures our vision and values.",
                author: "Michael Chen",
                role: "CEO",
                company: "Tech Innovations",
              },
              {
                quote:
                  "The team at Vanguards Studio are true professionals. Their design expertise and technical knowledge are unmatched in the industry.",
                author: "Emma Rodriguez",
                role: "Creative Director",
                company: "Design Agency",
              },
            ].map((testimonial, index) => (
              <RevealOnScroll key={index} delay={0.1 * index}>
                <div className="neo-brutalist bg-white p-8 rounded-lg h-full hover:translate-x-1 hover:translate-y-1 transition-transform duration-300">
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-[hsl(var(--neon-coral))] fill-[hsl(var(--neon-coral))]" />
                    ))}
                  </div>
                  <p className="italic mb-8 text-charcoal/80 text-lg leading-relaxed">"{testimonial.quote}"</p>
                  <div className="border-t border-gray-200 pt-6">
                    <div className="font-oswald text-lg mb-1">{testimonial.author}</div>
                    <div className="text-sm text-charcoal/70">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-[hsl(var(--neon-coral))] opacity-10 blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 w-[300px] h-[300px] rounded-full bg-[hsl(var(--neon-blue))] opacity-10 blur-[100px]"></div>
      </section>
      {/* CTA Section */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <RevealOnScroll>
              <h2 className="font-bebas text-6xl md:text-8xl tracking-tight leading-none mb-8">
                <span className="block text-gradient-animated">READY TO ELEVATE</span>
                <span className="block">YOUR DIGITAL PRESENCE?</span>
              </h2>
              <p className="text-xl md:text-2xl text-white/80 mb-12">
                Let's create something extraordinary together. Get in touch with our team to discuss your project.
              </p>
              <NeoBrutalistButton href="/contact" color="coral" className="text-xl px-10 py-6">
                <div className="flex items-center">
                  START YOUR PROJECT <ArrowRight className="ml-2 h-6 w-6" />
                </div>
              </NeoBrutalistButton>
            </RevealOnScroll>
          </div>
        </div>

        <ParallaxSection className="absolute inset-0 z-0" speed={0.3}>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] rounded-full bg-[hsl(var(--neon-coral))] opacity-20 blur-[100px]"></div>
            <div className="absolute bottom-[10%] right-[20%] w-[500px] h-[500px] rounded-full bg-[hsl(var(--neon-blue))] opacity-20 blur-[100px]"></div>
          </div>
        </ParallaxSection>
      </section>
  <Footer/>
    </>
  )
}
