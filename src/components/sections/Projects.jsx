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
      title: 'Enterprise Network Security Lab',
      description: 'Built a lab environment simulating enterprise Zscaler deployment with ZIA for internet security and ZPA for private access. Configured SSL inspection policies, URL filtering, and firewall rules. Analyzed network traffic using Wireshark and Zscaler logs.',
      image: '/images/security-lab.png',
      category: 'security',
      tech: ['Zscaler ZIA/ZPA', 'Wireshark', 'PAC Files', 'SSL Inspection', 'Zero Trust'],
      github: 'https://github.com/Siddh94',
      demo: '#',
      featured: true
    },
    {
      id: 1,
      title: 'Secure Authentication System',
      description: 'Engineered a production-grade authentication system with JWT token management, bcrypt hashing, and session handling. Implemented RBAC middleware and OWASP security best practices.',
      image: '/images/auth-system.png',
      category: 'web',
      tech: ['Node.js', 'JWT', 'bcrypt', 'REST APIs', 'RBAC', 'OWASP'],
      github: 'https://github.com/Siddh94',
      featured: true
    },
    {
      id: 2,
      title: 'Roviraa - E-Commerce Platform',
      description: 'Architected and launched a production-ready e-commerce platform with secure authentication and role-based access. Optimized for performance achieving 90+ Lighthouse score with robust database architecture.',
      image: '/images/roviraa.png',
      category: 'web',
      tech: ['Next.js', 'TypeScript', 'Prisma', 'MySQL', 'JWT'],
      demo: 'https://www.roviraa.com',
      featured: true
    },
    {
      id: 3,
      title: 'Helmet & Number Plate Detection',
      description: 'Published research on traffic safety systems using YOLOv5. Built computer vision model for real-time detection and classification.',
      image: '/images/helmet-detection.png',
      category: 'other',
      tech: ['Python', 'YOLOv5', 'OpenCV'],
      github: 'https://github.com/Siddh94',
      featured: false
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects', icon: FaCode },
    { id: 'security', name: 'Security & Network', icon: FaGlobe },
    { id: 'web', name: 'Web Apps', icon: FaGlobe },
    { id: 'other', name: 'Other Projects', icon: FaGlobe }
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
