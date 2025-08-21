import React from 'react'
import { FaCode, FaTools, FaDatabase, FaCloud, FaMobile, FaPalette } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      id: 'ai',
      title: 'AI/ML & Deep Learning',
      icon: FaCode,
      skills: [
        { name: 'Python', level: 80 },
        { name: 'TensorFlow', level: 80 },
        { name: 'Scikit-learn', level: 70 },
        { name: 'Pandas/NumPy', level: 70 },
        { name: 'Hugging Face', level: 70 },
        { name: 'OpenCV', level: 70 }
      ]
    },
    {
      id: 'backend',
      title: 'Backend & Development',
      icon: FaTools,
      skills: [
        { name: 'Java', level: 80 },
        { name: 'Spring Boot', level: 70 },
        { name: 'Flask', level: 70 },
        { name: 'REST APIs', level: 80 },
        { name: 'Docker', level: 70 },
        { name: 'Git/GitHub', level: 80 }
      ]
    },
    {
      id: 'database',
      title: 'Database & Cloud',
      icon: FaDatabase,
      skills: [
        { name: 'MongoDB', level: 70 },
        { name: 'MySQL', level: 70 },
        { name: 'Firebase', level: 75 },
        { name: 'AWS S3', level: 70 },
        { name: 'CSV Processing', level: 80 },
        { name: 'Postman', level: 70 }
      ]
    },
    {
      id: 'mobile',
      title: 'Mobile & Frontend',
      icon: FaMobile,
      skills: [
        { name: 'Android Development', level: 80 },
        { name: 'ReactJS', level: 75 },
        { name: 'Java/XML', level: 80 },
        { name: 'HTML/CSS/JS', level: 80 }
      ]
    },
    {
      id: 'specializations',
      title: 'Specializations',
      icon: FaPalette,
      skills: [
        { name: 'NLP', level: 90 },
        { name: 'Recommendation Systems', level: 80 },
        { name: 'LLM Fine-tuning', level: 75 },
        { name: 'Computer Vision', level: 75 },
        { name: 'Data Preprocessing', level: 80 },
        { name: 'Model Evaluation', level: 80 }
      ]
    }
  ]

  const ProgressBar = ({ skill, delay }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="mb-4"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {skill.name}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: delay + 0.2 }}
          viewport={{ once: true }}
          className="h-2 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full"
        />
      </div>
    </motion.div>
  )

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and expertise across various 
            technologies and development domains.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills Progress */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <ProgressBar
                    key={skill.name}
                    skill={skill}
                    delay={categoryIndex * 0.1 + skillIndex * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Other Skills & Technologies
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'REST APIs', 'GraphQL', 'Microservices', 'CI/CD',
                'Agile/Scrum', 'Testing', 'Performance', 'Security',
                'SEO', 'Analytics', 'CMS', 'E-commerce',
                'PWA', 'WebRTC', 'WebGL', 'Blockchain'
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors duration-200"
                >
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Always Learning & Growing
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Technology evolves rapidly, and I'm committed to staying current with the latest 
              trends and best practices. Currently exploring new technologies and frameworks.
            </p>
                         <div className="flex flex-wrap justify-center gap-4">
               <span className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                 Currently Learning: Advanced LLM Applications
               </span>
               <span className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                 Exploring: AI/ML Engineer Opportunities
               </span>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
