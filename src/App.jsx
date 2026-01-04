import React, { useState, useEffect } from 'react'
import { Navbar, Footer } from './components/layout'
import { Hero, About, Projects, Experience, Skills, Contact } from './components/sections'
import { DarkModeProvider } from './context/DarkModeContext'
import { motion, AnimatePresence } from 'framer-motion'

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
        // Auto hide after 5 seconds
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
        {/* Confetti Effect */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1
            }}
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

        {/* Easter Egg Message */}
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
          <p className="text-primary-100 mb-2">
            Konami code activated!
          </p>
          <p className="text-sm text-primary-200">
            You clearly know your way around code. Let's build something together!
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
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

function App() {
  console.log('App component rendering...')

  const [isLoading, setIsLoading] = useState(true)
  const timeGreeting = getTimeGreeting()

  useEffect(() => {
    console.log('App useEffect running...')
    // Simulate loading time
    const timer = setTimeout(() => {
      console.log('Setting loading to false...')
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    console.log('Showing loading screen...')
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-primary-600">Loading Portfolio...</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
            {timeGreeting.emoji} {timeGreeting.greeting}!
          </p>
        </div>
      </div>
    )
  }

  console.log('Rendering main portfolio...')
  return (
    <ErrorBoundary>
      <DarkModeProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          {/* Konami Code Easter Egg */}
          <KonamiEasterEgg />

          <Navbar />
          <main>
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </div>
      </DarkModeProvider>
    </ErrorBoundary>
  )
}

export default App
