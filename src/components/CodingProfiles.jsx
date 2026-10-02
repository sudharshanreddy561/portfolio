import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Trophy, ExternalLink, Award, CheckCircle2, TrendingUp } from 'lucide-react'

// Custom animated counter component
function Counter({ target }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 1500 // ms
    const stepTime = 20
    const steps = duration / stepTime
    const increment = target / steps

    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [isInView, target])

  return <span ref={ref}>{count}+</span>
}

const profiles = [
  {
    name: "LeetCode",
    color: "from-amber-500 to-yellow-500",
    link: "https://leetcode.com/u/surendra_45/",
    problems: 344,
    achievements: [
      "344 problems solved (136 Easy, 179 Medium, 29 Hard)",
      "Contest rating: 1450 (Top 62.73%)",
      "340 submissions in the last year"
    ]
  },
  {
    name: "GeeksforGeeks",
    color: "from-emerald-500 to-green-600",
    link: "https://www.geeksforgeeks.org/user/pattikondasurendra/",
    problems: 285,
    achievements: [
      "285 problems solved (116 Easy, 159 Medium, 10 Hard)",
      "Institute Rank: 2 at RGMCET",
      "Top 10% in weekly contests"
    ]
  },
  {
    name: "Code360",
    color: "from-blue-500 to-indigo-600",
    link: "https://www.naukri.com/code360/profile/Surendra07",
    problems: 700,
    achievements: [
      "Completed Advanced DSA & C++ Track",
      "Solved 700+ coding problems",
      "3× Monthly College Topper (78 average participants)"
    ]
  },
  {
    name: "HackerRank",
    color: "from-teal-500 to-emerald-600",
    link: "https://www.hackerrank.com/profile/pattikondasuren1",
    problems: 200,
    achievements: [
      "Gold badge (5-star) in C++",
      "2-star Python coder",
      "2 star in Problem Solving"
    ]
  }
]

export default function CodingProfiles() {
  return (
    <section id="coding-profiles" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse" />
              <div className="relative bg-gradient-to-r from-indigo-500 to-purple-600 p-3.5 rounded-full shadow-lg text-white">
                <Trophy className="w-8 h-8" />
              </div>
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-gray-900 dark:text-white">
            Coding{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500">
              Profiles
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Consistent problem solving, algorithmic challenges, and competitive achievements
          </p>
        </motion.div>

        {/* Profiles Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {profiles.map((profile, idx) => (
            <motion.div
              key={profile.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-7 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${profile.color} flex items-center justify-center text-white shadow-md font-bold text-lg`}>
                      {profile.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {profile.name}
                      </h3>
                      <p className="text-xs text-gray-600 dark:text-gray-300 font-medium">
                        Active Contributor
                      </p>
                    </div>
                  </div>

                  {/* Counter Badge */}
                  <div className={`px-3.5 py-1.5 rounded-full bg-gradient-to-r ${profile.color} text-white font-bold text-sm shadow-sm`}>
                    <Counter target={profile.problems} /> Solved
                  </div>
                </div>

                {/* Achievements List */}
                <div className="space-y-2.5 my-6">
                  {profile.achievements.map((item, i) => (
                    <div key={i} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                      <CheckCircle2 size={16} className="text-blue-500 dark:text-blue-400 mr-2.5 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* View Profile Link */}
              <a
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 font-semibold text-sm border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 transition"
              >
                <span>View {profile.name} Profile</span>
                <ExternalLink size={16} />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
