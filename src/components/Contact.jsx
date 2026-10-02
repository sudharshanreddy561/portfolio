import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Twitter, 
  FileText, 
  CheckCircle2, 
  AlertCircle,
  MessageSquare
} from 'lucide-react'

// LeetCode custom icon
const LeetCodeIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.763-1.823.763s-1.357-.296-1.823-.763L3.65 14.428a2.58 2.58 0 010-3.647L9.76 4.672c.466-.467 1.111-.763 1.823-.763s1.357.296 1.823.763l2.697 2.607a.86.86 0 01-.005 1.218.86.86 0 01-1.213-.005L12.188 5.885a.86.86 0 00-1.214 0L4.864 12c-.335.335-.335.879 0 1.214l6.11 6.115a.86.86 0 001.214 0l2.697-2.607a.86.86 0 011.213-.005c.338.337.338.882.004 1.218zM8.32 12.86h7.68a.86.86 0 000-1.72H8.32a.86.86 0 000 1.72zm12.39-3.267l-1.92-1.92a.86.86 0 10-1.216 1.216l1.92 1.92a.86.86 0 001.216-1.216zm0 4.8l-1.92 1.92a.86.86 0 101.216 1.216l1.92-1.92a.86.86 0 00-1.216-1.216z"/>
  </svg>
)

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState(null) // 'loading', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('https://formspree.io/f/mrbagada', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus(null), 5000)
      } else {
        throw new Error('Failed to send message.')
      }
    } catch (err) {
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again or email me directly.')
      setTimeout(() => setStatus(null), 5000)
    }
  }

  const socials = [
    { name: "GitHub", href: "https://github.com/surendrapattikonda", icon: Github, color: "hover:text-gray-900 dark:hover:text-white" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/pattikondasurendra/", icon: Linkedin, color: "hover:text-blue-600" },
    { name: "LeetCode", href: "https://leetcode.com/u/surendra_45/", icon: LeetCodeIcon, color: "hover:text-yellow-500" },
    { name: "Twitter", href: "https://x.com/Surendra90459", icon: Twitter, color: "hover:text-sky-500" }
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50/80 dark:bg-gray-950 transition-colors duration-300">
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
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full blur-xl opacity-30 animate-pulse" />
              <div className="relative bg-gradient-to-r from-purple-500 to-pink-600 p-3.5 rounded-full shadow-lg text-white">
                <MessageSquare className="w-8 h-8" />
              </div>
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-gray-900 dark:text-white">
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
              Work Together
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </p>
        </motion.div>

        {/* 2-Column Layout */}
        <div className="grid lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Card */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-7 border border-gray-200 dark:border-gray-800 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Get in Touch
              </h3>

              <div className="space-y-4">
                <a
                  href="mailto:pattikondasurendra05@gmail.com"
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/60 transition group"
                >
                  <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 group-hover:scale-105 transition">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 dark:text-gray-400 font-medium">Email</p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 break-all">
                      pattikondasurendra05@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+918688448698"
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/60 transition group"
                >
                  <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 group-hover:scale-105 transition">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 dark:text-gray-400 font-medium">Phone</p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                      +91 8688448698
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3 rounded-xl">
                  <div className="p-3 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 dark:text-gray-400 font-medium">Location</p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                      Nandyal, Andhra Pradesh, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Channels Card */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-7 border border-gray-200 dark:border-gray-800 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Connect with Me
              </h3>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                {socials.map((item) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold text-xs transition ${item.color}`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </a>
                  )
                })}
              </div>

              {/* Resume download */}
              <a
                href="/Surendra_1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm shadow hover:shadow-md transition"
              >
                <FileText size={18} />
                Download Curriculum Vitae (CV)
              </a>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 sm:p-10 border border-gray-200 dark:border-gray-800 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send Me a Message
              </h3>

              {status === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 flex items-center gap-3 text-green-700 dark:text-green-300">
                  <CheckCircle2 size={20} className="flex-shrink-0" />
                  <p className="text-sm font-medium">
                    Thank you for reaching out! Your message was sent successfully.
                  </p>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 flex items-center gap-3 text-red-700 dark:text-red-300">
                  <AlertCircle size={20} className="flex-shrink-0" />
                  <p className="text-sm font-medium">{errorMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-gray-600 dark:text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-gray-600 dark:text-gray-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-gray-600 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-gray-600 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, idea, or questions..."
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-sm resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm shadow-lg hover:shadow-blue-500/25 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <Send size={18} />
                  <span>{status === 'loading' ? 'Sending Message...' : 'Send Message'}</span>
                </motion.button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
