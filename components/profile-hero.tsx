import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail } from "lucide-react"

export function ProfileHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Neon grid background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Floating neon orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-500"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Top Section - Profile & Description */}
        <div className="mb-16 min-h-screen lg:min-h-0 lg:pt-20">
          {/* Profile Image - Bigger Width */}
          <div className="flex justify-center mb-8 animate-fade-in-up">
            <div className="relative group">
              <div className="w-80 h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] rounded-3xl overflow-hidden border-4 border-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 shadow-[0_0_50px_rgba(0,255,255,0.3)] group-hover:shadow-[0_0_80px_rgba(0,255,255,0.5)] transition-all duration-700 transform group-hover:scale-105 group-hover:rotate-2">
                <img
                  src="/placeholder.svg?height=448&width=448"
                  alt="Soundariya M Profile"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              {/* Animated decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full animate-bounce delay-100"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full animate-bounce delay-300"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-pink-400 rounded-full animate-ping delay-500"></div>
              <div className="absolute top-1/4 -right-8 w-5 h-5 bg-yellow-400 rounded-full animate-pulse delay-700"></div>
            </div>
          </div>

          {/* Name Section - Left and Right Layout */}
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mb-8 animate-fade-in-up delay-200">
            {/* Left Side - Name */}
            <div className="text-center lg:text-left mb-4 lg:mb-0">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                <span className="typing-animation">SOUNDARIYA M</span>
              </h1>
            </div>

            {/* Right Side - Year + Department */}
            <div className="text-center lg:text-right">
              <p className="text-xl lg:text-2xl xl:text-3xl text-cyan-300 font-light tracking-wider">
                <span className="typing-animation-delay">II YEAR</span>
              </p>
              <p className="text-lg lg:text-xl text-purple-300 font-light tracking-wide mt-2">
                <span className="typing-animation-delay-2">COMPUTER SCIENCE ENGINEERING</span>
              </p>
            </div>
          </div>

          {/* Objective Section */}
          <div className="text-center max-w-4xl mx-auto mb-12 animate-fade-in-up delay-400">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">
              Objective
            </h2>
            <div className="space-y-4">
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                I am a passionate{" "}
                <span className="text-cyan-400 font-semibold">IInd year Computer Science engineering student</span>.
                Interested in <span className="text-purple-400 font-semibold">coding and fullstack development</span>, I
                aim to apply my knowledge to real-world challenges.
              </p>
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                Driven by <span className="text-pink-400 font-semibold">innovation</span>, I strive to contribute to
                <span className="text-yellow-400 font-semibold"> impactful technology projects</span> and create
                solutions that make a difference in the tech industry.
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 animate-fade-in-up delay-600">
            <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-500 hover:transform hover:scale-110 hover:rotate-2">
              <div className="text-2xl lg:text-3xl font-bold text-cyan-400 mb-1 counter-animation">8.16</div>
              <div className="text-sm text-gray-300">CGPA</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/20 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-purple-400/30 hover:border-purple-400/60 transition-all duration-500 hover:transform hover:scale-110 hover:rotate-2">
              <div className="text-2xl lg:text-3xl font-bold text-purple-400 mb-1 counter-animation">15+</div>
              <div className="text-sm text-gray-300">Projects</div>
            </div>
            <div className="bg-gradient-to-br from-pink-500/10 to-pink-600/20 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-pink-400/30 hover:border-pink-400/60 transition-all duration-500 hover:transform hover:scale-110 hover:rotate-2">
              <div className="text-2xl lg:text-3xl font-bold text-pink-400 mb-1 counter-animation">2+</div>
              <div className="text-sm text-gray-300">Awards</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/20 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-500 hover:transform hover:scale-110 hover:rotate-2">
              <div className="text-2xl lg:text-3xl font-bold text-yellow-400 mb-1 counter-animation">8+</div>
              <div className="text-sm text-gray-300">Skills</div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="animate-fade-in-up delay-800 mb-8">
            <div className="flex flex-wrap justify-center gap-3">
              {["React", "Node.js", "Java", "SQL", "HTML/CSS", "JavaScript", "Bootstrap", "Express.js"].map(
                (tech, index) => (
                  <span
                    key={tech}
                    className={`px-4 py-2 bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-full text-sm font-medium border transition-all duration-500 hover:transform hover:scale-110 hover:rotate-1 animate-fade-in-up`}
                    style={{
                      animationDelay: `${800 + index * 100}ms`,
                      borderColor:
                        index % 3 === 0
                          ? "rgba(6, 182, 212, 0.3)"
                          : index % 3 === 1
                            ? "rgba(168, 85, 247, 0.3)"
                            : "rgba(236, 72, 153, 0.3)",
                      color:
                        index % 3 === 0
                          ? "rgb(6, 182, 212)"
                          : index % 3 === 1
                            ? "rgb(168, 85, 247)"
                            : "rgb(236, 72, 153)",
                    }}
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-1000">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <div className="flex gap-3">
              <Button
                size="lg"
                variant="outline"
                className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 bg-transparent hover:scale-110 transition-all duration-300"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-400/50 text-purple-400 hover:bg-purple-400/10 hover:border-purple-400 bg-transparent hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-pink-400/50 text-pink-400 hover:bg-pink-400/10 hover:border-pink-400 bg-transparent hover:scale-110 transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Featured Projects Section - Bigger Images */}
        <div className="mb-20 animate-fade-in-up delay-1200">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: "E-Commerce Platform", tech: "React, Node.js", color: "cyan" },
              { title: "Task Management App", tech: "JavaScript, SQL", color: "purple" },
              { title: "Portfolio Website", tech: "HTML, CSS, Bootstrap", color: "pink" },
              { title: "Chat Application", tech: "Express.js, Socket.io", color: "yellow" },
              { title: "Weather Dashboard", tech: "React, API Integration", color: "green" },
              { title: "Blog Platform", tech: "Full Stack", color: "blue" },
            ].map((project, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br backdrop-blur-sm rounded-3xl overflow-hidden border transition-all duration-700 hover:transform hover:scale-105 hover:rotate-1 animate-fade-in-up cursor-pointer`}
                style={{
                  animationDelay: `${1400 + index * 150}ms`,
                  background: `linear-gradient(135deg, rgba(${
                    project.color === "cyan"
                      ? "6, 182, 212"
                      : project.color === "purple"
                        ? "168, 85, 247"
                        : project.color === "pink"
                          ? "236, 72, 153"
                          : project.color === "yellow"
                            ? "234, 179, 8"
                            : project.color === "green"
                              ? "34, 197, 94"
                              : "59, 130, 246"
                  }, 0.1), rgba(${
                    project.color === "cyan"
                      ? "6, 182, 212"
                      : project.color === "purple"
                        ? "168, 85, 247"
                        : project.color === "pink"
                          ? "236, 72, 153"
                          : project.color === "yellow"
                            ? "234, 179, 8"
                            : project.color === "green"
                              ? "34, 197, 94"
                              : "59, 130, 246"
                  }, 0.2))`,
                  borderColor: `rgba(${
                    project.color === "cyan"
                      ? "6, 182, 212"
                      : project.color === "purple"
                        ? "168, 85, 247"
                        : project.color === "pink"
                          ? "236, 72, 153"
                          : project.color === "yellow"
                            ? "234, 179, 8"
                            : project.color === "green"
                              ? "34, 197, 94"
                              : "59, 130, 246"
                  }, 0.3)`,
                  boxShadow: `0 0 30px rgba(${
                    project.color === "cyan"
                      ? "6, 182, 212"
                      : project.color === "purple"
                        ? "168, 85, 247"
                        : project.color === "pink"
                          ? "236, 72, 153"
                          : project.color === "yellow"
                            ? "234, 179, 8"
                            : project.color === "green"
                              ? "34, 197, 94"
                              : "59, 130, 246"
                  }, 0.1)`,
                }}
              >
                <div className="aspect-video rounded-t-3xl overflow-hidden">
                  <img
                    src={`/placeholder.svg?height=300&width=400`}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{project.tech}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs px-3 py-1 rounded-full bg-gray-700/50 text-gray-300">View Project</span>
                    <div
                      className="w-2 h-2 rounded-full animate-pulse"
                      style={{
                        backgroundColor: `rgb(${
                          project.color === "cyan"
                            ? "6, 182, 212"
                            : project.color === "purple"
                              ? "168, 85, 247"
                              : project.color === "pink"
                                ? "236, 72, 153"
                                : project.color === "yellow"
                                  ? "234, 179, 8"
                                  : project.color === "green"
                                    ? "34, 197, 94"
                                    : "59, 130, 246"
                        })`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Gallery */}
        <div className="mb-20 animate-fade-in-up delay-1800">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">
              Achievements & Recognition
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-yellow-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Tech Write Winners", org: "Conducted by IIT Shastra", year: "2025", color: "pink" },
              { title: "Annual Day Prize Winners", org: "College Achievement", year: "2025", color: "yellow" },
            ].map((achievement, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br backdrop-blur-sm rounded-3xl p-8 border transition-all duration-700 hover:transform hover:scale-105 hover:rotate-1 animate-fade-in-up`}
                style={{
                  animationDelay: `${2000 + index * 200}ms`,
                  background: `linear-gradient(135deg, rgba(${achievement.color === "pink" ? "236, 72, 153" : "234, 179, 8"}, 0.1), rgba(${achievement.color === "pink" ? "236, 72, 153" : "234, 179, 8"}, 0.2))`,
                  borderColor: `rgba(${achievement.color === "pink" ? "236, 72, 153" : "234, 179, 8"}, 0.3)`,
                  boxShadow: `0 0 40px rgba(${achievement.color === "pink" ? "236, 72, 153" : "234, 179, 8"}, 0.1)`,
                }}
              >
                <div className="aspect-video rounded-2xl overflow-hidden mb-6 border border-gray-600/30">
                  <img
                    src={`/placeholder.svg?height=200&width=350`}
                    alt={achievement.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-pink-400 transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-300">{achievement.org}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm px-4 py-2 rounded-full bg-gray-700/50 text-gray-300">
                      {achievement.year}
                    </span>
                    <div
                      className="w-3 h-3 rounded-full animate-pulse"
                      style={{
                        backgroundColor: `rgb(${achievement.color === "pink" ? "236, 72, 153" : "234, 179, 8"})`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
