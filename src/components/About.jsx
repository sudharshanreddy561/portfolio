import React from 'react'
import { motion } from 'framer-motion'
import { User, Users, Brain, Award, Code, GraduationCap, MapPin, Calendar } from 'lucide-react'

export default function About() {
  const highlights = [
    {
      title: "Codes Club Lead",
      desc: "Mentoring peers in coding & algorithms",
      icon: Users,
      color: "text-cyan-600 dark:text-cyan-400",
      bg: "bg-cyan-50 dark:bg-cyan-900/20 border-cyan-200 dark:border-cyan-800"
    },
    {
      title: "AI & ML Projects",
      desc: "MCQ Wizard & Agri Assistant",
      icon: Brain,
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800"
    },
    {
      title: "1st Prize Winner",
      desc: "Advitiya, Concurrence & Dillana contests",
      icon: Award,
      color: "text-purple-600 dark:text-purple-400",
      bg: "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800"
    },
    {
      title: "Competitive Coder",
      desc: "1200+ coding problems solved",
      icon: Code,
      color: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800"
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          {/* Circular badge */}
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse" />
              <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 p-3.5 rounded-full shadow-lg text-white">
                <User className="w-8 h-8" />
              </div>
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            <span className="text-gray-900 dark:text-white">About </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient-x">
              Me
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            Passionate developer crafting digital experiences with code and creativity
          </p>

          <div className="flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-sm opacity-70" />
            </div>
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left: About Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden group">
              <div className="relative h-64 sm:h-72 overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-gray-700 dark:to-gray-800">
                <img
                  src="/assets/p3-DbjX5-UB.jpg"
                  alt="Surendra"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => { e.target.src = "/assets/sp1.png" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent flex items-end p-6">
                  <div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white shadow-sm inline-block mb-2">
                      Computer Science & Data Science
                    </span>
                    <h3 className="text-2xl font-bold text-white">
                      Pattikonda Surendra
                    </h3>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <GraduationCap className="w-4 h-4 mr-2 text-blue-500" />
                  <span>RGMCET, Nandyal (CGPA: 8.23)</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <MapPin className="w-4 h-4 mr-2 text-red-500" />
                  <span>Andhra Pradesh, India</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <Calendar className="w-4 h-4 mr-2 text-purple-500" />
                  <span>Graduating July 2026</span>
                </div>

                <div className="pt-2">
                  <a
                    href="#contact"
                    className="block text-center w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium text-sm shadow hover:shadow-md hover:from-blue-700 hover:to-purple-700 transition"
                  >
                    Get in Touch with Me
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Bio & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Full Stack Developer & Machine Learning Enthusiast
            </h3>

            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
              <p>
                Hi, I'm{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  Surendra
                </span>{" "}
                — a passionate Full Stack Developer and Machine Learning Enthusiast with a knack for turning ideas into impactful digital solutions.
              </p>
              <p>
                Currently pursuing my B.Tech in Computer Science & Engineering (Data Science), I specialize in building scalable, user-friendly web applications and integrating AI/ML models into real-world products.
              </p>
              <p>
                I actively lead peer learning initiatives as the Lead of the Codes Club at college, organizing coding competitions, mentoring junior developers, and constantly honing my algorithmic problem-solving skills across global competitive programming platforms.
              </p>
            </div>

            {/* 4 Feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, idx) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={idx}
                    className={`flex items-start space-x-3 p-4 rounded-xl border bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm transition hover:shadow-md ${item.bg}`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Icon className={`flex-shrink-0 w-6 h-6 mt-0.5 ${item.color}`} />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
