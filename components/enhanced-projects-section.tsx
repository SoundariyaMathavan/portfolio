"use client"

import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Circle, Star, Zap, Code2 } from "lucide-react"

export function EnhancedProjectsSection() {
  const projects = [
    {
      title: "Dorm Stay",
      description:
        "Full-stack Django-based hostel booking platform with roommate matching, Stripe payments, and admin dashboard",
      image: "/images/dormstay.png",
      tags: ["Django", "HTML", "CSS", "SQLite"],
      liveDemo: "https://dormstay-demo.vercel.app",
      github: "https://github.com/soundariya-m/dorm-stay",
      featured: true,
      stars: 24,
      forks: 8,
    },
    {
      title: "Athelete Tracker",
      description: "FastAPI + React app to analyze and visualize CSV expenses with smart recommendations and charts",
      image: "/images/Athelete.png",
      tags: ["FastAPI", "Type Script","Mongo db","Next.js", "Chart.js", "Python"],
      liveDemo: "https://athelete-tracker.onrender.com/",
      github: "https://github.com/SoundariyaMathavan/athelete-tracker.git",
      featured: true,
      stars: 18,
      forks: 5,
    },
    //{
      //title: "E-Commerce Platform",
      //description: "Modern e-commerce solution with user authentication, payment integration, and inventory management",
      //image: "/placeholder.svg?height=300&width=500",
      //tags: ["React", "Node.js", "MongoDB", "Stripe"],
      //liveDemo: "https://ecommerce-demo.vercel.app",
      //github: "https://github.com/soundariya-m/ecommerce-platform",
      //featured: false,
      //stars: 32,
      //forks: 12,
    //},
    {
      title: "To - Do",
      description: "Secure Your Tasks with Blockchain-Powered ToDo Tracking",
      image: "/images/todo.png",
      tags: ["TypeScript", "Express.js", "Next.js","MongoDB","BlockChain"],
      liveDemo: "https://todo-8om3.onrender.com",
      github: "https://github.com/SoundariyaMathavan/todo.git",
      featured: false,
      stars: 15,
      forks: 6,
    },
   // {
     // title: "Weather Dashboard",
      //description: "Interactive weather application with location-based forecasts and beautiful data visualizations",
      //image: "/placeholder.svg?height=300&width=500",
      //tags: ["React", "API Integration", "Chart.js", "CSS3"],
      //liveDemo: "https://weather-dashboard-demo.vercel.app",
      //github: "https://github.com/soundariya-m/weather-dashboard",
      //featured: false,
      //stars: 21,
      //forks: 9,
    //},
    {
      title: "Portfolio Website",
      description: "Responsive personal portfolio showcasing projects, skills, and achievements with modern design",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      liveDemo: "https://portfolio-63b9.onrender.com",
      github: "https://github.com/SoundariyaMathavan/portfolio.git",
      featured: false,
      stars: 12,
      forks: 4,
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 relative bg-gray-800 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 via-transparent to-pink-500/5 animate-pulse"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Code2 className="w-8 h-8 text-blue-500 animate-pulse" />
            <h2 className="text-4xl lg:text-5xl font-bold text-white animate-gradient bg-gradient-to-r from-blue-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <Zap className="w-8 h-8 text-pink-500 animate-bounce" />
          </div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8 animate-fade-in-up delay-200">
            Check out my latest projects with working demos. Feel free to explore the live versions and interact with
            them.
          </p>
          <div className="flex items-center justify-center gap-2 bg-gray-900/50 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-700/50 animate-fade-in-up delay-300 hover:border-blue-500/30 transition-all duration-300 group">
            <Circle className="w-3 h-3 text-green-500 fill-current animate-pulse" />
            <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">
              All projects have live working demos
            </span>
          </div>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.slice(0, 2).map((project, index) => (
            <div
              key={project.title}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700/50 hover:border-blue-500/30 transition-all duration-700 hover:transform hover:scale-[1.02] hover:rotate-1 animate-fade-in-up relative"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Animated Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

              {/* Project Image */}
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Enhanced Live Demo Badge */}
                {project.liveDemo && (
                  <div className="absolute top-4 right-4 animate-fade-in-up delay-500">
                    <div className="flex items-center gap-2 bg-green-500/20 backdrop-blur-sm rounded-full px-3 py-1 border border-green-500/30 hover:bg-green-500/30 transition-all duration-300 group/badge">
                      <Circle className="w-2 h-2 text-green-500 fill-current animate-pulse" />
                      <span className="text-green-400 text-xs font-medium">Live Demo</span>
                      <div className="w-1 h-1 bg-green-500 rounded-full animate-ping"></div>
                    </div>
                  </div>
                )}

                {/* GitHub Stats */}
                <div className="absolute top-4 left-4 flex gap-2 animate-fade-in-up delay-300">
                  <div className="flex items-center gap-1 bg-gray-900/50 backdrop-blur-sm rounded-full px-2 py-1 border border-gray-700/50">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <span className="text-white text-xs">{project.stars}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-gray-900/50 backdrop-blur-sm rounded-full px-2 py-1 border border-gray-700/50">
                    <Code2 className="w-3 h-3 text-blue-500" />
                    <span className="text-white text-xs">{project.forks}</span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8 relative z-10">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300 relative">
                  {project.title}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Enhanced Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 ${tagIndex % 2 === 0 ? "bg-blue-500/20 border-blue-500/30 text-blue-400" : "bg-pink-500/20 border-pink-500/30 text-pink-400"} border rounded-full text-sm font-medium hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in-up`}
                      style={{ animationDelay: `${600 + tagIndex * 100}ms` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Enhanced Action Buttons */}
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    onClick={() => window.open(project.github, "_blank")}
                    className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500 bg-transparent hover:scale-105 transition-all duration-300 group/btn relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-700/0 via-gray-700/50 to-gray-700/0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <Github className="mr-2 h-4 w-4 relative z-10 group-hover/btn:animate-spin" />
                    <span className="relative z-10">GitHub</span>
                  </Button>
                  <Button
                    onClick={() => window.open(project.liveDemo, "_blank")}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-700 hover:to-pink-700 text-white border-0 hover:scale-105 transition-all duration-300 group/btn relative overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-pink-500 to-blue-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <ExternalLink className="mr-2 h-4 w-4 relative z-10 group-hover/btn:animate-bounce" />
                    <span className="relative z-10">View Live Demo</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Projects Grid with Enhanced Animations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(2).map((project, index) => (
            <div
              key={project.title}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/30 transition-all duration-500 hover:transform hover:scale-105 hover:rotate-1 animate-fade-in-up relative"
              style={{ animationDelay: `${400 + index * 150}ms` }}
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"></div>

              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {project.liveDemo && (
                  <div className="absolute top-3 right-3">
                    <div className="flex items-center gap-1 bg-green-500/20 backdrop-blur-sm rounded-full px-2 py-1 border border-green-500/30">
                      <Circle className="w-1.5 h-1.5 text-green-500 fill-current animate-pulse" />
                      <span className="text-green-400 text-xs">Live</span>
                    </div>
                  </div>
                )}

                {/* GitHub Stats */}
                <div className="absolute top-3 left-3 flex gap-1">
                  <div className="flex items-center gap-1 bg-gray-900/50 backdrop-blur-sm rounded-full px-2 py-1">
                    <Star className="w-2 h-2 text-yellow-500 fill-current" />
                    <span className="text-white text-xs">{project.stars}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 relative z-10">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tag}
                      className={`px-2 py-1 ${tagIndex % 2 === 0 ? "bg-blue-500/20 border-blue-500/30 text-blue-400" : "bg-pink-500/20 border-pink-500/30 text-pink-400"} border rounded-full text-xs transition-colors duration-300`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => window.open(project.github, "_blank")}
                    className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent text-xs hover:scale-105 transition-all duration-300"
                  >
                    <Github className="mr-1 h-3 w-3" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => window.open(project.liveDemo, "_blank")}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-700 hover:to-pink-700 text-white text-xs hover:scale-105 transition-all duration-300"
                  >
                    <ExternalLink className="mr-1 h-3 w-3" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
