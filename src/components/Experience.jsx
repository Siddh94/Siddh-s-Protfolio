import React from 'react'
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Experience = () => {
  const experience = [
    {
      id: 1,
      type: 'work',
      title: 'AI/ML Research',
      company: 'Self-Research Projects',
      location: 'Remote',
      period: '2023 - 2025',
      description: 'Conducted research on traffic safety systems using YOLOv5, published research paper. Developed AI tools for astrology compatibility and product recommendations.',
      skills: ['Python', 'YOLOv5', 'OpenCV', 'NLP', 'Research']
    },
    {
      id: 2,
      type: 'work',
      title: 'Full Stack Developer',
      company: 'Personal Projects',
      location: 'Remote',
      period: '2022 - 2024',
      description: 'Built emergency mental well-being platform with ReactJS + Spring Boot, Android quiz app with Java/XML, and various AI-powered applications.',
      skills: ['ReactJS', 'Spring Boot', 'Java', 'Android', 'MongoDB']
    },
    
  ]

  const education = [
    {
      id: 1,
      type: 'education',
      title: 'Bachelor of Computer Science Engineering',
      company: 'Chandigarh University',
      location: 'Mohali, India',
      period: '2021 - 2025',
      description: 'Specialized in Deep Learning, NLP, and Recommendation Systems. CGPA: 7.26. Published research paper on traffic safety systems.',
      skills: ['Computer Science', 'Deep Learning', 'NLP', 'Research', 'AI/ML']
    },
   
  ]

  const allItems = [...experience, ...education].sort((a, b) => {
    const aYear = parseInt(a.period.split(' ')[0])
    const bYear = parseInt(b.period.split(' ')[0])
    return bYear - aYear
  })

  return (
    <section id="experience" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional journey and academic background that have shaped me into the developer I am today.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 to-purple-400"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {allItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900 z-10 ${
                  item.type === 'education' ? 'bg-purple-600' : 'bg-primary-600'
                }`}></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="card p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        {item.type === 'education' ? (
                          <FaGraduationCap className="w-5 h-5 text-purple-600" />
                        ) : (
                          <FaBriefcase className="w-5 h-5 text-primary-600" />
                        )}
                        <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                          item.type === 'education' 
                            ? 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300'
                            : 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300'
                        }`}>
                          {item.type === 'education' ? 'Education' : 'Work'}
                        </span>
                      </div>
                    </div>

                    {/* Title & Company */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-3">
                      {item.company}
                    </p>

                    {/* Period & Location */}
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center space-x-2">
                        <FaCalendarAlt className="w-4 h-4" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FaMapMarkerAlt className="w-4 h-4" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {item.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Download Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Want to see more details?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Download my complete resume to get a comprehensive view of my experience, 
              skills, and achievements.
            </p>
                         <a 
               href="https://drive.google.com/file/d/1-BXMQlB2Q2ezevasn0yrjIWPOKwegcyn/view?usp=sharing" 
               target="_blank" 
               rel="noopener noreferrer"
               className="btn-primary inline-flex items-center"
             >
               Download Resume
             </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
