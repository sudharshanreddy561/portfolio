import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, X, Send, Sparkles, User, CornerDownLeft, MessageCircle } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const cannedQA = [
  {
    question: "education",
    keywords: ["education", "college", "degree", "study", "studies", "btech", "rgmcet", "cgpa", "school", "gpa", "university"],
    answer: `### Education
**B.Tech in Computer Science & Engineering (Data Science) with CGPA 8.23**  
Rajeev Gandhi Memorial College of Engineering & Technology (2022 – 2026)  
Currently in my Final Year, expected Graduation (July 2026)

**Intermediate (MPC) - 89%**  
MJPAPBCWR Junior College, Lepakshi (2020 – 2022)`
  },
  {
    question: "skills",
    keywords: ["skill", "skills", "technologies", "tech", "languages", "language", "framework"],
    answer: `### Technical Skills
**Frontend**: React.js, Tailwind CSS, HTML5, CSS3  
**Backend**: Node.js, Express.js, FastAPI, REST APIs  
**Languages**: Python, JavaScript, C++, C  
**Databases**: MongoDB, MySQL, SQL  
**Machine Learning**: TensorFlow, OpenCV, scikit-learn, NLTK`
  },
  {
    question: "projects",
    keywords: ["project", "projects", "work", "portfolio", "mcqwizard", "mcq", "agrivision", "agri"],
    answer: `### Projects

**MCQ Wizard**  
AI-powered question generator from PDF/DOCX using Google Gemini LLM.  
Built with React.js, Tailwind CSS, and FastAPI.  
[View on GitHub](https://github.com/surendrapattikonda/mcqwizard) | [Live Demo](https://mcqwizard-2-aaje.onrender.com/)

**AgriVision (Smart Agriculture Assistant)**  
Plant disease detection using AI & CNN with weather-based pesticide recommendations.  
Built with Python, TensorFlow, and OpenCV.  
[View on GitHub](https://github.com/surendrapattikonda/Agri-Assistant)`
  },
  {
    question: "tech stack",
    keywords: ["stack", "tech stack", "tools"],
    answer: `### Complete Tech Stack
\`\`\`
Languages: Python, JavaScript, C++, C
Frontend: HTML, CSS, React.js, Tailwind CSS
Backend: Node.js, Express.js, FastAPI
Databases: MongoDB, MySQL
ML/DL: TensorFlow, scikit-learn, OpenCV, NLP
Tools: Git, GitHub, VS Code
\`\`\``
  },
  {
    question: "achievements",
    keywords: ["achievement", "achievements", "prize", "award", "contest", "advitiya", "winner"],
    answer: `### Achievements
- 🏆 **1st Place** in Advitiya 2k25 Coding Contest (RGMCET)
- 🏆 **1st Place** in Concurrence 2k25 Coding Contest (RGMCET)
- 🏆 **1st Place** in Dillana 2k25 Coding Contest (SVR Engineering College)
- 💡 Solved **1200+ coding problems** across LeetCode, Code360 & GeeksforGeeks
- 🚀 **Lead of Codes Club** at college, mentoring peers in DSA`
  },
  {
    question: "resume",
    keywords: ["resume", "cv", "curriculum vitae", "profile"],
    answer: `### Resume
You can view or download my latest resume here:  
👉 [View Resume (/Surendra_1.pdf)](/Surendra_1.pdf)`
  },
  {
    question: "strengths",
    keywords: ["strength", "strengths", "skills summary", "why hire"],
    answer: `### Strengths
- Strong problem-solving & logical thinking (DSA expertise)
- Leadership & mentoring (Codes Club Lead)
- Rapid adaptability to cutting-edge technologies (AI/LLMs)
- Collaboration, accountability & team spirit`
  },
  {
    question: "career goals",
    keywords: ["goal", "goals", "career", "future", "aspiration"],
    answer: `### Career Goals
**Short-term**:  
Land a software engineering role focusing on AI/ML or full-stack web development.

**Long-term**:  
Become a Machine Learning Engineer designing scalable AI architectures for impactful real-world challenges.`
  },
  {
    question: "coding profiles",
    keywords: ["leetcode", "coding", "code360", "gfg", "geeksforgeeks", "hackerrank", "dsa", "problems"],
    answer: `### Coding Profiles
- [LeetCode](https://leetcode.com/u/surendra_45/) — 344+ problems solved (Contest Rating 1450)
- [GeeksforGeeks](https://www.geeksforgeeks.org/user/pattikondasurendra/) — 285+ problems solved (Institute Rank 2)
- [Code360](https://www.naukri.com/code360/profile/Surendra07) — 700+ problems solved (3x Monthly Topper)
- [HackerRank](https://www.hackerrank.com/profile/pattikondasuren1) — 5★ C++, 2★ Python`
  },
  {
    question: "contact",
    keywords: ["contact", "email", "phone", "hire", "reach", "message", "call", "address", "location"],
    answer: `### Contact Information
- **Email**: [pattikondasurendra05@gmail.com](mailto:pattikondasurendra05@gmail.com)  
- **Phone**: [+91 8688448698](tel:+918688448698)  
- **LinkedIn**: [linkedin.com/in/pattikondasurendra](https://www.linkedin.com/in/pattikondasurendra/)  
- **GitHub**: [github.com/surendrapattikonda](https://github.com/surendrapattikonda)  
- **Twitter**: [@Surendra90459](https://x.com/Surendra90459)`
  }
]

