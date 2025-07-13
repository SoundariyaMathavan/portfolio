"use client"

export function EnhancedSkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      color: "blue",
      skills: [
        { name: "Python", image: "/python.png?height=40&width=40" },
        { name: "Java", image: "/java.png?height=40&width=40" },
        { name: "JavaScript", image: "/javascript.png?height=40&width=40" },
        { name: "CSS", image: "/css.png?height=40&width=40" },
        { name: "SQL", image: "/SQL.png?height=40&width=40" },
        { name: "HTML", image: "/HTML.png?height=40&width=40" },
      ],
    },
    {
      title: "Frameworks",
      color: "pink",
      skills: [
        { name: "React.js", image: "/react.png?height=40&width=40" },
        { name: "Node.js", image: "/node.png?height=40&width=40" },
        { name: "Express.js", image: "/express.png?height=40&width=40" },
        { name: "Bootstrap", image: "/bootstrap.png?height=40&width=40" },
        { name: "Django", image: "/django.png?height=40&width=40" },
        { name: "FastAPI", image: "/fast.png?height=40&width=40" },
         { name: "RestAPI", image: "rest.png?height=40&width=40" },
          { name: "Type Script", image: "/type.png?height=40&width=40" },
           { name: "Next.js", image: "/next.png?height=40&width=40" },
           
      ],
    },
    {
      title: "Tools",
      color: "blue",
      skills: [
        { name: "Git", image: "/git.png?height=40&width=40" },
        { name: "GitHub", image: "/github.png?height=40&width=40" },
        { name: "VSCode", image: "/vs.png?height=40&width=40" },
        { name: "Postman", image: "/postman.png?height=40&width=40" },
         { name: "My SQL Workbench", image: "/sql-work.png?height=40&width=40" },
         { name: "Mongo DB", image: "/mongo.png?height=40&width=40" },
      ],
    },
    {
      title: "Soft Skills",
      color: "pink",
      skills: [
        { name: "Team Management", image: "/tm.png?height=40&width=40" },
        { name: "Leadership", image: "/ld.png?height=40&width=40" },
        { name: "Communication", image: "/communication.png?height=40&width=40" },
        { name: "Adaptability", image: "/adap.png?height=40&width=40" },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 relative bg-gray-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 animate-gradient bg-gradient-to-r from-blue-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto rounded-full animate-pulse"></div>
          <div className="flex justify-center mt-4 space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-100"></div>
            <div className="w-2 h-2 bg-blue-300 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="animate-fade-in-up group"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              {/* Category Header */}
              <div className="relative mb-6">
                <h3
                  className={`text-xl font-bold ${category.color === "blue" ? "text-blue-500" : "text-pink-500"} pb-3 relative`}
                >
                  {category.title}
                  <div
                    className={`absolute bottom-0 left-0 w-0 h-0.5 ${category.color === "blue" ? "bg-blue-500" : "bg-pink-500"} group-hover:w-full transition-all duration-500`}
                  ></div>
                </h3>
                <div
                  className={`absolute -top-2 -left-2 w-1 h-1 ${category.color === "blue" ? "bg-blue-500" : "bg-pink-500"} rounded-full animate-ping opacity-75`}
                ></div>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-${category.color}-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:rotate-1 group/skill cursor-pointer animate-fade-in-up relative overflow-hidden`}
                    style={{ animationDelay: `${categoryIndex * 200 + skillIndex * 100}ms` }}
                  >
                    {/* Hover Glow Effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-${category.color}-500/0 via-${category.color}-500/5 to-${category.color}-500/0 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-500`}
                    ></div>

                    <div className="flex items-center gap-4 relative z-10">
                      {/* Technology Image */}
                      <div className="relative">
                        <div
                          className={`w-10 h-10 rounded-lg overflow-hidden border border-gray-600/50 group-hover/skill:border-${category.color}-500/50 transition-all duration-300 group-hover/skill:shadow-[0_0_20px_rgba(${category.color === "blue" ? "59,130,246" : "236,72,153"},0.3)]`}
                        >
                          <img
                            src={skill.image || "/placeholder.svg"}
                            alt={skill.name}
                            className="w-full h-full object-cover group-hover/skill:scale-110 transition-transform duration-500"
                          />
                        </div>
                        {/* Floating Dot */}
                        <div
                          className={`absolute -top-1 -right-1 w-3 h-3 ${category.color === "blue" ? "bg-blue-500" : "bg-pink-500"} rounded-full opacity-0 group-hover/skill:opacity-100 animate-pulse transition-opacity duration-300`}
                        ></div>
                      </div>

                      {/* Skill Name */}
                      <div className="flex-1">
                        <span className="text-gray-300 group-hover/skill:text-white transition-colors duration-300 font-medium">
                          {skill.name}
                        </span>
                        {/* Animated Progress Bar */}
                        <div className="w-full h-1 bg-gray-700 rounded-full mt-2 overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${category.color === "blue" ? "from-blue-500 to-blue-400" : "from-pink-500 to-pink-400"} rounded-full transform -translate-x-full group-hover/skill:translate-x-0 transition-transform duration-1000 ease-out`}
                          ></div>
                        </div>
                      </div>

                      {/* Animated Arrow */}
                      <div className="transform translate-x-2 opacity-0 group-hover/skill:translate-x-0 group-hover/skill:opacity-100 transition-all duration-300">
                        <div
                          className={`w-2 h-2 border-t-2 border-r-2 ${category.color === "blue" ? "border-blue-500" : "border-pink-500"} transform rotate-45`}
                        ></div>
                      </div>
                    </div>

                    {/* Ripple Effect */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300">
                      <div
                        className={`absolute top-1/2 left-1/2 w-0 h-0 ${category.color === "blue" ? "bg-blue-500/20" : "bg-pink-500/20"} rounded-full group-hover/skill:w-full group-hover/skill:h-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Category Footer Animation */}
              <div className="mt-6 flex justify-center">
                <div className="flex space-x-1">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-1 h-1 ${category.color === "blue" ? "bg-blue-500/50" : "bg-pink-500/50"} rounded-full animate-pulse`}
                      style={{ animationDelay: `${categoryIndex * 200 + i * 200}ms` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Skills Animation */}
        <div className="mt-16 relative h-32 overflow-hidden">
          <div className="absolute inset-0 flex items-center">
            <div className="flex animate-scroll space-x-8">
              {skillCategories
                .flatMap((cat) => cat.skills)
                .map((skill, index) => (
                  <div
                    key={`floating-${index}`}
                    className={`flex-shrink-0 w-16 h-16 bg-gray-800/30 backdrop-blur-sm rounded-full border border-gray-700/50 hover:border-${index % 2 === 0 ? "blue" : "pink"}-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110`}
                  >
                    <img
                      src={skill.image || "/placeholder.svg"}
                      alt={skill.name}
                      className="w-8 h-8 object-cover rounded"
                    />
                  </div>
                ))}
              {/* Duplicate for seamless loop */}
              {skillCategories
                .flatMap((cat) => cat.skills)
                .map((skill, index) => (
                  <div
                    key={`floating-dup-${index}`}
                    className={`flex-shrink-0 w-16 h-16 bg-gray-800/30 backdrop-blur-sm rounded-full border border-gray-700/50 hover:border-${index % 2 === 0 ? "blue" : "pink"}-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110`}
                  >
                    <img
                      src={skill.image || "/placeholder.svg"}
                      alt={skill.name}
                      className="w-8 h-8 object-cover rounded"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
