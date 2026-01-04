import React, { useState, useRef } from 'react'
import { FaGithub, FaExternalLinkAlt, FaCode, FaMobile, FaGlobe } from 'react-icons/fa'
import { motion } from 'framer-motion'

// 3D Tilt Card Component
const TiltCard = ({ children, className }) => {
  const cardRef = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10
    setTilt({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setIsHovering(false)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transformStyle: 'preserve-3d',
      }}
      className={`${className} transition-transform duration-200 ease-out`}
    >
      {children}
      {isHovering && (
        <div
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${50 + tilt.y * 5}% ${50 + tilt.x * 5}%, rgba(139, 92, 246, 0.15), transparent 50%)`,
          }}
        />
      )}
    </motion.div>
  )
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 0,
      title: 'Roviraa - E-Commerce Platform',
      description: 'Founded and built a premium e-commerce platform for pure, unadulterated products. Full-stack application with Next.js, Node.js, and MySQL. Features include real-time wishlist sync, dynamic product catalog, user authentication, and optimized performance.',
      image: '/images/roviraa.png',
      category: 'startup',
      tech: ['Next.js', 'Node.js', 'MySQL', 'Prisma', 'TailwindCSS', 'TypeScript'],
      github: 'https://github.com/Siddh94',
      demo: 'https://www.roviraa.com',
      featured: true
    },
    {
      id: 1,
      title: 'AnacodicAI - AI Automation Platform',
      description: 'Co-founded a platform showcasing AI automation products including BoozeBuddy, Feedback AI, Pharmacy Assistant, and AstroAI. Built full-stack app with React, TypeScript, and MySQL. Implemented interactive dashboards, AI chat interfaces, and real-time routing.',
      image: '/images/anacodicai.png',
      category: 'startup',
      tech: ['React', 'TypeScript', 'Node.js', 'MySQL', 'Tailwind CSS', 'Vite'],
      github: 'https://github.com/Siddh94',
      demo: 'https://www.anacodicai.com/',
      featured: true
    },
    {
      id: 2,
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
      id: 3,
      title: 'Fraud Detection System using Machine Learning',
      description: 'Built an end-to-end fraud detection pipeline on 10K+ transactions; applied preprocessing, feature engineering, and SMOTE for class imbalance. Achieved 99.82% ROC AUC and integrated SHAP-based interpretability for automated risk scoring.',
      image: '/images/fraud-detection.png',
      category: 'ai',
      tech: ['Python', 'Scikit-learn', 'XGBoost', 'LightGBM', 'Random Forest', 'SHAP', 'SMOTE'],
      github: 'https://github.com/Siddh94/-Fraud-Detection-System',
      featured: true
    },
    {
      id: 4,
      title: 'Local AI Chatbot with Memory Management',
      description: 'Developed a local chatbot using Python and Hugging Face Transformers (DistilGPT-2) with sliding-window memory to maintain context. Built modular CLI architecture with GPU acceleration and robust error handling.',
      image: '/images/local-ai-chatbot.png',
      category: 'ai',
      tech: ['Python', 'PyTorch', 'Transformers', 'CLI', 'Memory Buffer', 'GPU Acceleration'],
      github: 'https://github.com/Siddh94/Local-AI-Chatbot-with-Memory-Management',
      featured: true
    },


    {
      id: 5,
      title: 'Emergency & Mental Well-being Platform',
      description: 'Developed an SOS platform with ReactJS + Spring Boot, supporting live location sharing. Reduced alert delivery latency by 40% with backend optimization.',
      image: '/images/emergency-platform.png',
      category: 'web',
      tech: ['ReactJS', 'Spring Boot', 'MongoDB', 'Real-time', 'Location API'],
      github: 'https://github.com/Siddh94',
      featured: true
    },
    {
      id: 6,
      title: 'Helmet & Number Plate Detection',
      description: 'Published research on traffic safety systems using YOLOv5. Built computer vision model for real-time detection and classification.',
      image: '/images/helmet-detection.png',
      category: 'ai',
      tech: ['Python', 'YOLOv5', 'OpenCV', 'Computer Vision', 'Research'],
      github: 'https://github.com/Siddh94',
      featured: false
    },
    {
      id: 7,
      title: 'Android Quiz App',
      description: 'Feature-rich quiz app built with Java/XML and Firebase Firestore. Includes user authentication, real-time scoring, and offline capabilities.',
      image: '/images/quiz-app.png',
      category: 'mobile',
      tech: ['Java', 'Android', 'Firebase', 'XML', 'Real-time'],
      github: 'https://github.com/Siddh94',
      featured: false
    },
    {
      id: 8,
      title: 'User-Centric Product Recommendation System',
      description: 'Designed personalized recommendation engine with collaborative filtering. Flask API integration enabled real-time recommendations with 17% improved accuracy after tuning.',
      image: '/images/recommendation-system.png',
      category: 'ai',
      tech: ['Python', 'Flask', 'Collaborative Filtering', 'NumPy', 'TensorFlow'],
      github: 'https://github.com/Siddh94',
      featured: true
    },


  ]

  const categories = [
    { id: 'all', name: 'All Projects', icon: FaCode },
    { id: 'startup', name: 'My Startups', icon: FaGlobe },
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
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeFilter === category.id
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-600'
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
            >
              <TiltCard className={`card-glass overflow-hidden relative ${project.featured ? 'ring-2 ring-primary-500' : ''}`}>
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-700 group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                    loading="lazy"
                  />
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
              </TiltCard>
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
