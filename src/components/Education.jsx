import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, ExternalLink, BookOpen, Award } from 'lucide-react'

const educationData = [
  {
    degree: "Bachelor of Technology in Computer Science",
    specialization: "Data Science Specialization",
    institution: "RGM College of Engineering and Technology",
    location: "Nandyal, Andhra Pradesh",
    duration: "Oct 2022 - Present (Graduation: July 2026)",
    score: "8.23 / 10 CGPA",
    coursework: ["Data Structures & Algorithms", "Machine Learning", "Artificial Intelligence", "Computer Vision", "Data Science", "Big Data Analytics"],
    website: "https://rgmcet.edu.in",
    image: "/assets/rgm-TItZD5T5.jpg",
    gradient: "from-blue-600 to-indigo-600"
  },
  {
    degree: "Intermediate (MPC)",
    specialization: "Mathematics, Physics, Chemistry",
    institution: "MJPAPBCWR Junior College",
    location: "Lepakshi, Andhra Pradesh",
    duration: "Sep 2020 - May 2022",
    score: "89% Aggregate",
    coursework: ["Mathematics", "Physics", "Chemistry", "English", "Telugu"],
    website: "https://schools.org.in/anantapur/28225600316/mjpapbcwrs-lepakshi.html",
    image: "/assets/mjp1-B_8CC2kz.jpg",
    gradient: "from-emerald-600 to-teal-600"
  }
]

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50/60 dark:bg-gray-950 transition-colors duration-300">
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
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur-xl opacity-30 animate-pulse" />
              <div className="relative bg-gradient-to-r from-blue-500 to-indigo-600 p-3.5 rounded-full shadow-lg text-white">
                <GraduationCap className="w-8 h-8" />
              </div>
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-gray-900 dark:text-white">
            Academic{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              Education
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My educational background and foundational milestones
          </p>
        </motion.div>

        {/* Education Timeline Cards */}
        <div className="space-y-8">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-12 gap-0">
                
                {/* Campus / Institution image */}
                <div className="md:col-span-4 relative overflow-hidden bg-gray-100 dark:bg-gray-800 min-h-[220px]">
                  <img
                    src={edu.image}
                    alt={edu.institution}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.target.src = "/assets/sp1.png" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent flex items-end p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold text-white shadow bg-gradient-to-r ${edu.gradient}`}>
                      {edu.score}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="md:col-span-8 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                        {edu.specialization}
                      </span>
                    </div>

                    <a
                      href={edu.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-base font-semibold text-blue-600 dark:text-blue-400 hover:underline mb-3"
                    >
                      <span>{edu.institution}</span>
                      <ExternalLink size={15} />
                    </a>

                    <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-5">
                      <div className="flex items-center gap-1">
                        <Calendar size={15} className="text-gray-400 dark:text-gray-400" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={15} className="text-gray-400 dark:text-gray-400" />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    {/* Coursework */}
                    <div>
                      <h4 className="text-xs uppercase font-semibold text-gray-600 dark:text-gray-300 mb-2 flex items-center gap-1.5">
                        <BookOpen size={14} />
                        Key Coursework
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, cIdx) => (
                          <span
                            key={cIdx}
                            className="px-2.5 py-1 text-xs rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
