import Image from "next/image"
import { SectionHeading, NeoBrutalButton } from "@/components/ui-elements"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior UX Designer",
      location: "San Francisco, CA (Hybrid)",
      type: "Full-time",
      description:
        "We're looking for an experienced UX Designer to join our team and help create exceptional digital experiences for our clients.",
      requirements: [
        "5+ years of experience in UX design",
        "Strong portfolio demonstrating user-centered design process",
        "Experience with design systems and component libraries",
        "Excellent communication and collaboration skills",
        "Proficiency in Figma and other design tools",
      ],
      slug: "senior-ux-designer",
    },
    {
      title: "Frontend Developer",
      location: "Remote",
      type: "Full-time",
      description:
        "Join our development team to build beautiful, responsive, and performant user interfaces for our clients' digital products.",
      requirements: [
        "3+ years of experience in frontend development",
        "Strong proficiency in React, Next.js, and TypeScript",
        "Experience with modern CSS frameworks like Tailwind",
        "Knowledge of accessibility standards and best practices",
        "Collaborative mindset and attention to detail",
      ],
      slug: "frontend-developer",
    },
    {
      title: "Art Director",
      location: "San Francisco, CA (On-site)",
      type: "Full-time",
      description:
        "We're seeking a creative Art Director to lead visual design initiatives and help shape the visual identity of our clients' brands.",
      requirements: [
        "7+ years of experience in visual design or art direction",
        "Strong portfolio showcasing brand identity and digital design work",
        "Experience leading design teams and mentoring junior designers",
        "Excellent conceptual thinking and problem-solving skills",
        "Proficiency in Adobe Creative Suite and Figma",
      ],
      slug: "art-director",
    },
    {
      title: "Project Manager",
      location: "Remote",
      type: "Full-time",
      description:
        "Help us deliver exceptional projects on time and within budget while ensuring a smooth client experience throughout the process.",
      requirements: [
        "5+ years of experience in digital project management",
        "Strong organizational and communication skills",
        "Experience with agile methodologies and project management tools",
        "Ability to manage multiple projects simultaneously",
        "Understanding of design and development processes",
      ],
      slug: "project-manager",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 hero-gradient">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-bebas text-5xl md:text-7xl tracking-wide mb-6">Join Our Team</h1>
            <p className="text-lg md:text-xl text-charcoal/80 mb-8">
              We're always looking for talented individuals who are passionate about design, technology, and creating
              exceptional digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Our Culture"
                subtitle="We believe in creating an environment where creativity thrives and innovation is encouraged."
              />
              <p className="text-charcoal/70 mb-6">
                At Vanguards Studio, we're more than just a team—we're a community of passionate individuals united by
                our love for exceptional design and innovative technology. We believe in fostering a culture that values
                creativity, collaboration, and continuous growth.
              </p>
              <p className="text-charcoal/70 mb-8">
                We're committed to creating an inclusive and supportive workplace where everyone feels valued and
                empowered to do their best work. We celebrate diversity of thought and background, knowing that
                different perspectives lead to better solutions.
              </p>
              <div className="space-y-4">
                {[
                  "Collaborative and supportive team environment",
                  "Opportunities for professional growth and development",
                  "Work on exciting projects for innovative clients",
                  "Flexible work arrangements and work-life balance",
                  "Competitive compensation and benefits",
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
                  src="/placeholder.svg?height=600&width=600&text=Our Culture"
                  alt="Vanguards Studio Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32 bg-soft-mint">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Benefits & Perks"
            subtitle="We offer a comprehensive benefits package to support our team members' wellbeing and growth."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Health & Wellness",
                description: "Comprehensive health, dental, and vision insurance for you and your dependents.",
              },
              {
                title: "Flexible Work",
                description: "Remote and hybrid work options with flexible hours to support work-life balance.",
              },
              {
                title: "Professional Development",
                description: "Budget for conferences, courses, and resources to support your growth.",
              },
              {
                title: "Competitive Compensation",
                description: "Salary packages that recognize your skills and experience, with regular reviews.",
              },
              {
                title: "Paid Time Off",
                description: "Generous vacation policy, paid holidays, and personal days to recharge.",
              },
              {
                title: "Retirement Plan",
                description: "401(k) plan with company matching to help you save for the future.",
              },
              {
                title: "Team Events",
                description: "Regular team outings, retreats, and social events to foster connection.",
              },
              {
                title: "Home Office Stipend",
                description: "Budget for setting up your home workspace with the equipment you need.",
              },
              {
                title: "Parental Leave",
                description: "Paid leave for new parents to spend time with their growing families.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <h3 className="font-oswald text-xl mb-3">{benefit.title}</h3>
                <p className="text-charcoal/70">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Open Positions"
            subtitle="Join our team and help us create exceptional digital experiences for our clients."
            align="center"
          />

          <div className="space-y-6 max-w-4xl mx-auto">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="font-oswald text-2xl">{position.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                    <span className="inline-block px-3 py-1 bg-charcoal/10 rounded-full text-sm">
                      {position.location}
                    </span>
                    <span className="inline-block px-3 py-1 bg-neon-coral text-white rounded-full text-sm">
                      {position.type}
                    </span>
                  </div>
                </div>
                <p className="text-charcoal/70 mb-4">{position.description}</p>
                <div className="mb-6">
                  <h4 className="font-medium mb-2">Requirements:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((req, i) => (
                      <li key={i} className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-neon-coral flex-shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <NeoBrutalButton href={`/careers/${position.slug}`} variant="coral">
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </NeoBrutalButton>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg mb-6">Don't see a position that matches your skills?</p>
            <NeoBrutalButton href="/contact" variant="black">
              Send Us Your Resume <ArrowRight className="ml-2 h-5 w-5" />
            </NeoBrutalButton>
          </div>
        </div>
      </section>

      {/* Team Photos Section */}
      <section className="py-20 md:py-32 bg-pale-coral">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Life at Vanguards Studio"
            subtitle="Get a glimpse of our team culture and what it's like to work with us."
            align="center"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="aspect-square rounded-xl overflow-hidden border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <Image
                  src={`/placeholder.svg?height=300&width=300&text=Team ${index + 1}`}
                  alt={`Team Photo ${index + 1}`}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-charcoal text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-bebas text-4xl md:text-6xl tracking-wide mb-6">Ready to Join Our Team?</h2>
            <p className="text-white/70 text-lg md:text-xl mb-10">
              We're always looking for talented individuals who are passionate about creating exceptional digital
              experiences.
            </p>
            <NeoBrutalButton href="/careers#open-positions" variant="coral" size="lg">
              View Open Positions <ArrowRight className="ml-2 h-5 w-5" />
            </NeoBrutalButton>
          </div>
        </div>
      </section>
    </>
  )
}
