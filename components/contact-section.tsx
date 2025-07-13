"use client"

import type React from "react"

import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 95669 04757",
      color: "cyan",
      href: "tel:+919566904757",
    },
    {
      icon: Mail,
      label: "Email",
      value: "soundariyamathavan04@gmail.com",
      color: "purple",
      href: "mailto:soundariyamathavan04@gmail.com",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "13/120, Munthirithottam, Paramankurichi, Tiruchendur taluk, Thoothukudi district - 628 213",
      color: "pink",
      href: "https://maps.google.com/?q=Paramankurichi,Tiruchendur,Thoothukudi",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/SoundariyaMathavan",
      color: "gray",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/soundariya-mathavan-4ba157321/",
      color: "blue",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // You can implement form submission logic here
    // For now, we'll create a mailto link
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    const name = formData.get("name")
    const email = formData.get("email")
    const message = formData.get("message")

    const subject = `Portfolio Contact from ${name}`
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    const mailtoLink = `mailto:soundariyamathavan04@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 text-lg">
            Let's connect and discuss opportunities to collaborate on innovative projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-cyan-400 mb-8">Contact Information</h3>
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : "_self"}
                rel={info.href.startsWith("http") ? "noopener noreferrer" : ""}
                className="block bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20 shadow-[0_0_20px_rgba(0,255,255,0.1)] hover:shadow-[0_0_30px_rgba(0,255,255,0.2)] transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-${info.color}-500/20 border border-${info.color}-400/30`}>
                    <info.icon className={`h-6 w-6 text-${info.color}-400`} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{info.label}</h4>
                    <p className="text-gray-300 hover:text-white transition-colors duration-300">{info.value}</p>
                  </div>
                </div>
              </a>
            ))}

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="text-xl font-bold text-blue-400 mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg bg-${social.color}-500/20 border border-${social.color}-400/30 hover:bg-${social.color}-500/30 transition-all duration-300 hover:scale-110 group`}
                    title={social.label}
                  >
                    <social.icon className={`h-6 w-6 text-${social.color}-400 group-hover:text-${social.color}-300`} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/20 shadow-[0_0_30px_rgba(128,0,255,0.1)]">
            <h3 className="text-2xl font-bold text-purple-400 mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 shadow-[0_0_20px_rgba(128,0,255,0.3)] hover:shadow-[0_0_30px_rgba(128,0,255,0.5)] transition-all duration-300"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
