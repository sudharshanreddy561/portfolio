import React from 'react'
import { motion } from 'framer-motion'
import { FolderGit2, ExternalLink, Github, CheckCircle2, Sparkles, Layers } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: "MCQ Wizard",
    description: "An AI-powered question generator that converts PDF and DOCX documents into customized multiple-choice questions with automated scoring, instant answer explanations, and export features.",
    image: "/assets/HomePage-IFUuI6ZN.png",
    technologies: ["React.js", "Tailwind CSS", "FastAPI", "Google Gemini API", "jsPDF", "html-docx-js"],
    features: [
      "PDF/DOCX to MCQ conversion",
      "Difficulty level selection (Easy, Medium, Hard)",
      "Live interactive quiz preview",
      "Export to PDF and Word DOCX formats",
      "Google Gemini LLM integration"
    ],
    links: {
      github: "https://github.com/surendrapattikonda/mcqwizard",
      demo: "https://mcqwizard-2-aaje.onrender.com"
    },
    status: "Production",
    year: "2024",
    gradient: "from-blue-600 to-purple-600"
  },
  {
    id: 2,
    title: "Smart Agriculture Assistant",
    description: "A smart assistant to detect crop and plant diseases from leaf photos using deep learning CNN models, paired with real-time weather-based pesticide recommendations.",
    image: "/assets/image-DkmeE5QW.png",
    technologies: ["React.js", "FastAPI", "TensorFlow", "CNN", "OpenWeather API", "REST APIs"],
    features: [
      "Accurate plant disease detection",
      "Weather-aware pesticide recommendations",
      "Agri-store locator integration",
      "Live weather forecast data",
      "Computer vision leaf classification"
    ],
    links: {
      github: "https://github.com/surendrapattikonda/agri-assistant",
      demo: "#"
    },
    status: "In Development",
    year: "2025",
    gradient: "from-emerald-600 to-teal-600"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50/70 dark:bg-gray-950 transition-colors duration-300">
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
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-full blur-xl opacity-30 animate-pulse" />
              <div className="relative bg-gradient-to-r from-orange-500 to-red-600 p-3.5 rounded-full shadow-lg text-white">
                <FolderGit2 className="w-8 h-8" />
              </div>
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-gray-900 dark:text-white">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-600">
              Projects
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Real-world applications showcasing full stack development and machine learning capabilities
          </p>
        </motion.div>

        {/* Projects Cards List */}
        <div className="space-y-12">
          {projects.map((project, index) => {
            const isEven = index % 2 === 1
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className={`grid lg:grid-cols-12 gap-0 items-stretch ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Project Screenshot */}
                  <div className={`lg:col-span-6 relative overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center p-6 ${isEven ? 'lg:order-2' : ''}`}>
                    <div className="relative w-full rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 group">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto max-h-[380px] object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src = "/assets/sp1.png"
                        }}
                      />
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold text-white shadow-md bg-gradient-to-r ${project.gradient}`}>
                          {project.status}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-900/80 text-white backdrop-blur-sm">
                          {project.year}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className={`lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between ${isEven ? 'lg:order-1' : ''}`}>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                        {project.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
                        {project.description}
                      </p>

                      {/* Key features */}
                      <div className="mb-6 space-y-2">
                        <h4 className="text-xs uppercase tracking-wider font-semibold text-gray-400 dark:text-gray-400">
                          Key Features
                        </h4>
                        <ul className="space-y-1.5">
                          {project.features.map((feat, i) => (
                            <li key={i} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                              <CheckCircle2 size={16} className="text-green-500 mr-2 flex-shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech stack chips */}
                      <div className="mb-8">
                        <h4 className="text-xs uppercase tracking-wider font-semibold text-gray-400 dark:text-gray-400 mb-2">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-xs font-semibold rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold text-sm hover:opacity-90 transition shadow-sm"
                        >
                          <Github size={18} />
                          Source Code
                        </a>
                      )}
                      {project.links.demo && project.links.demo !== "#" && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-semibold text-sm bg-gradient-to-r ${project.gradient} shadow-md hover:shadow-lg transition`}
                        >
                          <ExternalLink size={18} />
                          Live Demo
                        </a>
                      )}
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
