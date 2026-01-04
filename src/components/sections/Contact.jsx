import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Contact = () => {

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'siddhyadav7464@gmail.com',
      href: 'mailto:siddhyadav7464@gmail.com'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+91 7023471442',
      href: 'tel:+917023471442'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Delhi, India',
      href: '#'
    }
  ]

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Siddh94', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/siddh-yadav/', label: 'LinkedIn' },
    { icon: FaLinkedin, href: 'https://leetcode.com/u/siddhyadav7464/', label: 'LeetCode' }
  ]

  return (
    <section id="contact" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm always interested in hearing about new opportunities and exciting projects.
            Let's discuss how we can work together!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        {info.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Follow Me
              </h3>
              <div className="flex space-x-4">
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
                    className="w-14 h-14 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800 hover:scale-110 transition-all duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Let's Build Something Together! 🚀
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Whether you need a full-stack developer, an AI/ML engineer, or someone to bring your startup idea to life,
                I'm ready to dive in and deliver results. From founding Roviraa to building AI products at AnacodicAI,
                I've proven I can learn fast and execute.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Available for Full-Time & Contract Opportunities</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
