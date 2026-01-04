import React from 'react'
import { FaDownload, FaCode, FaPalette, FaRocket } from 'react-icons/fa'
import { motion } from 'framer-motion'

const About = () => {
  const features = [
    {
      icon: FaCode,
      title: 'AI/ML Development',
      description: 'Expertise in Deep Learning, NLP, and building personalized recommendation systems.'
    },
    {
      icon: FaPalette,
      title: 'Research & Innovation',
      description: 'Published research on traffic safety systems and advancing LLM applications.'
    },
    {
      icon: FaRocket,
      title: 'Full Stack Solutions',
      description: 'End-to-end development from ML models to production-ready applications.'
    }
  ]

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Get to know me better and understand what drives my passion for development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Who I Am
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                I'm a Full-Stack Developer and AI/ML enthusiast with a proven ability to learn fast and deliver results.
                As the founder of Roviraa, I built an entire e-commerce platform from scratch handling everything from
                database design to deployment. This hands-on experience has sharpened my skills across the full stack.
              </p>
              <p>
                My journey spans multiple roles: developing multi-tenant educational systems at Qvolv Technologies,
                co-founding AnacodicAI to build AI automation products, and publishing research on computer vision.
                Each role has pushed me to master new technologies quickly from React and Node.js to Python ML pipelines.
              </p>
              <p>
                I thrive in environments where I can combine my full-stack development expertise with AI/ML capabilities
                to build intelligent, production-ready solutions. I'm actively seeking opportunities where I can contribute
                to innovative projects while continuing to grow as an engineer.
              </p>
            </div>

            {/* Download CV Button */}
            <div className="mt-8">
              <a
                href="https://drive.google.com/file/d/1RvjU0vcM-v6W6XjcnvJI8F08BZ4WaQV6/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center"
              >
                <FaDownload className="inline mr-2" />
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Right Content - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Certifications & Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Certifications & Achievements
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Core Java</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Internshala</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Mobile Development</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Coursera</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Web Development</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Coursera</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Data Structures & Performance</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Coursera</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Published Research Paper</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Helmet & Number Plate Detection Using YOLOv5</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">LeetCode Achievement</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">130+ Problems Solved</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Advance AI Research Together?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm actively seeking a Research Consultant role to advance user engagement models using LLMs.
              Whether you have a research opportunity or want to discuss AI/ML projects, let's connect!
            </p>
            <a
              href="mailto:siddhyadav7464@gmail.com?subject=AI/ML Engineer Opportunity Discussion&body=Hi Siddh,%0D%0A%0D%0AI'd like to discuss AI/ML engineering opportunities with you.%0D%0A%0D%0ABest regards,"
              className="btn-secondary inline-block"
            >
              Let's Talk
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
