import { Trophy, Award, Star } from "lucide-react"

export function AchievementsSection() {
  const achievements = [
    {
      title: "Tech Write Winners",
      organization: "Conducted by IIT Shastra",
      description:
        "Recognized for outstanding technical writing skills and innovative content creation. This achievement highlights my ability to communicate complex technical concepts effectively and contribute to the tech community through quality documentation and articles.",
      year: "2025",
      icon: Trophy,
      color: "cyan",
    },
    {
      title: "Annual Day Prize Winners",
      organization: "College Achievement",
      description:
        "Awarded for exceptional performance and contribution to college activities. This recognition reflects my dedication to academic excellence and active participation in extracurricular activities that enhance the college community.",
      year: "2025",
      icon: Award,
      color: "purple",
    },
  ]

  return (
    <section id="achievements" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/20 shadow-[0_0_30px_rgba(255,255,0,0.1)] hover:shadow-[0_0_50px_rgba(255,255,0,0.2)] transition-all duration-300 hover:transform hover:scale-[1.05]"
            >
              <div className="flex items-start gap-6">
                <div
                  className={`p-4 rounded-full bg-${achievement.color}-500/20 border border-${achievement.color}-400/30`}
                >
                  <achievement.icon className={`h-8 w-8 text-${achievement.color}-400`} />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                  <p className="text-gray-300 mb-4">{achievement.organization}</p>
                  <p className="text-gray-400 leading-relaxed mb-4 text-sm">{achievement.description}</p>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span className="text-yellow-400 font-semibold">{achievement.year}</span>
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
