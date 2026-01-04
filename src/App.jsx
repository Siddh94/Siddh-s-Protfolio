import React, { useState, useEffect, useRef } from 'react'
import { Navbar, Footer } from './components/layout'
import { Hero, About, Projects, Experience, Skills, Contact } from './components/sections'
import { DarkModeProvider, useDarkMode } from './context/DarkModeContext'
import GitHubGlobe from './components/sections/GitHubGlobe'
import { motion, AnimatePresence } from 'framer-motion'

// Matrix Rain Effect Component (Dark Mode Only)
const MatrixRain = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = document.documentElement.scrollHeight

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()アイウエオカキクケコサシスセソ'
    const fontSize = 16
    const columns = canvas.width / fontSize
    const drops = Array(Math.floor(columns)).fill(1)

    const draw = () => {
      ctx.fillStyle = 'rgba(17, 24, 39, 0.1)' // Dark gray for trail
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#8b5cf6' // Bright purple
      ctx.font = `${fontSize}px monospace`

      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillText(char, i * fontSize, y * fontSize)
        if (y * fontSize > canvas.height && Math.random() > 0.98) {
          drops[i] = 0
        }
        drops[i]++
      })
    }

    const interval = setInterval(draw, 40)
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = document.documentElement.scrollHeight
    }
    window.addEventListener('resize', handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[15]"
      style={{ opacity: 0.25, mixBlendMode: 'screen' }}
    />
  )
}

// Matrix Rain Wrapper (only renders in dark mode)
const MatrixRainWrapper = () => {
  const { isDarkMode } = useDarkMode()
  if (!isDarkMode) return null
  return <MatrixRain />
}

// Custom SY Loader Component
const SYLoader = ({ timeGreeting, funFact }) => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
    {/* Animated Background */}
    <div className="absolute inset-0 opacity-20">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary-500 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}
    </div>

    <div className="text-center relative z-10">
      {/* SY Initials Animation */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", duration: 1 }}
        className="relative w-24 h-24 mx-auto mb-6"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-4 border-t-primary-600 border-r-purple-600 border-b-primary-400 border-l-transparent"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-3xl font-bold gradient-text"
          >
            SY
          </motion.span>
        </div>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-xl font-semibold text-primary-600 mb-2"
      >
        Loading Portfolio...
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-gray-500 dark:text-gray-400 text-sm mb-4"
      >
        {timeGreeting.emoji} {timeGreeting.greeting}!
      </motion.p>

      {/* Fun Fact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-full max-w-sm mx-auto"
      >
        <p className="text-sm text-gray-600 dark:text-gray-300">
          💡 <span className="font-medium">Fun Fact:</span> {funFact}
        </p>
      </motion.div>
    </div>
  </div>
)

// Konami Code Easter Egg Component
const KonamiEasterEgg = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false)
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA']
  const [inputSequence, setInputSequence] = useState([])

  useEffect(() => {
    const handleKeyDown = (e) => {
      const newSequence = [...inputSequence, e.code].slice(-10)
      setInputSequence(newSequence)

      if (newSequence.join(',') === konamiCode.join(',')) {
        setShowEasterEgg(true)
        setInputSequence([])
        setTimeout(() => setShowEasterEgg(false), 5000)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [inputSequence])

  if (!showEasterEgg) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none"
      >
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            animate={{
              opacity: 0,
              x: (Math.random() - 0.5) * 600,
              y: (Math.random() - 0.5) * 600,
              scale: 0,
              rotate: Math.random() * 720
            }}
            transition={{ duration: 2, delay: Math.random() * 0.5 }}
            className="absolute w-3 h-3 rounded-full"
            style={{
              backgroundColor: ['#8b5cf6', '#6366f1', '#ec4899', '#10b981', '#f59e0b'][Math.floor(Math.random() * 5)]
            }}
          />
        ))}

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-primary-600 to-purple-600 text-white px-8 py-6 rounded-2xl shadow-2xl text-center pointer-events-auto"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 10, 0] }}
            transition={{ duration: 0.5, repeat: 3 }}
            className="text-4xl mb-3"
          >
            🎮
          </motion.div>
          <h3 className="text-2xl font-bold mb-2">You Found the Secret! 🎉</h3>
          <p className="text-primary-100 mb-2">Konami code activated!</p>
          <p className="text-sm text-primary-200">
            You clearly know your way around code. Let's build something together!
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

// Time Spent Tracker Component
const TimeSpentTracker = () => {
  const [seconds, setSeconds] = useState(0)
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => setSeconds(s => s + 1), 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (seconds === 60) setShowMessage(true) // Show after 1 min
    if (seconds === 120) setShowMessage(true) // Show again at 2 mins
  }, [seconds])

  const formatTime = (s) => {
    const mins = Math.floor(s / 60)
    const secs = s % 60
    if (mins === 0) return `${secs}s`
    return `${mins}m ${secs}s`
  }

  return (
    <>
      {/* Floating time tracker */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2 }}
        className="fixed bottom-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg text-sm z-40 hidden md:block"
      >
        <span className="text-gray-500 dark:text-gray-400">⏱️ </span>
        <span className="text-gray-700 dark:text-gray-300">{formatTime(seconds)}</span>
        {seconds >= 60 && (
          <span className="text-primary-600 dark:text-primary-400 ml-2">
            Ready to chat? 💬
          </span>
        )}
      </motion.div>
    </>
  )
}

