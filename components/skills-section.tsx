import { Code, Palette, Globe, Users, Target, Heart } from "lucide-react"

export function SkillsSection() {
  const technicalSkills = [
    { category: "Programming Languages", skills: ["C", "Java", "SQL", "JavaScript"], icon: Code, color: "cyan" },
    {
      category: "Web Development",
      skills: ["HTML", "CSS", "Bootstrap5", "React", "Node.js", "Express.js"],
      icon: Globe,
      color: "purple",
    },
    { category: "Design", skills: ["Web Design", "UI/UX"], icon: Palette, color: "pink" },
  ]

  const softSkills = [
    { skill: "Team Management", icon: Users, color: "cyan" },
    { skill: "Supervision and Leadership", icon: Target, color: "purple" },
    { skill: "Friendly, Positive Attitude", icon: Heart, color: "pink" },
  ]

  const languages = [
    { language: "English", level: "Fluent", color: "cyan" },
    { language: "Tamil", level: "Native", color: "purple" },
  ]

  const interests = ["Cloud Computing", "Web Technology"]

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((category, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20 shadow-[0_0_20px_rgba(0,255,255,0.1)] hover:shadow-[0_0_30px_rgba(0,255,255,0.2)] transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`p-2 rounded-lg bg-${category.color}-500/20 border border-${category.color}-400/30`}
                    >
                      <category.icon className={`h-5 w-5 text-${category.color}-400`} />
                    </div>
                    <h4 className="text-lg font-semibold text-white">{category.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1 bg-${category.color}-500/20 border border-${category.color}-400/30 rounded-full text-${category.color}-400 text-sm font-medium`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills, Languages, Interests */}
          <div className="space-y-8">
            {/* Soft Skills */}
            <div>
              <h3 className="text-2xl font-bold text-purple-400 mb-6">Soft Skills</h3>
              <div className="space-y-4">
                {softSkills.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-purple-400/20 shadow-[0_0_20px_rgba(128,0,255,0.1)] hover:shadow-[0_0_30px_rgba(128,0,255,0.2)] transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-${item.color}-500/20 border border-${item.color}-400/30`}>
                        <item.icon className={`h-4 w-4 text-${item.color}-400`} />
                      </div>
                      <span className="text-white font-medium">{item.skill}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-2xl font-bold text-pink-400 mb-6">Languages</h3>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-pink-400/20 shadow-[0_0_20px_rgba(255,0,128,0.1)] hover:shadow-[0_0_30px_rgba(255,0,128,0.2)] transition-all duration-300"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{lang.language}</span>
                      <span
                        className={`px-3 py-1 bg-${lang.color}-500/20 border border-${lang.color}-400/30 rounded-full text-${lang.color}-400 text-sm font-medium`}
                      >
                        {lang.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Interests</h3>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-400 font-medium hover:bg-cyan-500/30 transition-colors duration-300"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
