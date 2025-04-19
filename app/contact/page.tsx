"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { SectionHeading, NeoBrutalButton } from "@/components/ui-elements"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission (would connect to a backend service in production)
    console.log(formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      projectType: "",
      budget: "",
      message: "",
    })
  }

  return (
    <>
      <Navbar />    
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 hero-gradient">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-bebas text-5xl md:text-7xl tracking-wide mb-6">Get in Touch</h1>
            <p className="text-lg md:text-xl text-charcoal/80 mb-8">
              Ready to start your project? Have questions about our services? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading
                title="Let's Talk"
                subtitle="Fill out the form below and we'll get back to you as soon as possible."
              />

              <form onSubmit={handleSubmit} className="space-y-8 mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold uppercase mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-shadow focus:outline-none focus:border-neon-coral focus:shadow-[4px_4px_0px_0px_rgba(255,91,91,1)]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold uppercase mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-shadow focus:outline-none focus:border-neon-coral focus:shadow-[4px_4px_0px_0px_rgba(255,91,91,1)]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold uppercase mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-shadow focus:outline-none focus:border-neon-coral focus:shadow-[4px_4px_0px_0px_rgba(255,91,91,1)]"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-bold uppercase mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-shadow focus:outline-none focus:border-neon-coral focus:shadow-[4px_4px_0px_0px_rgba(255,91,91,1)]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-bold uppercase mb-2">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-shadow focus:outline-none focus:border-neon-coral focus:shadow-[4px_4px_0px_0px_rgba(255,91,91,1)] appearance-none"
                    >
                      <option value="">Select Project Type</option>
                      <option value="Website Design">Website Design</option>
                      <option value="Brand Identity">Brand Identity</option>
                      <option value="UX/UI Design">UX/UI Design</option>
                      <option value="Mobile App">Mobile App</option>
                      <option value="E-commerce">E-commerce</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-bold uppercase mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-shadow focus:outline-none focus:border-neon-coral focus:shadow-[4px_4px_0px_0px_rgba(255,91,91,1)] appearance-none"
                    >
                      <option value="">Select Budget Range</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                      <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                      <option value="$50,000+">$50,000+</option>
                      <option value="Not Sure">Not Sure</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold uppercase mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-shadow focus:outline-none focus:border-neon-coral focus:shadow-[4px_4px_0px_0px_rgba(255,91,91,1)]"
                    placeholder="Tell us about your project and goals..."
                  ></textarea>
                </div>

                <div>
                  <NeoBrutalButton variant="coral" size="lg" className="hover:translate-x-1 hover:-translate-y-1 transition-transform">
                    Send Message <ArrowRight className="ml-2 h-5 w-5" />
                  </NeoBrutalButton>
                </div>
              </form>
            </div>

            <div>
              <div className="bg-soft-mint p-8 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-shadow mb-8">
                <h3 className="font-oswald text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex gap-4 items-center p-4 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <Mail className="h-6 w-6 text-neon-coral flex-shrink-0" />
                    <div>
                      <h4 className="font-bold uppercase mb-1">Email</h4>
                      <a href="mailto:hello@vanguardsstudio.com" className="text-charcoal hover:text-neon-coral transition-colors">
                        hello@vanguardsstudio.com
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center p-4 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <Phone className="h-6 w-6 text-neon-coral flex-shrink-0" />
                    <div>
                      <h4 className="font-bold uppercase mb-1">Phone</h4>
                      <a href="tel:+1234567890" className="text-charcoal hover:text-neon-coral transition-colors">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center p-4 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <MapPin className="h-6 w-6 text-neon-coral flex-shrink-0" />
                    <div>
                      <h4 className="font-bold uppercase mb-1">Location</h4>
                      <address className="text-charcoal not-italic">
                        123 Design Avenue
                        <br />
                        San Francisco, CA 94103
                        <br />
                        United States
                      </address>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[600px] overflow-hidden border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-shadow relative flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=600&width=600&text=Why Choose Us"
                  alt="Vanguards Studio Workspace"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  style={{ objectPosition: 'center' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-soft-mint">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about working with us."
            align="center"
          />

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "What is your typical process for new projects?",
                answer:
                  "Our process typically includes discovery, strategy, design, development, testing, and launch phases. We start with a thorough understanding of your goals and requirements before creating a tailored solution for your specific needs.",
              },
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
            <h2 className="font-bebas text-4xl md:text-6xl tracking-wide mb-6">Ready to Start Your Project?</h2>
            <p className="text-white/70 text-lg md:text-xl mb-10">
              Let's create something extraordinary together. We're excited to hear about your vision.
            </p>
            <NeoBrutalButton href="/work" variant="coral" size="lg">
              Explore Our Work <ArrowRight className="ml-2 h-5 w-5" />
            </NeoBrutalButton>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