const quickChips = [
  "Education",
  "Skills",
  "Projects",
  "Tech Stack",
  "Achievements",
  "Resume",
  "Strengths",
  "Career Goals",
  "Coding Profiles",
  "Contact"
]

const rotatingGreetings = [
  "👋 Ask me anything!",
  "💡 Got questions?",
  "🚀 Let's chat!",
  "✨ Click to explore!",
  "🤖 I'm here to help!",
  "💬 Say hello!"
]

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [userName, setUserName] = useState("")
  const [greetingIdx, setGreetingIdx] = useState(0)
  const [hasInteracted, setHasInteracted] = useState(false)
  const messagesEndRef = useRef(null)

  // Rotating greeting tooltip
  useEffect(() => {
    if (!hasInteracted) {
      const interval = setInterval(() => {
        setGreetingIdx((prev) => (prev + 1) % rotatingGreetings.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [hasInteracted])

  // Initial welcome message check
  useEffect(() => {
    let savedName = null
    try {
      savedName = JSON.parse(localStorage.getItem("portfolioUserName") || "null")
    } catch {
      savedName = localStorage.getItem("portfolioUserName")
    }

    if (savedName) {
      setUserName(savedName)
      setMessages([
        {
          sender: "bot",
          text: `Welcome back, **${savedName}**! What would you like to know about Surendra today?`,
          isMarkdown: true
        }
      ])
    } else {
      setMessages([
        {
          sender: "bot",
          text: "Hello! Before we begin, may I know your name?",
          isMarkdown: false
        }
      ])
    }
  }, [])

  // Auto scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping])

  const handleOpen = () => {
    setIsOpen(true)
    setHasInteracted(true)
  }

  const findAnswer = (query) => {
    const qLower = query.toLowerCase().trim()

    // 1. Direct topic match
    for (const item of cannedQA) {
      if (item.question.toLowerCase() === qLower) {
        return item.answer
      }
    }

    // 2. Keyword match
    for (const item of cannedQA) {
      for (const kw of item.keywords) {
        if (qLower.includes(kw)) {
          return item.answer
        }
      }
    }

    // Fallback
    return `I'm not sure about that specific question yet, but you can explore Surendra's background using the suggested topics below, or send him a message directly through the [Contact Form](#contact)!`
  }

  const handleSendMessage = (textToSend) => {
    const query = (textToSend || inputValue).trim()
    if (!query) return

    // Append user message
    const newMessages = [...messages, { sender: "user", text: query, isMarkdown: false }]
    setMessages(newMessages)
    setInputValue("")
    setIsTyping(true)

    setTimeout(() => {
      // Check if this was setting their name
      if (!userName) {
        const cleanedName = query.replace(/^(my name is|i am|i'm)\s+/i, '').trim()
        setUserName(cleanedName)
        try {
          localStorage.setItem("portfolioUserName", JSON.stringify(cleanedName))
        } catch {
          localStorage.setItem("portfolioUserName", cleanedName)
        }

        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: `Nice to meet you, **${cleanedName}**! 🎉\n\nI'm Surendra's virtual assistant. What would you like to explore? Feel free to type a question or tap any of the topics below!`,
            isMarkdown: true
          }
        ])
        setIsTyping(false)
        return
      }

      // Find best match
      const answer = findAnswer(query)
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: answer,
          isMarkdown: true
        }
      ])
      setIsTyping(false)
    }, 600)
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {/* Animated Greeting Bubble */}
        {!isOpen && !hasInteracted && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden sm:flex items-center px-4 py-2 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 text-xs font-semibold shadow-lg border border-gray-200 dark:border-gray-700 pointer-events-none"
          >
            <span>{rotatingGreetings[greetingIdx]}</span>
          </motion.div>
        )}

        {/* Round Bot Button */}
        <motion.button
          onClick={handleOpen}
          className="relative w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-2xl flex items-center justify-center hover:scale-105 transition-transform cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Open AI Assistant"
        >
          <Bot size={28} />
          {/* Pulsing online badge */}
          <span className="absolute top-0 right-0 w-4 h-4 bg-green-500 border-2 border-white dark:border-gray-900 rounded-full flex items-center justify-center">
            <span className="w-2 h-2 bg-green-200 rounded-full animate-ping" />
          </span>
        </motion.button>
      </div>

      {/* Chat Window Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-6 right-6 z-50 w-[92vw] sm:w-[420px] max-h-[85vh] h-[600px] flex flex-col bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-5 py-4 text-white flex items-center justify-between shadow-md">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white/20 backdrop-blur-sm">
                  <Bot size={22} className="animate-bounce" style={{ animationDuration: '2s' }} />
                </div>
                <div>
                  <h3 className="font-bold text-base leading-tight">Surendra's Assistant</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-blue-100 font-medium">Online & Ready to Help!</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/20 transition cursor-pointer"
                aria-label="Close Assistant"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50/50 dark:bg-gray-950/50">
              {messages.map((msg, index) => {
                const isBot = msg.sender === "bot"
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-start gap-2.5 ${isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    {isBot && (
                      <div className="w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-300 flex items-center justify-center flex-shrink-0 mt-1">
                        <Bot size={16} />
                      </div>
                    )}

                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm leading-relaxed shadow-sm ${
                        isBot
                          ? 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-700/80 rounded-tl-sm'
                          : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-tr-sm'
                      }`}
                    >
                      {msg.isMarkdown ? (
                        <div className="prose dark:prose-invert prose-xs max-w-none prose-p:my-1 prose-headings:my-1.5 prose-ul:my-1 prose-li:my-0.5 prose-a:text-blue-500 prose-a:underline">
                          <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {msg.text}
                          </ReactMarkdown>
                        </div>
                      ) : (
                        <p>{msg.text}</p>
                      )}
                    </div>

                    {!isBot && (
                      <div className="w-7 h-7 rounded-full bg-indigo-100 dark:bg-indigo-900/60 text-indigo-600 dark:text-indigo-300 flex items-center justify-center flex-shrink-0 mt-1">
                        <User size={16} />
                      </div>
                    )}
                  </motion.div>
                )
              })}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-center gap-2 text-gray-400 text-xs pl-9">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Chips suggestions */}
            <div className="p-2.5 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                {quickChips.map((chip) => (
                  <button
                    key={chip}
                    onClick={() => handleSendMessage(chip)}
                    className="flex-shrink-0 px-2.5 py-1 rounded-full text-[11px] font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/40 hover:text-blue-600 dark:hover:text-blue-400 transition"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Bar */}
            <div className="p-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={userName ? "Ask about skills, projects, education..." : "Enter your name..."}
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim()}
                className="p-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white disabled:opacity-40 hover:opacity-90 transition cursor-pointer"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
