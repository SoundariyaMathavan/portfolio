"use client"

import { Button } from "@/components/ui/button"
import { Download, Eye, Sparkles, Code, Zap } from "lucide-react"
import { useEffect, useState } from "react";

export function HeroSection() {
  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "Soundariya_M_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  

  const handleViewProjects = () => {
    const element = document.querySelector("#projects")
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }
  type Dot = {
  left: number
  top: number
  delay: number
  duration: number
}
  const [dots, setDots] = useState<Dot[]>([])
  useEffect(() => {
  const newDots = Array.from({ length: 20 }, () => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
  }))
  setDots(newDots)
}, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      </div>

      {/* Multiple Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-blue-500/5 rounded-full blur-xl animate-pulse delay-500"></div>
      <div className="absolute top-10 right-10 w-16 h-16 bg-pink-500/15 rounded-full blur-xl animate-pulse delay-300"></div>
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-blue-500/8 rounded-full blur-xl animate-pulse delay-700"></div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
  {dots.map((dot, i) => (
    <div
      key={i}
      className={`absolute w-1 h-1 rounded-full animate-float ${
        i % 2 === 0 ? "bg-blue-500/30" : "bg-pink-500/30"
      }`}
      style={{
        left: `${dot.left}%`,
        top: `${dot.top}%`,
        animationDelay: `${dot.delay}s`,
        animationDuration: `${dot.duration}s`,
      }}
    ></div>
  ))}
</div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10 animate-fade-in-up">
            {/* Welcome Text with Icon */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 animate-fade-in-up delay-100">
                <Sparkles className="w-6 h-6 text-blue-500 animate-pulse" />
                <p className="text-blue-500 text-xl font-medium">Welcome to my portfolio!</p>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-blue-300 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>

              {/* Main Heading with Enhanced Animations */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white animate-fade-in-up delay-200 relative leading-tight">
                  Hi, I'm{" "}
                  <span className="typing-animation relative">
                    Soundariya
                    <div className="absolute -top-2 -right-2 w-3 h-3 bg-pink-500 rounded-full animate-ping"></div>
                  </span>
                </h1>
                <div className="flex items-center gap-4 animate-fade-in-up delay-300">
                  <Code className="w-10 h-10 text-blue-500 animate-pulse" />
                  <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                    <span className="text-blue-500 animate-gradient bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 bg-clip-text text-transparent">
                      Full Stack Developer
                    </span>{" "}
                    &
                  </h2>
                </div>
                <div className="flex items-center gap-4 animate-fade-in-up delay-400">
                  <Zap className="w-10 h-10 text-pink-500 animate-bounce" />
                  <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-pink-500 animate-gradient bg-gradient-to-r from-pink-500 via-pink-400 to-pink-500 bg-clip-text text-transparent leading-tight">
                    AI Explorer
                  </h2>
                </div>
              </div>

              {/* Enhanced Description */}
              <div className="relative animate-fade-in-up delay-500 pt-4">
                <p className="text-gray-300 text-xl lg:text-2xl leading-relaxed max-w-2xl relative z-10">
                  Passionate about building <span className="text-blue-400 font-semibold">innovative solutions</span>{" "}
                  and exploring the intersection of{" "}
                  <span className="text-cyan-400 font-semibold">technology and creativity</span>.
                </p>
                {/* Floating Quote Marks */}
                <div className="absolute -top-4 -left-4 text-blue-500/30 text-4xl font-serif animate-pulse">"</div>
                <div className="absolute -bottom-4 -right-4 text-cyan-500/30 text-4xl font-serif animate-pulse delay-500">
                  "
                </div>
              </div>
            </div>

            {/* Enhanced Buttons with Links */}
            <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up delay-600 pt-6">
              <Button
                onClick={handleDownloadResume}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-700 hover:to-pink-700 text-white border-0 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300 hover:scale-105 relative overflow-hidden group px-8 py-4 text-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-pink-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Download className="mr-3 h-6 w-6 relative z-10 group-hover:animate-bounce" />
                <span className="relative z-10">Download Resume</span>
              </Button>
              <Button
                onClick={handleViewProjects}
                size="lg"
                variant="outline"
                className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-500 bg-transparent hover:scale-105 transition-all duration-300 relative overflow-hidden group px-8 py-4 text-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Eye className="mr-3 h-6 w-6 relative z-10 group-hover:animate-pulse" />
                <span className="relative z-10">View Projects</span>
              </Button>
            </div>

            {/* Enhanced Stats with more spacing */}
            <div className="grid grid-cols-3 gap-8 pt-12 animate-fade-in-up delay-700">
              {[
                { value: "15+", label: "Projects", delay: "0ms", color: "blue" },
                { value: "8.16", label: "CGPA", delay: "200ms", color: "pink" },
                { value: "2+", label: "Awards", delay: "400ms", color: "blue" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center group cursor-pointer"
                  style={{ animationDelay: stat.delay }}
                >
                  <div className="relative mb-3">
                    <div
                      className={`text-3xl lg:text-4xl font-bold ${stat.color === "blue" ? "text-blue-500" : "text-pink-500"} counter-animation group-hover:scale-110 transition-transform duration-300`}
                    >
                      {stat.value}
                    </div>
                    <div
                      className={`absolute -top-1 -right-1 w-2 h-2 ${stat.color === "blue" ? "bg-blue-500" : "bg-pink-500"} rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300`}
                    ></div>
                  </div>
                  <div className="text-gray-400 text-base group-hover:text-gray-300 transition-colors duration-300 mb-3">
                    {stat.label}
                  </div>
                  <div className="w-full h-0.5 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${stat.color === "blue" ? "bg-blue-500" : "bg-pink-500"} rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Enhanced Photo */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up delay-300">
            <div className="relative group">
              {/* Main Photo Container */}
              <div className="w-80 h-96 lg:w-96 lg:h-[28rem] rounded-3xl overflow-hidden border-4 border-gradient-to-r from-blue-500 to-pink-500 shadow-[0_0_50px_rgba(59,130,246,0.2)] group-hover:shadow-[0_0_80px_rgba(59,130,246,0.4)] transition-all duration-700 transform group-hover:scale-105 relative">
                <img
                  src="/images/soundariya-photo.png"
                  alt="Soundariya M"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-blue-500/0 group-hover:border-blue-500/50 transition-all duration-500"></div>
              </div>

              {/* Enhanced Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce delay-100 shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-bounce delay-300 shadow-[0_0_15px_rgba(236,72,153,0.5)]"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-blue-300 rounded-full animate-ping delay-500"></div>
              <div className="absolute top-1/4 -right-8 w-5 h-5 bg-pink-600 rounded-full animate-pulse delay-700"></div>
              <div className="absolute bottom-1/4 -left-6 w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-900"></div>

              {/* Orbiting Elements */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute top-0 left-1/2 w-2 h-2 bg-blue-500/50 rounded-full transform -translate-x-1/2 -translate-y-4"></div>
                <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-pink-500/50 rounded-full transform -translate-x-1/2 translate-y-4"></div>
                <div className="absolute left-0 top-1/2 w-2 h-2 bg-blue-500/50 rounded-full transform -translate-x-4 -translate-y-1/2"></div>
                <div className="absolute right-0 top-1/2 w-2 h-2 bg-pink-500/50 rounded-full transform translate-x-4 -translate-y-1/2"></div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/5 to-pink-500/5 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
