export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20 shadow-[0_0_30px_rgba(0,255,255,0.1)] hover:shadow-[0_0_50px_rgba(0,255,255,0.2)] transition-all duration-300">
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                I am a passionate Pre Final Year Computer Science engineering student. Interested in coding and fullstack
                development, I aim to apply my knowledge to real-world challenges.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Driven by innovation, I strive to contribute to impactful technology projects and create solutions that
                make a difference.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey in computer science has been marked by continuous learning and exploration of emerging
                technologies. I believe in the power of technology to solve complex problems and improve lives.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/sound.png"
              alt="Coding workspace"
              className="w-full h-80 object-cover rounded-2xl border border-purple-400/20 shadow-[0_0_30px_rgba(128,0,255,0.1)]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
