import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Code2, 
  Cpu, 
  Layout, 
  Server, 
  BrainCircuit, 
  Database,
  Layers,
  Sparkles
} from 'lucide-react'

// Skill list definition matching the portfolio
const skillsData = [
  // Programming
  { name: "C", category: "programming", color: "from-blue-500 to-blue-700", level: 90 },
  { name: "C++", category: "programming", color: "from-blue-600 to-blue-800", level: 95 },
  { name: "Python", category: "programming", color: "from-yellow-400 to-blue-600", level: 90 },
  { name: "JavaScript", category: "programming", color: "from-yellow-500 to-yellow-600", level: 85 },
  // Frontend
  { name: "HTML5", category: "frontend", color: "from-orange-500 to-orange-600", level: 95 },
  { name: "CSS3", category: "frontend", color: "from-blue-400 to-blue-600", level: 90 },
  { name: "React.js", category: "frontend", color: "from-cyan-500 to-blue-600", level: 90 },
  { name: "Tailwind CSS", category: "frontend", color: "from-teal-400 to-cyan-500", level: 92 },
  // Backend
  { name: "Node.js", category: "backend", color: "from-green-500 to-green-700", level: 85 },
  { name: "Express.js", category: "backend", color: "from-gray-500 to-gray-700", level: 85 },
  { name: "FastAPI", category: "backend", color: "from-green-400 to-green-600", level: 80 },
  { name: "REST APIs", category: "backend", color: "from-purple-500 to-purple-700", level: 90 },
  // ML / AI
  { name: "TensorFlow", category: "ml", color: "from-orange-500 to-orange-700", level: 82 },
  { name: "OpenCV", category: "ml", color: "from-blue-500 to-blue-700", level: 80 },
  { name: "NLTK", category: "ml", color: "from-green-500 to-green-700", level: 78 },
  // Database
  { name: "SQL", category: "database", color: "from-blue-400 to-indigo-600", level: 88 },
  { name: "MongoDB", category: "database", color: "from-emerald-500 to-green-700", level: 85 },
]

const categories = [
  { id: "all", label: "All Skills", icon: Layers },
  { id: "programming", label: "Languages", icon: Code2 },
  { id: "frontend", label: "Frontend", icon: Layout },
  { id: "backend", label: "Backend", icon: Server },
  { id: "ml", label: "AI & ML", icon: BrainCircuit },
  { id: "database", label: "Database", icon: Database },
]

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredSkills = activeTab === "all" 
    ? skillsData 
    : skillsData.filter((s) => s.category === activeTab)

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-xl opacity-30 animate-pulse" />
              <div className="relative bg-gradient-to-r from-cyan-500 to-blue-600 p-3.5 rounded-full shadow-lg text-white">
                <Cpu className="w-8 h-8" />
              </div>
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-gray-900 dark:text-white">
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600">
              Skills
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Tools, frameworks, and programming languages I use to build scalable products
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon
            const isSelected = activeTab === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isSelected
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md scale-105"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                <Icon size={16} />
                <span>{cat.label}</span>
              </button>
            )
          })}
        </div>

        {/* Skills Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative bg-gray-50 dark:bg-gray-800/90 rounded-2xl p-5 border border-gray-200 dark:border-gray-700/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center overflow-hidden"
              >
                {/* Glow border background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                {/* Skill Icon / Avatar */}
                <div className={`w-12 h-12 rounded-xl mb-3 flex items-center justify-center bg-gradient-to-r ${skill.color} text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <Sparkles size={20} />
                </div>

                {/* Skill Name */}
                <h3 className="font-bold text-gray-800 dark:text-gray-100 text-sm sm:text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {skill.name}
                </h3>

                {/* Category tag */}
                <span className="text-[11px] font-medium uppercase tracking-wider text-gray-600 dark:text-gray-300 mt-1">
                  {skill.category}
                </span>

                {/* Level progress bar */}
                <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-full mt-3 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}
