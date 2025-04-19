import Image from "next/image"
import Link from "next/link"
import { SectionHeading, NeoBrutalButton } from "@/components/ui-elements"
import { ArrowRight } from "lucide-react"

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "Luxury Fashion E-commerce Redesign",
      description:
        "How we transformed an outdated e-commerce platform into a premium shopping experience that increased conversions by 45%.",
      image: "/placeholder.svg?height=600&width=600&text=Fashion",
      category: "E-commerce",
      link: "/case-studies/luxury-fashion",
      results: ["45% increase in conversions", "32% decrease in bounce rate", "2.5x increase in average order value"],
    },
    {
      title: "Tech Startup Brand Evolution",
      description:
        "A comprehensive rebrand that helped a growing tech startup establish market presence and secure Series B funding.",
      image: "/placeholder.svg?height=600&width=600&text=Tech",
      category: "Branding",
      link: "/case-studies/tech-startup",
      results: [
        "Successful $12M Series B funding",
        "280% increase in brand recognition",
        "75% increase in qualified leads",
      ],
    },
    {
      title: "Financial App UX Overhaul",
      description:
        "Redesigning a complex financial application to improve user experience and drive engagement across all user segments.",
      image: "/placeholder.svg?height=600&width=600&text=Finance",
      category: "UI/UX Design",
      link: "/case-studies/finance-app",
      results: [
        "68% increase in daily active users",
        "4.8/5 App Store rating (up from 3.2)",
        "92% reduction in support tickets",
      ],
    },
    {
      title: "Hospitality Group Digital Transformation",
      description:
        "A multi-platform digital strategy that unified the online presence of a luxury hotel chain across 12 properties.",
      image: "/placeholder.svg?height=600&width=1200&text=Hospitality",
      category: "Web Development",
      link: "/case-studies/hospitality",
      results: [
        "52% increase in direct bookings",
        "3.2M in additional revenue",
        "65% reduction in booking abandonment",
      ],
    },
    {
      title: "Wellness Brand Launch",
      description:
        "Creating a complete brand identity and digital presence for a new premium wellness company entering a competitive market.",
      image: "/placeholder.svg?height=600&width=600&text=Wellness",
      category: "Branding",
      link: "/case-studies/wellness-brand",
      results: [
        "Successful launch with 10,000+ first-month customers",
        "Featured in 5 major publications",
        "320% ROI on initial marketing spend",
      ],
    },
    {
      title: "E-learning Platform Development",
      description:
        "Building a comprehensive learning management system with interactive features for a leading educational institution.",
      image: "/placeholder.svg?height=600&width=600&text=E-learning",
      category: "Web Development",
      link: "/case-studies/e-learning",
      results: [
        "85% student engagement rate",
        "42% improvement in learning outcomes",
        "Scaled to 50,000+ users in first year",
      ],
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 hero-gradient">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-bebas text-5xl md:text-7xl tracking-wide mb-6">Case Studies</h1>
            <p className="text-lg md:text-xl text-charcoal/80 mb-8">
              Dive deep into our most impactful projects and discover how we've helped businesses achieve their digital
              goals.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-neon-coral text-white rounded-full text-sm mb-4">
                Featured Case Study
              </span>
              <h2 className="font-bebas text-4xl md:text-5xl tracking-wide mb-4">Luxury Fashion E-commerce Redesign</h2>
              <p className="text-charcoal/70 mb-6">
                How we transformed an outdated e-commerce platform into a premium shopping experience that increased
                conversions by 45%.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-neon-coral"></div>
                  <p>45% increase in conversions</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-neon-coral"></div>
                  <p>32% decrease in bounce rate</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-neon-coral"></div>
                  <p>2.5x increase in average order value</p>
                </div>
              </div>
              <NeoBrutalButton href="/case-studies/luxury-fashion" variant="coral">
                Read Case Study <ArrowRight className="ml-2 h-5 w-5" />
              </NeoBrutalButton>
            </div>
            <div>
              <div className="aspect-video rounded-xl overflow-hidden border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <Image
                  src="/placeholder.svg?height=600&width=1200&text=Featured Case Study"
                  alt="Luxury Fashion E-commerce Redesign"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 md:py-32 bg-soft-mint">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="More Success Stories"
            subtitle="Explore our portfolio of case studies across various industries and project types."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {caseStudies.slice(1).map((study, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden"
              >
                <div className="aspect-video relative">
                  <Image src={study.image || "/placeholder.svg"} alt={study.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-charcoal text-white rounded-full text-sm">
                      {study.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-oswald text-xl mb-3">{study.title}</h3>
                  <p className="text-charcoal/70 mb-4">{study.description}</p>
                  <div className="space-y-2 mb-6">
                    {study.results.map((result, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-neon-coral"></div>
                        <p className="text-sm">{result}</p>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={study.link}
                    className="inline-flex items-center text-neon-coral hover:text-neon-coral/80 font-medium"
                  >
                    Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Our Approach"
            subtitle="We follow a proven methodology to ensure every project delivers exceptional results."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                {[
                  {
                    number: "01",
                    title: "Research & Discovery",
                    description:
                      "We begin by deeply understanding your business, audience, and objectives through comprehensive research and stakeholder interviews.",
                  },
                  {
                    number: "02",
                    title: "Strategy Development",
                    description:
                      "Based on our findings, we create a tailored strategy that addresses your specific challenges and opportunities.",
                  },
                  {
                    number: "03",
                    title: "Creative Execution",
                    description:
                      "Our team brings the strategy to life through innovative design and technical excellence, with regular client collaboration.",
                  },
                  {
                    number: "04",
                    title: "Testing & Refinement",
                    description:
                      "We rigorously test all aspects of the project, gathering feedback and making refinements to ensure optimal performance.",
                  },
                  {
                    number: "05",
                    title: "Launch & Optimization",
                    description:
                      "After a successful launch, we continue to monitor performance and make data-driven optimizations to maximize results.",
                  },
                ].map((step, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="font-bebas text-4xl text-neon-coral">{step.number}</div>
                    <div>
                      <h3 className="font-oswald text-xl mb-2">{step.title}</h3>
                      <p className="text-charcoal/70">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="aspect-square rounded-xl overflow-hidden border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <Image
                  src="/placeholder.svg?height=600&width=600&text=Our Approach"
                  alt="Our Approach to Projects"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-charcoal text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-bebas text-4xl md:text-6xl tracking-wide mb-6">Ready to Be Our Next Success Story?</h2>
            <p className="text-white/70 text-lg md:text-xl mb-10">
              Let's create something extraordinary together. Get in touch with our team to discuss your project.
            </p>
            <NeoBrutalButton href="/contact" variant="coral" size="lg">
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </NeoBrutalButton>
          </div>
        </div>
      </section>
    </>
  )
}
