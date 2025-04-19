import Image from "next/image"
import Link from "next/link"
import { SectionHeading, NeoBrutalButton } from "@/components/ui-elements"
import { ArrowRight, Calendar, User } from "lucide-react"

export default function BlogPage() {
  const featuredPost = {
    title: "The Future of Digital Design: Trends to Watch in 2023",
    excerpt:
      "Explore the emerging trends that are shaping the future of digital design and how they're transforming user experiences across the web.",
    image: "/placeholder.svg?height=600&width=1200&text=Featured Post",
    date: "June 15, 2023",
    author: "Alex Morgan",
    category: "Design Trends",
    slug: "future-of-digital-design",
  }

  const posts = [
    {
      title: "How to Create a User-Centered Design Process",
      excerpt: "Learn the essential steps to develop a design process that puts users at the center of every decision.",
      image: "/placeholder.svg?height=400&width=600&text=UX Design",
      date: "May 28, 2023",
      author: "Jamie Chen",
      category: "UX Design",
      slug: "user-centered-design-process",
    },
    {
      title: "The Impact of Color Psychology in Brand Identity",
      excerpt: "Discover how color choices influence brand perception and customer behavior in the digital space.",
      image: "/placeholder.svg?height=400&width=600&text=Branding",
      date: "May 12, 2023",
      author: "Jordan Lee",
      category: "Branding",
      slug: "color-psychology-brand-identity",
    },
    {
      title: "Optimizing Website Performance: A Technical Guide",
      excerpt: "A comprehensive guide to improving website speed and performance for better user experience and SEO.",
      image: "/placeholder.svg?height=400&width=600&text=Development",
      date: "April 30, 2023",
      author: "Taylor Smith",
      category: "Development",
      slug: "optimizing-website-performance",
    },
    {
      title: "The Rise of Neobrutalism in Web Design",
      excerpt:
        "Exploring the bold, raw aesthetic of neobrutalism and how it's making a statement in modern web design.",
      image: "/placeholder.svg?height=400&width=600&text=Design Trends",
      date: "April 15, 2023",
      author: "Quinn Davis",
      category: "Design Trends",
      slug: "neobrutalism-web-design",
    },
    {
      title: "Creating Accessible Digital Experiences",
      excerpt:
        "Why accessibility should be a priority in your design process and how to implement inclusive design principles.",
      image: "/placeholder.svg?height=400&width=600&text=Accessibility",
      date: "March 28, 2023",
      author: "Casey Wilson",
      category: "Accessibility",
      slug: "accessible-digital-experiences",
    },
    {
      title: "The Art of Storytelling in Digital Marketing",
      excerpt:
        "How to leverage storytelling techniques to create more engaging and effective digital marketing campaigns.",
      image: "/placeholder.svg?height=400&width=600&text=Marketing",
      date: "March 10, 2023",
      author: "Avery Johnson",
      category: "Marketing",
      slug: "storytelling-digital-marketing",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 hero-gradient">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-bebas text-5xl md:text-7xl tracking-wide mb-6">Our Journal</h1>
            <p className="text-lg md:text-xl text-charcoal/80 mb-8">
              Insights, thoughts, and perspectives on design, technology, and digital innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Featured Article"
            subtitle="Our latest thoughts on design, technology, and digital innovation."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-neon-coral text-white rounded-full text-sm mb-4">
                {featuredPost.category}
              </span>
              <h2 className="font-bebas text-4xl tracking-wide mb-4">{featuredPost.title}</h2>
              <p className="text-charcoal/70 mb-6">{featuredPost.excerpt}</p>
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-neon-coral" />
                  <span className="text-sm">{featuredPost.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-neon-coral" />
                  <span className="text-sm">{featuredPost.date}</span>
                </div>
              </div>
              <NeoBrutalButton href={`/blog/${featuredPost.slug}`} variant="coral">
                Read Article <ArrowRight className="ml-2 h-5 w-5" />
              </NeoBrutalButton>
            </div>
            <div>
              <div className="aspect-video rounded-xl overflow-hidden border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 md:py-32 bg-soft-mint">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Latest Articles"
            subtitle="Explore our collection of insights and perspectives on design, technology, and digital innovation."
            align="center"
          />

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-6 py-2 rounded-full bg-neon-coral text-white font-medium">All</button>
            <button className="px-6 py-2 rounded-full bg-white border border-charcoal/20 hover:border-neon-coral hover:text-neon-coral transition-colors">
              Design Trends
            </button>
            <button className="px-6 py-2 rounded-full bg-white border border-charcoal/20 hover:border-neon-coral hover:text-neon-coral transition-colors">
              UX Design
            </button>
            <button className="px-6 py-2 rounded-full bg-white border border-charcoal/20 hover:border-neon-coral hover:text-neon-coral transition-colors">
              Development
            </button>
            <button className="px-6 py-2 rounded-full bg-white border border-charcoal/20 hover:border-neon-coral hover:text-neon-coral transition-colors">
              Branding
            </button>
            <button className="px-6 py-2 rounded-full bg-white border border-charcoal/20 hover:border-neon-coral hover:text-neon-coral transition-colors">
              Marketing
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden"
              >
                <div className="aspect-video relative">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-charcoal text-white rounded-full text-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-oswald text-xl mb-3">{post.title}</h3>
                  <p className="text-charcoal/70 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-neon-coral" />
                        <span className="text-sm">{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-neon-coral" />
                        <span className="text-sm">{post.date}</span>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-neon-coral hover:text-neon-coral/80"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <NeoBrutalButton href="/blog/archive" variant="coral">
              View All Articles <ArrowRight className="ml-2 h-5 w-5" />
            </NeoBrutalButton>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              title="Subscribe to Our Newsletter"
              subtitle="Stay updated with our latest insights, trends, and perspectives on design and technology."
              align="center"
            />

            <form className="mt-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-full border-2 border-black focus:outline-none focus:border-neon-coral"
                  required
                />
                <button type="submit" className="neon-button text-white font-medium rounded-full px-8 py-3">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-charcoal/60 mt-4">We respect your privacy. Unsubscribe at any time.</p>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-charcoal text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-bebas text-4xl md:text-6xl tracking-wide mb-6">Have a Project in Mind?</h2>
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
