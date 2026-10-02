import React from 'react'
import { motion } from 'framer-motion'
import { Terminal, ArrowUp, Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react'

// LeetCode custom icon
const LeetCodeIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.763-1.823.763s-1.357-.296-1.823-.763L3.65 14.428a2.58 2.58 0 010-3.647L9.76 4.672c.466-.467 1.111-.763 1.823-.763s1.357.296 1.823.763l2.697 2.607a.86.86 0 01-.005 1.218.86.86 0 01-1.213-.005L12.188 5.885a.86.86 0 00-1.214 0L4.864 12c-.335.335-.335.879 0 1.214l6.11 6.115a.86.86 0 001.214 0l2.697-2.607a.86.86 0 011.213-.005c.338.337.338.882.004 1.218zM8.32 12.86h7.68a.86.86 0 000-1.72H8.32a.86.86 0 000 1.72zm12.39-3.267l-1.92-1.92a.86.86 0 10-1.216 1.216l1.92 1.92a.86.86 0 001.216-1.216zm0 4.8l-1.92 1.92a.86.86 0 101.216 1.216l1.92-1.92a.86.86 0 00-1.216-1.216z"/>
  </svg>
)

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/surendrapattikonda", icon: Github },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/pattikondasurendra/", icon: Linkedin },
    { name: "LeetCode", href: "https://leetcode.com/u/surendra_45/", icon: LeetCodeIcon },
    { name: "Twitter", href: "https://x.com/Surendra90459", icon: Twitter },
    { name: "Email", href: "mailto:pattikondasurendra05@gmail.com", icon: Mail }
  ]

  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & title */}
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-yellow-400/20 text-blue-600 dark:text-yellow-400">
              <Terminal size={20} className="stroke-[2.5]" />
            </div>
            <span className="font-bold text-lg bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-yellow-400 dark:to-orange-400 bg-clip-text text-transparent">
              Surendra’s Portfolio
            </span>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                  aria-label={item.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>

          {/* Back to top button */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </motion.button>

        </div>

        <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-900 text-center text-xs text-gray-500 dark:text-gray-500">
          <p>© {new Date().getFullYear()} Pattikonda Surendra. Crafted with passion & React.</p>
        </div>
      </div>
    </footer>
  )
}
