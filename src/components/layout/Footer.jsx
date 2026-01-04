import React from 'react'
import { FaGithub, FaLinkedin, FaArrowUp, FaHeart } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Siddh94', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/siddh-yadav/', label: 'LinkedIn' },
    { icon: FaLinkedin, href: 'https://leetcode.com/u/siddhyadav7464/', label: 'LeetCode' }
  ]

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container-custom">
        <div className="py-12">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold gradient-text mb-4">Siddh Yadav</h3>
              <p className="text-gray-400 mb-4 max-w-xs">
                Full-Stack Developer & AI/ML Engineer. Building intelligent, production-ready solutions
                from database to deployment. Let's build something amazing together.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Projects', 'Experience', 'Skills', 'Contact'].map((link, index) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <button
                      onClick={() => {
                        const element = document.querySelector(`#${link.toLowerCase()}`)
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' })
                        }
                      }}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>siddhyadav7464@gmail.com</p>
                <p>+91 7023471442</p>
                <p>Delhi, India</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center md:text-left text-gray-400"
              >
                <p>
                  © {new Date().getFullYear()} Siddh Yadav. All rights reserved using React & TailwindCSS
                </p>
              </motion.div>

              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105"
                aria-label="Back to top"
              >
                <FaArrowUp className="w-4 h-4" />
                <span>Back to Top</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black dark:bg-gray-950 py-4">
        <div className="container-custom">
          <div className="text-center text-gray-500 text-sm">
            <p>
              Built with modern web technologies • Responsive design • Optimized for performance
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
