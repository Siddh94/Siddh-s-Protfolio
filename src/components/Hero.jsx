import React from 'react'
import { FaBarcode, FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Hero = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Siddh94', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/siddh-yadav/', label: 'LinkedIn' },
    { icon: FaBarcode, href: 'https://leetcode.com/u/siddhyadav7464/', label: 'LeetCode' }
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container-custom section-padding">
                                   <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
                                                   className="text-center lg:text-left"
          >
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
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6"
            >
                             AI/ML Engineer & Full Stack Developer
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
                                                           className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Computer Science Engineering graduate specializing in Deep Learning, NLP, and Recommendation Systems. 
              Passionate about advancing user engagement models using LLMs and contributing to cutting-edge AI research.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
                                                           className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
                             <motion.a 
                 href="https://drive.google.com/file/d/1-BXMQlB2Q2ezevasn0yrjIWPOKwegcyn/view?usp=sharing" 
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

                           {/* Right Content - Simple Profile Photo */}
              <div
                className="flex justify-center lg:justify-end"
              >
               <div className="relative">
                                   {/* Simple Profile Image */}
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl border-4 border-primary-500 overflow-hidden">
                    <img
                      src="/images/passportphoto.png"
                      alt="Siddh Yadav - AI/ML Engineer"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: 'center 15%' }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback placeholder */}
                    <div className="w-full h-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
                      <span className="text-4xl text-gray-600 dark:text-gray-400">👤</span>
                    </div>
                  </div>
               </div>
             </div>
         </div>
      </div>
    </section>
  )
}

export default Hero
