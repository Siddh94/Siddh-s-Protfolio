import React, { useState } from 'react'
import { FaGithub, FaExternalLinkAlt, FaCode, FaMobile, FaGlobe } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Astrology Compatibility Tool',
      description: 'Built a Python AI tool combining NLP-like analysis with astrological scoring. Used Kerykeion for chart generation and deployed on AWS S3 for result storage.',
      image: '/images/astrology.png',
      category: 'ai',
      tech: ['Python', 'Kerykeion', 'NLP', 'AWS S3', 'Streamlit'],
      github: 'https://github.com/Siddh94/astrology-compatibility-tool',
      demo: 'https://astrologycompatibilitytool.streamlit.app/',
      featured: true
    },
    {
      id: 2,
      title: 'User-Centric Product Recommendation System',
      description: 'Designed personalized recommendation engine with collaborative filtering. Flask API integration enabled real-time recommendations with 17% improved accuracy after tuning.',
      image: '/images/recommendation-system.png',
      category: 'ai',
      tech: ['Python', 'Flask', 'Collaborative Filtering', 'NumPy', 'TensorFlow'],
      github: 'https://github.com/Siddh94',
      demo: 'https://github.com/Siddh94',
      featured: true
    },
    {
      id: 3,
      title: 'Emergency & Mental Well-being Platform',
      description: 'Developed an SOS platform with ReactJS + Spring Boot, supporting live location sharing. Reduced alert delivery latency by 40% with backend optimization.',
      image: '/images/emergency-platform.png',
      category: 'web',
      tech: ['ReactJS', 'Spring Boot', 'MongoDB', 'Real-time', 'Location API'],
      github: 'https://github.com/Siddh94',
      demo: 'https://github.com/Siddh94',
      featured: true
    },
    {
      id: 4,
      title: 'Helmet & Number Plate Detection',
      description: 'Published research on traffic safety systems using YOLOv5. Built computer vision model for real-time detection and classification.',
      image: '/images/helmet-detection.png',
      category: 'ai',
      tech: ['Python', 'YOLOv5', 'OpenCV', 'Computer Vision', 'Research'],
      github: 'https://github.com/Siddh94',
      demo: 'https://github.com/Siddh94',
      featured: false
    },
    {
      id: 5,
      title: 'Android Quiz App',
      description: 'Feature-rich quiz app built with Java/XML and Firebase Firestore. Includes user authentication, real-time scoring, and offline capabilities.',
      image: '/images/quiz-app.png',
      category: 'mobile',
      tech: ['Java', 'Android', 'Firebase', 'XML', 'Real-time'],
      github: 'https://github.com/Siddh94',
      demo: 'https://github.com/Siddh94',
      featured: false
    },
    
  ]

  const categories = [
    { id: 'all', name: 'All Projects', icon: FaCode },
    { id: 'ai', name: 'AI/ML Projects', icon: FaGlobe },
    { id: 'web', name: 'Web Apps', icon: FaGlobe },
    { id: 'mobile', name: 'Mobile Apps', icon: FaMobile }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge 
            and an opportunity to learn and grow as a developer.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-600'
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span>{category.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`card overflow-hidden ${project.featured ? 'ring-2 ring-primary-500' : ''}`}
            >
                             {/* Project Image */}
               <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-700">
                 <img 
                   src={project.image} 
                   alt={project.title}
                   className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                   onError={(e) => {
                     e.target.style.display = 'none';
                     e.target.nextSibling.style.display = 'flex';
                   }}
                   loading="lazy"
                 />
                 {/* Fallback placeholder */}
                 <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 opacity-0 hover:opacity-100 transition-opacity duration-300">
                   <div className="text-center">
                     <span className="text-4xl text-gray-400 dark:text-gray-500 block mb-2">🖼️</span>
                     <span className="text-sm text-gray-500 dark:text-gray-400">Project Preview</span>
                   </div>
                 </div>
                 {project.featured && (
                   <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                     Featured
                   </div>
                 )}
               </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="btn-primary">
            View More Projects
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
