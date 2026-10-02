import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  FileText, 
  ArrowRight, 
  Sparkles,
  Circle,
  Code2
} from 'lucide-react'

// LeetCode custom icon
const LeetCodeIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.763-1.823.763s-1.357-.296-1.823-.763L3.65 14.428a2.58 2.58 0 010-3.647L9.76 4.672c.466-.467 1.111-.763 1.823-.763s1.357.296 1.823.763l2.697 2.607a.86.86 0 01-.005 1.218.86.86 0 01-1.213-.005L12.188 5.885a.86.86 0 00-1.214 0L4.864 12c-.335.335-.335.879 0 1.214l6.11 6.115a.86.86 0 001.214 0l2.697-2.607a.86.86 0 011.213-.005c.338.337.338.882.004 1.218zM8.32 12.86h7.68a.86.86 0 000-1.72H8.32a.86.86 0 000 1.72zm12.39-3.267l-1.92-1.92a.86.86 0 10-1.216 1.216l1.92 1.92a.86.86 0 001.216-1.216zm0 4.8l-1.92 1.92a.86.86 0 101.216 1.216l1.92-1.92a.86.86 0 00-1.216-1.216z"/>
  </svg>
)

export default function Hero() {
  const words = ["Full Stack Developer", "Machine Learning Enthusiast", "Problem Solver"]
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(120)

  useEffect(() => {
    const word = words[currentWordIndex]

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(word.substring(0, displayedText.length + 1))
        if (displayedText.length === word.length) {
          setTimeout(() => setIsDeleting(true), 1500)
          setTypingSpeed(50)
        }
      } else {
        setDisplayedText(word.substring(0, displayedText.length - 1))
        if (displayedText.length === 0) {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
          setTypingSpeed(120)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, currentWordIndex, typingSpeed])

  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: "smooth" })
    }
  }

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/surendrapattikonda", icon: Github, hover: "hover:text-gray-900 dark:hover:text-white hover:border-gray-900" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/pattikondasurendra/", icon: Linkedin, hover: "hover:text-blue-600 hover:border-blue-600" },
    { name: "LeetCode", href: "https://leetcode.com/u/surendra_45/", icon: LeetCodeIcon, hover: "hover:text-yellow-500 hover:border-yellow-500" },
    { name: "Twitter", href: "https://x.com/Surendra90459", icon: Twitter, hover: "hover:text-sky-500 hover:border-sky-500" },
    { name: "Email", href: "mailto:pattikondasurendra05@gmail.com", icon: Mail, hover: "hover:text-red-500 hover:border-red-500" },
  ]

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-blue-50/40 via-white to-gray-50/60 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      {/* Background ambient decorative orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <motion.div 
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Top pill badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-sm font-medium shadow-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles size={16} className="text-blue-500 animate-spin" style={{ animationDuration: '4s' }} />
              <span>Welcome to my digital space</span>
            </motion.div>

            {/* Name Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.15]">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 animate-gradient-x">
                Pattikonda Surendra
              </span>
            </h1>

            {/* Typewriter Role */}
            <div className="h-10 text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-medium flex items-center justify-center lg:justify-start gap-2">
              <span>I am a</span>
              <span className="text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-500 pb-0.5">
                {displayedText}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            {/* Bio summary */}
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Final Year CSE (Data Science) undergraduate at RGMCET with an 8.23 CGPA. Passionate about building intelligent web applications, AI/ML models, and solving complex algorithmic challenges.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <motion.button
                onClick={() => scrollTo("#contact")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-blue-500/25 hover:from-blue-700 hover:to-indigo-700 transition"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                Get in Touch
                <ArrowRight size={18} />
              </motion.button>

              <motion.button
                onClick={() => scrollTo("#projects")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 font-semibold border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition shadow-sm"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                View Projects
              </motion.button>

              <motion.a
                href="/Surendra_1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:shadow-purple-500/25 transition"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <FileText size={18} />
                Resume
              </motion.a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-4">
              {socialLinks.map((item) => {
                const Icon = item.icon
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300 ${item.hover}`}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={item.name}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Right Card / Avatar showcase */}
          <motion.div 
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="w-full max-w-sm sm:max-w-md rounded-2xl overflow-hidden shadow-2xl border border-gray-200/80 dark:border-gray-700/80 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl transition-all duration-300 hover:shadow-blue-500/10">
              
              {/* Card top banner */}
              <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-5 py-3 text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs font-semibold tracking-wider uppercase text-blue-100">
                  Full Stack | ML | DSA
                </span>
              </div>

              {/* Photo Area with glow */}
              <div className="relative p-6 flex justify-center items-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-gray-900 dark:to-gray-800 overflow-hidden min-h-[320px]">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-pink-500/10" />
                <div className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-gray-700 group">
                  <img
                    src="/assets/p3-DbjX5-UB.jpg"
                    alt="Pattikonda Surendra"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = "/assets/sp1.png"
                    }}
                  />
                </div>
              </div>

              {/* Card Bottom status bar */}
              <div className="px-5 py-4 bg-gray-50/90 dark:bg-gray-800/90 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white dark:border-gray-600 shadow-sm">
                      <img
                        src="/assets/p3-DbjX5-UB.jpg"
                        alt="Avatar"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = "/assets/sp1.png"
                        }}
                      />
                    </div>
                    <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-green-200 rounded-full animate-ping" />
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                      @pattikonda.surendra
                    </p>
                    <p className="text-xs text-green-600 dark:text-green-400 font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                      Online & Available
                    </p>
                  </div>
                </div>

                <motion.button
                  onClick={() => scrollTo("#about")}
                  className="px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm hover:shadow transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  About Me
                </motion.button>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
