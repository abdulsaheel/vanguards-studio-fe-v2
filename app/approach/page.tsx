import Image from "next/image"
import { SectionHeading, NeoBrutalButton } from "@/components/ui-elements"
import { ArrowRight, CheckCircle, Lightbulb, Target, Users } from "lucide-react"

export default function ApproachPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 hero-gradient">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-bebas text-5xl md:text-7xl tracking-wide mb-6">Our Approach</h1>
            <p className="text-lg md:text-xl text-charcoal/80 mb-8">
              Discover our unique methodology that combines strategic thinking, creative excellence, and technical
              expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Our Philosophy"
                subtitle="We believe that exceptional digital experiences are born from a perfect blend of strategy, design, and technology."
              />
              <p className="text-charcoal/70 mb-6">
                At Vanguards Studio, we approach every project with a commitment to excellence and innovation. We don't
                just create websites or apps—we craft digital experiences that drive real business results.
              </p>
              <p className="text-charcoal/70 mb-8">
                Our philosophy is built on three core pillars: strategic thinking, creative excellence, and technical
                expertise. By bringing these elements together, we create digital solutions that not only look beautiful
                but also perform exceptionally well.
              </p>
              <div className="space-y-4">
                {[
                  "User-centered design at the core of everything we do",
                  "Data-driven decision making throughout the process",
                  "Continuous innovation and exploration of new technologies",
                  "Collaborative approach with clients as partners",
                ].map((point, index) => (
                  <div key={index} className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-neon-coral flex-shrink-0" />
                    <p>{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="aspect-square rounded-xl overflow-hidden border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <Image
                  src="/placeholder.svg?height=600&width=600&text=Our Philosophy"
                  alt="Vanguards Studio Philosophy"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-soft-mint">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Our Process"
            subtitle="A structured yet flexible approach that ensures every project is delivered to the highest standards."
            align="center"
          />

          <div className="space-y-16 mt-12">
            {[
              {
                number: "01",
                title: "Discovery & Research",
                description:
                  "We begin by deeply understanding your business, audience, and objectives. This phase includes stakeholder interviews, market research, competitor analysis, and user research to establish a solid foundation for the project.",
                image: "/placeholder.svg?height=400&width=600&text=Discovery",
                points: [
                  "Stakeholder interviews and workshops",
                  "Market and competitor analysis",
                  "User research and persona development",
                  "Business goals and KPI definition",
                ],
                icon: <Target className="h-10 w-10" />,
              },
              {
                number: "02",
                title: "Strategy Development",
                description:
                  "Based on our findings, we develop a comprehensive strategy tailored to your specific needs. This includes defining the project scope, creating a roadmap, and establishing the metrics for success.",
                image: "/placeholder.svg?height=400&width=600&text=Strategy",
                points: [
                  "Project scope and requirements definition",
                  "Content strategy and information architecture",
                  "Technical planning and platform selection",
                  "Project roadmap and timeline creation",
                ],
                icon: <Lightbulb className="h-10 w-10" />,
              },
              {
                number: "03",
                title: "Design & Development",
                description:
                  "Our team brings the strategy to life through creative design and technical implementation. We follow an iterative process with regular client feedback to ensure the final product meets your expectations.",
                image: "/placeholder.svg?height=400&width=600&text=Design",
                points: [
                  "Wireframing and prototyping",
                  "Visual design and UI development",
                  "Frontend and backend development",
                  "Regular reviews and iterative refinement",
                ],
                icon: <Users className="h-10 w-10" />,
              },
              {
                number: "04",
                title: "Testing & Launch",
                description:
                  "Before launch, we conduct thorough testing to ensure everything works flawlessly. Once approved, we handle the launch process and provide training to ensure a smooth transition.",
                image: "/placeholder.svg?height=400&width=600&text=Launch",
                points: [
                  "Quality assurance and cross-browser testing",
                  "Performance optimization",
                  "Security testing and vulnerability assessment",
                  "Deployment and launch support",
                ],
                icon: <ArrowRight className="h-10 w-10" />,
              },
              {
                number: "05",
                title: "Support & Optimization",
                description:
                  "Our relationship doesn't end at launch. We provide ongoing support and use data-driven insights to continuously optimize and improve your digital product.",
                image: "/placeholder.svg?height=400&width=600&text=Support",
                points: [
                  "Analytics setup and monitoring",
                  "Performance tracking and reporting",
                  "Continuous improvement and updates",
                  "Technical support and maintenance",
                ],
                icon: <CheckCircle className="h-10 w-10" />,
              },
            ].map((step, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? "order-2 lg:order-1" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="font-bebas text-5xl text-neon-coral">{step.number}</div>
                    <div className="text-neon-coral">{step.icon}</div>
                  </div>
                  <h3 className="font-oswald text-2xl mb-4">{step.title}</h3>
                  <p className="text-charcoal/70 mb-6">{step.description}</p>
                  <div className="space-y-3">
                    {step.points.map((point, i) => (
                      <div key={i} className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-neon-coral flex-shrink-0" />
                        <p>{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={index % 2 === 1 ? "order-1 lg:order-2" : ""}>
                  <div className="aspect-video rounded-xl overflow-hidden border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                    <Image src={step.image || "/placeholder.svg"} alt={step.title} fill className="object-cover" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Our Design Principles"
            subtitle="The core principles that guide our creative process and ensure exceptional results."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "User-Centered Design",
                description:
                  "We put users at the center of everything we create, ensuring intuitive and engaging experiences.",
              },
              {
                title: "Purpose-Driven Aesthetics",
                description: "Every design decision serves a purpose, balancing beauty with functionality.",
              },
              {
                title: "Attention to Detail",
                description:
                  "We believe that excellence lies in the details, creating polished and refined experiences.",
              },
              {
                title: "Innovative Thinking",
                description: "We constantly explore new ideas and approaches to solve complex problems.",
              },
              {
                title: "Accessibility & Inclusivity",
                description: "We design for everyone, ensuring our digital products are accessible to all users.",
              },
              {
                title: "Performance Optimization",
                description: "We create experiences that not only look great but also perform exceptionally well.",
              },
            ].map((principle, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <h3 className="font-oswald text-xl mb-3">{principle.title}</h3>
                <p className="text-charcoal/70">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies Section */}
      <section className="py-20 md:py-32 bg-pale-coral">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Tools & Technologies"
            subtitle="We leverage the latest tools and technologies to deliver cutting-edge digital solutions."
            align="center"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
            {[
              "Figma",
              "Adobe Creative Suite",
              "React",
              "Next.js",
              "Node.js",
              "WordPress",
              "Shopify",
              "Webflow",
              "Tailwind CSS",
              "TypeScript",
              "AWS",
              "Vercel",
            ].map((tool, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center aspect-square"
              >
                <span className="font-oswald text-lg text-center">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-charcoal text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-bebas text-4xl md:text-6xl tracking-wide mb-6">Ready to Experience Our Approach?</h2>
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
