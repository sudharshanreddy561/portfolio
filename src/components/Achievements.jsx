import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, Medal, Users, Calendar, ChevronDown, ChevronUp, Sparkles, CheckCircle2 } from 'lucide-react'

const achievementsData = [
  {
    id: 1,
    rank: "1st",
    title: "Advitiya 2k25",
    organization: "Data Science Department, RGMCET",
    monthYear: "27th & 28th January 2025",
    teamSize: "Duo",
    description: "Secured 1st place in a high-stakes competitive coding contest designed to test problem-solving abilities under time constraints.",
    rounds: [
      { name: "Round 1", duration: "30 min", description: "MCQs on C language & computer basics" },
      { name: "Round 2", duration: "45 min", description: "3 Coding Problems – Easy, Medium, Hard (C only)" },
      { name: "Round 3", duration: "30 min", description: "1 Advanced Coding Problem (C only)" }
    ],
    skills: ["C Programming", "Problem Solving", "Algorithm Design"],
    gradient: "from-blue-600 to-purple-600",
    image: "/assets/advitiya-CTEquuYU.png"
  },
  {
    id: 2,
    rank: "1st",
    title: "Concurrence 2k25",
    organization: "CSE Department, RGMCET",
    monthYear: "18-22 February 2025",
    teamSize: "Solo",
    description: "Secured 1st place among peers in a multi-round coding contest that tested programming fundamentals and problem-solving skills.",
    rounds: [
      { name: "Round 1", duration: "25 min", description: "MCQs on Programming Fundamentals" },
      { name: "Round 2", duration: "25 min", description: "2 Coding Problems – Easy & Medium" },
      { name: "Round 3", duration: "25 min", description: "1 Hard Coding Problem" }
    ],
    skills: ["Analytical Ability", "Time Management", "Coding Expertise"],
    gradient: "from-amber-500 to-orange-600",
    image: "/assets/cse-D1JICpp2.jpeg"
  },
  {
    id: 3,
    rank: "1st",
    title: "Dillana 2K25 Coding Contest",
    organization: "SVR Engineering College",
    monthYear: "21 & 22 March 2025",
    teamSize: "Team of 3",
    description: "Achieved 1st rank in an inter-college coding competition that tested programming knowledge and problem-solving efficiency.",
    rounds: [
      { name: "Round 1", duration: "30 min", description: "MCQs on C language and core CS" },
      { name: "Round 2", duration: "45 min", description: "3 Easy-level coding problems" },
      { name: "Round 3", duration: "45 min", description: "2 Medium/Hard coding problems" }
    ],
    skills: ["Team Collaboration", "Inter-college Competition", "C Programming"],
    gradient: "from-emerald-500 to-teal-600",
    image: "/assets/svr-CUpl6aXn.png"
  }
]

export default function Achievements() {
  const [expandedId, setExpandedId] = useState(1)

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full blur-xl opacity-30 animate-pulse" />
              <div className="relative bg-gradient-to-r from-yellow-500 to-amber-600 p-3.5 rounded-full shadow-lg text-white">
                <Medal className="w-8 h-8" />
              </div>
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-gray-900 dark:text-white">
            Honors &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500">
              Achievements
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hackathons, technical competitions, and competitive coding victories
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {achievementsData.map((item, idx) => {
            const isExpanded = expandedId === item.id
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Certificate/Contest Banner */}
                  <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-700">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { e.target.src = "/assets/sp1.png" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent flex items-end p-4 justify-between">
                      <span className={`px-3 py-1 rounded-full text-xs font-black uppercase text-white shadow-md bg-gradient-to-r ${item.gradient}`}>
                        🏆 {item.rank} Place
                      </span>
                      <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-black/60 text-white backdrop-blur-sm">
                        {item.teamSize}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
                      {item.organization}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-300 flex items-center gap-1.5 mb-4">
                      <Calendar size={13} />
                      {item.monthYear}
                    </p>

                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Skills pills */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {item.skills.map((s, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-600"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    {/* Expandable Contest Rounds Breakdown */}
                    <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                      <button
                        onClick={() => toggleExpand(item.id)}
                        className="w-full flex items-center justify-between text-xs font-bold text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 py-1 transition"
                      >
                        <span>Contest Rounds Breakdown ({item.rounds.length})</span>
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-3 space-y-2.5"
                          >
                            {item.rounds.map((round, rIdx) => (
                              <div
                                key={rIdx}
                                className="p-2.5 rounded-lg bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700/80 text-xs"
                              >
                                <div className="flex items-center justify-between font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                  <span>{round.name}</span>
                                  <span className="text-gray-600 dark:text-gray-300 font-normal">{round.duration}</span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 leading-tight">
                                  {round.description}
                                </p>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
