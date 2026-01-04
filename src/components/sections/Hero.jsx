import React, { useState, useEffect } from 'react'
import { FaBarcode, FaDownload, FaGithub, FaLinkedin, FaTimes, FaEnvelope } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const Hero = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Siddh94', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/siddh-yadav/', label: 'LinkedIn' },
    { icon: FaBarcode, href: 'https://leetcode.com/u/siddhyadav7464/', label: 'LeetCode' }
  ]

  // Typing effect
  const titles = ['Full-Stack Developer', 'AI/ML Engineer', 'Startup Founder']
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  // Escaping photo state
  const [escapeCount, setEscapeCount] = useState(0)
  const [photoPosition, setPhotoPosition] = useState({ x: 0, y: 0 })
  const [escapeMessage, setEscapeMessage] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [isCaught, setIsCaught] = useState(false)

  const escapeMessages = [
    "Nice try! 😄",
    "Almost got me! 🏃",
    "Okay, you win! Click me! 🎉"
  ]

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentTitleIndex])

  const handlePhotoHover = () => {
    if (isCaught) return

    if (escapeCount < 3) {
      // Generate random position - bigger range for farther escape
      const randomX = (Math.random() - 0.5) * 500
      const randomY = (Math.random() - 0.5) * 350
      setPhotoPosition({ x: randomX, y: randomY })
      setEscapeMessage(escapeMessages[escapeCount])
      setEscapeCount(prev => prev + 1)

      // Clear message after 2 seconds
      setTimeout(() => setEscapeMessage(''), 2000)
    }

    if (escapeCount >= 2) {
      setIsCaught(true)
    }
  }

  const handlePhotoClick = () => {
    if (isCaught || escapeCount >= 3) {
      setShowModal(true)
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 animated-gradient-bg opacity-10 dark:opacity-20"></div>

      {/* Floating Particles */}
      <div className="particle particle-1"></div>
      <div className="particle particle-2"></div>
      <div className="particle particle-3"></div>
      <div className="particle particle-4"></div>
      <div className="particle particle-5"></div>

      {/* Main Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>

      <div className="container-custom section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Time Greeting */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-gray-500 dark:text-gray-400 text-sm mb-2"
            >
              {new Date().getHours() >= 5 && new Date().getHours() < 12
                ? "☀️ Good morning!"
                : new Date().getHours() >= 12 && new Date().getHours() < 17
                  ? "🌤️ Good afternoon!"
                  : new Date().getHours() >= 17 && new Date().getHours() < 21
                    ? "🌅 Good evening!"
                    : "🌙 Late night coding?"}
            </motion.p>

            {/* Open to Work Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-4"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span>Open to Opportunities</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Hi, I'm{' '}
              <motion.span
                className="gradient-text"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Siddh Yadav
              </motion.span>
            </motion.h1>

            {/* Typing Effect Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6 h-12"
            >
              <span className="gradient-text">{displayText}</span>
              <span className="animate-pulse">|</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Building intelligent, production-ready solutions from database to deployment.
              Founder, developer, and fast learner ready to make an impact at your company.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.a
                href="https://drive.google.com/file/d/1RvjU0vcM-v6W6XjcnvJI8F08BZ4WaQV6/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.3 }}
                />
                <FaDownload className="inline mr-2 relative z-10 group-hover:animate-bounce" />
                <span className="relative z-10">Download CV</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex justify-center lg:justify-start space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 relative overflow-hidden group"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <social.icon className="w-5 h-5 relative z-10 group-hover:animate-pulse" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Escaping Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end relative"
          >
            <div className="relative">
              {/* Escape Message */}
              <AnimatePresence>
                {escapeMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.8 }}
                    animate={{ opacity: 1, y: -60, scale: 1 }}
                    exit={{ opacity: 0, y: -80, scale: 0.8 }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 z-20 bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap shadow-lg"
                  >
                    {escapeMessage}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Profile Image */}
              <motion.div
                animate={{ x: photoPosition.x, y: photoPosition.y }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onMouseEnter={handlePhotoHover}
                onClick={handlePhotoClick}
                className={`relative w-64 h-64 md:w-80 md:h-80 rounded-2xl border-4 overflow-hidden cursor-pointer ${isCaught
                  ? 'border-green-500 shadow-lg shadow-green-500/30'
                  : 'border-primary-500 hover:border-purple-500'
                  } transition-all duration-300`}
              >
                <img
                  src="/images/passportphoto.png"
                  alt="Siddh Yadav - AI/ML Engineer"
                  className="w-full h-full object-cover pointer-events-none"
                  style={{ objectPosition: 'center 15%' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback placeholder */}
                <div className="w-full h-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center hidden">
                  <span className="text-4xl text-gray-600 dark:text-gray-400">👤</span>
                </div>

                {/* Caught overlay */}
                {isCaught && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-green-500/20 flex items-center justify-center"
                  >
                    <span className="text-white text-lg font-bold bg-green-600 px-4 py-2 rounded-full">
                      Click to Hire! 🎉
                    </span>
                  </motion.div>
                )}
              </motion.div>

              {/* Hint for desktop */}
              {!isCaught && escapeCount === 0 && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                  className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4 hidden lg:block"
                >
                  Try to catch me! 😉
                </motion.p>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hire Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 20 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              >
                <FaTimes className="w-5 h-5" />
              </button>

              {/* Modal Content */}
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="text-6xl mb-4"
                >
                  🎉
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  You caught me!
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Impressive persistence! I'd love to bring this same energy to your team.
                  Let's connect and build something amazing together!
                </p>

                <div className="space-y-3">
                  <motion.a
                    href="https://drive.google.com/file/d/1RvjU0vcM-v6W6XjcnvJI8F08BZ4WaQV6/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaDownload /> Download My Resume
                  </motion.a>

                  <motion.a
                    href="mailto:siddhyadav7464@gmail.com"
                    className="btn-secondary w-full flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaEnvelope /> Email Me
                  </motion.a>

                  <motion.a
                    href="https://www.linkedin.com/in/siddh-yadav/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaLinkedin /> Connect on LinkedIn
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Hero
