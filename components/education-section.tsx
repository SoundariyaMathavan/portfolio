import { GraduationCap, Calendar, Award } from "lucide-react"

export function EducationSection() {
  const education = [
    {
      institution: "KONGU ENGINEERING COLLEGE",
      degree: "Bachelor of Computer Science and Engineering",
      grade: "8.16 CGPA (III sem)",
      period: "2023-2027 (expected)",
      icon: GraduationCap,
      color: "cyan",
    },
    {
      institution: "ANITHA KUMRAN MATRIC AND HR SEC SCHOOL",
      degree: "HSC",
      grade: "82.33%",
      period: "2021-2022",
      icon: Award,
      color: "purple",
    },
    {
      institution: "ANITHA KUMRAN MATRIC AND HR SEC SCHOOL",
      degree: "SSLC",
      grade: "84.4%",
      period: "2019-2020",
      icon: Award,
      color: "pink",
    },
  ]

  return (
    <section id="education" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/20 shadow-[0_0_30px_rgba(128,0,255,0.1)] hover:shadow-[0_0_50px_rgba(128,0,255,0.2)] transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className={`p-4 rounded-full bg-${edu.color}-500/20 border border-${edu.color}-400/30`}>
                  <edu.icon className={`h-8 w-8 text-${edu.color}-400`} />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{edu.institution}</h3>
                  <p className="text-lg text-gray-300 mb-2">{edu.degree}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-400">{edu.period}</span>
                    </div>
                    <div className={`px-4 py-2 bg-${edu.color}-500/20 border border-${edu.color}-400/30 rounded-full`}>
                      <span className={`text-${edu.color}-400 font-semibold`}>{edu.grade}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