// Visit Counter (using localStorage for simulation)
const VisitCounter = () => {
  const [visits, setVisits] = useState(0)
  const hasRun = useRef(false)

  useEffect(() => {
    // Prevent double-increment from React Strict Mode
    if (hasRun.current) return
    hasRun.current = true

    const storedVisits = parseInt(localStorage.getItem('portfolio_visits') || '0')
    const newVisits = storedVisits + 1
    localStorage.setItem('portfolio_visits', newVisits.toString())
    setVisits(newVisits)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5 }}
      className="fixed bottom-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg text-sm z-40 hidden md:block"
    >
      <span className="text-primary-600 dark:text-primary-400">👋 </span>
      <span className="text-gray-700 dark:text-gray-300">
        Visitor #{visits.toLocaleString()} - Thanks for stopping by!
      </span>
    </motion.div>
  )
}

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-red-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h1>
            <p className="text-red-500 mb-4">Error: {this.state.error?.message}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-red-600 text-white px-4 py-2 rounded"
            >
              Reload Page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

// Time of Day Greeting
const getTimeGreeting = () => {
  const hour = new Date().getHours()
  if (hour >= 5 && hour < 12) return { greeting: "Good morning", emoji: "☀️" }
  if (hour >= 12 && hour < 17) return { greeting: "Good afternoon", emoji: "🌤️" }
  if (hour >= 17 && hour < 21) return { greeting: "Good evening", emoji: "🌅" }
  return { greeting: "Late night coding", emoji: "🌙" }
}

// Fun Facts
const funFacts = [
  "I've solved 130+ problems on LeetCode 🧩",
  "I founded 2 startups before graduating 🚀",
  "I'm an NCC Cadet (Naval Wing) ⚓",
  "I won Gold in Regional Kabaddi Tournament 🥇",
  "I've published research on YOLOv5 📄",
  "I can build a full-stack app in 48 hours ⚡",
  "I love late-night coding sessions 🌙",
  "Coffee + Code = My daily fuel ☕"
]

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const timeGreeting = getTimeGreeting()
  const [funFact] = useState(funFacts[Math.floor(Math.random() * funFacts.length)])

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <SYLoader timeGreeting={timeGreeting} funFact={funFact} />
  }

  return (
    <ErrorBoundary>
      <DarkModeProvider>
        <div className="min-h-screen transition-colors duration-300 relative">
          {/* Matrix Rain (Dark Mode Only) */}
          <MatrixRainWrapper />

          {/* Konami Code Easter Egg */}
          <KonamiEasterEgg />

          {/* Time Spent Tracker */}
          <TimeSpentTracker />

          {/* Visit Counter */}
          <VisitCounter />

          <Navbar />
          <main className="relative z-10">
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Skills />
            <GitHubGlobe />
            <Contact />
          </main>
          <Footer />
        </div>
      </DarkModeProvider>
    </ErrorBoundary>
  )
}

export default App
